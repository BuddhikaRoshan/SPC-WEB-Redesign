"use client";

import { useState, useEffect } from "react";
import { 
  Shield, Printer, BookOpen, Globe, Package, Award,
  Clock, Users, TrendingUp, CheckCircle, ChevronDown,
  ArrowRight, FileText, Building2
} from "lucide-react";
import Footer from "../components/Footer";

const Service = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' });
  };

  const services = [
    {
      id: 'security-printing',
      icon: Shield,
      title: 'Security Printing',
      description: 'Advanced security document printing with anti-counterfeiting features for national identity cards, passports, and official certificates.',
      features: [
'NLB Lotteries',
      ]
    },
    {
      id: 'commercial-printing',
      icon: Printer,
      title: 'Commercial Printing',
      description: 'Professional printing solutions for businesses and institutions, from brochures to large-format marketing materials.',
      features: [
        'Business Stationery',
        'Brochures & Catalogs',
        'Large Format Printing',
        'Marketing Materials',
        'Corporate Identity',
        'Custom Packaging'
      ]
    },
    {
      id: 'publications',
      icon: BookOpen,
      title: 'Publications & Books',
      description: 'Complete book publishing services including educational textbooks, government gazettes, and official publications.',
      features: [
        'Educational Textbooks',
        'Government Gazettes',
        'Official Reports',
        'Journals & Periodicals',
        'Reference Books',
        'Custom Publications'
      ]
    },
    {
      id: 'digital-services',
      icon: Globe,
      title: 'Digital Services',
      description: 'Modern digital printing and online services with fast turnaround times for contemporary business needs.',
      features: [
        'Digital Printing',
        'Online Ordering',
        'Variable Data Printing',
        'Print on Demand',
        'E-Publishing',
        'Digital Archiving'
      ]
    },
    {
      id: 'stationery',
      icon: Package,
      title: 'Stationery Products',
      description: 'Quality office supplies including exercise books, notebooks, and examination materials manufactured to highest standards.',
      features: [
        'Exercise Books',
        'Notebooks & Registers',
        'Office Stationery',
        'Examination Materials',
        'File Covers & Folders',
        'Paper Products'
      ]
    },
    {
      id: 'special-services',
      icon: Award,
      title: 'Special Services',
      description: 'Specialized printing for unique requirements including official stamps, seals, and customized security documents.',
      features: [
        'Official Stamps & Seals',
        'Embossing Services',
        'Custom Security Features',
        'Specialty Papers',
        'Document Authentication',
        'Archival Quality Printing'
      ]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Established Excellence',
      description: 'Over 55 years of trusted service'
    },
    {
      icon: Shield,
      title: 'Security Expertise',
      description: 'Advanced security technologies'
    },
    {
      icon: Clock,
      title: 'Reliable Delivery',
      description: 'Consistent on-time delivery'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals'
    },
    {
      icon: TrendingUp,
      title: 'Quality Assurance',
      description: 'ISO certified processes'
    },
    {
      icon: Building2,
      title: 'Government Trusted',
      description: 'Official printing partner'
    }
  ];

  const process = [
    { step: '01', title: 'Consultation', description: 'Discuss requirements with experts', icon: Users },
    { step: '02', title: 'Quotation', description: 'Detailed pricing and timeline', icon: FileText },
    { step: '03', title: 'Production', description: 'Quality printing and checks', icon: Printer },
    { step: '04', title: 'Delivery', description: 'Timely delivery to location', icon: Package }
  ];

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
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive printing and publishing solutions for government and commercial clients
          </p>
        </div>

        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
          style={{ opacity: 1 - scrollY / 200 }}
        >
          <ChevronDown className="w-8 h-8 text-white" />
        </button>
      </div>

      {/* Introduction */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Printing Solutions
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From security printing to commercial services, we offer complete printing solutions backed by over five decades of excellence and innovation.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className="bg-white hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                <div className="p-8">
                  <div className="w-14 h-14 bg-blue-600 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {activeService === service.id && (
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <button className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors flex items-center gap-2">
                    <span>{activeService === service.id ? 'Show Less' : 'Learn More'}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeService === service.id ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Decades of excellence in printing and publishing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Process */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Simple and efficient workflow for all your printing needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, idx) => (
              <div key={idx} className="relative bg-white p-8 hover:shadow-lg transition-shadow">
                <div className="text-6xl font-bold text-blue-600/10 mb-4">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.description}
                </p>
                {idx < process.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-blue-600" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-blue-600 p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-white/90 text-lg mb-8">
            Contact us today to discuss your printing requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.href = '/contact'}
              className="px-8 py-3 bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </button>
            <button
              onClick={() => window.location.href = '/Products'}
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              View Products
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Service;