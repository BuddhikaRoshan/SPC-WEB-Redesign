"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Package, ShoppingCart, Warehouse, Boxes, Truck, CheckCircle, BarChart2, Shield } from "lucide-react";

export default function StationeryStoresPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    {
      name: "Mr. Pradeep Amarasinghe",
      position: "Stores Manager",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop",
      email: "stores.manager@spc.lk",
      phone: "+94 11 234 5820",
    },
    {
      name: "Ms. Malini Gunasekara",
      position: "Inventory Control Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      email: "inventory.control@spc.lk",
      phone: "+94 11 234 5821",
    },
    {
      name: "Mr. Ajith Bandara",
      position: "Distribution Coordinator",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      email: "distribution@spc.lk",
      phone: "+94 11 234 5822",
    },
  ];

  const services = [
    {
      icon: <Warehouse className="w-6 h-6" />,
      title: "Inventory Management",
      description: "Comprehensive storage and management of finished stationery products, raw materials, and supplies with systematic organization.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Stock Control",
      description: "Real-time monitoring of stock levels, automated reorder points, and efficient inventory tracking systems.",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Distribution Services",
      description: "Coordinating timely delivery of stationery products to government departments and authorized clients across Sri Lanka.",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Order Fulfillment",
      description: "Processing and fulfilling orders efficiently with accurate picking, packing, and dispatch operations.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Ensuring product integrity through proper storage conditions, handling procedures, and regular quality checks.",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Reporting & Analytics",
      description: "Maintaining detailed records, generating reports, and providing insights on inventory levels and distribution patterns.",
    },
  ];

  const responsibilities = [
    "Managing comprehensive inventory of stationery products and materials",
    "Coordinating receiving, storage, and dispatch of all stationery items",
    "Maintaining accurate stock records and inventory databases",
    "Processing orders and ensuring timely delivery to clients",
    "Implementing efficient warehouse management systems",
    "Coordinating with production divisions for stock replenishment",
    "Ensuring proper storage conditions and security measures",
    "Managing logistics and transportation for product distribution",
  ];

  const storageCategories = [
    "Finished Products",
    "Raw Materials",
    "Forms & Documents",
    "Office Supplies",
    "Packaging Materials",
    "Security Items",
    "Custom Orders",
    "Archived Stock",
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
              Operations Division
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
            Stationery Stores Division
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl leading-relaxed">
            Efficiently managing inventory and distribution to ensure seamless supply of stationery products nationwide
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
                  The Stationery Stores Division serves as the central hub for inventory management and distribution 
                  within the State Printing Corporation. We maintain comprehensive warehousing facilities that store 
                  finished stationery products, raw materials, and supplies, ensuring optimal stock levels and efficient 
                  distribution to meet the diverse needs of our government and institutional clients.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our division employs modern warehouse management systems and best practices in inventory control to 
                  maintain accuracy, minimize waste, and ensure timely availability of products. We work in close 
                  coordination with production divisions and the distribution network to create a seamless supply chain 
                  that supports SPC's commitment to reliable service delivery.
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

            {/* Storage Categories */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Storage Categories</h2>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-2xl p-8 border border-orange-100">
                <div className="grid md:grid-cols-4 gap-4">
                  {storageCategories.map((category, index) => (
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

            {/* Warehouse Operations */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-orange-500 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Warehouse Operations</h2>
              </div>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { step: "1", title: "Receiving", desc: "Intake & inspection" },
                  { step: "2", title: "Storage", desc: "Systematic placement" },
                  { step: "3", title: "Tracking", desc: "Digital inventory" },
                  { step: "4", title: "Picking", desc: "Order preparation" },
                  { step: "5", title: "Dispatch", desc: "Delivery coordination" },
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
                  { icon: <Boxes className="w-8 h-8" />, value: "5000+", label: "Stock Items" },
                  { icon: <Package className="w-8 h-8" />, value: "10,000m²", label: "Storage Space" },
                  { icon: <CheckCircle className="w-8 h-8" />, value: "98%", label: "Order Accuracy" },
                  { icon: <Truck className="w-8 h-8" />, value: "500+", label: "Monthly Deliveries" },
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
                    <p className="text-gray-600 font-semibold mb-2">Warehouse Hours</p>
                    <p className="text-2xl font-bold text-orange-600">8:30 AM - 4:15 PM</p>
                    <p className="text-sm text-gray-500 mt-2">Monday to Friday</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Lunch Break</p>
                    <p className="text-2xl font-bold text-purple-600">12:30 PM - 1:15 PM</p>
                    <p className="text-sm text-gray-500 mt-2">Daily</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Collections</p>
                    <p className="text-lg text-gray-700">By Appointment</p>
                    <p className="text-sm text-gray-500 mt-2">Prior arrangement required</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Warehouse Features */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Warehouse Features</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Climate Control",
                    desc: "Temperature and humidity controlled storage areas to preserve product quality",
                    icon: "🌡️"
                  },
                  {
                    title: "Security Systems",
                    desc: "24/7 surveillance and access control for inventory protection",
                    icon: "🔒"
                  },
                  {
                    title: "Digital Tracking",
                    desc: "Barcode and RFID systems for real-time inventory monitoring",
                    icon: "📊"
                  },
                  {
                    title: "Organized Layout",
                    desc: "Systematic arrangement for efficient picking and reduced handling time",
                    icon: "📦"
                  },
                  {
                    title: "Loading Facilities",
                    desc: "Modern loading bays for efficient dispatch operations",
                    icon: "🚛"
                  },
                  {
                    title: "Safety Compliance",
                    desc: "Full adherence to workplace safety and fire protection standards",
                    icon: "⚠️"
                  },
                ].map((feature, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-orange-200 transition-all">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === "team" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-purple-600 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Our Stores Team</h2>
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
                The Stationery Stores Division operates through specialized units handling receiving, storage, 
                inventory control, and distribution. Our experienced team includes warehouse supervisors, inventory 
                specialists, logistics coordinators, and distribution staff who work together to maintain seamless 
                operations and ensure products are always available when needed.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Receiving Unit</h4>
                  <p className="text-sm text-gray-600">Intake & quality verification</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Inventory Control</h4>
                  <p className="text-sm text-gray-600">Stock tracking & management</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Distribution Unit</h4>
                  <p className="text-sm text-gray-600">Order fulfillment & delivery</p>
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
              <h2 className="text-3xl font-bold text-gray-900">Services & Operations</h2>
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

            {/* Service Highlights */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">For Government Departments</h3>
                <p className="text-orange-100 leading-relaxed mb-4">
                  We provide dedicated inventory management and priority distribution services for government 
                  ministries and departments, ensuring consistent availability of essential stationery supplies.
                </p>
                <ul className="space-y-2 text-orange-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                    Priority order processing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                    Scheduled deliveries
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                    Dedicated account support
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Inventory Solutions</h3>
                <p className="text-purple-100 leading-relaxed mb-4">
                  Our advanced inventory management systems enable real-time tracking, automated reordering, 
                  and comprehensive reporting to optimize stock levels and reduce wastage.
                </p>
                <ul className="space-y-2 text-purple-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                    Digital tracking systems
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                    Automated alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                    Detailed analytics
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-gradient-to-r from-[#2b1052] to-orange-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
              <div className="relative">
                <Warehouse className="w-16 h-16 mx-auto mb-4 text-orange-300" />
                <h3 className="text-3xl font-bold mb-4">Need Information About Stock Availability?</h3>
                <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
                  Contact our Stationery Stores Division to inquire about inventory, place orders, or schedule 
                  product collections and deliveries.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
                >
                  Contact Stores
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