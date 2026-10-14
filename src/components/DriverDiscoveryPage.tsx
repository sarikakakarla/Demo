import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Star, 
  ShieldCheck, 
  Award, 
  Clock, 
  MapPin, 
  Filter, 
  RotateCcw, 
  CheckCircle2, 
  Car,
  ChevronRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { Driver, RewardTier } from '../data/drivers';

interface DriverDiscoveryPageProps {
  drivers: Driver[];
  onSelectDriverForBooking: (driver: Driver) => void;
  onViewDriverScorecard: (driver: Driver) => void;
}

export const DriverDiscoveryPage: React.FC<DriverDiscoveryPageProps> = ({
  drivers,
  onSelectDriverForBooking,
  onViewDriverScorecard,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState<string>('All');
  const [minRating, setMinRating] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(350);
  const [minExperience, setMinExperience] = useState<number>(0);
  const [sortBy, setSortBy] = useState<'rating' | 'experience' | 'priceAsc' | 'trips'>('rating');

  // Filter and sort
  const filteredDrivers = useMemo(() => {
    return drivers.filter((driver) => {
      // Search term
      const matchesSearch = 
        driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        driver.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        driver.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        driver.languages.some(l => l.toLowerCase().includes(searchQuery.toLowerCase()));

      // Vehicle expertise
      const matchesExpertise = 
        selectedExpertise === 'All' ||
        driver.vehicleExpertise.includes(selectedExpertise as any);

      // Min rating
      const matchesRating = driver.rating >= minRating;

      // Max price
      const matchesPrice = driver.hourlyRateINR <= maxPrice;

      // Min experience
      const matchesExperience = driver.experienceYears >= minExperience;

      return matchesSearch && matchesExpertise && matchesRating && matchesPrice && matchesExperience;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'experience') return b.experienceYears - a.experienceYears;
      if (sortBy === 'priceAsc') return a.hourlyRateINR - b.hourlyRateINR;
      if (sortBy === 'trips') return b.totalTrips - a.totalTrips;
      return 0;
    });
  }, [drivers, searchQuery, selectedExpertise, minRating, maxPrice, minExperience, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedExpertise('All');
    setMinRating(0);
    setMaxPrice(350);
    setMinExperience(0);
    setSortBy('rating');
  };

  const getTierBadge = (tier: RewardTier) => {
    switch (tier) {
      case 'Platinum':
        return <span className="badge badge-platinum"><Sparkles size={12} /> Platinum Pro</span>;
      case 'Gold':
        return <span className="badge badge-gold"><Award size={12} /> Gold Star</span>;
      case 'Silver':
        return <span className="badge badge-silver"><Award size={12} /> Silver Chauffeur</span>;
      case 'Bronze':
        return <span className="badge badge-bronze"><Award size={12} /> Bronze Chauffeur</span>;
    }
  };

  return (
    <div className="container" style={{ paddingBottom: '5rem' }}>
      {/* Header section */}
      <div style={{
        paddingTop: '2rem',
        paddingBottom: '1.5rem',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto',
      }}>
        <div style={{ display: 'inline-flex', marginBottom: '0.75rem' }}>
          <span className="badge badge-demo">
            DEMONSTRATION PROFILES • 8 VERIFIED SAMPLE DRIVERS
          </span>
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '0.5rem' }}>
          Discover Elite Personal Chauffeurs
        </h1>
        <p style={{ color: '#94A3B8', fontSize: '1rem' }}>
          All driver profiles are pre-vetted with background verification, objective behavioural ratings, and vehicle compatibility.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-panel" style={{
        padding: '1.5rem',
        marginBottom: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}>
        {/* Top search & sorting row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1rem',
          alignItems: 'center',
        }}>
          {/* Search Input */}
          <div style={{ position: 'relative' }}>
            <Search 
              size={18} 
              color="#64748B" 
              style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} 
            />
            <input
              type="text"
              placeholder="Search by name, locality (e.g. Gachibowli), or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-control"
              style={{ paddingLeft: '2.75rem' }}
            />
          </div>

          {/* Sort Control */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', justifyContent: 'flex-end' }}>
            <span style={{ fontSize: '0.85rem', color: '#94A3B8', whiteSpace: 'nowrap' }}>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="form-control"
              style={{ width: 'auto', minWidth: '180px' }}
            >
              <option value="rating">Highest Rating (Default)</option>
              <option value="experience">Most Experienced (Years)</option>
              <option value="priceAsc">Lowest Hourly Price (INR)</option>
              <option value="trips">Completed Trips Count</option>
            </select>
          </div>
        </div>

        {/* Filter Pills & Sliders */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid rgba(255, 255, 255, 0.07)',
          paddingTop: '1.1rem',
        }}>
          {/* Vehicle Expertise Chips */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.82rem', color: '#64748B', fontWeight: 600, marginRight: '0.2rem' }}>
              Vehicle:
            </span>
            {['All', 'Manual', 'Automatic', 'Luxury Sedan', 'SUV', 'EV'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedExpertise(type)}
                className={`btn btn-sm ${selectedExpertise === type ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '0.35rem 0.75rem', fontSize: '0.78rem' }}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Slider: Max Hourly Rate */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>
              Max Rate: <strong style={{ color: '#38BDF8' }}>₹{maxPrice}/hr</strong>
            </span>
            <input
              type="range"
              min="190"
              max="350"
              step="10"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              style={{ accentColor: '#06B6D4', width: '110px' }}
            />
          </div>

          {/* Min Rating Filter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>Rating:</span>
            {[
              { label: 'All', val: 0 },
              { label: '4.8+ ★', val: 4.8 },
              { label: '4.9+ ★', val: 4.9 },
            ].map((r) => (
              <button
                key={r.label}
                onClick={() => setMinRating(r.val)}
                className={`btn btn-sm ${minRating === r.val ? 'btn-primary' : 'btn-secondary'}`}
                style={{ padding: '0.35rem 0.65rem', fontSize: '0.75rem' }}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Reset Filters */}
          <button
            onClick={handleResetFilters}
            className="btn btn-secondary btn-sm"
            style={{ color: '#94A3B8', padding: '0.35rem 0.75rem' }}
            title="Reset all search filters"
          >
            <RotateCcw size={13} />
            Reset
          </button>
        </div>
      </div>

      {/* Results Header Count */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '1.25rem',
      }}>
        <div style={{ fontSize: '0.95rem', color: '#94A3B8' }}>
          Showing <strong style={{ color: '#FFFFFF' }}>{filteredDrivers.length}</strong> of {drivers.length} verified chauffeurs
        </div>
        <div style={{ fontSize: '0.8rem', color: '#F59E0B', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <ShieldCheck size={14} /> 100% Police Verified & Alcohol-Free Pledged
        </div>
      </div>

      {/* Drivers Grid */}
      {filteredDrivers.length === 0 ? (
        <div className="glass-panel" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <Car size={48} color="#64748B" style={{ margin: '0 auto 1rem auto' }} />
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No Drivers Match Your Filters</h3>
          <p style={{ color: '#94A3B8', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
            Try increasing your max hourly rate or resetting the vehicle transmission filters.
          </p>
          <button onClick={handleResetFilters} className="btn btn-primary">
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid-cols-auto">
          {filteredDrivers.map((driver) => (
            <div
              key={driver.id}
              className="glass-panel"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.1rem',
                position: 'relative',
                borderRadius: '16px',
              }}
            >
              {/* Top Row: Avatar + Basic Info */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ position: 'relative' }}>
                  <img
                    src={driver.avatar}
                    alt={driver.name}
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '14px',
                      objectFit: 'cover',
                      border: '2px solid rgba(255, 255, 255, 0.1)',
                    }}
                  />
                  <div
                    title="Verified Chauffeur"
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      right: '-4px',
                      background: '#10B981',
                      borderRadius: '50%',
                      padding: '2px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2px solid #090D16',
                    }}
                  >
                    <CheckCircle2 size={12} color="#FFFFFF" />
                  </div>
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                      {driver.name}
                    </h3>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem', flexWrap: 'wrap' }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      background: 'rgba(245, 158, 11, 0.15)',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '6px',
                      color: '#FCD34D',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                    }}>
                      <Star size={12} fill="#FCD34D" />
                      {driver.rating.toFixed(2)}
                    </div>
                    <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>
                      ({driver.totalTrips} trips)
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.35rem' }}>
                    {getTierBadge(driver.rewardTier)}
                  </div>
                </div>
              </div>

              {/* Badges and Experience Row */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.65rem 0.85rem',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                fontSize: '0.82rem',
              }}>
                <div>
                  <span style={{ color: '#64748B' }}>Experience: </span>
                  <strong style={{ color: '#E2E8F0' }}>{driver.experienceYears} Years</strong>
                </div>
                <div>
                  <span style={{ color: '#64748B' }}>Trust Score: </span>
                  <strong style={{ color: '#34D399' }}>{driver.overallScore}/100</strong>
                </div>
              </div>

              {/* Bio & Specialties */}
              <p style={{
                color: '#94A3B8',
                fontSize: '0.84rem',
                lineHeight: 1.5,
                margin: 0,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}>
                {driver.bio}
              </p>

              {/* Expertise tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {driver.vehicleExpertise.map((exp) => (
                  <span
                    key={exp}
                    style={{
                      background: 'rgba(30, 41, 59, 0.7)',
                      color: '#38BDF8',
                      fontSize: '0.72rem',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '6px',
                      border: '1px solid rgba(6, 182, 212, 0.2)',
                    }}
                  >
                    {exp}
                  </span>
                ))}
              </div>

              {/* Location & License info */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748B', fontSize: '0.76rem' }}>
                <MapPin size={13} color="#06B6D4" />
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {driver.location}
                </span>
              </div>

              {/* Card Footer: Hourly Price + Action Buttons */}
              <div style={{
                marginTop: 'auto',
                borderTop: '1px solid rgba(255, 255, 255, 0.07)',
                paddingTop: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.75rem',
              }}>
                <div>
                  <div style={{ fontSize: '0.7rem', color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Hourly Rate
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
                    <span style={{ fontSize: '1.35rem', fontWeight: 800, color: '#FFFFFF', fontFamily: 'var(--font-display)' }}>
                      ₹{driver.hourlyRateINR}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>/hr</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <button
                    onClick={() => onViewDriverScorecard(driver)}
                    className="btn btn-secondary btn-sm"
                    title="View 6-metric Behaviour Scorecard"
                    style={{ padding: '0.45rem 0.7rem' }}
                  >
                    <TrendingUp size={15} color="#F59E0B" />
                  </button>

                  <button
                    onClick={() => onSelectDriverForBooking(driver)}
                    className="btn btn-primary btn-sm"
                    id={`book-driver-${driver.id}`}
                    style={{ padding: '0.5rem 1rem' }}
                  >
                    Book Driver
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
