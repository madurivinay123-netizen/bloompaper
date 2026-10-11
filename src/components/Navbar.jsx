import React, { useState, useEffect } from 'react';
import { Sprout, ShoppingBag, User, Menu, X, Sparkles, Heart } from 'lucide-react';

export default function Navbar({ onOpenAuth, onOpenSampleKit }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo at Left-Top Corner */}
        <a href="#intro" className="brand-logo" title="BloomPaper — Plantable Seed Paper Invitations">
          <div className="logo-emblem-wrap">
            <img 
              src="/bloompaper_logo.png" 
              alt="BloomPaper Botanical Seed Logo" 
              className="brand-logo-img" 
            />
          </div>
          <div className="brand-text-group">
            <span className="brand-title">BloomPaper</span>
            <span className="brand-tagline">Plantable Seed Invitations</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          <a href="#intro" className="nav-link">Introduction</a>
          <a href="#demo-video" className="nav-link">Demo Video</a>
          <a href="#demo-cards" className="nav-link">Demo Cards</a>
          <a href="#calculator" className="nav-link">Pricing Calculator</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="#feedback" className="nav-link">Reviews & Rating</a>
        </nav>

        {/* Action Buttons */}
        <div className="nav-actions">
          <button 
            className="btn-auth" 
            onClick={() => onOpenAuth('login')}
            title="Account Login / Register"
          >
            <User size={18} />
            <span className="hide-mobile">Login / Register</span>
          </button>

          <button 
            className="btn-sample-kit"
            onClick={onOpenSampleKit}
          >
            <Sparkles size={16} />
            <span>Sample Kit</span>
          </button>

          {/* Mobile hamburger */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <a href="#intro" onClick={() => setMobileMenuOpen(false)}>Introduction</a>
          <a href="#demo-video" onClick={() => setMobileMenuOpen(false)}>Demo Video</a>
          <a href="#demo-cards" onClick={() => setMobileMenuOpen(false)}>Demo Cards</a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)}>Pricing Calculator</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</a>
          <a href="#feedback" onClick={() => setMobileMenuOpen(false)}>Feedback & Ratings</a>
          <div className="mobile-drawer-actions">
            <button 
              className="btn-primary" 
              style={{ width: '100%' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSampleKit();
              }}
            >
              Order Free Sample Kit
            </button>
            <button 
              className="btn-secondary" 
              style={{ width: '100%', marginTop: '10px' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth('login');
              }}
            >
              Login / Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
