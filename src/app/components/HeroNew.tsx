"use client";

import { useState, useEffect } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

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
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[750px] overflow-hidden bg-slate-900">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{
            transform: `scale(${1 + scrollY * 0.00005})`,
          }}
        >
          <source src="/Hero/SPC Intro.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70" />
      </div>

      {/* Hero Content - Left Aligned */}
      <div
        className="relative z-10 h-full flex items-center px-6 md:px-16 lg:px-32"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: 1 - scrollY / 500,
        }}
      >
        <div className="max-w-3xl text-left">
          {/* Title */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white leading-tight animate-fadeInUp"
            style={{ animationDelay: "0.3s" }}
          >
            STATE PRINTING<br />CORPORATION
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl lg:text-3xl text-slate-100 mb-6 font-light animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Sri Lanka's Premier Printing Authority
          </p>

          {/* Description */}
          <p
            className="text-base md:text-lg text-slate-200/90 mb-12 max-w-2xl leading-relaxed animate-fadeInUp"
            style={{ animationDelay: "0.5s" }}
          >
            Delivering trusted security and commercial printing solutions to the
            nation with cutting-edge technology and unwavering commitment to
            excellence.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer z-20 transition-opacity duration-300"
        style={{
          opacity: Math.max(0, 1 - scrollY / 300),
        }}
        aria-label="Scroll down"
      >
        <div className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors">
          <span className="text-xs font-medium uppercase tracking-wider">
            Discover More
          </span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/70 rounded-full animate-scrollDot" />
          </div>
        </div>
      </button>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollDot {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }

        .animate-scrollDot {
          animation: scrollDot 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
