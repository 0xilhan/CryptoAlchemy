import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import type { SocialLink } from '../types';
import DonateModal from './DonateModal';
import { Heart, Zap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 25 },
  },
};

const ConnectSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const donateLink: SocialLink = { id: 99, name: 'Donate', url: '#', icon: Heart, color: '#4BD0A0' };

  return (
    <section id="connect" className="relative py-20 md:py-32 bg-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="font-space-grotesk text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: 'spring', stiffness: 100, damping: 25 }}
        >
          <Zap className="w-10 h-10 text-yellow-400" />
          Join the Circle
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-[#9CA3AF] mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: 'spring', stiffness: 100, damping: 25, delay: 0.2 }}
        >
          Follow my work, join the conversation, or reach out directly. Find me on your favorite platforms.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[...SOCIAL_LINKS, donateLink].map((link) => (
            <motion.div key={link.id} variants={itemVariants}>
              <a
                href={link.url}
                onClick={
                  link.name === 'Donate'
                    ? (e) => {
                        e.preventDefault();
                        setIsModalOpen(true);
                      }
                    : undefined
                }
                target={link.name === 'Donate' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="group block bg-[#161618] border border-gray-800 rounded-2xl h-full transition-all duration-300 hover:border-gray-700 hover:-translate-y-1"
                data-cursor-hover
              >
                <div className="p-6 flex flex-col items-center justify-center text-center">
                  <link.icon
                    className="w-10 h-10 mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: link.color }}
                  />
                  <span className="font-semibold text-white transition-colors duration-300">
                    {link.name}
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <DonateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ✨ Floating DM Character (Bottom-left, auto scales for phones) */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start group">
        <div className="bg-[#0F1720]/90 text-white text-sm px-3 py-2 rounded-lg mb-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md border border-[#222]">
          Need help? DM me 💬
        </div>

        <a href="https://t.me/yourtelegramusername" target="_blank" rel="noopener noreferrer">
          <img
            src="/static/character-dm.gif"
            alt="DM me"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#00FFFF]/30 hover:scale-105 transition-transform duration-300 animate-float"
          />
        </a>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          .animate-float {
            animation: float 3.5s ease-in-out infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default ConnectSection;
