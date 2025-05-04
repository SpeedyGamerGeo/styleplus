
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Product } from '@/data/products';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  
  return (
    <div 
      className="fashion-card group animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="fashion-card-img"
          />
          
          {/* Quick view overlay */}
          <div className={cn(
            "absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}>
            <span className="px-4 py-2 bg-white text-fashion-primary text-sm font-medium">
              Быстрый просмотр
            </span>
          </div>
        </Link>
        
        {/* Sale or New badge */}
        {product.isSale && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-sm animate-scale-in">
            СКИДКА
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-fashion-secondary text-white text-xs px-2 py-1 rounded-sm animate-scale-in">
            НОВИНКА
          </span>
        )}
        
        {/* Favorite button */}
        <button 
          className={cn(
            "absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
            isFavorite ? "bg-red-500 text-white" : "bg-white text-gray-400 hover:text-red-500"
          )}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <Heart size={16} fill={isFavorite ? "white" : "none"} />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-fashion-primary font-medium mb-1">
          <Link to={`/product/${product.id}`} className="hover:text-fashion-secondary transition-colors duration-300">
            {product.name}
          </Link>
        </h3>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-2">
            {product.oldPrice ? (
              <>
                <span className="text-red-500 font-medium">{product.price.toLocaleString()} ₽</span>
                <span className="text-gray-400 text-sm line-through">{product.oldPrice.toLocaleString()} ₽</span>
              </>
            ) : (
              <span className="text-fashion-primary font-medium">{product.price.toLocaleString()} ₽</span>
            )}
          </div>
          
          {/* Color options indicators */}
          {product.colors && (
            <div className="flex space-x-1">
              {product.colors.slice(0, 3).map((color, index) => {
                const bgColor = 
                  color === "Черный" ? "bg-black" : 
                  color === "Белый" ? "bg-white border border-gray-300" : 
                  color === "Красный" ? "bg-red-500" : 
                  color === "Синий" ? "bg-blue-700" :
                  color === "Голубой" ? "bg-blue-300" :
                  color === "Серый" ? "bg-gray-400" :
                  color === "Бежевый" ? "bg-amber-100" :
                  color === "Коричневый" ? "bg-amber-800" :
                  color === "Зеленый" ? "bg-green-600" :
                  color === "Розовый" ? "bg-pink-300" :
                  color === "Хаки" ? "bg-olive-600" :
                  color === "Бордовый" ? "bg-red-800" :
                  color === "Тёмно-синий" ? "bg-indigo-900" :
                  color === "Клетка" ? "bg-gradient-to-r from-gray-400 to-gray-600" :
                  "bg-gray-200";
                  
                return (
                  <div 
                    key={index}
                    className={`w-3 h-3 rounded-full ${bgColor} cursor-pointer transition-transform hover:scale-125 duration-200`}
                    title={color}
                  />
                );
              })}
              {product.colors.length > 3 && (
                <div className="w-3 h-3 rounded-full bg-white border border-gray-300 text-[8px] flex items-center justify-center">
                  +{product.colors.length - 3}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
