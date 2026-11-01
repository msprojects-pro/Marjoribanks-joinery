/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Gallery, GalleryItem } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { LightboxModal } from './components/LightboxModal';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Bespoke Joinery');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setQuoteModalOpen(true);
  };

  const handleSelectServiceFromCard = (serviceName: string) => {
    // Smoothly scroll down to contact form or open modal
    setSelectedService(serviceName);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setQuoteModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-[#1C1B22] flex flex-col font-sans selection:bg-[#A437B8]/25 selection:text-[#E8C477]">
      {/* Top Navigation */}
      <Header onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* Section 1: Services */}
        <Services onSelectService={handleSelectServiceFromCard} />

        {/* Section 2: About */}
        <About onOpenQuote={() => handleOpenQuote()} />

        {/* Section 3: Project Gallery */}
        <Gallery
          onOpenLightbox={(item) => setActiveLightboxItem(item)}
          onOpenQuote={(service) => handleOpenQuote(service)}
        />

        {/* Section 4: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 5: Contact */}
        <Contact initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultService={selectedService}
      />

      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
        onEnquire={(service) => handleOpenQuote(service)}
      />
    </div>
  );
}
