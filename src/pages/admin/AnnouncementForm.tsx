import { useState, useEffect, useRef } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface AnnouncementFormData {
  title: string;
  content: string;
  excerpt: string;
  featured: boolean;
  published: boolean;
}

const AnnouncementForm = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);
  const quillRef = useRef<ReactQuill>(null);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<AnnouncementFormData>({
    title: '',
    content: '',
    excerpt: '',
    featured: false,
    published: false,
  });

  useEffect(() => {
    if (isEditing && id) {
      fetchAnnouncement(id);
    }
  }, [isEditing, id]);

  const fetchAnnouncement = async (announcementId: string) => {
    try {
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .eq('id', announcementId)
        .single();

      if (error) throw error;

      setFormData({
        title: data.title,
        content: data.content,
        excerpt: data.excerpt || '',
        featured: data.featured,
        published: data.published,
      });
    } catch (error) {
      console.error('Error fetching announcement:', error);
      toast({
        title: 'Error',
        description: 'Failed to load announcement',
        variant: 'destructive',
      });
      navigate('/admin/announcements');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);

    try {
      const announcementData = {
        ...formData,
        author_id: user.id,
      };

      if (isEditing && id) {
        const { error } = await supabase
          .from('announcements')
          .update(announcementData)
          .eq('id', id);

        if (error) throw error;

        toast({
          title: 'Success',
          description: 'Announcement updated successfully',
        });
      } else {
        const { error } = await supabase
          .from('announcements')
          .insert([announcementData]);

        if (error) throw error;

        toast({
          title: 'Success',
          description: 'Announcement created successfully',
        });
      }

      navigate('/admin/announcements');
    } catch (error) {
      console.error('Error saving announcement:', error);
      toast({
        title: 'Error',
        description: 'Failed to save announcement',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof AnnouncementFormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  // Image upload handler for React Quill
  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      try {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
        
        const { data, error } = await supabase.storage
          .from('announcement-images')
          .upload(fileName, file);

        if (error) {
          toast({
            title: 'Error',
            description: 'Failed to upload image',
            variant: 'destructive',
          });
          return;
        }

        const { data: { publicUrl } } = supabase.storage
          .from('announcement-images')
          .getPublicUrl(data.path);

        const quill = quillRef.current?.getEditor();
        if (quill) {
          const range = quill.getSelection();
          quill.insertEmbed(range?.index || 0, 'image', publicUrl);
        }
      } catch (error) {
        console.error('Error uploading image:', error);
        toast({
          title: 'Error',
          description: 'Failed to upload image',
          variant: 'destructive',
        });
      }
    };
  };

  const modules = {
    toolbar: {
      container: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'color': [] }, { 'background': [] }],
        ['link', 'image'],
        ['clean']
      ],
      handlers: {
        image: imageHandler,
      },
    },
  };

  const formats = [
    'header', 'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'color', 'background', 'link', 'image'
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {isEditing ? 'Edit Announcement' : 'Create New Announcement'}
        </h1>
        <p className="text-muted-foreground">
          {isEditing ? 'Update your announcement details' : 'Create a new announcement for the club'}
        </p>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Announcement Details</CardTitle>
          <CardDescription>
            Fill in the information for your announcement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="Enter announcement title"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Input
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => handleInputChange('excerpt', e.target.value)}
                placeholder="Brief summary of the announcement"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="content">Content *</Label>
              <div className="min-h-[300px] w-full">
                <ReactQuill
                  key="content-editor"
                  ref={quillRef}
                  value={formData.content}
                  onChange={(value) => handleInputChange('content', value)}
                  modules={modules}
                  formats={formats}
                  placeholder="Write your announcement content here..."
                  theme="snow"
                  className="h-[250px]"
                  preserveWhitespace
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="featured"
                checked={formData.featured}
                onCheckedChange={(checked) => handleInputChange('featured', checked)}
              />
              <Label htmlFor="featured">Featured announcement</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="published"
                checked={formData.published}
                onCheckedChange={(checked) => handleInputChange('published', checked)}
              />
              <Label htmlFor="published">Publish immediately</Label>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" disabled={loading}>
                {loading ? (isEditing ? 'Updating...' : 'Creating...') : (isEditing ? 'Update Announcement' : 'Create Announcement')}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/admin/announcements')}
              >
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnnouncementForm;