import React from 'react';
import { 
  ShieldCheck, 
  Car, 
  Search, 
  Award, 
  CheckCircle2, 
  QrCode, 
  Clock, 
  Star, 
  UserCheck, 
  HeartHandshake, 
  Sparkles,
  ArrowRight,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { PageId } from './Navbar';

interface LandingPageProps {
  onNavigate: (page: PageId) => void;
  onSelectDriverToBook?: (driverId: string) => void;
  onBecomeDriverClick: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onNavigate,
  onBecomeDriverClick,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem', paddingBottom: '4rem' }}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '4.5rem 0 3rem 0',
        overflow: 'hidden',
      }}>
        {/* Decorative Glow */}
        <div style={{
          position: 'absolute',
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, rgba(16, 185, 129, 0.08) 50%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          {/* Pill Badge */}
          <div style={{ display: 'inline-flex', marginBottom: '1.5rem' }}>
            <span className="badge badge-demo" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.45rem 1rem' }}>
              <Sparkles size={14} />
              Next-Gen On-Demand Chauffeur Platform for Private Cars
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.3rem, 5.5vw, 4.2rem)',
            fontWeight: 800,
            maxWidth: '920px',
            margin: '0 auto 1.25rem auto',
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
          }}>
            Your Car. Your Journey.{' '}
            <span className="gradient-text-cyan">A Driver You Can Trust.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#94A3B8',
            maxWidth: '740px',
            margin: '0 auto 2.5rem auto',
            lineHeight: 1.6,
          }}>
            Need a professional chauffeur to drive your personal car? DriveMate Pro connects car owners 
            with rigorously vetted drivers. Featuring transparent behavioural telemetry, pickup 
            verification protocols, and merit-based rewards for elite drivers.
          </p>

          {/* Prominent CTA Buttons */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '3.5rem',
          }}>
            <button
              onClick={() => onNavigate('discovery')}
              className="btn btn-primary btn-lg"
              id="cta-find-driver"
              style={{ minWidth: '220px' }}
            >
              <Search size={20} />
              Find a Driver
              <ArrowRight size={18} />
            </button>

            <button
              onClick={onBecomeDriverClick}
              className="btn btn-secondary btn-lg"
              id="cta-become-driver"
              style={{ minWidth: '200px' }}
            >
              <Award size={20} color="#F59E0B" />
              Become a Driver
            </button>

            <button
              onClick={() => onNavigate('verification')}
              className="btn btn-outline btn-lg"
              title="Test the pickup verification simulator"
            >
              <QrCode size={19} />
              Test Verification Demo
            </button>
          </div>

          {/* Key Value Badges */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            color: '#CBD5E1',
            fontSize: '0.9rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={18} color="#10B981" />
              <span>Identity & License Verified</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={18} color="#06B6D4" />
              <span>Drive Your Personal Vehicle</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CheckCircle2 size={18} color="#F59E0B" />
              <span>Transparent Behaviour Ratings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Statistics Section (Clearly marked as illustrative demo figures) */}
      <section className="container">
        <div style={{
          textAlign: 'center',
          marginBottom: '1rem',
        }}>
          <span className="badge badge-demo" style={{ marginBottom: '0.5rem' }}>
            DEMO FIGURES • ILLUSTRATIVE PLATFORM METRICS
          </span>
          <h2 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>Built on Uncompromising Trust & Safety</h2>
          <p style={{ color: '#94A3B8', fontSize: '0.95rem' }}>Sample benchmarks demonstrating the impact of our chauffeur vetting standard</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem',
        }}>
          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', position: 'relative' }}>
            <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#38BDF8', fontFamily: 'var(--font-display)' }}>
              99.4%
            </div>
            <div style={{ fontWeight: 600, fontSize: '1.05rem', marginTop: '0.25rem' }}>Incident-Free Journeys</div>
            <div style={{ color: '#64748B', fontSize: '0.82rem', marginTop: '0.35rem' }}>
              Rigorous background screening & zero rash driving threshold
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#34D399', fontFamily: 'var(--font-display)' }}>
              45,000+
            </div>
            <div style={{ fontWeight: 600, fontSize: '1.05rem', marginTop: '0.25rem' }}>Chauffeur Hours Logged</div>
            <div style={{ color: '#64748B', fontSize: '0.82rem', marginTop: '0.35rem' }}>
              Across luxury sedans, family SUVs, and long interstate drives
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#FCD34D', fontFamily: 'var(--font-display)' }}>
              4.93 / 5
            </div>
            <div style={{ fontWeight: 600, fontSize: '1.05rem', marginTop: '0.25rem' }}>Average Behaviour Score</div>
            <div style={{ color: '#64748B', fontSize: '0.82rem', marginTop: '0.35rem' }}>
              Rated across 6 objective telematics & etiquette metrics
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#A78BFA', fontFamily: 'var(--font-display)' }}>
              1,200+
            </div>
            <div style={{ fontWeight: 600, fontSize: '1.05rem', marginTop: '0.25rem' }}>Verified Chauffeurs</div>
            <div style={{ color: '#64748B', fontSize: '0.82rem', marginTop: '0.35rem' }}>
              100% police verification & defensive road test validated
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Core Differentiators */}
      <section className="container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Why DriveMate Pro is Different</h2>
          <p style={{ color: '#94A3B8' }}>
            We solve the three biggest anxieties of letting someone else drive your precious car.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}>
          {/* Card 1 */}
          <div className="glass-panel" style={{ padding: '2.2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              background: 'rgba(6, 182, 212, 0.15)',
              border: '1px solid rgba(6, 182, 212, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <TrendingUp size={28} color="#06B6D4" />
            </div>
            <h3 style={{ fontSize: '1.3rem' }}>Transparent Behaviour Ratings</h3>
            <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.6 }}>
              No vague 5-star ratings. Our drivers are scored continuously across six specific behaviours: 
              smooth braking, speed discipline, punctuality, navigation knowledge, courtesy, and reliability.
            </p>
            <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
              <button 
                onClick={() => onNavigate('rewards')} 
                className="btn btn-outline btn-sm"
                style={{ width: '100%' }}
              >
                Inspect Behaviour Scorecard &rarr;
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel" style={{ padding: '2.2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Award size={28} color="#F59E0B" />
            </div>
            <h3 style={{ fontSize: '1.3rem' }}>Merit Rewards For Elite Drivers</h3>
            <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Professional chauffeurs who maintain spotless safety records earn Bronze, Silver, Gold, 
              and Platinum badges. High performers receive higher payout bonuses and priority bookings.
            </p>
            <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
              <button 
                onClick={() => onNavigate('rewards')} 
                className="btn btn-outline btn-sm"
                style={{ width: '100%' }}
              >
                View Reward Tiers & Bonuses &rarr;
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel" style={{ padding: '2.2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              background: 'rgba(16, 185, 129, 0.15)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <ShieldCheck size={28} color="#10B981" />
            </div>
            <h3 style={{ fontSize: '1.3rem' }}>Pickup Identity Verification</h3>
            <p style={{ color: '#94A3B8', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Never risk an unauthorized substitute driver. Our digital pickup protocol cross-verifies 
              the driver's registered facial profile, commercial license, and your car registration number before ignition.
            </p>
            <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
              <button 
                onClick={() => onNavigate('verification')} 
                className="btn btn-outline btn-sm"
                style={{ width: '100%' }}
              >
                Launch Verification Simulator &rarr;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{
        background: 'rgba(15, 23, 42, 0.6)',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        padding: '4.5rem 0',
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 3rem auto' }}>
            <span className="badge badge-demo" style={{ marginBottom: '0.75rem' }}>EASY 4-STEP PROCESS</span>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>How DriveMate Pro Works</h2>
            <p style={{ color: '#94A3B8' }}>Designed specifically for private car owners needing a trusted chauffeur</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            position: 'relative',
          }}>
            {/* Step 1 */}
            <div className="glass-panel" style={{ padding: '1.8rem', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1.2rem',
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'rgba(255, 255, 255, 0.06)',
                fontFamily: 'var(--font-display)',
              }}>
                01
              </div>
              <div style={{ color: '#06B6D4', marginBottom: '1rem' }}>
                <Search size={32} />
              </div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>Select Verified Chauffeur</h4>
              <p style={{ color: '#94A3B8', fontSize: '0.88rem' }}>
                Browse verified drivers filtered by experience, transmission comfort (manual/automatic/EV), and transparent hourly rates.
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass-panel" style={{ padding: '1.8rem', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1.2rem',
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'rgba(255, 255, 255, 0.06)',
                fontFamily: 'var(--font-display)',
              }}>
                02
              </div>
              <div style={{ color: '#F59E0B', marginBottom: '1rem' }}>
                <Clock size={32} />
              </div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>Book by Duration & Route</h4>
              <p style={{ color: '#94A3B8', fontSize: '0.88rem' }}>
                Choose hours needed (from a quick 2-hour city commute to full-day 8-hour executive schedules) with clear upfront pricing.
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass-panel" style={{ padding: '1.8rem', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1.2rem',
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'rgba(255, 255, 255, 0.06)',
                fontFamily: 'var(--font-display)',
              }}>
                03
              </div>
              <div style={{ color: '#10B981', marginBottom: '1rem' }}>
                <QrCode size={32} />
              </div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>Pickup Identity Verification</h4>
              <p style={{ color: '#94A3B8', fontSize: '0.88rem' }}>
                Match driver profile badge, photo ID, and car registration. Only hand over your keys once verification passes!
              </p>
            </div>

            {/* Step 4 */}
            <div className="glass-panel" style={{ padding: '1.8rem', position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1.2rem',
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'rgba(255, 255, 255, 0.06)',
                fontFamily: 'var(--font-display)',
              }}>
                04
              </div>
              <div style={{ color: '#A78BFA', marginBottom: '1rem' }}>
                <Award size={32} />
              </div>
              <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>Enjoy & Reward Excellence</h4>
              <p style={{ color: '#94A3B8', fontSize: '0.88rem' }}>
                Sit back in your personal car. Afterwards, rate the driver's behaviour to directly support their tier rewards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Use Cases */}
      <section className="container">
        <h2 style={{ fontSize: '1.8rem', textAlign: 'center', marginBottom: '2.5rem' }}>
          Perfect Scenarios for DriveMate Pro
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>
          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🍸</div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>Night Outs & Celebrations</h4>
            <p style={{ color: '#94A3B8', fontSize: '0.85rem' }}>
              Take your own car to dinner, weddings, or parties. Have a designated vetted chauffeur drive you home safely.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>💼</div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>Executive City Meetings</h4>
            <p style={{ color: '#94A3B8', fontSize: '0.85rem' }}>
              Prepare your presentations in the rear seat without enduring Hyderabad/Bengaluru traffic stress or parking hunts.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🛣️</div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>Interstate Family Road Trips</h4>
            <p style={{ color: '#94A3B8', fontSize: '0.85rem' }}>
              Enjoy scenic vacations in your spacious SUV while an experienced highway driver handles the ghats and toll-ways.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '1.5rem' }}>
            <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>🏥</div>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>Senior Citizen Hospital Runs</h4>
            <p style={{ color: '#94A3B8', fontSize: '0.85rem' }}>
              Patient, respectful drivers trained to handle smooth stops and assist elderly parents with boarding and doors.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="container">
        <div className="glass-panel" style={{
          padding: '3rem 2rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(15, 23, 42, 0.9) 100%)',
          border: '1px solid rgba(6, 182, 212, 0.3)',
          borderRadius: '24px',
        }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
            Ready to Experience Stress-Free Driving?
          </h2>
          <p style={{ color: '#94A3B8', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1rem' }}>
            Explore our 8 sample verified chauffeurs now and test the booking and verification simulation.
          </p>
          <button
            onClick={() => onNavigate('discovery')}
            className="btn btn-primary btn-lg"
            style={{ minWidth: '220px' }}
          >
            Explore Sample Drivers &rarr;
          </button>
        </div>
      </section>
    </div>
  );
};
