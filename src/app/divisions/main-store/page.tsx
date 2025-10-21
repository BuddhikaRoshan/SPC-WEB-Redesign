"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ShoppingCart, Package, Truck, Warehouse, Users, Award, Lightbulb, BarChart3, ClipboardCheck, Shield, DollarSign, Calendar } from "lucide-react";

export default function MainStoresDivisionPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    {
      name: "Mr. Asanka Kumara",
      position: "Stores Division Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      email: "stores.manager@spc.lk",
      phone: "+94 11 234 5900",
    },
    {
      name: "Ms. Priyanthi Jayawardena",
      position: "Procurement Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      email: "procurement@spc.lk",
      phone: "+94 11 234 5901",
    },
    {
      name: "Mr. Sanjeewa Rathnayake",
      position: "Inventory Controller",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      email: "inventory@spc.lk",
      phone: "+94 11 234 5902",
    },
  ];

  const services = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Strategic Procurement",
      description: "Centralized purchasing of all raw materials, printing supplies, and equipment for optimal pricing and quality.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Inventory Management",
      description: "Comprehensive stock control system ensuring availability of materials while minimizing carrying costs.",
    },
    {
      icon: <Warehouse className="w-6 h-6" />,
      title: "Warehouse Management",
      description: "Efficient storage and retrieval systems for paper, ink, plates, and other printing materials.",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Supply Chain Coordination",
      description: "Managing logistics and distribution of materials to various production divisions within SPC.",
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Rigorous quality checks on all incoming materials to ensure they meet SPC's standards.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Inventory Analytics",
      description: "Data-driven analysis of consumption patterns and optimization of stock levels.",
    },
  ];

  const responsibilities = [
    "Procuring all raw materials including paper, ink, plates, and chemicals",
    "Managing inventory levels across multiple warehouse locations",
    "Coordinating with suppliers for timely delivery of materials",
    "Implementing stock control and inventory management systems",
    "Quality inspection and verification of incoming materials",
    "Managing supplier relationships and performance evaluation",
    "Cost optimization through bulk purchasing and negotiations",
    "Maintaining safety stock for critical production materials",
  ];

  const procurementCategories = [
    "Paper & Substrates",
    "Printing Inks",
    "Printing Plates",
    "Binding Materials",
    "Chemicals & Solvents",
    "Machine Parts",
    "Packaging Materials",
    "Office Supplies",
  ];

  const keySuppliers = [
    {
      category: "Paper Products",
      suppliers: ["Lanka Paper Products", "Hayleys Paper", "International Paper", "Local Paper Mills"]
    },
    {
      category: "Printing Inks",
      suppliers: ["DIC Lanka", "Siegwerk", "Flint Group", "Tokyo Printing Ink"]
    },
    {
      category: "Printing Plates",
      suppliers: ["Fuji Film", "Kodak", "Agfa", "Local Plate Manufacturers"]
    },
    {
      category: "Equipment & Parts",
      suppliers: ["Heidelberg", "Muller Martini", "Polar", "Local Technical Suppliers"]
    }
  ];

  const inventoryStats = [
    { material: "Paper Stock", quantity: "850+", unit: "Tonnes", value: "High" },
    { material: "Printing Ink", quantity: "12,500+", unit: "Liters", value: "Medium" },
    { material: "Printing Plates", quantity: "8,000+", unit: "Sheets", value: "High" },
    { material: "Binding Materials", quantity: "45+", unit: "Tonnes", value: "Medium" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#3730a3] via-indigo-800 to-[#3730a3] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="inline-block mb-4">
            <span className="bg-indigo-500/20 text-indigo-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-indigo-400/30">
              Procurement & Inventory Division
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200">
            Main Stores Division
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl leading-relaxed">
            Centralized procurement and inventory management ensuring uninterrupted supply of quality materials for SPC's printing operations
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex space-x-8 overflow-x-auto">
            {["overview", "team", "services", "inventory"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-semibold text-sm uppercase tracking-wide whitespace-nowrap transition-all ${
                  activeTab === tab
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-600 hover:text-indigo-600"
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
                <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">About the Main Stores Division</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The Main Stores Division serves as the central hub for all procurement and inventory management 
                  activities at State Printing Corporation. We ensure the uninterrupted flow of high-quality raw 
                  materials and supplies essential for SPC's diverse printing operations.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Through strategic purchasing, efficient inventory control, and strong supplier relationships, 
                  we maintain optimal stock levels while minimizing costs and ensuring material quality meets 
                  SPC's exacting standards for printing excellence.
                </p>
              </div>
            </section>

            {/* Key Responsibilities */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-indigo-500 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Key Responsibilities</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {responsibilities.map((responsibility, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-indigo-200 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Procurement Categories */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Procurement Categories</h2>
              </div>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
                <div className="grid md:grid-cols-4 gap-4">
                  {procurementCategories.map((category, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 group-hover:scale-150 transition-transform"></div>
                        <p className="text-sm font-semibold text-gray-700 group-hover:text-indigo-600 transition-colors">
                          {category}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Procurement Process */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-indigo-500 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Our Procurement Process</h2>
              </div>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { step: "1", title: "Requirement", desc: "Material needs analysis" },
                  { step: "2", title: "Sourcing", desc: "Supplier identification" },
                  { step: "3", title: "Negotiation", desc: "Price & terms finalization" },
                  { step: "4", title: "Purchase", desc: "Order placement" },
                  { step: "5", title: "Delivery", desc: "Quality check & storage" },
                ].map((phase, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white font-bold text-xl mb-4">
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
                  { icon: <ShoppingCart className="w-8 h-8" />, value: "250+", label: "Active Suppliers" },
                  { icon: <Package className="w-8 h-8" />, value: "98.5%", label: "Stock Availability" },
                  { icon: <DollarSign className="w-8 h-8" />, value: "15%", label: "Cost Savings" },
                  { icon: <Calendar className="w-8 h-8" />, value: "24/7", label: "Operations" },
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Inventory Highlights */}
            <section>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
                <div className="flex items-center gap-3 mb-6">
                  <Warehouse className="w-8 h-8 text-indigo-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Current Inventory Highlights</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {inventoryStats.map((item, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-bold text-gray-900">{item.material}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          item.value === 'High' 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {item.value} Value
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-indigo-600 mb-1">{item.quantity} {item.unit}</p>
                      <p className="text-sm text-gray-500">Current stock level</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Team Tab */}
        {activeTab === "team" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Our Stores Team</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-indigo-300 font-semibold text-sm">{member.position}</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-colors">
                      <Mail className="w-5 h-5 text-indigo-500" />
                      <a href={`mailto:${member.email}`} className="hover:underline text-sm">
                        {member.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 hover:text-indigo-600 transition-colors">
                      <Phone className="w-5 h-5 text-indigo-500" />
                      <a href={`tel:${member.phone}`} className="hover:underline text-sm">
                        {member.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-1" />
                      <p className="text-xs">State Printing Corporation, Colombo 08, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Structure */}
            <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Division Structure</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Stores Division operates through specialized teams focusing on procurement, inventory control, 
                warehouse management, and supplier relations. Each team works collaboratively to ensure seamless 
                material flow across SPC's production divisions.
              </p>
              <div className="grid md:grid-cols-4 gap-4 mt-6">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Procurement Team</h4>
                  <p className="text-sm text-gray-600">Supplier management & purchasing</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Inventory Control</h4>
                  <p className="text-sm text-gray-600">Stock management & optimization</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Warehouse Operations</h4>
                  <p className="text-sm text-gray-600">Storage & material handling</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Quality Assurance</h4>
                  <p className="text-sm text-gray-600">Material inspection & testing</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Services & Functions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-indigo-200 transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Key Supplier Relationships */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Supplier Relationships</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {keySuppliers.map((category, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">{category.category}</h4>
                    <div className="space-y-2">
                      {category.suppliers.map((supplier, supplierIndex) => (
                        <div key={supplierIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                          <p className="text-gray-700">{supplier}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Procurement Benefits */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Cost Optimization</h3>
                <p className="text-indigo-100 leading-relaxed mb-4">
                  Our centralized procurement strategy leverages SPC's purchasing power to achieve significant 
                  cost savings while maintaining the highest quality standards.
                </p>
                <ul className="space-y-2 text-indigo-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                    Bulk purchasing discounts
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                    Strategic supplier contracts
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                    Inventory carrying cost reduction
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
                <p className="text-purple-100 leading-relaxed mb-4">
                  Every material undergoes rigorous quality checks to ensure it meets SPC's standards for 
                  printing excellence and production requirements.
                </p>
                <ul className="space-y-2 text-purple-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
                    Incoming material inspection
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
                    Supplier quality audits
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-indigo-300"></div>
                    Material testing & certification
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Inventory Tab */}
        {activeTab === "inventory" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-purple-600 to-indigo-500 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Inventory Management</h2>
            </div>
            
            {/* Warehouse Locations */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Warehouse Facilities</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <Warehouse className="w-12 h-12 text-indigo-500 mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Main Warehouse</h4>
                  <p className="text-gray-600 mb-4">Primary storage for paper, ink, and general supplies</p>
                  <p className="text-sm text-gray-500">Capacity: 5,000 sq. meters</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <Shield className="w-12 h-12 text-purple-500 mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Secure Storage</h4>
                  <p className="text-gray-600 mb-4">Dedicated area for valuable and sensitive materials</p>
                  <p className="text-sm text-gray-500">Climate controlled</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <Package className="w-12 h-12 text-indigo-500 mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Finished Goods</h4>
                  <p className="text-gray-600 mb-4">Storage for completed printing jobs awaiting delivery</p>
                  <p className="text-sm text-gray-500">Dispatch coordination</p>
                </div>
              </div>
            </section>

            {/* Inventory Systems */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Inventory Management Systems</h3>
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Technology Infrastructure</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                        <p className="text-gray-700">Barcode scanning system</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                        <p className="text-gray-700">Real-time inventory tracking</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                        <p className="text-gray-700">Automated reorder points</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                        <p className="text-gray-700">Digital inventory records</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Management Practices</h4>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <p className="text-gray-700">First-In-First-Out (FIFO) system</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <p className="text-gray-700">Regular stock audits</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <p className="text-gray-700">Safety stock maintenance</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                        <p className="text-gray-700">Consumption pattern analysis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact CTA */}
            <div className="mt-16 bg-gradient-to-r from-[#3730a3] to-indigo-800 rounded-2xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
              <div className="relative">
                <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-indigo-300" />
                <h3 className="text-3xl font-bold mb-4">Become an SPC Supplier</h3>
                <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
                  We're always looking for reliable suppliers who can meet our quality standards and delivery 
                  requirements. Join our network of trusted partners supporting Sri Lanka's premier printing institution.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
                >
                  Register as Supplier
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