import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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

  const adminCards = [
    {
      title: 'Announcements',
      description: 'Manage club news and events',
      icon: FileText,
      href: '/admin/announcements',
      count: '5 published',
    },
    {
      title: 'Teams',
      description: 'Manage team information',
      icon: Trophy,
      href: '/admin/teams',
      count: '8 active teams',
    },
    {
      title: 'Sponsors',
      description: 'Manage club sponsors',
      icon: Handshake,
      href: '/admin/sponsors',
      count: '12 sponsors',
    },
    {
      title: 'Board Members',
      description: 'Manage executive board',
      icon: UserCheck,
      href: '/admin/board-members',
      count: '7 members',
    },
  ];

  if (isAdmin) {
    adminCards.push({
      title: 'User Management',
      description: 'Manage user roles and permissions',
      icon: Users,
      href: '/admin/users',
      count: '45 members',
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