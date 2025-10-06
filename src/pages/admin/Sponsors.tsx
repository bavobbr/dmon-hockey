import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface Sponsor {
  id: string;
  name: string;
  logo_path: string;
  website_url: string;
  description: string;
  tier: 'diamond' | 'gold' | 'silver' | 'bronze';
  active: boolean;
  created_at: string;
}

const Sponsors = () => {
  const { toast } = useToast();
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchSponsors = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('sponsors')
        .select('*')
        .order('tier', { ascending: true });

      if (error) throw error;
      setSponsors((data || []) as Sponsor[]);
    } catch (error) {
      console.error('Error fetching sponsors:', error);
      toast({
        title: 'Error',
        description: 'Failed to load sponsors',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchSponsors();
  }, [fetchSponsors]);

  const deleteSponsor = async (id: string) => {
    if (!confirm('Are you sure you want to delete this sponsor?')) return;

    try {
      const { error } = await supabase
        .from('sponsors')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setSponsors(sponsors.filter(s => s.id !== id));
      toast({
        title: 'Success',
        description: 'Sponsor deleted successfully',
      });
    } catch (error) {
      console.error('Error deleting sponsor:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete sponsor',
        variant: 'destructive',
      });
    }
  };

  const toggleActive = async (id: string, active: boolean) => {
    try {
      const { error } = await supabase
        .from('sponsors')
        .update({ active: !active })
        .eq('id', id);

      if (error) throw error;

      setSponsors(sponsors.map(s => 
        s.id === id ? { ...s, active: !active } : s
      ));
      
      toast({
        title: 'Success',
        description: `Sponsor ${!active ? 'activated' : 'deactivated'} successfully`,
      });
    } catch (error) {
      console.error('Error updating sponsor:', error);
      toast({
        title: 'Error',
        description: 'Failed to update sponsor',
        variant: 'destructive',
      });
    }
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'diamond': return 'bg-blue-500 text-white';
      case 'gold': return 'bg-yellow-500 text-white';
      case 'silver': return 'bg-gray-400 text-white';
      case 'bronze': return 'bg-orange-600 text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-32 bg-muted rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Sponsors
          </h1>
          <p className="text-muted-foreground">
            Manage your club sponsors and partnerships
          </p>
        </div>
        <Link to="/admin/sponsors/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Sponsor
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        {sponsors.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground mb-4">No sponsors yet</p>
              <Link to="/admin/sponsors/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add your first sponsor
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          sponsors.map((sponsor) => (
            <Card key={sponsor.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4 flex-1">
                    {sponsor.logo_path && (
                      <img 
                        src={supabase.storage.from('sponsor-logos').getPublicUrl(sponsor.logo_path).data.publicUrl}
                        alt={sponsor.name}
                        className="w-16 h-16 object-contain rounded border"
                      />
                    )}
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        {sponsor.name}
                        <Badge className={getTierColor(sponsor.tier)}>
                          {sponsor.tier.toUpperCase()}
                        </Badge>
                        <Badge variant={sponsor.active ? "default" : "outline"}>
                          {sponsor.active ? 'Active' : 'Inactive'}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        {sponsor.website_url && (
                          <a 
                            href={sponsor.website_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-primary hover:underline"
                          >
                            Visit Website <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleActive(sponsor.id, sponsor.active)}
                    >
                      {sponsor.active ? 'Deactivate' : 'Activate'}
                    </Button>
                    <Link to={`/admin/sponsors/edit/${sponsor.id}`}>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteSponsor(sponsor.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              {sponsor.description && (
                <CardContent>
                  <p className="text-muted-foreground">{sponsor.description}</p>
                </CardContent>
              )}
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default Sponsors;