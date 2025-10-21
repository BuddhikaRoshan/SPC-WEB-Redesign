"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Package, Truck, FileCheck, ShoppingCart, BarChart2, ClipboardCheck, Boxes, TrendingUp } from "lucide-react";

export default function SupplyDivisionPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    {
      name: "Mr. Sampath Gunawardena",
      position: "Supply Division Manager",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      email: "supply.manager@spc.lk",
      phone: "+94 11 234 5700",
    },
    {
      name: "Ms. Dilini Amarasinghe",
      position: "Procurement Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      email: "procurement@spc.lk",
      phone: "+94 11 234 5701",
    },
    {
      name: "Mr. Mahesh Jayakody",
      position: "Inventory Manager",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop",
      email: "inventory@spc.lk",
      phone: "+94 11 234 5702",
    },
  ];

  const services = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Procurement Management",
      description: "Handling supplier selection, quotation analysis, and purchasing of raw materials and equipment.",
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Inventory Control",
      description: "Managing stock levels, warehouse operations, and ensuring optimal inventory turnover.",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Logistics Coordination",
      description: "Organizing delivery schedules, transportation, and distribution of materials.",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Vendor Management",
      description: "Maintaining supplier relationships, evaluating performance, and ensuring quality standards.",
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Cost Optimization",
      description: "Analyzing procurement costs, negotiating prices, and implementing cost-saving initiatives.",
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Inspecting incoming materials, verifying specifications, and maintaining quality records.",
    },
  ];

  const responsibilities = [
    "Managing procurement of raw materials, chemicals, paper, and printing supplies",
    "Maintaining optimal inventory levels to ensure uninterrupted production",
    "Conducting supplier evaluations and vendor performance assessments",
    "Processing purchase requisitions and issuing purchase orders",
    "Coordinating with production units to forecast material requirements",
    "Managing warehouse operations and storage facilities",
    "Ensuring compliance with government procurement regulations",
    "Implementing inventory management systems and stock control procedures",
  ];

  const supplyCategories = [
    "Printing Paper & Board",
    "Inks & Chemicals",
    "Printing Plates",
    "Binding Materials",
    "Packaging Supplies",
    "Machine Parts & Tools",
    "Office Stationery",
    "Safety Equipment",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#2b1052] via-blue-900 to-[#2b1052] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="inline-block mb-4">
            <span className="bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm border border-amber-400/30">
              Operational Division
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Supply Division
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Managing procurement, inventory, and logistics to ensure seamless operations across all production units
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
                <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-blue-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">About the Division</h2>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  The Supply Division serves as the backbone of State Printing Corporation's operations, managing 
                  the entire supply chain from procurement to inventory management. We ensure that all production 
                  units have timely access to quality raw materials, equipment, and supplies necessary for efficient 
                  operations.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our team is committed to cost-effective procurement, maintaining optimal inventory levels, and 
                  building strong relationships with reliable suppliers. Through strategic sourcing and efficient 
                  logistics management, we support the organization's production goals while maintaining the highest 
                  standards of quality and compliance.
                </p>
              </div>
            </section>

            {/* Key Responsibilities */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-amber-500 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Key Responsibilities</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {responsibilities.map((responsibility, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-blue-600 flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{responsibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Supply Categories */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-blue-600 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Supply Categories</h2>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 border border-blue-100">
                <div className="grid md:grid-cols-4 gap-4">
                  {supplyCategories.map((category, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-blue-600 group-hover:scale-150 transition-transform"></div>
                        <p className="text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
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
                <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-amber-500 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Procurement Process</h2>
              </div>
              <div className="grid md:grid-cols-5 gap-4">
                {[
                  { step: "1", title: "Requisition", desc: "Material request received" },
                  { step: "2", title: "Quotation", desc: "Supplier quotes collected" },
                  { step: "3", title: "Approval", desc: "Management authorization" },
                  { step: "4", title: "Ordering", desc: "Purchase order issued" },
                  { step: "5", title: "Delivery", desc: "Material received & stored" },
                ].map((phase, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl mb-4">
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
                  { icon: <Boxes className="w-8 h-8" />, value: "500+", label: "Active SKUs" },
                  { icon: <Package className="w-8 h-8" />, value: "150+", label: "Registered Suppliers" },
                  { icon: <Truck className="w-8 h-8" />, value: "1000+", label: "Monthly Orders" },
                  { icon: <TrendingUp className="w-8 h-8" />, value: "98%", label: "On-Time Delivery" },
                ].map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-blue-600 flex items-center justify-center text-white mx-auto mb-4">
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
              <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Weekdays</p>
                    <p className="text-2xl font-bold text-blue-600">8:30 AM - 4:15 PM</p>
                    <p className="text-sm text-gray-500 mt-2">Monday to Friday</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Lunch Break</p>
                    <p className="text-2xl font-bold text-amber-600">12:30 PM - 1:15 PM</p>
                    <p className="text-sm text-gray-500 mt-2">Daily</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Urgent Requests</p>
                    <p className="text-lg text-gray-700">Priority Handling</p>
                    <p className="text-sm text-gray-500 mt-2">Production support</p>
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
              <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-blue-600 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Our Supply Team</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-100 to-amber-100">
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
                      <p className="text-xs">State Printing Corporation, Colombo 08, Sri Lanka</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Structure */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Division Structure</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Supply Division operates through specialized sub-units including procurement, inventory management, 
                warehouse operations, and vendor relations. Our team works closely with production divisions to ensure 
                material availability and supports the organization's operational efficiency through strategic supply 
                chain management.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Procurement Unit</h4>
                  <p className="text-sm text-gray-600">Sourcing & purchasing operations</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Warehouse Section</h4>
                  <p className="text-sm text-gray-600">Storage & inventory control</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-2">Quality Inspection</h4>
                  <p className="text-sm text-gray-600">Material verification & testing</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-amber-500 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Services & Functions</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-blue-200 transition-all group"
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-400 to-blue-600 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Additional Services */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Supplier Registration</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  We welcome qualified suppliers to register with SPC. Our vendor registration process ensures 
                  we work with reliable partners who meet our quality and delivery standards.
                </p>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    Competitive pricing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    Quality certifications
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    Timely delivery records
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Internal Requisitions</h3>
                <p className="text-amber-100 leading-relaxed mb-4">
                  SPC divisions can submit material requisitions through our standardized process. We ensure 
                  prompt processing and delivery to support uninterrupted operations.
                </p>
                <ul className="space-y-2 text-amber-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    Online requisition system
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    Fast-track for urgent needs
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    Status tracking available
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-gradient-to-r from-[#2b1052] to-blue-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
              <div className="relative">
                <h3 className="text-3xl font-bold mb-4">Contact Supply Division</h3>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  For supplier inquiries, material requisitions, or procurement-related questions, 
                  please reach out to our supply team.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
                >
                  Contact Us
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