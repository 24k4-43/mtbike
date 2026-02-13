"use client";

import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-16 md:py-32 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
                <h2 className="text-4xl md:text-5xl font-bebas italic mb-6">MTBIKE</h2>
                <p className="text-neutral-400 max-w-sm mb-8 leading-relaxed text-sm md:text-base">
                Providing the best adventure experiences since 2024. Join us and ride the world.
                </p>
                <div className="flex gap-6">
                {['Instagram', 'YouTube', 'Twitter'].map(social => (
                    <a key={social} href="#" className="text-xs uppercase tracking-widest hover:text-red-500 transition-colors">{social}</a>
                ))}
                </div>
            </div>
            
            {['Brands', 'Support'].map((title, i) => (
                <div key={title}>
                <h4 className="font-bold uppercase tracking-widest text-xs mb-6">{title}</h4>
                <ul className="space-y-3 text-neutral-400 text-sm">
                    {i === 0 ? 
                    ['Canyon', 'Pivot', 'Yeti', 'Cannondale'].map(item => <li key={item}><a href="#" className="hover:text-white">{item}</a></li>) :
                    ['Manuals', 'Warranty', 'Find a Shop', 'Registration'].map(item => <li key={item}><a href="#" className="hover:text-white">{item}</a></li>)
                    }
                </ul>
                </div>
            ))}
            </div>
            
            <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-neutral-900 text-[10px] text-neutral-500 font-bold uppercase tracking-[0.2em] flex flex-col md:flex-row justify-between gap-4">
            <p>© 2024 MTBIKE Bicycles. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
            </div>
            </div>
      </footer>
    )
};

export default Footer;