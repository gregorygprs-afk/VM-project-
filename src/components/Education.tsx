import React from 'react';
import { motion } from 'motion/react';

const pillars = [
  {
    title: "Neuro-branding Aplicado",
    description: "Base da estratégia, focando na especialização pelo IBN sobre o comportamento do consumidor e o uso de gatilhos cerebrais para otimizar a jornada de compra.",
    institution: "IBN"
  },
  {
    title: "Branding & Estratégia",
    description: "Formação académica de pós-graduação pela PUCRS em fundamentos de marketing e posicionamento estratégico de marca.",
    institution: "PUCRS"
  },
  {
    title: "Direção Criativa & Moda",
    description: "Robustez da formação executiva pela Elle Brasil e pela Passaporte Fashionista Academy, focando em publicidade e styling.",
    institution: "Elle Brasil / Passaporte Fashionista"
  },
  {
    title: "Estratégia Visual",
    description: "Competências técnicas em Coolhunting, Visual Merchandising Estratégico e Design de Interiores.",
    institution: "Estratégia Visual"
  }
];

export const Education = () => {
  return (
    <section className="min-h-screen bg-brand-black py-32 overflow-hidden">
      <div className="px-6 md:px-24 mb-20">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          className="text-brand-orange text-xs uppercase tracking-[0.4em] mb-8 block"
        >
          Formação // Pillars
        </motion.span>
      </div>

      <div className="flex flex-col gap-32">
        {pillars.map((pillar, index) => (
          <div key={index} className="px-6 md:px-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <div className="overflow-hidden">
                <motion.h3 
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: false, amount: 0.1 }}
                  className="text-4xl md:text-7xl font-bold tracking-tighter"
                >
                  {pillar.title}
                </motion.h3>
              </div>
              
              <motion.div 
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                viewport={{ once: false, amount: 0.1 }}
                className="bg-brand-white/5 p-8 md:p-12 border-l-4 border-brand-orange backdrop-blur-sm"
              >
                <p className="text-lg md:text-xl text-brand-white/70 mb-6 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="group inline-block">
                  <span className="text-sm font-bold tracking-widest uppercase text-brand-white/40 group-hover:text-brand-orange transition-colors duration-300 relative">
                    {pillar.institution}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-orange transition-all duration-300 group-hover:w-full" />
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
