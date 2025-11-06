// FIX: Removed extraneous file markers from the top of the file.
import React from 'react';
import { motion } from 'framer-motion';
import { FEATURED_THREADS } from '../constants';
import type { Thread } from '../types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 25, mass: 0.5 },
  },
};

const ThreadCard: React.FC<{ thread: Thread }> = ({ thread }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl relative overflow-hidden group transition-all duration-300 hover:border-[#C7A94A]/80 hover:shadow-[0_0_25px_rgba(199,169,74,0.3)] flex flex-col"
    >
      <div className="absolute -top-1 -left-1 w-1/2 h-1/2 bg-gradient-to-br from-[#c7a94a]/30 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {thread.thumbnailUrl && (
        <div
          style={{
            position: 'relative',
            width: '100%',
            paddingTop: '56.25%', // 16:9 aspect ratio
            overflow: 'hidden',
            borderTopLeftRadius: '0.75rem',
            borderTopRightRadius: '0.75rem',
          }}
        >
          <img
            src={thread.thumbnailUrl}
            alt={thread.title}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            }}
            className="group-hover:scale-105"
          />
        </div>
      )}

      <div className="relative z-10 flex flex-col h-full p-6 flex-grow">
        <span className="bg-[#c7a94a]/20 text-[#c7a94a] text-xs font-bold px-3 py-1 rounded-full self-start">
          {thread.tag}
        </span>
        <h3 className="font-space-grotesk text-xl font-bold mt-4 flex-grow">
          {thread.title}
        </h3>
        <a
          href={thread.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 text-[#4BD0FF] font-semibold self-start hover:underline"
        >
          Read on X →
        </a>
      </div>
    </motion.div>
  );
};

const FeaturedThreadsSection: React.FC = () => {
  return (
    <section id="threads" className="py-8 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="font-space-grotesk text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: 'spring', stiffness: 100, damping: 25 }}
        >
          📜 Featured Threads
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {FEATURED_THREADS.map((thread) => (
            <ThreadCard key={thread.id} thread={thread} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedThreadsSection;
