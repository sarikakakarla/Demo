import React, { useState } from 'react';
import { 
  Driver, 
  BookingData 
} from '../data/drivers';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Car, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  User, 
  Tag, 
  QrCode, 
  RefreshCw,
  Info
} from 'lucide-react';
import { PageId } from './Navbar';

interface BookingFlowPageProps {
  drivers: Driver[];
  selectedDriver: Driver | null;
  onSelectDriver: (driver: Driver) => void;
  activeBooking: BookingData | null;
  onConfirmBooking: (booking: BookingData) => void;
  onNavigate: (page: PageId) => void;
  onCancelActiveBooking: () => void;
}

export const BookingFlowPage: React.FC<BookingFlowPageProps> = ({
  drivers,
  selectedDriver,
  onSelectDriver,
  activeBooking,
  onConfirmBooking,
  onNavigate,
  onCancelActiveBooking,
}) => {
  // If no driver selected, pick the first one by default
  const currentDriver = selectedDriver || drivers[0];

  // Booking Form State
  const [pickupLocation, setPickupLocation] = useState('Road No. 36, Jubilee Hills, Hyderabad');
  const [destination, setDestination] = useState('Rajiv Gandhi International Airport (RGIA), Shamshabad');
  const [tripDate, setTripDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [tripTime, setTripTime] = useState('18:30');
  const [durationHours, setDurationHours] = useState(4);
  const [carModel, setCarModel] = useState('Hyundai Creta 1.5 SX(O)');
  const [carRegistration, setCarRegistration] = useState('TS 09 EA 4421');
  const [transmissionType, setTransmissionType] = useState<'Manual' | 'Automatic'>('Automatic');
  const [specialInstructions, setSpecialInstructions] = useState('Need assistance with 2 heavy luggage bags. AC set to 23°C please.');

  // Form errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pricing calculations
  const hourlyRate = currentDriver.hourlyRateINR;
  const baseFare = hourlyRate * durationHours;
  const safetyFee = 49;
  const promoDiscount = 50;
  const totalFare = Math.max(0, baseFare + safetyFee - promoDiscount);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!pickupLocation.trim()) errs.pickupLocation = 'Pickup address is required.';
    if (!destination.trim()) errs.destination = 'Destination / Area is required.';
    if (!tripDate) errs.tripDate = 'Trip date is required.';
    if (!tripTime) errs.tripTime = 'Trip pickup time is required.';
    if (!carModel.trim()) errs.carModel = 'Car model is required.';
    if (!carRegistration.trim()) errs.carRegistration = 'Vehicle registration number is required (e.g. TS 09 EA 4421).';
    if (durationHours < 1 || durationHours > 24) errs.durationHours = 'Duration must be between 1 and 24 hours.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate 400ms network feel
    setTimeout(() => {
      const randomRef = `DMP-${Math.floor(10000 + Math.random() * 90000)}-HYD`;
      const randomCode = Math.floor(1000 + Math.random() * 9000).toString();

      const newBooking: BookingData = {
        bookingId: randomRef,
        driverId: currentDriver.id,
        driverName: currentDriver.name,
        driverAvatar: currentDriver.avatar,
        driverRating: currentDriver.rating,
        driverLicenseMasked: currentDriver.licenseNumberMasked,
        driverHourlyRate: currentDriver.hourlyRateINR,
        pickupLocation,
        destination,
        tripDate,
        tripTime,
        durationHours,
        carModel,
        carRegistration: carRegistration.toUpperCase(),
        transmissionType,
        baseFare,
        safetyFee,
        promoDiscount,
        totalFare,
        status: 'Confirmed',
        verificationCode: randomCode,
        createdAt: new Date().toLocaleString(),
      };

      onConfirmBooking(newBooking);
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div className="container" style={{ paddingBottom: '5rem', paddingTop: '1.5rem' }}>
      {/* Top Banner */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <span className="badge badge-demo" style={{ marginBottom: '0.5rem' }}>
          PAGE 3 • SEAMLESS CHAUFFEUR BOOKING FLOW
        </span>
        <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', marginBottom: '0.35rem' }}>
          Reserve a Driver for Your Personal Car
        </h1>
        <p style={{ color: '#94A3B8', fontSize: '0.95rem' }}>
          Upfront hourly transparent rates. No surge pricing. Guaranteed verified driver.
        </p>
      </div>

      {/* If Booking is already active, show the confirmation screen directly! */}
      {activeBooking && activeBooking.status === 'Confirmed' ? (
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div className="glass-panel" style={{
            padding: '2.5rem 2rem',
            borderRadius: '20px',
            border: '1px solid rgba(16, 185, 129, 0.4)',
            boxShadow: '0 0 35px rgba(16, 185, 129, 0.15)',
          }}>
            {/* Success Header */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.15)',
                border: '2px solid #10B981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto',
              }}>
                <CheckCircle2 size={36} color="#10B981" />
              </div>
              <span className="badge badge-verified" style={{ marginBottom: '0.5rem' }}>
                DEMO BOOKING CONFIRMED
              </span>
              <h2 style={{ fontSize: '1.8rem', marginTop: '0.4rem' }}>
                Booking Reference: <span style={{ color: '#38BDF8' }}>{activeBooking.bookingId}</span>
              </h2>
              <p style={{ color: '#94A3B8', fontSize: '0.9rem', marginTop: '0.3rem' }}>
                A confirmation has been saved to your local session state.
              </p>
              <div style={{
                display: 'inline-block',
                background: 'rgba(245, 158, 11, 0.12)',
                color: '#FCD34D',
                padding: '0.35rem 0.85rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                marginTop: '0.6rem',
                border: '1px solid rgba(245, 158, 11, 0.25)',
              }}>
                ℹ️ DEMO NOTICE: This is a simulation. No real driver or vehicle is being dispatched.
              </div>
            </div>

            {/* Split Grid: Driver Details + Ride Summary */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              background: 'rgba(255, 255, 255, 0.02)',
              borderRadius: '16px',
              padding: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.06)',
            }}>
              {/* Assigned Driver Box */}
              <div>
                <div style={{ fontSize: '0.78rem', color: '#64748B', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>
                  Assigned Chauffeur
                </div>
                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                  <img
                    src={activeBooking.driverAvatar}
                    alt={activeBooking.driverName}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '12px',
                      objectFit: 'cover',
                      border: '2px solid #06B6D4',
                    }}
                  />
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{activeBooking.driverName}</h3>
                    <div style={{ fontSize: '0.82rem', color: '#34D399', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <ShieldCheck size={14} /> Police & DL Verified
                    </div>
                    <div style={{ fontSize: '0.78rem', color: '#94A3B8', marginTop: '2px' }}>
                      License: {activeBooking.driverLicenseMasked}
                    </div>
                  </div>
                </div>

                {/* Secret Pickup Code */}
                <div style={{
                  marginTop: '1.25rem',
                  padding: '0.85rem',
                  background: 'rgba(6, 182, 212, 0.1)',
                  borderRadius: '10px',
                  border: '1px dashed rgba(6, 182, 212, 0.4)',
                }}>
                  <div style={{ fontSize: '0.75rem', color: '#38BDF8', fontWeight: 600 }}>
                    YOUR SECRET PICKUP PIN
                  </div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '4px', color: '#FFFFFF', marginTop: '2px' }}>
                    {activeBooking.verificationCode}
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#94A3B8', marginTop: '2px' }}>
                    Share with driver only after visual verification
                  </div>
                </div>
              </div>

              {/* Ride Summary */}
              <div>
                <div style={{ fontSize: '0.78rem', color: '#64748B', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: 600 }}>
                  Journey & Vehicle Details
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem' }}>
                  <div>
                    <span style={{ color: '#64748B' }}>Pickup: </span>
                    <strong style={{ color: '#E2E8F0' }}>{activeBooking.pickupLocation}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B' }}>Destination: </span>
                    <strong style={{ color: '#E2E8F0' }}>{activeBooking.destination}</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B' }}>Schedule: </span>
                    <strong style={{ color: '#E2E8F0' }}>{activeBooking.tripDate} at {activeBooking.tripTime} ({activeBooking.durationHours} hrs)</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B' }}>Your Car: </span>
                    <strong style={{ color: '#38BDF8' }}>{activeBooking.carModel} ({activeBooking.carRegistration})</strong>
                  </div>
                  <div>
                    <span style={{ color: '#64748B' }}>Total Fare: </span>
                    <strong style={{ color: '#10B981', fontSize: '1.1rem' }}>₹{activeBooking.totalFare}</strong>
                    <span style={{ color: '#64748B', fontSize: '0.75rem' }}> (Paid via Demo Cashless)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps CTA */}
            <div style={{
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center',
            }}>
              <button
                onClick={() => onNavigate('verification')}
                className="btn btn-emerald btn-lg"
                id="btn-goto-verification"
                style={{ width: '100%', maxWidth: '420px' }}
              >
                <QrCode size={20} />
                Proceed to Pickup Verification Demo &rarr;
              </button>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button
                  onClick={onCancelActiveBooking}
                  className="btn btn-secondary btn-sm"
                  style={{ color: '#F43F5E' }}
                >
                  Cancel Active Booking
                </button>
                <button
                  onClick={() => onNavigate('discovery')}
                  className="btn btn-secondary btn-sm"
                >
                  Book Another Driver
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Booking Input Form */
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {/* Left Column: Form Fields */}
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Car size={20} color="#06B6D4" />
              1. Trip & Vehicle Information
            </h2>

            <form onSubmit={handleBookingSubmit}>
              {/* Pickup Location */}
              <div className="form-group">
                <label className="form-label" htmlFor="pickup-input">
                  <MapPin size={15} color="#06B6D4" />
                  Pickup Address (Where your car is parked) *
                </label>
                <input
                  id="pickup-input"
                  type="text"
                  className="form-control"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  placeholder="e.g. Jubilee Hills, Hyderabad"
                />
                {errors.pickupLocation && <div className="form-error">{errors.pickupLocation}</div>}
              </div>

              {/* Destination */}
              <div className="form-group">
                <label className="form-label" htmlFor="dest-input">
                  <MapPin size={15} color="#10B981" />
                  Destination / Major Commute Areas *
                </label>
                <input
                  id="dest-input"
                  type="text"
                  className="form-control"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. RGIA Airport / Gachibowli Financial District"
                />
                {errors.destination && <div className="form-error">{errors.destination}</div>}
              </div>

              {/* Date & Time Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="date-input">
                    <Calendar size={15} />
                    Trip Date *
                  </label>
                  <input
                    id="date-input"
                    type="date"
                    className="form-control"
                    value={tripDate}
                    onChange={(e) => setTripDate(e.target.value)}
                  />
                  {errors.tripDate && <div className="form-error">{errors.tripDate}</div>}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="time-input">
                    <Clock size={15} />
                    Pickup Time *
                  </label>
                  <input
                    id="time-input"
                    type="time"
                    className="form-control"
                    value={tripTime}
                    onChange={(e) => setTripTime(e.target.value)}
                  />
                  {errors.tripTime && <div className="form-error">{errors.tripTime}</div>}
                </div>
              </div>

              {/* Duration Buttons */}
              <div className="form-group">
                <label className="form-label">
                  <Clock size={15} color="#F59E0B" />
                  Service Duration (Hours) *
                </label>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {[2, 4, 8, 12].map((hours) => (
                    <button
                      key={hours}
                      type="button"
                      onClick={() => setDurationHours(hours)}
                      className={`btn btn-sm ${durationHours === hours ? 'btn-primary' : 'btn-secondary'}`}
                      style={{ flex: 1, minWidth: '60px' }}
                    >
                      {hours} {hours === 1 ? 'Hour' : 'Hours'}
                      {hours === 8 && ' (Full Day)'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Customer's Car Details */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                borderRadius: '12px',
                padding: '1.25rem',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                marginTop: '1.5rem',
                marginBottom: '1.5rem',
              }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#38BDF8', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Car size={16} />
                  Customer's Vehicle Information
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div className="form-group" style={{ marginBottom: '0.5rem' }}>
                    <label className="form-label">Car Model *</label>
                    <input
                      type="text"
                      className="form-control"
                      value={carModel}
                      onChange={(e) => setCarModel(e.target.value)}
                      placeholder="e.g. Hyundai Creta, Honda City"
                    />
                    {errors.carModel && <div className="form-error">{errors.carModel}</div>}
                  </div>

                  <div className="form-group" style={{ marginBottom: '0.5rem' }}>
                    <label className="form-label">Vehicle Registration *</label>
                    <input
                      type="text"
                      className="form-control"
                      value={carRegistration}
                      onChange={(e) => setCarRegistration(e.target.value.toUpperCase())}
                      placeholder="TS 09 EA 4421"
                    />
                    {errors.carRegistration && <div className="form-error">{errors.carRegistration}</div>}
                  </div>
                </div>

                {/* Transmission Switch */}
                <div style={{ marginTop: '0.75rem' }}>
                  <label className="form-label">Transmission Type</label>
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <button
                      type="button"
                      onClick={() => setTransmissionType('Automatic')}
                      className={`btn btn-sm ${transmissionType === 'Automatic' ? 'btn-primary' : 'btn-secondary'}`}
                      style={{ flex: 1 }}
                    >
                      Automatic (AT / CVT / DCT)
                    </button>
                    <button
                      type="button"
                      onClick={() => setTransmissionType('Manual')}
                      className={`btn btn-sm ${transmissionType === 'Manual' ? 'btn-primary' : 'btn-secondary'}`}
                      style={{ flex: 1 }}
                    >
                      Manual (Stick Shift)
                    </button>
                  </div>
                </div>
              </div>

              {/* Special Instructions */}
              <div className="form-group">
                <label className="form-label">Special Chauffeur Requests (Optional)</label>
                <textarea
                  className="form-control"
                  rows={2}
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="e.g. Quiet ride requested, child car seat already fitted..."
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn btn-emerald btn-lg"
                id="btn-confirm-booking"
                disabled={isSubmitting}
                style={{ width: '100%', marginTop: '0.75rem' }}
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="animate-spin" size={18} />
                    Confirming Reservation...
                  </>
                ) : (
                  <>
                    <CheckCircle2 size={19} />
                    Confirm Booking (Demo) • ₹{totalFare}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Driver Selector & Transparent Fare Breakdown */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Driver Selector Card */}
            <div className="glass-panel" style={{ padding: '1.75rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem',
              }}>
                <h3 style={{ fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <User size={18} color="#06B6D4" />
                  Selected Chauffeur
                </h3>
                <span className="badge badge-verified">Verified</span>
              </div>

              {/* Driver Dropdown Quick Switcher */}
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ fontSize: '0.78rem', color: '#64748B', display: 'block', marginBottom: '0.35rem' }}>
                  Change Assigned Chauffeur:
                </label>
                <select
                  value={currentDriver.id}
                  onChange={(e) => {
                    const found = drivers.find(d => d.id === e.target.value);
                    if (found) onSelectDriver(found);
                  }}
                  className="form-control"
                  style={{ fontSize: '0.88rem' }}
                >
                  {drivers.map(d => (
                    <option key={d.id} value={d.id}>
                      {d.name} — ₹{d.hourlyRateINR}/hr ({d.rating}★, {d.rewardTier} Tier)
                    </option>
                  ))}
                </select>
              </div>

              {/* Driver Card Snapshot */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '1rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.06)',
              }}>
                <img
                  src={currentDriver.avatar}
                  alt={currentDriver.name}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '12px',
                    objectFit: 'cover',
                  }}
                />
                <div>
                  <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{currentDriver.name}</h4>
                  <div style={{ fontSize: '0.8rem', color: '#94A3B8', marginTop: '2px' }}>
                    {currentDriver.experienceYears} Years Exp • {currentDriver.totalTrips} Trips
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#38BDF8', marginTop: '2px' }}>
                    Specialties: {currentDriver.specialties.slice(0, 2).join(', ')}
                  </div>
                </div>
              </div>
            </div>

            {/* Transparent Fare Summary */}
            <div className="glass-panel" style={{ padding: '1.75rem' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Tag size={18} color="#10B981" />
                Transparent Fare Breakdown
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#94A3B8' }}>
                    Chauffeur Rate (₹{hourlyRate} × {durationHours} hrs)
                  </span>
                  <span>₹{baseFare}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Vehicle & Driver Safety Shield
                    <ShieldCheck size={14} color="#10B981" />
                  </span>
                  <span>₹{safetyFee}</span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#34D399' }}>
                  <span>Hackathon Demo Voucher Applied</span>
                  <span>-₹{promoDiscount}</span>
                </div>

                <div style={{
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                  paddingTop: '0.75rem',
                  marginTop: '0.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                }}>
                  <span style={{ fontWeight: 700, fontSize: '1.05rem' }}>Estimated Total</span>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: '#38BDF8', fontFamily: 'var(--font-display)' }}>
                      ₹{totalFare}
                    </span>
                    <div style={{ fontSize: '0.72rem', color: '#64748B' }}>
                      All taxes & roadside coverage included
                    </div>
                  </div>
                </div>
              </div>

              {/* Zero Surge Policy */}
              <div style={{
                marginTop: '1.25rem',
                background: 'rgba(6, 182, 212, 0.08)',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid rgba(6, 182, 212, 0.2)',
                fontSize: '0.8rem',
                color: '#38BDF8',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <Info size={16} style={{ flexShrink: 0 }} />
                <span>Zero surge guarantee: The price you see is strictly hourly with no dynamic traffic multipliers.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
