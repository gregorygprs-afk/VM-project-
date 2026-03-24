import React from 'react';
import { motion } from 'motion/react';

const educationItems = [
  {
    title: "Neurociência aplicada ao comportamento do consumidor",
    content: "IBN (Instituto Brasileiro de Neurociência)"
  },
  {
    title: "Direção Criativa & Storytelling Criativo",
    content: "Ray Smilling / Nail Again / Fashion Meeting & Elle Brasil"
  },
  {
    title: "Estratégia Visual / Coolhunting & Visual Merchandising",
    content: "Passaporte Fashionista Academy / Líbere Fashion School & SENAI"
  }
];

export const Education = () => {
  return (
    <section className="min-h-screen bg-brand-black py-32 px-6 md:px-24">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        className="text-brand-orange text-xs uppercase tracking-[0.4em] mb-20 block"
      >
        Formações & áreas de estudo
      </motion.span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {educationItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.1 }}
            className="group"
          >
            <h3 className="text-3xl md:text-5xl font-bold mb-8 text-brand-orange leading-none uppercase">
              {item.title}
            </h3>
            <p className="text-lg text-brand-white/60 leading-relaxed font-light">
              {item.content}
            </p>
            <div className="mt-8 w-12 h-[2px] bg-brand-orange/30 group-hover:w-full transition-all duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
