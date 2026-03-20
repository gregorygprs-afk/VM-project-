import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 5000; // 5 seconds
    const startTime = performance.now();
    let animationFrameId: number;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setIsComplete(true);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  useEffect(() => {
    if (isComplete) {
      // Call onComplete immediately so the Home component mounts and is ready to be revealed
      onComplete();

      const tl = gsap.timeline();

      tl.to('.preloader-content', {
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
      })
      .to('.preloader-split-left', {
        xPercent: -100,
        duration: 1,
        ease: 'power4.inOut',
      }, 'split')
      .to('.preloader-split-right', {
        xPercent: 100,
        duration: 1,
        ease: 'power4.inOut',
      }, 'split');
    }
  }, [isComplete, onComplete]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none">
      <div className="preloader-split-left absolute inset-y-0 left-0 w-1/2 bg-brand-black pointer-events-auto" />
      <div className="preloader-split-right absolute inset-y-0 right-0 w-1/2 bg-brand-black pointer-events-auto" />
      
      <div className="preloader-content relative z-10 flex flex-col items-center justify-center gap-8 pointer-events-none">
        <h1 className="text-4xl md:text-8xl font-black tracking-tighter relative">
          <span className="opacity-0">GREG SILLVA</span>
          <motion.div 
            className="absolute inset-0 text-brand-orange overflow-hidden whitespace-nowrap"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          >
            GREG SILLVA
          </motion.div>
        </h1>
        <div className="text-brand-white/20 font-mono text-5xl md:text-8xl font-black tracking-tighter">
          {Math.floor(progress).toString().padStart(3, '0')}%
        </div>
      </div>
    </div>
  );
};
