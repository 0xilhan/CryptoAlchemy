import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlchemyLogo } from './icons';
import { useCart } from '../contexts/CartContext';
import { ShoppingBag } from 'lucide-react';

const navLinks = [
  { name: 'Threads', href: '#threads' },
  { name: 'Videos', href: '#videos' },
  { name: 'About', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Courses', href: '#courses' },
  { name: 'Connect', href: '#connect' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, openCart } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    if (cartCount > 0) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 300);
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const header = document.querySelector('header');
      const headerOffset = header ? header.offsetHeight : 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };


  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-[#0D0D0D]/80 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#hero" onClick={(e) => handleSmoothScroll(e, '#hero')} className="flex items-center gap-2 group" data-cursor-hover>
            
            <span className="font-space-grotesk font-bold text-xl text-white">Crypto Alchemy</span>
          </a>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="text-[#9CA3AF] hover:text-white transition-colors duration-200 relative group"
                  data-cursor-hover
                >
                  {link.name}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#C7A94A] transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
            <button onClick={openCart} className="relative text-[#9CA3AF] hover:text-white transition-colors" data-cursor-hover>
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className={`absolute -top-2 -right-2 bg-[#C7A94A] text-[#0D0D0D] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center
                  ${isAnimating ? 'animate-bounce' : ''}
                `}>
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
