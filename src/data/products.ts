
export interface Product {
  id: string;
  name: string;
  category: 'women' | 'men' | 'accessories';
  price: number;
  oldPrice?: number;
  image: string;
  images: string[];
  description: string;
  sizes?: string[];
  colors?: string[];
  isNew?: boolean;
  isSale?: boolean;
}

// Products data
export const products: Product[] = [
  // Женская одежда
  {
    id: "w1",
    name: "Джинсовое платье",
    category: "women",
    price: 3990,
    oldPrice: 4990,
    image: "https://images.unsplash.com/photo-1475180098004-ca77a66827be",
    images: [
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be",
      "https://images.unsplash.com/photo-1542574271-7f3b92e6c821",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c",
    ],
    description: "Стильное джинсовое платье из премиального денима. Идеально подходит для повседневных и особых случаев.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Тёмно-синий", "Голубой", "Чёрный"],
    isSale: true,
  },
  {
    id: "w2",
    name: "Джинсовая блузка",
    category: "women",
    price: 1990,
    image: "https://images.unsplash.com/photo-1565084888279-aca607ecce0c",
    images: [
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c",
      "https://images.unsplash.com/photo-1565084887829-949598e7c185",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
    ],
    description: "Лёгкая джинсовая блузка с оригинальной обработкой и вышивкой. Идеально дополнит повседневный гардероб.",
    sizes: ["S", "M", "L"],
    colors: ["Голубой", "Синий", "Светло-голубой"],
    isNew: true,
  },
  {
    id: "w3",
    name: "Классические джинсы",
    category: "women",
    price: 2990,
    image: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f",
    images: [
      "https://images.unsplash.com/photo-1555689502-c4b22d76c56f",
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09",
      "https://images.unsplash.com/photo-1604176424472-9d7122c37079",
    ],
    description: "Классические джинсы прямого кроя из высококачественного денима. Универсальная модель для любого гардероба.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Синий", "Чёрный", "Голубой"],
  },
  {
    id: "w4",
    name: "Джинсовое пальто",
    category: "women",
    price: 7990,
    oldPrice: 9990,
    image: "https://images.unsplash.com/photo-1590736704728-f4730bb30770",
    images: [
      "https://images.unsplash.com/photo-1590736704728-f4730bb30770",
      "https://images.unsplash.com/photo-1565084887829-949598e7c185",
      "https://images.unsplash.com/photo-1604176424472-9d7122c37079",
    ],
    description: "Стильное удлиненное джинсовое пальто из плотного денима. Утепленная подкладка делает его идеальным для прохладной погоды.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Синий", "Чёрный", "Тёмно-синий"],
    isSale: true,
  },
  {
    id: "w5",
    name: "Джинсовая юбка миди",
    category: "women",
    price: 2490,
    image: "https://images.unsplash.com/photo-1577900232427-20e93ed6c548",
    images: [
      "https://images.unsplash.com/photo-1577900232427-20e93ed6c548",
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa",
      "https://images.unsplash.com/photo-1604176424472-9d7122c37079",
    ],
    description: "Элегантная джинсовая юбка миди с модным разрезом. Легкая и женственная, идеальна для любого сезона.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Синий", "Голубой", "Чёрный"],
    isNew: true,
  },
  {
    id: "w6",
    name: "Джинсовый свитер оверсайз",
    category: "women",
    price: 3490,
    image: "https://images.unsplash.com/photo-1565084887829-949598e7c185",
    images: [
      "https://images.unsplash.com/photo-1565084887829-949598e7c185",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c",
      "https://images.unsplash.com/photo-1598522325074-042db73aa4e6",
    ],
    description: "Необычный джинсовый свитер оверсайз с элементами вязки. Объемный силуэт и оригинальный дизайн с джинсовыми вставками.",
    sizes: ["S/M", "L/XL"],
    colors: ["Синий", "Голубой", "Тёмно-синий"],
  },
  
  // Мужская одежда
  {
    id: "m1",
    name: "Джинсовый пиджак",
    category: "men",
    price: 6990,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d",
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157",
    ],
    description: "Классический джинсовый пиджак из плотного денима с добавлением эластана. Идеально сидит по фигуре, подходит и для офиса, и для отдыха.",
    sizes: ["46", "48", "50", "52", "54"],
    colors: ["Синий", "Чёрный", "Тёмно-синий"],
  },
  {
    id: "m2",
    name: "Джинсовый джемпер",
    category: "men",
    price: 2990,
    oldPrice: 3990,
    image: "https://images.unsplash.com/photo-1603252109360-909f58e35947",
    images: [
      "https://images.unsplash.com/photo-1603252109360-909f58e35947",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e",
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb",
    ],
    description: "Теплый джинсовый джемпер с вязаными элементами и высоким воротом. Сочетание денима и мягкой ткани создает уникальный стиль.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Синий", "Тёмно-синий", "Чёрный"],
    isSale: true,
  },
  {
    id: "m3",
    name: "Джинсовая рубашка",
    category: "men",
    price: 1990,
    image: "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e",
    images: [
      "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e",
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157",
    ],
    description: "Стильная джинсовая рубашка из мягкого денима. Комфортный крой и современный дизайн с вареной обработкой.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Голубой", "Синий", "Чёрный"],
    isNew: true,
  },
  {
    id: "m4",
    name: "Джинсовые брюки чиносы",
    category: "men",
    price: 2490,
    image: "https://images.unsplash.com/photo-1603252109612-24fa03d145c8",
    images: [
      "https://images.unsplash.com/photo-1603252109612-24fa03d145c8",
      "https://images.unsplash.com/photo-1604176424472-9d7122c37079",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
    ],
    description: "Практичные джинсовые брюки чиносы из легкого денима. Универсальная модель для работы и отдыха с удобными карманами.",
    sizes: ["44", "46", "48", "50", "52", "54"],
    colors: ["Синий", "Голубой", "Тёмно-синий"],
  },
  {
    id: "m5",
    name: "Джинсовая куртка",
    category: "men",
    price: 5990,
    oldPrice: 7990,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
      "https://images.unsplash.com/photo-1548883354-94bcfe321cbb",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157",
    ],
    description: "Стильная утепленная джинсовая куртка с подкладкой. Классический крой и винтажная обработка денима делают её идеальной для создания модных образов.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Синий", "Чёрный", "Тёмно-синий"],
    isSale: true,
  },
  {
    id: "m6",
    name: "Джинсы прямые",
    category: "men",
    price: 2990,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
      "https://images.unsplash.com/photo-1604176424472-9d7122c37079",
      "https://images.unsplash.com/photo-1604176424473-fda95d57c5d3",
    ],
    description: "Классические прямые джинсы из качественного плотного денима. Удобная посадка и усиленные швы гарантируют долговечность.",
    sizes: ["29/30", "30/32", "32/34", "34/34", "36/34"],
    colors: ["Синий", "Тёмно-синий", "Чёрный"],
  },
  
  // Аксессуары
  {
    id: "a1",
    name: "Джинсовая сумка",
    category: "accessories",
    price: 4990,
    image: "https://images.unsplash.com/photo-1603252109612-24fa03d145c8",
    images: [
      "https://images.unsplash.com/photo-1603252109612-24fa03d145c8",
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214",
      "https://images.unsplash.com/photo-1542272604-787c3835535d",
    ],
    description: "Стильная джинсовая сумка с кожаными вставками и несколькими отделениями. Практичный и модный аксессуар на каждый день.",
    colors: ["Синий", "Тёмно-синий", "Голубой"],
    isNew: true,
  },
  {
    id: "a2",
    name: "Джинсовый ремень",
    category: "accessories",
    price: 1490,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157",
    images: [
      "https://images.unsplash.com/photo-1603252109303-2751441dd157",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
      "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e",
    ],
    description: "Джинсовый ремень с кожаной отделкой и металлической пряжкой. Универсальный аксессуар для джинсов и брюк.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Синий", "Тёмно-синий"],
  },
  {
    id: "a3",
    name: "Джинсовый шарф",
    category: "accessories",
    price: 1990,
    oldPrice: 2490,
    image: "https://images.unsplash.com/photo-1586077427825-15dca6b44dba",
    images: [
      "https://images.unsplash.com/photo-1586077427825-15dca6b44dba",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c",
      "https://images.unsplash.com/photo-1603252109360-909f58e35947",
    ],
    description: "Стильный джинсовый шарф с бахромой. Оригинальный аксессуар, который подчеркнет вашу индивидуальность и защитит в прохладную погоду.",
    colors: ["Синий", "Голубой", "Тёмно-синий"],
    isSale: true,
  },
  {
    id: "a4",
    name: "Часы с джинсовым ремешком",
    category: "accessories",
    price: 7990,
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214",
    images: [
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214",
      "https://images.unsplash.com/photo-1603252109303-2751441dd157",
      "https://images.unsplash.com/photo-1542272604-787c3835535d",
    ],
    description: "Элегантные наручные часы с джинсовым ремешком. Стильный и функциональный аксессуар для любителей джинсовой тематики.",
    colors: ["Синий", "Тёмно-синий"],
    isNew: true,
  },
  {
    id: "a5",
    name: "Джинсовая шляпа",
    category: "accessories",
    price: 2490,
    image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a",
    images: [
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a",
      "https://images.unsplash.com/photo-1578996953841-b187dbe4bc8a",
      "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e",
    ],
    description: "Стильная джинсовая шляпа с широкими полями. Защитит от солнца и дополнит любой образ, подчеркивая вашу любовь к джинсовой ткани.",
    sizes: ["S", "M", "L"],
    colors: ["Синий", "Голубой", "Тёмно-синий"],
  },
  {
    id: "a6",
    name: "Джинсовый кошелек",
    category: "accessories",
    price: 1990,
    oldPrice: 2490,
    image: "https://images.unsplash.com/photo-1603252109360-909f58e35947",
    images: [
      "https://images.unsplash.com/photo-1603252109360-909f58e35947",
      "https://images.unsplash.com/photo-1603252109612-24fa03d145c8",
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214",
    ],
    description: "Компактный кошелек из джинсовой ткани с кожаными элементами. Несколько отделений для карт и купюр. Практичный и стильный аксессуар.",
    colors: ["Синий", "Тёмно-синий", "Голубой"],
    isSale: true,
  },
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getNewProducts = () => {
  return products.filter(product => product.isNew);
};

export const getSaleProducts = () => {
  return products.filter(product => product.isSale);
};
