import React from 'react';
import { Page } from '../App';

interface PropertiesProps {
    onNavigate: (page: Page, id?: string) => void;
}

const Properties: React.FC<PropertiesProps> = ({ onNavigate }) => {
  const listings = [
    {
      id: '1',
      price: '€450,000',
      type: 'Apartment',
      title: 'Art Nouveau Residence',
      location: 'Elizabeth Street, Riga Center',
      specs: ['142 m²', '3 Beds', '2 Baths'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMAyyYSuOGw00XjlFYu6M4_sa7C_LjAg-WpOX_fmZ90dU5s3Wmzw_2JzW9MMB_ss1zL2E6CESFc-2xt_X6e_SZ_mqCNNWWXifSCqGAc9qhli_2z2OiH58Qx_jYO8rxdLxF42GadYwhxwbNzmqj-T8jWgaNKv9iGW_MzDRvkHE4npKaV6JZIgnFHUUNItupcLF-DSnvas1RIW1gck5rg55bN8_W2KdDlNxbFG7EWKoyXTVDj-MgaDd3f_j5vB5v2Wwf7eh2BG7Odcg',
      badge: true
    },
    {
      id: '2',
      price: '€1,200,000',
      type: 'Villa',
      title: 'Seaside Pine Villa',
      location: 'Dzintari Avenue, Jūrmala',
      specs: ['350 m²', '5 Beds', 'Pool'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1pGhVogG14IuUjM5QHLKqUu-sYz1UlnDQ0_DeYE9V40ZuCb9T6-LB59U9rmkpgMCFgNrtcTiB2SJcjf4Ad86pKMoG7GdzcWOu8mocoJvBGCtSuM4ZrPNmWAOvRbfNPdF_KmYc7PK_JsDbtOBGIuTBMVwczoNVfS_ue_jlM1mlHmkwFzmoNVpQME-5Z1l29ue2Zw4t2J2lu2_EJ_-EnotUJ69gwjBdUv1KMGK79f59Hh2a79WuUc1CVuQErkqDQ2CXveC-o_Wm7Zg',
      badge: true
    },
    {
      id: '3',
      price: '€850,000',
      type: 'Estate',
      title: 'Historic Cēsis Manor',
      location: 'Lenču Street, Cēsis',
      specs: ['520 m²', '8 Beds', '3 Ha Land'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCiBL4JNBoRK-fRaeOnSObqP3hYi9DQXxNUqYGptA3CjhjzMMwDdY8xg3_oeuyzy4GsUCfvuY0tYLj5sPLwgF3FCylBfrq7i78WrWOoXci-BgqcvnakX2AMN3UwQB8rc1Rz-Sf1OUjzH78-5VzWzJZmqY1-ZPZp6dgBRz920J9sBA1aEEVit8ykvMAVO7ES0ZKJvaDJNadqrkKYEFXKj09YIPdWrA4cQS3by2c_ozv9BeFChIi9f-PWkSUEnYfQm5VdjlBfBU_SJts',
      badge: false
    },
    {
      id: '4',
      price: '€2,100,000',
      type: 'Penthouse',
      title: 'Quiet Center Penthouse',
      location: 'Alberta Street, Riga Center',
      specs: ['280 m²', '3 Beds', 'Rooftop'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBx3HJQlVwVMoGGOZtWD9Iux5WVC62nb-7Bt9pa_gAzFoOGsJw7djaEJ4_OKFF5QsfNuF4UQ7_7GoXXVsfZNv8QzLUu33O4wXAQ_eSyW2KVmeROXVY2viIFGx_upUdekUSqWjWrXOWsZIaxrS6gdn4tZ6jM-MqAqbtxzJpunzEDQJfd01E5QYhhxGiytcvdAq0JIP_TjStwPFSANoiattSPdL16eYG-Cjg4mJTLDBEiZXmjOB8m7DKxbcKHvuNQpP0y0i4uaqCw99Y',
      badge: true
    },
    {
      id: '5',
      price: '€325,000',
      type: 'Loft',
      title: 'Industrial River Loft',
      location: 'Ķīpsala, Riga',
      specs: ['98 m²', '1 Bed', 'River View'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArAmR99QXaecXmYzMBcD_98We91jyQeNk-JeXIgrWJLLnMpyNTWb4yjnjg2XdPqXVIO4ig5JyHV3PlzEv1q0bP1ETOt8CwIvGdJ2Hx_txJnpVyxbLBhyhZnK0LL6dPfO9cEFreC2trjSNdBTxaTcOyNQ2UMFuZzt-ECq0tFHqBlPvpGz2KNzW_DHiZiEySj3uXDA5a0WFE3xcLIyMfD7WcMQpS4O_a-aW9YIVsdEKOBRm16EqpLK8VTqlnbaHScHgyjYrJWLAdBSs',
      badge: false
    },
    {
      id: '6',
      price: '€980,000',
      type: 'Villa',
      title: 'Lakeview Sanctuary',
      location: 'Baltezers, Ādaži',
      specs: ['410 m²', '4 Beds', 'Boat Dock'],
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgM8MYUbMZoLxjncdv_PB-fptpJgXmvuR1hVAOpfy_vP_P8f57DbF2wfDxFS4kRQrrAyGDm11rOBMPvA0if1DwX_PsWWU08Oj5-AZU74qgsdwzipXGbh5Yd3Bzxd6KpnpFI5qgmCHk9ZvIcuaF6_8SjbPD6QNJKG8jvtZAZJB-q7KH7-gmwOzl19VSU7v_Nyrd9WsX4LYOzDiEz6QOagbVZ4AS-85dtKCm59QZbI9uAAjileyIu9tE3QoLU5oyS5Oo6zJZtrmX2vM',
      badge: true
    }
  ];

  return (
    <div className="bg-background-light min-h-screen pt-20">
      
      {/* Sticky Filter Bar */}
      <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-6 md:px-12 transition-all duration-300">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-primary/60 text-sm uppercase tracking-widest">
            <span className="material-icons-outlined text-base">tune</span>
            <span>Filter By:</span>
          </div>
          <div className="flex flex-1 items-center gap-8 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {/* Location Dropdown */}
            <div className="relative group cursor-pointer shrink-0">
              <button className="flex items-center gap-2 pb-1 border-b border-gray-300 group-hover:border-primary transition-colors w-40 justify-between">
                <span className="text-primary font-medium">Location</span>
                <span className="material-icons-outlined text-sm text-primary/50 group-hover:text-primary transition-colors">expand_more</span>
              </button>
            </div>
            {/* Price Range Dropdown */}
            <div className="relative group cursor-pointer shrink-0">
              <button className="flex items-center gap-2 pb-1 border-b border-gray-300 group-hover:border-primary transition-colors w-40 justify-between">
                <span className="text-primary font-medium">Price Range</span>
                <span className="material-icons-outlined text-sm text-primary/50 group-hover:text-primary transition-colors">expand_more</span>
              </button>
            </div>
            {/* Type Dropdown */}
            <div className="relative group cursor-pointer shrink-0">
              <button className="flex items-center gap-2 pb-1 border-b border-gray-300 group-hover:border-primary transition-colors w-40 justify-between">
                <span className="text-primary font-medium">Property Type</span>
                <span className="material-icons-outlined text-sm text-primary/50 group-hover:text-primary transition-colors">expand_more</span>
              </button>
            </div>
          </div>
          <div className="hidden md:flex items-center border-b border-gray-300 focus-within:border-primary transition-colors w-64">
            <input className="w-full bg-transparent border-none p-0 pb-1 text-primary focus:ring-0 placeholder-gray-400 text-sm focus:outline-none" placeholder="Search by keyword..." type="text"/>
            <span className="material-icons-outlined text-gray-400 pb-1">search</span>
          </div>
        </div>
      </div>

      <main className="w-full px-6 md:px-12 py-12">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl text-primary mb-2">Curated Listings</h1>
              <p className="text-heritage-gray font-light tracking-wide">32 exclusive properties found in Latvia</p>
            </div>
            <div className="hidden md:flex gap-2">
              <button className="p-2 hover:bg-heritage-cream transition-colors rounded-lg text-primary"><span className="material-icons-outlined">grid_view</span></button>
              <button className="p-2 hover:bg-heritage-cream transition-colors rounded-lg text-primary/40"><span className="material-icons-outlined">view_list</span></button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {listings.map((item) => (
              <article 
                key={item.id} 
                className="group cursor-pointer flex flex-col h-full"
                onClick={() => onNavigate('detail', item.id)}
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100 mb-6">
                  <img alt={item.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src={item.image}/>
                  {item.badge && (
                    <div className="absolute top-4 left-4 bg-heritage-cream/90 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-heritage-gold"></span> Heritage Collection
                      </span>
                    </div>
                  )}
                  <button className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md">
                    <span className="material-icons-outlined">favorite_border</span>
                  </button>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between items-baseline border-b border-primary/10 pb-4 mb-3">
                    <h3 className="font-serif text-3xl text-primary">{item.price}</h3>
                    <span className="text-xs uppercase tracking-wider text-heritage-gray">{item.type}</span>
                  </div>
                  <h2 className="text-lg font-medium text-primary">{item.title}</h2>
                  <p className="text-heritage-gray font-light text-sm">{item.location}</p>
                  <div className="flex gap-4 mt-2 text-xs text-primary/60 font-medium">
                    {item.specs.map((spec, i) => (
                        <React.Fragment key={i}>
                            {i > 0 && <span className="w-px h-3 bg-primary/20"></span>}
                            <span>{spec}</span>
                        </React.Fragment>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-center">
            <span className="text-xs text-primary/40 uppercase tracking-widest mb-4">Showing 6 of 32 properties</span>
            <button className="group relative px-8 py-3 overflow-hidden rounded bg-transparent text-primary transition-all duration-300">
              <span className="absolute inset-0 w-full h-full bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative font-medium tracking-wide border-b border-primary pb-1 group-hover:border-transparent transition-colors">Load More Listings</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Properties;