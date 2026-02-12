import React from 'react';

const JournalPage: React.FC = () => {
  return (
    <div className="font-sans text-heritage-burgundy bg-white">
      <main>
        {/* Featured Post Section */}
        <section className="snap-start snap-always min-h-screen flex items-center justify-center container mx-auto px-6 py-20 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end w-full">
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="mb-6 flex items-center space-x-4">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-heritage-burgundy/60">Featured Analysis</span>
                <div className="h-px w-12 bg-heritage-burgundy/20"></div>
                <span className="text-xs uppercase tracking-widest font-medium">March 2026</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-heritage-burgundy mb-8 leading-[0.9]">
                Market <br/> <span className="italic font-light">Review</span> 2026
              </h1>
              <p className="max-w-xl text-lg lg:text-xl text-heritage-burgundy/80 leading-relaxed font-light mb-8">
                An in-depth exploration of the shifting landscape in heritage preservation and luxury real estate trends for the coming decade.
              </p>
              <a className="inline-flex items-center space-x-4 group cursor-pointer" href="#">
                <span className="text-sm uppercase tracking-widest font-bold group-hover:pr-2 transition-all">Read the Review</span>
                <svg className="group-hover:translate-x-2 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                  <line x1="5" x2="19" y1="12" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="rounded-xl overflow-hidden shadow-2xl shadow-heritage-burgundy/10">
                <img alt="Featured Article Image" className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3OcFGYnHOa0qknr56PuOr9i45nWtUwpuDxp7Fl0ekn7e_DYV-AeH_iYLxQI0qcEeBYvOwuwrYaQ6SwMr9T-qj414d-W7rBydR0QiPITeGuR590N7GvIsZO67HmrV2tKCSRbHNu8HMWO2d2J-bfdRNFCKDbhTa_g_37Dfcd1EseFa9gECoj_gqSdGxQZDdvgJdduvuCiPpIiwk6mgVxveTK41TXSJ-psRe1dOj5SKZAUNpJVt9F0d9hredqPe53ZQ21ZUwp7903Vg"/>
              </div>
            </div>
          </div>
        </section>

        {/* Article Grid Section */}
        <section className="snap-start snap-always min-h-screen flex flex-col justify-center container mx-auto px-6 py-20">
          <div className="w-full h-px bg-heritage-burgundy/10 mb-12"></div>
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-serif text-heritage-burgundy">Latest Stories</h2>
            <div className="hidden md:flex space-x-4">
              <button className="p-2 rounded-full border border-heritage-burgundy/10 hover:bg-heritage-burgundy/5 transition-colors">
                <svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M15 19l-7-7 7-7"></path></svg>
              </button>
              <button className="p-2 rounded-full border border-heritage-burgundy/10 hover:bg-heritage-burgundy/5 transition-colors">
                <svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {/* Article 1 */}
            <article className="group hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-[4/5] rounded-lg overflow-hidden mb-6 bg-heritage-burgundy/5">
                <img alt="Timeless Items" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjP2qh5_UUOtrsrB0HEATC5iwwD_fLeHJ0Hft6pP42fUjwWeg03cpNWz6ZfLDFLP-9GRz-vProrQC1sSGuSlQ-e3T4KB25oC7Q2KM82D-KSJHfXVRDBXGVN36KbsrWfOxFaW6B3buJVkbYJs32DHLcJD4uJ1vOih1VXqbmXveLfbALvuCmQO2vu5Ca1IMhtPK1XrTw-3UTRE_kuTSWQaWxoeK5BDQGWGHnqn2o91KhOeLHYHvctemaGA6LPRXa5IDOcXwJ87tHT70"/>
              </div>
              <div className="flex items-center space-x-3 mb-3 text-[10px] uppercase tracking-widest font-bold text-heritage-burgundy/50">
                <span>Lifestyle</span>
                <span className="w-1 h-1 rounded-full bg-heritage-burgundy/20"></span>
                <span>4 min read</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-heritage-burgundy mb-3 leading-tight group-hover:text-heritage-burgundy/70 transition-colors">
                Timeless Items: The 2026 Collection
              </h3>
              <p className="text-sm text-heritage-burgundy/70 font-light leading-relaxed mb-4 line-clamp-2">
                A curation of objects that bridge the gap between historical craftsmanship and contemporary utility.
              </p>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">Read Story</div>
            </article>
            {/* Article 2 */}
            <article className="group hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-[4/5] rounded-lg overflow-hidden mb-6 bg-heritage-burgundy/5">
                <img alt="Heritage Story" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9w61qkixE68FEFRL9F-z8JCXHtXkv5PXp0JBvC2if_RFVbMr1KaMcUwaRqO0hLRIx04F1wI00OTljR_Zxsa2IHmlL-0-9gbZ_kscTHkyqf2ASZKufBILmPy_Vkn5dtu43da8qWWsWiE1Vwr9969gHoupei3zdbeB4tEtFDf_9FLpmx229pR9aJnnS8CmR09JY31jee95q_UWNQh2CvJCu_PhhGnnZMEWJ-qInt8MNsMxdnc7u_XHXw4k7Mk2DwEBIR5N7QAXGjJE"/>
              </div>
              <div className="flex items-center space-x-3 mb-3 text-[10px] uppercase tracking-widest font-bold text-heritage-burgundy/50">
                <span>Heritage</span>
                <span className="w-1 h-1 rounded-full bg-heritage-burgundy/20"></span>
                <span>12 min read</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-heritage-burgundy mb-3 leading-tight group-hover:text-heritage-burgundy/70 transition-colors">
                Heritage Story: The Alvord Estate
              </h3>
              <p className="text-sm text-heritage-burgundy/70 font-light leading-relaxed mb-4 line-clamp-2">
                Exploring the meticulous restoration of one of Surrey's most iconic historical landmarks.
              </p>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">Read Story</div>
            </article>
            {/* Article 3 */}
            <article className="group hover:-translate-y-1 transition-transform duration-300">
              <div className="aspect-[4/5] rounded-lg overflow-hidden mb-6 bg-heritage-burgundy/5">
                <img alt="Architectural Spotlight" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC4WtFjTxv7ojIa8wWhmWYX4rPXksK9YjqoAiAkIkSmvSrCq0uivGPWRkRTLSWQZl-ui6ELH8UdgfXLGGmamwogd1PYuIItNkvLmd6LOXtqOu-qNXwx9oIONK1batHHYbDyI2R_yX2Vf0j6RZzh7pW97Cr5Cl5rDdjwr596v6DgkDUAnwlVLF5XRQccGjVZUKwIICQUpWH7y3PRFgKLeJv3DRlW3aQTWzZrN1yPbGvw-B85FU8B64XW5HAstZUKQ76Ugv9P-h76yQ"/>
              </div>
              <div className="flex items-center space-x-3 mb-3 text-[10px] uppercase tracking-widest font-bold text-heritage-burgundy/50">
                <span>Architecture</span>
                <span className="w-1 h-1 rounded-full bg-heritage-burgundy/20"></span>
                <span>8 min read</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-heritage-burgundy mb-3 leading-tight group-hover:text-heritage-burgundy/70 transition-colors">
                Glass & Stone: Material Narratives
              </h3>
              <p className="text-sm text-heritage-burgundy/70 font-light leading-relaxed mb-4 line-clamp-2">
                How modern architects are utilizing raw natural elements to redefine the sense of 'home'.
              </p>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 transition-opacity">Read Story</div>
            </article>
          </div>
        </section>

        {/* Newsletter / CTA / Secondary Grid Combined to fit screen? No, split them. */}
        <section className="snap-start snap-always min-h-screen flex items-center justify-center container mx-auto px-6 py-20">
          <div className="w-full">
            <div className="mb-24 py-20 px-6 bg-heritage-burgundy text-heritage-cream rounded-xl overflow-hidden relative">
              <div className="relative z-10 max-w-2xl mx-auto text-center">
                <h2 className="text-4xl font-serif mb-6">Join the Heritage Circle</h2>
                <p className="font-light opacity-80 mb-10 text-lg">Receive our weekly curated digest of international architecture, design, and exclusive market insights.</p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={e => e.preventDefault()}>
                  <input className="flex-grow bg-white/10 border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:ring-1 focus:ring-white/50 border-none outline-none" placeholder="Your email address" type="email"/>
                  <button className="bg-heritage-cream text-heritage-burgundy px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors">Subscribe</button>
                </form>
              </div>
              {/* Subtle abstract background pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Secondary Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div className="flex flex-col justify-center">
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-heritage-burgundy/40 mb-4 italic font-serif">Deep Dive</span>
                <h3 className="text-5xl font-serif mb-8 text-heritage-burgundy leading-tight">Preserving the <br/>Invisible Craft</h3>
                <p className="text-lg font-light text-heritage-burgundy/70 mb-10 leading-relaxed max-w-md">
                  Our latest monograph explores the artisans keeping centuries-old woodworking techniques alive in the digital age.
                </p>
                <a className="text-xs uppercase tracking-widest font-bold border-b-2 border-heritage-burgundy w-fit pb-1 hover:opacity-70 transition-opacity" href="#">Explore Monograph</a>
              </div>
              <div>
                <img alt="Craftsmanship" className="w-full aspect-[16/10] object-cover rounded-xl shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaqs7y-GKPaYcxiR0-8bayEpWD4AOnaf-SallARLutESD0-ggWOTL605zbKa4ClMh1zONr0Ax7T365ltO8JoPqYlT6a_VbvXWsOtoyu7HyRiG0nECBDN0IfqyUQ4kxker-wmVlWbPRwgMF_LR_LYJmRsmJGVyjO5CN1PdtkUNDAIPMY8jVOA5pFHZJm5vu2DBoAMi7XLXgiQJ6MysQqCU26lhySD3tG5wvEExbc7jauz2PpJjL6chcuUHfGyHWDsSF5yx1sRLbzq8"/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default JournalPage;