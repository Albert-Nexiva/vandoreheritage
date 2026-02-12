import React from 'react';
import { Page } from '../App';

interface CuratedCarouselProps {
    onNavigate: (page: Page, id?: string) => void;
}

const CuratedCarousel: React.FC<CuratedCarouselProps> = ({ onNavigate }) => {
  const properties = [
    {
      id: '1',
      title: 'Elizabetes Iela 10b',
      location: 'Quiet Centre, Riga',
      price: '€450,000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPfwRIbItb_Uvhlx7x4OO10y3QghT9i96kNbB60XhGwiOu4vfllvkv2IpUjvX065UUCzIXWkQ09bnTH4uCUMUl6j1eFJ3AUpFuSh5x43fj4GnB67qaJOEAH2l8AAkH9rQhm1Ox1lipPHXl9VLPDkuKR8LcqQxzc1pNYp02TwG6SElPakNgQPs04ckBlfYI18VEYocIxCBh_N6jTE98_O1wEtrj83UEFq_TG3GZ7RMP9oOahRHpUciCTqAmHI22Mm-0o0vQCvbODgE',
      status: 'New Listing'
    },
    {
      id: '2',
      title: 'Alberta Iela 4',
      location: 'Art Nouveau District',
      price: '€1,200,000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmlsOkME04h3s7anaw1B-z_jBfmdtQAyQlDdCObFBxaVhdmEhaQQzlDPvG3TiIbm554anHt796fd7djWlN_P5sm2EXeHumvQ98FErN9Qh829wEef18ftyE57SVv1lkfEwYffFJiCx5QKfJH7S70vciW0rZc2TLEMEwrbkPcELBmtmDwzf6KF9xmjB9yFl7N4e-yjymoSTZO5At8VTdFXk8Ol_VbD3_opZ-p-n1abq0qP9WGDTc6V-pTsiIz_GPkjeCaytfwVgkLd4',
      status: ''
    },
    {
      id: '3',
      title: 'Strēlnieku Iela 7',
      location: 'Diplomatic Quarter',
      price: 'Sold',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj4t30wRgjDAOmpIyEUJAlmNDGktHk65sLMPsw2WkFUrIMo5WrRxOeMqWmdC4e8pzeasANUs_ECM1gy3BPHwJaBdSMkxxJVGHYbu8fW2yCmsIBrDJQfydMEXL0FFU7oaQTdc6X_AF7esvqodj9xA0RQKGBQxsBdueoS28wWJt3GKNyBAv-U3W_R56aXlZY7Zg9jKHsZG1L9R4p8T1y0i7BkNKPpILoxgFv0tMAb_OngX1SjVbWUDmzCMxF8wSBJNKKEaU9NTpoiaw',
      status: 'Sold'
    },
    {
      id: '4',
      title: 'Meža Prospekts 12',
      location: 'Mežaparks, Riga',
      price: '€890,000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ5BZofdv6GAV_2-BJ7FpIBsNN3d2mnTLxJWtRxBkgYASqODG9ubGFMatbuGZAl2z0-jegz8igtwE7hqyqiLktZUkhiHluVjPM4I2H_zHWYuBLICzFoF2tHccnOcj65Iw75UHFPXOswqWas3D8si45ldJu9ynAaCKyeBEmgP9PF7yLYChx2VuiTOdOk0A0zTSN7RG7uyASazNKJMp6MVhe3SR72jE2Kr0YUXUhH4dHYUFdu_lS5q2M6o0rdHoV3DxTaZAmNBQoGKI',
      status: ''
    }
  ];

  return (
    <section className="pl-6 md:pl-12 pb-20 w-full overflow-hidden bg-background-light">
      <header className="w-full py-12 pr-6 md:pr-12 flex flex-col md:flex-row justify-between items-end border-b border-primary/10 mb-8">
        <div>
          <h2 className="font-serif text-3xl md:text-5xl text-primary mb-2 italic">Curated Collection</h2>
          <p className="text-primary/60 text-sm tracking-widest uppercase">Riga's Finest Heritage Properties</p>
        </div>
        <div className="hidden md:flex gap-4 mt-6 md:mt-0">
          <button aria-label="Previous slide" className="w-12 h-12 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-colors flex items-center justify-center group">
            <span className="material-icons-outlined group-hover:translate-x-[-2px] transition-transform text-lg">arrow_back</span>
          </button>
          <button aria-label="Next slide" className="w-12 h-12 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-colors flex items-center justify-center group">
            <span className="material-icons-outlined group-hover:translate-x-[2px] transition-transform text-lg">arrow_forward</span>
          </button>
        </div>
      </header>

      <div className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 pr-12 scrollbar-hide">
        {properties.map((prop) => (
          <article 
            key={prop.id}
            onClick={() => onNavigate('detail', prop.id)}
            className="flex-none w-[85vw] md:w-[28vw] snap-center group cursor-pointer"
          >
            <div className="relative w-full aspect-[4/5] rounded overflow-hidden mb-6 bg-primary/5">
              <img src={prop.image} alt={prop.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {prop.status && (
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs px-3 py-1 rounded-full uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  {prop.status}
                </div>
              )}
            </div>
            <div className="flex justify-between items-baseline border-t border-primary/10 pt-4">
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-primary mb-1">{prop.title}</h3>
                <p className="text-sm text-primary/60 font-light">{prop.location}</p>
              </div>
              <span className={`text-lg font-medium ${prop.price === 'Sold' ? 'opacity-50' : ''}`}>{prop.price}</span>
            </div>
          </article>
        ))}

        {/* See All Link */}
        <div className="flex-none w-[20vw] md:w-[15vw] snap-center flex items-center justify-center">
          <button 
            onClick={() => onNavigate('properties')}
            className="group flex flex-col items-center gap-4 text-primary hover:opacity-70 transition-opacity"
          >
            <div className="w-16 h-16 rounded-full border border-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <span className="material-icons-outlined">arrow_forward</span>
            </div>
            <span className="uppercase tracking-widest text-sm font-medium">View All</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CuratedCarousel;