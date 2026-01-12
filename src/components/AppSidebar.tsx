import { 
  Home, 
  Users, 
  UserCheck, 
  Shirt, 
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
  MessageCircle,
  Camera,
  ThermometerSnowflake,
  HousePlus,
  Bot
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useWindowHeight } from "@/hooks/use-window-height";

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
    title: "Nieuws",
    url: "/nieuws",
    icon: Newspaper,
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
      { title: "Sfeer", url: "/club/sfeer", icon: Camera },
      { title: "Clubwaarden", url: "/club/values", icon: Shield },
      { title: "In de media", url: "/club/media", icon: Newspaper },
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
      { title: "Indoor - Registratie", url: "/membership/indoor-registration", icon: Trophy },
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
      { 
        title: "Hoe Hockey Spelen", 
        url: "/sporting/how-to-play", 
        icon: BookOpen,
        items: [
          { title: "Coaches Info", url: "/sporting/coaches-info", icon: Users },
        ]
      },
      { 
        title: "Regels & Scheids", 
        url: "/sporting/rules", 
        icon: Timer,
        items: [
          { title: "U6 tot U8", url: "/sporting/rules/u6-u8", icon: Users },
          { title: "U9", url: "/sporting/rules/u9", icon: Users },
          { title: "U10 tot U12", url: "/sporting/rules/u10-u12", icon: Users },
          { title: "U14 tot senior", url: "/sporting/rules/u14-plus", icon: Users },
          { title: "Indoor", url: "/sporting/rules/indoor", icon: Users },
          { title: "Regels Assistent", url: "/sporting/rules-agent", icon: Bot },
        ]
      },
      { title: "De Juiste Stick", url: "/sporting/stick-guide", icon: Zap },
      { title: "Indoor Hockey", url: "/sporting/indoor-hockey", icon: HousePlus },
    ],
  },
  {
    title: "Shop & Kleding",
    url: "/shop",
    icon: Shirt,
  },
  {
    title: "Terrein Status",
    url: "/club/field-status",
    icon: ThermometerSnowflake,
  },
];

// Group titles in priority order for auto-expansion
const GROUP_PRIORITY = ["De Club", "Sportief", "Lidmaatschap"];

// Calculate how many groups to auto-expand based on viewport height
const getAutoExpandCount = (height: number): number => {
  if (height >= 1100) return 3; // all groups
  if (height >= 950) return 2;
  if (height >= 800) return 1;
  return 0; // no auto-expand on small screens
};

export function AppSidebar() {
  const { open, setOpen, openMobile, setOpenMobile, state } = useSidebar();
  const isMobile = useIsMobile();
  const location = useLocation();
  const currentPath = location.pathname;
  const windowHeight = useWindowHeight();

  // Track which groups are manually toggled by user
  const [manualOverrides, setManualOverrides] = useState<Record<string, boolean>>({});

  // Calculate which groups should be expanded
  const expandedGroups = useMemo(() => {
    const autoExpandCount = getAutoExpandCount(windowHeight);
    const result: Record<string, boolean> = {};

    // Get collapsible groups from navigation
    const collapsibleGroups = navigation.filter(item => item.items);

    collapsibleGroups.forEach((group, index) => {
      const isActiveRoute = group.items!.some(item => currentPath.startsWith(item.url));
      const priorityIndex = GROUP_PRIORITY.indexOf(group.title);
      const shouldAutoExpand = priorityIndex !== -1 && priorityIndex < autoExpandCount;

      // Priority: manual override > active route > auto-expand
      if (manualOverrides[group.title] !== undefined) {
        result[group.title] = manualOverrides[group.title];
      } else if (isActiveRoute) {
        result[group.title] = true;
      } else {
        result[group.title] = shouldAutoExpand;
      }
    });

    return result;
  }, [windowHeight, currentPath, manualOverrides]);

  // Handle manual toggle of groups
  const handleGroupToggle = (groupTitle: string, isOpen: boolean) => {
    setManualOverrides(prev => ({
      ...prev,
      [groupTitle]: isOpen,
    }));
  };

  // Close sidebar on mobile when route changes
  useEffect(() => {
    if (isMobile) {
      // Close after navigation completes on mobile
      const timer = setTimeout(() => {
        setOpenMobile(false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentPath, isMobile, setOpenMobile]);

  // Reset manual overrides when route changes (user navigates to new section)
  useEffect(() => {
    setManualOverrides({});
  }, [currentPath]);

  // Handle mobile navigation click - let useEffect handle closing on route change
  const handleMobileNavClick = () => {
    // Don't close immediately, let the route change useEffect handle it
  };

  // Handle expanding sidebar when collapsed and group is clicked
  const handleGroupClick = () => {
    if (state === "collapsed" && !isMobile) {
      setOpen(true);
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
    <Sidebar collapsible="icon" className="max-w-[min(50vw,280px)]">
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
                  const isExpanded = expandedGroups[item.title] ?? false;
                  return (
                    <Collapsible
                      key={item.title}
                      open={isExpanded}
                      onOpenChange={(open) => handleGroupToggle(item.title, open)}
                      className="group/collapsible"
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton 
                            className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground w-full"
                            onClick={handleGroupClick}
                          >
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
                                       <div className="flex items-center">
                                         <SidebarMenuSubButton asChild className="flex-1">
                                           <NavLink
                                             to={subItem.url}
                                             onClick={handleMobileNavClick}
                                             className={`${getNavCls({ isActive: isActive(subItem.url) })} flex items-center gap-2 w-full min-h-[2rem]`}
                                           >
                                             <subItem.icon className="h-3 w-3 flex-shrink-0" />
                                             <span className="truncate whitespace-nowrap overflow-hidden">{subItem.title}</span>
                                           </NavLink>
                                         </SidebarMenuSubButton>
                                         <CollapsibleTrigger asChild>
                                           <button className="p-1 hover:bg-sidebar-accent rounded-sm">
                                             <ChevronDown className="h-3 w-3 transition-transform group-data-[state=open]/subcollapsible:rotate-180" />
                                           </button>
                                         </CollapsibleTrigger>
                                       </div>
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