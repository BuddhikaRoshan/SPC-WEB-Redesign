"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Wrench, Shield, Zap, Users, Award, Lightbulb, Settings, Cog, Clock4, HeartPulse } from "lucide-react";

export default function MaintenanceDivisionPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    {
      name: "Mr. Roshan Fernando",
      position: "Maintenance Division Manager",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop",
      email: "maintenance.manager@spc.lk",
      phone: "+94 11 234 5600",
    },
    {
      name: "Ms. Anusha Rajapakse",
      position: "Senior Mechanical Engineer",
      image: "https://images.unsplash.com/photo-1581091226825-c6b4881af0d7?w=400&h=400&fit=crop",
      email: "mechanical.engineer@spc.lk",
      phone: "+94 11 234 5601",
    },
    {
      name: "Mr. Chathura Gunawardena",
      position: "Electrical Systems Specialist",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      email: "electrical.specialist@spc.lk",
      phone: "+94 11 234 5602",
    },
  ];

  const services = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Preventive Maintenance",
      description: "Scheduled maintenance programs to ensure optimal performance and prevent unexpected breakdowns of all printing equipment.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Emergency Repairs",
      description: "24/7 emergency repair services to minimize downtime and keep production schedules on track.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Equipment Calibration",
      description: "Precision calibration of Heidelberg presses and other printing machinery for consistent quality output.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Technical Upgrades",
      description: "Implementation of technical upgrades and modernization of existing printing equipment.",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Spare Parts Management",
      description: "Comprehensive inventory management of genuine spare parts for all printing machinery.",
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Continuous monitoring and optimization of equipment performance for maximum efficiency.",
    },
  ];

  const responsibilities = [
    "Maintaining all Heidelberg printing presses and auxiliary equipment",
    "Implementing preventive maintenance schedules for optimal machine performance",
    "Conducting regular equipment inspections and safety audits",
    "Managing spare parts inventory and procurement",
    "Providing technical training to operational staff",
    "Coordinating with equipment manufacturers for specialized servicing",
    "Ensuring compliance with safety standards and regulations",
    "Developing and implementing equipment upgrade plans",
  ];

  const maintenanceFocus = [
    "Heidelberg Press Maintenance",
    "Electrical Systems",
    "Hydraulic Systems",
    "Pneumatic Systems",
    "Computerized Controls",
    "Safety Systems",
    "Cooling Systems",
    "Precision Mechanics",
  ];

  const equipmentMaintained = [
    {
      category: "Printing Presses",
      count: "25+",
      types: ["Heidelberg Speedmaster", "Heidelberg XL Series", "B2 & B3 Presses"]
    },
    {
      category: "Binding Equipment",
      count: "15+",
      types: ["Cutting Machines", "Folding Machines", "Stitching Machines"]
    },
    {
      category: "Auxiliary Systems",
      count: "50+",
      types: ["Air Compressors", "Chillers", "Dust Extraction"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#064e3b] via-emerald-800 to-[#064e3b] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="inline-block mb-4">
            <span className="bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-emerald-400/30">
              Technical Support Division
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-200">
            Maintenance Division
          </h1>
          <p className="text-xl text-emerald-100 max-w-3xl leading-relaxed">
            Ensuring uninterrupted production through expert maintenance of SPC's state-of-the-art printing machinery and equipment
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex space-x-8 overflow-x-auto">
            {["overview", "team", "services", "equipment"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-semibold text-sm uppercase tracking-wide whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? "text-emerald-600 border-b-2 border-emerald-600"
                    : "text-gray-600 hover:text-emerald-600"
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
                <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">About the Maintenance Division</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The Maintenance Division is the backbone of SPC's operational excellence, ensuring all printing 
                  machinery and equipment operate at peak performance. Our team of skilled engineers and technicians 
                  provides comprehensive maintenance services to support uninterrupted production across all divisions.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  With specialized expertise in Heidelberg printing presses and auxiliary systems, we implement 
                  proactive maintenance strategies that minimize downtime, extend equipment lifespan, and maintain 
                  the highest quality standards in printing output.
                </p>
              </div>
            </section>

            {/* Key Responsibilities */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-teal-600 to-emerald-500 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Key Responsibilities</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {responsibilities.map((responsibility, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-emerald-200 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Maintenance Focus Areas */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Technical Focus Areas</h2>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                <div className="grid md:grid-cols-4 gap-4">
                  {maintenanceFocus.map((area, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 group-hover:scale-150 transition-transform"></div>
                        <p className="text-sm font-semibold text-gray-700 group-hover:text-emerald-600 transition-colors">
                          {area}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Maintenance Approach */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-teal-600 to-emerald-500 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Our Maintenance Strategy</h2>
              </div>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { step: "1", title: "Inspection", desc: "Regular equipment assessment" },
                  { step: "2", title: "Prevention", desc: "Scheduled maintenance" },
                  { step: "3", title: "Monitoring", desc: "Performance tracking" },
                  { step: "4", title: "Response", desc: "Quick issue resolution" },
                  { step: "5", title: "Improvement", desc: "Continuous optimization" },
                ].map((phase, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white font-bold text-xl mb-4">
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
                  { icon: <Wrench className="w-8 h-8" />, value: "99.5%", label: "Equipment Uptime" },
                  { icon: <Clock4 className="w-8 h-8" />, value: "< 2hrs", label: "Avg Response Time" },
                  { icon: <HeartPulse className="w-8 h-8" />, value: "500+", label: "Machines Maintained" },
                  { icon: <Award className="w-8 h-8" />, value: "15+", label: "Years Avg Experience" },
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Maintenance Benefits */}
            <section>
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                <div className="flex items-center gap-3 mb-6">
                  <Lightbulb className="w-8 h-8 text-emerald-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Maintenance Excellence Benefits</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">Maximized Uptime</h4>
                      <p className="text-gray-600 text-sm">Proactive maintenance ensures equipment availability and minimizes production interruptions.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">Extended Equipment Life</h4>
                      <p className="text-gray-600 text-sm">Regular maintenance extends the operational lifespan of expensive printing machinery.</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">Consistent Quality</h4>
                      <p className="text-gray-600 text-sm">Well-maintained equipment delivers consistent print quality and color accuracy.</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-sm">
                      <h4 className="font-bold text-gray-900 mb-2">Cost Efficiency</h4>
                      <p className="text-gray-600 text-sm">Preventive maintenance reduces costly emergency repairs and production losses.</p>
                    </div>
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
              <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Our Maintenance Team</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-emerald-300 font-semibold text-sm">{member.position}</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 transition-colors">
                      <Mail className="w-5 h-5 text-emerald-500" />
                      <a href={`mailto:${member.email}`} className="hover:underline text-sm">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 hover:text-emerald-600 transition-colors">
                      <Phone className="w-5 h-5 text-emerald-500" />
                      <a href={`tel:${member.phone}`} className="hover:underline text-sm">
                        {member.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                      <p className="text-xs">State Printing Corporation, Colombo 08, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Expertise */}
            <div className="mt-12 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Team Expertise & Certifications</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our maintenance team comprises highly qualified engineers and technicians with specialized 
                training in Heidelberg press maintenance, electrical systems, and mechanical engineering. 
                Many team members hold manufacturer certifications and undergo regular training to stay 
                updated with the latest technologies.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Heidelberg Certified</h4>
                  <p className="text-sm text-gray-600">Factory-trained technicians</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Electrical Engineering</h4>
                  <p className="text-sm text-gray-600">Power systems & controls</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Mechanical Engineering</h4>
                  <p className="text-sm text-gray-600">Precision mechanics</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Maintenance Services</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-emerald-200 transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Emergency Support */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Preventive Maintenance</h3>
                <p className="text-emerald-100 leading-relaxed mb-4">
                  Our scheduled maintenance programs are designed to prevent equipment failures before they occur, 
                  ensuring maximum uptime and consistent print quality.
                </p>
                <ul className="space-y-2 text-emerald-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                    Regular equipment inspections
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                    Scheduled lubrication & adjustments
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-300"></div>
                    Performance optimization
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Emergency Response</h3>
                <p className="text-teal-100 leading-relaxed mb-4">
                  24/7 emergency support to address critical equipment failures and minimize production downtime. 
                  Our rapid response team is always on standby.
                </p>
                <ul className="space-y-2 text-teal-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
                    Round-the-clock availability
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
                    Rapid fault diagnosis
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-300"></div>
                    Quick resolution guarantee
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Equipment Tab */}
        {activeTab === "equipment" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-teal-600 to-emerald-500 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Equipment Portfolio</h2>
            </div>
            
            <div className="grid gap-8 mb-12">
              {equipmentMaintained.map((category, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="md:flex">
                    <div className="md:w-2/3 p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.category}</h3>
                      <p className="text-emerald-600 font-semibold text-xl mb-4">{category.count} Units Maintained</p>
                      <div className="space-y-2 mb-6">
                        {category.types.map((type, typeIndex) => (
                          <div key={typeIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                            <p className="text-gray-700">{type}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="md:w-1/3 bg-gradient-to-br from-emerald-500 to-teal-600 p-8 flex items-center justify-center">
                      <Settings className="w-24 h-24 text-white opacity-80" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Maintenance Schedule */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Maintenance Schedule</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 text-center">
                  <Clock className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Daily Checks</h4>
                  <p className="text-gray-600 text-sm">Visual inspections and basic maintenance tasks</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <Clock className="w-12 h-12 text-teal-500 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Weekly Maintenance</h4>
                  <p className="text-gray-600 text-sm">Detailed inspections and minor adjustments</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center">
                  <Clock className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
                  <h4 className="font-bold text-gray-900 mb-2">Monthly Service</h4>
                  <p className="text-gray-600 text-sm">Comprehensive maintenance and calibration</p>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-gradient-to-r from-[#064e3b] to-emerald-800 rounded-2xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
              <div className="relative">
                <Shield className="w-16 h-16 mx-auto mb-4 text-emerald-300" />
                <h3 className="text-3xl font-bold mb-4">Ensure Your Equipment Reliability</h3>
                <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
                  Partner with our maintenance experts to keep your printing operations running smoothly 
                  with maximum uptime and consistent quality output.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
                >
                  Schedule Maintenance
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