"use client";

import { useState, useEffect } from 'react';
import { 
  Download, Search, FileText, FileSpreadsheet, 
  Archive, ChevronDown, ExternalLink,
  Calendar, HardDrive, X
} from 'lucide-react';
import Footer from '../components/Footer';

interface DownloadItem {
  id: number;
  title: string;
  category: string;
  type: 'pdf' | 'doc' | 'xls' | 'zip';
  size: string;
  date: string;
  url: string;
}

const downloads: DownloadItem[] = [
  {
    id: 1,
    title: 'Annual Report 2023',
    category: 'Reports',
    type: 'pdf',
    size: '2.4 MB',
    date: '2023-12-31',
    url: '/downloads/reports/annual-report-2023.pdf'
  },
  {
    id: 2,
    title: 'Application Form',
    category: 'Forms',
    type: 'doc',
    size: '1.2 MB',
    date: '2024-01-15',
    url: '/downloads/forms/application-form.doc'
  },
  {
    id: 3,
    title: 'Price List 2024',
    category: 'Price Lists',
    type: 'xls',
    size: '1.8 MB',
    date: '2024-01-10',
    url: '/downloads/price-lists/2024-prices.xls'
  },
  {
    id: 4,
    title: 'Company Brochure',
    category: 'Marketing',
    type: 'pdf',
    size: '5.1 MB',
    date: '2023-11-20',
    url: '/downloads/marketing/company-brochure.pdf'
  },
  {
    id: 5,
    title: 'Product Catalog',
    category: 'Catalogs',
    type: 'pdf',
    size: '3.7 MB',
    date: '2024-01-05',
    url: '/downloads/catalogs/product-catalog-2024.pdf'
  },
  {
    id: 6,
    title: 'Software Update v2.3',
    category: 'Software',
    type: 'zip',
    size: '45.2 MB',
    date: '2023-12-15',
    url: '/downloads/software/update-v2.3.zip'
  },
];

const categories = ['All', 'Reports', 'Forms', 'Price Lists', 'Marketing', 'Catalogs', 'Software'];

const DownloadsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Set initial scroll position
    handleScroll();

    // Add event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const filteredDownloads = downloads.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return { icon: FileText, color: 'bg-red-500' };
      case 'doc':
        return { icon: FileText, color: 'bg-blue-500' };
      case 'xls':
        return { icon: FileSpreadsheet, color: 'bg-green-500' };
      case 'zip':
        return { icon: Archive, color: 'bg-yellow-500' };
      default:
        return { icon: FileText, color: 'bg-gray-500' };
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
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
           Downloads
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Download our latest publications, reports, and other documents
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search downloads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-10 py-2 bg-white border border-gray-300 rounded-full focus:outline-none focus:border-blue-600 text-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Downloads List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 font-light">
            Showing <span className="font-medium text-gray-900">{filteredDownloads.length}</span> {filteredDownloads.length === 1 ? 'document' : 'documents'}
          </p>
        </div>

        {filteredDownloads.length > 0 ? (
          <div className="space-y-4">
            {filteredDownloads.map((item) => {
              const fileIcon = getFileIcon(item.type);
              const IconComponent = fileIcon.icon;
              
              return (
                <div
                  key={item.id}
                  className="group bg-white border border-gray-200 hover:border-blue-600 rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        {/* File Icon */}
                        <div className={`w-12 h-12 ${fileIcon.color} rounded flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>

                        {/* File Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1">
                            <h3 className="text-lg font-light text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                              {item.title}
                            </h3>
                            <span className="text-xs uppercase font-medium text-gray-500 flex-shrink-0">
                              {item.type}
                            </span>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <span className="text-xs text-blue-600 uppercase tracking-wider font-medium">
                              {item.category}
                            </span>
                            <span className="text-gray-400">•</span>
                            <div className="flex items-center gap-1">
                              <HardDrive className="w-3 h-3" />
                              <span className="font-light">{item.size}</span>
                            </div>
                            <span className="text-gray-400">•</span>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span className="font-light">{formatDate(item.date)}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Download Button */}
                      <a
                        href={item.url}
                        download
                        className="flex-shrink-0 flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 font-medium text-sm"
                      >
                        <Download className="w-4 h-4" />
                        <span className="hidden sm:inline">Download</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg font-light">No documents found</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filter options</p>
          </div>
        )}
      </div>

      {/* Educational Resources Section */}
      <div className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                {/* Content */}
                <div className="flex-1">
                  <div className="text-xs text-blue-600 uppercase tracking-wider font-medium mb-3">
                    Educational Resources
                  </div>
                  <h2 className="text-3xl font-light text-gray-900 mb-4">
                    School Textbooks
                  </h2>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Access the official collection of Sri Lankan school textbooks provided by the Educational Publications Department
                  </p>
                </div>

                {/* CTA Button */}
                <div className="flex-shrink-0">
                  <a
                    href="http://www.edupub.gov.lk/BooksDownload.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all duration-300"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h3 className="text-2xl font-light text-gray-900 mb-4">
            Need Help?
          </h3>
          <p className="text-gray-600 mb-8 font-light">
            Can't find what you're looking for? Contact our support team
          </p>
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors">
            Contact Support
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

export default DownloadsPage;