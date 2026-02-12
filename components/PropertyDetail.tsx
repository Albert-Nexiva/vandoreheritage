import React from 'react';
import { Page } from '../App';

interface PropertyDetailProps {
    onNavigate: (page: Page) => void;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ onNavigate }) => {
  return (
    <div className="bg-background-light min-h-screen pt-20 pb-12">
        <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap gap-2 mb-8 text-sm">
                <button onClick={() => onNavigate('home')} className="text-primary/60 hover:text-accent transition-colors">Home</button>
                <span className="text-primary/40">/</span>
                <button onClick={() => onNavigate('properties')} className="text-primary/60 hover:text-accent transition-colors">Properties</button>
                <span className="text-primary/40">/</span>
                <span className="text-primary font-medium">Art Nouveau Loft</span>
            </div>

            {/* Editorial Masonry Header */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-[600px] mb-16 rounded-xl overflow-hidden relative">
                {/* Main Hero Image */}
                <div className="md:col-span-8 h-full group relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/10 z-10 transition-opacity opacity-0 group-hover:opacity-100 duration-500"></div>
                    <div className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCwTiSC3GYM4DHy9pDYOrWBafL_lT7N04rs5KNokuVR7Txix1Ew7fAzmVDNis-i3GIkkI4XTTkEqpzBq9UF9hZPuQv3kQ1waA_wMXJQYcY8BrcJJFQTB8CNcSOHdAPPjTH-JT__Zj0cwVqf4Xnphbl8m2KE3CVUbq2NNu5zUECXZ6hXnVsGZj2o3_R2MKB_JA43yD09NgKdsJ3vrxVL5x7PsZ-eN5vTOBmukxI5VzaYGfUjssK8fZ3UykVfKtQCINB1xg_Bb5Xs_T4')"}}></div>
                    <div className="absolute bottom-6 left-6 z-20">
                        <span className="bg-white/90 backdrop-blur text-primary px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm">Featured Listing</span>
                    </div>
                </div>
                {/* Detail Shots */}
                <div className="md:col-span-4 flex flex-col gap-4 h-full">
                    <div className="flex-1 overflow-hidden relative group">
                        <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_qvdeCDcKC3x7f4eVHrNQBeUf56aD-V_vAvki1CMaOJPdpKj1zkByIz_JUKxIbHON1U_ZdtKOShNCvtxU07WQGgd7oTegXs08IlGlEOlAaPiapBMKbnpYMR5ijD8vhbPG12DjPYPvUVRQx722HH4rYZUpdYQiNYx0a5Nz6O4bkH0rDJf4Y7QBuqwx5HLJP5dxuF-YGGlJE7ETx2YGNJvMbbHmyYdjU9GEhF3A_8rkc-TIPPbuNQpAe6PbCuddk8ftmtvCvULy9EI')"}}></div>
                    </div>
                    <div className="flex-1 overflow-hidden relative group">
                        <div className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC90Sm5h4FnJsmnE7IVFRT2dBQm_7YU03fpiqEfctyMK9M3Pxbcat8vLwbVnwWsRbmKeiK56h3IXYmNfUHpaZ-HsE611RM9uBai_CkfznffsvR_a5GeThc0K1cFAUSHJ_Krcl2lkYGDxHJK35hU1tn87ZxDK38qb4WyqgVhEGi7Rszvbv8XPQV3nL5PeC0MEju8rZk9izYIdiKSBwtdTRL0IgOAZVBrnE49YwmWTJ8ymuAo3AIjJwcSDbTfueVVTJxfdpBwZHAw2Do')"}}></div>
                        <div className="absolute bottom-4 right-4 bg-primary/80 backdrop-blur-sm text-white px-3 py-2 rounded flex items-center gap-2 text-xs font-medium cursor-pointer hover:bg-primary transition-colors">
                            <span className="material-symbols-outlined text-[16px]">grid_view</span>
                            View All Photos
                        </div>
                    </div>
                </div>
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
                {/* Left Column: Editorial Content */}
                <div className="lg:col-span-8 flex flex-col gap-10">
                    <div className="border-b border-heritage-gray/20 pb-8">
                        <div className="flex items-center gap-2 mb-3 text-accent font-medium uppercase tracking-widest text-xs">
                            <span className="material-symbols-outlined text-sm">location_on</span>
                            Quiet Centre, Riga
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary leading-[1.1] mb-6">
                            The Art Nouveau Loft
                        </h1>
                        <div className="flex flex-wrap gap-8 text-primary/80">
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined ultra-thin text-2xl">bed</span>
                                <span className="text-lg font-light">3 Bedrooms</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined ultra-thin text-2xl">shower</span>
                                <span className="text-lg font-light">2.5 Baths</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined ultra-thin text-2xl">square_foot</span>
                                <span className="text-lg font-light">184 m²</span>
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-lg max-w-none text-primary/80 font-light leading-relaxed">
                        <p className="drop-cap mb-6 text-xl">
                            Step inside a masterpiece of the early 20th century, reimagined for the contemporary connoisseur. Situated on one of Riga’s most prestigious streets in the Quiet Centre, this loft represents a seamless dialogue between historic grandeur and modern minimalism. The original parquet floors have been painstakingly restored to their former glory, reflecting the soft northern light that pours through the floor-to-ceiling windows.
                        </p>
                        <p className="mb-6">
                            The residence unfolds as a series of curated moments. From the custom Italian kitchen finished in matte porcelain to the private library adorned with oak paneling, every texture invites touch. The open-plan living area, with its 3.5-meter ceilings, provides an acoustic sanctuary above the city, perfect for both intimate gatherings and solitary reflection.
                        </p>
                        <h3 className="text-2xl font-normal text-primary mt-10 mb-4">Architectural Highlights</h3>
                        <p>
                            Beyond the visual, the home is equipped with a state-of-the-art climate control system hidden within the cornices, ensuring comfort without compromising the aesthetic integrity. The master suite features a freestanding soaking tub carved from a single block of stone, offering a spa-like retreat within your own home.
                        </p>
                    </div>

                    <div className="py-10 border-t border-heritage-gray/20 mt-4">
                        <h3 className="text-lg font-medium uppercase tracking-widest mb-8">Amenities & Features</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4">
                            {['24/7 Concierge', 'Wine Cellar', 'Smart Security', 'Private Parking', 'South Balcony', 'Original Fireplace'].map((amenity, i) => (
                                <div key={i} className="flex items-center gap-3 group">
                                    <span className="material-symbols-outlined ultra-thin text-primary/50 group-hover:text-accent transition-colors">check_circle</span>
                                    <span className="text-sm">{amenity}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-[400px] bg-neutral-200 rounded-lg overflow-hidden relative mb-10">
                        <div className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCBIGnBo9fT1f2SlvVNN4sb_WJs_NFwSOdA1H8C8zk-SBRQGElghmEg-mG5uNPuCtNbgMcJBciMk7SAa3eXPDH4Yt_1H5HEegS1k5bimiiQigg0tV7ZehEygv4vGQUOTqYXs2GDGh8L2O6-uYmtmHW0n1scpe43vZfIlqdKIIOJQpZVjYr9_LdDAiW-hGBvd3PazoUJyZqcP3yYW7vZen5sxqBD8eWXgcTzcM4BgnkVKdydTgt-Hr0WAv40esbpQOMB1Bdf3l5emMw')"}}></div>
                        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow-sm">
                            <p className="font-bold text-sm">Elizabetes iela</p>
                            <p className="text-xs text-gray-500">Quiet Centre, Riga</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Sticky Sidebar */}
                <div className="lg:col-span-4 relative">
                    <div className="sticky top-28 flex flex-col gap-6">
                        <div className="bg-white border border-heritage-gray/20 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex flex-col items-center text-center mb-8">
                                <div className="relative mb-4">
                                    <div className="w-24 h-24 rounded-full bg-cover bg-center border-2 border-background-light shadow-inner" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBW8vHimN0COFUPms-Cbupm25xxRYAvA-n_zpIY0YKXGzSNhokCnwzSVmd8kREtK-jS9xKnhdFXqcgOaSIlZznoWgFyl1Sd2zj3ydC7YQWQf-7t278NWgv7jH0R8lXKw7-Et2VYxzwGpb1jTs2VGajHbllx6tNwtt48r67GIeWXrIfFDDvjm6yEyvdn6QoYAnXsfUT_zIjkjLXOGjCBZXjO93GTnITzrsuaBuMVeLez1Pl4N0dabOz3QPY17WimcFv82uOlhiFXSuQ')"}}></div>
                                    <div className="absolute bottom-0 right-0 bg-accent text-white p-1 rounded-full border-2 border-white shadow-sm">
                                        <span className="material-symbols-outlined text-[14px] block">verified</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-primary">Elena Vītola</h3>
                                <p className="text-primary/50 text-sm font-medium uppercase tracking-wide mt-1">Senior Curator</p>
                                <div className="flex items-center gap-1 mt-3 text-accent text-sm">
                                    {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-outlined text-[16px] fill-current">star</span>)}
                                    <span className="text-primary/60 ml-1">(128)</span>
                                </div>
                            </div>
                            
                            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                                <input className="w-full bg-transparent border-b border-heritage-gray/30 px-0 py-3 text-sm focus:ring-0 focus:border-accent placeholder:text-primary/40 focus:outline-none transition-colors" placeholder="Full Name" type="text"/>
                                <input className="w-full bg-transparent border-b border-heritage-gray/30 px-0 py-3 text-sm focus:ring-0 focus:border-accent placeholder:text-primary/40 focus:outline-none transition-colors" placeholder="Email Address" type="email"/>
                                <input className="w-full bg-transparent border-b border-heritage-gray/30 px-0 py-3 text-sm focus:ring-0 focus:border-accent placeholder:text-primary/40 focus:outline-none transition-colors" placeholder="Phone Number" type="tel"/>
                                <button className="mt-4 w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 group">
                                    Book a Viewing
                                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  );
};

export default PropertyDetail;