import React from 'react';
import { motion } from 'motion/react';

export const Marquee = ({ 
  texts, 
  className, 
  reverse = false,
  speed = 30 
}: { 
  texts: string[], 
  className?: string,
  reverse?: boolean,
  speed?: number
}) => {
  return (
    <div className={`marquee-container ${className}`}>
      <motion.div 
        className="marquee-content"
        animate={{ x: reverse ? [ "-100%", "0%"] : ["0%", "-100%"] }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {texts.map((text, i) => (
          <span key={i} className="whitespace-nowrap px-4">{text}</span>
        ))}
      </motion.div>
      <motion.div 
        className="marquee-content"
        animate={{ x: reverse ? [ "-100%", "0%"] : ["0%", "-100%"] }}
        transition={{ 
          duration: speed, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        aria-hidden="true"
      >
        {texts.map((text, i) => (
          <span key={i} className="whitespace-nowrap px-4">{text}</span>
        ))}
      </motion.div>
    </div>
  );
};
