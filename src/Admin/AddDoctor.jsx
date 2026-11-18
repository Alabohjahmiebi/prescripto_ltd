import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Plus, Clock, Menu, X } from 'lucide-react';

export default function AddDoctor() {
  const navigate = useNavigate();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  // Form state initialized with placeholder/default values from the design
  const [formData, setFormData] = useState({
    fullName: 'Dr. Amara Okafor',
    specialty: 'Cardiologist',
    department: 'Cardiology',
    qualifications: 'MBBS, FWACP',
    experience: '14',
    room: 'Block B, Room 204',
    bio: '',
    fee: '$40',
    appointmentLength: '30 minutes',
    daysAvailable: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    timeRanges: [{ start: '09:00 AM', end: '04:00 PM' }],
  });

  const allDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const specialties = [
    'Cardiologist',
    'Neurologist',
    'Pediatrician',
    'Orthopedic Surgeon',
    'Dermatologist',
    'General Practitioner',
  ];

  const departments = [
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Orthopedics',
    'Dermatology',
    'General Medicine',
  ];

  const appointmentLengths = [
    '15 minutes',
    '20 minutes',
    '30 minutes',
    '45 minutes',
    '60 minutes',
  ];

  const navItems = [
    { name: 'Overview', path: '/admin/overview', active: false },
    { name: 'Doctors', path: '/admin/doctors', active: true },
    { name: 'Appointments', path: '/admin/appointments', active: false },
    { name: 'Schedules', path: '/admin/schedules', active: false },
    { name: 'Hospital profile', path: '/admin/profile', active: false },
  ];

  // Generate initials dynamically for the live preview card
  const getInitials = (name) => {
    if (!name.trim()) return 'DR';
    const cleaned = name.replace(/^Dr\.?\s+/i, '').trim();
    const parts = cleaned.split(/\s+/);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  const toggleDay = (day) => {
    setFormData((prev) => ({
      ...prev,
      daysAvailable: prev.daysAvailable.includes(day)
        ? prev.daysAvailable.filter((d) => d !== day)
        : [...prev.daysAvailable, day],
    }));
  };

  const handleTimeChange = (index, field, value) => {
    const updated = [...formData.timeRanges];
    updated[index][field] = value;
    setFormData({ ...formData, timeRanges: updated });
  };

  const addTimeRange = () => {
    setFormData((prev) => ({
      ...prev,
      timeRanges: [...prev.timeRanges, { start: '05:00 PM', end: '07:00 PM' }],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/admin/doctors');
  };

  // Compute next available day & start time for the live preview card
  const firstAvailableDay =
    allDays.find((d) => formData.daysAvailable.includes(d)) || 'Mon';
  const firstStartTime =
    formData.timeRanges[0]?.start.replace(/^0/, '') || '9:00 AM';

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans text-slate-800">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-white border-r border-slate-100 flex-col justify-between p-5 shrink-0">
        <div>
          <Link to="/" className="flex items-center gap-3 px-2 mb-8">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              +
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Prescripto
            </span>
          </Link>

          <nav className="space-y-1.5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  item.active
                    ? 'bg-indigo-50 text-indigo-600 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 px-2">
          <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0">
            RG
          </div>
          <div className="overflow-hidden">
            <p className="text-sm font-bold text-slate-900 truncate">
              Riverside General
            </p>
            <p className="text-xs text-slate-400 truncate">Hospital admin</p>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <aside className="relative w-64 bg-white h-full flex flex-col justify-between p-5 z-10 shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-8 px-2">
                <Link to="/" className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold">
                    +
                  </div>
                  <span className="text-lg font-bold text-slate-900">
                    Prescripto
                  </span>
                </Link>
                <button
                  onClick={() => setMobileSidebarOpen(false)}
                  className="text-slate-500 p-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="space-y-1.5">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileSidebarOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-medium ${
                      item.active
                        ? 'bg-indigo-50 text-indigo-600 font-semibold'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-slate-100 px-2">
              <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                RG
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Riverside General
                </p>
                <p className="text-xs text-slate-400">Hospital admin</p>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Top Bar */}
        <div className="lg:hidden bg-white border-b border-slate-100 px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
          >
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-bold text-slate-900 text-sm">Add a doctor</span>
        </div>

        <main className="flex-1 p-6 lg:p-10 max-w-6xl w-full mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs mb-2">
            <Link
              to="/admin/doctors"
              className="text-indigo-600 font-semibold hover:underline"
            >
              Doctors
            </Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-500">Add doctor</span>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Add a doctor
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Doctors are reviewed by Prescripto before they appear on your hospital page.
            </p>
          </div>

          {/* Two-Column Form & Live Preview Layout */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            {/* Left Column: Form Cards */}
            <div className="lg:col-span-8 space-y-6">
              {/* Card 1: Profile */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-2xs">
                <h2 className="text-base font-bold text-slate-900 mb-6">
                  Profile
                </h2>

                {/* Photo Upload */}
                <div className="flex items-center gap-5 mb-6">
                  <label className="w-16 h-16 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 hover:border-indigo-500 hover:text-indigo-600 cursor-pointer transition shrink-0">
                    <Plus className="w-5 h-5" />
                    <input type="file" accept="image/png, image/jpeg" className="hidden" />
                  </label>
                  <div>
                    <label className="inline-block px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 cursor-pointer transition shadow-2xs">
                      Upload photo
                      <input type="file" accept="image/png, image/jpeg" className="hidden" />
                    </label>
                    <p className="text-[11px] text-slate-400 mt-1.5">
                      JPG or PNG, up to 5 MB
                    </p>
                  </div>
                </div>

                {/* Form Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Full name
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder="Dr. Amara Okafor"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                    />
                  </div>

                  {/* Specialty */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Specialty
                    </label>
                    <div className="relative">
                      <select
                        value={formData.specialty}
                        onChange={(e) =>
                          setFormData({ ...formData, specialty: e.target.value })
                        }
                        className="w-full appearance-none px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 cursor-pointer"
                      >
                        {specialties.map((spec) => (
                          <option key={spec} value={spec}>
                            {spec}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Department */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Department
                    </label>
                    <div className="relative">
                      <select
                        value={formData.department}
                        onChange={(e) =>
                          setFormData({ ...formData, department: e.target.value })
                        }
                        className="w-full appearance-none px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 cursor-pointer"
                      >
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>
                            {dept}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Qualifications */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Qualifications
                    </label>
                    <input
                      type="text"
                      value={formData.qualifications}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          qualifications: e.target.value,
                        })
                      }
                      placeholder="MBBS, FWACP"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                    />
                  </div>

                  {/* Years of experience */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Years of experience
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={formData.experience}
                      onChange={(e) =>
                        setFormData({ ...formData, experience: e.target.value })
                      }
                      placeholder="14"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                    />
                  </div>

                  {/* Room or block */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Room or block
                    </label>
                    <input
                      type="text"
                      value={formData.room}
                      onChange={(e) =>
                        setFormData({ ...formData, room: e.target.value })
                      }
                      placeholder="Block B, Room 204"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                    />
                  </div>
                </div>

                {/* Short bio */}
                <div className="mt-5">
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Short bio
                  </label>
                  <textarea
                    rows={3}
                    value={formData.bio}
                    onChange={(e) =>
                      setFormData({ ...formData, bio: e.target.value })
                    }
                    placeholder="A short introduction patients will see on the doctor's profile"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition resize-none"
                  />
                </div>
              </div>

              {/* Card 2: Consultation and availability */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-2xs">
                <h2 className="text-base font-bold text-slate-900 mb-6">
                  Consultation and availability
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
                  {/* Consultation fee */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Consultation fee
                    </label>
                    <input
                      type="text"
                      value={formData.fee}
                      onChange={(e) =>
                        setFormData({ ...formData, fee: e.target.value })
                      }
                      placeholder="$40"
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                    />
                  </div>

                  {/* Appointment length */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Appointment length
                    </label>
                    <div className="relative">
                      <select
                        value={formData.appointmentLength}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            appointmentLength: e.target.value,
                          })
                        }
                        className="w-full appearance-none px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 cursor-pointer"
                      >
                        {appointmentLengths.map((len) => (
                          <option key={len} value={len}>
                            {len}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Days available */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Days available
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {allDays.map((day) => {
                      const isSelected = formData.daysAvailable.includes(day);
                      return (
                        <button
                          type="button"
                          key={day}
                          onClick={() => toggleDay(day)}
                          className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                            isSelected
                              ? 'bg-indigo-600 text-white shadow-xs'
                              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Ranges */}
                <div className="space-y-4">
                  {formData.timeRanges.map((range, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                    >
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          Start time
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={range.start}
                            onChange={(e) =>
                              handleTimeChange(idx, 'start', e.target.value)
                            }
                            className="w-full px-3.5 py-2.5 pr-10 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                          />
                          <Clock className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          End time
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={range.end}
                            onChange={(e) =>
                              handleTimeChange(idx, 'end', e.target.value)
                            }
                            className="w-full px-3.5 py-2.5 pr-10 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
                          />
                          <Clock className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={addTimeRange}
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-700 transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add another time range</span>
                </button>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center justify-end gap-4 pt-2">
                <Link
                  to="/admin/doctors"
                  className="px-4 py-2.5 text-sm font-medium text-slate-500 hover:text-slate-700 transition"
                >
                  Cancel
                </Link>
                <button
                  type="button"
                  onClick={() => navigate('/admin/doctors')}
                  className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 transition shadow-2xs"
                >
                  Save as draft
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-sm transition"
                >
                  Submit for verification
                </button>
              </div>
            </div>

            {/* Right Column: Live Patient Preview */}
            <div className="lg:col-span-4 lg:sticky lg:top-8">
              <p className="text-xs font-medium text-slate-500 mb-3">
                How patients will see this doctor
              </p>

              <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-2xs">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-11 h-11 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center shrink-0">
                    {getInitials(formData.fullName)}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      {formData.fullName || 'Doctor Name'}
                    </h3>
                    <p className="text-xs font-medium text-indigo-600">
                      {formData.specialty || 'Specialty'}
                    </p>
                  </div>
                </div>

                <div className="text-xs text-slate-500 space-y-1 pb-4 border-b border-slate-100">
                  <p>
                    {formData.department || 'Department'} Dept
                    {formData.room ? ` · ${formData.room}` : ''}
                  </p>
                  <p className="text-slate-400">
                    {formData.experience ? `${formData.experience} yrs experience` : 'Experience'}
                  </p>
                </div>

                <div className="flex items-center justify-between py-4">
                  <div>
                    <span className="block text-[11px] text-slate-400">
                      Next available
                    </span>
                    <span className="text-xs font-bold text-slate-900">
                      {firstAvailableDay}, {firstStartTime}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[11px] text-slate-400">
                      Consultation
                    </span>
                    <span className="text-xs font-bold text-slate-900">
                      {formData.fee || '$0'}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full py-2.5 bg-indigo-600 text-white text-xs font-semibold rounded-xl shadow-xs cursor-default"
                >
                  Book appointment
                </button>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed mt-3">
                The card updates as you fill in the form. Patients can only book once the doctor is verified.
              </p>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}