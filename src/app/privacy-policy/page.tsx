'use client';

import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-blue-50 relative overflow-hidden">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">
          {/* Header Section */}
          <header className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/10 rounded-full -mr-48 -mt-48 animate-float" />

            <div className="relative z-10">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-lg">
                  <img src="/header/gov.png" alt="Government Logo" className="h-14 w-auto" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-1 text-blue-100">State Printing Corporation</h1>
                  <p className="text-blue-50 text-lg">Government of Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-8 h-8 text-blue-200" />
                <h2 className="text-3xl font-semibold text-blue-100">Privacy Policy</h2>
              </div>
              <p className="text-blue-50 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Effective Date: October 16, 2025
              </p>
            </div>
          </header>

          {/* Content Section */}
          <div className="p-12">
            {/* Introduction */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-400 p-6 rounded-lg mb-10">
              <p className="text-blue-900 text-lg leading-relaxed font-medium">
                The State Printing Corporation (SPC) is committed to protecting the privacy and security of personal information collected through our services, website, and operations. This Privacy Policy outlines how we collect, use, store, and protect your information in accordance with applicable laws and regulations of Sri Lanka.
              </p>
            </div>

            {/* Section 1 */}
            <Section icon={<FileText className="w-6 h-6 text-blue-500" />} title="1. Information We Collect" id="info-collect">
              <p className="mb-4 text-blue-700">
                In the course of providing printing, publishing, and related services, we may collect the following types of information:
              </p>

              <SubSection title="1.1 Personal Information">
                <ul className="space-y-3">
                  <ListItem><strong>Identity Data:</strong> Full name, NIC, passport number, date of birth</ListItem>
                  <ListItem><strong>Contact Data:</strong> Address, telephone number, email address</ListItem>
                  <ListItem><strong>Business Information:</strong> Company name, registration number, tax ID</ListItem>
                  <ListItem><strong>Financial Data:</strong> Bank account details, billing info</ListItem>
                </ul>
              </SubSection>

              <SubSection title="1.2 Service-Related Information">
                <ul className="space-y-3">
                  <ListItem>Printing job details and document content</ListItem>
                  <ListItem>Order history and communication records</ListItem>
                </ul>
              </SubSection>

              <SubSection title="1.3 Technical Information">
                <ul className="space-y-3">
                  <ListItem>Website analytics and IP addresses</ListItem>
                  <ListItem>Cookies and browser information</ListItem>
                </ul>
              </SubSection>
            </Section>

            {/* Section 2 */}
            <Section icon={<Eye className="w-6 h-6 text-blue-500" />} title="2. How We Use Your Information" id="info-use">
              <p className="mb-4 text-blue-700">
                SPC uses collected information for the following purposes:
              </p>
              <ol className="space-y-3 list-decimal list-inside text-blue-700">
                <ListItem><strong>Service Delivery:</strong> Process orders and provide support</ListItem>
                <ListItem><strong>Legal Compliance:</strong> Fulfill government or court requirements</ListItem>
                <ListItem><strong>Communication:</strong> Provide updates and notifications</ListItem>
                <ListItem><strong>Quality Improvement:</strong> Enhance our services and security</ListItem>
              </ol>
            </Section>

            {/* Important Notice */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6 my-8">
              <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                <span className="text-2xl">⚠</span>
                Important Notice
              </h3>
              <p className="text-blue-700 leading-relaxed">
                Certain documents and information processed by SPC may contain sensitive government information. Unauthorized use or disclosure of such data may result in legal action under Sri Lankan law.
              </p>
            </div>

            {/* Section 3 */}
            <Section icon={<Lock className="w-6 h-6 text-blue-500" />} title="3. Data Security" id="data-security">
              <p className="mb-4 text-blue-700">
                We enforce strong physical, technical, and administrative security measures to safeguard your data.
              </p>
              <ul className="space-y-3 text-blue-700">
                <ListItem>Restricted facility access and CCTV surveillance</ListItem>
                <ListItem>Encrypted digital storage and firewalls</ListItem>
                <ListItem>Regular system audits and staff training</ListItem>
              </ul>
            </Section>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-xl p-10 mt-12 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-white">
                  <Mail className="w-8 h-8" />
                  Contact Information
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <ContactCard icon={<MapPin className="w-5 h-5" />} title="Address" content="State Printing Corporation\nPanaluwa, Watareka, Padukka" />
                  <ContactCard icon={<Phone className="w-5 h-5" />} title="Phone" content="+94 112 757 505\n+94 112 757 509\n+94 112 859 217" />
                  <ContactCard icon={<Mail className="w-5 h-5" />} title="Email" content="info@stateprinting.lk" />
                  <ContactCard icon={<Clock className="w-5 h-5" />} title="Office Hours" content="Monday - Friday: 8:00 AM - 5:00 PM" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        .animate-fadeIn { animation: fadeIn 0.8s ease; }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

// Reusable Components
function Section({ icon, title, id, children }: { icon: React.ReactNode; title: string; id: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-12">
      <h2 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-4">
        <div className="w-2 h-10 bg-gradient-to-b from-blue-400 to-cyan-300 rounded-full" />
        <span className="flex items-center gap-3">{icon}{title}</span>
      </h2>
      <div className="ml-6">{children}</div>
    </section>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 mb-6">
      <h3 className="text-xl font-semibold text-blue-700 mb-4">{title}</h3>
      {children}
    </div>
  );
}

function ListItem({ children }: { children: React.ReactNode }) {
  return <li className="text-blue-700 leading-relaxed pl-2">{children}</li>;
}

function ContactCard({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg p-5 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300">
      <h4 className="text-sm uppercase tracking-wider mb-2 flex items-center gap-2 text-white">
        {icon}
        {title}
      </h4>
      <p className="text-white text-base">{content}</p>
    </div>
  );
}
