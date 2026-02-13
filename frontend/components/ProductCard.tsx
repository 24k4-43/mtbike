'use client';

import React from 'react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[420px] group cursor-pointer bg-white border border-transparent hover:border-neutral-100 transition-all p-4 md:p-6">
      <div className="relative h-[250px] md:h-[320px] flex items-center justify-center mb-6">
        {/* Product Image */}
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* NEW Tag */}
        {product.tag && (
          <div className="absolute top-0 left-0 bg-black text-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-tighter">
            {product.tag}
          </div>
        )}
      </div>

      <div className="space-y-3">
        {/* Color Selectors and Category */}
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            {product.colors.map((color, idx) => (
              <div 
                key={idx}
                className="w-3 h-3 rounded-full border border-neutral-300"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <span className="text-[11px] font-medium text-neutral-500 uppercase">{product.category}</span>
        </div>
        
        {/* Product Name */}
        <h3 className="text-xl md:text-2xl font-bold text-neutral-800 uppercase tracking-tight">
          {product.name}
        </h3>
        
        {/* Description */}
        <p className="text-[13px] text-neutral-600 leading-relaxed line-clamp-3 font-normal">
          {product.description}
        </p>
        
        {/* Price */}
        <div className="pt-2 text-lg font-bold text-neutral-900">
          ${product.price.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;