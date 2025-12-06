import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';
import type { SocialLink } from '../types';
import DonateModal from './DonateModal';
import { Heart, Zap } from 'lucide-react';

// Correct Icons
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
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

const ConnectSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fix icons inside link list
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
      <div className="container mx-auto px-6">

        {/* Title */}
        <motion.h2
          className="font-space-grotesk text-4xl md:text-5xl font-semibold mb-4 flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Zap className="w-7 h-7 text-yellow-400/90" />
          Join the Circle
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-400/90 mb-12 max-w-xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Follow my work across platforms. Stay connected & support the mission.
        </motion.p>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl"
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
                  block rounded-xl w-full
                  bg-white/[0.03] backdrop-blur-md
                  border border-white/10
                  hover:border-cyan-400/40
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_0_14px_rgba(0,255,255,0.12)]
                  px-6 py-5
                "
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <link.icon
                    className="w-7 h-7 opacity-90 group-hover:opacity-100 transition-all"
                    style={{ color: link.color }}
                  />

                  {/* Name */}
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
