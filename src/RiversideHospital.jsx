import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Star, 
  Search, 
  ChevronDown, 
  ArrowLeft
} from 'lucide-react';

export default function RiversideHospital() {
  const [activeTab, setActiveTab] = useState('doctors');
  const [activeDepartment, setActiveDepartment] = useState('All departments');
  const [searchQuery, setSearchQuery] = useState('');

  const doctors = [
    {
      id: 1,
      initials: 'AO',
      name: 'Dr. Amara Okafor',
      specialty: 'Cardiologist',
      department: 'Cardiology',
      location: 'Cardiology Dept · Block B, Room 204',
      experience: '14 yrs experience',
      rating: 4.9,
      nextAvailable: 'Today, 4:30 PM',
      consultationFee: 40,
    },
    {
      id: 2,
      initials: 'DM',
      name: 'Dr. Daniel Mensah',
      specialty: 'Neurologist',
      department: 'Neurology',
      location: 'Neurology Dept · Block A, Room 112',
      experience: '11 yrs experience',
      rating: 4.8,
      nextAvailable: 'Tomorrow, 9:00 AM',
      consultationFee: 45,
    },
    {
      id: 3,
      initials: 'SA',
      name: 'Dr. Sofia Alvarez',
      specialty: 'Pediatrician',
      department: 'Pediatrics',
      location: 'Pediatrics Dept · Block C, Room 305',
      experience: '9 yrs experience',
      rating: 5.0,
      nextAvailable: 'Today, 6:15 PM',
      consultationFee: 30,
    },
  ];

  const departments = ['All departments', 'Cardiology', 'Pediatrics', 'Neurology', 'Dermatology', 'Orthopedics'];

  return (
    <div className="min-h-screen bg-[#f8fa1c]/5 bg-slate-50 text-slate-800 font-sans">
      
      {/* Top Navigation */}
      <header className="bg-white border-b border-slate-100 px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
            +
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Prescripto</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link to="/hospitals" className="text-indigo-600 font-semibold">Hospitals</Link>
          <a href="#emergency" className="hover:text-indigo-600 transition-colors">Emergency</a>
          <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">How it works</a>
          <a href="#about" className="hover:text-indigo-600 transition-colors">About us</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-xl transition">
            Sign in
          </button>
          <button className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition shadow-sm">
            Get started
          </button>
        </div>
      </header>

      {/* Blue Header Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-500 text-white px-8 md:px-16 pt-6 pb-10 relative overflow-hidden">
        
        {/* Back Link */}
        <Link to="/hospitals" className="inline-flex items-center gap-1.5 text-indigo-100 hover:text-white text-xs font-semibold mb-6 transition">
          ← Back to hospitals
        </Link>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-inner flex-shrink-0">
              <div className="w-8 h-8 rounded-lg border-2 border-white flex items-center justify-center text-white font-bold">
                +
              </div>
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Riverside General Hospital</h1>
              
              <div className="flex flex-wrap items-center gap-3 text-xs text-indigo-100 mb-4">
                <span className="flex items-center gap-1 text-amber-300 font-semibold">
                  ★ 4.8 · 1,240 reviews
                </span>
                <span>•</span>
                <span>24 Harbour Road, Central District</span>
                <span>•</span>
                <span>Verified partner hospital</span>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full font-medium">Open 24/7</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full font-medium">Emergency services</span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full font-medium">Accepts insurance</span>
              </div>
            </div>
          </div>

          <button className="px-6 py-2.5 bg-white text-indigo-600 font-semibold rounded-xl text-sm hover:bg-indigo-50 transition shadow-md self-start md:self-center">
            Call hospital
          </button>
        </div>
      </div>

      {/* Tabs Row */}
      <div className="bg-white border-b border-slate-200 px-8 md:px-16 flex gap-8">
        {[
          { id: 'doctors', label: 'Doctors (48)' },
          { id: 'about', label: 'About' },
          { id: 'services', label: 'Services' },
          { id: 'reviews', label: 'Reviews' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-4 text-sm font-semibold border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-indigo-600 text-indigo-600'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 md:px-8 py-8">
        
        {/* Title & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Doctors at Riverside General</h2>
            <p className="text-xs text-slate-500 mt-1">48 doctors across 12 departments</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search doctors by name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-4 pr-10 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64 shadow-xs"
              />
            </div>

            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-600 shadow-xs">
              Sort by: <span className="font-bold text-slate-900">Earliest available</span> <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Department Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDepartment(dept)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeDepartment === dept
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Doctor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc) => (
            <div 
              key={doc.id} 
              className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 font-bold flex items-center justify-center text-base border border-indigo-100 flex-shrink-0">
                      {doc.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{doc.name}</h3>
                      <p className="text-xs text-indigo-600 font-medium">{doc.specialty}</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 bg-amber-50 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-md border border-amber-200/60">
                    ★ {doc.rating}
                  </span>
                </div>

                <div className="text-xs text-slate-500 space-y-1 mb-6 border-b border-slate-100 pb-4">
                  <p className="font-medium text-slate-700">{doc.location}</p>
                  <p>{doc.experience}</p>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs mb-4">
                  <div>
                    <span className="text-slate-400 block text-[11px] mb-0.5">Next available</span>
                    <span className="font-bold text-slate-800">{doc.nextAvailable}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400 block text-[11px] mb-0.5">Consultation</span>
                    <span className="font-bold text-slate-900">${doc.consultationFee}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl shadow-xs transition">
                    Book appointment
                  </button>
                  <button className="w-full py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold rounded-xl transition">
                    View profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center text-xs text-slate-500">
          Showing 3 of 48 doctors · <button className="text-indigo-600 font-semibold hover:underline">Load more doctors</button>
        </div>

      </main>
    </div>
  );
}