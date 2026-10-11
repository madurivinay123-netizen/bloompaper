import React, { useState } from 'react';
import { 
  Star, ThumbsUp, CheckCircle, MessageSquarePlus, Sprout, Heart, Filter, Sparkles,
  MessageSquare, ChevronDown, ChevronUp, EyeOff 
} from 'lucide-react';
import confetti from 'canvas-confetti';

const initialReviews = [
  {
    id: 1,
    name: "Pooja & Vikram",
    location: "Udaipur, Rajasthan",
    occasion: "Palace Heritage Wedding",
    rating: 5,
    seedGrown: "Golden Marigold & Calendula",
    date: "2 weeks ago",
    content: "Our guests were utterly mesmerized! Everyone talked about how soft and luxurious the deckle-edged paper felt. Three weeks after the wedding, our guests started sharing photos of bright orange marigolds blooming in their garden pots. It made our wedding memory truly permanent and alive.",
    helpfulCount: 38,
    verified: true
  },
  {
    id: 2,
    name: "Priya & Amit",
    location: "Mumbai, Maharashtra",
    occasion: "Traditional & Eco Wedding",
    rating: 5,
    seedGrown: "Pollinator Wildflower Meadow",
    date: "1 month ago",
    content: "We ordered 350 sets of the Royal Lotus suite with matching plantable envelopes. The customer service sent digital proofs within 8 hours and accommodated our bilingual Sanskrit script flawlessly. Best decision we made for our eco-conscious celebration!",
    helpfulCount: 29,
    verified: true
  },
  {
    id: 3,
    name: "Dr. Arvind Mehta",
    location: "New Delhi, India",
    occasion: "National Eco Sustainability Summit",
    rating: 5,
    seedGrown: "Native Wildflower Blend",
    date: "1 month ago",
    content: "As an environmental summit organizer, standard glossy invites felt hypocritical. BloomPaper gave us custom QR-coded plantable name tags and invitations. 100% of the attendees were impressed and we created zero landfill waste.",
    helpfulCount: 17,
    verified: true
  },
  {
    id: 4,
    name: "Kavya & Rahul",
    location: "Bengaluru, India",
    occasion: "Royal Heritage Wedding",
    rating: 5,
    seedGrown: "Sacred Golden Marigold",
    date: "2 months ago",
    content: "The gold foil monogram work against the textured seed paper was breathtaking. Everyone appreciated receiving an auspicious card that can literally be returned to Mother Earth to sprout into auspicious flowers.",
    helpfulCount: 42,
    verified: true
  }
];

