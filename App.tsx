import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Properties from './components/Properties';
import PropertyDetail from './components/PropertyDetail';
import ServicesPage from './components/ServicesPage';
import LifestylePage from './components/LifestylePage';
import JournalPage from './components/JournalPage';

export type Page = 'home' | 'properties' | 'detail' | 'services' | 'lifestyle' | 'journal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedPropertyId]);

  const navigate = (page: Page, id?: string) => {
    if (id) setSelectedPropertyId(id);
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'properties':
        return <Properties onNavigate={navigate} />;
      case 'detail':
        return <PropertyDetail onNavigate={navigate} />;
      case 'services':
        return <ServicesPage />;
      case 'lifestyle':
        return <LifestylePage />;
      case 'journal':
        return <JournalPage />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-heritage-cream text-heritage-primary font-sans">
      <Navbar onNavigate={navigate} currentPage={currentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};

export default App;