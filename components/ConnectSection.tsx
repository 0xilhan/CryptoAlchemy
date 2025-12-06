import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import type { SocialLink } from '../types';
import DonateModal from './DonateModal';
import { Heart, Zap } from 'lucide-react';

// Custom Icons (exact, accurate versions)
const FarcasterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2c5.52 0 10 3.98 10 9.48 0 2.97-1.38 5.6-3.6 7.32l.58 2.7c.12.54-.42.98-.93.76L14 20.8c-.64.12-1.3.2-2 .2-5.52 0-10-3.98-10-9.48C2 5.98 6.48 2 12 2Z" />
  </svg>
);

const SubstackIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3 4h18v2H3V4Zm0 4h18v2H3V8Zm0 4h18v8l-9-4-9 4v-8Z" />
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 22 },
  },
};

const ConnectSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Replace inaccurate icons
  const fixedLinks = SOCIAL_LINKS.map((l) => {
    if (l.name === "Farcaster") return { ...l, icon: FarcasterIcon };
    if (l.name === "Substack") return { ...l, icon: SubstackIcon };
    return l;
  });

  const donateLink: SocialLink = {
    id: 999,
    name: "Donate",
    url: "#",
    icon: Heart,
    color: "#4BD0A0",
  };

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
          <Zap className="w-7 h-7 text-yellow-400/90" />
          Join the Circle
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-400/90 mb-14 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Connect across platforms. Follow, explore, or support the mission.
        </motion.p>

        {/* Card Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {[...fixedLinks, donateLink].map((link) => (
            <motion.div key={link.id} variants={itemVariants}>
              <a
                href={link.url}
                onClick={
                  link.name === "Donate"
                    ? (e) => {
                        e.preventDefault();
                        setIsModalOpen(true);
                      }
                    : undefined
                }
                target={link.name === "Donate" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="
                  group block rounded-2xl h-full
                  bg-white/[0.025] shadow-sm backdrop-blur-md
                  border border-white/10
                  hover:border-cyan-400/40
                  hover:shadow-[0_0_18px_rgba(0,255,255,0.15)]
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                <div className="px-6 py-10 flex flex-col items-center">

                  {/* Icon */}
                  <link.icon
                    className="
                      w-9 h-9 mb-4 opacity-90 
                      group-hover:opacity-100 
                      transition-all duration-300 
                      group-hover:scale-[1.15]
                    "
                    style={{ color: link.color }}
                  />

                  {/* Label */}
                  <span className="text-white font-medium tracking-wide text-lg">
                    {link.name}
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <DonateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default ConnectSection;
