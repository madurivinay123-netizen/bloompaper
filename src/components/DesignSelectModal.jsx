import React from 'react';
import { X, Sprout, Check, Layers, Eye, Sparkles } from 'lucide-react';
import { suiteCatalog } from '../data/suiteCatalog';

export default function DesignSelectModal({ 
  isOpen, 
  onClose, 
  selectedSuiteId, 
  onSelectSuite, 
  onInspectSuite 
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="design-select-modal deckle-card" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="design-select-header">
          <div>
            <div className="badge-terracotta sub-badge" style={{ marginBottom: '6px' }}>
              <Layers size={14} />
              <span>Complete 3-Piece Invitation Ensembles</span>
            </div>
            <h3 className="modal-title">Select an Invitation Design</h3>
            <p className="modal-subtitle">
              Every design includes the <strong>Big Cover Card</strong>, the inner <strong>Information Paper Sheet</strong>, 
              and the living <strong>Plantable Seed Paper Sheet</strong>.
            </p>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Catalog Grid */}
        <div className="design-catalog-grid">
          {suiteCatalog.map((suite) => {
            const isSelected = selectedSuiteId === suite.id;

            return (
              <div 
                key={suite.id} 
                className={`design-pick-card ${isSelected ? 'selected' : ''}`}
                onClick={() => onInspectSuite(suite)}
                title="Click anywhere to inspect the entire card (Big Cover + Info Paper + Seed Paper)"
              >
                {/* Visual Thumbnail */}
                <div className="design-thumb-wrapper">
                  <img src={suite.image} alt={suite.title} className="design-thumb-photo" />
                  <div className="design-seed-badge">
                    <Sprout size={12} color="#2D4A30" />
                    <span>1–2 Seeds</span>
                  </div>
                  <div className="thumb-inspect-hover">
                    <Eye size={18} />
                    <span>Click to View Entire Card (3 Pieces)</span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="design-info-pane">
                  <span className="design-occasion-tag">{suite.occasion}</span>
                  <h4 className="design-card-title">{suite.title}</h4>
                  <div className="design-price-row">
                    <span className="design-rate">₹{suite.basePrice}</span>
                    <span className="design-rate-label">/ complete 3-piece suite</span>
                  </div>

                  <div className="design-ensemble-includes">
                    <span className="inc-pill-sm">1. Big Cover</span>
                    <span className="inc-pill-sm">2. Info Paper</span>
                    <span className="inc-pill-sm seed-pill-sm">3. Seed Paper</span>
                  </div>

                  {/* Actions */}
                  <div className="design-card-buttons">
                    <button 
                      type="button"
                      className="btn-inspect-small"
                      onClick={(e) => {
                        e.stopPropagation();
                        onInspectSuite(suite);
                      }}
                      title="Inspect Cover, Info Paper & Seed Paper"
                    >
                      <Eye size={14} />
                      <span>See Entire Card</span>
                    </button>

                    <button 
                      type="button"
                      className={`btn-select-design ${isSelected ? 'is-selected' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectSuite(suite);
                        onClose();
                      }}
                      title="Select this card design for inquiry form"
                    >
                      {isSelected ? (
                        <>
                          <Check size={14} />
                          <span>Selected</span>
                        </>
                      ) : (
                        <span>Select Card</span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
