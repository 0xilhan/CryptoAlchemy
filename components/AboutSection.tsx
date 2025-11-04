// FIX: Removed extraneous file markers from the top of the file.
import React from 'react';
import { motion } from 'framer-motion';
import { AlchemyLogo } from './icons';

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.02, delayChildren: i * 0.1 },
  }),
};

const textWordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
};

const AnimatedText: React.FC<{ text: string }> = ({ text }) => {
  const words = text.split(' ');
  return (
    <motion.p
      className="text-[#9CA3AF] text-lg leading-relaxed"
      variants={textContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={textWordVariants}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};


const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#0D0D0D] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 100, damping: 25 }}
          >
            <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold mb-6">
              🧪 The Alchemy Behind the Name
            </h2>
            <div className="space-y-4">
              <AnimatedText text="In the chaotic crucible of crypto, my goal is to transmute noise into signal. Like ancient alchemists seeking gold, I dive into complex protocols, market dynamics, and emerging narratives to distill clear, actionable insights." />
              <AnimatedText text="This isn't just about alpha; it's about building a deeper understanding of the systems that will shape our future. Join me in decoding the digital frontier." />
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ type: 'spring', stiffness: 100, damping: 25 }}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <AlchemyLogo className="w-64 h-64 text-[#C7A94A]" />
              </motion.div>
              <motion.div 
                className="absolute inset-0 border-2 border-[#4BD0FF]/50 rounded-full"
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.1, 0.5]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;