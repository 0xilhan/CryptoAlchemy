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
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 22 },
  },
};

const ConnectSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const donateLink: SocialLink = { id: 99, name: 'Donate', url: '#', icon: Heart, color: '#4BD0A0' };

  return (
    <section id="connect" className="relative py-24 bg-black/20">
      <div className="container mx-auto px-6 text-center">
        
        {/* Title */}
        <motion.h2
          className="font-space-grotesk text-4xl md:text-5xl font-semibold mb-3 flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Zap className="w-8 h-8 text-yellow-400 opacity-80" />
          <span className="tracking-tight">Join the Circle</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-14 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Stay connected across platforms. Follow, reach out, or support the work.
        </motion.p>

        {/* Social Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
                className="
                  group block rounded-xl 
                  bg-[#101012]/60 
                  border border-white/5 
                  hover:border-white/10 
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-1 hover:bg-[#151517]/70
                "
              >
                <div className="px-6 py-7 flex flex-col items-center">
                  <link.icon
                    className="w-8 h-8 mb-3 opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                    style={{ color: link.color }}
                  />
                  <span className="text-white font-medium tracking-wide">
                    {link.name}
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <DonateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Floating DM bubble */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start group">
        <div className="bg-[#0F1720]/90 text-white text-xs px-3 py-1.5 rounded-md mb-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10">
          Need help? DM
        </div>

        <a href="https://x.com/cryptoalchemy29" target="_blank">
          <img
            src="https://pbs.twimg.com/profile_images/1954480691242057728/Fg8Nrt_U_400x400.jpg"
            className="w-14 h-14 rounded-full border border-cyan-400/30 hover:scale-105 transition-transform duration-300 animate-float"
            alt="DM"
          />
        </a>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .animate-float {
            animation: float 3.8s ease-in-out infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default ConnectSection;
