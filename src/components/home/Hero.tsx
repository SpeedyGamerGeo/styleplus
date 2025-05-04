
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&h=800&q=80",
    title: "Новая коллекция",
    subtitle: "Откройте для себя последние тенденции моды",
    buttonText: "Смотреть сейчас",
    buttonLink: "/catalog/new",
  },
  {
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&h=800&q=80",
    title: "Зимняя распродажа",
    subtitle: "Скидки до 50% на выбранные товары",
    buttonText: "Купить со скидкой",
    buttonLink: "/catalog/sale",
  },
  {
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&h=800&q=80",
    title: "Аксессуары",
    subtitle: "Дополните свой образ стильными аксессуарами",
    buttonText: "Исследовать",
    buttonLink: "/catalog/accessories",
  },
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  
  const nextSlide = () => {
    if (isChanging) return;
    
    setIsChanging(true);
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    
    setTimeout(() => {
      setIsChanging(false);
    }, 500);
  };
  
  const prevSlide = () => {
    if (isChanging) return;
    
    setIsChanging(true);
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    
    setTimeout(() => {
      setIsChanging(false);
    }, 500);
  };
  
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 bg-cover bg-center",
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          
          {/* Content */}
          <div className="relative z-20 container mx-auto h-full flex items-center px-4">
            <div className={cn(
              "max-w-lg text-white transition-all duration-700",
              currentSlide === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{slide.title}</h1>
              <p className="text-xl mb-6">{slide.subtitle}</p>
              <Link 
                to={slide.buttonLink}
                className="inline-block px-6 py-3 bg-white text-fashion-primary font-medium hover:bg-fashion-secondary hover:text-white transition-colors duration-300"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white hover:bg-opacity-30 transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-white hover:bg-opacity-30 transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentSlide === index ? "bg-white w-6" : "bg-white bg-opacity-50"
            )}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
