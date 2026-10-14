# DriveMate Pro 🚗🛡️
> **"Trust Every Ride. Reward Every Professional."**  
> *One-Day Hackathon Prototype for On-Demand Professional Chauffeurs for Private Car Owners.*

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 💡 About DriveMate Pro

**DriveMate Pro** is an on-demand driver platform connecting customers who need a driver for their personal car with verified professional chauffeurs.

Instead of vague 5-star ratings or dispatching unknown substitute drivers, DriveMate Pro introduces three core differentiators:
1. **Objective Behaviour Telematics**: Scores drivers continuously across 6 metrics (smooth braking, safety, punctuality, route navigation, comfort, reliability).
2. **Merit-Based Rewards (Bronze to Platinum)**: Unlocks higher hourly bonus payouts (+5% to +18%) and luxury car tier access for top performers.
3. **Pickup Identity & Vehicle Verification Protocol**: Cross-verifies driver biometrics, commercial license badges, customer car registration plates, and secret 4-digit pickup PINs before ignition keys are handed over.

---

## 🌟 Prototype Features

- **Page 1 — Landing Page**:
  - Hero with modern midnight chauffeur aesthetics and Google typography (*Plus Jakarta Sans* & *Outfit*).
  - Value proposition breakdown and interactive "How It Works" workflow.
  - Trust benchmarks (illustrative platform metrics).
  - Use-case spotlight (night outs, corporate commutes, interstate journeys, senior hospital runs).

- **Page 2 — Driver Discovery**:
  - 8 fictional sample verified chauffeurs with avatars, experience, ratings, completed trip counts, hourly INR rates, and badges.
  - Real-time search and multi-filtering (vehicle type: *Manual, Automatic, SUV, Luxury Sedan, EV*, price slider, minimum rating).
  - Sorting by rating, experience, price, or trip counts.

- **Page 3 — Transparent Chauffeur Booking**:
  - Driver selection and preview snapshot.
  - Address inputs, trip date/time, service duration (2h, 4h, 8h day, 12h).
  - Customer vehicle details (model, plate registration, transmission type).
  - Honest hourly pricing with transparent breakdown (Base fare + Safety fee - Demo voucher).
  - Instant booking confirmation with reference ID (`DMP-XXXXX-HYD`) and secret 4-digit handover PIN.

- **Page 4 — Trust & Rewards Scorecards**:
  - 6-metric granular scoring system with progress meters.
  - Bronze, Silver, Gold, and Platinum tier criteria and perk breakdown.
  - Driver Partner Earnings Dashboard simulation (+18% bonus tier, weekly income, and telematics badges).

- **Page 5 — Pickup Verification Simulator**:
  - Live simulation of the handoff protocol.
  - **"Simulate Successful Verification"**: Green confirmation showing all 4 safety checkpoints verified + "Start Journey (Demo)" trip tracker.
  - **"Simulate Identity/Vehicle Mismatch"**: Prominent red emergency warning ("Details do not match. Do not proceed until verified") with cancellation and driver re-assignment options.

- **Global Controls**:
  - Real-time toast notification system.
  - Customer Mode vs. Driver Pro Mode switcher.
  - `localStorage` persistence across page reloads.
  - Demo reset button to restore initial state at any time.

---

## 🛠️ Tech Stack

- **Core**: React 19, TypeScript
- **Bundler & Dev Server**: Vite
- **Styling**: Vanilla CSS with modern custom design system (Midnight Navy, Cyan, Emerald, Glassmorphism, Micro-animations)
- **Icons**: Lucide React
- **Data & State**: Reactive React state with `localStorage` persistence

---

## 🚀 Quick Start Guide

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/sarikakakarla/Demo.git
cd Demo

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open your browser and navigate to:
```
http://localhost:5173/
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 🔒 Demo Notice
*This repository contains a one-day hackathon frontend prototype. All driver records, scores, vehicle registrations, and identity verifications are demonstration simulations running locally in the browser.*
