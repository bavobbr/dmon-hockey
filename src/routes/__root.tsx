import { useEffect } from "react";
import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  redirect,
} from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";
import { Menu } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { AppSidebar } from "@/components/AppSidebar";
import AutoPageMeta from "@/components/AutoPageMeta";
import { ScrollToTop } from "@/components/ScrollToTop";
import { AuthProvider } from "@/hooks/useAuth";
import NotFound from "@/pages/NotFound";
import { ROUTE_REDIRECTS } from "@/config/routeMappings";
import { reportLovableError } from "@/lib/lovable-error-reporting";

import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "D-mon Hockey Club Dendermonde - Veldhockey in België" },
      {
        name: "description",
        content:
          "D-mon Hockey Club Dendermonde - Veldhockeyclub in België. Sluit je aan voor trainingen, wedstrijden en de passie voor hockey.",
      },
      { name: "author", content: "D-mon Hockey Club" },
      {
        name: "keywords",
        content:
          "hockey, veldhockey, België, Dendermonde, D-mon, hockeyclub, sport, training, jeugdhockey",
      },
      {
        name: "google-site-verification",
        content: "RTnM8R_eXn945ghFmrxpBJR6kQRaOGJXN9oFfGGQZzM",
      },
      {
        property: "og:title",
        content: "D-mon Hockey Club Dendermonde - Veldhockey in België",
      },
      {
        property: "og:description",
        content:
          "Veldhockeyclub in Dendermonde, België. Sluit je aan voor trainingen, wedstrijden en de passie voor hockey.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.dmon.be/" },
      { property: "og:image", content: "https://www.dmon.be/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "D-mon Hockey Club Dendermonde - Veldhockey in België",
      },
      {
        name: "twitter:description",
        content:
          "Veldhockeyclub in Dendermonde, België. Sluit je aan voor trainingen, wedstrijden en de passie voor hockey.",
      },
      { name: "twitter:image", content: "https://www.dmon.be/og-image.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/dmon-favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800;900&family=Barlow:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  beforeLoad: ({ location }) => {
    // Oude Engelse routes -> Nederlandse routes (server-side redirect)
    const target = ROUTE_REDIRECTS[location.pathname as keyof typeof ROUTE_REDIRECTS];
    if (target) {
      throw redirect({ to: target, replace: true });
    }
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl-BE" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

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

        <div className="text-lg font-semibold text-foreground">D-mon Hockey Club</div>
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

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <ScrollToTop />
            <AutoPageMeta />
            <SidebarProvider
              defaultOpen
              style={
                { "--sidebar-width": "280px", "--sidebar-width-icon": "80px" } as React.CSSProperties
              }
            >
              <div className="min-h-screen flex w-full max-w-full overflow-x-hidden">
                <AppSidebar />
                <div className="flex-1 flex flex-col min-w-0">
                  <AppHeader />
                  <main className="flex-1 overflow-auto overflow-x-hidden lg:pl-2">
                    <Outlet />
                  </main>
                </div>
              </div>
            </SidebarProvider>
            <Analytics />
          </TooltipProvider>
        </AuthProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-4">
        <h1 className="text-xl font-semibold">Deze pagina kon niet laden</h1>
        <p className="text-muted-foreground">
          Er ging iets mis aan onze kant. Probeer opnieuw of ga terug naar de homepagina.
        </p>
        <div className="flex gap-2 justify-center flex-wrap">
          <Button onClick={reset}>Probeer opnieuw</Button>
          <Button variant="outline" asChild>
            <a href="/">Naar home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
