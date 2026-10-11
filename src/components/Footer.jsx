import React, { useState } from 'react';
import { Sprout, Send, Heart, ShieldCheck, Mail, Lock, UserPlus, LogIn, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Footer({ onOpenAuth, onOpenSampleKit }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.9 }
    });
  };

  return (
    <footer className="site-footer">
      {/* Newsletter Strip */}
      <div className="newsletter-banner-strip">
        <div className="container newsletter-container">
          <div className="newsletter-text">
            <div className="newsletter-badge">
              <Sprout size={16} /> <span>Join Our Garden Circle</span>
            </div>
            <h3>Receive a Complimentary Sample Kit Guide &amp; 10% Off</h3>
            <p>Seasonal planting advice, early collection drops, and wedding stationery inspiration.</p>
          </div>

          <div className="newsletter-form-box">
            {newsletterSubscribed ? (
              <div className="newsletter-thankyou">
                🌸 Welcome to our garden circle! Check your inbox for your 10% voucher.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-inline-form">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button type="submit" className="btn-primary">
                  <span>Subscribe</span>
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="main-footer-body">
        <div className="container footer-grid">
          {/* Column 1: Brand & Mission */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <img 
                src="/bloompaper_logo.png" 
                alt="BloomPaper Botanical Seed Logo" 
                className="footer-logo-img" 
              />
              <span className="footer-brand-name">BloomPaper</span>
            </div>
            <p className="footer-about-text">
              Handcrafted plantable seed paper stationery for weddings, milestones, 
              and conscious celebrations. Zero tree wood pulp. 100% recycled cotton rags 
              infused with non-GMO wildflower and culinary herb seeds.
            </p>

            {/* Social Media Links with stylish icons */}
            <div className="footer-social-section">
              <span className="social-heading">Follow Our Blooms:</span>
              <div className="social-links-row">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-btn instagram"
                  aria-label="Instagram"
                  title="Follow us on Instagram @bloompaperseed"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>

                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-btn facebook"
                  aria-label="Facebook"
                  title="Connect on Facebook /bloompaperinvitations"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>

                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="social-btn youtube"
                  aria-label="YouTube"
                  title="Watch papercraft tutorials on YouTube @bloompaperstudio"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Explore Studio</h4>
            <ul className="footer-links-list">
              <li><a href="#intro">Introduction Story</a></li>
              <li><a href="#demo-video">Process Demo Video</a></li>
              <li><a href="#demo-cards">Demo Cards Gallery</a></li>
              <li><a href="#calculator">Pricing Calculator</a></li>
              <li><a href="#contact">Contact &amp; Custom Quote</a></li>
              <li><a href="#feedback">Reviews &amp; Ratings</a></li>
            </ul>
          </div>

          {/* Column 3: Seed Paper Varieties */}
          <div className="footer-col">
            <h4 className="footer-col-title">Living Seed Blends</h4>
            <ul className="footer-links-list">
              <li><a href="#demo-cards">🌸 Pollinator Wildflower Meadow</a></li>
              <li><a href="#demo-cards">🌼 Golden Marigold &amp; Calendula</a></li>
              <li><a href="#demo-cards">🌿 Sweet Genovese Basil</a></li>
              <li><a href="#demo-cards">🌻 Fragrant Chamomile Blend</a></li>
              <li><a href="#demo-cards">🌱 Microgreens &amp; Thyme</a></li>
              <li><a href="#calculator">🐝 Honeybee Sanctuary Seed Blend</a></li>
            </ul>
          </div>

          {/* Column 4: Account & Customer Care (Login, Register, Sample Kit) */}
          <div className="footer-col">
            <h4 className="footer-col-title">Account &amp; Services</h4>
            <ul className="footer-links-list">
              <li>
                <button 
                  className="footer-link-btn"
                  onClick={() => onOpenAuth('login')}
                >
                  <LogIn size={15} />
                  <span>Client Login</span>
                </button>
              </li>
              <li>
                <button 
                  className="footer-link-btn"
                  onClick={() => onOpenAuth('register')}
                >
                  <UserPlus size={15} />
                  <span>Create Account / Register</span>
                </button>
              </li>
              <li>
                <button 
                  className="footer-link-btn"
                  onClick={onOpenSampleKit}
                >
                  <Sprout size={15} />
                  <span>Request Free Sample Kit</span>
                </button>
              </li>
              <li><a href="#contact">Track Sample Pack Delivery</a></li>
              <li><a href="#calculator">Volume &amp; Wholesale Pricing</a></li>
              <li><a href="#contact">Planting Guarantee Policy</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Eco Seal */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <div className="bottom-copy">
            © 2026 BloomPaper Invitations &amp; Stationery Co. All rights reserved.
          </div>
          <div className="bottom-badges">
            <span className="badge-tag">🌱 100% Recycled Cotton</span>
            <span className="badge-tag">🐝 Non-GMO Pollinator Seeds</span>
            <span className="badge-tag">💧 Zero Chemical Bleach</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
