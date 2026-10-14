import React from 'react';
import { 
  ShieldCheck, 
  Car, 
  Search, 
  CalendarCheck, 
  Award, 
  QrCode, 
  RotateCcw,
  UserCheck,
  Smartphone
} from 'lucide-react';
import { BookingData } from '../data/drivers';

export type PageId = 'landing' | 'discovery' | 'booking' | 'rewards' | 'verification';
export type UserRole = 'customer' | 'driver';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  activeBooking: BookingData | null;
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  onResetDemo: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  activeBooking,
  userRole,
  setUserRole,
  onResetDemo,
}) => {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(9, 13, 22, 0.92)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
    }}>
      {/* Top Demo Disclaimer Ribbon */}
      <div className="demo-banner">
        <span>⚡ <strong>HACKATHON PROTOTYPE</strong> — Local Interactive Demonstration for DriveMate Pro</span>
        <span style={{ opacity: 0.7 }}>|</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          <ShieldCheck size={14} /> All data is simulated
        </span>
      </div>

      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.85rem',
        paddingBottom: '0.85rem',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => setCurrentPage('landing')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #06B6D4 0%, #0284C7 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(6, 182, 212, 0.4)',
          }}>
            <Car size={24} color="#FFFFFF" />
          </div>
          <div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.4rem',
              fontFamily: 'var(--font-display)',
              fontSize: '1.25rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
            }}>
              <span>DriveMate</span>
              <span style={{
                background: 'linear-gradient(135deg, #06B6D4, #10B981)',
                padding: '0.1rem 0.45rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#090D16',
              }}>
                PRO
              </span>
            </div>
            <div style={{ fontSize: '0.7rem', color: '#64748B', fontWeight: 500 }}>
              Trust Every Ride • Reward Every Pro
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.35rem',
          background: 'rgba(17, 24, 39, 0.7)',
          padding: '0.3rem',
          borderRadius: '14px',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          overflowX: 'auto',
          maxWidth: '100%',
        }}>
          <button
            onClick={() => setCurrentPage('landing')}
            className={`btn btn-sm ${currentPage === 'landing' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ border: 'none' }}
          >
            Home
          </button>

          <button
            onClick={() => setCurrentPage('discovery')}
            className={`btn btn-sm ${currentPage === 'discovery' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ border: 'none' }}
          >
            <Search size={15} />
            Find Driver
          </button>

          <button
            onClick={() => setCurrentPage('booking')}
            className={`btn btn-sm ${currentPage === 'booking' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ border: 'none', position: 'relative' }}
          >
            <CalendarCheck size={15} />
            Book Ride
            {activeBooking && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10B981',
                boxShadow: '0 0 8px #10B981',
              }} />
            )}
          </button>

          <button
            onClick={() => setCurrentPage('rewards')}
            className={`btn btn-sm ${currentPage === 'rewards' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ border: 'none' }}
          >
            <Award size={15} />
            Trust & Rewards
          </button>

          <button
            onClick={() => setCurrentPage('verification')}
            className={`btn btn-sm ${currentPage === 'verification' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ border: 'none', background: currentPage === 'verification' ? 'linear-gradient(135deg, #10B981, #059669)' : undefined }}
          >
            <QrCode size={15} />
            Pickup Verification
          </button>
        </nav>

        {/* Right Controls: Role Switcher & Reset */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Role Toggle Switch */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#111827',
            padding: '3px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <button
              onClick={() => setUserRole('customer')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '4px 10px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: 600,
                background: userRole === 'customer' ? '#1E293B' : 'transparent',
                color: userRole === 'customer' ? '#38BDF8' : '#94A3B8',
              }}
              title="Customer ordering a driver for own car"
            >
              <Smartphone size={13} />
              Customer
            </button>
            <button
              onClick={() => {
                setUserRole('driver');
                setCurrentPage('rewards');
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '4px 10px',
                borderRadius: '7px',
                fontSize: '0.78rem',
                fontWeight: 600,
                background: userRole === 'driver' ? '#1E293B' : 'transparent',
                color: userRole === 'driver' ? '#34D399' : '#94A3B8',
              }}
              title="Driver partner view & telemetry"
            >
              <UserCheck size={13} />
              Driver Pro
            </button>
          </div>

          {/* Reset Demo Data Button */}
          <button
            onClick={onResetDemo}
            className="btn btn-secondary btn-sm"
            title="Reset prototype state to default sample data"
            style={{
              padding: '6px 10px',
              color: '#94A3B8',
            }}
          >
            <RotateCcw size={14} />
            <span style={{ fontSize: '0.75rem' }}>Reset Demo</span>
          </button>
        </div>
      </div>
    </header>
  );
};
