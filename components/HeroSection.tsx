// FIX: Removed extraneous file markers from the top of the file.
import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
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

const tagline = "Empowering Crypto Self-Reliance.";

const HeroSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { stiffness: 100, damping: 30, mass: 0.1 };

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [-5, 5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [5, -5]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto" style={{ perspective: '1000px' }}>
        
        <motion.div 
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
          className="p-8 md:p-12 lg:p-16 bg-black/40 backdrop-blur-lg rounded-3xl border border-[#4BD0FF]/30 shadow-[0_0_30px_rgba(75,208,255,0.2),inset_0_0_15px_rgba(75,208,255,0.1)]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        >
          <motion.h1 
            className="font-space-grotesk text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-5xl mx-auto leading-tight bg-gradient-to-r from-[#4BD0FF] via-[#C7A94A] to-[#FF6F61] bg-[length:200%_200%] text-transparent bg-clip-text animate-gradientWave"
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
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 1.8 }}
          >
            Writer. Builder. Crypto storyteller.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 2.1 }}
        >
          <motion.a
            href="#threads"
            onClick={(e) => handleSmoothScroll(e, '#threads')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer bg-transparent border-2 border-[#C7A94A] text-[#C7A94A] font-bold py-3 px-8 rounded-full transition-all duration-200 hover:bg-[#C7A94A] hover:text-[#0D0D0D] hover:shadow-[0_0_20px_#C7A94A] flex items-center gap-3"
          >
            <ScrollText className="w-5 h-5" />
            Threads on X
          </motion.a>

          <motion.a
            href="#videos"
            onClick={(e) => handleSmoothScroll(e, '#videos')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer bg-transparent border-2 border-[#4BD0FF] text-[#4BD0FF] font-bold py-3 px-8 rounded-full transition-all duration-200 hover:bg-[#4BD0FF] hover:text-[#0D0D0D] hover:shadow-[0_0_20px_#4BD0FF] flex items-center gap-3"
          >
            <Clapperboard className="w-5 h-5" />
            Watch Videos
          </motion.a>
        </motion.div>
      </div>

      {/* Gradient Wave Animation */}
      <style jsx>{`
        @keyframes gradientWave {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientWave {
          animation: gradientWave 5s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
