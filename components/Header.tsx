import React, { useState, useEffect, useRef } from 'react';
import { AlchemyLogo } from './icons';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Threads', href: '#threads' },
    { name: 'Videos', href: '#videos' },
    { name: 'About', href: '#about' },
    { name: 'Connect', href: '#connect' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.slice(1);
    
    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = headerRef.current?.clientHeight || 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };


  return (
    <header ref={headerRef} className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${scrolled ? 'bg-black/50 backdrop-blur-lg border-b border-gray-800' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#hero" onClick={(e) => handleNavClick(e, '#hero')} className="flex items-center space-x-2 cursor-pointer">
            <AlchemyLogo className="h-8 w-8 text-[#C7A94A]" />
            <span className="font-space-grotesk text-xl font-bold text-white">Crypto Alchemy</span>
          </a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#9CA3AF] hover:text-white transition-colors duration-200 relative group cursor-pointer"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C7A94A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out"></span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;