import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import type { SocialLink } from '../types';
import DonateModal from './DonateModal';
import { Heart } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const ConnectSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="connect" className="py-20 md:py-32 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="font-space-grotesk text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          ⚡ Join the Circle
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-[#9CA3AF] mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Follow my work, join the conversation, or reach out directly. Find me on your favorite platforms.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {SOCIAL_LINKS.map((link: SocialLink) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center justify-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl transition-colors duration-300 hover:bg-gray-800/70"
              data-cursor-hover
              style={{ '--glow-color': link.color } as React.CSSProperties}
            >
              <link.icon className="w-10 h-10 mb-3 transition-all duration-300 group-hover:scale-110 group-hover:[filter:drop-shadow(0_0_10px_var(--glow-color))]" style={{ color: link.color }} />
              <span className="font-semibold text-white transition-colors duration-300">{link.name}</span>
            </motion.a>
          ))}
           <motion.button
              onClick={() => setIsModalOpen(true)}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center justify-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl transition-colors duration-300 hover:bg-gray-800/70"
              data-cursor-hover
              style={{ '--glow-color': '#C7A94A' } as React.CSSProperties}
            >
              <Heart className="w-10 h-10 mb-3 text-[#C7A94A] transition-all duration-300 group-hover:scale-110 group-hover:[filter:drop-shadow(0_0_10px_var(--glow-color))]" />
              <span className="font-semibold text-white">Donate</span>
            </motion.button>
        </motion.div>
      </div>
       <DonateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default ConnectSection;