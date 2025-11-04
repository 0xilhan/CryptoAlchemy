
import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-[#0D0D0D] flex flex-col justify-center items-center z-50">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="font-space-grotesk text-2xl md:text-4xl text-white text-glow-cyan tracking-widest">
          ALCHEMY INITIALIZING…
        </h1>
        <div className="w-64 md:w-96 h-1 mt-6 bg-cyan-500/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#4BD0FF] rounded-full glow-cyan"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
