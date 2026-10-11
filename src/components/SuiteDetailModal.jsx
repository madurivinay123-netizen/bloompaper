import React, { useState } from 'react';
import { 
  X, Sprout, Check, Layers, FileText, Mail, Sparkles, Sliders, CheckCircle2, Info, ArrowRight 
} from 'lucide-react';

export default function SuiteDetailModal({ 
  suite, 
  onClose, 
  onSelectForForm, 
  onSelectForCalculator, 
  onOpenSampleKit 
}) {
  const [activeTab, setActiveTab] = useState('all-layers'); // 'cover', 'info', 'seed', 'all-layers'

  if (!suite) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="suite-detail-modal deckle-card" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button 
          className="modal-close-btn" 
          onClick={onClose} 
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="suite-modal-header">
          <div className="suite-header-badge-row">
            <span className="suite-category-pill">{suite.occasion}</span>
            <span className="suite-ensemble-pill">
              <Layers size={13} /> Complete 3-Piece Suite Included
            </span>
            <span className="suite-seed-pill">
              <Sprout size={13} /> {suite.seedsCount}
            </span>
          </div>
          <h2 className="suite-modal-title">{suite.title}</h2>
          <div className="suite-price-bar">
            <span className="suite-rate">₹{suite.basePrice}</span>
            <span className="suite-rate-note">
              per complete 3-piece invitation ensemble (Outer Cover + Info Insert + Living Seed Paper)
            </span>
          </div>

          <div className="suite-explanation-banner">
            <Sparkles size={16} color="#C85A32" />
            <span>
              <strong>We sell the entire complete card ensemble:</strong> You receive the <strong>Big Invitation Cover Jacket</strong>, the <strong>Information Paper Sheet</strong> inside, AND the <strong>Living Seed Paper Sheet</strong>!
            </span>
          </div>

          {/* 3-Piece Layer Switcher Tabs */}
          <div className="suite-layer-tabs">
            <button 
              className={`layer-tab-btn ${activeTab === 'all-layers' ? 'active' : ''}`}
              onClick={() => setActiveTab('all-layers')}
            >
              <Layers size={15} />
              <span>Full 3-Piece Ensemble View</span>
            </button>

            <button 
              className={`layer-tab-btn ${activeTab === 'cover' ? 'active' : ''}`}
              onClick={() => setActiveTab('cover')}
            >
              <Mail size={15} />
              <span>1. Big Cover Jacket</span>
            </button>

            <button 
              className={`layer-tab-btn ${activeTab === 'info' ? 'active' : ''}`}
              onClick={() => setActiveTab('info')}
            >
              <FileText size={15} />
              <span>2. Info Paper Insert</span>
            </button>

            <button 
              className={`layer-tab-btn ${activeTab === 'seed' ? 'active' : ''}`}
              onClick={() => setActiveTab('seed')}
            >
              <Sprout size={15} />
              <span>3. Plantable Seed Paper</span>
            </button>
          </div>
        </div>

        {/* Modal Body: Active Tab Content */}
        <div className="suite-modal-body">
          {/* TAB 1: ALL 3 LAYERS VIEW */}
          {activeTab === 'all-layers' && (
            <div className="all-layers-grid">
              {/* Piece 1: Big Cover */}
              <div className="layer-card-box">
                <div className="layer-card-tag">Piece 1 of 3</div>
                <div className="layer-thumb-wrap">
                  <img src={suite.pieces.cover.image} alt={suite.pieces.cover.name} className="layer-thumb-img" />
                </div>
                <div className="layer-info-pane">
                  <h5>{suite.pieces.cover.name}</h5>
                  <span className="layer-dim">{suite.pieces.cover.dimensions}</span>
                  <p>{suite.pieces.cover.desc}</p>
                  <div className="layer-spec-row">
                    <strong>Closure:</strong> <span>{suite.pieces.cover.closure}</span>
                  </div>
                </div>
              </div>

              {/* Piece 2: Info Paper */}
              <div className="layer-card-box info-paper-box">
                <div className="layer-card-tag">Piece 2 of 3 (Inside Cover)</div>
                <div className="info-paper-visual">
                  <div className="info-paper-content-mock">
                    <div className="mock-ornament">⚜</div>
                    <div className="mock-couple-names">{suite.names}</div>
                    <div className="mock-ceremony">{suite.pieces.infoPaper.ceremony}</div>
                    <div className="mock-date-venue">
                      <p><strong>{suite.pieces.infoPaper.date}</strong></p>
                      <p>{suite.pieces.infoPaper.venue}</p>
                    </div>
                    <div className="mock-note">"{suite.pieces.infoPaper.note}"</div>
                  </div>
                </div>
                <div className="layer-info-pane">
                  <h5>{suite.pieces.infoPaper.name}</h5>
                  <span className="layer-dim">{suite.pieces.infoPaper.dimensions}</span>
                  <p>{suite.pieces.infoPaper.desc}</p>
                  <div className="layer-spec-row">
                    <strong>Schedule:</strong> <span>{suite.pieces.infoPaper.itinerary}</span>
                  </div>
                </div>
              </div>

              {/* Piece 3: Plantable Seed Paper */}
              <div className="layer-card-box seed-paper-box">
                <div className="layer-card-tag seed-tag">Piece 3 of 3 (Living Keepsake)</div>
                <div className="seed-paper-visual">
                  <div className="seed-paper-mock">
                    <div className="seed-pill-on-paper">
                      <Sprout size={13} color="#2D4A30" />
                      <span>{suite.seedsCount}</span>
                    </div>
                    <div className="seed-card-head">
                      🌱 Plant {suite.names}'s Card
                    </div>
                    <div className="seed-dot seed-dot-1"></div>
                    <div className="seed-dot seed-dot-2"></div>
                    <div className="seed-micro-guide">
                      <div>1. Plant flat under 1/8" moist soil</div>
                      <div>2. Water gently with sunshine</div>
                      <div>3. Living flowers sprout in 7 days</div>
                    </div>
                  </div>
                </div>
                <div className="layer-info-pane">
                  <h5>{suite.pieces.seedPaper.name}</h5>
                  <span className="layer-dim">{suite.pieces.seedPaper.dimensions}</span>
                  <p>{suite.pieces.seedPaper.desc}</p>
                  <div className="layer-spec-row">
                    <strong>Seed Type:</strong> <span>{suite.pieces.seedPaper.seedVariety}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: BIG COVER ONLY */}
          {activeTab === 'cover' && (
            <div className="single-piece-view-grid">
              <div className="single-piece-image-col">
                <img src={suite.pieces.cover.image} alt={suite.pieces.cover.name} className="single-piece-big-img" />
              </div>
              <div className="single-piece-details-col">
                <span className="piece-num-badge">Ensemble Piece 1 of 3</span>
                <h3>{suite.pieces.cover.name}</h3>
                <div className="piece-dimension-pill">{suite.pieces.cover.dimensions}</div>
                <p className="piece-full-desc">{suite.pieces.cover.desc}</p>

                <div className="piece-specs-table">
                  <div className="p-spec-row">
                    <strong>Cardstock Grade:</strong>
                    <span>350 GSM 100% Recycled White Cotton Pulp</span>
                  </div>
                  <div className="p-spec-row">
                    <strong>Edge Finish:</strong>
                    <span>Artisanal Torn Deckle Border</span>
                  </div>
                  <div className="p-spec-row">
                    <strong>Motif &amp; Foiling:</strong>
                    <span>{suite.symbols}</span>
                  </div>
                  <div className="p-spec-row">
                    <strong>Enclosure Method:</strong>
                    <span>{suite.pieces.cover.closure}</span>
                  </div>
                </div>

                <div className="piece-note-box">
                  💡 <strong>Purpose:</strong> The Big Cover Card is the centerpiece keepsake. It protects the information paper and seed paper inside while making an unforgettable tactile impression when guests open their mail.
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: INFORMATION PAPER ONLY */}
          {activeTab === 'info' && (
            <div className="single-piece-view-grid">
              <div className="single-piece-image-col">
                <div className="detailed-info-paper-sheet deckle-card">
                  <div className="info-sheet-inner">
                    <div className="info-sheet-crest">⚜</div>
                    <span className="info-sheet-invitation-text">Together with their families</span>
                    <h2 className="info-sheet-couple">{suite.names}</h2>
                    <span className="info-sheet-honor">request the honour of your presence at their</span>
                    <h4 className="info-sheet-event">{suite.pieces.infoPaper.ceremony}</h4>
                    <div className="info-sheet-divider"></div>
                    <div className="info-sheet-when-where">
                      <p className="info-sheet-date">{suite.pieces.infoPaper.date}</p>
                      <p className="info-sheet-venue">{suite.pieces.infoPaper.venue}</p>
                    </div>
                    <p className="info-sheet-itinerary">{suite.pieces.infoPaper.itinerary}</p>
                    <div className="info-sheet-rsvp">
                      <span>RSVP Requested • Formal Attire</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="single-piece-details-col">
                <span className="piece-num-badge">Ensemble Piece 2 of 3 (Inside Cover)</span>
                <h3>{suite.pieces.infoPaper.name}</h3>
                <div className="piece-dimension-pill">{suite.pieces.infoPaper.dimensions}</div>
                <p className="piece-full-desc">{suite.pieces.infoPaper.desc}</p>

                <div className="piece-specs-table">
                  <div className="p-spec-row">
                    <strong>Paper Finish:</strong>
                    <span>180 GSM Archival Cotton Rag (Featherweight Smooth)</span>
                  </div>
                  <div className="p-spec-row">
                    <strong>Printing:</strong>
                    <span>Letterpress Deep Impression &amp; Metallic Calligraphy</span>
                  </div>
                  <div className="p-spec-row">
                    <strong>Ceremony:</strong>
                    <span>{suite.pieces.infoPaper.ceremony}</span>
                  </div>
                  <div className="p-spec-row">
                    <strong>Venue Address:</strong>
                    <span>{suite.pieces.infoPaper.venue}</span>
                  </div>
                </div>

                <div className="piece-note-box">
                  💡 <strong>Purpose:</strong> This sheet slips cleanly into the big cover card. It provides complete clarity on all event timings, directions, dress codes, and digital confirmations so guests stay fully informed.
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: PLANTABLE SEED PAPER ONLY */}
          {activeTab === 'seed' && (
            <div className="single-piece-view-grid">
              <div className="single-piece-image-col">
                <div className="detailed-seed-paper-sheet deckle-card">
                  <div className="seed-sheet-inner">
                    <div className="seed-sheet-header">
                      <Sprout size={28} color="#386641" />
                      <h3>Plant This Paper &amp; Watch Love Bloom</h3>
                      <span>{suite.seedsCount}</span>
                    </div>

                    <div className="seed-sheet-artwork">
                      <div className="living-seed-indicator">
                        <span className="dot-pulse"></span>
                        <span>Viable Non-GMO Living Seed Embedded</span>
                      </div>
                      <p className="seed-sheet-blessing">
                        "As these seeds take root in the soil and grow towards the sun, may our celebration bloom forever in your heart."
                      </p>
                    </div>

                    <div className="seed-sheet-instructions-box">
                      <h5>🌱 Step-by-Step Planting Guide</h5>
                      <ol>
                        {suite.pieces.seedPaper.instructions.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ol>
                    </div>

                    <div className="seed-sheet-footer">
                      <span>100% Recycled Cotton Rag • Zero Waste • Biodegradable</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single-piece-details-col">
                <span className="piece-num-badge seed-badge-highlight">Ensemble Piece 3 of 3 (Inside Card)</span>
                <h3>{suite.pieces.seedPaper.name}</h3>
                <div className="piece-dimension-pill">{suite.pieces.seedPaper.dimensions}</div>
                <p className="piece-full-desc">{suite.pieces.seedPaper.desc}</p>

                <div className="piece-specs-table">
                  <div className="p-spec-row">
                    <strong>Seed Embedding:</strong>
                    <span>{suite.seedsCount} (Clean luxury presentation)</span>
                  </div>
                  <div className="p-spec-row">
                    <strong>Botanical Varieties:</strong>
                    <span>{suite.pieces.seedPaper.seedVariety}</span>
                  </div>
                  <div className="p-spec-row">
                    <strong>Germination Rate:</strong>
                    <span>99.2% Lab-Verified Sprout Success</span>
                  </div>
                  <div className="p-spec-row">
                    <strong>Soil Requirements:</strong>
                    <span>Standard garden soil or potting compost in sunlight</span>
                  </div>
                </div>

                <div className="piece-note-box">
                  💡 <strong>Purpose:</strong> This is the magical piece guests treasure! Instead of tossing the card into the bin after the wedding, guests plant this paper in a garden pot and watch living flowers bloom for months to come.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Footer */}
        <div className="suite-modal-footer">
          <div className="footer-left-info">
            <span className="footer-suite-name">{suite.title}</span>
            <span className="footer-price">₹{suite.basePrice} / 3-piece complete ensemble</span>
          </div>

          <div className="footer-buttons-group">
            {onSelectForForm && (
              <button 
                className="btn-primary"
                onClick={() => {
                  onSelectForForm(suite);
                  onClose();
                }}
              >
                <Check size={16} />
                <span>Select This Design for Inquiry Form</span>
              </button>
            )}

            {onSelectForCalculator && (
              <button 
                className="btn-secondary"
                onClick={() => {
                  onSelectForCalculator(suite);
                  onClose();
                  const el = document.getElementById('calculator');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Sliders size={16} />
                <span>Calculate Pricing in Rupees (₹)</span>
              </button>
            )}

            {onOpenSampleKit && (
              <button 
                className="btn-secondary"
                onClick={() => {
                  onClose();
                  onOpenSampleKit();
                }}
              >
                <span>Request Free Sample Kit (₹0)</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
