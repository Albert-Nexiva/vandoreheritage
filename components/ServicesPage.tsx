import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div className="font-newsreader text-heritage-burgundy selection:bg-[#f9bc06]/30">
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-6 text-center max-w-4xl mx-auto">
        <div>
          <h1 className="text-5xl md:text-7xl font-medium text-heritage-burgundy mb-8 leading-tight">
            Curating a Life <br/> <span className="italic font-light">Well-Lived</span>
          </h1>
          <div className="h-px w-24 mx-auto mb-8 bg-gradient-to-r from-transparent via-[#f9bc06] to-transparent"></div>
          <p className="text-lg md:text-xl text-heritage-burgundy/80 leading-relaxed font-light font-sans">
            Vandore Heritage represents the pinnacle of lifestyle curation, offering bespoke real estate solutions and exclusive management for the world's most discerning collectors.
          </p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6">
        {/* Service 1: Advisory */}
        <section className="min-h-screen flex items-center grid md:grid-cols-2 gap-16 py-12 md:py-0">
          <div className="order-2 md:order-1">
            <div className="flex items-center space-x-4 mb-6">
              <span className="material-icons-outlined text-[#f9bc06] text-3xl">account_balance</span>
              <h2 className="text-3xl font-medium uppercase tracking-widest text-heritage-burgundy font-sans">Advisory</h2>
            </div>
            <p className="drop-cap text-lg leading-relaxed text-heritage-burgundy/80 mb-8 italic">
              Our strategic advisory services transcend standard market analysis. We provide an unparalleled perspective on the intersection of heritage value and investment potential, ensuring every acquisition serves as a legacy asset for generations to come.
            </p>
            <button className="border border-[#f9bc06] text-heritage-burgundy px-8 py-3 rounded-full uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#f9bc06] hover:text-white transition-all font-sans">
              Explore Strategy
            </button>
          </div>
          <div className="order-1 md:order-2">
            <div className="shadow-2xl rounded-t-[500px] overflow-hidden aspect-[4/5] max-h-[70vh] w-auto mx-auto">
              <img alt="Stately property exterior" className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2ABFSy-BFHOC7ewk_Zg40NO1xPbPtXM6PjB-NGUiU3e3alpXEHSVdPuD7Wixpo9FI3jFfUD0jIvx-YJXnkCGO2U2jVoRyqCMx2ATx2DjyVpD3EoCY1vV8yLXNkPNH2EhqIPMsDrkRFYA_vrcD1W8c1rCbapNqGioupsYgNWHVE5TzU3WeRTZ423ZXshzuCcSueSRG6vgW2TL8VNVG4vzKcMVTFGTzOkqmtXeb6vvHxleJD5lV3JdOKGi07lT9cvYqjv4P-O8pZM8"/>
            </div>
          </div>
        </section>

        {/* Service 2: Interiors */}
        <section className="min-h-screen flex items-center grid md:grid-cols-2 gap-16 py-12 md:py-0">
          <div className="order-1">
            <div className="shadow-2xl rounded-t-[500px] overflow-hidden aspect-[4/5] max-h-[70vh] w-auto mx-auto">
              <img alt="Elegant interior design" className="w-full h-full object-cover grayscale-[10%] hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4WtULNjdZxcl1Q2cweAPTGjh8I9P632HNQ8tg2loeVWENP6zpeotWR7M8UTNFsYeKvk6UJd13Lfdt3Pigw9Ztc1lXvujPVGOCUKFxV4wRwpy4hj9S8sRvwKbsulbRslLrVD7YRuAltT1MOBIjFU1VKoHju9tUZOTgc79qN3D5hX0f4PfNtNiJLCJtWu7M9LXl6pIfvRzXC8TJY5tbWO8LD1evWbRpO8GOBQPow8KjQYE-SQO-3vpkrarL-maHL0q62ULGTN8Ia6s"/>
            </div>
          </div>
          <div className="order-2">
            <div className="flex items-center space-x-4 mb-6">
              <span className="material-icons-outlined text-[#f9bc06] text-3xl">architecture</span>
              <h2 className="text-3xl font-medium uppercase tracking-widest text-heritage-burgundy font-sans">Interiors</h2>
            </div>
            <p className="drop-cap text-lg leading-relaxed text-heritage-burgundy/80 mb-8 italic">
              The harmony of space and spirit is our primary focus. We curate environments that speak to the soul, blending timeless craftsmanship with contemporary ease. Our interior studio creates living canvases that reflect the unique narratives of our residents.
            </p>
            <button className="border border-[#f9bc06] text-heritage-burgundy px-8 py-3 rounded-full uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#f9bc06] hover:text-white transition-all font-sans">
              View Studio
            </button>
          </div>
        </section>

        {/* Service 3: Investment */}
        <section className="min-h-screen flex items-center grid md:grid-cols-2 gap-16 py-12 md:py-0">
          <div className="order-2 md:order-1">
            <div className="flex items-center space-x-4 mb-6">
              <span className="material-icons-outlined text-[#f9bc06] text-3xl">insights</span>
              <h2 className="text-3xl font-medium uppercase tracking-widest text-heritage-burgundy font-sans">Investment</h2>
            </div>
            <p className="drop-cap text-lg leading-relaxed text-heritage-burgundy/80 mb-8 italic">
              Real estate is the ultimate vehicle for wealth preservation. We identify off-market opportunities in global heritage markets, providing our partners with exclusive access to high-yield assets that appreciate in both value and cultural significance.
            </p>
            <button className="border border-[#f9bc06] text-heritage-burgundy px-8 py-3 rounded-full uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#f9bc06] hover:text-white transition-all font-sans">
              Analyze Portfolios
            </button>
          </div>
          <div className="order-1 md:order-2">
            <div className="shadow-2xl rounded-t-[500px] overflow-hidden aspect-[4/5] max-h-[70vh] w-auto mx-auto">
              <img alt="Modern architecture detail" className="w-full h-full object-cover grayscale-[30%] hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG1OQfrMbmXA4DFIEntmByKyYAvjH0gnaRxeA4jdYYNKOyxLT-TUHd0ST8GqpAoUiS7QqA5GzNTxmeAKIK1UctKIpEhmcQOnh0bUDsoddrG7Sjij9fF2yubhHmlKrDeY1sJXpcXqLBQonBt-960Lpe3__knrIZ1GpuYjIHakUJEvdx-_CnU6yNbIRmypDy5iTIy5rYG5s7UjBz5x7P7JP_pUHpssCrwerkyoHlcNtkD7cK-1xi7B6GyfMaMWX2ukN_v_hEZDhJxkE"/>
            </div>
          </div>
        </section>

        {/* Service 4: Concierge */}
        <section className="min-h-screen flex items-center grid md:grid-cols-2 gap-16 py-12 md:py-0">
          <div className="order-1">
            <div className="shadow-2xl rounded-t-[500px] overflow-hidden aspect-[4/5] max-h-[70vh] w-auto mx-auto">
              <img alt="Luxury hotel lobby concierge" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgi5RIGot0RrZ8dRG_padMOFInpA9_okUVXoi5x2qSmYtqkWKwn0Y2YNnzaTyCTN4eJBVG7pi6GBY0RKosdmk1_mRKq_g09QoTbJESLQKhHGLAMURHnQhZ5nkBEtHSR0x2-3kRjft3w7uXNlj8cy4CPjsnihs-AC-Ixe5Ipjo_sR74uVkuYLv7F-etyk8DapRqMX61fmIGhLoR2_O00uTaYKhMt5nP1RcHnLBkkeu-GxTrLKI9xFMkEoZ3waJNuYvAlvMLoAWXM8g"/>
            </div>
          </div>
          <div className="order-2">
            <div className="flex items-center space-x-4 mb-6">
              <span className="material-icons-outlined text-[#f9bc06] text-3xl">star_outline</span>
              <h2 className="text-3xl font-medium uppercase tracking-widest text-heritage-burgundy font-sans">Concierge</h2>
            </div>
            <p className="drop-cap text-lg leading-relaxed text-heritage-burgundy/80 mb-8 italic">
              Elegance is found in the effortless details. Our private concierge management ensures that every aspect of property ownership and elite lifestyle is handled with absolute discretion and meticulous attention to the finest points of luxury.
            </p>
            <button className="border border-[#f9bc06] text-heritage-burgundy px-8 py-3 rounded-full uppercase text-xs tracking-[0.2em] font-bold hover:bg-[#f9bc06] hover:text-white transition-all font-sans">
              Request Access
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ServicesPage;