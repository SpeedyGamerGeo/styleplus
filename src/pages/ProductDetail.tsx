
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { getProductById } from '@/data/products';
import { Heart, Share2, ShoppingCart, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProductGrid from '@/components/products/ProductGrid';
import { toast } from '@/components/ui/use-toast';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  
  useEffect(() => {
    if (!id) return;
    
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      const foundProduct = getProductById(id);
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.images[0]);
        if (foundProduct.sizes && foundProduct.sizes.length > 0) {
          setSelectedSize(foundProduct.sizes[0]);
        }
        if (foundProduct.colors && foundProduct.colors.length > 0) {
          setSelectedColor(foundProduct.colors[0]);
        }
        
        // Get related products (same category, but different ID)
        const related = getProductById(id)?.category 
          ? getProductById(id)?.category === foundProduct.category 
            ? [] 
            : [getProductById(id)] 
          : [];
        setRelatedProducts(related.filter(p => p.id !== id).slice(0, 4));
      } else {
        navigate('/not-found');
      }
      
      setIsLoading(false);
    }, 500);
  }, [id, navigate]);
  
  const handleQuantityChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
    }
  };
  
  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      toast({
        title: "Выберите размер",
        description: "Пожалуйста, выберите размер перед добавлением в корзину",
        variant: "destructive",
      });
      return;
    }
    
    if (product.colors && !selectedColor) {
      toast({
        title: "Выберите цвет",
        description: "Пожалуйста, выберите цвет перед добавлением в корзину",
        variant: "destructive",
      });
      return;
    }
    
    setIsAdding(true);
    
    // Simulate adding to cart
    setTimeout(() => {
      setIsAdding(false);
      toast({
        title: "Товар добавлен в корзину",
        description: `${product.name} (${quantity} шт.) добавлен в вашу корзину`,
      });
    }, 800);
  };
  
  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-pulse">
              <div className="bg-gray-200 aspect-square rounded mb-4"></div>
              <div className="flex space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-24 h-24 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
              <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>
              <div className="h-12 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  if (!product) return null;
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div className="space-y-4 animate-fade-in">
            <div className="relative aspect-square bg-gray-50 overflow-hidden">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {product.isSale && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-sm px-2 py-1 rounded-sm animate-scale-in">
                  СКИДКА
                </span>
              )}
              {product.isNew && (
                <span className="absolute top-4 left-4 bg-fashion-secondary text-white text-sm px-2 py-1 rounded-sm animate-scale-in">
                  НОВИНКА
                </span>
              )}
              
              {/* Navigation buttons if multiple images */}
              {product.images.length > 1 && (
                <>
                  <button 
                    className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-75 rounded-full flex items-center justify-center"
                    onClick={() => {
                      const currentIndex = product.images.indexOf(selectedImage);
                      const prevIndex = (currentIndex - 1 + product.images.length) % product.images.length;
                      setSelectedImage(product.images[prevIndex]);
                    }}
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 bg-white bg-opacity-75 rounded-full flex items-center justify-center"
                    onClick={() => {
                      const currentIndex = product.images.indexOf(selectedImage);
                      const nextIndex = (currentIndex + 1) % product.images.length;
                      setSelectedImage(product.images[nextIndex]);
                    }}
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
            </div>
            
            {/* Thumbnail images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto py-2">
                {product.images.map((image: string, idx: number) => (
                  <button
                    key={idx}
                    className={cn(
                      "w-24 h-24 border-2 transition-colors duration-300",
                      selectedImage === image ? "border-fashion-secondary" : "border-transparent"
                    )}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt={`${product.name} - Изображение ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Info */}
          <div className="animate-fade-in">
            <h1 className="text-3xl font-serif mb-2">{product.name}</h1>
            
            <div className="flex items-center space-x-3 mb-6">
              {product.oldPrice ? (
                <>
                  <span className="text-2xl text-red-500 font-medium">{product.price.toLocaleString()} ₽</span>
                  <span className="text-xl text-gray-400 line-through">{product.oldPrice.toLocaleString()} ₽</span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 text-sm">
                    -{Math.round((1 - product.price / product.oldPrice) * 100)}%
                  </span>
                </>
              ) : (
                <span className="text-2xl font-medium">{product.price.toLocaleString()} ₽</span>
              )}
            </div>
            
            <p className="text-gray-600 mb-6">
              {product.description}
            </p>
            
            {/* Sizes */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium mb-2">Размер:</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      className={cn(
                        "px-4 py-2 border transition-colors duration-300",
                        selectedSize === size
                          ? "border-fashion-primary bg-fashion-primary text-white"
                          : "border-gray-300 hover:border-fashion-secondary"
                      )}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {/* Colors */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <h3 className="font-medium mb-2">Цвет:</h3>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color: string) => {
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
                      <button
                        key={color}
                        className={cn(
                          "w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200",
                          selectedColor === color ? "ring-2 ring-fashion-secondary scale-110" : ""
                        )}
                        title={color}
                        onClick={() => setSelectedColor(color)}
                      >
                        <span className={`w-6 h-6 rounded-full ${bgColor}`}></span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
            
            {/* Quantity */}
            <div className="mb-6">
              <h3 className="font-medium mb-2">Количество:</h3>
              <div className="flex">
                <button
                  className="w-10 h-10 bg-gray-100 flex items-center justify-center border border-gray-300"
                  onClick={() => handleQuantityChange(quantity - 1)}
                >
                  -
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(Number(e.target.value))}
                  className="w-16 h-10 border-t border-b border-gray-300 text-center"
                />
                <button
                  className="w-10 h-10 bg-gray-100 flex items-center justify-center border border-gray-300"
                  onClick={() => handleQuantityChange(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
            
            {/* Add to cart and wishlist */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className={cn(
                  "flex-grow flex items-center justify-center space-x-2 py-3 px-6 font-medium transition-colors duration-300",
                  "bg-fashion-primary text-white hover:bg-fashion-secondary",
                  isAdding && "opacity-70 cursor-not-allowed"
                )}
                onClick={handleAddToCart}
                disabled={isAdding}
              >
                <ShoppingCart size={18} />
                <span>{isAdding ? "Добавление..." : "В корзину"}</span>
              </button>
              
              <button className="flex items-center justify-center space-x-2 py-3 px-6 border border-gray-300 hover:border-fashion-secondary transition-colors duration-300">
                <Heart size={18} />
                <span>В избранное</span>
              </button>
            </div>
            
            {/* Share */}
            <div className="mt-6 flex items-center space-x-4 text-gray-500">
              <Share2 size={18} />
              <span>Поделиться:</span>
              <div className="flex space-x-2">
                <button className="hover:text-fashion-secondary transition-colors duration-300">
                  VK
                </button>
                <button className="hover:text-fashion-secondary transition-colors duration-300">
                  Telegram
                </button>
                <button className="hover:text-fashion-secondary transition-colors duration-300">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-serif mb-6">Вам также может понравиться</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
