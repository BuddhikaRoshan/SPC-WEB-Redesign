"use client";

import { useState, useEffect } from 'react';
import { 
  ChevronDown, ArrowRight, Award, Users, ArrowUp
} from 'lucide-react';

const CommitteePage = () => {
  const [scrollY, setScrollY] = useState(0);

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
    const element = document.getElementById('directors');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const directors = [
    {
      id: 1,
      name: 'Mr. D.M. Gunasiri Bandara',
      position: 'Technical Director',
      department: 'MAS Intimates Pvt Ltd at MAS Holdings',
      image: '/d1.png',
      bio: 'Extensive experience in technical leadership and strategic planning with a proven track record in organizational development.'
    },
    {
      id: 2,
      name: 'Mr. K.D.C.S. Kumarathunga',
      position: 'Commissioner',
      department: 'Department of Ayurveda',
      image: '/d2.png',
      bio: 'Seasoned professional with expertise in public administration and healthcare management.'
    },
    {
      id: 3,
      name: 'Mrs. Nimali Jayawardane',
      position: 'Secretary',
      department: 'Ministry of Education',
      image: '/d3.png',
      bio: 'Experienced administrator with a strong background in educational policy and management.'
    },
    {
      id: 4,
      name: 'Hon. Harini Amarasooriya',
      position: 'Minister',
      department: 'Ministry of Education',
      image: '/d4.png',
      bio: 'Dedicated public servant with a vision for educational reform and national development.'
    },
    {
      id: 5,
      name: 'Dr. Ravi Fernando',
      position: 'Senior Consultant',
      department: 'Ministry of Finance',
      image: '/d1.png',
      bio: 'Financial expert with extensive experience in economic policy and fiscal management.'
    },
    {
      id: 6,
      name: 'Ms. Shanika Perera',
      position: 'Director General',
      department: 'Department of Information Technology',
      image: '/d2.png',
      bio: 'Technology leader with a passion for digital transformation and innovation.'
    },
    {
      id: 7,
      name: 'Mr. Asanka Silva',
      position: 'Chief Operations Officer',
      department: 'National Development Bank',
      image: '/d3.png',
      bio: 'Operations specialist with a strong background in banking and financial services.'
    },
  ];

  const committeeMembers = [
    { id: 1, name: 'Mr. S.D. Kumarasinghe', position: 'Works Manager', department: 'Operations', image: '/d2.png' },
    { id: 2, name: 'Mr. M.S.S. Mohotti', position: 'Financial Manager', department: 'Finance', image: '/d2.png' },
    { id: 3, name: 'Ms. Maheshi', position: 'Administration and Human Resources Manager', department: 'Human Resources', image: '/d2.png' },
    { id: 4, name: 'Mr. Ananda', position: 'Marketing Manager', department: 'Marketing', image: '/d2.png' },
    { id: 5, name: 'Mr. Nimal', position: 'Supply Manager', department: 'Supply', image: '/d2.png' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image with Parallax */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/lead.jpg')",
            transform: `translateY(${scrollY * 0.5}px)`,
            filter: 'brightness(0.4)'
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

        {/* Accent Elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: 1 - scrollY / 600
          }}
        >

          
          <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tighter text-white leading-tight">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300">Leadership</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Visionary professionals driving innovation and excellence across every dimension of our organization.
          </p>

          
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-20"
          style={{
            opacity: 1 - scrollY / 200
          }}
        >
          <div className="flex flex-col items-center gap-2 text-cyan-300/80 hover:text-cyan-300 transition-colors">
            <span className="text-sm font-medium">Scroll</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </button>
      </div>

      {/* Main Content */}
      <div id="directors" className="relative z-10 bg-slate-50">
        <div className="container mx-auto px-4 py-24">
          {/* Board of Directors Section */}
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
                Board of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Directors</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                Strategic visionaries shaping our organization's future direction and success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {directors.map((director, idx) => (
                <div 
                  key={director.id}
                  className="group cursor-pointer"
                  style={{
                    animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`
                  }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
                    <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                      <img
                        src={director.image}
                        alt={director.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-base font-bold text-slate-900 mb-2">{director.name}</h3>
                      <p className="text-sm text-cyan-600 font-semibold mb-1">{director.position}</p>
                      <p className="text-xs text-slate-500 mb-3">{director.department}</p>
                      <p className="text-sm text-slate-600 leading-relaxed">{director.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Group Management Committee Section */}
          <section className="mb-32">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 tracking-tight">
                Higher <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Management</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                Dedicated leaders executing strategy and driving operational excellence daily.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
              {committeeMembers.map((member, idx) => (
                <div
                  key={member.id}
                  className="group cursor-pointer"
                  style={{
                    animation: `slideUp 0.6s ease-out ${idx * 0.08}s both`
                  }}
                >
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col items-center text-center">
                    <div className="h-32 w-32 rounded-full overflow-hidden bg-gradient-to-br from-cyan-100 to-blue-100 ring-4 ring-cyan-100 mb-4 group-hover:ring-cyan-300 transition-all">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-bold text-white">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 mb-2">{member.name}</h3>
                    <p className="text-xs text-cyan-600 font-semibold mb-1 line-clamp-2">
                      {member.position}
                    </p>
                    <p className="text-xs text-slate-500">{member.department}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          

          {/* Back to Top Button */}
          <div className="text-center">
            <button 
              onClick={scrollToTop}
              className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg group border border-slate-700 hover:border-cyan-400/30"
            >
              <span>Back to Top</span>
              <ArrowUp className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { 
            opacity: 0; 
            transform: translateY(30px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default CommitteePage;