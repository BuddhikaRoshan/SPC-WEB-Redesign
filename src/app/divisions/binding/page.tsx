"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Settings, Package, Layers, Scissors, BookOpen, Zap } from "lucide-react";

export default function BindingDivisionPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    {
      name: "Mr. Pradeep Kumara",
      position: "Division Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      email: "binding.manager@spc.lk",
      phone: "+94 11 234 5690",
    },
    {
      name: "Mr. Asanka Perera",
      position: "Production Supervisor",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      email: "binding.supervisor@spc.lk",
      phone: "+94 11 234 5691",
    },
    {
      name: "Mr. Nuwan Silva",
      position: "Quality Control Officer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      email: "binding.qc@spc.lk",
      phone: "+94 11 234 5692",
    },
  ];

  const services = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Book Binding",
      description: "Perfect binding, saddle stitching, and case binding for books, magazines, and publications of all sizes.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Finishing Services",
      description: "Professional finishing including lamination, UV coating, embossing, and die-cutting for premium products.",
    },
    {
      icon: <Scissors className="w-6 h-6" />,
      title: "Cutting & Trimming",
      description: "Precision guillotine cutting and trimming services ensuring accurate dimensions and clean edges.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Packaging Solutions",
      description: "Custom packaging, bundling, and shrink-wrapping services for secure product delivery.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Specialty Binding",
      description: "Wire-o binding, spiral binding, and custom binding solutions for unique project requirements.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Turnaround",
      description: "Express binding services for urgent orders with guaranteed quality and delivery timelines.",
    },
  ];

  const responsibilities = [
    "Binding and finishing of printed materials including books, magazines, and reports",
    "Quality control and inspection of all bound products before delivery",
    "Operating and maintaining binding machinery and equipment",
    "Coordinating with printing divisions for seamless production workflow",
    "Managing inventory of binding materials and consumables",
    "Training staff on binding techniques and safety procedures",
    "Implementing quality standards and production efficiency measures",
    "Handling custom binding requests and specialty projects",
  ];

  const equipment = [
    {
      name: "Perfect Binding Machine",
      description: "High-speed perfect binding for books and magazines",
    },
    {
      name: "Saddle Stitcher",
      description: "Automated stitching for booklets and catalogs",
    },
    {
      name: "Guillotine Cutter",
      description: "Precision cutting with programmable controls",
    },
    {
      name: "Laminating Machine",
      description: "Hot and cold lamination capabilities",
    },
    {
      name: "Wire-O Binding",
      description: "Spiral and wire-o binding equipment",
    },
    {
      name: "Folding Machine",
      description: "Automated folding for various paper sizes",
    },
  ];

  const capabilities = [
    { label: "Daily Production Capacity", value: "10,000+ units" },
    { label: "Binding Types", value: "15+ methods" },
    { label: "Maximum Book Size", value: "A3+ format" },
    { label: "Staff Members", value: "25+ skilled workers" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#2b1052] via-orange-900 to-[#2b1052] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="inline-block mb-4">
            <span className="bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-400/30">
              Factory & Works Unit
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
            Binding Division
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl leading-relaxed">
            Professional binding and finishing services bringing printed materials to perfection with precision and craftsmanship
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
                <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">About the Division</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The Binding Division is the final stage in our production process, transforming printed sheets into 
                  professionally finished products. With state-of-the-art equipment and skilled craftsmen, we provide 
                  comprehensive binding and finishing services for books, magazines, reports, and various printed materials.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our division combines traditional craftsmanship with modern technology to deliver high-quality binding 
                  solutions. From simple saddle stitching to complex perfect binding and specialty finishes, we ensure 
                  every product meets the highest standards of durability and aesthetics.
                </p>
              </div>
            </section>

            {/* Production Capabilities */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-orange-600 to-amber-500 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Production Capabilities</h2>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all group"
                  >
                    <p className="text-orange-100 text-sm mb-2">{capability.label}</p>
                    <p className="text-2xl font-bold group-hover:scale-110 transition-transform inline-block">
                      {capability.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Responsibilities */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Key Responsibilities</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {responsibilities.map((responsibility, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Office Hours */}
            <section>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-orange-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Operating Hours</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Production Hours</p>
                    <p className="text-2xl font-bold text-orange-600">8:00 AM - 4:00 PM</p>
                    <p className="text-sm text-gray-500 mt-2">Monday to Friday</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Shift System</p>
                    <p className="text-xl font-bold text-amber-600">2 Shifts Available</p>
                    <p className="text-sm text-gray-500 mt-2">For urgent orders</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Express Service</p>
                    <p className="text-lg text-gray-700">24-48 Hours</p>
                    <p className="text-sm text-gray-500 mt-2">Rush orders accepted</p>
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
              <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-orange-100 to-amber-100">
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
                      <p className="text-xs">Binding Division, State Printing Corporation</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Info */}
            <div className="mt-12 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skilled Workforce</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our binding division employs over 25 skilled workers including machine operators, quality control 
                inspectors, and finishing specialists. Each team member undergoes comprehensive training in binding 
                techniques, equipment operation, and safety procedures.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The division operates under strict quality standards with continuous monitoring and improvement 
                initiatives to maintain excellence in every finished product.
              </p>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-orange-600 to-amber-500 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Services & Capabilities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-orange-200 transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Quality Standards */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Quality Standards</h3>
                <p className="text-orange-100 leading-relaxed mb-4">
                  Every product undergoes rigorous quality checks at multiple stages to ensure durability, 
                  alignment, and aesthetic perfection.
                </p>
                <ul className="space-y-2 text-orange-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    100% Quality Inspection
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    ISO Compliant Processes
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    Waste Minimization
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
                <p className="text-amber-100 leading-relaxed mb-4">
                  We work closely with clients to provide tailored binding and finishing solutions for 
                  unique project requirements.
                </p>
                <ul className="space-y-2 text-amber-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                    Custom Binding Methods
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                    Special Finishes Available
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                    Prototype Development
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-gradient-to-r from-[#2b1052] to-orange-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
              <div className="relative">
                <h3 className="text-3xl font-bold mb-4">Need Binding Services?</h3>
                <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
                  Contact our binding division for quotes, technical specifications, or to discuss your 
                  custom binding requirements.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
                >
                  Contact Binding Division
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Equipment Tab */}
        {activeTab === "equipment" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Machinery & Equipment</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {equipment.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                      <Settings className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{item.name}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Maintenance Info */}
            <div className="mt-12 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Equipment Maintenance</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                All machinery undergoes regular preventive maintenance schedules to ensure optimal performance and 
                minimal downtime. Our technical team conducts daily inspections and maintains detailed service records 
                for each piece of equipment.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Maintenance Schedule</p>
                  <p className="text-xl font-bold text-orange-600">Weekly</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Equipment Uptime</p>
                  <p className="text-xl font-bold text-orange-600">98%+</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Safety Compliance</p>
                  <p className="text-xl font-bold text-orange-600">100%</p>
                </div>
              </div>
            </div>

            {/* Technology Investment */}
            <div className="mt-12 bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Technology Investment</h3>
              <p className="text-orange-100 leading-relaxed mb-6">
                State Printing Corporation continuously invests in modern binding technology to stay competitive 
                and deliver superior quality. Our equipment portfolio includes both automated and manual systems 
                to handle diverse binding requirements.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-sm text-orange-200 mb-2">Latest Equipment Upgrade</p>
                  <p className="text-lg font-bold">2024</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-sm text-orange-200 mb-2">Total Investment</p>
                  <p className="text-lg font-bold">LKR 50M+</p>
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