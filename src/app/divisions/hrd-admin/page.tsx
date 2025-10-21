"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Users, Award, BookOpen, Briefcase, HeartHandshake, Shield, Calendar, FileCheck } from "lucide-react";

export default function HRDAdminDivisionPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    {
      name: "Mrs. Sandya Rajapaksha",
      position: "Division Manager - HRD & Admin",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      email: "hrd.manager@spc.lk",
      phone: "+94 11 234 5683",
    },
    {
      name: "Mr. Sunil Karunaratne",
      position: "HR Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      email: "hr.manager@spc.lk",
      phone: "+94 11 234 5684",
    },
    {
      name: "Ms. Madhavi Bandara",
      position: "Admin Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      email: "admin.manager@spc.lk",
      phone: "+94 11 234 5685",
    },
  ];

  const services = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Recruitment & Selection",
      description: "End-to-end recruitment services including job posting, screening, interviewing, and onboarding of new employees.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Training & Development",
      description: "Comprehensive training programs, skill development workshops, and continuous learning opportunities for all staff.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Performance Management",
      description: "Performance appraisal systems, goal setting, feedback mechanisms, and career development planning.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Employee Relations",
      description: "Managing employee welfare, grievance handling, workplace harmony, and union relations.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Administrative Services",
      description: "Facility management, security, transport, maintenance, and general administrative support services.",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "HR Records & Compliance",
      description: "Personnel file management, statutory compliance, leave administration, and HR documentation.",
    },
  ];

  const responsibilities = [
    "Managing recruitment, selection, and onboarding of all employees",
    "Developing and implementing training and development programs",
    "Conducting performance appraisals and managing career progression",
    "Maintaining employee records and HR information systems",
    "Administering employee benefits, leave, and attendance systems",
    "Handling employee relations, grievances, and disciplinary matters",
    "Ensuring compliance with labor laws and employment regulations",
    "Managing facility operations, security, and administrative services",
  ];

  const departments = [
    {
      name: "Recruitment Section",
      description: "Job advertising, candidate screening, and selection processes",
    },
    {
      name: "Training & Development",
      description: "Skills training, leadership programs, and professional development",
    },
    {
      name: "Employee Relations",
      description: "Welfare programs, grievance handling, and union coordination",
    },
    {
      name: "HR Records & Admin",
      description: "Personnel files, leave management, and documentation",
    },
    {
      name: "Facility Management",
      description: "Building maintenance, utilities, and workspace management",
    },
    {
      name: "Security & Transport",
      description: "Security services, vehicle fleet, and transportation logistics",
    },
  ];

  const capabilities = [
    { label: "Total Employees", value: "500+ staff" },
    { label: "Training Programs", value: "50+ annually" },
    { label: "HR Professionals", value: "25+ specialists" },
    { label: "Response Time", value: "24-48 hours" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      <div className="relative bg-gradient-to-r from-purple-900 via-green-800 to-purple-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="inline-block mb-4">
            <span className="bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-400/30">
              Corporate Division
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-200">
            HRD & Admin Division
          </h1>
          <p className="text-xl text-green-100 max-w-3xl leading-relaxed">
            Empowering our workforce through strategic human resource management and efficient administrative services
          </p>
        </div>
      </div>

      <div className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex space-x-8 overflow-x-auto">
            {["overview", "team", "services", "departments"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-semibold text-sm uppercase tracking-wide whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? "text-amber-600 border-b-2 border-amber-600"
                    : "text-gray-600 hover:text-amber-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        {activeTab === "overview" && (
          <div className="space-y-16 animate-fadeIn">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-green-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">About the Division</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The HRD & Admin Division is the heart of our organization's people management and administrative 
                  operations. We are committed to attracting, developing, and retaining talented professionals while 
                  creating a positive work environment that fosters productivity, innovation, and employee well-being.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our division manages the complete employee lifecycle from recruitment to retirement, while also 
                  overseeing critical administrative functions including facility management, security, and logistics.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-green-600 to-amber-500 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Key Metrics</h2>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all group"
                  >
                    <p className="text-green-100 text-sm mb-2">{capability.label}</p>
                    <p className="text-2xl font-bold group-hover:scale-110 transition-transform inline-block">
                      {capability.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-green-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Key Responsibilities</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {responsibilities.map((responsibility, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-green-600 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <div className="bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-8 border border-green-100">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Working Hours</p>
                    <p className="text-2xl font-bold text-green-600">8:30 AM - 4:15 PM</p>
                    <p className="text-sm text-gray-500 mt-2">Monday to Friday</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">HR Consultations</p>
                    <p className="text-xl font-bold text-green-600">9:00 AM - 3:30 PM</p>
                    <p className="text-sm text-gray-500 mt-2">By appointment</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Emergency Contact</p>
                    <p className="text-lg text-gray-700">24/7 Available</p>
                    <p className="text-sm text-gray-500 mt-2">For urgent matters</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === "team" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-green-600 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-green-100 to-amber-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-amber-300 font-semibold text-sm">{member.position}</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-700 hover:text-amber-600 transition-colors">
                      <Mail className="w-5 h-5 text-amber-500" />
                      <a href={`mailto:${member.email}`} className="hover:underline text-sm">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 hover:text-amber-600 transition-colors">
                      <Phone className="w-5 h-5 text-amber-500" />
                      <a href={`tel:${member.phone}`} className="hover:underline text-sm">
                        {member.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                      <p className="text-xs">HRD & Admin Division, State Printing Corporation</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-green-50 to-amber-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Dedicated HR Professionals</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our HRD & Admin team consists of over 25 qualified professionals including HR specialists, 
                training coordinators, administrative officers, and facility managers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are committed to maintaining a positive organizational culture that values diversity, promotes 
                continuous learning, and supports employee growth.
              </p>
            </div>
          </div>
        )}

        {activeTab === "services" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-green-600 to-amber-500 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Services & Capabilities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-green-200 transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-400 to-green-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-green-500 to-green-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Employee Welfare</h3>
                <p className="text-green-100 leading-relaxed mb-4">
                  We prioritize employee well-being through comprehensive welfare programs and health benefits.
                </p>
                <ul className="space-y-2 text-green-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    Medical Insurance and Healthcare
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    Employee Assistance Programs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    Recreation and Sports Activities
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Learning & Development</h3>
                <p className="text-amber-100 leading-relaxed mb-4">
                  Continuous professional development through structured training programs and workshops.
                </p>
                <ul className="space-y-2 text-amber-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-300"></div>
                    Technical Skills Training
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-300"></div>
                    Leadership Development
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-300"></div>
                    Professional Certifications
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-purple-900 to-green-800 rounded-2xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-30"></div>
              <div className="relative">
                <h3 className="text-3xl font-bold mb-4">Need HR Support?</h3>
                <p className="text-green-100 mb-8 max-w-2xl mx-auto">
                  Contact our HRD & Admin Division for recruitment inquiries, training requests, or administrative services.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
                >
                  Contact HRD Division
                </a>
              </div>
            </div>
          </div>
        )}

        {activeTab === "departments" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-green-600 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Departments & Sections</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-green-600 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.name}</h3>
                      <p className="text-gray-600 text-sm">{dept.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-br from-green-50 to-amber-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">HR Policies & Procedures</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our division maintains comprehensive HR policies aligned with Sri Lanka labor laws and best practices 
                in human resource management.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Employee Handbook</p>
                  <p className="text-xl font-bold text-green-600">Updated 2024</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Policy Reviews</p>
                  <p className="text-xl font-bold text-green-600">Annual</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Compliance Rate</p>
                  <p className="text-xl font-bold text-green-600">100%</p>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-green-500 to-green-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Employee Engagement Programs</h3>
              <p className="text-green-100 leading-relaxed mb-6">
                We organize regular employee engagement activities to build team spirit and recognize achievements.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-sm text-green-200 mb-2">Annual Events</p>
                  <p className="text-lg font-bold">12+ Programs</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-sm text-green-200 mb-2">Employee Satisfaction</p>
                  <p className="text-lg font-bold">85%+</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}