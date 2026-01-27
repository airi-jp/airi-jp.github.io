import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Heart, User, Code, Gamepad2, MessageCircle } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Heart },
  { href: "/hobbies", label: "Hobbies", icon: Gamepad2 },
];

export function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 glass-card rounded-full px-2 py-2 shadow-xl shadow-primary/10">
      <ul className="flex items-center gap-2">
        {navItems.map((item) => {
          const isActive = location === item.href;
          const Icon = item.icon;
          
          return (
            <li key={item.href}>
              <Link href={item.href}>
                <div className={`
                  relative flex items-center justify-center w-12 h-12 rounded-full cursor-pointer
                  transition-colors duration-300
                  ${isActive ? 'text-white' : 'text-muted-foreground hover:text-primary'}
                `}>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">
                    <Icon className="w-6 h-6" />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
