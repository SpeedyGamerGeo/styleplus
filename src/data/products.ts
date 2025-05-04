
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
    name: "Элегантное платье",
    category: "women",
    price: 3990,
    oldPrice: 4990,
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
    images: [
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
      "https://images.unsplash.com/photo-1551163943-3f6a855d1153",
    ],
    description: "Элегантное платье из натуральных материалов. Идеально подходит для особых случаев.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Черный", "Белый", "Красный"],
    isSale: true,
  },
  {
    id: "w2",
    name: "Легкая блузка",
    category: "women",
    price: 1990,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
    images: [
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105",
      "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6",
      "https://images.unsplash.com/photo-1499939667766-4afceb292d05",
    ],
    description: "Легкая блузка из хлопка с оригинальным принтом. Подходит для повседневного гардероба.",
    sizes: ["S", "M", "L"],
    colors: ["Белый", "Голубой", "Розовый"],
    isNew: true,
  },
  {
    id: "w3",
    name: "Джинсы классические",
    category: "women",
    price: 2990,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
      "https://images.unsplash.com/photo-1604176424472-9d7122c37079",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    ],
    description: "Классические джинсы прямого кроя из прочного денима. Универсальная модель для любого гардероба.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Синий", "Черный", "Голубой"],
  },
  {
    id: "w4",
    name: "Пальто осеннее",
    category: "women",
    price: 7990,
    oldPrice: 9990,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a",
      "https://images.unsplash.com/photo-1520757742940-db7049ef57d6",
      "https://images.unsplash.com/photo-1548126032-079a0fb0099d",
    ],
    description: "Элегантное осеннее пальто из шерстяной ткани. Классический крой и стильный дизайн.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Бежевый", "Черный", "Тёмно-синий"],
    isSale: true,
  },
  {
    id: "w5",
    name: "Юбка миди плиссе",
    category: "women",
    price: 2490,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa",
    images: [
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa",
      "https://images.unsplash.com/photo-1577900232427-20e93ed6c548",
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09",
    ],
    description: "Элегантная плиссированная юбка миди. Легкая и женственная, идеальна для любого сезона.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Черный", "Бежевый", "Зеленый"],
    isNew: true,
  },
  {
    id: "w6",
    name: "Свитер оверсайз",
    category: "women",
    price: 3490,
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
      "https://images.unsplash.com/photo-1559675404-46eca05b62ff",
      "https://images.unsplash.com/photo-1516762689617-e1cffcef479d",
    ],
    description: "Уютный свитер оверсайз из мягкой пряжи. Объемный силуэт и универсальный дизайн.",
    sizes: ["S/M", "L/XL"],
    colors: ["Бежевый", "Серый", "Белый"],
  },
  
  // Мужская одежда
  {
    id: "m1",
    name: "Пиджак классический",
    category: "men",
    price: 6990,
    image: "https://images.unsplash.com/photo-1598040420073-858fd692cb00",
    images: [
      "https://images.unsplash.com/photo-1598040420073-858fd692cb00",
      "https://images.unsplash.com/photo-1598040420008-d5c564b00b5d",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    ],
    description: "Классический пиджак из итальянской ткани. Идеально сидит по фигуре, подходит для офиса и особых случаев.",
    sizes: ["46", "48", "50", "52", "54"],
    colors: ["Синий", "Черный", "Серый"],
  },
  {
    id: "m2",
    name: "Джемпер шерстяной",
    category: "men",
    price: 2990,
    oldPrice: 3990,
    image: "https://images.unsplash.com/photo-1638913972776-873fc7af3fdf",
    images: [
      "https://images.unsplash.com/photo-1638913972776-873fc7af3fdf",
      "https://images.unsplash.com/photo-1597843786411-a7fa8ad44a95",
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3",
    ],
    description: "Теплый шерстяной джемпер с высоким воротом. Идеально подходит для холодных дней.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Черный", "Бежевый", "Серый"],
    isSale: true,
  },
  {
    id: "m3",
    name: "Рубашка повседневная",
    category: "men",
    price: 1990,
    image: "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e",
    images: [
      "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e",
      "https://images.unsplash.com/photo-1598032895397-b9472444bf93",
      "https://images.unsplash.com/photo-1563630423918-b58f07336ac9",
    ],
    description: "Стильная повседневная рубашка из хлопка. Комфортный крой и современный дизайн.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Белый", "Голубой", "Черный"],
    isNew: true,
  },
  {
    id: "m4",
    name: "Брюки чиносы",
    category: "men",
    price: 2490,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a",
    images: [
      "https://images.unsplash.com/photo-1473966968600-fa801b869a1a",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
      "https://images.unsplash.com/photo-1560243563-062bfc001d68",
    ],
    description: "Практичные брюки чиносы из хлопка. Универсальная модель для работы и отдыха.",
    sizes: ["44", "46", "48", "50", "52", "54"],
    colors: ["Бежевый", "Синий", "Серый"],
  },
  {
    id: "m5",
    name: "Куртка демисезонная",
    category: "men",
    price: 5990,
    oldPrice: 7990,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
      "https://images.unsplash.com/photo-1516257984-b1b4d707412e",
      "https://images.unsplash.com/photo-1525457136159-8878648a7ad0",
    ],
    description: "Стильная демисезонная куртка с водоотталкивающим покрытием. Практичная и комфортная модель.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Черный", "Синий", "Хаки"],
    isSale: true,
  },
  {
    id: "m6",
    name: "Джинсы прямые",
    category: "men",
    price: 2990,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d",
      "https://images.unsplash.com/photo-1555689502-c4b22d76c56f",
      "https://images.unsplash.com/photo-1615286923658-6e79aba6fc32",
    ],
    description: "Классические джинсы прямого кроя из качественного денима. Удобная посадка и прочный материал.",
    sizes: ["29/30", "30/32", "32/34", "34/34", "36/34"],
    colors: ["Синий", "Темно-синий", "Черный"],
  },
  
  // Аксессуары
  {
    id: "a1",
    name: "Сумка кожаная",
    category: "accessories",
    price: 4990,
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214",
    images: [
      "https://images.unsplash.com/photo-1600857062241-98e5dba7f214",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7",
    ],
    description: "Элегантная кожаная сумка с несколькими отделениями. Практичный и стильный аксессуар на каждый день.",
    colors: ["Черный", "Коричневый", "Бежевый"],
    isNew: true,
  },
  {
    id: "a2",
    name: "Ремень классический",
    category: "accessories",
    price: 1490,
    image: "https://images.unsplash.com/photo-1611372076124-d1c513c24d1e",
    images: [
      "https://images.unsplash.com/photo-1611372076124-d1c513c24d1e",
      "https://images.unsplash.com/photo-1590874315261-788881621f7a",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27",
    ],
    description: "Классический кожаный ремень с металлической пряжкой. Универсальный аксессуар для любого гардероба.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Черный", "Коричневый"],
  },
  {
    id: "a3",
    name: "Шарф шерстяной",
    category: "accessories",
    price: 1990,
    oldPrice: 2490,
    image: "https://images.unsplash.com/photo-1623217793322-eecedb77e0af",
    images: [
      "https://images.unsplash.com/photo-1623217793322-eecedb77e0af",
      "https://images.unsplash.com/photo-1520903920243-5b378b5fce0a",
      "https://images.unsplash.com/photo-1584863603575-5a936f35c3f5",
    ],
    description: "Теплый шерстяной шарф с изысканным дизайном. Защитит от холода и дополнит ваш образ.",
    colors: ["Серый", "Бежевый", "Клетка"],
    isSale: true,
  },
  {
    id: "a4",
    name: "Часы наручные",
    category: "accessories",
    price: 7990,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    images: [
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
      "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
      "https://images.unsplash.com/photo-1587925358603-c2eea5305bbc",
    ],
    description: "Элегантные наручные часы с кожаным ремешком. Стильный и функциональный аксессуар.",
    colors: ["Черный", "Коричневый"],
    isNew: true,
  },
  {
    id: "a5",
    name: "Шляпа фетровая",
    category: "accessories",
    price: 2490,
    image: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a",
    images: [
      "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a",
      "https://images.unsplash.com/photo-1589357708292-1f54adca149c",
      "https://images.unsplash.com/photo-1489231441510-615293965c95",
    ],
    description: "Стильная фетровая шляпа с широкими полями. Дополнит любой образ и защитит от солнца.",
    sizes: ["S", "M", "L"],
    colors: ["Черный", "Бежевый", "Коричневый"],
  },
  {
    id: "a6",
    name: "Кошелек кожаный",
    category: "accessories",
    price: 1990,
    oldPrice: 2490,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93",
      "https://images.unsplash.com/photo-1589782182904-d64b3431ed0b",
      "https://images.unsplash.com/photo-1556905200-bd982f883637",
    ],
    description: "Компактный кожаный кошелек с несколькими отделениями для карт и купюр. Практичный и стильный аксессуар.",
    colors: ["Черный", "Коричневый", "Бордовый"],
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
