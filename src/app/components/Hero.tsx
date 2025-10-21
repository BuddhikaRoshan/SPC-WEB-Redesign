"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Images placed in /public
  const images = ["", "", ""];

  // Slide content
  const slides = [
    {
      badge: "Excellence Since 1968",
      title: "State Printing Corporation",
      subtitle: "Sri Lanka's Premier Printing Authority",
      description: "Delivering trusted security and commercial printing solutions to the nation"
    },
    {
      badge: "Security Printing",
      title: "Advanced Security Solutions",
      subtitle: "Protecting National Documents",
      description: "Producing secure documents with cutting-edge anti-counterfeiting technology"
    },
    {
      badge: "Quality Guaranteed",
      title: "World-Class Standards",
      subtitle: "ISO Certified Excellence",
      description: "Meeting international quality standards in all our printing services"
    }
  ];

  // Auto-advance slides every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Handle scroll
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
    const nextSection = document.getElementById("welcome-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden bg-slate-900">
      {/* Background Slides */}
      <div className="absolute inset-0 w-full h-[100vh]">
        {images.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            style={{
              transform: i === index ? `translateY(${scrollY * 0.5}px)` : 'none'
            }}
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Professional Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-slate-800/80 to-blue-900/75" />
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Hero Content */}
      <div 
        className="relative z-10 h-[100vh] flex items-center justify-center px-4"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: 1 - scrollY / 600
        }}
      >
        <div className="max-w-6xl mx-auto text-center">


          {/* Main Title - Animated on slide change */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight text-white animate-fadeInUp"
            key={`title-${index}`}
            style={{ animationDelay: '0.2s' }}
          >
            {slides[index].title}
          </h1>

          {/* Subtitle */}
          <p 
            className="text-2xl md:text-3xl text-slate-200 mb-4 font-light animate-fadeInUp"
            key={`subtitle-${index}`}
            style={{ animationDelay: '0.4s' }}
          >
            {slides[index].subtitle}
          </p>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto animate-fadeInUp"
            key={`description-${index}`}
            style={{ animationDelay: '0.5s' }}
          >
            {slides[index].description}
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fadeInUp"
            style={{ animationDelay: '0.6s' }}
          >
            <a
              href="/services"
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <span>Our Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-lg font-semibold text-lg text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
            >
              Contact Us
            </a>
          </div>

          
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-20"
        style={{
          opacity: 1 - scrollY / 200
        }}
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors">
          <span className="text-sm font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-3 z-20">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === index 
                ? "w-8 h-3 bg-white" 
                : "w-3 h-3 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>



      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;