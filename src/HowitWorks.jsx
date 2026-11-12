import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  Mail,
  Bell,
  RefreshCw,
  ChevronDown,
  ChevronUp
} from "lucide-react";

export default function HowItWorks() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0); // First FAQ open by default

  const faqs = [
    {
      question: "Do I need an account to book?",
      answer: "A free account lets you book, track, and manage your appointments in one place."
    },
    {
      question: "How do I know a hospital is genuine?",
      answer: "Every hospital on Prescripto is a verified partner. We work directly with healthcare providers to ensure listing accuracy and genuine doctor schedules."
    },
    {
      question: "Can I cancel or reschedule?",
      answer: "Yes, you can easily cancel or reschedule your upcoming appointments anytime from your personal Prescripto dashboard."
    },
    {
      question: "How will I know my appointment is confirmed?",
      answer: "As soon as you book your slot, you will receive an instant confirmation via email or SMS with your booking details."
    }
  ];

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
              <Link to="/how-it-works" className="text-indigo-600 font-semibold">How it works</Link>
              <Link to="/about" className="hover:text-indigo-600 transition-colors">About us</Link>
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
            <Link to="/how-it-works" className="block py-2 text-indigo-600 font-semibold">How it works</Link>
            <Link to="/about" className="block py-2 text-slate-600">About us</Link>
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
            How it works
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight">
            Book a doctor in three simple steps
          </h1>
          <p className="mt-6 text-lg text-indigo-100 max-w-xl leading-relaxed">
            From choosing a hospital to getting your confirmation, here is exactly how Prescripto works.
          </p>

          <div className="mt-8">
            <Link 
              to="/hospitals" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl text-sm shadow-lg hover:bg-indigo-50 transition"
            >
              <span>View our affiliated hospitals</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* Step 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm mb-4 shadow-md">
              1
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Step 1</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Choose a hospital</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Start with our list of affiliated hospitals. Filter by city, specialty or hospital type to find the one that suits you.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Every hospital is a verified partner</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>See opening hours and specialties at a glance</span>
              </li>
            </ul>
          </div>

          {/* Step 1 Visual Card UI */}
          <div className="bg-indigo-50/60 p-8 rounded-3xl border border-indigo-100 flex items-center justify-center">
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm w-full max-w-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">Open 24/7</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Riverside General Hospital</h4>
              <p className="text-xs text-slate-400 mb-3">★ 4.8 · 1,240 reviews</p>
              <div className="flex gap-1.5 mb-4">
                <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-md font-medium">Cardiology</span>
                <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-md font-medium">Pediatrics</span>
                <span className="text-[10px] bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-md font-medium">Neurology</span>
              </div>
              <button className="w-full py-2 bg-indigo-600 text-white text-xs font-semibold rounded-xl shadow-xs">
                View doctors →
              </button>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Step 2 Visual Card UI */}
          <div className="bg-indigo-50/60 p-8 rounded-3xl border border-indigo-100 flex items-center justify-center order-2 lg:order-1">
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm w-full max-w-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center">
                  AO
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Dr. Amara Okafor</h4>
                  <p className="text-xs text-indigo-600 font-medium">Cardiologist</p>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 mb-3">Cardiology Dept · Block B, Room 204</p>
              <div className="text-[11px] font-semibold text-slate-700 mb-3">
                <span className="text-slate-400 block text-[10px] font-normal">Next available</span>
                Today, 4:30 PM
              </div>
              <button className="w-full py-2 bg-indigo-600 text-white text-xs font-semibold rounded-xl shadow-xs">
                Book appointment
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm mb-4 shadow-md">
              2
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Step 2</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Pick a doctor</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Open a hospital to see the doctors who work there with their specialty, experience, consultation fee and earliest available slot.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Search by name or filter by department</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Check availability before you commit</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm mb-4 shadow-md">
              3
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Step 3</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Book your slot</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Choose a date and time that suits you, confirm your details, and your appointment is booked.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Confirmation by email or SMS</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-indigo-600 shrink-0" />
                <span>Reschedule or cancel from your account</span>
              </li>
            </ul>
          </div>

          {/* Step 3 Visual Time Picker UI */}
          <div className="bg-indigo-50/60 p-8 rounded-3xl border border-indigo-100 flex items-center justify-center">
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm w-full max-w-sm">
              <h5 className="font-bold text-slate-900 text-xs mb-3">Pick a time</h5>
              
              <div className="flex gap-2 text-xs mb-4">
                <span className="px-3 py-1.5 bg-indigo-600 text-white font-semibold rounded-lg">Today</span>
                <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg">Tomorrow</span>
                <span className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg">Wed</span>
              </div>

              <div className="grid grid-cols-3 gap-2 mb-4 text-xs font-medium text-center">
                <span className="py-2 bg-slate-100 text-slate-700 rounded-lg">3:00 PM</span>
                <span className="py-2 bg-indigo-50 text-indigo-600 border border-indigo-200 font-bold rounded-lg">4:30 PM</span>
                <span className="py-2 bg-slate-100 text-slate-700 rounded-lg">5:45 PM</span>
              </div>

              <button className="w-full py-2 bg-indigo-600 text-white text-xs font-semibold rounded-xl shadow-xs">
                Confirm booking
              </button>
            </div>
          </div>
        </div>

      </section>

      {/* After You Book Section */}
      <section className="bg-slate-50/60 border-t border-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">After you book</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">We keep you in the loop</h2>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs text-left">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Instant confirmation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You get an immediate SMS or email with your appointment details.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs text-left">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <Bell className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">A friendly reminder</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We remind you before your visit so you never miss an appointment.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xs text-left">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">Easy changes</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Plans change. Reschedule or cancel from your account settings.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Accordion FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-10">Common questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs transition"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-6 text-left font-bold text-slate-900 flex items-center justify-between gap-4"
              >
                <span className="text-sm sm:text-base">{faq.question}</span>
                {openFaq === index ? (
                  <ChevronUp className="w-5 h-5 text-indigo-600 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>
              
              {openFaq === index && (
                <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Ready to find your hospital?</h2>
            <p className="text-indigo-100 text-sm mt-2 max-w-xl">
              See our affiliated hospitals and the doctors waiting to help you.
            </p>
          </div>
          <Link 
            to="/hospitals" 
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl text-sm hover:bg-indigo-50 transition shadow-md whitespace-nowrap flex items-center gap-2"
          >
            <span>View our affiliated hospitals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
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