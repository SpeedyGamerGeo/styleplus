
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-fashion-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-serif mb-4 border-b border-fashion-secondary pb-2">О Компании</h3>
            <p className="text-gray-300 mb-4">
              СТИЛЬПЛЮС - ваш надежный помощник в мире моды. Мы предлагаем широкий ассортимент стильной одежды по доступным ценам.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" className="hover:text-fashion-secondary transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" className="hover:text-fashion-secondary transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" className="hover:text-fashion-secondary transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-serif mb-4 border-b border-fashion-secondary pb-2">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-fashion-secondary transition-colors duration-300">О нас</Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-300 hover:text-fashion-secondary transition-colors duration-300">Доставка и оплата</Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-fashion-secondary transition-colors duration-300">Возврат</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-fashion-secondary transition-colors duration-300">Политика конфиденциальности</Link>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <h3 className="text-xl font-serif mb-4 border-b border-fashion-secondary pb-2">Категории</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalog/women" className="text-gray-300 hover:text-fashion-secondary transition-colors duration-300">Женщинам</Link>
              </li>
              <li>
                <Link to="/catalog/men" className="text-gray-300 hover:text-fashion-secondary transition-colors duration-300">Мужчинам</Link>
              </li>
              <li>
                <Link to="/catalog/accessories" className="text-gray-300 hover:text-fashion-secondary transition-colors duration-300">Аксессуары</Link>
              </li>
              <li>
                <Link to="/catalog/new" className="text-gray-300 hover:text-fashion-secondary transition-colors duration-300">Новинки</Link>
              </li>
              <li>
                <Link to="/catalog/sale" className="text-gray-300 hover:text-fashion-secondary transition-colors duration-300">Распродажа</Link>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h3 className="text-xl font-serif mb-4 border-b border-fashion-secondary pb-2">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-fashion-secondary" />
                <span className="text-gray-300">+7 (999) 123-45-67</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-fashion-secondary" />
                <span className="text-gray-300">info@stilplus.ru</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="text-fashion-secondary mt-1" />
                <span className="text-gray-300">г. Москва, ул. Модная, д. 1, ТЦ "Стильный"</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-gray-700 text-center text-gray-400">
          <p className="animate-fade-in">© 2024 СТИЛЬПЛЮС. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
