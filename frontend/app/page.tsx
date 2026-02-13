'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/footer";
import { CarouselControls } from "@/components/CarouselControls";

import { Plus_Jakarta_Sans, Bebas_Neue } from 'next/font/google';
import { useCarousel } from "@/hooks/useCarousel";
import { PRODUCTS, CATEGORY_BIKES, TOURS } from "@/constants";

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });

export default function Home() {
  const gallery = useCarousel();
  const products = useCarousel();

  return (
    <div className={`${jakarta.className} ${bebas.variable} min-h-screen bg-white`}>
      <Navbar />
      <Hero />

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-10">
          <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter">Gallery</h2>
          <p className="text-gray-500 max-w-md mt-4 italic">Built for every adventure.</p>
        </div>
        <div ref={gallery.ref} className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4">
          {CATEGORY_BIKES.map((bike, idx) => (
            <div key={idx} className="relative h-[500px] w-[380px] flex-shrink-0 snap-start">
              <img src={bike.image} alt={bike.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <span className="text-[10px] tracking-widest font-bold uppercase opacity-70">{bike.label}</span>
                <h3 className="text-3xl font-bebas uppercase mt-1">{bike.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <CarouselControls progress={gallery.progress} onScroll={gallery.scroll} />
      </section>

      {/* Tours Section (Static Grid) */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        <div className="col-span-full mb-6">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">Join bike tours</h2>
        </div>
        {TOURS.map((item, i) => (
          <div key={i} className="relative h-[600px] overflow-hidden group">
             <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
             <div className="absolute bottom-10 left-10 text-white">
               <h3 className="text-5xl font-bebas uppercase">{item.title}</h3>
               <button className="mt-4 px-6 py-2 border border-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all">Explore</button>
             </div>
          </div>
        ))}
      </section>

      {/* Bikes cards */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tight mb-12">What we're diggin'</h2>
        <div ref={products.ref} className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
          {PRODUCTS.map(product => (
            <div key={product.id} className="snap-start">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <CarouselControls progress={products.progress} onScroll={products.scroll} />
      </section>
      <Footer />
      
    </div>
  );
}