import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

const CoursesSection: React.FC = () => {
  return (
    <section id="courses" className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
         <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: 'spring', stiffness: 100, damping: 25 }}
        >
          <h2 className="font-space-grotesk text-4xl md:text-5xl font-bold text-center mb-6">
            🎓 Masterclasses in Clarity
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 100, damping: 25, delay: 0.2 }}
          className="mt-12 max-w-2xl mx-auto bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center"
        >
           <motion.div
             animate={{
                scale: [1, 1.05, 1],
             }}
             transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
             }}
             className="relative w-20 h-20 mx-auto"
          >
            <BrainCircuit className="w-20 h-20 text-[#C7A94A] text-glow-gold" />
          </motion.div>
          <h3 className="font-space-grotesk text-3xl font-bold mt-6">Coming Soon</h3>
          <p className="text-[#9CA3AF] mt-2">
            In-depth courses are in development to help you master the on-chain world.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
