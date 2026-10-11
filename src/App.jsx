import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroIntro from './components/HeroIntro';
import DemoVideo from './components/DemoVideo';
import DemoCards from './components/DemoCards';
import PricingCalculator from './components/PricingCalculator';
import ContactForm from './components/ContactForm';
import FeedbackSection from './components/FeedbackSection';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import SampleKitModal from './components/SampleKitModal';
import './App.css';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authInitialMode, setAuthInitialMode] = useState('login');
  const [sampleKitModalOpen, setSampleKitModalOpen] = useState(false);
  const [selectedPresetCard, setSelectedPresetCard] = useState(null);
  const [preloadedContactSpecs, setPreloadedContactSpecs] = useState(null);

  const handleOpenAuth = (mode = 'login') => {
    setAuthInitialMode(mode);
    setAuthModalOpen(true);
  };

  const handleOpenSampleKit = () => {
    setSampleKitModalOpen(true);
  };

  const handleSelectCardForCalculator = (card) => {
    setSelectedPresetCard(card);
  };

  const handlePreloadContact = (specs) => {
    setPreloadedContactSpecs(specs);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      {/* 1. Header & Navigation */}
      <Navbar 
        onOpenAuth={handleOpenAuth}
        onOpenSampleKit={handleOpenSampleKit}
      />

      <main>
        {/* 2. Introduction Section */}
        <HeroIntro 
          onOpenSampleKit={handleOpenSampleKit}
        />

        {/* 3. Demo Video Section */}
        <DemoVideo />

        {/* 4. Demo Cards Section */}
        <DemoCards 
          onSelectCardForCalculator={handleSelectCardForCalculator}
          onOpenSampleKit={handleOpenSampleKit}
        />

        {/* 5. Instant Pricing & Quantity Calculator */}
        <PricingCalculator 
          selectedPresetCard={selectedPresetCard}
          onOpenSampleKit={handleOpenSampleKit}
          onPreloadContact={handlePreloadContact}
        />

        {/* 6. Contact Form Section */}
        <ContactForm 
          preloadedSpecs={preloadedContactSpecs}
        />

        {/* 7. Feedback Form & Rating Section */}
        <FeedbackSection />
      </main>

      {/* 8. Footer with All Links */}
      <Footer 
        onOpenAuth={handleOpenAuth}
        onOpenSampleKit={handleOpenSampleKit}
      />

      {/* Modals */}
      <AuthModal 
        isOpen={authModalOpen}
        initialMode={authInitialMode}
        onClose={() => setAuthModalOpen(false)}
      />

      <SampleKitModal 
        isOpen={sampleKitModalOpen}
        onClose={() => setSampleKitModalOpen(false)}
      />
    </div>
  );
}
