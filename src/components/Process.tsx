import React from 'react';
import { motion } from 'motion/react';

const steps = [
  {
    id: "00",
    title: "Imersão & Briefing",
    subtitle: "Entender a alma do negócio e dores latentes.",
    details: [
      "Análise da história da marca e visão de futuro.",
      "Identificação de dores latentes ('o que tira o sono').",
      "Definição de orçamento e resistência a mudanças."
    ]
  },
  {
    id: "01",
    title: "Diagnóstico de Loja",
    subtitle: "Análise técnica do Ponto de Atração e Performance.",
    details: [
      "Visão Externa (PA): Análise técnica do Ponto de Atração.",
      "Matriz & Performance: Estudo de categorias e giro de estoque.",
      "Inventário de Ativos: Mobiliário, iluminação e manequins.",
      "Capital Humano: Avaliação do desempenho da equipe."
    ]
  },
  {
    id: "02",
    title: "Desenvolvimento & Entrega",
    subtitle: "Estudo Estético e Guia de Evolução.",
    details: [
      "Estudo Estético: Layout atual e eficiência de exposição.",
      "Pesquisa de Campo: Ticket médio e perfil demográfico.",
      "Guia de Evolução: Cronograma de mudanças graduais."
    ]
  },
  {
    id: "03",
    title: "O Dossiê Final",
    subtitle: "Entrega técnica e suporte estratégico.",
    details: [
      "Prazos: 15 dias de processamento + 15 dias úteis para entrega.",
      "Formatos: Call de 1h30 ou Store Walk presencial.",
      "Suporte: Janela de 15 dias para tira-dúvidas (3 reuniões)."
    ]
  }
];

export const Process = () => {
  return (
    <section className="min-h-screen bg-brand-black py-32 px-6 md:px-24">
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.1 }}
        className="text-brand-orange text-xs uppercase tracking-[0.4em] mb-20 block"
      >
        O Processo // Metodologia
      </motion.span>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 top-0 w-[1px] h-full bg-brand-white/10 hidden md:block" />

        <div className="space-y-32">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.1 }}
              className="relative md:pl-20"
            >
              {/* Step Number Dot */}
              <div className="absolute left-[-4px] top-0 w-2 h-2 bg-brand-orange rounded-full hidden md:block" />
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-24">
                <div className="md:w-1/3">
                  <span className="text-brand-orange font-mono text-xl mb-4 block">{step.id}</span>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-4">
                    {step.title}
                  </h3>
                  <p className="text-brand-white/60 text-lg font-light italic">
                    {step.subtitle}
                  </p>
                </div>
                
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {step.details.map((detail, i) => (
                    <div key={i} className="bg-brand-white/5 p-6 rounded-lg border border-brand-white/5 hover:border-brand-orange/30 transition-colors duration-300">
                      <p className="text-sm text-brand-white/80 leading-relaxed">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
