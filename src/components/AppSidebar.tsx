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
  Zap,
  MessageCircle
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

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
    title: "Agenda",
    url: "/events",
    icon: Calendar,
  },
  {
    title: "Socials",
    url: "/socials",
    icon: MessageCircle,
  },
  {
    title: "De Club",
    icon: Users,
    items: [
      { title: "Locatie", url: "/club/field", icon: MapPin },
      { title: "Teams", url: "/club/teams", icon: Trophy },
      { title: "Bestuur", url: "/club/board", icon: UserCheck },
      { title: "Clubwaarden", url: "/club/values", icon: Shield },
      { title: "In het Nieuws", url: "/club/news", icon: Newspaper },
      { title: "Geschiedenis", url: "/club/history", icon: History },
      { title: "Sponsors", url: "/club/sponsors", icon: HandHeart },
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
      { title: "Privacybeleid", url: "/club/privacy", icon: FileText },
    ],
  },
  {
    title: "Sportief",
    icon: Trophy,
    items: [
      { title: "Training", url: "/sporting/training", icon: Calendar },
      { title: "Hoe Hockey Spelen", url: "/sporting/how-to-play", icon: BookOpen },
      { 
        title: "Regels & Scheidsrechters", 
        url: "/sporting/rules", 
        icon: Timer,
        items: [
          { title: "U6 tot U8", url: "/sporting/rules/u6-u8", icon: Users },
          { title: "U9", url: "/sporting/rules/u9", icon: Users },
          { title: "U10 tot U12", url: "/sporting/rules/u10-u12", icon: Users },
          { title: "U14 en hoger", url: "/sporting/rules/u14-plus", icon: Users },
        ]
      },
      { title: "De Juiste Stick Kiezen", url: "/sporting/stick-guide", icon: Zap },
    ],
  },
  {
    title: "Shop & Kleding",
    url: "/shop",
    icon: ShoppingBag,
  },
];

export function AppSidebar() {
  const { open, setOpen } = useSidebar();
  const isMobile = useIsMobile();
  const location = useLocation();
  const currentPath = location.pathname;

  // Close sidebar on mobile when route changes
  useEffect(() => {
    if (isMobile && open) {
      // Small delay to ensure navigation completes
      const timer = setTimeout(() => {
        setOpen(false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentPath, isMobile, open, setOpen]);

  // Handle mobile navigation click
  const handleMobileNavClick = () => {
    if (isMobile && open) {
      setOpen(false);
    }
  };

  const isActive = (path: string) => currentPath === path;
  const isGroupActive = (items: { url: string }[]) =>
    items.some(item => currentPath.startsWith(item.url));

  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-primary text-sidebar-accent-foreground font-medium"
      : "text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        {/* Logo Header */}
        <div className="border-b border-sidebar-border p-4">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-lg p-2 shadow-sm flex-shrink-0">
              <img 
                src="/lovable-uploads/03104bbc-f9de-44a2-a8b0-aedb91fd1c6c.png" 
                alt="D-mon Hockey Club Logo" 
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="group-data-[collapsible=icon]:hidden">
              <div className="text-sm font-semibold text-sidebar-foreground">D-mon Hockey</div>
              <div className="text-xs text-sidebar-foreground/60">Club België</div>
            </div>
          </div>
        </div>
        
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
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
                          <SidebarMenuButton className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground w-full">
                            <item.icon className="h-4 w-4 flex-shrink-0" />
                            <span className="truncate whitespace-nowrap overflow-hidden">{item.title}</span>
                            <ChevronDown className="ml-auto h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180 flex-shrink-0" />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                         <CollapsibleContent>
                           <SidebarMenuSub>
                             {item.items.map((subItem) => {
                               if (subItem.items) {
                                 // Handle nested items (like Rules with age groups)
                                 const isSubExpanded = isGroupActive(subItem.items);
                                 return (
                                   <Collapsible
                                     key={subItem.title}
                                     defaultOpen={isSubExpanded}
                                     className="group/subcollapsible"
                                   >
                                     <SidebarMenuSubItem>
                                       <CollapsibleTrigger asChild>
                                         <SidebarMenuSubButton className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground w-full">
                                           <subItem.icon className="h-3 w-3 flex-shrink-0" />
                                           <span className="truncate whitespace-nowrap overflow-hidden">{subItem.title}</span>
                                           <ChevronDown className="ml-auto h-3 w-3 transition-transform group-data-[state=open]/subcollapsible:rotate-180 flex-shrink-0" />
                                         </SidebarMenuSubButton>
                                       </CollapsibleTrigger>
                                       <CollapsibleContent>
                                         <div className="ml-4 mt-1">
                                           {subItem.items.map((nestedItem) => (
                                             <div key={nestedItem.title} className="py-1">
                                               <NavLink
                                                 to={nestedItem.url}
                                                 onClick={handleMobileNavClick}
                                                 className={`${getNavCls({ isActive: isActive(nestedItem.url) })} flex items-center gap-2 w-full min-h-[1.75rem] text-xs pl-2 rounded-sm`}
                                               >
                                                 <nestedItem.icon className="h-3 w-3 flex-shrink-0" />
                                                 <span className="truncate whitespace-nowrap overflow-hidden">{nestedItem.title}</span>
                                               </NavLink>
                                             </div>
                                           ))}
                                         </div>
                                       </CollapsibleContent>
                                     </SidebarMenuSubItem>
                                   </Collapsible>
                                 );
                               }
                               
                               return (
                                 <SidebarMenuSubItem key={subItem.title}>
                                   <SidebarMenuSubButton asChild>
                                      <NavLink
                                        to={subItem.url}
                                        onClick={handleMobileNavClick}
                                        className={`${getNavCls({ isActive: isActive(subItem.url) })} flex items-center gap-2 w-full min-h-[2rem]`}
                                      >
                                       <subItem.icon className="h-3 w-3 flex-shrink-0" />
                                       <span className="truncate whitespace-nowrap overflow-hidden">{subItem.title}</span>
                                     </NavLink>
                                   </SidebarMenuSubButton>
                                 </SidebarMenuSubItem>
                               );
                             })}
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
                         onClick={handleMobileNavClick}
                         className={`${getNavCls} flex items-center gap-2 w-full min-h-[2.5rem]`}
                       >
                        <item.icon className="h-4 w-4 flex-shrink-0" />
                        <span className="truncate whitespace-nowrap overflow-hidden">{item.title}</span>
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