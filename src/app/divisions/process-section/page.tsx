"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Package, FileText, BookOpen, Award, Printer, Shield, TrendingUp, Palette, Video, PenTool, Zap } from "lucide-react";

export default function ProcessingDivisionPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    {
      name: "Mr. Ajith Perera",
      position: "Division Head",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      email: "processing.head@spc.lk",
      phone: "+94 11 234 5820",
    },
    {
      name: "Ms. Lakshmi Dias",
      position: "Content Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      email: "content.coordinator@spc.lk",
      phone: "+94 11 234 5821",
    },
    {
      name: "Mr. Sanath Kumar",
      position: "Design Lead",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      email: "design.lead@spc.lk",
      phone: "+94 11 234 5822",
    },
    {
      name: "Ms. Kavya Mendis",
      position: "Video Editor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      email: "video.editor@spc.lk",
      phone: "+94 11 234 5823",
    },
  ];

  const services = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Test Paper Processing",
      description: "Professional typesetting, layout, and processing of examination papers, model test papers, and practice question sets for various education levels.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "National Level Papers",
      description: "Processing and production of national examination papers, government assessments, and official examination documents with strict confidentiality.",
    },
    {
      icon: <Printer className="w-6 h-6" />,
      title: "School Papers",
      description: "Comprehensive processing of school newsletters, educational materials, assignments, circulars, and institutional publications.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Graphic Design",
      description: "Creative design services including logos, branding materials, infographics, educational posters, and visual communication solutions.",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Editing",
      description: "Professional video editing and production for educational content, institutional videos, promotional materials, and multimedia projects.",
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Content Design",
      description: "Complete design solutions for educational materials, digital content, presentations, and multimedia learning resources.",
    },
  ];

  const responsibilities = [
    "Processing and typesetting examination papers for national and institutional use",
    "Handling sensitive test paper preparation with confidentiality protocols",
    "Proofreading and quality assurance of educational materials",
    "Creating custom graphic designs for branding and educational purposes",
    "Video production and editing for educational and promotional content",
    "Managing document layouts and formatting standards",
    "Coordinating with educators and institutions for content requirements",
    "Maintaining quality standards across all digital and print materials",
  ];

  const productCategories = [
    "Test Papers",
    "Exam Papers",
    "School Circulars",
    "Educational Posters",
    "Digital Graphics",
    "Video Content",
    "Newsletters",
    "Branding Materials",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#1a1a3e] via-blue-900 to-[#1a1a3e] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="inline-block mb-4">
            <span className="bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-blue-400/30">
              Processing & Creative Services
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Processing Division
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Comprehensive processing, design, and multimedia services for educational and institutional content across Sri Lanka
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
                  The Processing Division is a specialized unit within the State Printing Corporation dedicated to handling 
                  comprehensive content processing, educational material development, and creative multimedia services. We combine 
                  technical expertise with creative excellence to deliver high-quality educational and institutional content.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our division manages test paper processing, national examination papers, school materials, graphic design, 
                  video editing, and multimedia content creation. With state-of-the-art technology and a creative team of professionals, 
                  we ensure that all educational materials meet the highest standards of quality, accuracy, and visual appeal.
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

            {/* Product Categories */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Service Categories</h2>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <div className="grid md:grid-cols-4 gap-4">
                  {productCategories.map((category, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 group-hover:scale-150 transition-transform"></div>
                        <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                          {category}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Processing Workflow */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Processing Workflow</h2>
              </div>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { step: "1", title: "Content Review", desc: "Initial assessment" },
                  { step: "2", title: "Typesetting", desc: "Professional formatting" },
                  { step: "3", title: "Design", desc: "Creative enhancement" },
                  { step: "4", title: "Revision", desc: "Quality review" },
                  { step: "5", title: "Delivery", desc: "Final output" },
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
                  { icon: <FileText className="w-8 h-8" />, value: "500+", label: "Papers Processed" },
                  { icon: <Palette className="w-8 h-8" />, value: "200+", label: "Design Projects" },
                  { icon: <Video className="w-8 h-8" />, value: "150+", label: "Videos Created" },
                  { icon: <Award className="w-8 h-8" />, value: "99%", label: "Client Satisfaction" },
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

            {/* Operating Hours */}
            <section>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Operating Hours</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Office Hours</p>
                    <p className="text-2xl font-bold text-blue-600">8:30 AM - 5:00 PM</p>
                    <p className="text-sm text-gray-500 mt-2">Monday to Friday</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Lunch Break</p>
                    <p className="text-2xl font-bold text-purple-600">12:30 PM - 1:15 PM</p>
                    <p className="text-sm text-gray-500 mt-2">Daily</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Submissions</p>
                    <p className="text-lg text-gray-700">Online/In-person</p>
                    <p className="text-sm text-gray-500 mt-2">By appointment</p>
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
              <h2 className="text-3xl font-bold text-gray-900">Our Processing Team</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
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
                The Processing Division operates with specialized teams handling different aspects of content processing and 
                creative services. Our skilled workforce includes content processors, graphic designers, video editors, multimedia 
                specialists, and quality assurance professionals, all working together to deliver exceptional results.
              </p>
              <div className="grid md:grid-cols-4 gap-4 mt-6">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Processing Unit</h4>
                  <p className="text-sm text-gray-600">Document handling & typesetting</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Design Team</h4>
                  <p className="text-sm text-gray-600">Graphics & visual design</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Video Unit</h4>
                  <p className="text-sm text-gray-600">Editing & multimedia production</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">QA Team</h4>
                  <p className="text-sm text-gray-600">Quality control & verification</p>
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
              <h2 className="text-3xl font-bold text-gray-900">Products & Services</h2>
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

            {/* Specialized Services */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Educational Materials</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  We specialize in processing and producing high-quality educational materials including test papers, 
                  examination papers, and school content with professional formatting and design.
                </p>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                    Model test papers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                    National exam papers
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                    School newsletters & circulars
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Creative Services</h3>
                <p className="text-purple-100 leading-relaxed mb-4">
                  Our creative team delivers innovative graphic design, video editing, and multimedia content solutions 
                  tailored to your institutional needs and branding requirements.
                </p>
                <ul className="space-y-2 text-purple-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    Professional graphics & logos
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    Video editing & production
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    Multimedia presentations
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-gradient-to-r from-[#1a1a3e] to-blue-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
              <div className="relative">
                <Zap className="w-16 h-16 mx-auto mb-4 text-blue-300" />
                <h3 className="text-3xl font-bold mb-4">Need Content & Creative Services?</h3>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  Contact our Processing Division to discuss your educational materials, design needs, and multimedia 
                  content requirements. We deliver excellence in every project.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
                >
                  Request Services
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