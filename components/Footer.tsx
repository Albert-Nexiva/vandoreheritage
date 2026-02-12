import React from 'react';
import { Page } from '../App';

interface FooterProps {
    onNavigate?: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="snap-start snap-always bg-heritage-burgundy text-heritage-cream relative overflow-hidden min-h-[50vh] flex flex-col justify-center">
      {/* Decorative Border Top */}
      <div className="h-1 w-full bg-gradient-to-r from-heritage-burgundy via-heritage-gold/40 to-heritage-burgundy absolute top-0"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Lead Magnet */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
            <div>
              <span className="inline-block py-1 px-0 text-heritage-gold text-xs font-bold tracking-widest uppercase border-b border-heritage-gold/30 mb-4">
                Exclusive Report
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-4 text-white">
                The 2026 Latvia <br/>
                <span className="font-serif italic text-heritage-gold">Market Review</span>
              </h2>
              <p className="text-heritage-cream/70 text-lg font-light max-w-md leading-relaxed">
                Access our annual editorial on premier Baltic real estate trends, investment forecasts, and off-market opportunities. Curated by Vandore Heritage.
              </p>
            </div>
            
            {/* Email Capture Form */}
            <form className="group relative max-w-md w-full mt-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex items-end">
                <input 
                  type="email" 
                  placeholder="Enter your professional email" 
                  className="w-full bg-transparent border-b border-heritage-cream/20 text-heritage-cream placeholder-heritage-cream/30 py-4 pr-12 text-lg focus:outline-none focus:border-heritage-gold focus:ring-0 transition-colors duration-300 rounded-none"
                />
                <button 
                  type="button" 
                  className="absolute right-0 bottom-4 text-heritage-gold hover:text-white transition-colors duration-300 flex items-center gap-2 group-focus-within:text-white"
                >
                  <span className="uppercase text-xs font-bold tracking-widest hidden sm:inline-block opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 delay-100">
                    Request Access
                  </span>
                  <span className="material-icons-outlined text-2xl rotate-0 group-hover:-rotate-45 transition-transform duration-300">
                    arrow_forward
                  </span>
                </button>
              </div>
              <p className="mt-3 text-xs text-heritage-cream/40 font-light">
                By subscribing, you agree to receive our curated market insights. Unsubscribe at any time.
              </p>
            </form>

            {/* Brand Mark */}
            <div className="hidden lg:block pt-12 opacity-20">
              <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 0L61 39H100L68 61L79 100L50 78L21 100L32 61L0 39H39L50 0Z"></path>
              </svg>
            </div>
          </div>

          {/* Right Column: Navigation Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-4 border-l border-heritage-cream/10 pl-0 lg:pl-12">
              
              <div className="flex flex-col space-y-6">
                <h3 className="text-heritage-gold text-xs font-bold tracking-widest uppercase">Real Estate</h3>
                <ul className="space-y-4 text-sm font-light text-heritage-cream/80">
                  <li><button onClick={() => onNavigate?.('properties')} className="hover:text-white hover:pl-2 transition-all duration-300 text-left">Buy Properties</button></li>
                  <li><button className="hover:text-white hover:pl-2 transition-all duration-300 text-left">Rent Luxury</button></li>
                  <li><button className="hover:text-white hover:pl-2 transition-all duration-300 text-left">New Developments</button></li>
                  <li><button className="hover:text-white hover:pl-2 transition-all duration-300 text-left">Off-Market</button></li>
                </ul>
              </div>

              <div className="flex flex-col space-y-6">
                <h3 className="text-heritage-gold text-xs font-bold tracking-widest uppercase">Services</h3>
                <ul className="space-y-4 text-sm font-light text-heritage-cream/80">
                  <li><button className="hover:text-white hover:pl-2 transition-all duration-300 text-left">Advisory</button></li>
                  <li><button className="hover:text-white hover:pl-2 transition-all duration-300 text-left">Concierge</button></li>
                  <li><button className="hover:text-white hover:pl-2 transition-all duration-300 text-left">Interior Design</button></li>
                  <li><button className="hover:text-white hover:pl-2 transition-all duration-300 text-left">Legal Support</button></li>
                </ul>
              </div>

              <div className="flex flex-col space-y-6">
                <h3 className="text-heritage-gold text-xs font-bold tracking-widest uppercase">Journal</h3>
                <ul className="space-y-4 text-sm font-light text-heritage-cream/80">
                  <li><button className="hover:text-white hover:pl-2 transition-all duration-300 text-left">Architecture</button></li>
                  <li><button className="hover:text-white hover:pl-2 transition-all duration-300 text-left">Lifestyle</button></li>
                  <li><button className="hover:text-white hover:pl-2 transition-all duration-300 text-left">Interviews</button></li>
                  <li><button className="hover:text-white hover:pl-2 transition-all duration-300 text-left">Events</button></li>
                </ul>
              </div>

              <div className="flex flex-col space-y-6">
                <h3 className="text-heritage-gold text-xs font-bold tracking-widest uppercase">About</h3>
                <ul className="space-y-4 text-sm font-light text-heritage-cream/80">
                  <li><button className="hover:text-white hover:pl-2 transition-all duration-300 text-left">The Heritage</button></li>
                  <li><button className="hover:text-white hover:pl-2 transition-all duration-300 text-left">Our Team</button></li>
                  <li><button className="hover:text-white hover:pl-2 transition-all duration-300 text-left">Careers</button></li>
                  <li><button className="hover:text-white hover:pl-2 transition-all duration-300 text-left">Contact</button></li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pl-0 lg:pl-12 flex flex-col md:flex-row gap-6 md:items-center justify-between border-t border-heritage-cream/10 pt-8 border-l border-transparent">
              <div className="text-heritage-cream/60 text-sm">
                <span className="block">Office: Alberta iela 13, Rīga, LV-1010</span>
                <span className="block mt-1">+371 67 000 000 | info@vandore.lv</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-20 pt-8 border-t border-heritage-cream/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-heritage-cream/40 font-light tracking-wide">
            <span>© 2024 Vandore Heritage. All rights reserved.</span>
            <div className="hidden md:block h-3 w-px bg-heritage-cream/20"></div>
            <div className="flex gap-6">
              <button className="hover:text-heritage-gold transition-colors">Privacy Policy</button>
              <button className="hover:text-heritage-gold transition-colors">Terms of Use</button>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs tracking-widest uppercase">
            <button className="px-2 py-1 text-heritage-cream/40 hover:text-heritage-gold transition-colors">LV</button>
            <span className="text-heritage-cream/20">/</span>
            <button className="px-2 py-1 text-heritage-gold font-bold border-b border-heritage-gold">EN</button>
            <span className="text-heritage-cream/20">/</span>
            <button className="px-2 py-1 text-heritage-cream/40 hover:text-heritage-gold transition-colors">RU</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;