import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ComicBookAnimationProps {
  text: string;
  isOpen: boolean;
  onAnimationComplete: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: -50, rotate: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
};

const ComicBookAnimation: React.FC<ComicBookAnimationProps> = ({ text, isOpen, onAnimationComplete }) => {
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        onAnimationComplete();
      }, text.length * 100 + 3000); // Stagger + 3s visible
      return () => clearTimeout(timer);
    }
  }, [isOpen, text, onAnimationComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="absolute top-0 left-0 w-full h-1/2 flex items-center justify-center pointer-events-none z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ animation: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both' }}
          >
            <motion.div
              className="absolute -inset-8 z-[-1] bg-white opacity-0"
              style={{
                borderRadius: '50%',
                filter: 'blur(40px)',
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [0.5, 1.5],
                transition: { duration: 0.5, delay: 0.2 },
              }}
            />
            {text.split('').map((char, index) => (
              <motion.span
                key={index}
                className="font-bangers text-6xl md:text-8xl lg:text-9xl text-white"
                style={{
                  textShadow:
                    '4px 4px 0px #000, -4px -4px 0px #000, 4px -4px 0px #000, -4px 4px 0px #000, 4px 0px 0px #000, -4px 0px 0px #000, 0px 4px 0px #000, 0px -4px 0px #000',
                  display: 'inline-block',
                  margin: '0 -0.05em',
                  transformOrigin: 'bottom center',
                }}
                variants={letterVariants}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ComicBookAnimation;
