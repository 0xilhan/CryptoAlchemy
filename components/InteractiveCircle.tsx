import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import DonateModal from './DonateModal';
import './InteractiveCircle.css';

const InteractiveCircle: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const allLinks = [
        ...SOCIAL_LINKS,
        { id: 99, name: 'Donate', url: '#', icon: Heart, color: '#4BD0A0' }
    ];

    return (
        <section id="connect" className="relative bg-[#0D0D0D] text-white py-20 md:py-32 flex flex-col items-center justify-center overflow-hidden">
            <div className="text-center mb-16">
                <motion.h2
                    className="font-space-grotesk text-4xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 25 }}
                >
                    Join the Circle
                </motion.h2>
                <motion.p
                    className="text-lg md:text-xl text-[#9CA3AF] max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 25, delay: 0.2 }}
                >
                    Connect with me, let's build the future together.
                </motion.p>
            </div>

            <div className="interactive-container">
                <div className="central-orb">
                    <span className="central-text">CONNECT</span>
                </div>
                <div className="icons-orbit">
                    {allLinks.map((link, index) => (
                        <a
                            key={link.id}
                            href={link.url}
                            target={link.name === 'Donate' ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className={`orbiting-icon-container icon-${index}`}
                            onClick={link.name === 'Donate' ? (e) => { e.preventDefault(); setIsModalOpen(true); } : undefined}
                            data-cursor-hover
                        >
                            <div className="orbiting-icon" style={{ '--icon-color': link.color } as React.CSSProperties}>
                                <link.icon className="w-8 h-8" />
                            </div>
                            <span className="icon-label">{link.name.toUpperCase()}</span>
                        </a>
                    ))}
                </div>
            </div>

            <DonateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Floating DM Widget */}
            <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start group">
                <div className="bg-[#0F1720]/90 text-white text-sm px-3 py-2 rounded-lg mb-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md border border-[#222]">
                    Need help? DM me 💬
                </div>
                <a href="https://x.com/cryptoalchemy29" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://pbs.twimg.com/profile_images/1954480691242057728/Fg8Nrt_U_400x400.jpg"
                        alt="DM me"
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-[#00FFFF]/30 hover:scale-105 transition-transform duration-300 animate-float"
                    />
                </a>
            </div>
        </section>
    );
};

export default InteractiveCircle;
