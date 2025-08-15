import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { 
  Users, 
  FileText, 
  Trophy, 
  Handshake, 
  UserCheck,
  Plus 
} from 'lucide-react';

const Dashboard = () => {
  const { user, isAdmin, isModerator } = useAuth();
  
  const [counts, setCounts] = useState({
    announcements: 0,
    teams: 0,
    sponsors: 0,
    boardMembers: 0,
    users: 0
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [announcementsRes, teamsRes, sponsorsRes, boardMembersRes] = await Promise.all([
          supabase.from('announcements').select('id', { count: 'exact', head: true }),
          supabase.from('teams').select('id', { count: 'exact', head: true }).eq('active', true),
          supabase.from('sponsors').select('id', { count: 'exact', head: true }).eq('active', true),
          supabase.from('board_members').select('id', { count: 'exact', head: true }).eq('active', true)
        ]);

        setCounts({
          announcements: announcementsRes.count || 0,
          teams: teamsRes.count || 0,
          sponsors: sponsorsRes.count || 0,
          boardMembers: boardMembersRes.count || 0,
          users: 0 // This would need a custom query or function to count profiles
        });
      } catch (error) {
        console.error('Error fetching counts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  const adminCards = [
    {
      title: 'Announcements',
      description: 'Manage club news and events',
      icon: FileText,
      href: '/admin/announcements',
      count: loading ? 'Loading...' : `${counts.announcements} total`,
    },
    {
      title: 'Teams',
      description: 'Manage team information',
      icon: Trophy,
      href: '/admin/teams',
      count: loading ? 'Loading...' : `${counts.teams} active`,
    },
    {
      title: 'Sponsors',
      description: 'Manage club sponsors',
      icon: Handshake,
      href: '/admin/sponsors',
      count: loading ? 'Loading...' : `${counts.sponsors} active`,
    },
    {
      title: 'Board Members',
      description: 'Manage executive board',
      icon: UserCheck,
      href: '/admin/board-members',
      count: loading ? 'Loading...' : `${counts.boardMembers} active`,
    },
  ];

  if (isAdmin) {
    adminCards.push({
      title: 'User Management',
      description: 'Manage user roles and permissions',
      icon: Users,
      href: '/admin/users',
      count: loading ? 'Loading...' : `${counts.users} members`,
    });
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Admin Dashboard
        </h1>
        <p className="text-muted-foreground">
          Welcome back, {user?.email}. You have {isAdmin ? 'administrator' : 'moderator'} access.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {adminCards.map((card) => {
          const Icon = card.icon;
          return (
            <Card key={card.href} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {card.title}
                </CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground mb-1">
                  {card.count}
                </div>
                <CardDescription className="mb-4">
                  {card.description}
                </CardDescription>
                <Link to={card.href}>
                  <Button className="w-full" size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Manage {card.title}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common tasks and shortcuts
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 flex-wrap">
            <Link to="/admin/announcements/new">
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                New Announcement
              </Button>
            </Link>
            {isAdmin && (
              <Link to="/admin/users">
                <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Users
                </Button>
              </Link>
            )}
            <Link to="/">
              <Button variant="outline">
                View Public Site
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;