import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.1 };
  const mouse = {
    x: useSpring(0, springConfig),
    y: useSpring(0, springConfig),
  };
  const scale = useSpring(1, springConfig);

  useEffect(() => {
    // Detect if it's a mobile or touch device
    const checkMobile = () => {
      const isTouch =
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.innerWidth < 768;
      setIsMobile(isTouch);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) return; // Stop cursor logic on mobile

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x.set(e.clientX);
      mouse.y.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (e.target instanceof Element && e.target.closest('a, button, [data-cursor-hover]')) {
        setIsHovering(true);
        scale.set(1.8);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (e.target instanceof Element && e.target.closest('a, button, [data-cursor-hover]')) {
        setIsHovering(false);
        scale.set(1);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('resize', checkMobile);
    };
  }, [mouse.x, mouse.y, scale, isMobile]);

  if (isMobile) return null; // 👈 Don’t render cursor on mobile

  return (
    <motion.div
      style={{
        translateX: mouse.x,
        translateY: mouse.y,
        scale,
      }}
      className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-6 h-6 pointer-events-none z-[9999]"
    >
      <div
        className={`w-full h-full rounded-full transition-colors duration-150 ${
          isHovering ? 'bg-[#c7a94a]/50' : 'bg-[#4BD0FF]/50'
        }`}
      >
        <div
          className={`w-full h-full rounded-full transition-all duration-150 ${
            isHovering ? 'glow-gold' : 'glow-cyan'
          }`}
        />
      </div>
    </motion.div>
  );
};

export default CustomCursor;
