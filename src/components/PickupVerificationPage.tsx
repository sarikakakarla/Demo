import React, { useState } from 'react';
import { 
  BookingData, 
  Driver 
} from '../data/drivers';
import { 
  ShieldCheck, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  Car, 
  User, 
  QrCode, 
  RefreshCw, 
  PhoneCall, 
  XOctagon, 
  Play, 
  MapPin, 
  Lock,
  ChevronRight,
  Info
} from 'lucide-react';
import { PageId } from './Navbar';

interface PickupVerificationPageProps {
  activeBooking: BookingData | null;
  drivers: Driver[];
  onNavigate: (page: PageId) => void;
  onCancelBooking: () => void;
  onRequestAnotherDriver: () => void;
  onShowToast: (type: 'success' | 'info' | 'warning' | 'error', title: string, message: string) => void;
}

export const PickupVerificationPage: React.FC<PickupVerificationPageProps> = ({
  activeBooking,
  drivers,
  onNavigate,
  onCancelBooking,
  onRequestAnotherDriver,
  onShowToast,
}) => {
  // Use active booking if present, otherwise default to a realistic sample booking state
  const fallbackDriver = drivers[0];
  const demoBooking: BookingData = activeBooking || {
    bookingId: 'DMP-84920-HYD',
    driverId: fallbackDriver.id,
    driverName: fallbackDriver.name,
    driverAvatar: fallbackDriver.avatar,
    driverRating: fallbackDriver.rating,
    driverLicenseMasked: fallbackDriver.licenseNumberMasked,
    driverHourlyRate: fallbackDriver.hourlyRateINR,
    pickupLocation: 'Road No. 36, Jubilee Hills, Hyderabad',
    destination: 'Rajiv Gandhi International Airport (RGIA)',
    tripDate: 'Today',
    tripTime: '18:30',
    durationHours: 4,
    carModel: 'Hyundai Creta 1.5 SX(O)',
    carRegistration: 'TS 09 EA 4421',
    transmissionType: 'Automatic',
    baseFare: 1196,
    safetyFee: 49,
    promoDiscount: 50,
    totalFare: 1195,
    status: 'Confirmed',
    verificationCode: '7419',
    createdAt: 'Just now',
  };

  // Simulation verification state: 'idle' | 'success' | 'mismatch' | 'in_trip'
  const [verificationState, setVerificationState] = useState<'idle' | 'success' | 'mismatch' | 'in_trip'>('idle');
  const [isVerifying, setIsVerifying] = useState(false);

  // Mismatch simulation details
  const [mismatchReason, setMismatchReason] = useState<string>('');

  const handleSimulateSuccess = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationState('success');
      onShowToast('success', 'Verification Succeeded!', 'Driver face match 99.8% & vehicle registration matched. Safe to hand over keys.');
    }, 450);
  };

  const handleSimulateMismatch = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerificationState('mismatch');
      setMismatchReason('Identity mismatch: Person present at vehicle does NOT match verified chauffeur profile Rajesh Varma. Unregistered substitute detected.');
      onShowToast('error', 'CRITICAL SAFETY ALERT', 'Driver credentials mismatch. Do not hand over keys!');
    }, 450);
  };

  const handleResetVerification = () => {
    setVerificationState('idle');
    setMismatchReason('');
  };

  const handleStartTrip = () => {
    setVerificationState('in_trip');
    onShowToast('info', 'Chauffeur Journey Started', 'Digital trip logging active. Safe travels in your personal car!');
  };

  return (
    <div className="container" style={{ paddingBottom: '5rem', paddingTop: '1.5rem', maxWidth: '960px' }}>
      {/* Page Header */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="badge badge-demo" style={{ marginBottom: '0.5rem' }}>
          PAGE 5 • INTERACTIVE PICKUP VERIFICATION PROTOCOL
        </span>
        <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: '0.4rem' }}>
          Pickup Identity & Vehicle Verification Demo
        </h1>
        <p style={{ color: '#94A3B8', fontSize: '0.95rem', maxWidth: '720px', margin: '0 auto' }}>
          Eliminate substitute drivers and vehicle fraud. Before handing over your car keys, both parties 
          must verify facial credentials, license badges, and registration plates.
        </p>

        {/* Clear simulation disclaimer */}
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
          🛡️ Simulation Mode: This is an interactive demo of our multi-factor handoff workflow. No actual facial recognition is performed.
        </div>
      </div>

      {/* Main Verification Card */}
      <div className="glass-panel" style={{
        padding: '2rem',
        borderRadius: '20px',
        border: verificationState === 'success' || verificationState === 'in_trip' 
          ? '1px solid rgba(16, 185, 129, 0.5)'
          : verificationState === 'mismatch'
          ? '1px solid rgba(244, 63, 94, 0.6)'
          : '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: verificationState === 'success' || verificationState === 'in_trip'
          ? '0 0 35px rgba(16, 185, 129, 0.2)'
          : verificationState === 'mismatch'
          ? '0 0 35px rgba(244, 63, 94, 0.25)'
          : 'var(--shadow-md)',
      }}>
        {/* Booking Reference Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          paddingBottom: '1.25rem',
          marginBottom: '1.5rem',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase' }}>Active Demo Booking</span>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#38BDF8' }}>
              {demoBooking.bookingId}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.82rem', color: '#94A3B8' }}>Secret Handover PIN:</span>
            <span style={{
              background: 'rgba(6, 182, 212, 0.15)',
              border: '1px solid #06B6D4',
              color: '#FFFFFF',
              fontWeight: 800,
              fontSize: '1.2rem',
              letterSpacing: '2px',
              padding: '0.2rem 0.65rem',
              borderRadius: '8px',
            }}>
              {demoBooking.verificationCode}
            </span>
          </div>
        </div>

        {/* Chauffeur & Vehicle Comparison Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem',
        }}>
          {/* Driver Profile Record */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '16px',
            padding: '1.25rem',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}>
            <div style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>
              Authorized Chauffeur Record
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <img
                src={demoBooking.driverAvatar}
                alt={demoBooking.driverName}
                style={{
                  width: '68px',
                  height: '68px',
                  borderRadius: '14px',
                  objectFit: 'cover',
                  border: '2px solid #06B6D4',
                }}
              />
              <div>
                <h3 style={{ fontSize: '1.15rem', margin: 0 }}>{demoBooking.driverName}</h3>
                <div style={{ fontSize: '0.8rem', color: '#34D399', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                  <ShieldCheck size={14} /> Police & RTO Verified Chauffeur
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '2px' }}>
                  License: {demoBooking.driverLicenseMasked}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#FCD34D', marginTop: '2px' }}>
                  ★ {demoBooking.driverRating} Behaviour Rating
                </div>
              </div>
            </div>
          </div>

          {/* Customer Vehicle Record */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '16px',
            padding: '1.25rem',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}>
            <div style={{ fontSize: '0.75rem', color: '#64748B', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>
              Customer's Registered Vehicle
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{
                width: '68px',
                height: '68px',
                borderRadius: '14px',
                background: 'rgba(6, 182, 212, 0.1)',
                border: '2px solid rgba(6, 182, 212, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Car size={32} color="#06B6D4" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.15rem', margin: 0 }}>{demoBooking.carModel}</h3>
                <div style={{
                  display: 'inline-block',
                  background: '#090D16',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '6px',
                  padding: '2px 8px',
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  color: '#FFFFFF',
                  letterSpacing: '1px',
                  marginTop: '4px',
                }}>
                  {demoBooking.carRegistration}
                </div>
                <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '4px' }}>
                  Transmission: {demoBooking.transmissionType}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SIMULATION ACTION BUTTONS */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          borderRadius: '14px',
          padding: '1.25rem',
          border: '1px dashed rgba(255, 255, 255, 0.15)',
          marginBottom: '2rem',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#FCD34D', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Interactive Demo Controls — Test Verification Outcomes
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}>
            <button
              onClick={handleSimulateSuccess}
              disabled={isVerifying}
              className="btn btn-emerald btn-lg"
              id="btn-simulate-success"
              style={{ minWidth: '260px' }}
            >
              {isVerifying ? (
                <>
                  <RefreshCw className="animate-spin" size={18} />
                  Scanning Credentials...
                </>
              ) : (
                <>
                  <CheckCircle2 size={20} />
                  Simulate Successful Verification
                </>
              )}
            </button>

            <button
              onClick={handleSimulateMismatch}
              disabled={isVerifying}
              className="btn btn-danger btn-lg"
              id="btn-simulate-mismatch"
              style={{ minWidth: '260px' }}
            >
              {isVerifying ? (
                <>
                  <RefreshCw className="animate-spin" size={18} />
                  Scanning Credentials...
                </>
              ) : (
                <>
                  <AlertTriangle size={20} />
                  Simulate Identity/Vehicle Mismatch
                </>
              )}
            </button>

            {verificationState !== 'idle' && (
              <button
                onClick={handleResetVerification}
                className="btn btn-secondary"
                title="Reset simulation state"
              >
                <RefreshCw size={16} />
                Reset Test
              </button>
            )}
          </div>
        </div>

        {/* OUTCOME 1: SUCCESS STATE */}
        {verificationState === 'success' && (
          <div style={{
            background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.05) 100%)',
            border: '2px solid #10B981',
            borderRadius: '16px',
            padding: '2rem',
            animation: 'slideInRight 0.3s ease-out',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <CheckCircle2 size={26} color="#FFFFFF" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', margin: 0 }}>
                  Verification Passed — Safe to Hand Over Keys
                </h3>
                <div style={{ color: '#34D399', fontSize: '0.85rem' }}>
                  All 4 digital safety checkmarks confirmed in real time
                </div>
              </div>
            </div>

            {/* Checklist */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '0.75rem',
              marginTop: '1.25rem',
              marginBottom: '1.75rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#E2E8F0' }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span>Facial biometrics match registered profile</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#E2E8F0' }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span>Commercial badge #{demoBooking.bookingId} verified</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#E2E8F0' }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span>Car plate matched {demoBooking.carRegistration}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#E2E8F0' }}>
                <CheckCircle2 size={16} color="#10B981" />
                <span>4-Digit PIN {demoBooking.verificationCode} authenticated</span>
              </div>
            </div>

            {/* Start Trip CTA */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={handleStartTrip}
                className="btn btn-emerald btn-lg"
                id="btn-start-trip"
                style={{ flex: 1, minWidth: '220px' }}
              >
                <Play size={18} />
                Hand Over Keys & Start Journey (Demo)
              </button>

              <button
                onClick={() => onNavigate('discovery')}
                className="btn btn-secondary"
              >
                Return to Drivers List
              </button>
            </div>
          </div>
        )}

        {/* OUTCOME 2: MISMATCH WARNING STATE */}
        {verificationState === 'mismatch' && (
          <div style={{
            background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.2) 0%, rgba(225, 29, 72, 0.08) 100%)',
            border: '2px solid #F43F5E',
            borderRadius: '16px',
            padding: '2rem',
            animation: 'slideInRight 0.3s ease-out',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: '#F43F5E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <XOctagon size={28} color="#FFFFFF" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', margin: 0, letterSpacing: '-0.01em' }}>
                  CRITICAL: Details Do Not Match. Do Not Proceed Until Verified!
                </h3>
                <div style={{ color: '#FDA4AF', fontSize: '0.9rem', marginTop: '2px' }}>
                  Severe safety alert: Handing over your keys to an unverified driver is strictly prohibited.
                </div>
              </div>
            </div>

            {/* Mismatch description box */}
            <div style={{
              background: 'rgba(0, 0, 0, 0.4)',
              borderRadius: '10px',
              padding: '1rem',
              border: '1px solid rgba(244, 63, 94, 0.4)',
              color: '#FECDD3',
              fontSize: '0.88rem',
              marginBottom: '1.5rem',
            }}>
              <strong>Warning Details: </strong>
              {mismatchReason}
            </div>

            {/* Required user actions */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}>
              <button
                onClick={onCancelBooking}
                className="btn btn-danger"
                id="btn-cancel-booking-mismatch"
              >
                <XOctagon size={16} />
                Cancel Booking
              </button>

              <button
                onClick={onRequestAnotherDriver}
                className="btn btn-primary"
                id="btn-request-another-driver"
              >
                <RefreshCw size={16} />
                Request Another Driver
              </button>

              <button
                onClick={() => {
                  onShowToast('warning', 'Safety Emergency Hotline', 'Connecting to 24/7 DriveMate Rapid Chauffeur Dispatch Team (Demo: 1800-DRIVEMATE)...');
                }}
                className="btn btn-secondary"
                style={{ borderColor: 'rgba(244, 63, 94, 0.4)', color: '#FDA4AF' }}
              >
                <PhoneCall size={16} />
                Call Safety Team (Demo)
              </button>
            </div>
          </div>
        )}

        {/* OUTCOME 3: IN TRIP ACTIVE STATE */}
        {verificationState === 'in_trip' && (
          <div style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(15, 23, 42, 0.95) 100%)',
            border: '2px solid #06B6D4',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center',
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(6, 182, 212, 0.2)',
              border: '2px solid #06B6D4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem auto',
            }}>
              <Car size={32} color="#06B6D4" />
            </div>

            <span className="badge badge-verified" style={{ marginBottom: '0.5rem' }}>
              TRIP IN PROGRESS • TELEMATICS ACTIVE
            </span>

            <h3 style={{ fontSize: '1.6rem', marginTop: '0.4rem' }}>
              Enjoy Your Ride in {demoBooking.carModel}
            </h3>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', maxWidth: '500px', margin: '0.5rem auto 1.5rem auto' }}>
              {demoBooking.driverName} is driving smoothly. Real-time telematics scoring is monitoring braking, acceleration, and speed.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => {
                  onShowToast('success', 'Trip Completed!', 'Chauffeur safely parked your vehicle. 5-star behaviour recorded.');
                  setVerificationState('idle');
                }}
                className="btn btn-emerald"
              >
                <CheckCircle2 size={16} />
                Complete Trip & Rate Chauffeur
              </button>

              <button
                onClick={() => onNavigate('rewards')}
                className="btn btn-outline"
              >
                View Driver's Reward Scorecard
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
