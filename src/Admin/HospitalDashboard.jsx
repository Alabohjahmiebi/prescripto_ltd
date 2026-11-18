import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Plus, Menu, X } from 'lucide-react';

export default function HospitalDashboard() {
  const [statusFilter, setStatusFilter] = useState('All');
  const [departmentFilter, setDepartmentFilter] = useState('All departments');
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const doctorsData = [
    {
      id: 1,
      initials: 'AO',
      name: 'Dr. Amara Okafor',
      specialty: 'Cardiologist',
      department: 'Cardiology',
      experience: '14 yrs',
      fee: '$40',
      availability: 'Mon–Fri · 9 AM–4 PM',
      status: 'Live',
    },
    {
      id: 2,
      initials: 'DM',
      name: 'Dr. Daniel Mensah',
      specialty: 'Neurologist',
      department: 'Neurology',
      experience: '11 yrs',
      fee: '$45',
      availability: 'Mon, Wed, Fri · 10 AM–5 PM',
      status: 'Live',
    },
    {
      id: 3,
      initials: 'SA',
      name: 'Dr. Sofia Alvarez',
      specialty: 'Pediatrician',
      department: 'Pediatrics',
      experience: '9 yrs',
      fee: '$30',
      availability: 'Mon–Sat · 8 AM–2 PM',
      status: 'Live',
    },
    {
      id: 4,
      initials: 'KB',
      name: 'Dr. Kwame Boateng',
      specialty: 'Orthopedic Surgeon',
      department: 'Orthopedics',
      experience: '16 yrs',
      fee: '$50',
      availability: 'Tue, Thu · 11 AM–6 PM',
      status: 'Pending',
    },
    {
      id: 5,
      initials: 'AB',
      name: 'Dr. Aisha Bello',
      specialty: 'Dermatologist',
      department: 'Dermatology',
      experience: '8 yrs',
      fee: '$35',
      availability: 'Mon–Fri · 1 PM–6 PM',
      status: 'Live',
    },
  ];

  const departments = [
    'All departments',
    'Cardiology',
    'Neurology',
    'Pediatrics',
    'Orthopedics',
    'Dermatology',
  ];

  const filteredDoctors = doctorsData.filter((doc) => {
    const matchesStatus =
      statusFilter === 'All' || doc.status === statusFilter;
    const matchesDepartment =
      departmentFilter === 'All departments' ||
      doc.department === departmentFilter;
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.department.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesDepartment && matchesSearch;
  });

  const navItems = [
    { name: 'Overview', path: '/admin/overview', active: false },
    { name: 'Doctors', path: '/admin/doctors', active: true },
    { name: 'Appointments', path: '/admin/appointments', active: false },
    { name: 'Schedules', path: '/admin/schedules', active: false },
    { name: 'Hospital profile', path: '/admin/profile', active: false },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans text-slate-800">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-white border-r border-slate-100 flex-col justify-between p-5 shrink-0">
        <div>
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 px-2 mb-8">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              +
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Prescripto
            </span>
          </Link>

          {/* Navigation Links */}
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

        {/* Bottom Hospital Profile Badge */}
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
        {/* Top Header Bar */}
        <header className="h-18 bg-white border-b border-slate-100 px-6 lg:px-10 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 max-w-md">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search doctors or appointments"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-10 py-2 bg-white border border-slate-200 rounded-xl text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/hospitals/riverside"
              className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition whitespace-nowrap"
            >
              View public page
            </Link>
            <div className="w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center border border-indigo-100">
              AD
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="flex-1 p-6 lg:p-10 max-w-7xl w-full mx-auto">
          {/* Page Title & Add Doctor CTA */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Doctors
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                Manage the doctors who appear on your hospital page.
              </p>
            </div>

            <Link
  to="/admin/doctors/add"
  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl shadow-sm transition self-start sm:self-auto"
>
  <Plus className="w-4 h-4" />
  <span>Add doctor</span>
</Link>
          </div>

          {/* KPI Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-2xs">
              <span className="text-xs font-medium text-slate-400 block mb-2">
                Total doctors
              </span>
              <span className="text-3xl font-bold text-slate-900">48</span>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-2xs">
              <span className="text-xs font-medium text-slate-400 block mb-2">
                Live on your page
              </span>
              <span className="text-3xl font-bold text-slate-900">44</span>
            </div>

            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-2xs">
              <span className="text-xs font-medium text-slate-400 block mb-2">
                Awaiting verification
              </span>
              <span className="text-3xl font-bold text-slate-900">4</span>
            </div>
          </div>

          {/* Doctors Table Card */}
          <div className="bg-white border border-slate-200/80 rounded-2xl shadow-2xs overflow-hidden">
            {/* Filter Controls Header */}
            <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Status Filter Pills */}
              <div className="flex items-center gap-2">
                {[
                  { label: 'All 48', value: 'All' },
                  { label: 'Live 44', value: 'Live' },
                  { label: 'Pending 4', value: 'Pending' },
                ].map((tab) => (
                  <button
                    key={tab.value}
                    onClick={() => setStatusFilter(tab.value)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                      statusFilter === tab.value
                        ? 'bg-indigo-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Department Dropdown */}
              <div className="relative">
                <select
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                  className="appearance-none bg-white border border-slate-200 rounded-xl pl-4 pr-10 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 cursor-pointer"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400">
                    <th className="py-3.5 px-6">Doctor</th>
                    <th className="py-3.5 px-4">Department</th>
                    <th className="py-3.5 px-4">Experience</th>
                    <th className="py-3.5 px-4">Fee</th>
                    <th className="py-3.5 px-4">Availability</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-6 text-right"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {filteredDoctors.map((doc) => (
                    <tr
                      key={doc.id}
                      className="hover:bg-slate-50/70 transition-colors"
                    >
                      {/* Doctor Info */}
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 font-bold text-xs flex items-center justify-center shrink-0">
                            {doc.initials}
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 text-xs sm:text-sm">
                              {doc.name}
                            </p>
                            <p className="text-xs text-slate-400">
                              {doc.specialty}
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Department */}
                      <td className="py-4 px-4 text-xs sm:text-sm text-slate-600">
                        {doc.department}
                      </td>

                      {/* Experience */}
                      <td className="py-4 px-4 text-xs sm:text-sm text-slate-600">
                        {doc.experience}
                      </td>

                      {/* Fee */}
                      <td className="py-4 px-4 text-xs sm:text-sm font-medium text-slate-800">
                        {doc.fee}
                      </td>

                      {/* Availability */}
                      <td className="py-4 px-4 text-xs sm:text-sm text-slate-600 whitespace-nowrap">
                        {doc.availability}
                      </td>

                      {/* Status Pill */}
                      <td className="py-4 px-4">
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${
                            doc.status === 'Live'
                              ? 'bg-emerald-50 text-emerald-600'
                              : 'bg-amber-50 text-amber-600'
                          }`}
                        >
                          {doc.status}
                        </span>
                      </td>

                      {/* Edit Action */}
                      <td className="py-4 px-6 text-right">
                        <button className="text-xs sm:text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition">
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
              <span>Showing {filteredDoctors.length} of 48 doctors</span>
              <button className="font-semibold text-indigo-600 hover:text-indigo-700 transition">
                Next page →
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}