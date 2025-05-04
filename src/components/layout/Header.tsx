
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <Link to="/" className="flex items-center animate-fade-in">
          <h1 className="text-2xl font-serif font-bold text-fashion-primary">
            СТИЛЬ<span className="text-fashion-secondary">ПЛЮС</span>
          </h1>
        </Link>
        
        <nav className={cn(
          "fixed md:static md:flex md:items-center transition-all duration-300 ease-in-out",
          mobileMenuOpen 
            ? "top-[60px] left-0 right-0 bg-white shadow-md py-4 flex flex-col items-center animate-slide-in" 
            : "top-[60px] -left-full md:left-0"
        )}>
          <Link to="/" className="nav-link mx-3 my-2 md:my-0 animate-fade-in" style={{ animationDelay: '100ms' }}>
            ГЛАВНАЯ
          </Link>
          <Link to="/catalog/women" className="nav-link mx-3 my-2 md:my-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
            ЖЕНЩИНАМ
          </Link>
          <Link to="/catalog/men" className="nav-link mx-3 my-2 md:my-0 animate-fade-in" style={{ animationDelay: '300ms' }}>
            МУЖЧИНАМ
          </Link>
          <Link to="/catalog/accessories" className="nav-link mx-3 my-2 md:my-0 animate-fade-in" style={{ animationDelay: '400ms' }}>
            АКСЕССУАРЫ
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setSearchOpen(!searchOpen)} 
            className="p-2 hover:text-fashion-secondary transition-colors duration-300"
          >
            <Search size={20} />
          </button>
          <Link 
            to="/account" 
            className="p-2 hover:text-fashion-secondary transition-colors duration-300"
          >
            <User size={20} />
          </Link>
          <Link 
            to="/cart" 
            className="p-2 hover:text-fashion-secondary transition-colors duration-300 relative"
          >
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-fashion-secondary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-scale-in">
              0
            </span>
          </Link>
        </div>
      </div>
      
      {/* Search overlay */}
      <div className={cn(
        "absolute left-0 right-0 bg-white p-4 shadow-md transition-all duration-300",
        searchOpen ? "top-full opacity-100" : "-top-20 opacity-0 pointer-events-none"
      )}>
        <div className="container mx-auto flex items-center">
          <input 
            type="text" 
            placeholder="Поиск по каталогу..." 
            className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-fashion-secondary"
          />
          <button className="ml-2 p-2 bg-fashion-primary text-white rounded-md hover:bg-fashion-secondary transition-colors duration-300">
            <Search size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
