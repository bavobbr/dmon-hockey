import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

// Membership pages
import MembershipInfo from "./pages/membership/Info";
import Registration from "./pages/membership/Registration";
import Insurance from "./pages/membership/Insurance";
import Contact from "./pages/membership/Contact";
import IndoorHockey from "./pages/sporting/IndoorHockey";

// Shop page
import Shop from "./pages/Shop";

// Sporting pages
import Training from "./pages/sporting/Training";
import HowToPlay from "./pages/sporting/HowToPlay";
import Rules from "./pages/sporting/Rules";
import U6U8Rules from "./pages/sporting/rules/U6U8";
import U9Rules from "./pages/sporting/rules/U9";
import U10U12Rules from "./pages/sporting/rules/U10U12";
import U14PlusRules from "./pages/sporting/rules/U14Plus";
import StickGuide from "./pages/sporting/StickGuide";
import CoachesInfo from "./pages/sporting/CoachesInfo";
import Socials from "./pages/Socials";
import Events from "./pages/Events";
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
                    <Route path="/club/field" element={<HockeyField />} />
                    <Route path="/club/teams" element={<ClubTeams />} />
                    <Route path="/club/board" element={<Board />} />
                    <Route path="/club/values" element={<ClubValues />} />
                    <Route path="/club/media" element={<Media />} />
                    <Route path="/club/history" element={<History />} />
                    <Route path="/club/sponsors" element={<ClubSponsors />} />
                    <Route path="/club/sfeer" element={<Sfeer />} />
                    <Route path="/club/privacy" element={<Privacy />} />
                    
                    {/* Membership routes */}
                    <Route path="/membership/info" element={<MembershipInfo />} />
                    <Route path="/membership/register" element={<Registration />} />
                    <Route path="/membership/insurance" element={<Insurance />} />
                    <Route path="/membership/contact" element={<Contact />} />
                    <Route path="/membership/indoor-hockey" element={<IndoorHockey />} />
                    
                    {/* Shop route */}
                    <Route path="/shop" element={<Shop />} />
                    
                    {/* Sporting routes */}
                    <Route path="/sporting/training" element={<Training />} />
                    <Route path="/sporting/how-to-play" element={<HowToPlay />} />
                    <Route path="/sporting/rules" element={<Rules />} />
                    <Route path="/sporting/rules/u6-u8" element={<U6U8Rules />} />
                    <Route path="/sporting/rules/u9" element={<U9Rules />} />
                    <Route path="/sporting/rules/u10-u12" element={<U10U12Rules />} />
                    <Route path="/sporting/rules/u14-plus" element={<U14PlusRules />} />
                    <Route path="/sporting/stick-guide" element={<StickGuide />} />
                    <Route path="/sporting/coaches-info" element={<CoachesInfo />} />
                    
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
                      <ProtectedRoute requireAdmin>
                        <Teams />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/sponsors" element={
                      <ProtectedRoute requireAdmin>
                        <Sponsors />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/sponsors/new" element={
                      <ProtectedRoute requireAdmin>
                        <SponsorForm />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/sponsors/edit/:id" element={
                      <ProtectedRoute requireAdmin>
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
                      <ProtectedRoute requireAdmin>
                        <TeamForm />
                      </ProtectedRoute>
                    } />
                    <Route path="/admin/teams/edit/:id" element={
                      <ProtectedRoute requireAdmin>
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
                    
                    {/* Catch-all route */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </div>
            </div>
          </SidebarProvider>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;