import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate, useParams } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface TeamFormData {
  name: string;
  division: string;
  age_group: string;
  description: string;
  season: string;
  coach: string;
  team_manager: string;
  active: boolean;
}

const TeamForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditing = Boolean(id);

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<TeamFormData>({
    name: '',
    division: '',
    age_group: '',
    description: '',
    season: '',
    coach: '',
    team_manager: '',
    active: true,
  });

  useEffect(() => {
    if (isEditing && id) {
      fetchTeam(id);
    }
  }, [isEditing, id]);

  const fetchTeam = async (teamId: string) => {
    try {
      const { data, error } = await supabase
        .from('teams')
        .select('*')
        .eq('id', teamId)
        .single();

      if (error) throw error;

      setFormData({
        name: data.name,
        division: data.division || '',
        age_group: data.age_group || '',
        description: data.description || '',
        season: data.season || '',
        coach: data.coach || '',
        team_manager: data.team_manager || '',
        active: data.active,
      });
    } catch (error) {
      console.error('Error fetching team:', error);
      toast({
        title: 'Error',
        description: 'Failed to load team',
        variant: 'destructive',
      });
      navigate('/admin/teams');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isEditing && id) {
        const { error } = await supabase
          .from('teams')
          .update(formData)
          .eq('id', id);

        if (error) throw error;

        toast({
          title: 'Success',
          description: 'Team updated successfully',
        });
      } else {
        const { error } = await supabase
          .from('teams')
          .insert([formData]);

        if (error) throw error;

        toast({
          title: 'Success',
          description: 'Team created successfully',
        });
      }

      navigate('/admin/teams');
    } catch (error) {
      console.error('Error saving team:', error);
      toast({
        title: 'Error',
        description: 'Failed to save team',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field: keyof TeamFormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {isEditing ? 'Edit Team' : 'Create New Team'}
        </h1>
        <p className="text-muted-foreground">
          {isEditing ? 'Update team information' : 'Add a new team to your club'}
        </p>
      </div>

      <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>Team Details</CardTitle>
          <CardDescription>
            Fill in the information for your team
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Team Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter team name"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="division">Division</Label>
                <Input
                  id="division"
                  value={formData.division}
                  onChange={(e) => handleInputChange('division', e.target.value)}
                  placeholder="e.g. Premier League, Division 1"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="age_group">Age Group</Label>
                <Input
                  id="age_group"
                  value={formData.age_group}
                  onChange={(e) => handleInputChange('age_group', e.target.value)}
                  placeholder="e.g. U18, Senior, Masters"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="season">Season</Label>
              <Input
                id="season"
                value={formData.season}
                onChange={(e) => handleInputChange('season', e.target.value)}
                placeholder="e.g. 2024-2025"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="coach">Coach</Label>
                <Input
                  id="coach"
                  value={formData.coach}
                  onChange={(e) => handleInputChange('coach', e.target.value)}
                  placeholder="Enter coach name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="team_manager">Team Manager</Label>
                <Input
                  id="team_manager"
                  value={formData.team_manager}
                  onChange={(e) => handleInputChange('team_manager', e.target.value)}
                  placeholder="Enter team manager name"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Describe the team, achievements, goals..."
                className="min-h-[120px]"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="active"
                checked={formData.active}
                onCheckedChange={(checked) => handleInputChange('active', checked)}
              />
              <Label htmlFor="active">Active team</Label>
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" disabled={loading}>
                {loading ? (isEditing ? 'Updating...' : 'Creating...') : (isEditing ? 'Update Team' : 'Create Team')}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate('/admin/teams')}
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

export default TeamForm;