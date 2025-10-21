"use client";

import { Calendar, ArrowRight } from "lucide-react";
import { FC } from 'react';

// News data - you can import this from a shared data file
const newsArticles = [
  {
    id: 1,
    title: 'State Printing Corporation Launches New Digital Services Platform',
    category: 'announcements',
    date: '2024-12-15',
    excerpt: 'SPC introduces cutting-edge digital printing and online ordering platform to enhance customer experience.',
    image: '/news/digital-services.jpg', // Add your image path
    featured: true
  },
  {
    id: 2,
    title: 'ISO 9001:2015 Certification Renewed for Quality Management',
    category: 'achievements',
    date: '2024-12-10',
    excerpt: 'State Printing Corporation successfully renews ISO certification, reaffirming commitment to quality standards.',
    image: '/news/iso-cert.jpg', // Add your image path
    featured: true
  },
  {
    id: 3,
    title: 'New Security Features Added to National Identity Cards',
    category: 'announcements',
    date: '2024-12-08',
    excerpt: 'Advanced holographic and microtext security features now integrated into identity card production.',
    image: '/news/security-features.jpg', // Add your image path
    featured: false
  }
];

const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const LatestNews: FC = () => {
  // Get latest 3 news articles
  const latestNews = newsArticles.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Latest News
        </h2>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {latestNews.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
              onClick={() => window.location.href = `/NewsPage/${item.id}`}
            >
              {/* Image */}
              <div className="overflow-hidden h-56">
                <img 
                  src={item.image || '/news-placeholder.jpg'} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[56px]">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {item.excerpt}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-blue-600 text-sm font-semibold hover:underline flex items-center gap-2">
                    Read more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {formatDate(item.date)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More News Button */}
        <div className="text-center">
          <a
            href="/NewsPage"
            className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-300"
          >
            More News
          </a>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default LatestNews;