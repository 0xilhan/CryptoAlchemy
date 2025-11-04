import React from 'react';
import { motion } from 'framer-motion';
import { ScrollText, Clapperboard } from 'lucide-react';

const wordContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 100,
    },
  },
};

const tagline = "Turning on-chain chaos into clarity — one thread at a time.";

const HeroSection: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Assuming header height is around 80px. A more robust solution might pass ref or use context.
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
      <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto">
        
        <motion.div 
            className="p-8 md:p-12 lg:p-16 bg-black/40 backdrop-blur-lg rounded-3xl border border-[#4BD0FF]/30 shadow-[0_0_30px_rgba(75,208,255,0.2),inset_0_0_15px_rgba(75,208,255,0.1)]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
            <motion.h1 
              className="font-space-grotesk text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-5xl mx-auto leading-tight"
              variants={wordContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {tagline.split(" ").map((word, index) => (
                <motion.span key={index} variants={wordVariants} className="inline-block mr-3 lg:mr-4">
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-[#9CA3AF] mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              Writer. Builder. Crypto storyteller.
            </motion.p>
        </motion.div>
        
        <motion.div 
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.8 }}
        >
          <motion.a href="#threads" onClick={(e) => handleSmoothScroll(e, '#threads')} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="cursor-pointer bg-transparent border-2 border-[#C7A94A] text-[#C7A94A] font-bold py-3 px-8 rounded-full transition-all duration-200 hover:bg-[#C7A94A] hover:text-[#0D0D0D] hover:shadow-[0_0_20px_#C7A94A] flex items-center gap-3">
            <ScrollText className="w-5 h-5" />
            Threads on X
          </motion.a>
          <motion.a href="#videos" onClick={(e) => handleSmoothScroll(e, '#videos')} whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="cursor-pointer bg-transparent border-2 border-[#4BD0FF] text-[#4BD0FF] font-bold py-3 px-8 rounded-full transition-all duration-200 hover:bg-[#4BD0FF] hover:text-[#0D0D0D] hover:shadow-[0_0_20px_#4BD0FF] flex items-center gap-3">
            <Clapperboard className="w-5 h-5" />
            Watch Videos
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;