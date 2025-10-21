"use client";

import { useState } from "react";
import { 
  MapPin, Phone, Mail, CheckCircle, 
  Facebook, Youtube, Linkedin, Instagram
} from "lucide-react";
import dynamic from 'next/dynamic';

const MapComponent = dynamic(
  () => import('../components/MapComponent'),
  { ssr: false }
);
import Footer from "../components/Footer";

const outletLocations = [
  {
    name: "Peoples Park (Pettah)",
    address: "U.G.26/27, Pettah, Colombo 11",
    phone: "011 2423163",
    email: "spcmkt05@gmail.com",
    position: [6.9355, 79.85],
    region: "Colombo"
  },
  {
    name: "Isurupaya (Battaramulla)",
    address: "Ministry of Education, Isurupaya, Palawattha, Battaramulla",
    phone: "076 6699515",
    email: "spcmkt001@gmail.com",
    position: [6.9022, 79.9189],
    region: "Colombo"
  },
  {
    name: "Gampaha Outlet",
    address: "No. 8/9, Municipal Council New Shopping Complex, Bus Stand, Gampaha",
    phone: "033 2223683",
    email: "spcmkt11@gmail.com",
    position: [7.0916, 79.9997],
    region: "Gampaha"
  },
  {
    name: "Kalutara Outlet",
    address: "No. A/8, Super Market, Kalutara",
    phone: "034 2228660",
    email: "spcmkt04@gmail.com",
    position: [6.5869, 79.9603],
    region: "Kalutara"
  },
  {
    name: "Narammala Outlet",
    address: "No. 21, Super Market, Narammala",
    phone: "037 2249368",
    email: "spcmkt03@gmail.com",
    position: [7.4308, 80.2156],
    region: "Kurunegala"
  },
  {
    name: "Panaluwa Outlet (B Grade)",
    address: "Head Office, Panaluwa, Watareka, Padukka",
    phone: "0714895330",
    email: "spcmkt08@gmail.com",
    position: [6.8677, 80.0604],
    region: "Colombo"
  },
  {
    name: "Warakapola Outlet",
    address: "No. 48, Opposite the Bus Stand, Kandy Road, Warakapola",
    phone: "035 2267934",
    email: "spcmkt20@gmail.com",
    position: [7.227, 80.1958],
    region: "Kegalle"
  },
  {
    name: "Ambalangoda Outlet",
    address: "No. 341, Main Street, Ambalangoda",
    phone: "091 2255737",
    email: "spcmkt25@gmail.com",
    position: [6.2355, 80.0538],
    region: "Galle"
  },
  {
    name: "Vibavi Outlet",
    address: "Highlevel Road, Naduhena, Meegoda",
    phone: "0756701721",
    email: "mktspc1@gmail.com",
    position: [6.8433, 80.0032],
    region: "Colombo"
  },

];

