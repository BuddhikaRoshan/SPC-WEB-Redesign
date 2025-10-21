"use client";

import { useState, useEffect } from "react";
import {
  Briefcase, GraduationCap, MapPin, Clock, FileText, 
  ArrowRight, ChevronDown, Target, Users, TrendingUp,
  Award, Heart, Calendar, Send, CheckCircle, Mail, X
} from "lucide-react";
import Footer from "../components/Footer";

interface Job {
  id: number;
  title: string;
  type: string;
  location: string;
  experience: string;
  description: string;
  requirements: string[];
  advertisement?: {
    type: "image" | "pdf";
    url: string;
    alt?: string;
  };
}

const careers: Job[] = [
  {
    id: 1,
    title: "Printing Press Operator",
    type: "Full-time",
    location: "Colombo",
    experience: "2+ years",
    description: "We are looking for an experienced Printing Press Operator to handle our state-of-the-art printing equipment and ensure high-quality output.",
    requirements: [
      "Diploma in Printing Technology or equivalent",
      "Minimum 2 years of experience in offset printing",
      "Knowledge of color management and quality control",
      "Ability to work in shifts",
    ],
    advertisement: {
      type: "image",
      url: "/welcome.jpeg",
      alt: "Printing Press Operator Position",
    },
  },
  {
    id: 2,
    title: "Graphic Designer",
    type: "Full-time",
    location: "Colombo",
    experience: "3+ years",
    description: "Creative Graphic Designer needed to create visually appealing designs for various print and digital media.",
    requirements: [
      "Degree in Graphic Design or related field",
      "Proficiency in Adobe Creative Suite",
      "Strong portfolio showcasing design work",
      "Experience with print production processes",
    ],
    advertisement: {
      type: "pdf",
      url: "/G.M.pdf",
      alt: "Graphic Designer Position",
    },
  },
];

