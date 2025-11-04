import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

const CoursesSection: React.FC = () => {
  return (
    <section id="courses" className="py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="font-space-grotesk text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: 'spring', stiffness: 100, damping: 25 }}
        >
          🎓 Masterclasses in Clarity
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 100, damping: 25, mass: 0.5 }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center">
             <motion.div
              className="inline-block p-4 bg-gray-800/50 rounded-full mb-6 border border-gray-700"
               animate={{ y: [0, -8, 0] }}
               transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <BrainCircuit className="w-12 h-12 text-[#C7A94A] glow-gold" />
            </motion.div>
            <h3 className="font-space-grotesk text-3xl font-bold text-white">Coming Soon</h3>
            <p className="text-[#9CA3AF] mt-4 max-w-md mx-auto">
              In-depth courses designed to help you master the complexities of the on-chain world are in development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;
