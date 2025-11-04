import React from 'react';
import { motion } from 'framer-motion';
import { YOUTUBE_SHORTS_IDS } from '../constants';
import { PlayCircle } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 20 } 
  },
};

const VideoSection: React.FC = () => {
  return (
    <section id="videos" className="py-20 md:py-32 bg-black/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="font-space-grotesk text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          🎥 Watch My Videos
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {YOUTUBE_SHORTS_IDS.map((id) => (
            <motion.a
              key={id}
              href={`https://www.youtube.com/watch?v=${id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-[16/9] rounded-lg overflow-hidden group border-2 border-transparent hover:border-[#4BD0FF] transition-all duration-200"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              data-cursor-hover
            >
              <img
                src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
                alt="YouTube video thumbnail"
                className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-200 flex items-center justify-center">
                <PlayCircle className="w-16 h-16 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-200" />
              </div>
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-[#C7A94A] text-[#C7A94A] font-bold py-3 px-8 rounded-full transition-all duration-200 hover:bg-[#C7A94A] hover:text-[#0D0D0D] hover:shadow-[0_0_20px_#C7A94A]">
            Watch All on YouTube
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;