/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Preloader } from './components/Preloader';
import { Home } from './components/Home';
import { About } from './components/About';
import { Education } from './components/Education';
import { Expertise } from './components/Expertise';
import { Metrics } from './components/Metrics';
import { Process } from './components/Process';
import { Product } from './components/Product';
import { Contact } from './components/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative">
      <Preloader onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="relative z-0">
          <Home />
          <About />
          <Education />
          <Expertise />
          <Metrics />
          <Process />
          <Product />
          <Contact />
        </div>
      )}
    </main>
  );
}
