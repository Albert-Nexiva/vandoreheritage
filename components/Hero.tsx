import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full min-h-screen flex flex-col md:flex-row">
      {/* Left Panel: Content */}
      <div className="w-full md:w-5/12 bg-heritage-burgundy flex flex-col justify-center px-8 md:px-12 lg:px-24 pt-32 pb-16 md:py-0 relative overflow-hidden">
        {/* Decorative Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        ></div>

        <div className="relative z-10 space-y-8 md:space-y-10 animate-fade-in-up">
          <span className="inline-block text-heritage-gold text-xs font-bold tracking-[0.25em] uppercase">
            Est. 2024
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] text-white font-serif leading-[1.1]">
            Curating <br />
            <span className="italic text-heritage-gold">Timeless Living</span> <br />
            in Latvia
          </h1>
          
          <p className="text-white/70 text-sm md:text-base font-light max-w-sm leading-relaxed tracking-wide">
            Exclusive real estate and concierge services for the discerning individual seeking elegance in the Baltics.
          </p>
          
          <div className="pt-4">
            <a 
              href="#" 
              className="group inline-flex items-center gap-4 px-10 py-4 border border-heritage-gold/50 text-heritage-gold hover:bg-heritage-gold hover:text-heritage-burgundy hover:border-heritage-gold transition-all duration-500 text-xs font-bold tracking-[0.2em] uppercase"
            >
              Explore Properties
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Right Panel: Image */}
      <div className="w-full md:w-7/12 h-[50vh] md:h-screen relative overflow-hidden group">
        <div className="absolute inset-0 bg-black/10 z-10 transition-opacity duration-700 group-hover:bg-black/0"></div>
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCju8FO5797Qu80D6u2d_TrMJtvpLmA5oiBa0G3A3WUoStfUOUjbqIz08Nrx_EMKdbuRjGJyuTvpiHtnw0SKkcvztPURYqqsMkMr5lKwg4suOuwiqxyDSNbs2dR9bOukVggnvAHxgfB11_TUSQt97WX2i9lA681lOvip9mK_UsTkO0rpPxZnw1B4fyPouqbBWca18GKmSsPm11v_CR7cBFAi5jOXGqg_dk9BNTF7v5VD3NkNTK0UNE8FHQtKliwIk91zpe49RQ0aMQ" 
          alt="Minimalist luxury living room" 
          className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
        />
        
        {/* Floating caption */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 z-20 hidden md:flex items-center gap-4">
          <div className="w-16 h-[1px] bg-white/60"></div>
          <span className="text-white/90 text-[10px] font-bold tracking-[0.25em] uppercase">
            Riga, Old Town Penthouse
          </span>
        </div>
      </div>
    </header>
  );
};

export default Hero;