const divisionContacts = [
  {
    name: "Security Printing Division",
    phone: "+94 112 757 512",
    email: "security.division@spc.lk",
    manager: "Division Head",
  },
  {
    name: "Stationery Factory Division",
    phone: "+94 112 757 513",
    email: "stationery.factory@spc.lk",
    manager: "Factory Manager",
  },
  {
    name: "Stationery Store Division",
    phone: "+94 112 757 514",
    email: "stationery.store@spc.lk",
    manager: "Store Manager",
  },
  {
    name: "Process Division",
    phone: "+94 112 757 515",
    email: "process.division@spc.lk",
    manager: "Process Manager",
  },
  {
    name: "Litho Division",
    phone: "+94 112 757 516",
    email: "litho.division@spc.lk",
    manager: "Litho Manager",
  },
  {
    name: "Binding Division",
    phone: "+94 112 757 517",
    email: "binding.division@spc.lk",
    manager: "Binding Manager",
  },
  {
    name: "Maintenance Division",
    phone: "+94 112 757 518",
    email: "maintenance.division@spc.lk",
    manager: "Maintenance Manager",
  },
  {
    name: "Main Store Division",
    phone: "+94 112 757 519",
    email: "main.store@spc.lk",
    manager: "Store Division Manager",
  },
  {
    name: "Human Resources & Administration Division",
    phone: "+94 112 757 520",
    email: "hr.admin@spc.lk",
    manager: "HR Director",
  },
  {
    name: "Finance Division",
    phone: "+94 112 757 521",
    email: "finance.division@spc.lk",
    manager: "Finance Director",
  },
  {
    name: "Supplies Division",
    phone: "+94 112 757 522",
    email: "supplies.division@spc.lk",
    manager: "Supplies Manager",
  },
  {
    name: "Marketing Division",
    phone: "+94 112 757 523",
    email: "marketing.division@spc.lk",
    manager: "Marketing Manager",
  },
  {
    name: "Chairman Office",
    phone: "+94 112 757 500",
    email: "chairman.office@spc.lk",
    manager: "Chairman",
  },
  {
    name: "General Manager Office",
    phone: "+94 112 757 501",
    email: "gm.office@spc.lk",
    manager: "General Manager",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/welcome/welcome.png')",
            transform: `translateY(${scrollY * 0.4}px)`
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Have any questions, concerns or feedback? We're here to assist you with your printing needs. Contact any of our divisions or visit our nationwide outlets.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Main Office Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-light text-slate-900 mb-12 pb-4 border-b-2 border-slate-200">
            HEAD OFFICE
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: MapPin,
                title: "Address",
                content: "State Printing Corporation\nPanaluwa, Watareka, Padukka"
              },
              {
                icon: Phone,
                title: "Phone Numbers",
                content: "+94 112 757 505\n+94 112 757 509\n+94 112 859 217"
              },
              {
                icon: Mail,
                title: "Email",
                content: "info@stateprinting.lk"
              }
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-slate-900" />
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Hours */}
        <div className="mb-20 bg-slate-50 p-12 rounded-lg">
          <h2 className="text-4xl font-light text-slate-900 mb-12 pb-4 border-b-2 border-slate-200">
            BUSINESS HOURS
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Head Office</h3>
              <div className="space-y-3 text-slate-600">
                <div className="flex justify-between pb-3 border-b border-slate-300">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-slate-900">8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span className="font-semibold text-slate-900">Closed</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Outlets</h3>
              <div className="space-y-3 text-slate-600">
                <div className="flex justify-between pb-3 border-b border-slate-300">
                  <span>Monday - Saturday</span>
                  <span className="font-semibold text-slate-900">7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold text-slate-900">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divisions Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-light text-slate-900 mb-12 pb-4 border-b-2 border-slate-200">
            DIVISIONS
          </h2>
          <div className="space-y-6">
            {divisionContacts.map((division, idx) => (
              <div key={idx} className="border-l-4 border-slate-900 pl-6 py-4 hover:bg-slate-50 px-6 transition-colors rounded cursor-pointer">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{division.name}</h3>
                <p className="text-sm text-slate-600 mb-3">{division.manager}</p>
                <div className="grid md:grid-cols-2 gap-4 text-slate-700">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-900" />
                    <a href={`tel:${division.phone}`} className="hover:text-slate-900 font-medium">
                      {division.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-900" />
                    <a href={`mailto:${division.email}`} className="hover:text-slate-900 font-medium">
                      {division.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Outlets Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-light text-slate-900 mb-12 pb-4 border-b-2 border-slate-200">
            OUR OUTLETS NATIONWIDE
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {outletLocations.map((outlet, idx) => (
              <div 
                key={idx} 
                className="border-l-4 border-slate-900 pl-6 py-4 hover:bg-slate-50 px-6 transition-colors rounded cursor-pointer"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{outlet.name}</h3>
                <p className="text-sm text-slate-600 mb-3 italic">{outlet.region}</p>
                <p className="text-slate-700 mb-4">{outlet.address}</p>
                <div className="space-y-2 text-slate-700">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-slate-900" />
                    <a href={`tel:${outlet.phone}`} className="hover:text-slate-900 font-medium">
                      {outlet.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-slate-900" />
                    <a href={`mailto:${outlet.email}`} className="hover:text-slate-900 font-medium">
                      {outlet.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-12">
          <MapComponent 
            locations={outletLocations.map(location => ({
              ...location,
              position: location.position // Use the actual coordinates from each location
            }))}
            activeOutlet={null}
            setActiveOutlet={() => {}}
          />
        </div>

        {/* Contact Form Section */}
        <div id="faq" className="mb-20 bg-slate-900 text-white py-16 px-12 rounded-lg">
          <h2 className="text-4xl font-light mb-12 pb-4 border-b border-slate-700">
            SEND US A MESSAGE
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {formSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Message Sent Successfully!</h3>
                <p className="text-slate-300">We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <div className="max-w-2xl mx-auto space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-3 text-white placeholder-slate-500 focus:border-slate-400 focus:outline-none transition-all"
                    required
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-3 text-white placeholder-slate-500 focus:border-slate-400 focus:outline-none transition-all"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-3 text-white placeholder-slate-500 focus:border-slate-400 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-slate-800 border border-slate-700 rounded px-4 py-3 text-white placeholder-slate-500 focus:border-slate-400 focus:outline-none transition-all resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-slate-900 font-semibold py-3 rounded hover:bg-slate-100 transition-all"
                >
                  SEND MESSAGE
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Social Media Section */}
        <div className="text-center py-12">
          <h3 className="text-2xl font-light text-slate-900 mb-8">CONNECT WITH US</h3>
          <div className="flex justify-center gap-6">
            {[
              { icon: Facebook, href: "https://www.facebook.com/stateprintingsl", label: "Facebook" },
              { icon: Youtube, href: "https://www.youtube.com/stateprintingsl", label: "YouTube" },
              { icon: Linkedin, href: "https://www.linkedin.com/company/state-printing-corporation", label: "LinkedIn" },
              { icon: Instagram, href: "https://www.instagram.com/stateprintingsl", label: "Instagram" }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-slate-700 transition-all"
                title={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}