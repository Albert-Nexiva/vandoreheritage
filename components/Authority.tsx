import React from 'react';

const Authority: React.FC = () => {
  return (
    <section className="bg-heritage-cream w-full py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-end">
          {/* Left: Narrative */}
          <div className="lg:col-span-5">
            <span className="block w-12 h-[1px] bg-primary/40 mb-8"></span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 text-primary">
              Heritage in <br/> <span className="italic text-primary/80">Every Detail</span>
            </h2>
            <p className="text-primary/70 text-lg leading-relaxed font-light mb-8 max-w-md">
              For over a decade, Vandore Heritage has defined the standard for premium real estate in Latvia. We don't just sell properties; we curate lifestyles for the discerning few.
            </p>
            <button className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-medium border-b border-primary pb-1 hover:text-primary/70 transition-colors">
              Read Our Story
            </button>
          </div>
          
          {/* Right: Numbers Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-primary/10 pt-12 lg:pt-0 lg:border-t-0">
            {/* Stat 1 */}
            <div className="flex flex-col group">
              <span className="font-serif text-6xl md:text-7xl text-primary mb-2 group-hover:translate-y-[-5px] transition-transform duration-500">
                150<span className="text-4xl align-top text-primary/60">+</span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/50">Transactions Closed</span>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col group">
              <span className="font-serif text-6xl md:text-7xl text-primary mb-2 group-hover:translate-y-[-5px] transition-transform duration-500">
                €45<span className="text-4xl align-top text-primary/60">M</span>
              </span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/50">Volume Sold</span>
            </div>
            {/* Stat 3 */}
            <div className="flex flex-col group">
              <span className="font-serif text-6xl md:text-7xl text-primary mb-2 group-hover:translate-y-[-5px] transition-transform duration-500">
                12
              </span>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary/50">Years Authority</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;