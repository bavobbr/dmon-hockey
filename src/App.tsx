import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
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
import News from "./pages/club/News";
import History from "./pages/club/History";
import ClubSponsors from "./pages/club/Sponsors";
import Privacy from "./pages/club/Privacy";

// Membership pages
import MembershipInfo from "./pages/membership/Info";
import Registration from "./pages/membership/Registration";
import Insurance from "./pages/membership/Insurance";
import Contact from "./pages/membership/Contact";

// Shop page
import Shop from "./pages/Shop";

// Sporting pages
import Training from "./pages/sporting/Training";
import HowToPlay from "./pages/sporting/HowToPlay";
import Rules from "./pages/sporting/Rules";
import StickGuide from "./pages/sporting/StickGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <SidebarProvider>
            <div className="min-h-screen flex w-full">
              <AppSidebar />
              <div className="flex-1 flex flex-col">
                <header className="h-14 flex items-center justify-between border-b bg-background px-4 relative z-10">
                  <div className="flex items-center gap-4">
                    <SidebarTrigger />
                    <h1 className="text-lg font-semibold text-foreground">D-mon Hockey Club</h1>
                  </div>
                </header>
                <main className="flex-1 overflow-auto">
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/auth" element={<Auth />} />
                    
                    {/* Club routes */}
                    <Route path="/club/field" element={<HockeyField />} />
                    <Route path="/club/teams" element={<ClubTeams />} />
                    <Route path="/club/board" element={<Board />} />
                    <Route path="/club/values" element={<ClubValues />} />
                    <Route path="/club/news" element={<News />} />
                    <Route path="/club/history" element={<History />} />
                    <Route path="/club/sponsors" element={<ClubSponsors />} />
                    <Route path="/club/privacy" element={<Privacy />} />
                    
                    {/* Membership routes */}
                    <Route path="/membership/info" element={<MembershipInfo />} />
                    <Route path="/membership/register" element={<Registration />} />
                    <Route path="/membership/insurance" element={<Insurance />} />
                    <Route path="/membership/contact" element={<Contact />} />
                    
                    {/* Shop route */}
                    <Route path="/shop" element={<Shop />} />
                    
                    {/* Sporting routes */}
                    <Route path="/sporting/training" element={<Training />} />
                    <Route path="/sporting/how-to-play" element={<HowToPlay />} />
                    <Route path="/sporting/rules" element={<Rules />} />
                    <Route path="/sporting/stick-guide" element={<StickGuide />} />
                    
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