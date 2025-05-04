
import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/data/products';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
  return (
    <div className="container mx-auto px-4">
      {title && (
        <h2 className="text-2xl md:text-3xl font-serif mb-6 pb-2 border-b border-gray-200 animate-fade-in">
          {title}
        </h2>
      )}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={product.id} style={{ animationDelay: `${index * 100}ms` }}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
