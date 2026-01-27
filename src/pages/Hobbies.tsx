import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { EasterEgg } from "@/components/EasterEgg";
import { 
  Code2, Gamepad2, Globe2, 
  Terminal, Monitor, Database,
  GraduationCap, Box
} from "lucide-react";
import { SiPython, SiLua, SiJavascript, SiTypescript, SiCplusplus } from "react-icons/si";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Hobbies() {
  return (
    <div className="min-h-screen pb-24 p-4 md:p-8 max-w-6xl mx-auto">
      <Navigation />
      <EasterEgg />

      <div className="space-y-12 py-8">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-display text-foreground">My Hobbies</h1>
          <p className="text-muted-foreground">The things that make my heart sparkle ✨</p>
        </header>

        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Coding Section */}
          <motion.div variants={item} className="glass-card p-6 rounded-3xl space-y-4 hover-bounce">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-2">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl">Coding</h3>
            <p className="text-sm text-muted-foreground">Building cute things with logic and caffeine.</p>
            
            <div className="space-y-3 pt-2">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">I Know</span>
                <div className="flex flex-wrap gap-2">
                  <TechBadge icon={SiPython} label="Python" color="bg-blue-100 text-blue-700" />
                  <TechBadge icon={SiLua} label="Lua" color="bg-indigo-100 text-indigo-700" />
                  <TechBadge icon={Monitor} label="UI Design" color="bg-pink-100 text-pink-700" />
                </div>
              </div>
              
              <div className="space-y-2">
                <span className="text-xs font-semibold text-accent-foreground uppercase tracking-wider">Learning</span>
                <div className="flex flex-wrap gap-2">
                  <TechBadge icon={SiJavascript} label="JS" color="bg-yellow-100 text-yellow-700" />
                  <TechBadge icon={SiTypescript} label="TS" color="bg-blue-100 text-blue-700" />
                  <TechBadge icon={SiCplusplus} label="C++" color="bg-blue-50 text-blue-600" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Languages Section */}
          <motion.div variants={item} className="glass-card p-6 rounded-3xl space-y-4 hover-bounce">
            <div className="w-12 h-12 rounded-2xl bg-secondary/40 flex items-center justify-center text-secondary-foreground mb-2">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl">Languages</h3>
            <p className="text-sm text-muted-foreground">Connecting with people around the world.</p>
            
            <div className="space-y-4 pt-2">
              <LanguageBar language="English" level="Fluent" progress={100} color="bg-primary" />
              <LanguageBar language="Filipino" level="Fluent" progress={100} color="bg-primary" />
              <LanguageBar language="Japanese" level="Beginner" progress={30} color="bg-accent" />
            </div>
          </motion.div>

          {/* Games Section */}
          <motion.div variants={item} className="glass-card p-6 rounded-3xl space-y-4 hover-bounce md:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 rounded-2xl bg-accent/30 flex items-center justify-center text-accent-foreground mb-2">
              <Gamepad2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl">Games</h3>
            <p className="text-sm text-muted-foreground">Where I spend my free time adventuring.</p>
            
            <div className="grid grid-cols-1 gap-3 pt-2">
              <GameCard 
                name="Genshin Impact" 
                icon="✨" 
                description="Exploring Teyvat"
                bg="bg-purple-50 hover:bg-purple-100"
              />
              <GameCard 
                name="Minecraft" 
                icon={<Box className="w-5 h-5" />} 
                description="Building cozy houses"
                bg="bg-green-50 hover:bg-green-100"
              />
              <GameCard 
                name="Geometry Dash" 
                icon="🟦" 
                description="Rage quitting... a lot"
                bg="bg-blue-50 hover:bg-blue-100"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function TechBadge({ icon: Icon, label, color }: { icon: any, label: string, color: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${color}`}>
      <Icon className="w-4 h-4" />
      {label}
    </span>
  );
}

function LanguageBar({ language, level, progress, color }: { language: string, level: string, progress: number, color: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{language}</span>
        <span className="text-muted-foreground text-xs">{level}</span>
      </div>
      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full ${color}`} 
        />
      </div>
    </div>
  );
}

function GameCard({ name, icon, description, bg }: { name: string, icon: any, description: string, bg: string }) {
  return (
    <div className={`flex items-center gap-4 p-3 rounded-2xl transition-colors ${bg}`}>
      <div className="w-10 h-10 flex items-center justify-center text-xl bg-white/50 rounded-xl shadow-sm">
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-sm">{name}</h4>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
