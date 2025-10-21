"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, TrendingUp, Target, Users, Megaphone, BarChart3, Globe, Award, Lightbulb } from "lucide-react";

export default function MarketingDivisionPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    {
      name: "Ms. Nishani Perera",
      position: "Marketing Division Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      email: "marketing.manager@spc.lk",
      phone: "+94 11 234 5800",
    },
    {
      name: "Mr. Kasun Wijesinghe",
      position: "Business Development Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      email: "business.dev@spc.lk",
      phone: "+94 11 234 5801",
    },
    {
      name: "Ms. Sanduni Fernando",
      position: "Client Relations Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      email: "client.relations@spc.lk",
      phone: "+94 11 234 5802",
    },
  ];

  const services = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Strategic Marketing",
      description: "Developing and implementing comprehensive marketing strategies to promote SPC's printing services and expand market reach.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client Relationship Management",
      description: "Building and maintaining strong relationships with government agencies, private sector clients, and key stakeholders.",
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Brand Promotion",
      description: "Enhancing brand visibility through campaigns, exhibitions, and promotional activities across various platforms.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Market Research",
      description: "Analyzing market trends, competitor activities, and customer needs to inform strategic business decisions.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Digital Marketing",
      description: "Managing online presence, social media engagement, and digital campaigns to reach wider audiences.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Sales Support",
      description: "Providing sales teams with marketing materials, presentations, and support to close deals effectively.",
    },
  ];

  const responsibilities = [
    "Developing and executing marketing plans for SPC's diverse printing services",
    "Managing relationships with government ministries and departments",
    "Coordinating participation in trade fairs, exhibitions, and industry events",
    "Conducting market research and competitive analysis",
    "Creating promotional materials and marketing collateral",
    "Managing corporate communications and public relations",
    "Supporting business development initiatives and new client acquisition",
    "Monitoring customer satisfaction and gathering feedback for service improvement",
  ];

  const marketingFocus = [
    "Government Publications",
    "Security Printing",
    "Commercial Printing",
    "Educational Materials",
    "Forms & Stationery",
    "Packaging Solutions",
    "Digital Printing Services",
    "Custom Print Products",
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
              Business Development Division
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
            Marketing Division
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl leading-relaxed">
            Connecting SPC's world-class printing services with clients nationwide through strategic marketing and relationship building
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
                  The Marketing Division serves as the primary interface between State Printing Corporation and its 
                  diverse client base. We are responsible for promoting SPC's comprehensive printing services, building 
                  strategic partnerships, and ensuring customer satisfaction through effective communication and 
                  relationship management.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our team combines traditional marketing expertise with modern digital strategies to showcase SPC's 
                  capabilities in security printing, government publications, commercial printing, and specialized 
                  print solutions. We work closely with government agencies, private sector organizations, and 
                  individual clients to deliver tailored printing solutions that meet their specific needs.
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

            {/* Marketing Focus Areas */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Marketing Focus Areas</h2>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl p-8 border border-orange-100">
                <div className="grid md:grid-cols-4 gap-4">
                  {marketingFocus.map((area, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 group-hover:scale-150 transition-transform"></div>
                        <p className="text-sm font-semibold text-gray-700 group-hover:text-orange-600 transition-colors">
                          {area}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Marketing Approach */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-orange-500 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Our Marketing Approach</h2>
              </div>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { step: "1", title: "Research", desc: "Market analysis & insights" },
                  { step: "2", title: "Strategy", desc: "Campaign planning" },
                  { step: "3", title: "Execution", desc: "Multi-channel marketing" },
                  { step: "4", title: "Engagement", desc: "Client relationship building" },
                  { step: "5", title: "Analysis", desc: "Performance measurement" },
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
                  { icon: <Users className="w-8 h-8" />, value: "500+", label: "Active Clients" },
                  { icon: <Target className="w-8 h-8" />, value: "50+", label: "Government Partners" },
                  { icon: <TrendingUp className="w-8 h-8" />, value: "25%", label: "Annual Growth" },
                  { icon: <Award className="w-8 h-8" />, value: "95%", label: "Client Satisfaction" },
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

            {/* Office Hours */}
            <section>
              <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl p-8 border border-orange-100">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-orange-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Weekdays</p>
                    <p className="text-2xl font-bold text-orange-600">8:30 AM - 4:15 PM</p>
                    <p className="text-sm text-gray-500 mt-2">Monday to Friday</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Lunch Break</p>
                    <p className="text-2xl font-bold text-purple-600">12:30 PM - 1:15 PM</p>
                    <p className="text-sm text-gray-500 mt-2">Daily</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Consultations</p>
                    <p className="text-lg text-gray-700">By Appointment</p>
                    <p className="text-sm text-gray-500 mt-2">Business inquiries</p>
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
              <h2 className="text-3xl font-bold text-gray-900">Our Marketing Team</h2>
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
                The Marketing Division operates through specialized units focusing on brand management, client relations, 
                business development, and digital marketing. Our team collaborates closely with all production divisions 
                to ensure comprehensive understanding of services and capabilities, enabling effective promotion and 
                client engagement.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Brand Management</h4>
                  <p className="text-sm text-gray-600">Corporate identity & communications</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Business Development</h4>
                  <p className="text-sm text-gray-600">New client acquisition & partnerships</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Digital Marketing</h4>
                  <p className="text-sm text-gray-600">Online presence & social media</p>
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
              <h2 className="text-3xl font-bold text-gray-900">Services & Functions</h2>
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

            {/* Additional Services */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">For Government Agencies</h3>
                <p className="text-orange-100 leading-relaxed mb-4">
                  We provide dedicated support to government ministries and departments, ensuring seamless 
                  coordination for all printing requirements including official publications, forms, and documents.
                </p>
                <ul className="space-y-2 text-orange-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                    Priority service delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                    Dedicated account management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                    Compliance with regulations
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">For Private Sector</h3>
                <p className="text-purple-100 leading-relaxed mb-4">
                  We welcome private sector organizations to explore SPC's comprehensive printing capabilities, 
                  offering competitive pricing and world-class quality for all commercial printing needs.
                </p>
                <ul className="space-y-2 text-purple-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                    Customized solutions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                    Flexible pricing models
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                    Quality assurance
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-gradient-to-r from-[#2b1052] to-orange-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
              <div className="relative">
                <Lightbulb className="w-16 h-16 mx-auto mb-4 text-orange-300" />
                <h3 className="text-3xl font-bold mb-4">Let's Discuss Your Printing Needs</h3>
                <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
                  Whether you're a government agency or private organization, our marketing team is ready to 
                  help you discover the perfect printing solutions for your requirements.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
                >
                  Get in Touch
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