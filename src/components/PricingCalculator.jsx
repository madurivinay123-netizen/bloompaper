import React, { useState } from 'react';
import { Sliders, Check, Sparkles, Sprout, ShieldCheck, Truck, Droplets, Info, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const paperWeights = [
  { id: "250gsm", name: "250 GSM Standard Natural", priceAdd: 0, desc: "Classic flexible cotton seed paper with delicate torn deckle edges." },
  { id: "350gsm", name: "350 GSM Heavy Artisanal (Most Popular)", priceAdd: 7, desc: "Thick, luxurious cotton rag paper with textured deckle edges. (40% Off)" },
  { id: "450gsm", name: "450 GSM Heritage Extra-Thick", priceAdd: 15, desc: "Substantial board-weight feel, premium letterpress depth. (40% Off)" }
];

const seedBlends = [
  { id: "wildflower", name: "Pollinator Wildflower Meadow", icon: "🌸", desc: "Cornflower, Poppy, Catchfly, Daisy & Lavender" },
  { id: "marigold", name: "Golden Marigold & Calendula", icon: "🌼", desc: "Vibrant celebratory golden blooms loved by pollinators" },
  { id: "herbs", name: "Culinary Garden Herbs", icon: "🌿", desc: "Sweet Genovese Basil, French Thyme & Flat Parsley" },
  { id: "chamomile", name: "Chamomile & Forget-Me-Not", icon: "🌼", desc: "Delicate soothing white petals with fragrant yellow centers" }
];

const envelopeOptions = [
  { id: "seed-env", name: "Matching Plantable Seed Envelope", priceAdd: 11, desc: "The envelope itself sprouts into flowers when planted! (40% Off)" },
  { id: "kraft-env", name: "Warm Ribbed Kraft Envelope", priceAdd: 6, desc: "Rustic recycled natural kraft with deep triangular flap. (40% Off)" },
  { id: "standard-env", name: "Ivory Cotton Parchment Envelope", priceAdd: 0, desc: "Classic neutral matte finish, included complimentary." }
];

const addonOptions = [
  { id: "wax-seal", name: "Botanical Pressed Wax Seal", priceAdd: 9, icon: "🪶", desc: "Hand-poured terracotta or gold wax seal with dried floral sprig. (40% Off)" },
  { id: "foil-stamp", name: "Metallic Foil Letterpress Calligraphy", priceAdd: 7, icon: "✨", desc: "Shimmering gold, copper or rose foil accent names. (40% Off)" },
  { id: "rsvp-card", name: "Matching Plantable RSVP & QR Card", priceAdd: 12, icon: "💌", desc: "Plantable RSVP card with QR code link for digital confirmations. (40% Off)" }
];

export default function PricingCalculator({ selectedPresetCard, onOpenSampleKit, onPreloadContact }) {
  const [quantity, setQuantity] = useState(150);
  const [selectedWeight, setSelectedWeight] = useState("350gsm");
  const [selectedSeed, setSelectedSeed] = useState("wildflower");
  const [selectedEnvelope, setSelectedEnvelope] = useState("seed-env");
  const [selectedAddons, setSelectedAddons] = useState(["wax-seal"]);

  // Calculate discount tier
  const getDiscountPercent = (qty) => {
    if (qty >= 1000) return 35;
    if (qty >= 500) return 28;
    if (qty >= 250) return 20;
    if (qty >= 100) return 12;
    if (qty >= 50) return 5;
    return 0;
  };

  const discountPercent = getDiscountPercent(quantity);

  // Pricing math in INR (₹) with 40% reduction applied
  const baseCardRate = selectedPresetCard ? selectedPresetCard.basePrice : 39;
  const weightAdd = paperWeights.find(w => w.id === selectedWeight)?.priceAdd || 0;
  const envAdd = envelopeOptions.find(e => e.id === selectedEnvelope)?.priceAdd || 0;
  const addonsAdd = selectedAddons.reduce((acc, addonId) => {
    const item = addonOptions.find(a => a.id === addonId);
    return acc + (item ? item.priceAdd : 0);
  }, 0);

  const rawPerCard = baseCardRate + weightAdd + envAdd + addonsAdd;
  const discountMultiplier = 1 - (discountPercent / 100);
  const discountedPerCard = (rawPerCard * discountMultiplier);
  const totalPrice = (discountedPerCard * quantity);
  const originalTotalPrice = (rawPerCard * quantity);
  const totalSavings = originalTotalPrice - totalPrice;

  // Pollinator impact calculation
  const estimatedBlooms = Math.round(quantity * 14);

  const toggleAddon = (id) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleOrderQuote = () => {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 }
    });
    if (onPreloadContact) {
      onPreloadContact({
        quantity,
        paperWeight: paperWeights.find(w => w.id === selectedWeight)?.name,
        seedBlend: seedBlends.find(s => s.id === selectedSeed)?.name,
        envelope: envelopeOptions.find(e => e.id === selectedEnvelope)?.name,
        addons: selectedAddons.map(id => addonOptions.find(a => a.id === id)?.name).join(', '),
        estimatedTotal: Math.round(totalPrice).toLocaleString('en-IN')
      });
    }
  };

  return (
    <section id="calculator" className="pricing-calculator-section section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-terracotta sub-badge">
            <Sliders size={15} />
            <span>Instant Custom Quote &amp; Volume Tiers</span>
          </div>
          <h2 className="section-title">Instant Pricing &amp; Quantity Calculator</h2>
          <p className="section-subtitle">
            Transparent pricing in Indian Rupees (₹) with zero plate or hidden setup fees. Adjust quantity, 
            paper weights, seed varieties, and bespoke envelopes in real time.
          </p>
        </div>

        {/* Selected Card Preset Banner if loaded */}
        {selectedPresetCard && (
          <div className="active-preset-banner">
            <Sprout size={18} />
            <span>
              Configuring suite based on: <strong>{selectedPresetCard.title}</strong> (₹{selectedPresetCard.basePrice} base)
            </span>
          </div>
        )}

        <div className="calculator-layout-grid">
          {/* Left Column: Interactive Controls */}
          <div className="calculator-controls-panel deckle-card">
            {/* 1. Quantity Slider & Tiers */}
            <div className="calc-group">
              <div className="group-title-row">
                <label className="group-label">1. Select Quantity of Invitations</label>
                <div className="quantity-display-badge">
                  <span className="qty-number">{quantity}</span>
                  <span className="qty-unit">Cards</span>
                  {discountPercent > 0 && (
                    <span className="discount-pill">-{discountPercent}% Tier Applied</span>
                  )}
                </div>
              </div>

              {/* Slider */}
              <input 
                type="range"
                min="25"
                max="1000"
                step="25"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="quantity-slider-range"
              />

              {/* Preset Buttons */}
              <div className="quantity-preset-chips">
                {[50, 100, 150, 250, 500, 1000].map((preset) => (
                  <button
                    key={preset}
                    className={`preset-chip ${quantity === preset ? 'active' : ''}`}
                    onClick={() => setQuantity(preset)}
                  >
                    {preset}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Paper Weight Selection */}
            <div className="calc-group">
              <label className="group-label">2. Paper Weight &amp; Thickness</label>
              <div className="options-selector-grid">
                {paperWeights.map((w) => (
                  <div 
                    key={w.id}
                    className={`option-card-radio ${selectedWeight === w.id ? 'active' : ''}`}
                    onClick={() => setSelectedWeight(w.id)}
                  >
                    <div className="radio-header">
                      <span className="option-name">{w.name}</span>
                      <span className="option-rate">
                        {w.priceAdd === 0 ? "Included" : `+₹${w.priceAdd}/card`}
                      </span>
                    </div>
                    <p className="option-desc">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Living Seed Variety Infusion */}
            <div className="calc-group">
              <label className="group-label">3. Living Seed Variety Infusion (Included Free)</label>
              <div className="seed-blends-grid">
                {seedBlends.map((s) => (
                  <div 
                    key={s.id}
                    className={`seed-blend-card ${selectedSeed === s.id ? 'active' : ''}`}
                    onClick={() => setSelectedSeed(s.id)}
                  >
                    <span className="blend-icon">{s.icon}</span>
                    <div className="blend-text">
                      <strong>{s.name}</strong>
                      <small>{s.desc}</small>
                    </div>
                    {selectedSeed === s.id && (
                      <Check size={18} className="blend-check" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Envelope Style */}
            <div className="calc-group">
              <label className="group-label">4. Envelopes</label>
              <div className="options-selector-grid">
                {envelopeOptions.map((e) => (
                  <div 
                    key={e.id}
                    className={`option-card-radio ${selectedEnvelope === e.id ? 'active' : ''}`}
                    onClick={() => setSelectedEnvelope(e.id)}
                  >
                    <div className="radio-header">
                      <span className="option-name">{e.name}</span>
                      <span className="option-rate">
                        {e.priceAdd === 0 ? "Included" : `+₹${e.priceAdd}/card`}
                      </span>
                    </div>
                    <p className="option-desc">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Luxury Finishing Add-ons */}
            <div className="calc-group">
              <label className="group-label">5. Optional Handcrafted Add-ons</label>
              <div className="addons-checkbox-grid">
                {addonOptions.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div 
                      key={addon.id}
                      className={`addon-checkbox-item ${isChecked ? 'active' : ''}`}
                      onClick={() => toggleAddon(addon.id)}
                    >
                      <div className="addon-check-box">
                        {isChecked && <Check size={14} color="#FFFFFF" />}
                      </div>
                      <div className="addon-info">
                        <div className="addon-title-row">
                          <span>{addon.icon} {addon.name}</span>
                          <strong>+₹{addon.priceAdd}/card</strong>
                        </div>
                        <small>{addon.desc}</small>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Live Price Breakdown & Sticky Action */}
          <div className="calculator-summary-column">
            <div className="summary-sticky-card deckle-card">
              <div className="summary-card-header">
                <h3>Investment Summary</h3>
                <span className="guarantee-pill">
                  <ShieldCheck size={14} /> 100% Bloom Guarantee
                </span>
              </div>

              {/* Rate Breakdown */}
              <div className="price-metrics-box">
                <div className="per-card-row">
                  <span>Price Per Invitation</span>
                  <div className="rate-num-group">
                    {discountPercent > 0 && (
                      <span className="original-rate">₹{rawPerCard.toFixed(0)}</span>
                    )}
                    <span className="final-rate">₹{discountedPerCard.toFixed(0)}</span>
                    <span className="unit">/card</span>
                  </div>
                </div>

                <div className="total-price-row">
                  <span>Total Investment ({quantity} sets)</span>
                  <div className="total-val">₹{Math.round(totalPrice).toLocaleString('en-IN')}</div>
                </div>

                {totalSavings > 0 && (
                  <div className="savings-highlight-bar">
                    🎉 You save <strong>₹{Math.round(totalSavings).toLocaleString('en-IN')}</strong> ({discountPercent}% Volume Discount)
                  </div>
                )}
              </div>

              {/* What's Included */}
              <div className="included-features-list">
                <div className="inc-item">
                  <Check size={15} className="inc-icon" />
                  <span>{quantity}× Plantable Seed Paper Invitation Cards</span>
                </div>
                <div className="inc-item">
                  <Check size={15} className="inc-icon" />
                  <span>{quantity}× Selected Envelopes</span>
                </div>
                <div className="inc-item">
                  <Check size={15} className="inc-icon" />
                  <span>Complimentary Illustrated Planting Guide Inserts</span>
                </div>
                <div className="inc-item">
                  <Check size={15} className="inc-icon" />
                  <span>Free Digital Proofing &amp; Unlimited Layout Revisions</span>
                </div>
                <div className="inc-item">
                  <Check size={15} className="inc-icon" />
                  <span>Carbon-Neutral Eco Packaging</span>
                </div>
              </div>

              {/* Ecological Impact Counter */}
              <div className="eco-impact-meter">
                <div className="meter-header">
                  <Sprout size={16} color="#4E6E54" />
                  <strong>Your Ecological Harvest</strong>
                </div>
                <div className="meter-stat">
                  <span className="stat-big">~{estimatedBlooms.toLocaleString()}</span>
                  <span className="stat-label">Wildflowers &amp; Pollinators Pledged to Bloom 🌱</span>
                </div>
              </div>

              {/* Shipping & Delivery Timeframe */}
              <div className="delivery-time-box">
                <Truck size={16} />
                <span>
                  Estimated Handcrafting: <strong>5 to 7 Business Days</strong> (Free Express Shipping across India)
                </span>
              </div>

              {/* Actions */}
              <div className="summary-actions">
                <button 
                  className="btn-primary" 
                  style={{ width: '100%' }}
                  onClick={handleOrderQuote}
                >
                  <Sparkles size={18} />
                  <span>Save Specs &amp; Contact Us</span>
                </button>

                <button 
                  className="btn-secondary" 
                  style={{ width: '100%', marginTop: '12px' }}
                  onClick={onOpenSampleKit}
                >
                  <span>Order Free Sample Kit (₹0)</span>
                </button>
              </div>

              <div className="summary-footer-note">
                <HelpCircle size={14} />
                <span>Not ready to commit? Order our physical touch-and-feel sample pack for free.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
