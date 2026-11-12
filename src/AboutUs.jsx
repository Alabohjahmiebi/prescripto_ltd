import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  Shield,
  Search,
  Clock,
  Heart
} from "lucide-react";

export default function AboutUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      
      {/* Navigation Bar */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-200 font-bold">
                +
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">Prescripto</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
              <Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link>
              <Link to="/hospitals" className="hover:text-indigo-600 transition-colors">Hospitals</Link>
              <a href="#how-it-works" className="hover:text-indigo-600 transition-colors">How it works</a>
              <Link to="/about" className="text-indigo-600 font-semibold">About us</Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-5 py-2.5 text-sm font-semibold text-slate-700 hover:text-indigo-600 transition">
              Sign in
            </button>
            <button className="px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition rounded-xl shadow-md shadow-indigo-200">
              Get started
            </button>
          </div>

          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <Link to="/" className="block py-2 text-slate-600 font-medium">Home</Link>
            <Link to="/hospitals" className="block py-2 text-slate-600">Hospitals</Link>
            <a href="#how-it-works" className="block py-2 text-slate-600">How it works</a>
            <Link to="/about" className="block py-2 text-indigo-600 font-semibold">About us</Link>
            <div className="pt-4 flex flex-col space-y-2">
              <button className="w-full py-2.5 text-sm font-semibold text-slate-700 border border-slate-200 rounded-xl">Sign in</button>
              <button className="w-full py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-xl">Get started</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Banner Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none transform translate-x-32 -translate-y-20"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <span className="inline-block px-3.5 py-1 bg-white/15 backdrop-blur-md rounded-full text-xs font-semibold tracking-wider mb-6 text-indigo-100 border border-white/20">
            About Prescripto
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Making it easier to reach the right care
          </h1>
          <p className="mt-6 text-lg text-indigo-100 max-w-xl leading-relaxed">
            Prescripto connects patients with trusted partner hospitals and the doctors who work there, so booking an appointment is simple, clear and fast.
          </p>
        </div>
      </section>

      {/* Mission & Key Points Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Our Mission */}
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Our mission</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Finding a doctor shouldn’t mean long queues and phone calls
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Too often, getting an appointment means travelling to a hospital just to ask who is available, or calling again and again to get through.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We work directly with hospitals to bring their doctors and schedules online, so you can choose a hospital you trust, see who works there, and book a time that suits you.
            </p>
          </div>

          {/* Right Column: Value Points Container */}
          <div className="bg-indigo-50/50 border border-indigo-100/80 rounded-3xl p-8 space-y-6 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 mt-1 shadow-xs">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Partner hospitals only</h3>
                <p className="text-sm text-slate-600 mt-1">Every hospital on Prescripto is an affiliate we work with directly.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 mt-1 shadow-xs">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Real doctor availability</h3>
                <p className="text-sm text-slate-600 mt-1">Schedules come from the hospital, so the times you see are the times you can book.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center flex-shrink-0 mt-1 shadow-xs">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Clear confirmation</h3>
                <p className="text-sm text-slate-600 mt-1">You get a confirmation by email or SMS as soon as your appointment is booked.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-slate-50/60 border-t border-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">What we stand for</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Our values</h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Trust */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs text-left flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Trust</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We only list hospitals we partner with, and we protect your personal and health information.
                </p>
              </div>
            </div>

            {/* Transparency */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs text-left flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Transparency</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Doctors, specialties, fees and availability are shown upfront, with no surprises.
                </p>
              </div>
            </div>

            {/* Simplicity */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs text-left flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Simplicity</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  From choosing a hospital to confirming a slot, booking takes minutes, not days.
                </p>
              </div>
            </div>

            {/* Patient First */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs text-left flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">Patient first</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every decision we make starts with how it helps patients get care sooner.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Is your hospital ready to join us?</h2>
            <p className="text-indigo-100 text-sm mt-2 max-w-xl">
              Partner with Prescripto so patients can find your doctors and book appointments online.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
            <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl text-sm hover:bg-indigo-50 transition shadow-md">
              Partner with us
            </button>
            <Link 
              to="/hospitals" 
              className="px-6 py-3 bg-white/15 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl text-sm hover:bg-white/25 transition"
            >
              View our affiliated hospitals
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-8 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Prescripto. All rights reserved.</p>
          <div className="flex items-center space-x-6 font-medium text-slate-600">
            <a href="#" className="hover:text-indigo-600 transition">Privacy</a>
            <a href="#" className="hover:text-indigo-600 transition">Terms</a>
            <a href="#" className="hover:text-indigo-600 transition">For hospitals</a>
            <a href="#" className="hover:text-indigo-600 transition">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}