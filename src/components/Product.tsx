import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const contents = [
  "Release da Loja (Dados Coletados)",
  "Identificação do PA Ideal",
  "Lifestyle Transitório Ideal",
  "Posicionamento e Persona",
  "Marketing Sensorial",
  "Calendário Promocional",
  "Ações e Estratégias Direcionadas",
  "Análise do VM e Key Points",
  "Possibilidades de Exploração",
  "Zoneamento (Quente, Fria, Transição)",
  "Fluxo do Cliente",
  "Zona de Descompressão",
  "Técnicas de Arrumação",
  "Cross Merchandising",
  "Storytelling e Vitrinismo",
  "Sugestões de sinalização de Preço",
  "Sugestões de materiais de PDV",
  "Nudges (Gatilhos em Provadores)",
  "Organização e Limpeza",
  "Sugestões de Phygital",
  "Manual de VM Personalizado"
];

export const Product = () => {
  return (
    <section className="min-h-screen bg-brand-black py-32 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          className="mb-20 text-center"
        >
          <span className="text-brand-orange text-xs uppercase tracking-[0.4em] mb-4 block">
            O Guia Personalizado // The Product
          </span>
          <h2 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase">
            O QUE VOCÊ RECEBE
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contents.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              viewport={{ once: false, amount: 0.1 }}
              className="flex items-center gap-4 p-6 bg-brand-white/5 border border-brand-white/5 hover:bg-brand-orange/10 hover:border-brand-orange/20 transition-all duration-300 group"
            >
              <div className="w-6 h-6 rounded-full bg-brand-orange/20 flex items-center justify-center group-hover:bg-brand-orange transition-colors duration-300">
                <Check className="w-3 h-3 text-brand-orange group-hover:text-brand-white transition-colors duration-300" />
              </div>
              <span className="text-sm md:text-base font-light text-brand-white/80">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
