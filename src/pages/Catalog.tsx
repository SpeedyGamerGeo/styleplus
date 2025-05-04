
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import ProductGrid from '@/components/products/ProductGrid';
import { getProductsByCategory, getNewProducts, getSaleProducts } from '@/data/products';
import { Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

// Translate categories to Russian
const categoryTranslations = {
  'women': 'Женщинам',
  'men': 'Мужчинам',
  'accessories': 'Аксессуары',
  'new': 'Новинки',
  'sale': 'Распродажа',
};

const sortOptions = [
  { value: 'default', label: 'По умолчанию' },
  { value: 'price-asc', label: 'Цена (по возрастанию)' },
  { value: 'price-desc', label: 'Цена (по убыванию)' },
  { value: 'name-asc', label: 'По названию (А-Я)' },
  { value: 'name-desc', label: 'По названию (Я-А)' },
];

const Catalog: React.FC = () => {
  const { category = 'women' } = useParams<{ category: string }>();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState('default');
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay
    setTimeout(() => {
      let fetchedProducts;
      
      switch (category) {
        case 'new':
          fetchedProducts = getNewProducts();
          break;
        case 'sale':
          fetchedProducts = getSaleProducts();
          break;
        default:
          fetchedProducts = getProductsByCategory(category);
      }
      
      // Apply sorting
      const sortedProducts = sortProducts(fetchedProducts, sortBy);
      
      setProducts(sortedProducts);
      setIsLoading(false);
    }, 500);
  }, [category, sortBy]);
  
  const sortProducts = (products, sortOption) => {
    const productsToSort = [...products];
    
    switch (sortOption) {
      case 'price-asc':
        return productsToSort.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return productsToSort.sort((a, b) => b.price - a.price);
      case 'name-asc':
        return productsToSort.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return productsToSort.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return productsToSort;
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif mb-8 animate-fade-in">
          {categoryTranslations[category] || 'Каталог'}
        </h1>
        
        {/* Filters and sorting */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
            <button 
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center space-x-2 px-4 py-2 bg-fashion-muted text-fashion-primary hover:bg-gray-200 transition-colors duration-300"
            >
              <Filter size={16} />
              <span>Фильтры</span>
              {filtersOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Сортировать:</span>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="border p-2 focus:outline-none focus:ring-1 focus:ring-fashion-secondary"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Filter panels */}
          <div className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-6 bg-fashion-muted p-6 mb-6 transition-all duration-300 overflow-hidden",
            filtersOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 py-0 hidden"
          )}>
            <div>
              <h3 className="font-medium mb-2">Цена</h3>
              <div className="flex items-center space-x-4">
                <input 
                  type="number" 
                  placeholder="От" 
                  className="border p-2 w-full"
                  min="0"
                />
                <span>-</span>
                <input 
                  type="number" 
                  placeholder="До" 
                  className="border p-2 w-full"
                  min="0"
                />
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Размер</h3>
              <div className="grid grid-cols-4 md:grid-cols-5 gap-2">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <label key={size} className="flex items-center space-x-1 cursor-pointer">
                    <input type="checkbox" className="accent-fashion-secondary" />
                    <span>{size}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Цвет</h3>
              <div className="grid grid-cols-4 md:grid-cols-5 gap-2">
                {['Черный', 'Белый', 'Серый', 'Синий', 'Красный', 'Бежевый'].map((color) => (
                  <label key={color} className="flex items-center space-x-1 cursor-pointer">
                    <input type="checkbox" className="accent-fashion-secondary" />
                    <span>{color}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Display products or loading state */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="animate-pulse">
                <div className="bg-gray-200 aspect-[3/4] rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="text-center py-12 animate-fade-in">
            <h2 className="text-xl mb-2">Нет товаров</h2>
            <p className="text-gray-500">
              К сожалению, по вашему запросу ничего не найдено.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Catalog;
