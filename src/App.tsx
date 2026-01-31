import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ROUTE_REDIRECTS } from "@/config/routeMappings";
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppSidebar } from "@/components/AppSidebar";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./hooks/useAuth";
import { ProtectedRoute } from "./components/ProtectedRoute";

// Admin pages
import Dashboard from "./pages/admin/Dashboard";
import Announcements from "./pages/admin/Announcements";
import AnnouncementForm from "./pages/admin/AnnouncementForm";
import Teams from "./pages/admin/Teams";
import TeamForm from "./pages/admin/TeamForm";
import Sponsors from "./pages/admin/Sponsors";
import SponsorForm from "./pages/admin/SponsorForm";
import BoardMembers from "./pages/admin/BoardMembers";
import BoardMemberForm from "./pages/admin/BoardMemberForm";
import FieldClosures from "./pages/admin/FieldClosures";
import FieldClosureForm from "./pages/admin/FieldClosureForm";
import Users from "./pages/admin/Users";

// Club pages
import HockeyField from "./pages/club/HockeyField";
import ClubTeams from "./pages/club/Teams";
import Board from "./pages/club/Board";
import ClubValues from "./pages/club/Values";
import Media from "./pages/club/Media";
import History from "./pages/club/History";
import ClubSponsors from "./pages/club/Sponsors";
import Sfeer from "./pages/club/Sfeer";
import Privacy from "./pages/club/Privacy";
import FieldStatus from "./pages/club/FieldStatus";

// Membership pages
import MembershipInfo from "./pages/lidmaatschap/Info";
import Registration from "./pages/lidmaatschap/Registration";
import IndoorRegistration from "./pages/lidmaatschap/IndoorRegistration";
import Insurance from "./pages/lidmaatschap/Insurance";
import Contact from "./pages/lidmaatschap/Contact";
import IndoorHockey from "./pages/sportief/IndoorHockey";

// Shop page
import Shop from "./pages/Shop";

// Sporting pages
import Training from "./pages/sportief/Training";
import HowToPlay from "./pages/sportief/HowToPlay";
import Rules from "./pages/sportief/Rules";
import U6U8Rules from "./pages/sportief/regels/U6U8";
import U9Rules from "./pages/sportief/regels/U9";
import U10U12Rules from "./pages/sportief/regels/U10U12";
import U14PlusRules from "./pages/sportief/regels/U14Plus";
import IndoorRules from "./pages/sportief/regels/Indoor";
import StickGuide from "./pages/sportief/StickGuide";
import CoachesInfo from "./pages/sportief/CoachesInfo";
import RulesAgent from "./pages/sportief/RulesAgent";
import HockeyPrinciples from "./pages/sportief/HockeyPrinciples";
import Socials from "./pages/Socials";
import Events from "./pages/Events";
import { Analytics } from "@vercel/analytics/react";
import Nieuws from "./pages/Nieuws";

const queryClient = new QueryClient();

