import React from 'react';
import { Link } from 'react-router-dom'
import { Building2, UserCheck, Clock, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";


export default function LandingPage() {
  return (
   
  
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* HEADER / NAVIGATION */}
      <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
              +
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">Prescripto</span>
          </div>

          {/* Nav Links */}
         {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
       <Link to="/" className="hover:text-indigo-600 transition-colors">
    Home
  </Link>
  <Link to="/hospitals" className="hover:text-indigo-600 transition-colors">
    Hospitals
  </Link>
 <Link to="/how-it-works" className="hover:text-indigo-600 transition-colors">
  How it works
</Link>
  <Link to="/about" className="hover:text-indigo-600 transition-colors">About us</Link> {/* <-- Update this line */}
</nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button className="text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors">
              Sign in
            </button>
            <button className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-indigo-700 shadow-sm transition-all">
              Get started
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-blue-500 text-white relative overflow-hidden">
        {/* Abstract Background Decorative Circles */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block bg-white/15 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide">
              Healthcare, made simple
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Find a hospital.<br />
              Meet the doctor.<br />
              Book in minutes.
            </h1>

            <p className="text-indigo-100 text-base sm:text-lg max-w-xl leading-relaxed">
              Prescripto partners with trusted hospitals so you can see who works where, choose the right doctor, and book an appointment online, without the queues.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
  to="/hospitals"
  className="bg-white text-indigo-600 text-sm font-semibold px-6 py-3.5 rounded-xl shadow-md hover:bg-indigo-50 transition-all flex items-center gap-2"
>
  View our affiliated hospitals
</Link>
             <Link
  to="/how-it-works"
  className="bg-white/10 hover:bg-white/20 text-white text-sm font-semibold px-6 py-3.5 rounded-xl backdrop-blur-md transition-all border border-white/20"
>
  How it works
</Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/15">
              <div>
                <p className="text-3xl font-extrabold">24+</p>
                <p className="text-indigo-200 text-xs mt-1">Affiliated hospitals</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold">500+</p>
                <p className="text-indigo-200 text-xs mt-1">Verified doctors</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold">10k+</p>
                <p className="text-indigo-200 text-xs mt-1">Appointments booked</p>
              </div>
            </div>
          </div>

          {/* Right Floating Cards Simulation */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center space-y-4">
            {/* Top Badge */}
            <div className="self-end mr-4 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-medium border border-white/20 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Verified partner: Riverside General
            </div>

            {/* Doctor Card */}
            <div className="bg-white text-slate-800 p-6 rounded-2xl shadow-2xl w-full max-w-md border border-slate-100 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-700 font-bold rounded-full flex items-center justify-center text-sm">
                  AO
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">Dr. Amara Okafor</h4>
                  <p className="text-xs text-slate-500">Cardiologist</p>
                </div>
              </div>
              <div className="text-xs text-slate-500 border-t border-slate-100 pt-3 flex justify-between">
                <span>Riverside General Hospital</span>
                <span className="font-semibold text-indigo-600">Today, 4:30 PM</span>
              </div>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold py-3 rounded-xl transition-all shadow-sm">
                Book appointment
              </button>
            </div>

            {/* Bottom Confirmation Tag */}
            <div className="self-start ml-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg text-xs border border-white/20 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <div>
                <p className="font-semibold leading-tight">Appointment confirmed</p>
                <p className="text-[10px] text-indigo-100">Confirmation sent to your email</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS PRESCRIPTO SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-bold text-indigo-600 tracking-wider uppercase mb-2">
            What is Prescripto
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
            Healthcare access, without the guesswork
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Prescripto is an online platform that partners with trusted hospitals. We bring each hospital and its doctors into one place, so you can see who is available and book an appointment without long queues or phone calls.
          </p>
        </div>

        {/* 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-indigo-50/50 border border-indigo-100/60 p-8 rounded-2xl hover:shadow-md transition-all">
            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Affiliated hospitals</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              We partner directly with hospitals, so every hospital on Prescripto is verified and ready to take bookings.
            </p>
          </div>

          <div className="bg-indigo-50/50 border border-indigo-100/60 p-8 rounded-2xl hover:shadow-md transition-all">
            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <UserCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Meet the doctors</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Open any hospital to see the doctors who work there, their specialty, experience, consultation fee, and next available slot.
            </p>
          </div>

          <div className="bg-indigo-50/50 border border-indigo-100/60 p-8 rounded-2xl hover:shadow-md transition-all">
            <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-lg mb-2">Book in minutes</h3>
            <p className="text-slate-500 text-xs leading-relaxed">
              Choose a time that suits you, confirm your details, and get a confirmation by email or SMS. No queues, no phone calls.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-20 bg-slate-100/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-xs font-bold text-indigo-600 tracking-wider uppercase mb-2">
              How it works
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Three steps to your appointment
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm mb-6">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Choose a hospital</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Browse our affiliated hospitals and filter by city or specialty.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm mb-6">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Pick a doctor</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                See the doctors at that hospital, their availability and fees.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm mb-6">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Book your slot</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Select a date and time and get an instant confirmation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="bg-indigo-600 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">
              Ready to book your appointment?
            </h2>
            <p className="text-indigo-100 text-xs sm:text-sm">
              See our affiliated hospitals and the doctors waiting to help you.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button className="bg-white text-indigo-600 text-xs font-bold px-5 py-3 rounded-xl hover:bg-indigo-50 transition-all">
              View our affiliated hospitals &rarr;
            </button>
            <button className="bg-indigo-700 hover:bg-indigo-800 text-white text-xs font-bold px-5 py-3 rounded-xl border border-indigo-500 transition-all">
              Partner with us
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-100 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Prescripto. All rights reserved.</p>
          <div className="flex items-center gap-6 font-medium">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms</a>
            <a href="#hospitals" className="hover:text-slate-600 transition-colors">For hospitals</a>
            <a href="#contact" className="hover:text-slate-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}