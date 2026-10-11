import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Sprout, Package, Truck, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SampleKitModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    country: 'United States',
    seedChoice: 'Pollinator Wildflower Meadow'
  });
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOrdered(true);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#4E6E54', '#C85A32', '#C98A2C']
    });
  };

  const handleClose = () => {
    setIsOrdered(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div 
        className="sample-kit-modal deckle-card" 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {isOrdered ? (
          <div className="sample-order-success">
            <div className="icon-badge-success">
              <Package size={48} color="#4E6E54" />
            </div>
            <h3>Your Free Sample Kit is on Its Way! 🌱</h3>
            <p>
              Thank you, <strong>{formData.name}</strong>. We are packing your physical 
              deckle-edge seed paper samples and dispatching them to <strong>{formData.address}, {formData.city}</strong>.
            </p>
            <div className="kit-confirmation-box">
              <div className="box-line">
                <span>Shipping Method:</span>
                <strong>First-Class Eco Post (Free)</strong>
              </div>
              <div className="box-line">
                <span>Estimated Arrival:</span>
                <strong>3 to 5 Business Days</strong>
              </div>
              <div className="box-line">
                <span>Total Charged:</span>
                <strong style={{ color: '#4E6E54' }}>₹0 (Complimentary)</strong>
              </div>
            </div>
            <button className="btn-primary" onClick={handleClose} style={{ width: '100%' }}>
              Back to Website
            </button>
          </div>
        ) : (
          <div>
            <div className="kit-modal-header">
              <div className="kit-icon-badge">
                <Sparkles size={22} color="#C85A32" />
              </div>
              <h3>Order Your Free Touch &amp; Feel Sample Kit</h3>
              <p>Experience the luxurious weight, natural deckle edges, and embedded seeds in person before placing your full order.</p>
            </div>

            {/* What's inside preview */}
            <div className="kit-contents-card">
              <span className="kit-contents-title">What’s Included in Your Free Pack:</span>
              <ul className="kit-items-list">
                <li>✨ 3× Paper Thickness Swatches (250, 350 &amp; 450 GSM)</li>
                <li>💌 1× Plantable Seed Envelope &amp; Ribbed Kraft Envelope</li>
                <li>🌱 1× Ready-to-Plant Wildflower Mini Seed Card to test sprout at home</li>
                <li>🏷️ 1× Hand-poured Botanical Wax Seal with botanical sprig</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="kit-form">
              <div className="form-row-two">
                <div className="form-field">
                  <label>Full Name *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Diya Kapoor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label>Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="diya@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-field">
                <label>Shipping Street Address *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Flat 402, Lotus Residency, MG Road"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                />
              </div>

              <div className="form-row-three">
                <div className="form-field">
                  <label>City *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Mumbai"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label>Postal Code *</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="400001"
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  />
                </div>
                <div className="form-field">
                  <label>Seed Sample</label>
                  <select 
                    value={formData.seedChoice}
                    onChange={(e) => setFormData({ ...formData, seedChoice: e.target.value })}
                  >
                    <option value="Pollinator Wildflower Meadow">Wildflower Meadow</option>
                    <option value="Golden Marigold & Calendula">Golden Marigold</option>
                    <option value="Culinary Garden Herbs">Culinary Herbs</option>
                    <option value="Chamomile & Lavender">Chamomile Blend</option>
                  </select>
                </div>
              </div>

              <div className="kit-pricing-free-row">
                <div className="price-tag-free">
                  <span>Price: ₹0</span>
                  <span className="dot">•</span>
                  <span>Shipping: FREE across India</span>
                </div>
                <button type="submit" className="btn-primary">
                  <Truck size={16} />
                  <span>Send My Free Sample Kit</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
