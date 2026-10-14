import React, { useState } from 'react';
import { 
  Driver, 
  RewardTier, 
  BehaviourScores 
} from '../data/drivers';
import { 
  Award, 
  ShieldCheck, 
  TrendingUp, 
  Compass, 
  Clock, 
  Smile, 
  Zap, 
  CheckCircle2, 
  Sparkles, 
  Coins, 
  User, 
  ChevronRight, 
  AlertCircle,
  Car
} from 'lucide-react';

interface TrustRewardsPageProps {
  drivers: Driver[];
  selectedDriver: Driver | null;
  onSelectDriver: (driver: Driver) => void;
  onBookThisDriver: (driver: Driver) => void;
}

export const TrustRewardsPage: React.FC<TrustRewardsPageProps> = ({
  drivers,
  selectedDriver,
  onSelectDriver,
  onBookThisDriver,
}) => {
  const currentDriver = selectedDriver || drivers[0];
  const [activeTab, setActiveTab] = useState<'scorecard' | 'rewardsProgram' | 'driverDashboard'>('scorecard');

  // Categories config
  const categories: {
    key: keyof BehaviourScores;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
  }[] = [
    {
      key: 'professionalism',
      title: 'Professional Behaviour',
      description: 'Chauffeur etiquette, non-intrusive communication, grooming, and privacy respect.',
      icon: <Award size={20} color="#38BDF8" />,
      color: '#38BDF8',
    },
    {
      key: 'drivingSafety',
      title: 'Driving Safety & Telematics',
      description: 'Defensive lane changes, progressive braking, zero harsh accelerations or tailgating.',
      icon: <ShieldCheck size={20} color="#10B981" />,
      color: '#10B981',
    },
    {
      key: 'punctuality',
      title: 'Punctuality & Readiness',
      description: 'Arriving 10 minutes prior to pickup, pre-trip vehicle walkaround inspection.',
      icon: <Clock size={20} color="#F59E0B" />,
      color: '#F59E0B',
    },
    {
      key: 'routeAwareness',
      title: 'Route Awareness & Traffic Navigation',
      description: 'Proactive avoidance of bottleneck jams, toll lane expertise, and city mastery.',
      icon: <Compass size={20} color="#8B5CF6" />,
      color: '#8B5CF6',
    },
    {
      key: 'customerComfort',
      title: 'Customer Comfort & Cabin Serenity',
      description: 'Smooth throttle modulation over speed bumps, climate control, and cabin silence.',
      icon: <Smile size={20} color="#EC4899" />,
      color: '#EC4899',
    },
    {
      key: 'reliability',
      title: 'Reliability & Dedication',
      description: 'Zero last-minute trip cancellations, adherence to reserved schedule duration.',
      icon: <Zap size={20} color="#14B8A6" />,
      color: '#14B8A6',
    },
  ];

  // Tier criteria
  const tiers: {
    name: RewardTier;
    badgeClass: string;
    scoreReq: string;
    bonus: string;
    perks: string[];
  }[] = [
    {
      name: 'Platinum',
      badgeClass: 'badge-platinum',
      scoreReq: '97.0+ Overall Score & 500+ Trips',
      bonus: '+18% Hourly Bonus Payout',
      perks: [
        'Eligible for Luxury & Supercar bookings (BMW, Mercedes, Audi, Porsche)',
        'Priority dispatch on high-value interstate road trips',
        'Direct customer re-hire request preference',
        'Complimentary annual chauffeur health insurance subsidy',
      ],
    },
    {
      name: 'Gold',
      badgeClass: 'badge-gold',
      scoreReq: '94.0 - 96.9 Overall Score & 250+ Trips',
      bonus: '+10% Hourly Bonus Payout',
      perks: [
        'Eligible for Full-Day & Corporate Fleet bookings',
        'Fuel stipend vouchers for transit legs',
        'Weekly driver incentives guarantee',
      ],
    },
    {
      name: 'Silver',
      badgeClass: 'badge-silver',
      scoreReq: '90.0 - 93.9 Overall Score & 50+ Trips',
      bonus: '+5% Hourly Bonus Payout',
      perks: [
        'Standard city bookings eligibility',
        'Advanced defensive driving telematics masterclasses',
      ],
    },
    {
      name: 'Bronze',
      badgeClass: 'badge-bronze',
      scoreReq: 'Initial Onboarding & Verified Baseline',
      bonus: 'Standard Base Rate',
      perks: [
        'Entry-level city errand trips with mentor monitoring',
        'Orientation kit and commercial vehicle safety toolkit',
      ],
    },
  ];

  return (
    <div className="container" style={{ paddingBottom: '5rem', paddingTop: '1.5rem' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="badge badge-demo" style={{ marginBottom: '0.5rem' }}>
          PAGE 4 • DRIVER BEHAVIOUR SCORECARD & REWARD TIERS
        </span>
        <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '0.4rem' }}>
          Trust Scoring & Merit Chauffeur Rewards
        </h1>
        <p style={{ color: '#94A3B8', fontSize: '0.95rem', maxWidth: '750px', margin: '0 auto' }}>
          DriveMate Pro evaluates drivers on six granular performance pillars. Elite chauffeurs receive 
          lucrative bonuses and premium car assignments.
        </p>

        {/* Disclaimer alert */}
        <div style={{
          marginTop: '1rem',
          display: 'inline-block',
          background: 'rgba(245, 158, 11, 0.1)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: '10px',
          padding: '0.4rem 1rem',
          fontSize: '0.8rem',
          color: '#FCD34D',
        }}>
          💡 Note: Scores shown are demonstration samples illustrating our proprietary 6-point scoring model.
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        marginBottom: '2rem',
        flexWrap: 'wrap',
      }}>
        <button
          onClick={() => setActiveTab('scorecard')}
          className={`btn ${activeTab === 'scorecard' ? 'btn-primary' : 'btn-secondary'}`}
        >
          <TrendingUp size={16} />
          Driver Behaviour Scorecard
        </button>

        <button
          onClick={() => setActiveTab('rewardsProgram')}
          className={`btn ${activeTab === 'rewardsProgram' ? 'btn-primary' : 'btn-secondary'}`}
        >
          <Award size={16} />
          Bronze-to-Platinum Reward Tiers
        </button>

        <button
          onClick={() => setActiveTab('driverDashboard')}
          className={`btn ${activeTab === 'driverDashboard' ? 'btn-emerald' : 'btn-secondary'}`}
        >
          <Coins size={16} />
          Driver Partner Earnings Dashboard
        </button>
      </div>

      {/* TAB 1: Behaviour Scorecard */}
      {activeTab === 'scorecard' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Driver Selector strip */}
          <div className="glass-panel" style={{
            padding: '1.25rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img
                src={currentDriver.avatar}
                alt={currentDriver.name}
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  objectFit: 'cover',
                  border: '2px solid #06B6D4',
                }}
              />
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{currentDriver.name}</h3>
                  <span className={`badge badge-${currentDriver.rewardTier.toLowerCase()}`}>
                    {currentDriver.rewardTier} Tier
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '2px' }}>
                  {currentDriver.experienceYears} Years Chauffeur Exp • {currentDriver.totalTrips} Trips Completed
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>Select Driver:</span>
              <select
                value={currentDriver.id}
                onChange={(e) => {
                  const d = drivers.find(dr => dr.id === e.target.value);
                  if (d) onSelectDriver(d);
                }}
                className="form-control"
                style={{ width: 'auto', minWidth: '220px' }}
              >
                {drivers.map(d => (
                  <option key={d.id} value={d.id}>
                    {d.name} ({d.rewardTier} • {d.overallScore}/100)
                  </option>
                ))}
              </select>

              <button
                onClick={() => onBookThisDriver(currentDriver)}
                className="btn btn-primary btn-sm"
              >
                Book This Chauffeur &rarr;
              </button>
            </div>
          </div>

          {/* Overall Score Highlight Banner */}
          <div className="glass-panel" style={{
            padding: '2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center',
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(16, 185, 129, 0.05) 100%)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <div style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: 'rgba(6, 182, 212, 0.15)',
                border: '3px solid #06B6D4',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 25px rgba(6, 182, 212, 0.3)',
              }}>
                <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#FFFFFF', lineHeight: 1 }}>
                  {currentDriver.overallScore}
                </span>
                <span style={{ fontSize: '0.65rem', color: '#38BDF8', textTransform: 'uppercase', marginTop: '2px' }}>
                  / 100 Score
                </span>
              </div>

              <div>
                <span className="badge badge-verified" style={{ marginBottom: '0.4rem' }}>
                  TOP 3% IN CITY
                </span>
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Exceptional Chauffeur Rating</h3>
                <p style={{ color: '#94A3B8', fontSize: '0.82rem', marginTop: '0.2rem' }}>
                  Consistently exceeds benchmark across smooth deceleration, cabin silence, and route accuracy.
                </p>
              </div>
            </div>

            {/* Badges unlocked */}
            <div>
              <div style={{ fontSize: '0.78rem', color: '#64748B', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>
                Verified Accomplishment Badges
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {currentDriver.recentBadges.map((badge, idx) => (
                  <span key={idx} style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '8px',
                    padding: '0.35rem 0.65rem',
                    fontSize: '0.78rem',
                    color: '#FCD34D',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                    <Sparkles size={13} /> {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 6 Granular Category Score Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem',
          }}>
            {categories.map((cat) => {
              const scoreVal = currentDriver.behaviourScores[cat.key];
              return (
                <div key={cat.key} className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        {cat.icon}
                      </div>
                      <h4 style={{ fontSize: '1rem', margin: 0 }}>{cat.title}</h4>
                    </div>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: cat.color }}>
                      {scoreVal}%
                    </span>
                  </div>

                  <p style={{ color: '#94A3B8', fontSize: '0.82rem', margin: 0 }}>
                    {cat.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="progress-bar-bg" style={{ marginTop: 'auto' }}>
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${scoreVal}%`,
                        background: cat.color,
                        boxShadow: `0 0 10px ${cat.color}66`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Customer Reviews & Feedback snippet */}
          <div className="glass-panel" style={{ padding: '1.75rem' }}>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Smile size={18} color="#10B981" />
              Recent Private Car Owner Feedback for {currentDriver.name}
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {currentDriver.reviews.map((rev) => (
                <div key={rev.id} style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                    <strong style={{ fontSize: '0.9rem' }}>{rev.author}</strong>
                    <span style={{ fontSize: '0.75rem', color: '#64748B' }}>{rev.date}</span>
                  </div>
                  <div style={{ color: '#FCD34D', fontSize: '0.8rem', marginBottom: '0.4rem' }}>
                    {'★'.repeat(rev.rating)}
                  </div>
                  <p style={{ color: '#94A3B8', fontSize: '0.84rem', margin: 0, fontStyle: 'italic' }}>
                    "{rev.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Bronze to Platinum Tiers */}
      {activeTab === 'rewardsProgram' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>
              The 4 Chauffeur Excellence Tiers
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '0.92rem' }}>
              Unlike generic ride platforms that treat drivers as anonymous commodities, DriveMate Pro 
              rewards exceptional road conduct with higher income bonuses and exclusive vehicle tiers.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}>
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="glass-panel"
                style={{
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative',
                  border: tier.name === 'Platinum' ? '1px solid rgba(6, 182, 212, 0.5)' : undefined,
                  boxShadow: tier.name === 'Platinum' ? '0 0 25px rgba(6, 182, 212, 0.15)' : undefined,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className={`badge ${tier.badgeClass}`} style={{ fontSize: '0.85rem' }}>
                    {tier.name}
                  </span>
                  <span style={{ color: '#38BDF8', fontWeight: 700, fontSize: '0.88rem' }}>
                    {tier.bonus}
                  </span>
                </div>

                <div style={{ fontSize: '0.78rem', color: '#94A3B8', background: 'rgba(255, 255, 255, 0.03)', padding: '0.5rem', borderRadius: '8px' }}>
                  <strong>Requirement:</strong> {tier.scoreReq}
                </div>

                <div style={{ marginTop: '0.5rem' }}>
                  <div style={{ fontSize: '0.78rem', color: '#64748B', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: 600 }}>
                    Unlocked Privileges
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {tier.perks.map((perk, i) => (
                      <li key={i} style={{ fontSize: '0.82rem', color: '#CBD5E1', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <CheckCircle2 size={14} color="#10B981" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: Driver Partner Earnings Dashboard Simulation */}
      {activeTab === 'driverDashboard' && (
        <div style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" style={{
            padding: '2rem',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(15, 23, 42, 0.95) 100%)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="badge badge-demo" style={{ marginBottom: '0.5rem' }}>
                  DRIVER PARTNER SIMULATOR VIEW
                </span>
                <h2 style={{ fontSize: '1.6rem', marginTop: '0.25rem' }}>
                  Welcome Back, {currentDriver.name}
                </h2>
                <div style={{ color: '#94A3B8', fontSize: '0.85rem' }}>
                  Registered ID: <span style={{ color: '#38BDF8' }}>DMP-CHAUFFEUR-089</span> • Status: Active Partner
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <span className="badge badge-platinum" style={{ fontSize: '0.85rem' }}>
                  {currentDriver.rewardTier} Status
                </span>
                <div style={{ fontSize: '0.75rem', color: '#34D399', marginTop: '4px' }}>
                  +18% Hourly Incentive Multiplier Active
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              marginTop: '1.75rem',
            }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase' }}>This Week's Earnings</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#34D399', marginTop: '0.25rem' }}>₹14,850</div>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>38 Paid Driving Hours</div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase' }}>Safety Reward Bonus Pool</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FCD34D', marginTop: '0.25rem' }}>₹3,500</div>
                <div style={{ fontSize: '0.72rem', color: '#34D399' }}>Zero harsh telematics hits</div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase' }}>Active Trust Score</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#38BDF8', marginTop: '0.25rem' }}>{currentDriver.overallScore}</div>
                <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>Rated across 6 metrics</div>
              </div>
            </div>

            {/* Next Tier Progression */}
            <div style={{
              marginTop: '1.5rem',
              background: 'rgba(6, 182, 212, 0.07)',
              padding: '1.25rem',
              borderRadius: '12px',
              border: '1px solid rgba(6, 182, 212, 0.2)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.4rem' }}>
                <span style={{ fontWeight: 600, color: '#38BDF8' }}>Tier Retention Status</span>
                <span style={{ color: '#94A3B8' }}>100% Retained for next billing cycle</span>
              </div>
              <div className="progress-bar-bg">
                <div className="progress-bar-fill" style={{ width: '98%', background: '#06B6D4' }} />
              </div>
              <div style={{ fontSize: '0.75rem', color: '#94A3B8', marginTop: '0.4rem' }}>
                Keep smooth braking score above 95% over the next 12 trips to unlock the Quarterly Chauffeur Stipend.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