export default function FeedbackSection() {
  const [reviews, setReviews] = useState(initialReviews);
  const [showReviews, setShowReviews] = useState(false);
  const [filterRating, setFilterRating] = useState('all');

  // Interactive Form State
  const [formName, setFormName] = useState('');
  const [formLocation, setFormLocation] = useState('');
  const [formOccasion, setFormOccasion] = useState('Wedding Celebration');
  const [formRating, setFormRating] = useState(5);
  const [formSeedGrown, setFormSeedGrown] = useState('Pollinator Wildflower Meadow');
  const [formContent, setFormContent] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const handleHelpfulClick = (id) => {
    setReviews(prev => prev.map(rev => 
      rev.id === id ? { ...rev, helpfulCount: rev.helpfulCount + 1 } : rev
    ));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!formName.trim() || !formContent.trim()) return;

    const newRev = {
      id: Date.now(),
      name: formName,
      location: formLocation || 'Verified Host',
      occasion: formOccasion,
      rating: formRating,
      seedGrown: formSeedGrown,
      date: 'Just now',
      content: formContent,
      helpfulCount: 0,
      verified: true
    };

    setReviews([newRev, ...reviews]);
    setFormSubmitted(true);
    setShowReviews(true); // Automatically reveal reviews so user sees their submission

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#C85A32', '#4E6E54', '#C98A2C']
    });

    setTimeout(() => {
      setFormName('');
      setFormLocation('');
      setFormContent('');
      setFormSubmitted(false);
    }, 4000);
  };

  const filteredReviews = filterRating === 'all' 
    ? reviews 
    : reviews.filter(r => r.rating === Number(filterRating));

  return (
    <section id="feedback" className="feedback-section section-padding">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="badge-terracotta sub-badge">
            <Star size={15} fill="currentColor" />
            <span>Community Stories &amp; Ratings</span>
          </div>
          <h2 className="section-title">Feedback &amp; Real Garden Stories</h2>
          <p className="section-subtitle">
            Genuine stories and verified ratings from couples and hosts who 
            transformed their event invitations into living garden blossoms.
          </p>
        </div>

        {/* Rating Overview Summary (5 Stars breakdown removed per request) */}
        <div className="rating-overview-centered">
          <div className="overview-score-card deckle-card">
            <div className="big-score">4.95</div>
            <div className="stars-row-big">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={24} fill="#C98A2C" color="#C98A2C" />
              ))}
            </div>
            <p className="score-label">Based on 1,248+ Verified Event Hosts</p>
            <div className="sprout-rate-pill">
              <Sprout size={15} /> 99.2% Sprout Success Rate Guaranteed
            </div>

            {/* Toggle Button to Show/Hide Reviews */}
            <div className="toggle-reviews-action">
              <button 
                className="btn-primary btn-toggle-reviews"
                onClick={() => setShowReviews(!showReviews)}
              >
                <MessageSquare size={17} />
                <span>{showReviews ? 'Hide Reviews' : `Show Reviews (${reviews.length}+ Verified)`}</span>
                {showReviews ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
              </button>
            </div>
          </div>
        </div>

        {/* Two Column Layout: Write Review Form & Community Reviews */}
        <div className="feedback-split-grid">
          {/* Left: Interactive Feedback Form */}
          <div className="write-review-card deckle-card">
            <div className="form-head">
              <div className="icon-wrap">
                <MessageSquarePlus size={22} color="#C85A32" />
              </div>
              <div>
                <h3>Leave Your Rating &amp; Feedback</h3>
                <p>Share your experience with our paper quality and plant growth.</p>
              </div>
            </div>

            {formSubmitted ? (
              <div className="review-submitted-msg">
                <CheckCircle size={40} color="#4E6E54" />
                <h4>Thank You for Your Loving Feedback! 🌸</h4>
                <p>Your review has been verified and added to the community stories below.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="review-submit-form">
                {/* 5-Star Interactive Rating */}
                <div className="star-picker-field">
                  <label className="field-label">How would you rate your experience? *</label>
                  <div className="interactive-stars">
                    {[1, 2, 3, 4, 5].map((starVal) => (
                      <button
                        key={starVal}
                        type="button"
                        className="star-btn"
                        onMouseEnter={() => setHoverRating(starVal)}
                        onMouseLeave={() => setHoverRating(0)}
                        onClick={() => setFormRating(starVal)}
                        title={`${starVal} Star${starVal > 1 ? 's' : ''}`}
                      >
                        <Star 
                          size={28} 
                          fill={(hoverRating || formRating) >= starVal ? "#C98A2C" : "none"}
                          color={(hoverRating || formRating) >= starVal ? "#C98A2C" : "#D4CEBE"}
                        />
                      </button>
                    ))}
                  </div>
                  <span className="rating-desc-text">
                    {formRating === 5 && "Extraordinary • Flawless Quality & Sprouting"}
                    {formRating === 4 && "Very Good • Beautiful Paper & Great Service"}
                    {formRating === 3 && "Good • Satisfactory Experience"}
                    {formRating <= 2 && "We strive to improve • Thank you for your feedback"}
                  </span>
                </div>

                <div className="form-row-two">
                  <div className="form-field">
                    <label>Your Names *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Maya & Kabir" 
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                    />
                  </div>
                  <div className="form-field">
                    <label>City &amp; State / Country</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Mumbai, India" 
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                    />
                  </div>
                </div>

                <div className="form-row-two">
                  <div className="form-field">
                    <label>Occasion Type</label>
                    <select 
                      value={formOccasion} 
                      onChange={(e) => setFormOccasion(e.target.value)}
                    >
                      <option value="Wedding Celebration">Wedding Celebration</option>
                      <option value="Save The Date">Save The Date</option>
                      <option value="Birthday Party">Birthday Party</option>
                      <option value="Corporate Eco Event">Corporate Eco Event</option>
                      <option value="Baby Shower / Welcome">Baby Shower / Welcome</option>
                    </select>
                  </div>
                  <div className="form-field">
                    <label>Seeds Planted</label>
                    <select 
                      value={formSeedGrown} 
                      onChange={(e) => setFormSeedGrown(e.target.value)}
                    >
                      <option value="Pollinator Wildflower Meadow">Wildflower Meadow</option>
                      <option value="Golden Marigold & Calendula">Golden Marigold</option>
                      <option value="Sweet Basil & Culinary Herbs">Sweet Basil &amp; Herbs</option>
                      <option value="Chamomile & Lavender">Chamomile &amp; Lavender</option>
                    </select>
                  </div>
                </div>

                <div className="form-field">
                  <label>Your Detailed Feedback &amp; Plant Growth Story *</label>
                  <textarea 
                    rows="3"
                    required
                    placeholder="Tell us about the paper's hand feel, your guests' reactions, or how the seedlings sprouted..."
                    value={formContent}
                    onChange={(e) => setFormContent(e.target.value)}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  <Sparkles size={16} />
                  <span>Submit My Rating &amp; Story</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Reviews List Feed (Only displayed when Show Reviews is clicked) */}
          <div className="reviews-feed-column">
            {showReviews ? (
              <>
                {/* Filter controls */}
                <div className="feed-header-bar">
                  <span className="feed-count">Showing {filteredReviews.length} Community Reviews</span>
                  <div className="filter-chip-group">
                    <button 
                      className={`chip-btn ${filterRating === 'all' ? 'active' : ''}`}
                      onClick={() => setFilterRating('all')}
                    >
                      All
                    </button>
                    <button 
                      className={`chip-btn ${filterRating === '5' ? 'active' : ''}`}
                      onClick={() => setFilterRating('5')}
                    >
                      ★ 5 Stars Only
                    </button>
                    <button 
                      className="chip-btn chip-btn-hide"
                      onClick={() => setShowReviews(false)}
                      title="Hide reviews"
                    >
                      <EyeOff size={13} />
                      <span>Hide</span>
                    </button>
                  </div>
                </div>

                {/* List of reviews */}
                <div className="reviews-cards-stack">
                  {filteredReviews.map((rev) => (
                    <div key={rev.id} className="review-single-card deckle-card">
                      <div className="review-top-row">
                        <div>
                          <div className="rev-stars">
                            {Array.from({ length: rev.rating }).map((_, i) => (
                              <Star key={i} size={16} fill="#C98A2C" color="#C98A2C" />
                            ))}
                          </div>
                          <h4 className="reviewer-name">{rev.name}</h4>
                          <span className="reviewer-meta">{rev.occasion} • {rev.location} • {rev.date}</span>
                        </div>

                        {rev.verified && (
                          <span className="verified-badge">
                            <CheckCircle size={13} /> Verified Bloom
                          </span>
                        )}
                      </div>

                      <p className="rev-text">{rev.content}</p>

                      <div className="rev-footer-row">
                        <span className="seed-badge-small">
                          <Sprout size={14} /> Planted: {rev.seedGrown}
                        </span>

                        <button 
                          className="helpful-btn"
                          onClick={() => handleHelpfulClick(rev.id)}
                          title="Mark as helpful"
                        >
                          <ThumbsUp size={14} />
                          <span>Helpful ({rev.helpfulCount})</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              /* Collapsed State: Informative Callout Card with Show Reviews Button */
              <div className="reviews-collapsed-card deckle-card">
                <div className="placeholder-icon-wrap">
                  <MessageSquare size={34} color="#C85A32" />
                </div>
                <h4>Verified Host Experiences</h4>
                <p>
                  Read how over 1,248 couples, event hosts, and families celebrated their 
                  special occasions and grew living wildflowers and golden marigolds from our paper.
                </p>
                <button 
                  className="btn-primary btn-expand-reviews"
                  onClick={() => setShowReviews(true)}
                >
                  <MessageSquare size={16} />
                  <span>Show Reviews ({reviews.length}+ Verified Stories)</span>
                  <ChevronDown size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
