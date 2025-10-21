"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Shield, Lock, FileCheck, Printer, Award, Lightbulb, Users, Target, TrendingUp, CheckCircle } from "lucide-react";

export default function SecurityPrintingPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    {
      name: "Mr. Rohan Jayawardena",
      position: "Security Printing Division Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      email: "security.manager@spc.lk",
      phone: "+94 11 234 5900",
    },
    {
      name: "Ms. Chamari Silva",
      position: "Quality Assurance Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      email: "quality.security@spc.lk",
      phone: "+94 11 234 5901",
    },
    {
      name: "Mr. Dinesh Kumara",
      position: "Production Supervisor",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      email: "production.security@spc.lk",
      phone: "+94 11 234 5902",
    },
  ];

  const services = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "National Lottery Printing",
      description: "Specialized printing of lottery tickets for the National Lottery Board with advanced security features to prevent counterfeiting and ensure authenticity.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Security Features Integration",
      description: "Implementation of multi-layer security elements including holograms, UV printing, microtext, and unique serial numbering systems.",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Quality Verification",
      description: "Rigorous quality control processes at every production stage to ensure each lottery ticket meets the highest security and quality standards.",
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "Specialized Equipment",
      description: "Utilization of state-of-the-art security printing machinery and technology dedicated to secure document production.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Compliance Management",
      description: "Strict adherence to National Lottery Board regulations and security protocols throughout the entire production lifecycle.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Secure Distribution",
      description: "Controlled packaging and secure handover procedures ensuring chain of custody from printing to delivery.",
    },
  ];

  const responsibilities = [
    "Printing lottery tickets for National Lottery Board with advanced security features",
    "Implementing anti-counterfeiting measures and security protocols",
    "Managing secure serial numbering and tracking systems",
    "Conducting quality inspections at multiple production checkpoints",
    "Maintaining strict security controls throughout production facilities",
    "Coordinating with National Lottery Board for specifications and requirements",
    "Operating specialized security printing equipment and machinery",
    "Ensuring timely delivery of lottery tickets according to distribution schedules",
  ];

  const securityFeatures = [
    "Unique Serial Numbers",
    "Holographic Elements",
    "UV Reactive Printing",
    "Microtext Security",
    "Watermark Technology",
    "Color-Shifting Inks",
    "Security Threads",
    "Tamper-Evident Design",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#2b1052] via-blue-900 to-[#2b1052] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="inline-block mb-4">
            <span className="bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-blue-400/30">
              Production Division
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Security Printing Division
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Ensuring integrity and security in lottery ticket production for the National Lottery Board through advanced technology and stringent quality controls
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
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
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
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">About the Division</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The Security Printing Division is a specialized unit within State Printing Corporation dedicated 
                  to the production of lottery tickets for the National Lottery Board of Sri Lanka. With decades 
                  of expertise in secure document production, we employ cutting-edge security printing technology 
                  and stringent quality control measures to ensure every lottery ticket meets the highest standards 
                  of authenticity and security.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our division operates under strict security protocols and controlled environments, utilizing 
                  advanced anti-counterfeiting features, unique serial numbering systems, and multi-layer verification 
                  processes. We work in close partnership with the National Lottery Board to maintain public trust 
                  in the lottery system through secure, reliable, and tamper-proof ticket production.
                </p>
              </div>
            </section>

            {/* Key Responsibilities */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Key Responsibilities</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {responsibilities.map((responsibility, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Security Features */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Advanced Security Features</h2>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <div className="grid md:grid-cols-4 gap-4">
                  {securityFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                        <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                          {feature}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Production Process */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Production Process</h2>
              </div>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { step: "1", title: "Specification", desc: "Design approval & specs" },
                  { step: "2", title: "Pre-Press", desc: "Security setup" },
                  { step: "3", title: "Printing", desc: "Secure production" },
                  { step: "4", title: "Inspection", desc: "Quality verification" },
                  { step: "5", title: "Delivery", desc: "Secure handover" },
                ].map((phase, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white font-bold text-xl mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                    <p className="text-gray-600 text-sm">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Statistics */}
            <section>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: <Shield className="w-8 h-8" />, value: "100%", label: "Security Compliance" },
                  { icon: <Target className="w-8 h-8" />, value: "0", label: "Security Breaches" },
                  { icon: <TrendingUp className="w-8 h-8" />, value: "50M+", label: "Tickets Annually" },
                  { icon: <Award className="w-8 h-8" />, value: "99.9%", label: "Quality Rate" },
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Office Hours */}
            <section>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Division Hours</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Production Hours</p>
                    <p className="text-2xl font-bold text-blue-600">24/7</p>
                    <p className="text-sm text-gray-500 mt-2">Continuous Operations</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Office Hours</p>
                    <p className="text-2xl font-bold text-purple-600">8:30 AM - 4:15 PM</p>
                    <p className="text-sm text-gray-500 mt-2">Monday to Friday</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Security Access</p>
                    <p className="text-lg text-gray-700">Restricted Area</p>
                    <p className="text-sm text-gray-500 mt-2">Authorized personnel only</p>
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
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Our Security Team</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-blue-300 font-semibold text-sm">{member.position}</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <a href={`mailto:${member.email}`} className="hover:underline text-sm">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors">
                      <Phone className="w-5 h-5 text-blue-500" />
                      <a href={`tel:${member.phone}`} className="hover:underline text-sm">
                        {member.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                      <p className="text-xs">State Printing Corporation, Colombo 08, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Structure */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Division Structure</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Security Printing Division operates with highly trained specialists who undergo regular security 
                clearances and training programs. Our team includes printing technicians, quality control inspectors, 
                security coordinators, and production supervisors working in a strictly controlled environment to 
                maintain the integrity of lottery ticket production.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Production Unit</h4>
                  <p className="text-sm text-gray-600">Specialized printing operations</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Quality Assurance</h4>
                  <p className="text-sm text-gray-600">Multi-stage verification process</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Security Control</h4>
                  <p className="text-sm text-gray-600">Access & inventory management</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Services & Capabilities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Client Partnership */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">National Lottery Board Partnership</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  As the trusted printing partner of the National Lottery Board, we maintain the highest levels 
                  of security, quality, and reliability in lottery ticket production. Our collaboration ensures 
                  public confidence in the integrity of the national lottery system.
                </p>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                    Exclusive production contract
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                    Real-time coordination
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                    Secure chain of custody
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Security Standards</h3>
                <p className="text-purple-100 leading-relaxed mb-4">
                  Our division adheres to international security printing standards and best practices, 
                  implementing multiple layers of protection to prevent counterfeiting, tampering, and 
                  unauthorized reproduction of lottery tickets.
                </p>
                <ul className="space-y-2 text-purple-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    ISO certified processes
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    Regular security audits
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    Continuous monitoring
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-gradient-to-r from-[#2b1052] to-blue-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
              <div className="relative">
                <Lightbulb className="w-16 h-16 mx-auto mb-4 text-blue-300" />
                <h3 className="text-3xl font-bold mb-4">Trusted Security Printing Solutions</h3>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  With decades of experience in secure document production, we maintain the highest standards 
                  of quality and security in lottery ticket printing for the National Lottery Board.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
                >
                  Contact Division
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