const AppHeader = () => {
  const { toggleSidebar } = useSidebar();
  
  return (
    <header className="h-14 flex items-center justify-between border-b bg-background px-4 relative z-10 md:px-6">
      <div className="flex items-center gap-3">
        {/* Mobile-optimized menu button */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden flex items-center gap-2 px-3 py-2 text-primary bg-primary/5 hover:bg-primary/10 border border-primary/20 rounded-lg"
          asChild
        >
          <SidebarTrigger>
            <Menu className="h-5 w-5" />
            <span className="text-sm font-medium">Menu</span>
          </SidebarTrigger>
        </Button>
        
        {/* Desktop sidebar trigger - subtle */}
        <div className="hidden lg:block">
          <SidebarTrigger />
        </div>
        
        <h1 className="text-lg font-semibold text-foreground">D-mon Hockey Club</h1>
      </div>
      
      {/* Mobile hint text - clickable */}
      <div className="lg:hidden">
        <button 
          onClick={toggleSidebar}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          Tik op Menu
        </button>
      </div>
    </header>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <SidebarProvider defaultOpen style={{"--sidebar-width": "280px", "--sidebar-width-icon": "80px"} as React.CSSProperties}>
            <div className="min-h-screen flex w-full max-w-full overflow-x-hidden">
              <AppSidebar />
              <div className="flex-1 flex flex-col min-w-0">
                <AppHeader />
                <main className="flex-1 overflow-auto overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/events" element={<Events />} />
              <Route path="/nieuws" element={<Nieuws />} />
              <Route path="/socials" element={<Socials />} />
                    
                    {/* Club routes */}
                    <Route path="/club/teams" element={<ClubTeams />} />
                    <Route path="/club/sfeer" element={<Sfeer />} />
                    <Route path="/club/media" element={<Media />} />
                    <Route path="/club/sponsors" element={<ClubSponsors />} />
                    <Route path="/club/privacy" element={<Privacy />} />

                    {/* Shop route */}
                    <Route path="/shop" element={<Shop />} />
                    
                    {/* Admin routes */}
                    <Route path="/admin" element={
                      <ProtectedRoute requireModerator>
                        <Dashboard />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/announcements" element={
                      <ProtectedRoute requireModerator>
                        <Announcements />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/teams" element={
                      <ProtectedRoute requireModerator>
                        <Teams />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/sponsors" element={
                      <ProtectedRoute requireModerator>
                        <Sponsors />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/sponsors/new" element={
                      <ProtectedRoute requireModerator>
                        <SponsorForm />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/sponsors/edit/:id" element={
                      <ProtectedRoute requireModerator>
                        <SponsorForm />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/board-members" element={
                      <ProtectedRoute requireAdmin>
                        <BoardMembers />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/board-members/new" element={
                      <ProtectedRoute requireAdmin>
                        <BoardMemberForm />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/board-members/edit/:id" element={
                      <ProtectedRoute requireAdmin>
                        <BoardMemberForm />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/teams/new" element={
                      <ProtectedRoute requireModerator>
                        <TeamForm />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/teams/edit/:id" element={
                      <ProtectedRoute requireModerator>
                        <TeamForm />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/announcements/new" element={
                      <ProtectedRoute requireModerator>
                        <AnnouncementForm />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/announcements/edit/:id" element={
                      <ProtectedRoute requireModerator>
                        <AnnouncementForm />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/field-closures" element={
                      <ProtectedRoute requireModerator>
                        <FieldClosures />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/field-closures/new" element={
                      <ProtectedRoute requireModerator>
                        <FieldClosureForm />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/field-closures/edit/:id" element={
                      <ProtectedRoute requireModerator>
                        <FieldClosureForm />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/users" element={
                      <ProtectedRoute requireAdmin>
                        <Users />
                      </ProtectedRoute>
                    } />
                    
                    {/* Nederlandse routes - Lidmaatschap */}
                    <Route path="/lidmaatschap/info" element={<MembershipInfo />} />
                    <Route path="/lidmaatschap/registratie" element={<Registration />} />
                    <Route path="/lidmaatschap/indoor-registratie" element={<IndoorRegistration />} />
                    <Route path="/lidmaatschap/verzekering" element={<Insurance />} />
                    <Route path="/lidmaatschap/contact" element={<Contact />} />

                    {/* Nederlandse routes - Sportief */}
                    <Route path="/sportief/training" element={<Training />} />
                    <Route path="/sportief/hoe-te-spelen" element={<HowToPlay />} />
                    <Route path="/sportief/regels" element={<Rules />} />
                    <Route path="/sportief/regels/u6-u8" element={<U6U8Rules />} />
                    <Route path="/sportief/regels/u9" element={<U9Rules />} />
                    <Route path="/sportief/regels/u10-u12" element={<U10U12Rules />} />
                    <Route path="/sportief/regels/u14-plus" element={<U14PlusRules />} />
                    <Route path="/sportief/regels/indoor" element={<IndoorRules />} />
                    <Route path="/sportief/stick-gids" element={<StickGuide />} />
                    <Route path="/sportief/coaches-info" element={<CoachesInfo />} />
                    <Route path="/sportief/hockey-principes" element={<HockeyPrinciples />} />
                    <Route path="/sportief/indoor-hockey" element={<IndoorHockey />} />
                    <Route path="/sportief/regels-assistent" element={<RulesAgent />} />

                    {/* Nederlandse routes - Club */}
                    <Route path="/club/veld" element={<HockeyField />} />
                    <Route path="/club/bestuur" element={<Board />} />
                    <Route path="/club/waarden" element={<ClubValues />} />
                    <Route path="/club/geschiedenis" element={<History />} />
                    <Route path="/club/veld-status" element={<FieldStatus />} />

                    {/* Redirects van oude Engelse routes naar Nederlandse */}
                    {Object.entries(ROUTE_REDIRECTS).map(([oldPath, newPath]) => (
                      <Route
                        key={oldPath}
                        path={oldPath}
                        element={<Navigate to={newPath} replace />}
                      />
                    ))}

                    {/* Catch-all route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </div>
          </SidebarProvider>
        </BrowserRouter>
        <Analytics />
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
