"use client";

import { useState, useEffect } from "react";
import { 
  Award, TrendingUp, Users, Building2, FileText,

} from "lucide-react";

interface AnimatedCounterProps {
  value: string;
  suffix?: string;
  shouldAnimate: boolean;
}
import Link from "next/link";
const AnimatedCounter = ({ value, suffix = '', shouldAnimate }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!shouldAnimate) return;
    
    const target = parseInt(value.replace(/\D/g, ''));
    const duration = 2000;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    const easeOutQuad = (t: number): number => t * (2 - t);
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = easeOutQuad(frame / totalFrames);
      const currentCount = Math.round(target * progress);
      
      if (frame === totalFrames) {
        clearInterval(counter);
        setCount(target);
      } else {
        setCount(currentCount);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [value, shouldAnimate]);
  
  return <span>{count.toLocaleString()}{suffix}</span>;
};

const StatsBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
{ 
      number: "4000000", 
      label: "School Textbooks",
      unit: "Copies Distributed",
      icon: FileText, 
      suffix: "+",
      prev: 70,
      current: 95
    },
    { 
      number: "3100000", 
      label: "Stationery",
      unit: "Books Distributed",
      icon: Users, 
      suffix: "+",
      prev: 70,
      current: 95
    },
    { 
      number: "125000", 
      label: "Government Printing Projects",
      unit: "Projects",
      icon: TrendingUp, 
      suffix: "+",
      prev: 75,
      current: 100
    },
    { 
      number: "350", 
      label: "Workforce",
      unit: "Employees",
      icon: Building2, 
      suffix: "+",
      prev: 80,
      current: 90
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-300 font-semibold mb-2 uppercase tracking-wide text-sm">
            Excelling in Everything We Do
          </p>
          <h2 className="text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            The State Printing Corporation strives for transparency and excellence as part of our 
            promise to our stakeholders. View our performance highlights below:
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((item, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-blue-300" />
                </div>
              </div>

              {/* Label */}
              <h3 className="text-sm mb-3 text-gray-300 font-medium">{item.label}</h3>
              
              {/* Main Number */}
              <div className="mb-4">
                <span className="text-4xl font-bold">
                  <AnimatedCounter value={item.number} suffix={item.suffix} shouldAnimate={isVisible} />
                </span>
              </div>

              {/* Unit */}
              <div className="mb-6">
                <span className="text-lg text-gray-400">{item.unit}</span>
              </div>

              {/* Bar Chart */}
              <div className="h-40 bg-white/10 rounded-lg flex items-end justify-center p-4 backdrop-blur-sm">
                <div
                  className="w-1/3 bg-gray-400 rounded mr-3 transition-all duration-1000 ease-out"
                  style={{ 
                    height: isVisible ? `${item.prev}%` : '0%'
                  }}
                />
                <div
                  className="w-1/3 bg-white rounded transition-all duration-1000 ease-out delay-300"
                  style={{ 
                    height: isVisible ? `${item.current}%` : '0%'
                  }}
                />
              </div>

              {/* Legend */}
              <div className="flex justify-center space-x-6 mt-3 text-xs text-gray-400">
                <span>2023/24</span>
                <span>2024/25</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}

<div className="text-center">
  <Link href="/Services">
    <button className="px-8 py-3 bg-white text-slate-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl">
      Explore Our Services
    </button>
  </Link>
</div>

      </div>
    </section>
  );
};

export default StatsBar;