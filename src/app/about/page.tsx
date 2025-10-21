"use client";

import { useState, useEffect, useRef } from "react";
import {
    Target, Eye, Lightbulb, Building2, Users, Award,
    ChevronDown, ArrowRight, History, TrendingUp
} from "lucide-react";
import Footer from "../components/Footer";

export default function AboutPage() {
    const [scrollY, setScrollY] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let scrollInterval: NodeJS.Timeout;
        
        const startAutoScroll = () => {
            if (isPaused) return;
            
            scrollInterval = setInterval(() => {
                if (!container) return;
                
                // Check if we've reached the end of the scrollable area
                const { scrollLeft, scrollWidth, clientWidth } = container;
                const maxScroll = scrollWidth - clientWidth;
                
                if (scrollLeft >= maxScroll - 10) { // Near the end
                    // Reset to start for infinite loop
                    container.scrollTo({ left: 0, behavior: 'auto' });
                } else {
                    // Scroll right by 200px or to the end, whichever is smaller
                    container.scrollBy({ left: 200, behavior: 'smooth' });
                }
            }, 3000); // Adjust timing as needed (3000ms = 3 seconds)
        };

        // Start auto-scroll
        startAutoScroll();

        // Cleanup interval on component unmount
        return () => {
            if (scrollInterval) clearInterval(scrollInterval);
        };
    }, [isPaused]);

    const scrollToContent = () => {
        window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' });
    };

    const leaders = [
        {
            name: "Hon. Harini Amarasooriya",
            role: "Minister of Education and Higher Education",
            img: "/about/pm.png",
           
        },
                {
            name: "Dr.Madhura Senevirathna",
            role: "Deputy Minister of Education and Higher Education ",
            img: "/about/DM.png",
           
        },
        {
            name: "Mr. Nalaka Kaluwewe",
            role: "Secretary, Ministry of Education",
            img: "/about/sec.jpg",
           
        },
        {
            name: "Mr. Ujitha Bandara",
            role: "Chairman, SPC",
            img: "/about/chair.jpeg",
            
        },
        {
            name: "Mr. Samitha Karunarathna",
            role: "General Manager, SPC",
            img: "/about/gm.png",
           
        },
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Hayleys Style */}
            <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/about/welcome.png')",
                        transform: `translateY(${scrollY * 0.4}px)`
                    }}
                />

                {/* Subtle Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                        About Us
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                        Driving Sri Lanka's knowledge, culture, and progress through trusted printing solutions since 1968
                    </p>
                </div>

                {/* Scroll Indicator */}
                <button
                    onClick={scrollToContent}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer"
                    style={{ opacity: 1 - scrollY / 200 }}
                >
                    <ChevronDown className="w-8 h-8 text-white" />
                </button>
            </div>

            {/* Who We Are Section */}
            <div className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Who We Are
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            The State Printing Corporation (SPC) is Sri Lanka's leading state-owned printing and publishing house, committed to delivering excellence in education, communication, and national service since 1968.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission, Vision, Purpose - Clean Cards */}
            <div className="py-16 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Our Mission",
                                icon: Target,
                                desc: "To deliver high-quality printing services for educational, governmental, and commercial needs while upholding accuracy, reliability, and affordability."
                            },
                            {
                                title: "Our Vision",
                                icon: Eye,
                                desc: "To be the nation's trusted leader in printing and publishing, driving knowledge distribution and supporting Sri Lanka's progress through sustainable practices."
                            },
                            {
                                title: "Our Purpose",
                                icon: Lightbulb,
                                desc: "To empower education, communication, and cultural development by being the backbone of Sri Lanka's printing and publishing sector."
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white p-8 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="w-14 h-14 bg-blue-600 flex items-center justify-center mb-6">
                                    <item.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Story Section */}
            <div className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <History className="w-8 h-8 text-blue-600" />
                                <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
                            </div>
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    The State Printing Corporation was established in 1968 by an Act of Parliament. It operates today under the Ministry of Education, equipped with state-of-the-art pre-press, press, and finishing facilities to meet Sri Lanka's wide-ranging printing needs.
                                </p>
                                <p>
                                    From focusing on textbooks and commercial print work until 1982 to launching a publishing project in 1989, SPC has grown into one of the nation's most respected institutions with two fully fledged production units.
                                </p>
                                <div className="flex items-start gap-4 bg-blue-50 p-4 mt-6">
                                    <TrendingUp className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">Continuous Growth</h4>
                                        <p className="text-sm text-gray-700">Over 55 years of excellence in printing and publishing</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-96">
                            <img
                                src="/about/wm.png"
                                alt="SPC Building"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Leadership Section */}
            <div className="py-20 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Leadership Messages
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Insights from our leaders on SPC's role in education, communication, and national development.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {leaders.map((leader, idx) => (
                            <div
                                key={idx}
                                className="bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                            >
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={leader.img}
                                        alt={leader.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                                        {leader.name}
                                    </h3>
                                    <p className="text-blue-600 text-sm font-medium mb-4">{leader.role}</p>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Governance Cards */}
            <div className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Governance & Management
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Our distinguished board of directors and management committee ensure strategic excellence and operational integrity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-900 p-8 text-white hover:shadow-xl transition-shadow">
                            <Award className="w-12 h-12 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Board of Directors</h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Our board members bring diverse expertise and leadership to guide the organization's strategic direction with proven track records in their respective fields.
                            </p>
                            <a
                                href="/about/committee"
                                className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300"
                            >
                                <span>Meet Our Board</span>
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="bg-blue-600 p-8 text-white hover:shadow-xl transition-shadow">
                            <Users className="w-12 h-12 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Management Committee</h3>
                            <p className="text-blue-100 mb-6 leading-relaxed">
                                Our dedicated management team works tirelessly to ensure operational excellence and strategic execution across all departments.
                            </p>
                            <a
                                href="/about/committee"
                                className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-100"
                            >
                                <span>View Management Team</span>
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* History*/}
            <section id="history" className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our History
                        </h2>
                        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            From humble beginnings in 1968 to becoming Sri Lanka's national printing leader — 
                            our story is built on dedication, innovation, and excellence.
                        </p>
                    </div>

                    {/* Scrollable Timeline with Navigation */}
                    <div className="relative">
                        {/* Left Navigation Button */}
                        <button
                            onClick={() => {
                                const container = scrollContainerRef.current;
                                container?.scrollBy({ left: -400, behavior: 'smooth' });
                            }}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all hover:scale-110"
                        >
                            <ChevronDown className="w-6 h-6 text-blue-600 rotate-90" />
                        </button>

                        {/* Right Navigation Button */}
                        <button
                            onClick={() => {
                                const container = scrollContainerRef.current;
                                container?.scrollBy({ left: 400, behavior: 'smooth' });
                            }}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all hover:scale-110"
                        >
                            <ChevronDown className="w-6 h-6 text-blue-600 -rotate-90" />
                        </button>

                        {/* Scrollable Container */}
                        <div
                            ref={scrollContainerRef}
                            id="history-scroll"
                            className="flex gap-8 overflow-x-auto px-12 py-8 scrollbar-hide relative"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {[
                                {
                                    year: "1968",
                                    title: "Foundation of SPC",
                                    desc: "Established fulfill Sri Lanka's national educational printing requirements.",
                                    img: "/welcome/welcome.png"
                                },
                                {
                                    year: "1982",
                                    title: "Commercial Expansion",
                                    desc: "Expanded operations to provide high-quality printing for both government and private sector organizations.",
                                    img: "/welcome.png"
                                },
                                {
                                    year: "1989",
                                    title: "Publishing Division",
                                    desc: "Launched the publishing project, diversifying SPC's capabilities into creative and academic publishing.",
                                    img: "/welcome/welcome.png"
                                },
                                                         {
                                    year: "2025",
                                    title: "Appointed Distribution Network",
                                    desc: "Appointed Distribution Network to provide high-quality printing for both government and private sector organizations.",
                                    img: "/welcome/welcome.png"
                                },
                                {
                                    year: "Today",
                                    title: "Digital Transformation",
                                    desc: "Modernized with advanced offset and digital printing technologies to deliver sustainable, world-class solutions.",
                                    img: "/welcome.png"
                                },
                            ].map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 w-80 group"
                                >
                                    {/* Image Card */}
                                    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                        {/* Image */}
                                        <div className="h-48 overflow-hidden relative">
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            {/* Year Badge Overlay */}
                                            <div className="absolute top-4 left-4 bg-blue-600 text-white font-bold text-xl px-4 py-2 rounded-lg shadow-lg">
                                                {item.year}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-6">
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Play/Pause Button */}
                        <button
                            onClick={() => setIsPaused(!isPaused)}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 hover:bg-white text-blue-600 rounded-full p-2 shadow-md z-10"
                            aria-label={isPaused ? 'Play auto-scroll' : 'Pause auto-scroll'}
                        >
                            {isPaused ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Hide scrollbar CSS */}
                <style jsx>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>
            </section>

            {/* CTA Section */}
            <div className="py-20 px-4">
                <div className="max-w-4xl mx-auto text-center bg-blue-600 p-12">
                    <h3 className="text-3xl font-bold text-white mb-4">
                        Ready to Work With Us?
                    </h3>
                    <p className="text-white/90 text-lg mb-8">
                        Discover how we can support your printing and publishing needs
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => window.location.href = '/contact'}
                            className="px-8 py-3 bg-white text-blue-600 font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Contact Us Today
                        </button>
                        <button
                            onClick={() => window.location.href = '/services'}
                            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
                        >
                            View Our Services
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}