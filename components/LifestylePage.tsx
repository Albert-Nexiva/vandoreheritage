import React from 'react';

const LifestylePage: React.FC = () => {
  return (
    <div className="font-inter text-heritage-burgundy bg-[#F5F0EB]">
      
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-heritage-burgundy/5 z-50">
        <div className="h-full bg-[#cf1726] w-1/3"></div>
      </div>

      {/* Editorial Header */}
      <section className="snap-start snap-always min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-8 py-20 text-center">
        <span className="text-xs uppercase tracking-[0.4em] text-[#C5A059] mb-4 block">The Lifestyle Curation</span>
        <h1 className="text-6xl md:text-8xl font-serif italic mb-8">Heritage in Motion</h1>
        <p className="max-w-2xl mx-auto text-lg leading-relaxed text-heritage-burgundy/70 font-light">
          An editorial journey through the intersection of artisanal architecture and high-performance living. Curating the moments that define the Vandore standard.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="snap-start snap-always min-h-screen flex items-center max-w-7xl mx-auto px-8 py-20">
        <div className="w-full columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {/* Item 1: Porsches & Coffee */}
          <div className="break-inside-avoid group cursor-pointer mb-8">
            <div className="overflow-hidden rounded-lg bg-heritage-burgundy/5 aspect-[4/5] mb-4 relative">
              <img alt="Vintage Porsche 911" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkwpJIW-q5bv-sq7AIybMjE3rtaVTynJ1vu68jdorvswupZoP9kigunNV8mMOLbnotNHEhg5p2McXqTE1Dwh3NfipXkiya4kskbSCLU2BSpbRgOvdF1FQgRfUkRaz8WBEKz_gSz5NfHg6TJcbZxMSkYsGK909vDI34QuQqkY6pCN1Cft-G7mgqFuhQnkWsZPQtE_5ZqX34NeO8yDg1s22K6WjvPLHr_Yl37ClYJBFPDF6ayvuZb7krVbtIr4Fx4PMQEwt2btK5RWU"/>
              <div className="absolute inset-0 bg-heritage-burgundy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="px-6 py-3 border border-white text-white text-xs uppercase tracking-widest backdrop-blur-sm">View Series</span>
              </div>
            </div>
            <h3 className="font-serif text-2xl mb-1">Porsches & Coffee</h3>
            <p className="text-xs uppercase tracking-widest text-[#C5A059]">Automotive Heritage • 08:00 AM</p>
          </div>
          
          {/* Item 2: Architectural Detail */}
          <div className="break-inside-avoid group cursor-pointer pt-12 mb-8">
            <div className="overflow-hidden rounded-lg bg-heritage-burgundy/5 aspect-[4/5] mb-4 relative">
              <img alt="Architectural details" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiz_UKPgat1EKtbg_oQ9ct3Qp875snXmjYjm13zUOGcSNGdVaCH78XEBOwmcsqVPAKLbIDVmYKVZAperIDn4wJIfUdgjZK7BxOVEsCNSQPnEOCEIHKM1I0SRap65CpdgH0AGT-7nXDZtrTaG1D56Zt9i2L9VnE1VQC2IuLqRx22wJu6UUPAIEqhWXbAntUzS5CdmIUEN2xmjaxoxLwT5zwK0KYOC2Iw0CLodFoFkYzE1tD_wYR0wJqyrbgio2D0Ij1BuZabKvXvgc"/>
            </div>
            <h3 className="font-serif text-2xl mb-1">The Stone Carver</h3>
            <p className="text-xs uppercase tracking-widest text-[#C5A059]">Craftsmanship • Tuscany</p>
          </div>

          {/* Item 3: Interior */}
          <div className="break-inside-avoid group cursor-pointer mb-8">
            <div className="overflow-hidden rounded-lg bg-heritage-burgundy/5 aspect-[4/5] mb-4 relative">
              <img alt="Minimalist Living" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1IZFBMc0q27WRQDFPD4QVRnolpQHeoHdSNC-b0GBiPqlu8ilBRKqrpfMxUuDGBUFS3kJ7eBgmdTXoUGj3LZKnRby4JUkOWzF-kaOFTa5CN2ye9jm0ewATiutHtxRhfgtEcnBnWP8O8dOce4GVUIPIkdHU-d00u9VhNYSaPH-OiYqJ0yUrJhYCX_PQt1KPqnfomClTMmNWRtH7ctqbudref66UI3QCZs6MZVyT3mIy6A8DBVExHTtibFdFECqjI3X9jHXtdPssLMI"/>
            </div>
            <h3 className="font-serif text-2xl mb-1">Minimalist Sanctuary</h3>
            <p className="text-xs uppercase tracking-widest text-[#C5A059]">Interior Design • Oslo</p>
          </div>

          {/* Item 4: Car Detail */}
          <div className="break-inside-avoid group cursor-pointer mb-8">
            <div className="overflow-hidden rounded-lg bg-heritage-burgundy/5 aspect-[4/5] mb-4 relative">
              <img alt="Sportscar detail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMUQKNqHMfk_QTzZsTlI3yBPGuNKG6n3EQa5MfjDTjpzKVF6yG4DHpzJ1BvlrlnG9yVtqs4cjP1Z2r8qAib1We0HITfZNNOGv2AbL9tI4rT_ti037wf4WmfighxrHPqZ8gNR-6DkmkKZxy0lHdDNLwBX3g-UxaFdKCDRzC-fd4m240o-n1PjD0_-XKX2OtYbRVP5xcwDm4c22-mV-0Dja2IdLogamr0Ok3ln3YfMc_JHxIZX3saUQcmw6KbLjkPpJz1HlHms74qiM"/>
            </div>
            <h3 className="font-serif text-2xl mb-1">Chrome & Leather</h3>
            <p className="text-xs uppercase tracking-widest text-[#C5A059]">Automotive • London</p>
          </div>

          {/* Item 5: Heritage Building */}
          <div className="break-inside-avoid group cursor-pointer pt-20 mb-8">
            <div className="overflow-hidden rounded-lg bg-heritage-burgundy/5 aspect-[4/5] mb-4 relative">
              <img alt="Manor house" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIzarazOwEBrcy-v8jAdOGgVmQiYf50-hDEmf9PmEu1BZ8B0UTAPRNqXnpZ9d-KDlf_meNxyOYx6RzpYksdn8fzvarOjGEB1JtneKwshub1UsHwczjj7bbCiqN7qCQ5E10oteNPlbDd0lBIMcZZyd_x3HYXjd_6UCdPXt1rL6_zrxjfsJvGcYSJQPovfrDFAezCFxHWPnan1bcmulLidqXGNK1l5yXfa8s_l0UN9hBBcM6ZKCLJnhALmShQGYicP70-t4_Tcv-wAg"/>
            </div>
            <h3 className="font-serif text-2xl mb-1">The Estate Series</h3>
            <p className="text-xs uppercase tracking-widest text-[#C5A059]">Real Estate • Cotswolds</p>
          </div>

          {/* Item 6: Dining */}
          <div className="break-inside-avoid group cursor-pointer mb-8">
            <div className="overflow-hidden rounded-lg bg-heritage-burgundy/5 aspect-[4/5] mb-4 relative">
              <img alt="Fine dining table" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBen2Ecw85e_Cg4444_VS3LhF8Cz3c7Wj7GVzN-zBa8hsFsBM8ix6EoCqsIMUGJSFERfl21yNdlsi5R53Z8ddKtepbcOUpH9vSECCSmOm8YmMZzK1t7LscKJ9JnrK2pJ-WcsNRIgUVlgMAWZNRqZf4g5UZCt4N2LxfRkQI30fAu4Ff95HyYu_WF6jEdHkpfn1ZF5WE04__8na_T_xnMKo9XpG6NxOQVVM_YQwDGRrRHarXM9husOQa6oG7es9I6OdUteWp4VXpTOs"/>
            </div>
            <h3 className="font-serif text-2xl mb-1">Art of the Table</h3>
            <p className="text-xs uppercase tracking-widest text-[#C5A059]">Lifestyle • Paris</p>
          </div>
        </div>
      </section>

      {/* Featured Story Block */}
      <section className="snap-start snap-always min-h-screen flex items-center justify-center bg-white">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto px-8 py-20">
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-24 h-24 border-l-2 border-t-2 border-[#C5A059]/30"></div>
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img alt="Classic car in mountain pass" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiDsp0fHPPEpkiquBZFCXaxqT7Bmb2USRbPtOSSeb_CDt8ISkaM2bPmBKwT4Ht5pxznkvYGQoJUcVJ_MASkMEunwzuCZKN-U_ND_38ipS7WuIZtvKJqDk3oq_HgyTIyfFALjdG9KJWvbD4AexLFuK8h0rT-LtnHLgcj0nk8453HFJ8qdD16rU_YVWfUvecs9qMdcGqYRGr1N5a2v5YvXI3yQ58ON5vG7y5-c3QBTyxv-NRRaxvvYM59zT5Z1PAvuA4Irwi3t_UdIA"/>
            </div>
          </div>
          <div className="space-y-8">
            <span className="text-xs uppercase tracking-[0.4em] text-[#C5A059]">Editorial Feature</span>
            <h2 className="text-5xl font-serif italic leading-tight">The Alps Descent:<br/>A Study in Speed & Grace</h2>
            <p className="text-lg text-heritage-burgundy/80 font-light leading-relaxed">
              This autumn, we took the 1965 Heritage collection to the winding passes of the Swiss Alps. More than just a drive, it was a meditation on mechanical purity and the silence of high altitudes.
            </p>
            <div className="flex items-center space-x-6">
              <button className="bg-[#cf1726] text-white px-10 py-4 text-xs uppercase tracking-widest hover:bg-heritage-burgundy transition-colors duration-300">
                Read the Journal
              </button>
              <span className="h-[1px] w-12 bg-[#C5A059]"></span>
              <span className="text-xs uppercase tracking-widest font-semibold italic">Issue 04 / 2024</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifestylePage;