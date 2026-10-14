import React from 'react';
import { ShieldCheck, Heart, Car, Sparkles } from 'lucide-react';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onResetDemo: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onResetDemo }) => {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      background: 'rgba(9, 13, 22, 0.95)',
      padding: '3rem 0 2rem 0',
      marginTop: 'auto',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem',
        }}>
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #06B6D4 0%, #0284C7 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Car size={18} color="#FFFFFF" />
              </div>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.2rem' }}>
                DriveMate <span style={{ color: '#06B6D4' }}>PRO</span>
              </span>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1rem' }}>
              "Trust Every Ride. Reward Every Professional."
              The safest chauffeur platform for private car owners in India.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#10B981', fontSize: '0.8rem' }}>
              <ShieldCheck size={16} /> 100% Police Verified & Alcohol-Tested
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '1rem', color: '#FFFFFF' }}>Prototype Pages</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#94A3B8' }}>
              <li>
                <button onClick={() => onNavigate('landing')} style={{ background: 'none', color: '#94A3B8', cursor: 'pointer', textAlign: 'left' }}>
                  1. Home & Value Proposition
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('discovery')} style={{ background: 'none', color: '#94A3B8', cursor: 'pointer', textAlign: 'left' }}>
                  2. Driver Discovery & Multi-Filter
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('booking')} style={{ background: 'none', color: '#94A3B8', cursor: 'pointer', textAlign: 'left' }}>
                  3. Upfront Booking & Car Details
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('rewards')} style={{ background: 'none', color: '#94A3B8', cursor: 'pointer', textAlign: 'left' }}>
                  4. Behaviour Scorecards & Tiers
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('verification')} style={{ background: 'none', color: '#94A3B8', cursor: 'pointer', textAlign: 'left' }}>
                  5. Pickup Verification Simulator
                </button>
              </li>
            </ul>
          </div>

          {/* Key Differentiators */}
          <div>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '1rem', color: '#FFFFFF' }}>Platform Highlights</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.82rem', color: '#94A3B8' }}>
              <div>• <strong>6-Metric Telematics:</strong> Braking, Speed, Punctuality & Etiquette</div>
              <div>• <strong>Zero Surge Guarantee:</strong> Honest hourly fares in INR</div>
              <div>• <strong>Multi-Point Handoff:</strong> Eliminates unauthorized substitute drivers</div>
              <div>• <strong>Merit Rewards:</strong> Platinum bonuses up to +18%</div>
            </div>
          </div>

          {/* Hackathon Disclaimer & Reset */}
          <div>
            <h4 style={{ fontSize: '0.95rem', marginBottom: '0.75rem', color: '#FCD34D' }}>
              Hackathon Prototype Notice
            </h4>
            <p style={{ color: '#94A3B8', fontSize: '0.8rem', lineHeight: 1.5, marginBottom: '1rem' }}>
              Built for rapid demonstration. State is managed locally. No real drivers are dispatched and no personal data is collected.
            </p>
            <button
              onClick={onResetDemo}
              className="btn btn-secondary btn-sm"
              style={{ width: '100%', fontSize: '0.8rem' }}
            >
              Reset Prototype Data
            </button>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: '#64748B',
        }}>
          <div>
            &copy; 2026 DriveMate Pro — One-Day Hackathon Prototype.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Built with React, Vite & TypeScript
          </div>
        </div>
      </div>
    </footer>
  );
};
