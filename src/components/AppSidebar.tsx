import { 
  Home, 
  Users, 
  UserCheck, 
  ShoppingBag, 
  Trophy,
  ChevronDown,
  MapPin,
  Shield,
  Newspaper,
  History,
  HandHeart,
  FileText,
  UserPlus,
  Phone,
  Calendar,
  BookOpen,
  Timer,
  Zap
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const navigation = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "De Club",
    icon: Users,
    items: [
      { title: "Hockeyterrein & Mobiliteit", url: "/club/field", icon: MapPin },
      { title: "Teams", url: "/club/teams", icon: Trophy },
      { title: "Bestuur", url: "/club/board", icon: UserCheck },
      { title: "Clubwaarden", url: "/club/values", icon: Shield },
      { title: "In het Nieuws", url: "/club/news", icon: Newspaper },
      { title: "Geschiedenis", url: "/club/history", icon: History },
      { title: "Sponsors", url: "/club/sponsors", icon: HandHeart },
      { title: "Privacybeleid", url: "/club/privacy", icon: FileText },
    ],
  },
  {
    title: "Lidmaatschap",
    icon: UserPlus,
    items: [
      { title: "Lid Worden - Informatie", url: "/membership/info", icon: UserPlus },
      { title: "Lid Worden - Registratie", url: "/membership/register", icon: FileText },
      { title: "Verzekering", url: "/membership/insurance", icon: Shield },
      { title: "Contact", url: "/membership/contact", icon: Phone },
    ],
  },
  {
    title: "Shop & Kleding",
    url: "/shop",
    icon: ShoppingBag,
  },
  {
    title: "Sportief",
    icon: Trophy,
    items: [
      { title: "Training", url: "/sporting/training", icon: Calendar },
      { title: "Hoe Hockey Spelen", url: "/sporting/how-to-play", icon: BookOpen },
      { title: "Regels & Scheidsrechten", url: "/sporting/rules", icon: Timer },
      { title: "De Juiste Stick Kiezen", url: "/sporting/stick-guide", icon: Zap },
    ],
  },
];

export function AppSidebar() {
  const { open, setOpen } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const isGroupActive = (items: { url: string }[]) => 
    items.some(item => currentPath.startsWith(item.url));

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-white font-semibold shadow-sm" 
      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors";

  return (
    <Sidebar collapsible="icon" className="bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <SidebarContent className="bg-white dark:bg-gray-900">
        {/* Logo Header */}
        <div className="border-b border-gray-200 dark:border-gray-800 p-4 bg-white dark:bg-gray-900">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-2 shadow-sm flex-shrink-0">
              <img 
                src="/lovable-uploads/03104bbc-f9de-44a2-a8b0-aedb91fd1c6c.png" 
                alt="D-mon Hockey Club Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="group-data-[collapsible=icon]:hidden">
              <div className="text-sm font-semibold text-gray-900 dark:text-white">D-mon Hockey</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Club België</div>
            </div>
          </div>
        </div>
        
        <SidebarGroup className="px-3 py-2">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigation.map((item) => {
                if (item.items) {
                  const isExpanded = isGroupActive(item.items);
                  return (
                    <Collapsible
                      key={item.title}
                      defaultOpen={isExpanded}
                      className="group/collapsible"
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="w-full justify-between rounded-lg px-3 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors">
                            <div className="flex items-center gap-3">
                              <item.icon className="h-4 w-4 flex-shrink-0" />
                              <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                            </div>
                            <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180 group-data-[collapsible=icon]:hidden" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub className="ml-6 mt-1 space-y-1 border-l border-gray-200 dark:border-gray-700 pl-3">
                            {item.items.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                  <NavLink
                                    to={subItem.url}
                                    className={({ isActive }) => 
                                      `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                                        isActive 
                                          ? "bg-primary text-white font-semibold shadow-sm" 
                                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                                      }`
                                    }
                                  >
                                    <subItem.icon className="h-3 w-3 flex-shrink-0" />
                                    <span className="group-data-[collapsible=icon]:hidden">{subItem.title}</span>
                                  </NavLink>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        end
                        className={({ isActive }) => 
                          `flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                            isActive 
                              ? "bg-primary text-white font-semibold shadow-sm" 
                              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                          }`
                        }
                      >
                        <item.icon className="h-4 w-4 flex-shrink-0" />
                        <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}