import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical } from 'lucide-react';

const ProductsSection: React.FC = () => {
  return (
    <section id="products" className="py-20 md:py-32 bg-black/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="font-space-grotesk text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          🛠️ Tools for the Alchemist
        </motion.h2>
        
        <motion.div
          className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8 md:p-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        >
          <motion.div
            className="relative inline-block mb-6"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
             <FlaskConical className="w-16 h-16 text-[#4BD0FF]" />
             <div className="absolute inset-0 -z-10 bg-[#4BD0FF] blur-2xl rounded-full"/>
          </motion.div>
          <h3 className="font-space-grotesk text-3xl font-bold text-white mb-4">
            Coming Soon
          </h3>
          <p className="text-lg text-gray-400">
            New tools are being forged in the alchemy lab. Stay tuned for potent digital assets designed to sharpen your on-chain edge.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductsSection;
