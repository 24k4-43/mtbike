"use client";

import React, { useEffect, useState, useRef } from 'react';

const images = [
  '/img/MY25_Nomad_CC_X0_AXS_RSV_GlossLightTeal_45607b92-c723-43f3-be65-4f6854c303d6 (1).png',
  '/img/MY26_Bronson_C_GX_AXS_GlossCarbon_87ab7eca-f466-40d1-9819-c2ba2234f0d7 (1).png',
  '/img/MY25_Blur_CC_XX_FA_AXS_RSV_GlossDarkTeal (1).png'
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    const interval = setInterval(() => {
      if (!mounted.current) return;
      setIndex((i) => (i + 1) % images.length);
    }, 4500);
    return () => {
      mounted.current = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center bg-[#0a0a0a] text-white overflow-hidden font-sans">
      <div className="relative flex-1 w-full flex flex-col items-center justify-center">
        <div className="absolute top-[20%] md:top-[15%] left-1/2 -translate-x-1/2 w-full text-center z-0 pointer-events-none">
          <h1 className="text-[22vw] md:text-[16vw] leading-none font-bold tracking-tighter text-[#ffffff] opacity-90 uppercase">
            mtbike
          </h1>
        </div>
        <div className="relative z-10 w-full max-w-[1400px] h-[300px] md:h-[500px] flex items-center justify-center mt-10 md:mt-20 px-4">
          {images.map((src, i) => {
            let position = "translate-x-full opacity-0 scale-90"; 
            if (i === index) {
              position = "translate-x-0 opacity-100 scale-110 md:scale-[1.4]";
            } else if (i === (index - 1 + images.length) % images.length) {
              position = "-translate-x-full opacity-0 scale-90";
            }

            return (
              <img
                key={src}
                src={src}
                alt={`bike-${i}`}
                className={`absolute w-full h-full object-contain transition-all duration-1000 ease-in-out drop-shadow-[0_40px_60px_rgba(0,0,0,0.9)] ${position}`}
              />
            );
          })}
          <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[70%] h-12 bg-black/60 blur-[60px] md:blur-[100px] rounded-[100%] -z-10"></div>
        </div>
        <div className="relative z-20 flex flex-col items-center mt-12 md:mt-28 gap-6 md:gap-8 px-4">    
          <div className="text-center">
            <h3 className="text-xl md:text-3xl font-bold tracking-tight text-white mb-1 uppercase">
               Heckler Carbon C S MX
            </h3>
            <p className="text-gray-500 uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold">Model Year 2025</p>
          </div>
          
          <button className="group relative px-10 md:px-14 py-3 md:py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
            <span className="relative z-10 text-[11px] md:text-sm uppercase tracking-widest">Buy now</span>
            <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/[0.03] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;