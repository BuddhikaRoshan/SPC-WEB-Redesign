"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Printer, Palette, Target, Users, Award, Lightbulb, Shield, BookOpen, Package, FileText } from "lucide-react";

export default function LithoDivisionPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    {
      name: "Mr. Sameera Bandara",
      position: "Litho Division Manager",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
      email: "litho.manager@spc.lk",
      phone: "+94 11 234 5700",
    },
    {
      name: "Ms. Chathuri Silva",
      position: "Senior Printing Technician",
      image: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=400&h=400&fit=crop",
      email: "printing.tech@spc.lk",
      phone: "+94 11 234 5701",
    },
    {
      name: "Mr. Dilshan Perera",
      position: "Quality Control Supervisor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      email: "quality.control@spc.lk",
      phone: "+94 11 234 5702",
    },
  ];

  const services = [
    {
      icon: <Printer className="w-6 h-6" />,
      title: "High-Volume Litho Printing",
      description: "Medium to long run printing with exceptional quality and competitive pricing using state-of-the-art Heidelberg presses.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Color Precision Printing",
      description: "Vibrant, accurate colors with sharp typefaces and high-definition details for superior print quality.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security Document Printing",
      description: "Specialized printing for secure documents with advanced anti-counterfeiting features.",
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Publication Printing",
      description: "High-quality printing for books, magazines, catalogs, and educational materials.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Packaging Solutions",
      description: "Creative and durable packaging printing for various commercial products.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Commercial Printing",
      description: "Brochures, flyers, business cards, and corporate stationery with exceptional finish.",
    },
  ];

  const capabilities = [
    "52 years of industry-leading lithographic printing experience",
    "State-of-the-art Heidelberg B2 and B3 multi-color presses",
    "Advanced color control monitoring systems",
    "High-volume production capacity",
    "Wide range of paper stocks and finishes",
    "Quality assurance at every production stage",
    "Custom solutions for special requirements",
    "Environmentally conscious printing practices",
  ];

  const printingFocus = [
    "Marketing Materials",
    "Corporate Publications",
    "Educational Books",
    "Security Documents",
    "Product Packaging",
    "Annual Reports",
    "Catalogs & Brochures",
    "Stationery & Forms",
  ];

  const equipment = [
    {
      name: "Heidelberg Speedmaster XL 106",
      type: "B2 6-Color Press",
      features: ["Advanced color control", "High-speed production", "UV coating capability"]
    },
    {
      name: "Heidelberg Speedmaster CX 102",
      type: "B2 5-Color Press",
      features: ["Precision registration", "Automated plate changing", "Quality monitoring"]
    },
    {
      name: "Heidelberg Speedmaster SM 102",
      type: "B2 4-Color Press",
      features: ["Reliable performance", "Consistent quality", "Versatile applications"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#1e3a8a] via-cyan-800 to-[#1e3a8a] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="inline-block mb-4">
            <span className="bg-cyan-500/20 text-cyan-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-cyan-400/30">
              Precision Printing Division
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
            Litho Division
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl leading-relaxed">
            The heart of SPC's business - 52 years of industry-leading lithographic printing with state-of-the-art Heidelberg technology
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex space-x-8 overflow-x-auto">
            {["overview", "capabilities", "team", "equipment"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-semibold text-sm uppercase tracking-wide whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? "text-cyan-600 border-b-2 border-cyan-600"
                    : "text-gray-600 hover:text-cyan-600"
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
                <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">About the Litho Division</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  As the heart of State Printing Corporation, our Litho Division brings 52 years of industry-leading 
                  lithographic printing experience. We serve as a high-tech enterprise providing exceptional quality 
                  medium to long run printing at extremely competitive prices.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our commitment to innovation has achieved great high performance in lithographic printing while 
                  maintaining traditional printing excellence. With state-of-the-art Heidelberg presses and advanced 
                  color control systems, we deliver vibrant, accurate colors with sharp typefaces and high-definition 
                  details on every print.
                </p>
              </div>
            </section>

            {/* Key Capabilities */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Our Capabilities</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-cyan-200 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{capability}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Printing Focus Areas */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Printing Specializations</h2>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
                <div className="grid md:grid-cols-4 gap-4">
                  {printingFocus.map((area, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 group-hover:scale-150 transition-transform"></div>
                        <p className="text-sm font-semibold text-gray-700 group-hover:text-cyan-600 transition-colors">
                          {area}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Quality Process */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Our Quality Process</h2>
              </div>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { step: "1", title: "Pre-Press", desc: "File preparation & proofing" },
                  { step: "2", title: "Plate Making", desc: "Precision plate creation" },
                  { step: "3", title: "Printing", desc: "Heidelberg press operation" },
                  { step: "4", title: "Quality Check", desc: "Color & detail inspection" },
                  { step: "5", title: "Finishing", desc: "Cutting & binding" },
                ].map((phase, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl mb-4">
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
                  { icon: <Printer className="w-8 h-8" />, value: "52+", label: "Years Experience" },
                  { icon: <Target className="w-8 h-8" />, value: "10M+", label: "Annual Prints" },
                  { icon: <Award className="w-8 h-8" />, value: "99.8%", label: "Quality Accuracy" },
                  { icon: <Users className="w-8 h-8" />, value: "500+", label: "Projects Completed" },
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Why Choose Litho */}
            <section>
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-8 h-8 text-cyan-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Why Choose Lithographic Printing?</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">Vibrant Color Quality</h4>
                      <p className="text-gray-600 text-sm">Achieve rich, accurate colors with sharp details and complete consistency across every print.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">Cost-Effective for Volume</h4>
                      <p className="text-gray-600 text-sm">Ideal for medium to long print runs with competitive pricing and superior quality.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">Wide Material Range</h4>
                      <p className="text-gray-600 text-sm">Print on various paper stocks and finishes to meet diverse project requirements.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">Proven Technology</h4>
                      <p className="text-gray-600 text-sm">State-of-the-art Heidelberg presses with advanced color control monitoring systems.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Capabilities Tab */}
        {activeTab === "capabilities" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Our Services & Capabilities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-cyan-200 transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Benefits Section */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">For Marketing Materials</h3>
                <p className="text-cyan-100 leading-relaxed mb-4">
                  Printed marketing materials remain a powerful medium to reach your audience with creative, 
                  engaging content that allows readers to concentrate and absorb your message with less distraction.
                </p>
                <ul className="space-y-2 text-cyan-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    High-impact visual appeal
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    Tangible customer experience
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    Long-lasting impression
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Technical Advantages</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Our Heidelberg presses create rich, accurate high-quality colors with sharp typefaces and 
                  high-definition details, printing full color and sealing in one pass.
                </p>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-300"></div>
                    B2 & B3 multi-color presses
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-300"></div>
                    Color control monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-cyan-300"></div>
                    One-pass printing & sealing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === "team" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Our Litho Team</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-cyan-300 font-semibold text-sm">{member.position}</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-700 hover:text-cyan-600 transition-colors">
                      <Mail className="w-5 h-5 text-cyan-500" />
                      <a href={`mailto:${member.email}`} className="hover:underline text-sm">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 hover:text-cyan-600 transition-colors">
                      <Phone className="w-5 h-5 text-cyan-500" />
                      <a href={`tel:${member.phone}`} className="hover:underline text-sm">
                        {member.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-1" />
                      <p className="text-xs">State Printing Corporation, Colombo 08, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Expertise */}
            <div className="mt-12 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Team Expertise</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Litho Division team combines decades of traditional printing expertise with modern technical 
                knowledge. Each member undergoes continuous training on our Heidelberg press systems and quality 
                control procedures to maintain SPC's reputation for excellence.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Press Operations</h4>
                  <p className="text-sm text-gray-600">Heidelberg press specialists</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Quality Control</h4>
                  <p className="text-sm text-gray-600">Color matching experts</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Technical Support</h4>
                  <p className="text-sm text-gray-600">Maintenance & troubleshooting</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Equipment Tab */}
        {activeTab === "equipment" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Our Printing Equipment</h2>
            </div>
            
            <div className="grid gap-8 mb-12">
              {equipment.map((machine, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="md:flex">
                    <div className="md:w-2/3 p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{machine.name}</h3>
                      <p className="text-cyan-600 font-semibold mb-4">{machine.type}</p>
                      <div className="space-y-2 mb-6">
                        {machine.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                            <p className="text-gray-700">{feature}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="md:w-1/3 bg-gradient-to-br from-cyan-500 to-blue-600 p-8 flex items-center justify-center">
                      <Printer className="w-24 h-24 text-white opacity-80" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Technology Advantages */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Technology Advantages</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Precision Color Control</h4>
                    <p className="text-gray-600 text-sm">Advanced monitoring systems ensure color consistency across every print run.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-2">High-Speed Production</h4>
                    <p className="text-gray-600 text-sm">Rapid printing capabilities for large volume orders without compromising quality.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Versatile Applications</h4>
                    <p className="text-gray-600 text-sm">Handle diverse printing requirements from delicate papers to heavy card stocks.</p>
                  </div>
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-2">Reliability & Uptime</h4>
                    <p className="text-gray-600 text-sm">Proven Heidelberg reliability with minimal downtime for maximum productivity.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-gradient-to-r from-[#1e3a8a] to-cyan-800 rounded-2xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
              <div className="relative">
                <Award className="w-16 h-16 mx-auto mb-4 text-cyan-300" />
                <h3 className="text-3xl font-bold mb-4">Experience Litho Printing Excellence</h3>
                <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
                  Let us demonstrate why our 52 years of lithographic printing expertise combined with 
                  state-of-the-art Heidelberg technology makes SPC the ideal choice for your printing needs.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
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