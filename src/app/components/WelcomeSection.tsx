"use client";

import { ArrowRight } from "lucide-react";

const WelcomeSection = () => {
  return (
    <section id="welcome-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
{/* Original Image (no rounding) */}
<div className="relative">
  <div className="w-full h-80 mx-auto shadow-xl">
    <img
      src="/welcome/welcome.png"
      alt="State Printing Corporation"
      className="w-full h-full object-cover"
    />
  </div>
</div>


          {/* Content */}
          <div>
            <p className="text-blue-700 font-semibold mb-2 tracking-wide">
              WELCOME TO
            </p>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              State Printing Corporation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Established in 1968 under an Act of Parliament, the State Printing 
              Corporation (SPC) has stood as Sri Lanka's most trusted name in 
              professional printing for over five decades. What began as a 
              small-scale initiative focused on schoolbooks and government 
              publications has evolved into a state-of-the-art organization 
              driving innovation, creativity, and excellence in printing and 
              publishing across the nation.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Backed by advanced equipment and expert professionals, we ensure 
              each project is completed with precision, efficiency, and 
              uncompromising quality — serving the nation with pride and purpose. 
              SPC plays a vital role in Sri Lanka's printing industry, delivering 
              high-security printing solutions, educational materials, and 
              commercial printing services to government institutions and private 
              sector clients nationwide.
            </p>
            <button className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md transition-colors duration-300">
              Explore Now
             
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;