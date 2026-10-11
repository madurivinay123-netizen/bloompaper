import React, { useState } from 'react';
import { Sprout, Play, ArrowRight, Sparkles, CheckCircle2, ShieldCheck, SunMedium, Droplets } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function HeroIntro({ onOpenSampleKit }) {
  const [isWatered, setIsWatered] = useState(false);
  const [sproutCount, setSproutCount] = useState(3);

  const handleWaterCard = () => {
    setIsWatered(true);
    setSproutCount(prev => Math.min(prev + 3, 12));
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#4E6E54', '#C85A32', '#C98A2C', '#EBF2EC']
    });
  };

  const handleResetCard = () => {
    setIsWatered(false);
    setSproutCount(3);
  };

  return (
    <section id="intro" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Story & Introduction */}
        <div className="hero-content">
          <div className="badge-eco hero-badge">
            <Sprout size={16} />
            <span>Handmade Plantable Seed Stationery • 100% Tree-Free</span>
          </div>

          <h1 className="hero-title">
            Invitations that never end in the trash — <br />
            <span className="hero-title-accent">they bloom into wildflowers.</span>
          </h1>

          <p className="hero-description">
            Handcrafted from recycled cotton fibers and embedded with living, non-GMO 
            pollinator seeds. Invite your cherished guests to celebrate your special milestone, 
            and watch your stationery transform into pots of lavender, marigolds, and chamomile.
          </p>

          <div className="hero-actions">
            <a href="#demo-video" className="btn-primary">
              <Play size={18} fill="currentColor" />
              <span>Watch Demo Video</span>
            </a>
            <a href="#demo-cards" className="btn-secondary">
              <span>Explore Demo Cards</span>
              <ArrowRight size={18} />
            </a>
            <button 
              onClick={onOpenSampleKit}
              className="btn-ghost hero-sample-btn"
            >
              <Sparkles size={16} />
              <span>Get Free Sample Kit</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="hero-trust-grid">
            <div className="trust-item">
              <div className="trust-icon-wrap">
                <CheckCircle2 size={18} className="trust-icon" />
              </div>
              <div>
                <strong>98.4% Germination</strong>
                <span>Certified non-GMO viable seeds</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon-wrap">
                <ShieldCheck size={18} className="trust-icon" />
              </div>
              <div>
                <strong>Zero Tree Wood Pulp</strong>
                <span>100% recycled garment cotton</span>
              </div>
            </div>

            <div className="trust-item">
              <div className="trust-icon-wrap">
                <SunMedium size={18} className="trust-icon" />
              </div>
              <div>
                <strong>Soy & Vegetable Inks</strong>
                <span>Non-toxic printing safe for soil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Card Showcase */}
        <div className="hero-visual">
          <div className="hero-card-display deckle-edge-border seed-paper-texture">
            {/* Stamp / Ribbon */}
            <div className="botanical-seal">
              <span>ORGANIC</span>
              <Sprout size={16} />
              <span>SEED PAPER</span>
            </div>

            {/* Invitation Artwork Preview */}
            <div className="invitation-mockup-inner">
              <span className="script-accent">Together with their families</span>
              <h2 className="invitee-names">Aarav &amp; Diya</h2>
              <div className="ornament-divider">
                <span className="line"></span>
                <span className="leaf">❦</span>
                <span className="line"></span>
              </div>
              <p className="invite-details">
                REQUEST THE HONOUR OF YOUR BLESSINGS &amp; PRESENCE<br />
                AT THEIR AUSPICIOUS WEDDING CELEBRATION
              </p>
              <p className="invite-date">SATURDAY, 21ST NOVEMBER 2026 • JAIPUR PALACE</p>

              <div className="card-plant-instruction">
                <Droplets size={14} />
                <span>Soak card in water • Cover with soil • Watch love bloom</span>
              </div>
            </div>

            {/* Live Interactive Sprout Overlay */}
            {isWatered && (
              <div className="sprouting-overlay">
                <div className="sprout-badge-float">
                  <Sprout size={16} /> Card Watered! {sproutCount} Wildflower Sprouts Growing 🌱
                </div>
                {Array.from({ length: sproutCount }).map((_, i) => (
                  <div 
                    key={i} 
                    className="wildflower-sprout"
                    style={{
                      left: `${15 + (i * 18) % 75}%`,
                      bottom: `${8 + (i * 7) % 35}%`,
                      animationDelay: `${i * 0.15}s`
                    }}
                  >
                    🌱
                  </div>
                ))}
              </div>
            )}

            {/* Interactive Card Controls */}
            <div className="card-interact-bar">
              {!isWatered ? (
                <button 
                  className="btn-water-card" 
                  onClick={handleWaterCard}
                  title="Click to simulate watering and sprouting"
                >
                  <Droplets size={16} />
                  <span>Click to Water &amp; Sprout This Card</span>
                </button>
              ) : (
                <div className="card-watered-actions">
                  <button className="btn-add-water" onClick={handleWaterCard}>
                    <Droplets size={14} /> Add More Water
                  </button>
                  <button className="btn-reset-water" onClick={handleResetCard}>
                    Reset Card
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="hero-quote-card">
            <span className="quote-badge">Eco-Luxury Promise</span>
            <p>"Our wedding guests texted us 3 weeks later with photos of real marigolds blooming in their windowsills!"</p>
            <div className="quote-author">— Priya &amp; Rohan, New Delhi</div>
          </div>
        </div>
      </div>
    </section>
  );
}
