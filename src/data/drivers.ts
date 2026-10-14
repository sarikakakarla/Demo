export interface DriverReview {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BehaviourScores {
  professionalism: number; // 0-100
  drivingSafety: number;
  punctuality: number;
  routeAwareness: number;
  customerComfort: number;
  reliability: number;
}

export type RewardTier = 'Bronze' | 'Silver' | 'Gold' | 'Platinum';

export interface Driver {
  id: string;
  name: string;
  avatar: string;
  experienceYears: number;
  rating: number;
  totalTrips: number;
  hourlyRateINR: number;
  rewardTier: RewardTier;
  isIdentityVerified: boolean;
  isBackgroundChecked: boolean;
  licenseNumberMasked: string;
  specialties: string[];
  bio: string;
  location: string;
  languages: string[];
  vehicleExpertise: ('Manual' | 'Automatic' | 'Luxury Sedan' | 'SUV' | 'EV')[];
  behaviourScores: BehaviourScores;
  overallScore: number;
  recentBadges: string[];
  reviews: DriverReview[];
}

export const SAMPLE_DRIVERS: Driver[] = [
  {
    id: 'drv-01',
    name: 'Rajesh Varma',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80',
    experienceYears: 9,
    rating: 4.95,
    totalTrips: 1840,
    hourlyRateINR: 299,
    rewardTier: 'Platinum',
    isIdentityVerified: true,
    isBackgroundChecked: true,
    licenseNumberMasked: 'DL-04****8921',
    specialties: ['VIP Chauffeur', 'Highway Cruising', 'Night Driving'],
    bio: 'Former embassy chauffeur with 9+ years of experience across luxury sedans and family SUVs. Punctual, quiet, and safety-first mindset.',
    location: 'Banjara Hills / Jubilee Hills, Hyderabad',
    languages: ['English', 'Hindi', 'Telugu'],
    vehicleExpertise: ['Automatic', 'Luxury Sedan', 'SUV'],
    behaviourScores: {
      professionalism: 99,
      drivingSafety: 98,
      punctuality: 97,
      routeAwareness: 96,
      customerComfort: 99,
      reliability: 100,
    },
    overallScore: 98.2,
    recentBadges: ['Zero Harsh Braking (500 Trips)', 'Master Navigator', '100% Punctual Month'],
    reviews: [
      { id: 'rev-1', author: 'Aditya K.', rating: 5, comment: 'Drove our BMW 5-Series to airport during peak storm. Extremely calm and cautious.', date: '3 days ago' },
      { id: 'rev-2', author: 'Sunita M.', rating: 5, comment: 'Very professional demeanour, immaculately dressed chauffeur standards.', date: '1 week ago' },
    ],
  },
  {
    id: 'drv-02',
    name: 'Vikram Singh Shekhawat',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80',
    experienceYears: 7,
    rating: 4.88,
    totalTrips: 1320,
    hourlyRateINR: 249,
    rewardTier: 'Gold',
    isIdentityVerified: true,
    isBackgroundChecked: true,
    licenseNumberMasked: 'TS-09****4412',
    specialties: ['Interstate Travel', 'Mountain Driving', 'Manual Gearboxes'],
    bio: 'Expert in manual diesel SUVs and highway journeys. Known for defensive driving habits and smooth acceleration curve.',
    location: 'Gachibowli / Madhapur, Hyderabad',
    languages: ['Hindi', 'English'],
    vehicleExpertise: ['Manual', 'Automatic', 'SUV'],
    behaviourScores: {
      professionalism: 95,
      drivingSafety: 96,
      punctuality: 98,
      routeAwareness: 94,
      customerComfort: 93,
      reliability: 97,
    },
    overallScore: 95.5,
    recentBadges: ['Interstate Pro', 'Safe Speed Champion', 'Manual Master'],
    reviews: [
      { id: 'rev-3', author: 'Pranav R.', rating: 5, comment: 'Handled our Scorpio-N flawlessly on the outer ring road. Recommended!', date: '2 weeks ago' },
    ],
  },
  {
    id: 'drv-03',
    name: 'Ananya Deshmukh',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80',
    experienceYears: 6,
    rating: 4.97,
    totalTrips: 980,
    hourlyRateINR: 279,
    rewardTier: 'Platinum',
    isIdentityVerified: true,
    isBackgroundChecked: true,
    licenseNumberMasked: 'MH-12****3109',
    specialties: ['Executive Commutes', 'Electric Vehicles', 'Airport Escorts'],
    bio: 'Certified defensive driver specialist with extensive EV experience (Nexon EV, ZS EV, Ioniq 5). High emphasis on smooth regenerative braking.',
    location: 'Hitec City / Kondapur, Hyderabad',
    languages: ['English', 'Marathi', 'Hindi'],
    vehicleExpertise: ['Automatic', 'EV', 'Luxury Sedan'],
    behaviourScores: {
      professionalism: 99,
      drivingSafety: 99,
      punctuality: 99,
      routeAwareness: 97,
      customerComfort: 98,
      reliability: 99,
    },
    overallScore: 98.5,
    recentBadges: ['EV Efficiency Wizard', 'Top Rated Chauffeur', '5-Star Hospitality'],
    reviews: [
      { id: 'rev-4', author: 'Meera S.', rating: 5, comment: 'Ananya drove my Nexon EV smoothly and managed battery range exceptionally well.', date: 'Yesterday' },
    ],
  },
  {
    id: 'drv-04',
    name: 'Mohammed Farooq',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80',
    experienceYears: 12,
    rating: 4.92,
    totalTrips: 2650,
    hourlyRateINR: 320,
    rewardTier: 'Platinum',
    isIdentityVerified: true,
    isBackgroundChecked: true,
    licenseNumberMasked: 'TS-10****7002',
    specialties: ['Heavy Traffic Navigation', 'Wedding/Event Fleets', 'Multi-day Booking'],
    bio: '12+ years of pristine accident-free driving across Telangana and Karnataka. Patient in peak hour jams and adept with luxury European cars.',
    location: 'Secunderabad / Begumpet, Hyderabad',
    languages: ['Urdu', 'Hindi', 'Telugu', 'English'],
    vehicleExpertise: ['Automatic', 'Manual', 'Luxury Sedan', 'SUV'],
    behaviourScores: {
      professionalism: 97,
      drivingSafety: 98,
      punctuality: 96,
      routeAwareness: 99,
      customerComfort: 96,
      reliability: 98,
    },
    overallScore: 97.3,
    recentBadges: ['12-Year Clean Record', 'Traffic Maestro', 'Gold Customer Favorite'],
    reviews: [
      { id: 'rev-5', author: 'Kiran B.', rating: 5, comment: 'Booked Farooq for a full day family wedding convoy. Totally stress-free.', date: '5 days ago' },
    ],
  },
  {
    id: 'drv-05',
    name: 'Suresh Nambiar',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80',
    experienceYears: 5,
    rating: 4.82,
    totalTrips: 740,
    hourlyRateINR: 219,
    rewardTier: 'Gold',
    isIdentityVerified: true,
    isBackgroundChecked: true,
    licenseNumberMasked: 'KL-07****6631',
    specialties: ['Daily Office Commute', 'City Errands', 'Night Shifts'],
    bio: 'Friendly and reliable driver specialized in city sedans and hatchbacks. Always on time, non-smoker, and maintains strict vehicle hygiene.',
    location: 'Kukatpally / Miyapur, Hyderabad',
    languages: ['Malayalam', 'English', 'Hindi', 'Telugu'],
    vehicleExpertise: ['Manual', 'Automatic'],
    behaviourScores: {
      professionalism: 94,
      drivingSafety: 93,
      punctuality: 97,
      routeAwareness: 93,
      customerComfort: 92,
      reliability: 95,
    },
    overallScore: 94.0,
    recentBadges: ['Punctuality Star', 'Clean Cabin Custodian'],
    reviews: [
      { id: 'rev-6', author: 'Deepak V.', rating: 5, comment: 'Great budget-friendly driver for city hospital runs and office commute.', date: '4 days ago' },
    ],
  },
  {
    id: 'drv-06',
    name: 'Gurpreet Singh',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80',
    experienceYears: 8,
    rating: 4.91,
    totalTrips: 1610,
    hourlyRateINR: 260,
    rewardTier: 'Gold',
    isIdentityVerified: true,
    isBackgroundChecked: true,
    licenseNumberMasked: 'PB-02****5519',
    specialties: ['Long Highway Stretches', 'Night Driving', 'Large 7-Seater SUVs'],
    bio: 'Specialist in Innova Crysta, Fortuner, and Safari long distance trips. Trained in first aid, emergency tire changes, and highway defensive protocol.',
    location: 'Financial District / Nanakramguda, Hyderabad',
    languages: ['Punjabi', 'Hindi', 'English'],
    vehicleExpertise: ['Manual', 'Automatic', 'SUV'],
    behaviourScores: {
      professionalism: 96,
      drivingSafety: 98,
      punctuality: 95,
      routeAwareness: 95,
      customerComfort: 96,
      reliability: 97,
    },
    overallScore: 96.2,
    recentBadges: ['Highway Guardian', 'Night Driving Certified'],
    reviews: [
      { id: 'rev-7', author: 'Sanjay P.', rating: 5, comment: 'Drove 650 km to Vijayawada and back. Smooth sailing throughout.', date: '1 month ago' },
    ],
  },
  {
    id: 'drv-07',
    name: 'Pooja Kashyap',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
    experienceYears: 4,
    rating: 4.79,
    totalTrips: 520,
    hourlyRateINR: 199,
    rewardTier: 'Silver',
    isIdentityVerified: true,
    isBackgroundChecked: true,
    licenseNumberMasked: 'TS-08****1920',
    specialties: ['City Errands', 'EV Commutes', 'Senior Citizen Care'],
    bio: 'Patient and attentive driver loved by family clients and senior citizens. Very gentle with speed breakers and lane transitions.',
    location: 'Somajiguda / Ameerpet, Hyderabad',
    languages: ['Hindi', 'Telugu', 'English'],
    vehicleExpertise: ['Automatic', 'EV'],
    behaviourScores: {
      professionalism: 95,
      drivingSafety: 94,
      punctuality: 92,
      routeAwareness: 91,
      customerComfort: 96,
      reliability: 94,
    },
    overallScore: 93.7,
    recentBadges: ['Gentle Driver Award', 'Senior Care Certified'],
    reviews: [
      { id: 'rev-8', author: 'Lalitha T.', rating: 5, comment: 'Accompanied my elderly parents for their routine doctor visits with extreme patience.', date: '2 weeks ago' },
    ],
  },
  {
    id: 'drv-08',
    name: 'Balaji Narayanan',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80',
    experienceYears: 10,
    rating: 4.93,
    totalTrips: 2100,
    hourlyRateINR: 289,
    rewardTier: 'Platinum',
    isIdentityVerified: true,
    isBackgroundChecked: true,
    licenseNumberMasked: 'TN-01****9941',
    specialties: ['German Luxury Cars', 'Precision Parking', 'Airport Transfers'],
    bio: 'Specialist in Audi, Mercedes-Benz, and Volvo automated systems. Rigorous pre-drive cockpit check and smooth throttle modulation.',
    location: 'Kavuri Hills / Madhapur, Hyderabad',
    languages: ['Tamil', 'Telugu', 'English', 'Hindi'],
    vehicleExpertise: ['Automatic', 'Luxury Sedan', 'SUV'],
    behaviourScores: {
      professionalism: 98,
      drivingSafety: 99,
      punctuality: 98,
      routeAwareness: 96,
      customerComfort: 97,
      reliability: 98,
    },
    overallScore: 97.6,
    recentBadges: ['Luxury Fleet Specialist', 'Precision Parking Pro', 'Zero Incident Decade'],
    reviews: [
      { id: 'rev-9', author: 'Venkat R.', rating: 5, comment: 'Handled our Mercedes E-Class with extreme care. Felt like a personal royal chauffeur.', date: '3 days ago' },
    ],
  },
];

export interface BookingData {
  bookingId: string;
  driverId: string;
  driverName: string;
  driverAvatar: string;
  driverRating: number;
  driverLicenseMasked: string;
  driverHourlyRate: number;
  pickupLocation: string;
  destination: string;
  tripDate: string;
  tripTime: string;
  durationHours: number;
  carModel: string;
  carRegistration: string;
  transmissionType: 'Manual' | 'Automatic';
  baseFare: number;
  safetyFee: number;
  promoDiscount: number;
  totalFare: number;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
  verificationCode: string;
  createdAt: string;
}
