// FIX: Removed extraneous file markers from the top of the file.
import React from 'react';
import { motion } from 'framer-motion';
import { YOUTUBE_SHORTS_IDS } from '../constants';

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
    transition: { type: 'spring', stiffness: 100, damping: 25, mass: 0.5 } 
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
          transition={{ type: 'spring', stiffness: 100, damping: 25 }}
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
            <motion.div
              key={id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative rounded-lg overflow-hidden border-2 border-transparent hover:border-[#4BD0FF] transition-all duration-200"
            >
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  paddingTop: '56.25%', // 16:9 aspect ratio
                  overflow: 'hidden',
                  borderRadius: '12px',
                }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title={`YouTube video ${id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                  }}
                ></iframe>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100, damping: 25, delay: 0.5 }}
        >
          <a
            href="https://youtube.com/@cryptoalchemy29"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-[#C7A94A] text-[#C7A94A] font-bold py-3 px-8 rounded-full transition-all duration-200 hover:bg-[#C7A94A] hover:text-[#0D0D0D] hover:shadow-[0_0_20px_#C7A94A]"
          >
            Watch All on YouTube
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