const CareersPage = () => {
  const [activeTab, setActiveTab] = useState("openings");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    position: "",
    coverLetter: "" 
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.position && formData.coverLetter) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: "", email: "", phone: "", position: "", coverLetter: "" });
      }, 3000);
    }
  };

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
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
                  Careers
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                  Join Sri Lanka's premier printing corporation and be part of our legacy of excellence. Build your career with us.
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

      {/* Main Content - White Background */}
      <div className="relative z-10 bg-white">
        <div className="container mx-auto px-4 py-16">
          {/* Why Join SPC Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {[
              {
                icon: Target,
                title: "Innovation",
                content: "Drive creative solutions with cutting-edge technology",
                color: "from-blue-600 to-blue-500"
              },
              {
                icon: Award,
                title: "Integrity",
                content: "Work with honesty, transparency, and ethical practices",
                color: "from-slate-700 to-slate-600"
              },
              {
                icon: TrendingUp,
                title: "Growth",
                content: "Access continuous learning and career advancement",
                color: "from-blue-700 to-blue-600"
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 transition-all duration-500 hover:shadow-xl cursor-pointer"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${card.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-800">{card.title}</h3>
                <p className="text-slate-600 group-hover:text-slate-900 transition-colors">{card.content}</p>
              </div>
            ))}
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {[
              { id: "openings", label: "Current Openings", icon: Briefcase },
              { id: "culture", label: "Our Culture", icon: Users }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Current Openings */}
          {activeTab === "openings" && (
            <div className="max-w-6xl mx-auto animate-fadeIn">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4 text-slate-800">
                  Current Job Openings
                </h2>
                <p className="text-slate-600 text-lg">Explore exciting opportunities to join our team</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {careers.map((job) => (
                  <div
                    key={job.id}
                    className="group bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 transition-all duration-500 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl mb-2 text-slate-800">{job.title}</h3>
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded">{job.type}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 mb-4 line-clamp-2">{job.description}</p>
                    
                    <div className="space-y-2 text-sm mb-4">
                      <div className="flex items-center gap-2 text-slate-700">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-700">
                        <GraduationCap className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">{job.experience} experience required</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <a 
                        href="mailto:careers@stateprinting.lk?subject=Application for Printing Press Operator"
                        className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <button 
                        onClick={() => setSelectedJob(job)}
                        className="px-4 py-2 border-2 border-slate-300 hover:border-blue-400 text-slate-700 font-semibold rounded-lg transition-colors"
                      >
                        Advertisement
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Job Advertisement Modal */}
              {selectedJob && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                  <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                    <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center z-10">
                      <h3 className="text-2xl font-bold text-slate-800">{selectedJob.title} - Advertisement</h3>
                      <button 
                        onClick={() => setSelectedJob(null)}
                        className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <X className="w-6 h-6 text-slate-600" />
                      </button>
                    </div>

                    <div className="p-6">
                      {selectedJob.advertisement ? (
                        <div className="space-y-4">
                          {selectedJob.advertisement.type === "image" ? (
                            <div className="w-full">
                              <img 
                                src={selectedJob.advertisement.url} 
                                alt={selectedJob.advertisement.alt || "Job Advertisement"}
                                className="w-full h-auto rounded-lg border border-slate-200"
                              />
                            </div>
                          ) : selectedJob.advertisement.type === "pdf" ? (
                            <div className="w-full h-[600px] border border-slate-200 rounded-lg overflow-hidden">
                              <iframe
                                src={selectedJob.advertisement.url}
                                className="w-full h-full"
                                title={selectedJob.advertisement.alt || "Job Advertisement PDF"}
                              />
                            </div>
                          ) : null}
                          
                          <div className="pt-4 border-t border-slate-200">
                            <a
                              href={`mailto:careers@stateprinting.lk?subject=Application for ${encodeURIComponent(selectedJob.title)}`}
                              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                              <Mail className="w-5 h-5" />
                              <span>Apply via Email</span>
                              <ArrowRight className="w-5 h-5" />
                            </a>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-12">
                          <FileText className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                          <p className="text-slate-600 text-lg mb-6">No advertisement available for this position</p>
                          <a
                            href={`mailto:careers@stateprinting.lk?subject=Application for ${encodeURIComponent(selectedJob.title)}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
                          >
                            <Mail className="w-5 h-5" />
                            <span>Apply via Email</span>
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Application Form */}
          {activeTab === "apply" && (
            <div className="max-w-6xl mx-auto animate-fadeIn">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-slate-800">
                  Life at State Printing Corporation
                </h2>
                <p className="text-slate-600 text-lg">Discover what makes SPC a great place to work</p>
              </div>

              {/* Learning & Development */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Empowering Growth Through Continuous Learning</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Pre-Press & Production", desc: "Hands-on experience with state-of-the-art printing technologies" },
                    { title: "Digital Innovation", desc: "Learn and implement cutting-edge digital solutions" },
                    { title: "Cross-Departmental Growth", desc: "Collaborate across teams for diverse experience" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-bold text-slate-800 mb-3">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusive Culture */}
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">An Inclusive, Caring Culture</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: Heart, title: "Health & Wellness", desc: "Year-round programs promoting physical and mental well-being" },
                    { icon: Calendar, title: "Cultural Events", desc: "Engage in celebrations and community activities" },
                    { icon: Users, title: "Sports & Family", desc: "Participate in tournaments and family-oriented programs" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-800 mb-3">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Our Culture */}
          {activeTab === "culture" && (
            <div className="max-w-6xl mx-auto animate-fadeIn">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-slate-800">
                  Life at State Printing Corporation
                </h2>
                <p className="text-slate-600 text-lg">Discover what makes SPC a great place to work</p>
              </div>

              {/* Learning & Development */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Empowering Growth Through Continuous Learning</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: "Pre-Press & Production", desc: "Hands-on experience with state-of-the-art printing technologies" },
                    { title: "Digital Innovation", desc: "Learn and implement cutting-edge digital solutions" },
                    { title: "Cross-Departmental Growth", desc: "Collaborate across teams for diverse experience" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-bold text-slate-800 mb-3">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusive Culture */}
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">An Inclusive, Caring Culture</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: Heart, title: "Health & Wellness", desc: "Year-round programs promoting physical and mental well-being" },
                    { icon: Calendar, title: "Cultural Events", desc: "Engage in celebrations and community activities" },
                    { icon: Users, title: "Sports & Family", desc: "Participate in tournaments and family-oriented programs" },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-6 border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center mb-4 shadow-md">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-800 mb-3">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Contact Section */}
          <div className="mt-20 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Have Questions?</h3>
            <p className="text-slate-600 mb-6">
              For more information about career opportunities at SPC, reach out to our HR department
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@stateprinting.lk"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>careers@stateprinting.lk</span>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default CareersPage;