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
  Plus,
  Calendar,
  Instagram,
  RefreshCw,
  CheckCircle,
  AlertTriangle,
  XCircle
} from 'lucide-react';
import { toast } from 'sonner';

interface InstagramTokenStatus {
  expires_at: string | null;
  daysUntilExpiry: number | null;
  status: 'valid' | 'warning' | 'expired' | 'unknown';
}

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
  const [tokenStatus, setTokenStatus] = useState<InstagramTokenStatus>({
    expires_at: null,
    daysUntilExpiry: null,
    status: 'unknown'
  });
  const [refreshingToken, setRefreshingToken] = useState(false);

  const fetchTokenStatus = async () => {
    try {
      const { data, error } = await supabase
        .from('instagram_tokens')
        .select('expires_at')
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error || !data) {
        setTokenStatus({ expires_at: null, daysUntilExpiry: null, status: 'unknown' });
        return;
      }

      const expiresAt = new Date(data.expires_at);
      const now = new Date();
      const daysUntilExpiry = Math.floor((expiresAt.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

      let status: 'valid' | 'warning' | 'expired' = 'valid';
      if (daysUntilExpiry <= 0) {
        status = 'expired';
      } else if (daysUntilExpiry <= 7) {
        status = 'warning';
      }

      setTokenStatus({
        expires_at: data.expires_at,
        daysUntilExpiry,
        status
      });
    } catch (error) {
      console.error('Error fetching token status:', error);
    }
  };

  const handleRefreshToken = async () => {
    setRefreshingToken(true);
    try {
      const { data, error } = await supabase.functions.invoke('refresh-instagram-token');
      
      if (error) {
        toast.error('Token refresh mislukt');
        console.error('Refresh error:', error);
      } else {
        toast.success('Instagram token vernieuwd');
        await fetchTokenStatus();
      }
    } catch (error) {
      toast.error('Token refresh mislukt');
      console.error('Refresh error:', error);
    } finally {
      setRefreshingToken(false);
    }
  };

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const [announcementsRes, teamsRes, sponsorsRes, boardMembersRes, profilesRes] = await Promise.all([
          supabase.from('announcements').select('id', { count: 'exact', head: true }),
          supabase.from('teams').select('id', { count: 'exact', head: true }).eq('active', true),
          supabase.from('sponsors').select('id', { count: 'exact', head: true }).eq('active', true),
          supabase.from('board_members').select('id', { count: 'exact', head: true }).eq('active', true),
          supabase.from('profiles').select('id', { count: 'exact', head: true })
        ]);

        setCounts({
          announcements: announcementsRes.count || 0,
          teams: teamsRes.count || 0,
          sponsors: sponsorsRes.count || 0,
          boardMembers: boardMembersRes.count || 0,
          users: profilesRes.count || 0
        });
      } catch (error) {
        console.error('Error fetching counts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
    fetchTokenStatus();
  }, []);

  const adminCards = [
    {
      title: 'Aankondigingen',
      description: 'Beheer clubnieuws en evenementen',
      icon: FileText,
      href: '/admin/announcements',
      count: loading ? 'Laden...' : `${counts.announcements} totaal`,
    },
    {
      title: 'Teams',
      description: 'Beheer teaminformatie',
      icon: Trophy,
      href: '/admin/teams',
      count: loading ? 'Laden...' : `${counts.teams} actief`,
    },
    {
      title: 'Sponsors',
      description: 'Beheer clubsponsors',
      icon: Handshake,
      href: '/admin/sponsors',
      count: loading ? 'Laden...' : `${counts.sponsors} actief`,
    },
    {
      title: 'Terreinsluitingen',
      description: 'Beheer terreinsluitingen',
      icon: Calendar,
      href: '/admin/field-closures',
      count: '',
    },
  ];

  if (isAdmin) {
    adminCards.push(
      {
        title: 'Bestuursleden',
        description: 'Beheer bestuur',
        icon: UserCheck,
        href: '/admin/board-members',
        count: loading ? 'Laden...' : `${counts.boardMembers} actief`,
      },
      {
        title: 'Gebruikersbeheer',
        description: 'Beheer gebruikersrollen en toestemmingen',
        icon: Users,
        href: '/admin/users',
        count: loading ? 'Laden...' : `${counts.users} leden`,
      }
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Beheer Dashboard
        </h1>
        <p className="text-muted-foreground">
          Welkom terug, {user?.email}. Je hebt {isAdmin ? 'beheerder' : 'moderator'} toegang.
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
                    Beheer {card.title}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Instagram Token Status */}
      {isAdmin && (
        <div className="mt-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Instagram className="h-5 w-5" />
                  Instagram Integratie
                </CardTitle>
                <CardDescription>
                  Status van de Instagram API token
                </CardDescription>
              </div>
              {tokenStatus.status === 'valid' && (
                <CheckCircle className="h-6 w-6 text-green-500" />
              )}
              {tokenStatus.status === 'warning' && (
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
              )}
              {tokenStatus.status === 'expired' && (
                <XCircle className="h-6 w-6 text-red-500" />
              )}
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  {tokenStatus.status === 'unknown' ? (
                    <p className="text-muted-foreground">Geen token gevonden</p>
                  ) : tokenStatus.status === 'expired' ? (
                    <p className="text-red-500 font-medium">Token is verlopen!</p>
                  ) : (
                    <>
                      <p className="text-sm text-muted-foreground">
                        Verloopt op: {tokenStatus.expires_at ? new Date(tokenStatus.expires_at).toLocaleDateString('nl-BE', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        }) : 'Onbekend'}
                      </p>
                      <p className={`text-lg font-semibold ${
                        tokenStatus.status === 'warning' ? 'text-yellow-500' : 'text-green-500'
                      }`}>
                        {tokenStatus.daysUntilExpiry} dagen resterend
                      </p>
                    </>
                  )}
                </div>
                <Button 
                  variant="outline" 
                  onClick={handleRefreshToken}
                  disabled={refreshingToken}
                >
                  <RefreshCw className={`h-4 w-4 mr-2 ${refreshingToken ? 'animate-spin' : ''}`} />
                  {refreshingToken ? 'Vernieuwen...' : 'Token Vernieuwen'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Snelle Acties</CardTitle>
            <CardDescription>
              Veelgebruikte taken en snelkoppelingen
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4 flex-wrap">
            <Link to="/admin/announcements/new">
              <Button variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Nieuwe Aankondiging
              </Button>
            </Link>
            {isAdmin && (
              <Link to="/admin/users">
                <Button variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Beheer Gebruikers
                </Button>
              </Link>
            )}
            <Link to="/">
              <Button variant="outline">
                Bekijk Publieke Site
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;