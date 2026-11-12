import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Search, 
  Star, 
  MapPin, 
  ChevronRight, 
  SlidersHorizontal,
  PlusCircle,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All hospitals');

  const hospitals = [
    {
      id: 1,
      name: 'Riverside General Hospital',
      badge: 'Open 24/7',
      partnerBadge: 'Verified partner',
      rating: '4.8',
      reviews: '1,240 reviews',
      address: '24 Harbour Road, Central District',
      specialties: ['Cardiology', 'Pediatrics', 'Neurology'],
      doctorsCount: 48,
    },
    {
      id: 2,
      name: 'St. Mary’s Medical Center',
      badge: 'Open 24/7',
      partnerBadge: 'Verified partner',
      rating: '4.7',
      reviews: '860 reviews',
      address: '9 Hillview Avenue, Westside',
      specialties: ['Maternity', 'Oncology', 'Radiology'],
      doctorsCount: 36,
    },
    {
      id: 3,
      name: 'Unity Specialist Hospital',
      badge: 'Open now',
      partnerBadge: 'Verified partner',
      rating: '4.9',
      reviews: '1,010 reviews',
      address: '57 Unity Close, North Park',
      specialties: ['Orthopedics', 'Dermatology', 'ENT'],
      doctorsCount: 29,
    },
  ];

  const filterTabs = ['All hospitals', '24/7 Emergency', 'General', 'Specialist', 'Maternity', "Children's"];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation Bar */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-200">
                <PlusCircle className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-gray-900">Prescripto</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
              <a href="#" className="text-blue-600 font-semibold">Hospitals</a>
              <a href="#" className="hover:text-blue-600 transition">Emergency</a>
              <Link to="/how-it-works" className="hover:text-indigo-600 transition-colors">
               How it works
              </Link>
           <Link to="/about" className="hover:text-indigo-600 transition-colors">About us</Link> {/* <-- Update this line */}
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-blue-600 transition">
              Sign in
            </button>
            <button className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 transition rounded-xl shadow-md shadow-blue-200">
              Get started
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-6 space-y-3">
            <a href="#" className="block py-2 text-blue-600 font-semibold">Hospitals</a>
            <a href="#" className="block py-2 text-gray-600">Emergency</a>
            <a href="#" className="block py-2 text-gray-600">How it works</a>
            <a href="#" className="block py-2 text-gray-600">About us</a>
            <div className="pt-4 flex flex-col space-y-2">
              <button className="w-full py-2.5 text-sm font-semibold text-gray-700 border border-gray-200 rounded-xl">Sign in</button>
              <button className="w-full py-2.5 text-sm font-semibold text-white bg-blue-600 rounded-xl">Get started</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 text-white pt-12 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative background circle */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none transform translate-x-32 -translate-y-20"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-2xl leading-tight">
            Find a partner hospital, then book your doctor
          </h1>
          <p className="mt-4 text-lg text-blue-100 max-w-xl">
            Browse our affiliated hospitals, see the doctors who work there, and book an appointment in minutes.
          </p>

          {/* Search Card Bar */}
          <div className="mt-8 bg-white text-gray-800 rounded-2xl shadow-xl p-3 grid grid-cols-1 md:grid-cols-4 gap-3 items-center">
            <div className="px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
              <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">City or area</span>
              <span className="text-sm font-medium text-gray-900">All areas</span>
            </div>
            <div className="px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
              <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Specialty</span>
              <span className="text-sm font-medium text-gray-900">All specialties</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">Hospital type</span>
              <span className="text-sm font-medium text-gray-900">All types</span>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-6 rounded-xl transition flex items-center justify-center space-x-2 shadow-md shadow-blue-200">
              <Search className="w-5 h-5" />
              <span>Show hospitals</span>
            </button>
          </div>

          {/* Stepper Footer inside Hero */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm font-medium text-blue-100">
            <div className="flex items-center space-x-2">
              <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold text-white">1</span>
              <span className="text-white font-semibold">Find a hospital</span>
            </div>
            <div className="flex items-center space-x-2 opacity-75">
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">2</span>
              <span>Choose a doctor</span>
            </div>
            <div className="flex items-center space-x-2 opacity-75">
              <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">3</span>
              <span>Book your slot</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Our partner hospitals</h2>
              <p className="text-sm text-gray-500 mt-1">24 verified hospitals on Prescripto</p>
            </div>

            <div className="flex items-center space-x-3 self-end md:self-auto">
              <span className="text-sm text-gray-500 font-medium">Sort by:</span>
              <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-800 shadow-xs hover:border-gray-300 transition">
                <span>Top rated</span>
                <SlidersHorizontal className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="mt-6 flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedFilter(tab)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition shadow-xs ${
                  selectedFilter === tab
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-100'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Hospitals Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hospitals.map((hospital) => (
              <div 
                key={hospital.id} 
                className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Card Header Illustration Area */}
                  <div className="bg-blue-50/60 h-48 relative flex items-center justify-center border-b border-gray-100">
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-emerald-600 shadow-xs">
                      {hospital.badge}
                    </div>
                    <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-xs">
                      {hospital.partnerBadge}
                    </div>
                    {/* Placeholder Building Icon */}
                    <Building2 className="w-16 h-16 text-blue-300 group-hover:scale-105 transition duration-300" />
                  </div>

                  {/* Card Body Details */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition">
                      {hospital.name}
                    </h3>
                    
                    <div className="flex items-center space-x-1.5 mt-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-bold text-gray-800">{hospital.rating}</span>
                      <span className="text-sm text-gray-400">· {hospital.reviews}</span>
                    </div>

                    <div className="flex items-center space-x-1.5 mt-3 text-sm text-gray-500">
                      <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                      <span className="truncate">{hospital.address}</span>
                    </div>

                    {/* Specialty tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {hospital.specialties.map((spec, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0">
                  <div className="border-t border-gray-100 pt-4 flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-600 font-medium">
                      <strong className="text-gray-900 font-bold">{hospital.doctorsCount} doctors</strong> available to book
                    </span>
                  </div>
                  <Link 
    to={hospital.id === 1 ? "/hospitals/riverside" : "#"} 
    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition flex items-center justify-center space-x-2 shadow-sm shadow-blue-100"
  >
    <span>View doctors</span>
    <ChevronRight className="w-4 h-4" />
  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination/Load more footer */}
          <div className="mt-12 text-center text-sm text-gray-500 font-medium">
            Showing 3 of 24 hospitals · <button className="text-blue-600 hover:underline font-semibold">Load more hospitals</button>
          </div>

        </div>
      </main>
    </div>
  );
}