import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface SponsorFormData {
  name: string;
  logo_path: string;
  website_url: string;
  description: string;
  tier: 'title' | 'gold' | 'silver' | 'bronze';
  active: boolean;
}

const SponsorForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [formData, setFormData] = useState<SponsorFormData>({
    name: '',
    logo_path: '',
    website_url: '',
    description: '',
    tier: 'bronze',
    active: true,
  });

  useEffect(() => {
    if (isEditing && id) {
      fetchSponsor(id);
    }
  }, [isEditing, id]);

  const fetchSponsor = async (sponsorId: string) => {
    try {
      const { data, error } = await supabase
        .from('sponsors')
        .select('*')
        .eq('id', sponsorId)
        .single();

      if (error) throw error;

      setFormData({
        name: data.name,
        logo_path: data.logo_path || '',
        website_url: data.website_url || '',
        description: data.description || '',
        tier: data.tier as 'title' | 'gold' | 'silver' | 'bronze',
        active: data.active,
      });
    } catch (error) {
      console.error('Error fetching sponsor:', error);
      toast({
        title: 'Error',
        description: 'Failed to load sponsor',
        variant: 'destructive',
      });
      navigate('/admin/sponsors');
    }
  };

  const uploadLogo = async (): Promise<string | null> => {
    if (!logoFile) return formData.logo_path;
    
    setUploading(true);
    try {
      const fileExt = logoFile.name.split('.').pop();
      const fileName = `${Date.now()}_${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('sponsor-logos')
        .upload(filePath, logoFile);

      if (uploadError) throw uploadError;

      return filePath;
    } catch (error) {
      console.error('Error uploading logo:', error);
      throw error;
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const logoPath = await uploadLogo();
      const submitData = { ...formData, logo_path: logoPath };

      if (isEditing && id) {
        const { error } = await supabase
          .from('sponsors')
          .update(submitData)
          .eq('id', id);

        if (error) throw error;

        toast({
          title: 'Success',
          description: 'Sponsor updated successfully',
        });
      } else {
        const { error } = await supabase
          .from('sponsors')
          .insert([submitData]);

        if (error) throw error;

        toast({
          title: 'Success',
          description: 'Sponsor created successfully',
        });
      }

      navigate('/admin/sponsors');
    } catch (error) {
      console.error('Error saving sponsor:', error);
      toast({
        title: 'Error',
        description: 'Failed to save sponsor',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof SponsorFormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {isEditing ? 'Edit Sponsor' : 'Add New Sponsor'}
        </h1>
        <p className="text-muted-foreground">
          {isEditing ? 'Update sponsor information' : 'Add a new sponsor to your club'}
        </p>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Sponsor Details</CardTitle>
          <CardDescription>
            Fill in the information for your sponsor
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Sponsor Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter sponsor name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tier">Sponsorship Tier *</Label>
              <Select value={formData.tier} onValueChange={(value: 'title' | 'gold' | 'silver' | 'bronze') => handleInputChange('tier', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select tier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Title Sponsor</SelectItem>
                  <SelectItem value="gold">Gold Sponsor</SelectItem>
                  <SelectItem value="silver">Silver Sponsor</SelectItem>
                  <SelectItem value="bronze">Bronze Sponsor</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="logo">Logo Upload</Label>
              <Input
                id="logo"
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    setLogoFile(file);
                  }
                }}
              />
              {formData.logo_path && (
                <div className="mt-2">
                  <p className="text-sm text-muted-foreground">Current logo: {formData.logo_path}</p>
                  <img 
                    src={`${supabase.storage.from('sponsor-logos').getPublicUrl(formData.logo_path).data.publicUrl}`}
                    alt="Current logo"
                    className="mt-2 h-16 object-contain rounded border"
                  />
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="website_url">Website URL</Label>
              <Input
                id="website_url"
                type="url"
                value={formData.website_url}
                onChange={(e) => handleInputChange('website_url', e.target.value)}
                placeholder="https://sponsor-website.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Describe the sponsor, partnership details..."
                className="min-h-[120px]"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="active"
                checked={formData.active}
                onCheckedChange={(checked) => handleInputChange('active', checked)}
              />
              <Label htmlFor="active">Active sponsor</Label>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" disabled={loading || uploading}>
                {(loading || uploading) ? (isEditing ? 'Updating...' : 'Creating...') : (isEditing ? 'Update Sponsor' : 'Add Sponsor')}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/admin/sponsors')}
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

export default SponsorForm;