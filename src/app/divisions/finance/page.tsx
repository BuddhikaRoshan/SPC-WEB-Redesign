"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Calculator, TrendingUp, FileText, DollarSign, PieChart, Shield, CreditCard, Briefcase } from "lucide-react";

export default function FinanceDivisionPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const teamMembers = [
    {
      name: "Mrs. Chamari Fernando",
      position: "Division Manager - Finance",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      email: "finance.manager@spc.lk",
      phone: "+94 11 234 5680",
    },
    {
      name: "Mr. Rohan Jayasinghe",
      position: "Chief Accountant",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
      email: "chief.accountant@spc.lk",
      phone: "+94 11 234 5681",
    },
    {
      name: "Ms. Dilini Wijesinghe",
      position: "Financial Controller",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      email: "financial.controller@spc.lk",
      phone: "+94 11 234 5682",
    },
  ];

  const services = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Financial Accounting",
      description: "Comprehensive accounting services including bookkeeping, journal entries, ledger management, and financial record maintenance.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Budget Planning",
      description: "Strategic budget preparation, allocation, monitoring, and variance analysis for all divisions and departments.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Financial Reporting",
      description: "Preparation of monthly, quarterly, and annual financial statements, reports, and regulatory submissions.",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Treasury Management",
      description: "Cash flow management, banking operations, investment oversight, and liquidity management services.",
    },
    {
      icon: <PieChart className="w-6 h-6" />,
      title: "Cost Analysis",
      description: "Detailed cost accounting, profitability analysis, and financial performance metrics for decision-making.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Internal Controls",
      description: "Implementation and monitoring of financial controls, audit compliance, and risk management procedures.",
    },
  ];

  const responsibilities = [
    "Managing all financial operations and accounting functions of the corporation",
    "Preparing annual budgets and financial forecasts for board approval",
    "Ensuring compliance with accounting standards and government regulations",
    "Processing payroll, vendor payments, and customer invoicing",
    "Managing accounts payable and receivable operations",
    "Coordinating external audits and implementing audit recommendations",
    "Providing financial analysis and reports to senior management",
    "Maintaining fixed asset registers and depreciation schedules",
    "Overseeing tax compliance and statutory payment obligations",
    "Managing banking relationships and cash management operations",
  ];

  const departments = [
    {
      name: "Accounts Department",
      description: "General ledger, accounts payable/receivable, and bookkeeping",
    },
    {
      name: "Payroll Section",
      description: "Employee salary processing and statutory deductions",
    },
    {
      name: "Treasury Section",
      description: "Cash management, banking operations, and investments",
    },
    {
      name: "Cost Accounting",
      description: "Job costing, variance analysis, and profitability reporting",
    },
    {
      name: "Budget & Planning",
      description: "Budget preparation, monitoring, and financial forecasting",
    },
    {
      name: "Internal Audit",
      description: "Financial controls, compliance monitoring, and risk assessment",
    },
  ];

  const capabilities = [
    { label: "Annual Budget", value: "LKR 2B+" },
    { label: "Monthly Transactions", value: "5,000+" },
    { label: "Staff Members", value: "30+ professionals" },
    { label: "Financial Systems", value: "Fully computerized" },
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
              Corporate Division
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            Finance Division
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
            Managing financial operations, ensuring fiscal responsibility, and providing strategic financial guidance for organizational excellence
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex space-x-8 overflow-x-auto">
            {["overview", "team", "services", "departments"].map((tab) => (
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
                  The Finance Division serves as the financial backbone of State Printing Corporation, managing all 
                  aspects of financial planning, accounting, reporting, and control. Our team of qualified professionals 
                  ensures accurate financial management, regulatory compliance, and strategic financial decision-making support.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  With a commitment to transparency, accountability, and best practices in financial management, we provide 
                  comprehensive financial services to all divisions while maintaining the highest standards of integrity 
                  and professionalism in all financial operations.
                </p>
              </div>
            </section>

            {/* Financial Metrics */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-amber-500 rounded"></div>
                <h2 className="text-3xl font-bold text-gray-900">Key Metrics</h2>
              </div>
              <div className="grid md:grid-cols-4 gap-6">
                {capabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all group"
                  >
                    <p className="text-blue-100 text-sm mb-2">{capability.label}</p>
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
                <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-blue-600 rounded"></div>
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

            {/* Office Hours */}
            <section>
              <div className="bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Working Hours</p>
                    <p className="text-2xl font-bold text-blue-600">8:30 AM - 4:15 PM</p>
                    <p className="text-sm text-gray-500 mt-2">Monday to Friday</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Payment Processing</p>
                    <p className="text-xl font-bold text-blue-600">9:00 AM - 3:00 PM</p>
                    <p className="text-sm text-gray-500 mt-2">Weekdays only</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <p className="text-gray-600 font-semibold mb-2">Month-End Closing</p>
                    <p className="text-lg text-gray-700">Last 3 Days</p>
                    <p className="text-sm text-gray-500 mt-2">Extended hours as needed</p>
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
              <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
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
                      <p className="text-xs">Finance Division, State Printing Corporation</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Info */}
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Team</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our finance division comprises over 30 qualified professionals including chartered accountants, 
                management accountants, and finance specialists. The team brings extensive experience in public 
                sector financial management, audit, and compliance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We maintain continuous professional development through regular training programs, workshops, and 
                certifications to stay updated with evolving accounting standards, tax regulations, and financial 
                management best practices.
              </p>
            </div>
          </div>
        )}

        {/* Services Tab */}
        {activeTab === "services" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-amber-500 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Services & Capabilities</h2>
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

            {/* Financial Systems */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Modern Systems</h3>
                <p className="text-blue-100 leading-relaxed mb-4">
                  Our division utilizes advanced financial management software and ERP systems for efficient 
                  processing, real-time reporting, and data-driven decision making.
                </p>
                <ul className="space-y-2 text-blue-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    Computerized Accounting System
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    Integrated Payroll Management
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                    Online Banking Integration
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Compliance & Standards</h3>
                <p className="text-amber-100 leading-relaxed mb-4">
                  We maintain strict adherence to Sri Lanka Accounting Standards (SLFRS/LKAS) and government 
                  financial regulations for public sector entities.
                </p>
                <ul className="space-y-2 text-amber-100">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    SLFRS/LKAS Compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    Auditor General Guidelines
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                    Treasury Circular Adherence
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-16 bg-gradient-to-r from-[#2b1052] to-blue-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
              <div className="relative">
                <h3 className="text-3xl font-bold mb-4">Financial Inquiries?</h3>
                <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                  Contact our finance division for payment processing, account statements, financial reports, 
                  or general financial inquiries.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
                >
                  Contact Finance Division
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Departments Tab */}
        {activeTab === "departments" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-gradient-to-r from-amber-500 to-blue-600 rounded"></div>
              <h2 className="text-3xl font-bold text-gray-900">Departments & Sections</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {departments.map((dept, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-amber-400 to-blue-600 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{dept.name}</h3>
                      <p className="text-gray-600 text-sm">{dept.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Financial Year Info */}
            <div className="mt-12 bg-gradient-to-br from-blue-50 to-amber-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Financial Year & Reporting</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                The corporation follows the calendar year as its financial year (January 1 - December 31). 
                Financial statements are prepared monthly for internal management and annually for external reporting 
                and audit purposes.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Financial Year</p>
                  <p className="text-xl font-bold text-blue-600">Jan 1 - Dec 31</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Monthly Closing</p>
                  <p className="text-xl font-bold text-blue-600">Within 7 Days</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600 mb-1">Annual Audit</p>
                  <p className="text-xl font-bold text-blue-600">March-May</p>
                </div>
              </div>
            </div>

            {/* Technology & Innovation */}
            <div className="mt-12 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Digital Transformation</h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                The Finance Division is continuously upgrading its systems and processes through digital transformation 
                initiatives aimed at improving efficiency, accuracy, and transparency in financial operations.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-sm text-blue-200 mb-2">System Implementation</p>
                  <p className="text-lg font-bold">2023-2024</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <p className="text-sm text-blue-200 mb-2">Automation Rate</p>
                  <p className="text-lg font-bold">85%+</p>
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