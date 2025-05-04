
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../products/ProductCard';
import { getNewProducts, getSaleProducts } from '@/data/products';

const Featured: React.FC = () => {
  const newProducts = getNewProducts().slice(0, 4);
  const saleProducts = getSaleProducts().slice(0, 4);
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-serif animate-fade-in">
              Новинки
            </h2>
            <Link 
              to="/catalog/new" 
              className="text-fashion-secondary hover:text-fashion-primary transition-colors duration-300"
            >
              Смотреть все
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {newProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl md:text-3xl font-serif animate-fade-in">
              Распродажа
            </h2>
            <Link 
              to="/catalog/sale" 
              className="text-fashion-secondary hover:text-fashion-primary transition-colors duration-300"
            >
              Смотреть все
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {saleProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Banner */}
        <div className="relative h-80 bg-cover bg-center rounded-md overflow-hidden animate-fade-in" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1600&h=400&q=80)" }}>
          <div className="absolute inset-0 bg-fashion-primary bg-opacity-50"></div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
            <h3 className="text-3xl md:text-4xl font-serif mb-4 animate-fade-in">Подпишитесь на новости</h3>
            <p className="text-lg mb-6 max-w-xl animate-fade-in" style={{ animationDelay: '100ms' }}>
              Будьте в курсе новых коллекций, акций и скидок
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md animate-fade-in" style={{ animationDelay: '200ms' }}>
              <input 
                type="email" 
                placeholder="Ваш e-mail" 
                className="px-4 py-3 flex-grow text-fashion-primary focus:outline-none focus:ring-2 focus:ring-fashion-secondary"
              />
              <button className="px-6 py-3 bg-fashion-secondary text-white font-medium hover:bg-opacity-90 transition-colors duration-300">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
