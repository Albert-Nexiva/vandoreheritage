import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Page } from '../App';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Properties', action: () => onNavigate('properties') },
    { name: 'Lifestyle', action: () => onNavigate('lifestyle') },
    { name: 'Services', action: () => onNavigate('services') },
    { name: 'Journal', action: () => onNavigate('journal') },
  ];

  const isTransparent = !scrolled && currentPage !== 'properties' && currentPage !== 'detail' && currentPage !== 'journal';

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 lg:px-12 py-6 
      ${!isTransparent ? 'bg-heritage-burgundy/90 backdrop-blur-md py-4 shadow-lg text-white' : 'bg-transparent text-heritage-primary'}
      ${currentPage === 'home' && !scrolled ? 'text-white' : ''}
      ${currentPage === 'lifestyle' && !scrolled ? 'text-heritage-burgundy' : ''}
      ${currentPage === 'services' && !scrolled ? 'text-heritage-burgundy' : ''}
      `}
    >
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="z-50">
          <button onClick={() => onNavigate('home')} className="font-serif text-2xl tracking-[0.15em] uppercase hover:text-heritage-gold transition-colors text-left font-bold">
            Vandore Heritage
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-[0.15em] uppercase">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={link.action} 
              className="hover:text-heritage-gold transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-heritage-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Inquire Button */}
        <div className="hidden md:block">
          <button 
            className={`border px-8 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300
              ${!isTransparent || currentPage === 'home' ? 'border-white/30 hover:bg-white hover:text-heritage-burgundy' : 'border-heritage-burgundy/30 hover:bg-heritage-burgundy hover:text-white'}
            `}
          >
            Inquire
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-heritage-burgundy flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out md:hidden ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } text-white`}
        >
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => {
                link.action();
                setMobileMenuOpen(false);
              }}
              className="text-2xl font-serif text-white hover:text-heritage-gold transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button 
            className="mt-4 border border-white/30 px-10 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-heritage-burgundy"
            onClick={() => setMobileMenuOpen(false)}
          >
            Inquire
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;