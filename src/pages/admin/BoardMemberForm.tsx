import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface BoardMemberFormData {
  name: string;
  position: string;
  bio: string;
  photo_url: string;
  email: string;
  phone: string;
  order_index: number;
  active: boolean;
}

const BoardMemberForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<BoardMemberFormData>({
    name: '',
    position: '',
    bio: '',
    photo_url: '',
    email: '',
    phone: '',
    order_index: 0,
    active: true,
  });

  useEffect(() => {
    if (isEditing && id) {
      fetchBoardMember(id);
    }
  }, [isEditing, id]);

  const fetchBoardMember = async (memberId: string) => {
    try {
      const { data, error } = await supabase
        .from('board_members')
        .select('*')
        .eq('id', memberId)
        .single();

      if (error) throw error;

      setFormData({
        name: data.name,
        position: data.position,
        bio: data.bio || '',
        photo_url: data.photo_url || '',
        email: data.email || '',
        phone: data.phone || '',
        order_index: data.order_index,
        active: data.active,
      });
    } catch (error) {
      console.error('Error fetching board member:', error);
      toast({
        title: 'Error',
        description: 'Failed to load board member',
        variant: 'destructive',
      });
      navigate('/admin/board-members');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isEditing && id) {
        const { error } = await supabase
          .from('board_members')
          .update(formData)
          .eq('id', id);

        if (error) throw error;

        toast({
          title: 'Success',
          description: 'Bestuurslid succesvol bijgewerkt',
        });
      } else {
        const { error } = await supabase
          .from('board_members')
          .insert([formData]);

        if (error) throw error;

        toast({
          title: 'Success',
          description: 'Bestuurslid succesvol toegevoegd',
        });
      }

      navigate('/admin/board-members');
    } catch (error) {
      console.error('Error saving board member:', error);
      toast({
        title: 'Error',
        description: 'Failed to save board member',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof BoardMemberFormData, value: string | number | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {isEditing ? 'Bestuurslid bewerken' : 'Nieuw bestuurslid toevoegen'}
        </h1>
        <p className="text-muted-foreground">
          {isEditing ? 'Bestuurslid informatie bijwerken' : 'Voeg een nieuw lid toe aan uw bestuur'}
        </p>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Board Member Details</CardTitle>
          <CardDescription>
            Fill in the information for your board member
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="position">Position *</Label>
                <Input
                  id="position"
                  value={formData.position}
                  onChange={(e) => handleInputChange('position', e.target.value)}
                  placeholder="e.g. President, Secretary, Treasurer"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="photo_url">Photo URL</Label>
              <Input
                id="photo_url"
                type="url"
                value={formData.photo_url}
                onChange={(e) => handleInputChange('photo_url', e.target.value)}
                placeholder="https://example.com/photo.jpg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="email@example.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+32 123 456 789"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="order_index">Display Order</Label>
              <Input
                id="order_index"
                type="number"
                min="0"
                value={formData.order_index}
                onChange={(e) => handleInputChange('order_index', parseInt(e.target.value) || 0)}
                placeholder="0"
              />
              <p className="text-sm text-muted-foreground">Lower numbers appear first</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Biography</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => handleInputChange('bio', e.target.value)}
                placeholder="Brief biography and background..."
                className="min-h-[120px]"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="active"
                checked={formData.active}
                onCheckedChange={(checked) => handleInputChange('active', checked)}
              />
              <Label htmlFor="active">Active board member</Label>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" disabled={loading}>
                {loading ? (isEditing ? 'Bijwerken...' : 'Toevoegen...') : (isEditing ? 'Bestuurslid bijwerken' : 'Bestuurslid toevoegen')}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/admin/board-members')}
              >
                Annuleren
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BoardMemberForm;