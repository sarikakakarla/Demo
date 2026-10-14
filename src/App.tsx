import React, { useState, useEffect } from 'react';
import { SAMPLE_DRIVERS, Driver, BookingData } from './data/drivers';
import { Navbar, PageId, UserRole } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { DriverDiscoveryPage } from './components/DriverDiscoveryPage';
import { BookingFlowPage } from './components/BookingFlowPage';
import { TrustRewardsPage } from './components/TrustRewardsPage';
import { PickupVerificationPage } from './components/PickupVerificationPage';
import { Footer } from './components/Footer';
import { ToastContainer, ToastMessage } from './components/Toast';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const saved = localStorage.getItem('dmp_current_page');
    return (saved as PageId) || 'landing';
  });

  const [userRole, setUserRole] = useState<UserRole>(() => {
    const saved = localStorage.getItem('dmp_user_role');
    return (saved as UserRole) || 'customer';
  });

  const [drivers] = useState<Driver[]>(SAMPLE_DRIVERS);

  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(() => {
    const savedId = localStorage.getItem('dmp_selected_driver_id');
    if (savedId) {
      const found = SAMPLE_DRIVERS.find(d => d.id === savedId);
      if (found) return found;
    }
    return SAMPLE_DRIVERS[0];
  });

  const [activeBooking, setActiveBooking] = useState<BookingData | null>(() => {
    const savedBooking = localStorage.getItem('dmp_active_booking');
    if (savedBooking) {
      try {
        return JSON.parse(savedBooking);
      } catch (e) {
        return null;
      }
    }
    return null;
  });

  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Sync to local storage for persistence across reloads
  useEffect(() => {
    localStorage.setItem('dmp_current_page', currentPage);
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem('dmp_user_role', userRole);
  }, [userRole]);

  useEffect(() => {
    if (selectedDriver) {
      localStorage.setItem('dmp_selected_driver_id', selectedDriver.id);
    }
  }, [selectedDriver]);

  useEffect(() => {
    if (activeBooking) {
      localStorage.setItem('dmp_active_booking', JSON.stringify(activeBooking));
    } else {
      localStorage.removeItem('dmp_active_booking');
    }
  }, [activeBooking]);

  // Toast Helper
  const showToast = (type: 'success' | 'info' | 'warning' | 'error', title: string, message: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast: ToastMessage = { id, type, title, message };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // User Actions
  const handleSelectDriverForBooking = (driver: Driver) => {
    setSelectedDriver(driver);
    setCurrentPage('booking');
    showToast('info', `${driver.name} Selected`, `Hourly rate: ₹${driver.hourlyRateINR}/hr. Fill in your vehicle details.`);
  };

  const handleViewDriverScorecard = (driver: Driver) => {
    setSelectedDriver(driver);
    setCurrentPage('rewards');
    showToast('info', 'Trust Scorecard Loaded', `Reviewing 6 telematics behavioural scores for ${driver.name}.`);
  };

  const handleConfirmBooking = (booking: BookingData) => {
    setActiveBooking(booking);
    showToast('success', 'Booking Confirmed!', `Ref #${booking.bookingId}. Chauffeur ${booking.driverName} assigned for your car.`);
  };

  const handleCancelBooking = () => {
    setActiveBooking(null);
    showToast('warning', 'Booking Cancelled', 'The demo reservation has been cancelled. No cancellation fees apply in demo mode.');
  };

  const handleRequestAnotherDriver = () => {
    setActiveBooking(null);
    setCurrentPage('discovery');
    showToast('info', 'Choose Replacement Chauffeur', 'Explore our other 7 verified drivers.');
  };

  const handleBecomeDriverClick = () => {
    setUserRole('driver');
    setCurrentPage('rewards');
    showToast('info', 'Driver Partner View Activated', 'Explore the telematics performance benchmarks and rewards tier breakdown.');
  };

  const handleResetDemo = () => {
    localStorage.clear();
    setSelectedDriver(SAMPLE_DRIVERS[0]);
    setActiveBooking(null);
    setUserRole('customer');
    setCurrentPage('landing');
    showToast('success', 'Demo State Reset', 'Restored initial sample data and local states.');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navbar */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        activeBooking={activeBooking}
        userRole={userRole}
        setUserRole={setUserRole}
        onResetDemo={handleResetDemo}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {currentPage === 'landing' && (
          <LandingPage
            onNavigate={setCurrentPage}
            onBecomeDriverClick={handleBecomeDriverClick}
          />
        )}

        {currentPage === 'discovery' && (
          <DriverDiscoveryPage
            drivers={drivers}
            onSelectDriverForBooking={handleSelectDriverForBooking}
            onViewDriverScorecard={handleViewDriverScorecard}
          />
        )}

        {currentPage === 'booking' && (
          <BookingFlowPage
            drivers={drivers}
            selectedDriver={selectedDriver}
            onSelectDriver={setSelectedDriver}
            activeBooking={activeBooking}
            onConfirmBooking={handleConfirmBooking}
            onNavigate={setCurrentPage}
            onCancelActiveBooking={handleCancelBooking}
          />
        )}

        {currentPage === 'rewards' && (
          <TrustRewardsPage
            drivers={drivers}
            selectedDriver={selectedDriver}
            onSelectDriver={setSelectedDriver}
            onBookThisDriver={handleSelectDriverForBooking}
          />
        )}

        {currentPage === 'verification' && (
          <PickupVerificationPage
            activeBooking={activeBooking}
            drivers={drivers}
            onNavigate={setCurrentPage}
            onCancelBooking={handleCancelBooking}
            onRequestAnotherDriver={handleRequestAnotherDriver}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={setCurrentPage}
        onResetDemo={handleResetDemo}
      />

      {/* Toast Notifications */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}

export default App;
