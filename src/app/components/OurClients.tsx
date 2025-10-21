"use client";

import { useState } from "react";
import { 
  Award, TrendingUp, Users, Building2
} from "lucide-react";

const OurClients = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Client data with categories
  const clients = [
    { name: 'National Lotteries Board', logo: '/clients/nlb.jpeg', category: 'government' },
    { name: 'Ministry of Education', logo: '/clients/moe.jpg', category: 'government' },
    { name: 'Department of Examinations', logo: '/clients/exa.jpeg', category: 'government' },
    { name: 'Lanka Hospitals', logo: '/clients/lh.jpeg', category: 'private' },
    { name: 'Commercial Bank', logo: '/clients/com.jpeg', category: 'private' },
    { name: 'Ceylon Electricity Board', logo: '/clients/ele.jpeg', category: 'government' },
    { name: 'National Water Supply', logo: '/clients/water.jpeg', category: 'government' },
    { name: 'Dialog Axiata PLC', logo: '/clients/dialog.png', category: 'private' },
    { name: 'John Keells Holdings', logo: '/clients/jhon.png', category: 'private' },
    { name: 'University of Colombo', logo: '/clients/colombo.jpeg', category: 'education' },
    { name: 'University of Peradeniya', logo: '/clients/peradeniya.jpeg', category: 'education' },
    { name: 'Sri Lanka Tourism', logo: '/clients/tourism.png', category: 'government' },
  ];

  const categories = [
    { id: 'all', label: 'All Clients', icon: Building2 },
    { id: 'government', label: 'Government', icon: Award },
    { id: 'private', label: 'Private Sector', icon: TrendingUp },
    { id: 'education', label: 'Education', icon: Users }
  ];

  const filteredClients = activeCategory === 'all' 
    ? clients 
    : clients.filter(c => c.category === activeCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2 uppercase tracking-wide text-sm">
            Trusted by Leading Organizations
          </p>
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Our Clients</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are proud to partner with leading public and private institutions across Sri Lanka.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
              }`}
            >
              <cat.icon className="w-4 h-4" />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

{/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12">
          {filteredClients.map((client, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 bg-white group cursor-pointer"
            >
              <img 
                src={client.logo} 
                alt={client.name}
                className="max-h-16 max-w-full object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* All Clients Showcase - Static Grid */}
        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
            Trusted by 500+ Organizations
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {clients.map((client, i) => (
              <div key={i} className="flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;