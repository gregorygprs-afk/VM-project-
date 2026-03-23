import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Marquee } from './Marquee';

export const Home = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const [scrollPercent, setScrollPercent] = React.useState(0);

  React.useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setScrollPercent(Math.floor(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 1 }}
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-brand-black"
    >
      {/* Scroll Percentage Counter */}
      <div className="absolute top-10 right-10 z-20 font-mono text-xl md:text-2xl font-light text-brand-white/30 tracking-tighter">
        {scrollPercent.toString().padStart(3, '0')}%
      </div>
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      {/* Background Marquee Textures in Vivid Orange */}
      <div className="absolute inset-0 opacity-20 flex flex-col justify-around pointer-events-none select-none py-20 text-brand-orange">
        <Marquee 
          texts={["CRÉATIF", "the Creative", "クリティーボ", "KREATIEF"]} 
          className="text-[15vw] font-black leading-none"
          speed={40}
        />
        <Marquee 
          texts={["CRÉATIF", "the Creative", "クリティーボ", "KREATIEF"]} 
          className="text-[15vw] font-black leading-none"
          reverse
          speed={50}
        />
        <Marquee 
          texts={["CRÉATIF", "the Creative", "クリティーボ", "KREATIEF"]} 
          className="text-[15vw] font-black leading-none"
          speed={45}
        />
      </div>

      <motion.div 
        style={{ y }}
        className="relative z-10 text-center px-4 w-full max-w-[90vw]"
      >
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="text-5xl md:text-[8vw] font-black leading-[1.1] tracking-tighter uppercase text-brand-white"
        >
          GREG SILLVA <br className="hidden md:block" />
          <span className="text-xl md:text-[2.5vw] font-light text-brand-white/70 tracking-[0.3em] block mt-6">
            - Diretor Criativo Visual -
          </span>
        </motion.h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] opacity-50">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-brand-white/20 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-brand-orange"
            animate={{ top: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ height: '50%' }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};
