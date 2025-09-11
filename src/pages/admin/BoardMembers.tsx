import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface BoardMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  photo_url: string;
  email: string;
  phone: string;
  order_index: number;
  active: boolean;
  created_at: string;
}

const BoardMembers = () => {
  const { toast } = useToast();
  const [boardMembers, setBoardMembers] = useState<BoardMember[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBoardMembers = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('board_members')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setBoardMembers(data || []);
    } catch (error) {
      console.error('Error fetching board members:', error);
      toast({
        title: 'Error',
        description: 'Failed to load board members',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchBoardMembers();
  }, [fetchBoardMembers]);

  const deleteBoardMember = async (id: string) => {
    if (!confirm('Are you sure you want to delete this board member?')) return;

    try {
      const { error } = await supabase
        .from('board_members')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setBoardMembers(boardMembers.filter(b => b.id !== id));
      toast({
        title: 'Success',
        description: 'Board member deleted successfully',
      });
    } catch (error) {
      console.error('Error deleting board member:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete board member',
        variant: 'destructive',
      });
    }
  };

  const toggleActive = async (id: string, active: boolean) => {
    try {
      const { error } = await supabase
        .from('board_members')
        .update({ active: !active })
        .eq('id', id);

      if (error) throw error;

      setBoardMembers(boardMembers.map(b => 
        b.id === id ? { ...b, active: !active } : b
      ));
      
      toast({
        title: 'Success',
        description: `Board member ${!active ? 'activated' : 'deactivated'} successfully`,
      });
    } catch (error) {
      console.error('Error updating board member:', error);
      toast({
        title: 'Error',
        description: 'Failed to update board member',
        variant: 'destructive',
      });
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
            Board Members
          </h1>
          <p className="text-muted-foreground">
            Manage your club's executive board and leadership team
          </p>
        </div>
        <Link to="/admin/board-members/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Board Member
          </Button>
        </Link>
      </div>

      <div className="space-y-4">
        {boardMembers.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground mb-4">No board members yet</p>
              <Link to="/admin/board-members/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add your first board member
                </Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          boardMembers.map((member) => (
            <Card key={member.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4 flex-1">
                    {member.photo_url && (
                      <img 
                        src={member.photo_url} 
                        alt={member.name}
                        className="w-16 h-16 object-cover rounded-full border"
                      />
                    )}
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        {member.name}
                        <Badge variant={member.active ? "default" : "outline"}>
                          {member.active ? 'Active' : 'Inactive'}
                        </Badge>
                      </CardTitle>
                      <CardDescription className="font-medium text-primary">
                        {member.position}
                      </CardDescription>
                      <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                        {member.email && (
                          <div className="flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            <a href={`mailto:${member.email}`} className="hover:underline">
                              {member.email}
                            </a>
                          </div>
                        )}
                        {member.phone && (
                          <div className="flex items-center gap-1">
                            <Phone className="h-3 w-3" />
                            <a href={`tel:${member.phone}`} className="hover:underline">
                              {member.phone}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleActive(member.id, member.active)}
                    >
                      {member.active ? 'Deactivate' : 'Activate'}
                    </Button>
                    <Link to={`/admin/board-members/edit/${member.id}`}>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => deleteBoardMember(member.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              {member.bio && (
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              )}
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default BoardMembers;