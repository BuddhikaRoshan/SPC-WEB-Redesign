"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, FileText, Users, Target, Award, Briefcase, TrendingUp } from "lucide-react";

export default function GMOfficePage() {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    {
      name: "Mr. Rohan Wickramasinghe",
      position: "General Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      email: "gm@spc.lk",
      phone: "+94 11 234 5680",
    },
    {
      name: "Ms. Sanduni Fernando",
      position: "Deputy General Manager",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
      email: "dgm@spc.lk",
      phone: "+94 11 234 5681",
    },
    {
      name: "Mrs. Chamila Rajapakse",
      position: "Executive Secretary",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop",
      email: "gm.secretary@spc.lk",
      phone: "+94 11 234 5682",
    },
  ];

  const services = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Operational Management",
      description: "Overseeing daily operations across all divisions ensuring efficiency, productivity, and quality standards.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Resource Coordination",
      description: "Managing human resources, equipment allocation, and interdepartmental coordination for optimal performance.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Monitoring",
      description: "Tracking KPIs, analyzing operational metrics, and implementing continuous improvement initiatives.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Implementation",
      description: "Executing corporate strategies and ensuring alignment of operational activities with organizational goals.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Budget Management",
      description: "Planning and controlling operational budgets, optimizing costs, and ensuring financial accountability.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Maintaining ISO standards, quality control systems, and ensuring compliance with industry regulations.",
    },
  ];

  const responsibilities = [
    "Implementing corporate policies and strategies across all operational divisions",
    "Managing day-to-day operations and ensuring seamless coordination between departments",
    "Monitoring production schedules, quality standards, and delivery timelines",
    "Leading senior management team and conducting regular performance reviews",
    "Developing and managing operational budgets and resource allocation",
    "Building relationships with clients, suppliers, and government agencies",
    "Driving innovation and process improvements throughout the organization",
    "Ensuring compliance with health, safety, and environmental regulations",
  ];

  const departments = [
    "Human Resources & Administration",
    "Finance Division",
    "Supplies Division",
    "Marketing Division",
    "Security Printing",
    "Stationery Factory",
    "Production & Process Units",
    "Maintenance & Engineering",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#2b1052] via-blue-900 to-[#2b1052] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="inline-block mb-4">
            <span className="bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-400/30">
              Corporate Division
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            General Manager Office
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            The operational leadership driving excellence, efficiency, and innovation across all divisions of State Printing Corporation
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex space-x-8 overflow-x-auto">
            {["overview", "team", "services"].map((tab) => (
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
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-16 animate-fadeIn">
            {/* About Section */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-blue-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">About the Division</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The General Manager Office serves as the operational nerve center of State Printing Corporation, 
                  responsible for translating strategic vision into actionable results. This division oversees the 
                  coordination and management of all operational activities, ensuring seamless integration between 
                  service divisions, production units, and support functions.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  With a focus on operational excellence, innovation, and customer satisfaction, the GM Office drives 
                  continuous improvement initiatives, manages resources effectively, and maintains the highest standards 
                  of quality and efficiency across all printing and stationery operations.
                </p>
              </div>
            </section>

            {/* Key Responsibilities */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-amber-500 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Key Responsibilities</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {responsibilities.map((responsibility, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Departments Under GM */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-blue-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Divisions Under Supervision</h2>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 border border-blue-100">
                <div className="grid md:grid-cols-4 gap-4">
                  {departments.map((dept, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-blue-600 group-hover:scale-150 transition-transform"></div>
                        <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                          {dept}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Office Hours */}
            <section>
              <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Weekdays</p>
                    <p className="text-2xl font-bold text-blue-600">8:30 AM - 4:15 PM</p>
                    <p className="text-sm text-gray-500 mt-2">Monday to Friday</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Lunch Break</p>
                    <p className="text-2xl font-bold text-amber-600">12:30 PM - 1:15 PM</p>
                    <p className="text-sm text-gray-500 mt-2">Daily</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Meetings</p>
                    <p className="text-lg text-gray-700">By Appointment</p>
                    <p className="text-sm text-gray-500 mt-2">Contact secretary</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === "team" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-blue-600 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Our Management Team</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-100 to-amber-100">
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
                      <p className="text-xs">State Printing Corporation, Colombo 08, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Organizational Structure Note */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Organizational Structure</h3>
              <p className="text-gray-700 leading-relaxed">
                The General Manager Office operates with a collaborative leadership model, ensuring efficient 
                decision-making and clear communication channels across all organizational levels. The Deputy General 
                Manager assists in overseeing specific operational areas, while the Executive Secretary manages 
                administrative coordination, scheduling, and stakeholder communications.
              </p>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-amber-500 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Services & Functions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-400 to-blue-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Operational Excellence</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  We are committed to maintaining the highest standards of operational efficiency through 
                  continuous process improvement, technology adoption, and employee development.
                </p>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    ISO 9001:2015 Certified
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    Lean Manufacturing Practices
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    6S Workplace Organization
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Innovation & Growth</h3>
                <p className="text-amber-100 leading-relaxed mb-4">
                  Driving organizational transformation through digital initiatives, automation, and 
                  sustainable practices to position SPC as a leader in the printing industry.
                </p>
                <ul className="space-y-2 text-amber-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    Digital Transformation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    Sustainable Operations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    Customer-Centric Approach
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-gradient-to-r from-[#2b1052] to-blue-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
              <div className="relative">
                <h3 className="text-3xl font-bold mb-4">Get in Touch with GM Office</h3>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  For operational inquiries, partnership opportunities, or to schedule a meeting with the 
                  General Manager, please contact our office during business hours.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
                >
                  Contact Us
                </a>
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