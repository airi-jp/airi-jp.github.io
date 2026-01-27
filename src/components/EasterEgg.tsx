import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles } from "lucide-react";

export function EasterEgg() {
  const [found, setFound] = useState(false);

  const handleClick = () => {
    setFound(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FFC0CB', '#E6E6FA', '#E0FFFF'] // Pastel pink, lavender, cyan
    });
    
    setTimeout(() => setFound(false), 2000);
  };

  return (
    <>
      <motion.button
        className="fixed top-4 right-4 text-primary/30 hover:text-primary transition-colors cursor-help z-40"
        whileHover={{ rotate: 180, scale: 1.2 }}
        onClick={handleClick}
        title="Secret!"
      >
        <Sparkles className="w-6 h-6" />
      </motion.button>
      
      <AnimatePresence>
        {found && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 right-4 glass-card p-4 rounded-xl shadow-lg border-primary/20 z-50"
          >
            <p className="text-sm font-semibold text-primary">Yay! You found a sparkle! ✨</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
