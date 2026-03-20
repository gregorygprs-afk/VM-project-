import React from 'react';
import { motion } from 'motion/react';

const expertises = [
  {
    title: "Liderança em Branding",
    content: "Construção de identidades sólidas e memoráveis que conectam marcas aos seus públicos ideais através de propósito e estratégia."
  },
  {
    title: "Expertise em Varejo",
    content: "Foco em marcas premium, otimizando o ambiente de venda para elevar a percepção de valor e a experiência do cliente."
  },
  {
    title: "Direção Criativa",
    content: "Desenvolvimento de conceitos visuais para artistas e campanhas, transformando ideias abstratas em realidades visuais impactantes."
  }
];

export const Expertise = () => {
  return (
    <section className="min-h-screen bg-brand-black py-32 px-6 md:px-24">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        className="text-brand-orange text-xs uppercase tracking-[0.4em] mb-20 block"
      >
        Atuações // Expertise
      </motion.span>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {expertises.map((item, index) => (
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
