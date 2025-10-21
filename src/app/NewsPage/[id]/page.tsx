"use client";

import { useState, useEffect } from 'react';
import { use } from 'react';
import { 
  ArrowLeft, Calendar, Share2, Facebook, Linkedin, Twitter, 
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';

const newsArticles = [
  {
  id: 1,
  title: 'Deputy Minister of Education Visits State Printing Corporation',
  date: '2025-10-16',
  category: 'Events',
  excerpt: 'The Deputy Minister of Education visited SPC to review ongoing educational printing projects and discuss future collaborations with the Ministry of Education.',
  content: [
    'The State Printing Corporation had the honor of welcoming the Deputy Minister of Education for an official visit to its premises.',
    'During the visit, the Deputy Minister observed the production process of educational materials, textbooks, and examination papers prepared for schools across the island.',
    'Discussions focused on enhancing collaboration between SPC and the Ministry to improve efficiency and maintain the highest standards of quality in educational printing services.',
    'The visit underscored SPC’s ongoing commitment to supporting the nation’s education system through innovation and reliability.'
  ],
  features: [
    'Review of educational material production processes',
    'Discussion on future collaborative initiatives with the Ministry',
    'Demonstration of new printing technologies and quality control systems',
    'Reaffirmation of SPC’s role in national educational development'
  ],
  readTime: '4 min read',
  author: 'Nimal Perera',
  authorRole: 'Corporate Communications Officer'
},
{
  id: 2,
  title: '“පැහැසරණි” Art Competition Now Open for Submissions',
  date: '2025-10-01',
  category: 'Announcements',
  excerpt: 'SPC proudly launches the “පැහැසරණි” national art competition, inviting young artists from schools across Sri Lanka to showcase their creativity.',
  content: [
    'The State Printing Corporation is delighted to announce the opening of the “පැහැසරණි” Art Competition, aimed at encouraging artistic talent among school students nationwide.',
    'This initiative provides a platform for young creators to express their imagination through art while promoting cultural appreciation and creativity.',
    'Winning artworks will be featured in SPC’s official publications and exhibitions, with attractive prizes awarded to top participants.',
    'SPC continues to support youth empowerment and education through creative and educational initiatives like this competition.'
  ],
  features: [
    'Open to school students across all provinces',
    'Attractive prizes and certificates for winners',
    'Winning artworks to be published and exhibited by SPC',
    'Encourages creativity and cultural appreciation among youth'
  ],
  readTime: '5 min read',
  author: 'Tharushi Jayasinghe',
  authorRole: 'Public Relations Coordinator'
}

];

import { notFound } from 'next/navigation';

export default function NewsArticlePage({ params }: { params: { id: string } }) {
  // Remove the use() call as it's not needed
  const articleId = parseInt(params.id);
  const article = newsArticles.find(a => a.id === articleId);
  
  if (!article) {
    notFound();
  }

  const formatDate = (dateString:string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleDateString('en-US', { month: 'short' });
    const year = date.getFullYear();
    return { day, month, year, full: date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) };
  };

  const handleRelatedArticleClick = (id:number) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', `/news/${id}`);
    }
  };

  const dateInfo = formatDate(article.date);
  const relatedArticles = newsArticles.filter(a => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/NewsPage" className="hover:text-blue-600 transition-colors">News</Link>
            <span>/</span>
            <span className="text-gray-400">{article.category}</span>
          </div>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="relative bg-gray-100" style={{ height: '500px' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white text-9xl font-light opacity-20">
              {dateInfo.day}
            </div>
          </div>
        </div>
        
        {/* Date Badge */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 md:left-auto md:right-8 md:transform-none bg-white px-6 py-4 shadow-lg">
          <div className="text-4xl font-light text-gray-900 leading-none text-center">{dateInfo.day}</div>
          <div className="text-sm text-gray-600 uppercase tracking-wider text-center mt-1">{dateInfo.month}</div>
          <div className="text-sm text-gray-500 text-center">{dateInfo.year}</div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link 
          href="/NewsPage" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to News</span>
        </Link>

        {/* Category & Title */}
        <div className="mb-8">
          <div className="text-xs text-blue-600 uppercase tracking-wider font-medium mb-4">
            {article.category}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-200">
            <span>{dateInfo.full}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-200">
          <span className="text-sm text-gray-600 mr-2 font-light">Share:</span>
          <button
            onClick={() => {
              const url = typeof window !== 'undefined' ? window.location.href : '';
              const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
              window.open(shareUrl, 'facebook-share', 'width=600,height=400');
            }}
            className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors"
            aria-label="Share on Facebook"
          >
            <Facebook className="w-4 h-4 text-white" fill="white" />
          </button>
          <button
            onClick={() => {
              const url = typeof window !== 'undefined' ? window.location.href : '';
              const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
              window.open(shareUrl, 'linkedin-share', 'width=600,height=400');
            }}
            className="w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 flex items-center justify-center transition-colors"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-4 h-4 text-white" fill="white" />
          </button>
          <button
            onClick={() => {
              const url = typeof window !== 'undefined' ? window.location.href : '';
              const text = article.title;
              const shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
              window.open(shareUrl, 'twitter-share', 'width=600,height=400');
            }}
            className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-600 flex items-center justify-center transition-colors"
            aria-label="Share on Twitter"
          >
            <Twitter className="w-4 h-4 text-white" fill="white" />
          </button>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg max-w-none mb-12">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="mb-6 text-gray-700 leading-relaxed font-light text-lg">
              {paragraph}
            </p>
          ))}

          {/* Key Features */}
          {article.features && article.features.length > 0 && (
            <div className="my-12 p-8 bg-gray-50 border-l-4 border-blue-600">
              <h3 className="text-2xl font-light text-gray-900 mb-6">Key Highlights</h3>
              <ul className="space-y-3">
                {article.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700 leading-relaxed font-light flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg mb-12">
          <div className="h-16 w-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white font-medium text-xl flex-shrink-0">
            {article.author.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <p className="font-medium text-gray-900">{article.author}</p>
            <p className="text-sm text-gray-600 font-light">{article.authorRole}</p>
          </div>
        </div>
      </div>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="bg-gray-50 border-t border-gray-200 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Related News</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((related) => {
                const relatedDate = formatDate(related.date);
                return (
                  <div
                    key={related.id}
                    onClick={() => handleRelatedArticleClick(related.id)}
                    className="group cursor-pointer"
                  >
                    <div className="relative overflow-hidden bg-gray-100 mb-4" style={{ paddingBottom: '66.67%' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 transition-transform duration-500 group-hover:scale-110">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-white text-5xl font-light opacity-20">
                            {relatedDate.day}
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute top-4 left-4 bg-white px-3 py-2 shadow-md">
                        <div className="text-xl font-light text-gray-900 leading-none">{relatedDate.day}</div>
                        <div className="text-xs text-gray-600 uppercase tracking-wider">{relatedDate.month}</div>
                      </div>
                    </div>

                    <div className="text-xs text-blue-600 uppercase tracking-wider font-medium mb-2">
                      {related.category}
                    </div>
                    
                    <h3 className="text-lg font-light text-gray-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                      {related.title}
                    </h3>

                    <button className="inline-flex items-center text-sm text-blue-600 font-medium group-hover:gap-2 transition-all">
                      Read More
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Footer CTA */}
      <div className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-light text-gray-900 mb-6">
            View All News & Updates
          </h3>
          <a
            href="/NewsPage"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
          >
            Back to News
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      <style jsx>{`
        * {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
        }
      `}</style>
    </div>
  );
};

