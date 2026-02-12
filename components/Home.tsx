import React from 'react';
import Hero from './Hero';
import Services from './Services';
import CuratedCarousel from './CuratedCarousel';
import Authority from './Authority';
import { Page } from '../App';

interface HomeProps {
    onNavigate: (page: Page, id?: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <section className="h-screen overflow-hidden">
        <Hero onNavigate={onNavigate} />
      </section>
      <section className="min-h-screen flex items-center justify-center bg-background-light py-20">
        <CuratedCarousel onNavigate={onNavigate} />
      </section>
      <section className="min-h-screen flex items-center bg-heritage-cream">
        <Services />
      </section>
      <section className="min-h-screen flex items-center bg-heritage-cream">
        <Authority />
      </section>
    </>
  );
};

export default Home;