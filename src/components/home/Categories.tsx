
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface Category {
  name: string;
  image: string;
  description: string;
  link: string;
}

const categories: Category[] = [
  {
    name: "Женщинам",
    image: "https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=600&h=800&q=80",
    description: "Стильная женская одежда на любой вкус",
    link: "/catalog/women",
  },
  {
    name: "Мужчинам",
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?auto=format&fit=crop&w=600&h=800&q=80",
    description: "Модная мужская одежда для любого случая",
    link: "/catalog/men",
  },
  {
    name: "Аксессуары",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=600&h=800&q=80",
    description: "Стильные аксессуары для завершения образа",
    link: "/catalog/accessories",
  },
];

const Categories: React.FC = () => {
  return (
    <section className="py-16 bg-fashion-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 animate-fade-in">
          Наши категории
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              className="relative overflow-hidden rounded-lg bg-white shadow-md animate-fade-in group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-serif mb-2 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-200 mb-4 transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-300 delay-75">
                  {category.description}
                </p>
                <Link
                  to={category.link}
                  className={cn(
                    "inline-block bg-white text-fashion-primary px-6 py-3 font-medium",
                    "transition-all duration-300 transform translate-y-6 opacity-0",
                    "group-hover:translate-y-0 group-hover:opacity-100",
                    "hover:bg-fashion-secondary hover:text-white"
                  )}
                >
                  Смотреть коллекцию
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
