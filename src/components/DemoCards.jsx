import React, { useState, useRef } from 'react';
import { 
  Sprout, Maximize2, Play, Pause, ChevronLeft, ChevronRight, Layers 
} from 'lucide-react';
import { suiteCatalog } from '../data/suiteCatalog';
import SuiteDetailModal from './SuiteDetailModal';

export default function DemoCards({ onSelectCardForCalculator, onOpenSampleKit }) {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedSuite, setSelectedSuite] = useState(null);
  const scrollContainerRef = useRef(null);

  // Manual scroll buttons
  const handleScrollManual = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Duplicate cards for seamless continuous infinite marquee loop
  const marqueeCards = [...suiteCatalog, ...suiteCatalog];

  return (
    <section id="demo-cards" className="demo-cards-section section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-eco sub-badge">
            <Sprout size={15} />
            <span>1 to 2 Viable Seeds Embedded • Pure Card Gallery</span>
          </div>
          <h2 className="section-title">Plantable Demo Cards Showcase</h2>
          <p className="section-subtitle">
            Continuous auto-scrolling gallery of handmade seed paper invitations. 
            Hover over any card to pause. <strong>Click any card to inspect the entire 3-piece ensemble:</strong> the 
            <strong> Big Cover Jacket</strong>, the inner <strong>Information Paper Sheet</strong>, 
            and the living <strong>Plantable Seed Paper Sheet</strong>.
          </p>
        </div>

        {/* Control toolbar: Auto-scroll indicator & Manual Controls */}
        <div className="marquee-controls-bar">
          <div className="marquee-status-badge">
            <span className={`status-dot ${isPaused ? 'paused' : 'active'}`}></span>
            <span>{isPaused ? 'Auto-scroll Paused (Hovered)' : 'Auto-scrolling Continuously to Left'}</span>
          </div>

          <div className="marquee-nav-buttons">
            <button 
              className="btn-marquee-nav"
              onClick={() => handleScrollManual('left')}
              title="Scroll Left"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>

            <button 
              className="btn-marquee-nav btn-pause-toggle"
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? "Resume Auto-scroll" : "Pause Auto-scroll"}
              aria-label="Toggle auto-scroll"
            >
              {isPaused ? <Play size={15} fill="currentColor" /> : <Pause size={15} />}
              <span>{isPaused ? 'Resume' : 'Pause'}</span>
            </button>

            <button 
              className="btn-marquee-nav"
              onClick={() => handleScrollManual('right')}
              title="Scroll Right"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Auto-Scrolling Cards Ribbon (NO INFO BELOW THE CARDS!) */}
      <div 
        className="cards-marquee-container"
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`cards-marquee-track ${isPaused ? 'paused' : ''}`}>
          {marqueeCards.map((suite, idx) => (
            <div 
              key={`${suite.id}-${idx}`}
              className="pure-card-item deckle-card"
              onClick={() => setSelectedSuite(suite)}
              title={`Click to inspect entire 3-piece suite: ${suite.title}`}
            >
              {/* Sole Content: The Beautiful Card Artwork Only (NO info box below!) */}
              <div className="pure-card-image-wrapper">
                <img 
                  src={suite.image} 
                  alt={suite.title} 
                  className="pure-card-photo" 
                  loading="lazy"
                />

                {/* Subtle Floating Seed Pill */}
                <div className="card-floating-seed-pill">
                  <Sprout size={13} color="#3D5A40" />
                  <span>1–2 Seeds Embedded</span>
                </div>

                {/* Elegant Hover Overlay */}
                <div className="card-hover-overlay">
                  <div className="hover-3piece-badge">
                    <Layers size={12} />
                    <span>Whole 3-Piece Suite</span>
                  </div>
                  <span className="card-hover-title">{suite.title}</span>
                  <span className="card-hover-names">{suite.names}</span>
                  <span className="card-hover-price">From ₹{suite.basePrice}/suite</span>
                  <div className="card-hover-action-pill">
                    <Maximize2 size={14} />
                    <span>Click to Inspect Entire Suite</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container" style={{ marginTop: '24px' }}>
        <p className="marquee-hint-text">
          🌱 Tip: We sell the whole card ensemble — Big Cover Card + Information Paper Sheet + Plantable Seed Paper Sheet. Click any card to inspect all 3 pieces.
        </p>
      </div>

      {/* Interactive Modal when clicking any card: The Full 3-Piece Suite Inspector */}
      {selectedSuite && (
        <SuiteDetailModal 
          suite={selectedSuite}
          onClose={() => setSelectedSuite(null)}
          onSelectForCalculator={(suite) => {
            onSelectCardForCalculator(suite);
            setSelectedSuite(null);
            const el = document.getElementById('calculator');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onSelectForForm={(suite) => {
            setSelectedSuite(null);
            const formEl = document.getElementById('contact');
            if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenSampleKit={onOpenSampleKit}
        />
      )}
    </section>
  );
}
