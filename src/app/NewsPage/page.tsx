"use client";

import { useState, useCallback, useEffect } from "react";
import { 
  Calendar, Search, ChevronRight, X, ChevronDown
} from "lucide-react";
import Link from "next/link";
import Footer from "../components/Footer";

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [scrollY, setScrollY] = useState(0);

  const scrollToContent = useCallback(() => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  }, []);

  // Update scroll position for the chevron animation
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'announcements', label: 'Announcements' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'events', label: 'Events' },
    { id: 'updates', label: 'Updates' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'Deputy Minister of Education Visits State Printing Corporation',
      date: '2025-10-16',
      category: 'events',
      excerpt: 'The Deputy Minister of Education visited SPC to review ongoing educational printing projects and discuss future collaborations with the Ministry of Education.',
      content: [
        'The State Printing Corporation had the honor of welcoming the Deputy Minister of Education for an official visit to its premises.',
        'During the visit, the Deputy Minister observed the production process of educational materials, textbooks, and examination papers prepared for schools across the island.',
        'Discussions focused on enhancing collaboration between SPC and the Ministry to improve efficiency and maintain the highest standards of quality in educational printing services.',
        'The visit underscored SPC\'s ongoing commitment to supporting the nation\'s education system through innovation and reliability.'
      ],
      features: [
        'Review of educational material production processes',
        'Discussion on future collaborative initiatives with the Ministry',
        'Demonstration of new printing technologies and quality control systems',
        'Reaffirmation of SPC\'s role in national educational development'
      ],
      readTime: '4 min read',
      author: 'Nimal Perera',
      authorRole: 'Corporate Communications Officer',
      image: '/news/N1.jpg'
    },
    {
      id: 2,
      title: '“පැහැසරණි” Art Competition Now Open for Submissions',
      category: 'announcements',
      date: '2025-10-01',
      excerpt: 'SPC proudly announces the opening of the “පැහැසරණි” national art competition, encouraging creativity among students across Sri Lanka.',
      content: [
        'The competition is open to students of all ages and skill levels, with the aim of promoting artistic expression and creativity.',
        'A panel of renowned artists and educators will judge the submissions, with prizes awarded for outstanding work in various categories.',
        'The competition is part of SPC\'s ongoing efforts to support the development of arts and culture in Sri Lanka.'
      ],
      features: [
        'Open to students of all ages and skill levels',
        'Judged by a panel of renowned artists and educators',
        'Prizes awarded for outstanding work in various categories'
      ],
      readTime: '3 min read',
      author: 'Kamal Silva',
      authorRole: 'Art Director',
      image: '/news/N2.jpg'
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return { day, month, year };
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
            News Room
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Stay updated with the latest from State Printing Corporation
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


      {/* Filter Section */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat.id
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-black" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-10 py-2 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-blue-600 text-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredNews.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No articles found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((article) => {
              const dateInfo = formatDate(article.date);
              return (
                <Link 
                  key={article.id}
                  href={`/NewsPage/${article.id}`}
                  className="group block"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden bg-gray-100 mb-4" style={{ paddingBottom: '66.67%' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 transition-transform duration-500 group-hover:scale-110">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-white text-6xl font-light opacity-20">
                          {dateInfo.day}
                        </div>
                      </div>
                    </div>
                    
                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 bg-white px-3 py-2 shadow-md">
                      <div className="text-2xl font-light text-gray-900 leading-none">{dateInfo.day}</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wider">{dateInfo.month}</div>
                      <div className="text-xs text-gray-500">{dateInfo.year}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="text-xs text-blue-600 uppercase tracking-wider font-medium mb-2">
                      {categories.find(c => c.id === article.category)?.label}
                    </div>
                    
                    <h3 className="text-xl font-light text-gray-900 mb-3 leading-snug group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light">
                      {article.excerpt}
                    </p>

                    <button className="inline-flex items-center text-sm text-blue-600 font-medium group-hover:gap-2 transition-all">
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Results Count */}
        {filteredNews.length > 0 && (
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Showing {filteredNews.length} of {newsArticles.length} articles
            </p>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Stay Connected
          </h2>
          <p className="text-gray-600 mb-8 font-light">
            Subscribe to receive the latest updates from State Printing Corporation
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors">
            Contact Us
          </button>
        </div>
      </div>

      <style jsx>{`
        * {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
        }
      `}</style>
      <Footer /> 
    </div>
  );
};

export default NewsPage;