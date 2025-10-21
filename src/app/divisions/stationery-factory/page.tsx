"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Package, ClipboardList, FileText, BookOpen, Award, Printer, Shield, TrendingUp } from "lucide-react";

export default function StationeryFactoryPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    {
      name: "Mr. Ruwan Jayasinghe",
      position: "Factory Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      email: "stationery.manager@spc.lk",
      phone: "+94 11 234 5810",
    },
    {
      name: "Ms. Chamari Silva",
      position: "Production Supervisor",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      email: "production.supervisor@spc.lk",
      phone: "+94 11 234 5811",
    },
    {
      name: "Mr. Dinesh Wickramasinghe",
      position: "Quality Control Officer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      email: "quality.control@spc.lk",
      phone: "+94 11 234 5812",
    },
  ];

  const services = [
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Government Forms",
      description: "Production of official forms, application forms, and administrative documents for government ministries and departments.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Office Stationery",
      description: "Manufacturing letterheads, envelopes, notepads, and other office essentials with official branding and specifications.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Record Books",
      description: "Specialized record books, registers, and logbooks for various government and institutional requirements.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Documents",
      description: "Production of secure forms and documents with special papers, watermarks, and anti-counterfeiting features.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Custom Stationery",
      description: "Tailored stationery solutions designed to meet specific organizational needs and branding requirements.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certificates & Cards",
      description: "High-quality certificates, ID cards, and official documentation with professional finishing.",
    },
  ];

  const responsibilities = [
    "Manufacturing high-quality stationery and forms for government use",
    "Managing production schedules to meet delivery deadlines",
    "Ensuring quality standards and specifications are maintained",
    "Operating and maintaining specialized stationery production equipment",
    "Coordinating with other divisions for integrated printing solutions",
    "Implementing efficient inventory management systems",
    "Developing new stationery products based on client requirements",
    "Maintaining workplace safety and environmental compliance",
  ];

  const productCategories = [
    "Official Forms",
    "Letterheads",
    "Envelopes",
    "Record Books",
    "Registers",
    "Notepads",
    "Filing Folders",
    "Custom Documents",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#2b1052] via-orange-900 to-[#2b1052] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="inline-block mb-4">
            <span className="bg-orange-500/20 text-orange-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-orange-400/30">
              Production Division
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
            Stationery Factory Division
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl leading-relaxed">
            Crafting quality stationery and forms that power government operations and organizational efficiency across Sri Lanka
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
                    ? "text-orange-600 border-b-2 border-orange-600"
                    : "text-gray-600 hover:text-orange-600"
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
                <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">About the Division</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The Stationery Factory Division is a specialized production unit within the State Printing Corporation, 
                  dedicated to manufacturing high-quality stationery products and forms essential for government 
                  administration and institutional operations. With decades of experience, we combine traditional 
                  craftsmanship with modern production techniques to deliver reliable, standardized products.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our facility is equipped with state-of-the-art machinery for form production, paper cutting, binding, 
                  and finishing operations. We maintain strict quality control standards and ensure timely delivery of 
                  stationery items that meet the exacting requirements of government offices, educational institutions, 
                  and corporate organizations throughout Sri Lanka.
                </p>
              </div>
            </section>

            {/* Key Responsibilities */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-orange-500 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Key Responsibilities</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {responsibilities.map((responsibility, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-purple-600 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Product Categories */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Product Categories</h2>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl p-8 border border-orange-100">
                <div className="grid md:grid-cols-4 gap-4">
                  {productCategories.map((category, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 group-hover:scale-150 transition-transform"></div>
                        <p className="text-sm font-semibold text-gray-700 group-hover:text-orange-600 transition-colors">
                          {category}
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
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-orange-500 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Production Process</h2>
              </div>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { step: "1", title: "Design", desc: "Specification review" },
                  { step: "2", title: "Material", desc: "Quality paper selection" },
                  { step: "3", title: "Printing", desc: "Precision production" },
                  { step: "4", title: "Finishing", desc: "Cutting & binding" },
                  { step: "5", title: "Quality", desc: "Final inspection" },
                ].map((phase, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-purple-600 flex items-center justify-center text-white font-bold text-xl mb-4">
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
                  { icon: <Package className="w-8 h-8" />, value: "1M+", label: "Units Annually" },
                  { icon: <ClipboardList className="w-8 h-8" />, value: "200+", label: "Product Types" },
                  { icon: <TrendingUp className="w-8 h-8" />, value: "99%", label: "Quality Rate" },
                  { icon: <Award className="w-8 h-8" />, value: "50+", label: "Years Experience" },
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-purple-600 flex items-center justify-center text-white mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Operating Hours */}
            <section>
              <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl p-8 border border-orange-100">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-orange-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Operating Hours</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Production Hours</p>
                    <p className="text-2xl font-bold text-orange-600">8:30 AM - 4:15 PM</p>
                    <p className="text-sm text-gray-500 mt-2">Monday to Friday</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Lunch Break</p>
                    <p className="text-2xl font-bold text-purple-600">12:30 PM - 1:15 PM</p>
                    <p className="text-sm text-gray-500 mt-2">Daily</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Orders</p>
                    <p className="text-lg text-gray-700">Place Anytime</p>
                    <p className="text-sm text-gray-500 mt-2">Via procurement system</p>
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
              <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Our Factory Team</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-orange-100 to-purple-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-orange-300 font-semibold text-sm">{member.position}</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-colors">
                      <Mail className="w-5 h-5 text-orange-500" />
                      <a href={`mailto:${member.email}`} className="hover:underline text-sm">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 hover:text-orange-600 transition-colors">
                      <Phone className="w-5 h-5 text-orange-500" />
                      <a href={`tel:${member.phone}`} className="hover:underline text-sm">
                        {member.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <p className="text-xs">State Printing Corporation, Colombo 08, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Structure */}
            <div className="mt-12 bg-gradient-to-r from-orange-50 to-purple-50 rounded-2xl p-8 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Division Structure</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Stationery Factory Division operates with specialized production units handling different aspects 
                of stationery manufacturing. Our skilled workforce includes machine operators, quality inspectors, 
                bindery specialists, and finishing technicians, all working together to ensure consistent quality and 
                timely delivery of stationery products.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Production Unit</h4>
                  <p className="text-sm text-gray-600">Form printing & manufacturing</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Finishing Unit</h4>
                  <p className="text-sm text-gray-600">Cutting, binding & packaging</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Quality Control</h4>
                  <p className="text-sm text-gray-600">Inspection & standards compliance</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-orange-500 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Products & Services</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-orange-200 transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-400 to-purple-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Specialized Products */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Standard Forms</h3>
                <p className="text-orange-100 leading-relaxed mb-4">
                  We produce a wide range of standardized forms used across government departments, including 
                  application forms, requisition forms, and official documentation templates.
                </p>
                <ul className="space-y-2 text-orange-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                    Multi-part NCR forms
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                    Pre-numbered documents
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                    Custom specifications
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Specialty Items</h3>
                <p className="text-purple-100 leading-relaxed mb-4">
                  Our division also specializes in producing unique stationery items with security features, 
                  custom branding, and special finishes to meet specific organizational requirements.
                </p>
                <ul className="space-y-2 text-purple-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                    Watermarked papers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                    Embossed documents
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                    Security threading
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-gradient-to-r from-[#2b1052] to-orange-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
              <div className="relative">
                <Printer className="w-16 h-16 mx-auto mb-4 text-orange-300" />
                <h3 className="text-3xl font-bold mb-4">Need Custom Stationery Solutions?</h3>
                <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
                  Contact our Stationery Factory Division to discuss your requirements for forms, stationery, 
                  and custom documentation solutions.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
                >
                  Request a Quote
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