import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  image: string;
  delay?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, subtitle, image, delay }) => (
  <div className={`group cursor-pointer flex flex-col items-center ${delay || ''}`}>
    <div className="w-full aspect-[3/4] relative overflow-hidden rounded-t-[100px] md:rounded-t-[140px] mb-8">
      <div className="absolute inset-0 bg-heritage-burgundy/0 group-hover:bg-heritage-burgundy/20 transition-all duration-500 z-10"></div>
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
      />
    </div>
    <div className="text-center space-y-2">
      <h3 className="font-serif text-2xl text-heritage-burgundy group-hover:text-heritage-gold transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[10px] md:text-xs text-heritage-primary/60 font-bold tracking-[0.2em] uppercase">
        {subtitle}
      </p>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: 'Buying',
      subtitle: 'Acquisition & Search',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAds7N5bKylvVX__WyCILfnC-CGKd2P-Oa993K9LOrFNh9VYixc5dowP4JWtWAT5BV40TxAqoo7fcn4bmPVb6sf-ggNhg2QkF2lUe5cCHvXfF3nnL0zloHhp1RUFYMSkOu_I28YooMnti1GHauUTgRG9-vM6BdVNaI1EiPa4nkZSGD4KNGYkrOyCg4j1ja-65UiufbFesyRgZoaL1JJJcj8fic0OdVJr-e_jTz4AEogWoGuME3x9vvnjX7VdBh7ICoqqKXQETfF8Xs'
    },
    {
      title: 'Selling',
      subtitle: 'Valuation & Listing',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAom_DZ8kfIu2aNDSYuqXfSC6mTPhEIqxhDx6r6HL1l0MMxwy1GA4Z-Y_1YFsdZAISm5c-YqAfbx9ohqN64nPcmHGnbqcuUr2lkkxGlx8f5Wd7fM8py7-vmyDPDtdoe75Uqq6uF-VhfL6cdm5ffopJQ3RWQt61ps-GkxP1rq0D4vORY2Li6GQ5lvOr7jN36r9KzYLCvMC0wL6dIzbkOPQ1X0IEeUCwSMvNOI8qqxzLqLlIn4FDAgYKni-yN2QQZ3ymT3H8KvXrpYog'
    },
    {
      title: 'Interiors',
      subtitle: 'Design & Staging',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1nLW1e94P0KQUDKgTg2oVA8aybO0GLIY_Fg_RLDu9KLkPG5tGY3ASNuS0b0eCx-SHt9nGqTdy-EJ6XYEjSk6Zx9Cu4nk2VvAWPbHaWnZ5K-F8y0mF_Sar3Cr3Y9vAvle9TerlDdBU-wP55-YcNSU6kHJPHM1u7SYAhdo-r7mjyrmFV1iLa3DC3uK0JRICFOHExmyXO6QUdbZLhnXXEaw5jif-y1xAvJoUBpHCcfp7GoOQOBZTcaLvqq9OWGgLfPVMYUqujC6Zoac'
    },
    {
      title: 'Investment',
      subtitle: 'Portfolio Management',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIfFgDHoJrH0VIWtUEJTROntFfJTXiqzxnx4ai5SUeIFZN3x-Ejl_FTWMEIq_ylS__UqOdWZcPJk59rGOB2YfCAGihIPoud5C4nboTVj_YH_k7i3Qd1wnF1FquO8JPRkKYX6z6YofIk3W3xrjrqO89B8O80lg1Rtj875pj2zzRJRmBzxB_aC6rVfL1RyRkUzgaasrswjOm-kUVJGdoKdHnxzAZBbwaBUgfUi0htXQU4vOd1t9tJ9TxttQ0igHIyOu8kQ7vGO9gaD4'
    }
  ];

  return (
    <section className="bg-heritage-cream py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="max-w-xl space-y-4">
            <span className="text-heritage-primary/50 text-xs font-bold tracking-[0.25em] uppercase block">
              The Concierge
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-heritage-burgundy leading-tight">
              Elevated services for <br /> every stage of ownership.
            </h2>
          </div>
          
          <div className="pb-2">
            <a 
              href="#" 
              className="group flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase border-b border-heritage-primary/20 pb-1 hover:border-heritage-primary hover:text-heritage-burgundy transition-all duration-300"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
              delay={index % 2 !== 0 ? 'md:mt-12 lg:mt-0' : ''} // Stagger on medium screens only, align on large
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;