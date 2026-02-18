
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useSpring(0, { damping: 20, stiffness: 150 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 150 });

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovered(!!target.closest('a, button, .project-card'));
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        translateX: cursorX,
        translateY: cursorY,
        x: '-50%',
        y: '-50%'
      }}
    >
      <motion.div
        animate={{
          scale: isHovered ? 2 : 1,
          backgroundColor: isHovered ? 'rgba(168, 85, 247, 0.3)' : 'rgba(255, 255, 255, 0.1)'
        }}
        className="w-full h-full rounded-full border border-white/20 flex items-center justify-center transition-colors"
      >
        {isHovered && <div className="w-1 h-1 bg-white rounded-full" />}
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
