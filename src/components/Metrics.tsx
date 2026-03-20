import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring } from 'motion/react';

const stats = [
  {
    value: 30,
    suffix: "%",
    label: "Aumento de faturamento em até",
    description: "Otimização do espaço e jornada do cliente."
  },
  {
    value: 13,
    suffix: "%",
    label: "Probabilidade de compra aumenta",
    description: "A cada segundo extra que o cliente permanece na loja."
  },
  {
    value: 11,
    suffix: "%",
    label: "Aumento no tráfego",
    description: "A vitrine como filtro de dopamina e atração."
  },
  {
    value: 40,
    suffix: "%",
    label: "Mais chances de compra",
    description: "O 'Efeito do Toque' e interação com o produto."
  }
];

const RollingNumber = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    } else {
      springValue.jump(0);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return <span ref={ref}>{displayValue}</span>;
};

const StatItem = ({ stat, index }: { stat: typeof stats[0], index: number, key?: React.Key }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: false, amount: 0.1 }}
      className="border-b border-brand-white/10 py-12 group"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-md">
          <p className="text-brand-orange text-sm uppercase tracking-widest mb-2 font-bold">{stat.label}</p>
          <h4 className="text-xl md:text-2xl font-light text-brand-white/80">{stat.description}</h4>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-6xl md:text-9xl font-black tracking-tighter text-brand-white">
            <RollingNumber value={stat.value} />{stat.suffix}
          </span>
        </div>
      </div>
      
      {/* Minimalist auto-drawing line */}
      <div className="mt-8 w-full h-[1px] bg-brand-white/5 relative overflow-hidden">
        <motion.div 
          initial={{ left: "-100%" }}
          whileInView={{ left: "0%" }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          className="absolute inset-0 bg-brand-orange/40"
        />
      </div>
    </motion.div>
  );
};

export const Metrics = () => {
  return (
    <section className="min-h-screen bg-brand-black py-32 px-6 md:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          className="mb-20"
        >
          <span className="text-brand-orange text-xs uppercase tracking-[0.4em] mb-4 block">
            Dados e Métricas // ROI
          </span>
          <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase">
            Por que o VM Funciona?
          </h2>
        </motion.div>

        <div className="flex flex-col">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
