import React from 'react';
import { motion } from 'motion/react';

export const About = () => {
  const text = "Acredite em mim, copiar ideias legais ou montar vitrines porque viu uma inspiração legal, não são premissas pra fazer você vender! Eu quero ajudar a você ser a inspiração!";
  const words = text.split(" ");

  return (
    <section className="min-h-screen bg-brand-black flex flex-col justify-center py-32 px-6 md:px-24">
      <div className="max-w-5xl">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          className="text-brand-orange text-xs uppercase tracking-[0.4em] mb-8 block"
        >
          Quem Sou // I AM
        </motion.span>
        
        <div className="space-y-12">
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-2xl md:text-4xl font-light leading-relaxed text-brand-white/80"
          >
            Tenho mais de 10 anos de experiência a frente de Direções Criativas, Branding & Visual Merchandising. 
            Trabalhando por todo esse tempo junto com artistas da musica, marcas e empresas de moda, criando junto a eles conceitos que possam falar por si mesmos.
          </motion.p>

          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.1 }}
            className="text-xl md:text-3xl font-light leading-relaxed text-brand-white/60"
          >
            Além das minhas graduações e formações, tenho um embasamento do meu método que é quase uma filosofia de vida:
          </motion.p>

          <div className="py-20">
            <h2 className="text-3xl md:text-6xl font-bold leading-tight flex flex-wrap gap-x-4 gap-y-2">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: i * 0.05,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  viewport={{ once: false, amount: 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
