
import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import Featured from '@/components/home/Featured';

const Index: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Categories />
      <Featured />
      
      {/* Features section */}
      <section className="py-16 bg-fashion-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              {
                icon: (
                  <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
                  </svg>
                ),
                title: "Бесплатная доставка",
                description: "При заказе от 5000 ₽",
                delay: 0,
              },
              {
                icon: (
                  <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                ),
                title: "Гарантия качества",
                description: "Только проверенные бренды",
                delay: 100,
              },
              {
                icon: (
                  <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                  </svg>
                ),
                title: "Простой возврат",
                description: "30 дней на возврат",
                delay: 200,
              },
              {
                icon: (
                  <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"></path>
                  </svg>
                ),
                title: "Безопасная оплата",
                description: "Защищенные транзакции",
                delay: 300,
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="p-6 bg-white rounded-lg shadow-sm animate-fade-in"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                {feature.icon}
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
