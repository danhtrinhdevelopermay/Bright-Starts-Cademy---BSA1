import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LayoutDashboard,
  Share2,
  Users,
  MessageCircle,
  Menu,
  CreditCard,
  Brain,
  FileText,
  Calendar,
  Search,
  User,
  Trophy,
  Settings,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/hooks/use-auth";
import { useTranslation } from "@/components/TranslationProvider";
import { logout } from "@/lib/auth";
import { motion } from "framer-motion";

export function BottomNavigation() {
  const [location] = useLocation();
  const { user } = useAuth();
  const { t } = useTranslation();

  const mainNavItems = [
    { name: t('nav.posts'), href: "/posts", icon: Share2 },
    { name: t('nav.groups'), href: "/groups", icon: Users },
    { name: t('nav.dashboard'), href: "/dashboard", icon: LayoutDashboard, isMain: true },
    { name: "Chat", href: "/chat", icon: MessageCircle },
  ];

  const moreMenuItems = [
    { name: t('nav.flashcards'), href: "/flashcards", icon: CreditCard },
    { name: t('nav.quizzes'), href: "/quizzes", icon: Brain },
    { name: t('nav.notes'), href: "/notes", icon: FileText },
    { name: t('nav.assignments'), href: "/assignments", icon: Calendar },
    { name: "Discover Users", href: "/users", icon: Search },
    { name: t('nav.profile'), href: "/profile", icon: User },
    { name: "Achievements", href: "/achievements", icon: Trophy },
    { name: t('nav.settings'), href: "/settings", icon: Settings },
  ];

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (!user) return null;

  const isMoreMenuActive = moreMenuItems.some(item => location === item.href);

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30, delay: 0.1 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
    >
      {/* Gradient overlay background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-transparent backdrop-blur-2xl" />
      
      {/* Glass morphism container */}
      <div className="relative bg-gradient-to-r from-card/90 via-card/95 to-card/90 backdrop-blur-3xl border-t border-border/30 shadow-2xl shadow-primary/5">
        {/* Subtle top glow */}
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
        <div className="flex items-center justify-around h-16 px-3 relative">
        {mainNavItems.map((item, index) => {
          const isActive = location === item.href;
          const isMainMenu = item.isMain;
          
          return (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={{ 
                  scale: 1.25, 
                  y: -8,
                  rotateZ: 3,
                  transition: { type: "spring", stiffness: 500, damping: 25 }
                }}
                whileTap={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="relative"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "relative flex items-center justify-center h-12 w-12 rounded-2xl transition-all duration-500 overflow-hidden group",
                    "hover:bg-gradient-to-br hover:from-primary/20 hover:via-primary/10 hover:to-transparent",
                    "hover:shadow-lg hover:shadow-primary/20 hover:border hover:border-primary/20",
                    isActive && "text-primary",
                    isMainMenu && isActive && [
                      "bg-gradient-to-br from-primary via-primary/90 to-secondary",
                      "text-primary-foreground shadow-xl shadow-primary/30",
                      "border border-primary/30 relative overflow-hidden"
                    ],
                    isMainMenu && !isActive && "bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10",
                    !isMainMenu && isActive && "bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 shadow-md shadow-primary/10",
                    !isMainMenu && !isActive && "hover:bg-gradient-to-br hover:from-muted/50 hover:to-muted/20"
                  )}
                >
                  {/* Shimmer effect for active main button */}
                  {isMainMenu && isActive && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                  
                  <motion.div
                    initial={false}
                    animate={isActive ? { y: -1, scale: 1.1 } : { y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    className="relative z-10"
                  >
                    <item.icon className={cn(
                      "transition-all duration-300",
                      isMainMenu ? "h-7 w-7" : "h-6 w-6",
                      isActive && "drop-shadow-md filter",
                      isMainMenu && isActive && "text-white drop-shadow-lg"
                    )} />
                  </motion.div>
                  
                  {/* Enhanced active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={cn(
                        "absolute -bottom-1 rounded-full",
                        isMainMenu ? "w-3 h-1 bg-white/80" : "w-2 h-0.5 bg-primary"
                      )}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  {/* Pulse effect for main menu when active */}
                  {isMainMenu && isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-primary/20"
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                  )}
                </Button>
                
                {/* Label tooltip on hover */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  whileHover={{ 
                    opacity: 1, 
                    y: -10, 
                    scale: 1,
                    transition: { type: "spring", stiffness: 400, damping: 20 }
                  }}
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 pointer-events-none z-20"
                >
                  <div className="bg-popover/95 backdrop-blur-sm border border-border/50 rounded-lg px-2 py-1 shadow-lg">
                    <span className="text-xs font-medium text-popover-foreground whitespace-nowrap">
                      {item.name}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </Link>
          );
        })}

        {/* Enhanced More Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <motion.div
              whileHover={{ 
                scale: 1.1, 
                y: -2,
                transition: { type: "spring", stiffness: 500, damping: 25 }
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="relative"
            >
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "relative flex items-center justify-center h-12 w-12 rounded-2xl transition-all duration-500 overflow-hidden group",
                  "hover:bg-gradient-to-br hover:from-primary/20 hover:via-primary/10 hover:to-transparent",
                  "hover:shadow-lg hover:shadow-primary/20 hover:border hover:border-primary/20",
                  isMoreMenuActive && "bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 shadow-md shadow-primary/10 text-primary"
                )}
              >
                <motion.div
                  initial={false}
                  animate={isMoreMenuActive ? { y: -1, rotate: 180 } : { y: 0, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  className="relative z-10"
                >
                  <Menu className="h-6 w-6 transition-all duration-300" />
                </motion.div>
                
                {/* Enhanced active indicator */}
                {isMoreMenuActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 w-2 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </Button>
              
              {/* Label tooltip on hover */}
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                whileHover={{ opacity: 1, y: -5, scale: 1 }}
                className="absolute -top-12 left-1/2 transform -translate-x-1/2 pointer-events-none z-20"
              >
                <div className="bg-popover/95 backdrop-blur-sm border border-border/50 rounded-lg px-2 py-1 shadow-lg">
                  <span className="text-xs font-medium text-popover-foreground whitespace-nowrap">
                    {t('common.more') || 'More'}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64 mb-4 bg-card/98 backdrop-blur-2xl border border-border/40 shadow-2xl shadow-black/10 rounded-2xl overflow-hidden">
            {/* Enhanced gradient header */}
            <div className="px-4 py-3 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-b border-border/30">
              <div className="text-sm font-semibold text-muted-foreground tracking-wide">{t('dashboard.quickActions')}</div>
            </div>
            
            {moreMenuItems.map((item, index) => {
              const isActive = location === item.href;
              return (
                <DropdownMenuItem key={item.name} asChild className="p-0">
                  <Link href={item.href}>
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ 
                        x: 6, 
                        scale: 1.02,
                        transition: { type: "spring", stiffness: 400, damping: 20 }
                      }}
                      className={cn(
                        "flex items-center gap-4 w-full cursor-pointer transition-all duration-300 p-3 rounded-lg mx-2 my-1",
                        "hover:bg-gradient-to-r hover:from-primary/10 hover:to-primary/5 hover:shadow-sm",
                        isActive && "text-primary bg-gradient-to-r from-primary/15 to-primary/8 border-l-2 border-primary shadow-md"
                      )}
                    >
                      <motion.div
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className={cn(
                          "p-2 rounded-xl transition-all duration-300",
                          isActive ? "bg-primary/20 text-primary" : "bg-muted/50"
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                      </motion.div>
                      <div className="flex flex-col">
                        <span className="font-medium text-sm">{item.name}</span>
                        {isActive && (
                          <motion.span 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-xs text-primary/70"
                          >
                            Currently active
                          </motion.span>
                        )}
                      </div>
                      {isActive && (
                        <motion.div
                          layoutId="dropdownActive"
                          className="ml-auto w-2 h-2 bg-primary rounded-full"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </motion.div>
                  </Link>
                </DropdownMenuItem>
              );
            })}
            
            <DropdownMenuSeparator className="mx-2 bg-gradient-to-r from-transparent via-border to-transparent" />
            
            <DropdownMenuItem onClick={handleLogout} className="p-0 mx-2 mb-2">
              <motion.div 
                whileHover={{ 
                  x: 6, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 20 }
                }}
                className="flex items-center gap-4 w-full p-3 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-destructive/10 hover:to-destructive/5 text-destructive group"
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="p-2 rounded-xl bg-destructive/10 group-hover:bg-destructive/20 transition-all duration-300"
                >
                  <LogOut className="h-4 w-4" />
                </motion.div>
                <span className="font-medium text-sm">Log out</span>
              </motion.div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        </div>
      </div>
    </motion.div>
  );
}