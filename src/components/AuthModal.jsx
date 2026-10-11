import React, { useState } from 'react';
import { X, Lock, Mail, User, Sprout, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AuthModal({ isOpen, initialMode = 'login', onClose }) {
  const [mode, setMode] = useState(initialMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.5 }
    });
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="auth-modal-card deckle-card" 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div className="auth-header">
          <div className="auth-icon-wrap">
            <Sprout size={24} color="#C85A32" />
          </div>
          <h3>{mode === 'login' ? 'Welcome Back to BloomPaper' : 'Join the BloomPaper Studio'}</h3>
          <p>
            {mode === 'login' 
              ? 'Access your digital invitation proofs, track sample kits, and manage orders.' 
              : 'Create an account to save custom suite configurations and receive free proofs.'}
          </p>

          {/* Mode Switch Tabs */}
          <div className="auth-mode-tabs">
            <button 
              className={`tab-btn ${mode === 'login' ? 'active' : ''}`}
              onClick={() => { setMode('login'); setIsSuccess(false); }}
            >
              Client Login
            </button>
            <button 
              className={`tab-btn ${mode === 'register' ? 'active' : ''}`}
              onClick={() => { setMode('register'); setIsSuccess(false); }}
            >
              Create Account / Register
            </button>
          </div>
        </div>

        {isSuccess ? (
          <div className="auth-success-state">
            <CheckCircle2 size={48} color="#4E6E54" />
            <h4>{mode === 'login' ? 'Successfully Signed In!' : 'Account Created with Joy!'}</h4>
            <p>Welcome to BloomPaper. Loading your dashboard...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="auth-form-content">
            {mode === 'register' && (
              <div className="auth-field">
                <label>Full Name</label>
                <div className="input-with-icon">
                  <User size={18} className="field-icon" />
                  <input 
                    type="text" 
                    required 
                    placeholder="Diya Kapoor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
            )}

            <div className="auth-field">
              <label>Email Address</label>
              <div className="input-with-icon">
                <Mail size={18} className="field-icon" />
                <input 
                  type="email" 
                  required 
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="auth-field">
              <label>Password</label>
              <div className="input-with-icon">
                <Lock size={18} className="field-icon" />
                <input 
                  type="password" 
                  required 
                  placeholder="••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {mode === 'register' && (
              <div className="auth-field">
                <label>Estimated Event Date (Optional)</label>
                <input 
                  type="date" 
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                />
              </div>
            )}

            {mode === 'login' && (
              <div className="auth-aux-row">
                <label className="remember-checkbox">
                  <input type="checkbox" defaultChecked />
                  <span>Remember me</span>
                </label>
                <a href="#contact" onClick={onClose} className="forgot-pass-link">
                  Forgot password?
                </a>
              </div>
            )}

            <button type="submit" className="btn-primary" style={{ width: '100%' }}>
              <span>{mode === 'login' ? 'Sign In to Studio' : 'Create Free Account'}</span>
              <ArrowRight size={16} />
            </button>

            <div className="auth-divider">
              <span>Or continue with</span>
            </div>

            <div className="social-auth-grid">
              <button 
                type="button" 
                className="social-auth-btn"
                onClick={() => {
                  setIsSuccess(true);
                  setTimeout(() => { setIsSuccess(false); onClose(); }, 1500);
                }}
              >
                <span>Google</span>
              </button>
              <button 
                type="button" 
                className="social-auth-btn"
                onClick={() => {
                  setIsSuccess(true);
                  setTimeout(() => { setIsSuccess(false); onClose(); }, 1500);
                }}
              >
                <span>Apple</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
