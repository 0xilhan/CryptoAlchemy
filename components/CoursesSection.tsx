import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';

const CoursesSection: React.FC = () => {
  return (
    <section id="courses" className="py-20 md:py-32 bg-[#0D0D0D] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="font-space-grotesk text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          🎓 Masterclasses in Clarity
        </motion.h2>
        
        <motion.div
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 md:p-16 text-center max-w-3xl mx-auto"
           initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
        >
          <motion.div
            className="relative inline-block mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
             <BrainCircuit className="w-16 h-16 text-[#C7A94A]" />
             <div className="absolute inset-0 -z-10 bg-[#C7A94A] blur-2xl rounded-full"/>
          </motion.div>
          <h3 className="font-space-grotesk text-3xl font-bold text-white mb-4">
            Coming Soon
          </h3>
          <p className="text-lg text-gray-400">
            Advanced knowledge is being distilled. Prepare for masterclasses that will transform your on-chain perspective and elevate your strategies.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CoursesSection;
