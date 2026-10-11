import React, { useState, useEffect } from 'react';
import { 
  Send, CheckCircle2, MessageSquare, Phone, Mail, MapPin, Calendar, Users, 
  Sprout, Sparkles, Layers, Eye, RefreshCw, Check 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { suiteCatalog } from '../data/suiteCatalog';
import DesignSelectModal from './DesignSelectModal';
import SuiteDetailModal from './SuiteDetailModal';

export default function ContactForm({ preloadedSpecs, onOpenSampleKit }) {
  // Currently selected suite (defaults to Royal Lotus & Gold Monogram)
  const [selectedSuite, setSelectedSuite] = useState(suiteCatalog[0]);
  const [isDesignPickerOpen, setIsDesignPickerOpen] = useState(false);
  const [inspectingSuite, setInspectingSuite] = useState(null);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: 'Wedding & Reception',
    eventDate: '',
    quantity: '150',
    seedPreference: 'Pollinator Wildflower Meadow',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync preloaded specs from Pricing Calculator if user clicked "Save Specs & Contact Us"
  useEffect(() => {
    if (preloadedSpecs) {
      setFormData(prev => ({
        ...prev,
        quantity: preloadedSpecs.quantity ? String(preloadedSpecs.quantity) : prev.quantity,
        seedPreference: preloadedSpecs.seedBlend || prev.seedPreference,
        message: prev.message || `Hi BloomPaper team! I configured my suite in your calculator:
- Quantity: ${preloadedSpecs.quantity} cards
- Paper: ${preloadedSpecs.paperWeight}
- Seeds: ${preloadedSpecs.seedBlend}
- Envelopes: ${preloadedSpecs.envelope}
- Add-ons: ${preloadedSpecs.addons || 'None'}
- Estimated Quote: ₹${preloadedSpecs.estimatedTotal}

Looking forward to your complimentary proof!`
      }));
    }
  }, [preloadedSpecs]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 60,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#C85A32', '#4E6E54', '#C98A2C', '#EBF2EC']
      });
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      eventType: 'Wedding & Reception',
      eventDate: '',
      quantity: '150',
      seedPreference: 'Pollinator Wildflower Meadow',
      message: ''
    });
  };

  return (
    <section id="contact" className="contact-section section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-eco sub-badge">
            <Mail size={15} />
            <span>Direct Studio Inquiries &amp; Design Consultation</span>
          </div>
          <h2 className="section-title">Let’s Cultivate Your Celebration</h2>
          <p className="section-subtitle">
            Every invitation order is a <strong>complete 3-piece ensemble</strong>: 
            the <strong>Big Cover Card Jacket</strong>, the <strong>Information Paper Sheet</strong> inside, 
            and the <strong>Living Seed Paper Sheet</strong>. Select your design below to receive a complimentary custom proof.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Form Card with Design Picker */}
          <div className="contact-form-card deckle-card">
            {preloadedSpecs && !isSubmitted && (
              <div className="calc-specs-alert">
                <Sparkles size={16} />
                <span>Specs from your calculator configuration have been automatically synced!</span>
              </div>
            )}

            {isSubmitted ? (
              <div className="contact-success-state">
                <div className="success-icon-wrap">
                  <CheckCircle2 size={54} color="#4E6E54" />
                </div>
                <h3>Inquiry Received with Joy! 🌱</h3>
                <p>
                  Thank you, <strong>{formData.fullName}</strong>. Our letterpress artisans 
                  will prepare a bespoke proof for your <strong>{selectedSuite.title}</strong> 
                  and reply to <strong>{formData.email}</strong> within 24 hours.
                </p>
                <div className="success-order-summary">
                  <div><strong>Selected Suite:</strong> {selectedSuite.title}</div>
                  <div><strong>Ensemble:</strong> Big Cover + Info Sheet + Plantable Seed Paper</div>
                  <div><strong>Event:</strong> {formData.eventType}</div>
                  <div><strong>Quantity:</strong> {formData.quantity} complete suites</div>
                  <div><strong>Rate:</strong> ₹{selectedSuite.basePrice} / suite (40% Off)</div>
                </div>
                <button className="btn-secondary" onClick={handleReset}>
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="actual-contact-form">
                {/* 1. SELECT INVITATION DESIGN COMPONENT */}
                <div className="form-suite-selector-box">
                  <div className="suite-selector-label-row">
                    <label className="suite-picker-label">
                      <Layers size={16} color="#C85A32" />
                      <span>1. Select Invitation Design (Whole 3-Piece Suite)</span>
                    </label>
                    <button 
                      type="button" 
                      className="btn-text-change-design"
                      onClick={() => setIsDesignPickerOpen(true)}
                    >
                      <RefreshCw size={13} />
                      <span>Change Design</span>
                    </button>
                  </div>

                  {/* Active Selected Card Preview Box */}
                  <div className="active-selected-suite-card">
                    <div 
                      className="suite-preview-thumb-wrap"
                      onClick={() => setInspectingSuite(selectedSuite)}
                      title="Click to inspect 3-piece suite"
                    >
                      <img 
                        src={selectedSuite.image} 
                        alt={selectedSuite.title} 
                        className="suite-preview-img" 
                      />
                      <div className="suite-thumb-seed-badge">
                        <Sprout size={11} color="#2D4A30" />
                        <span>1–2 Seeds</span>
                      </div>
                    </div>

                    <div className="suite-preview-details">
                      <div className="suite-preview-top-line">
                        <span className="suite-occasion-tag">{selectedSuite.occasion}</span>
                        <span className="suite-price-tag">₹{selectedSuite.basePrice}/suite</span>
                      </div>

                      <h4 className="suite-preview-name">{selectedSuite.title}</h4>
                      
                      <div className="suite-includes-indicator">
                        <span className="inc-pill">✓ Big Cover Jacket</span>
                        <span className="inc-pill">✓ Info Paper Sheet</span>
                        <span className="inc-pill seed-pill">✓ Plantable Seed Paper</span>
                      </div>

                      <div className="suite-preview-action-row">
                        <button 
                          type="button"
                          className="btn-primary btn-select-card-trigger"
                          onClick={() => setIsDesignPickerOpen(true)}
                          title="Click to view designs and choose a card"
                        >
                          <Layers size={14} />
                          <span>Select Card</span>
                        </button>

                        <button 
                          type="button"
                          className="btn-secondary btn-inspect-suite-trigger"
                          onClick={() => setInspectingSuite(selectedSuite)}
                          title="Inspect Big Cover Card, Information Paper, and Seed Paper inside"
                        >
                          <Eye size={14} />
                          <span>Inspect Entire Card (3 Pieces)</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Customer Personal Details */}
                <div className="form-row-two">
                  <div className="form-field">
                    <label>Your Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName"
                      required 
                      placeholder="e.g. Diya Kapoor"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      name="email"
                      required 
                      placeholder="diya@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row-two">
                  <div className="form-field">
                    <label>Phone / WhatsApp</label>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label>Celebration Type *</label>
                    <select 
                      name="eventType" 
                      value={formData.eventType} 
                      onChange={handleChange}
                    >
                      <option value="Wedding & Reception">Wedding &amp; Reception</option>
                      <option value="Save The Date">Save The Date Cards</option>
                      <option value="Engagement Party">Engagement Party</option>
                      <option value="Baby Shower / Welcome Baby">Baby Shower / Welcome Baby</option>
                      <option value="Milestone Birthday">Milestone Birthday / Anniversary</option>
                      <option value="Corporate Eco-Gala">Corporate Eco-Gala / Conference</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-three">
                  <div className="form-field">
                    <label>Event Date</label>
                    <input 
                      type="date" 
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label>Estimated Quantity</label>
                    <input 
                      type="number" 
                      name="quantity"
                      min="25"
                      max="5000"
                      value={formData.quantity}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-field">
                    <label>Seed Preference</label>
                    <select 
                      name="seedPreference"
                      value={formData.seedPreference}
                      onChange={handleChange}
                    >
                      <option value="Pollinator Wildflower Meadow">Wildflower Meadow</option>
                      <option value="Golden Marigold & Calendula">Golden Marigold</option>
                      <option value="Culinary Garden Herbs">Culinary Garden Herbs</option>
                      <option value="Chamomile & Forget-Me-Not">Chamomile &amp; Forget-Me-Not</option>
                      <option value="Designer Recommendation">Let Designer Recommend</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label>Your Vision, Custom Wishes or Questions</label>
                  <textarea 
                    name="message"
                    rows="3"
                    placeholder="Tell us about your wedding theme, color palette, custom monogram ideas, or any questions about the 3-piece suite..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary" 
                  style={{ width: '100%' }}
                  disabled={isSubmitting}
                >
                  <Send size={18} />
                  <span>
                    {isSubmitting 
                      ? 'Sending Your Vision...' 
                      : `Send Inquiry for ${selectedSuite.title}`}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Studio Info & WhatsApp */}
          <div className="contact-info-panel">
            <div className="info-box deckle-card">
              <h3>Artisanal Studio &amp; Atelier</h3>
              <p>
                Every single card is hand-pulled, solar-dried, and inspected before packaging in zero-plastic wraps.
              </p>

              <div className="contact-methods-list">
                <div className="method-item">
                  <div className="icon-circle">
                    <MapPin size={18} color="#C85A32" />
                  </div>
                  <div>
                    <strong>Studio Atelier</strong>
                    <p>Heritage Crafts Complex, Lodhi Road, New Delhi - 110003 (Shipping across India &amp; Worldwide)</p>
                  </div>
                </div>

                <div className="method-item">
                  <div className="icon-circle">
                    <Mail size={18} color="#4E6E54" />
                  </div>
                  <div>
                    <strong>Email Direct</strong>
                    <p><a href="mailto:hello@bloompaper.eco">hello@bloompaper.eco</a></p>
                  </div>
                </div>

                <div className="method-item">
                  <div className="icon-circle">
                    <Phone size={18} color="#C85A32" />
                  </div>
                  <div>
                    <strong>Studio Phone / WhatsApp</strong>
                    <p>+91 98765 43210 / 1800-492-SEED</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Connect */}
              <div className="whatsapp-card">
                <div className="wa-header">
                  <MessageSquare size={22} color="#25D366" />
                  <div>
                    <strong>Need Quick Advice on WhatsApp?</strong>
                    <p>Chat directly with our master paper artisan</p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/18004927333?text=Hi%20BloomPaper!%20I'm%20interested%20in%20plantable%20seed%20paper%20invitations." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  Open WhatsApp Chat
                </a>
              </div>

              {/* Studio Hours */}
              <div className="studio-hours-box">
                <div className="hours-row">
                  <span>Monday - Friday:</span>
                  <strong>9:00 AM – 6:00 PM IST / PST</strong>
                </div>
                <div className="hours-row">
                  <span>Saturday:</span>
                  <strong>10:00 AM – 4:00 PM IST / PST</strong>
                </div>
                <div className="hours-row">
                  <span>Sunday:</span>
                  <strong>Closed for Garden Tending 🌸</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 1: Design Select Picker Modal */}
      <DesignSelectModal 
        isOpen={isDesignPickerOpen}
        onClose={() => setIsDesignPickerOpen(false)}
        selectedSuiteId={selectedSuite.id}
        onSelectSuite={(suite) => setSelectedSuite(suite)}
        onInspectSuite={(suite) => {
          setIsDesignPickerOpen(false);
          setInspectingSuite(suite);
        }}
      />

      {/* Modal 2: 3-Piece Suite Detail & Layers Inspection Modal */}
      {inspectingSuite && (
        <SuiteDetailModal 
          suite={inspectingSuite}
          onClose={() => setInspectingSuite(null)}
          onSelectForForm={(suite) => {
            setSelectedSuite(suite);
            setInspectingSuite(null);
          }}
          onSelectForCalculator={(suite) => {
            setInspectingSuite(null);
            const calcEl = document.getElementById('calculator');
            if (calcEl) calcEl.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenSampleKit={onOpenSampleKit}
        />
      )}
    </section>
  );
}
