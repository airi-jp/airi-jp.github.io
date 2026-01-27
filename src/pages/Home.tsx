import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { EasterEgg } from "@/components/EasterEgg";
import { Badge } from "@/components/ui/badge";
import { Box, MapPin, Calendar, Heart, Mail, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen pb-24 flex flex-col items-center justify-center p-4">
      <Navigation />
      <EasterEgg />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl text-center space-y-8"
      >
        {/* Cute Box Header */}
        <div className="relative inline-block">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="p-8 bg-white rounded-3xl shadow-xl shadow-primary/20 border-4 border-primary/10 flex items-center justify-center group"
          >
            <Box className="w-24 h-24 md:w-32 md:h-32 text-primary transition-transform group-hover:scale-110" />
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-lg text-2xl"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            🌸
          </motion.div>
        </div>

        {/* Introduction */}
        <div className="space-y-4">
          <motion.h1 
            className="text-4xl md:text-6xl text-foreground font-display"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm <span className="text-primary bg-clip-text">Airi!</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Just a 25-year-old girl navigating the world of code, pixels, and games. 
            Welcome to my cozy digital corner! ✨
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-3 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <Calendar className="w-3 h-3 mr-2" /> 25 Years Old
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full bg-accent/20 text-accent-foreground hover:bg-accent/30 transition-colors">
              <MapPin className="w-3 h-3 mr-2" /> Digital World
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm rounded-full bg-secondary/30 text-secondary-foreground hover:bg-secondary/40 transition-colors">
              <Heart className="w-3 h-3 mr-2" /> INFP
            </Badge>
          </motion.div>

          <motion.div 
            className="flex justify-center gap-4 pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-2xl gap-2 hover-elevate"
              asChild
            >
              <a href="mailto:me@airijp.im.a.dev">
                <Mail className="w-5 h-5" />
                Email Me
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-2xl hover-elevate"
              asChild
            >
              <a href="https://github.com/airi-jp" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
