'use client';

import {
  Home,
  FileText,
  Info,
  Mail,
  Users,
  Building2,
  Shield,
  ScrollText,
  Newspaper,
  Briefcase,
  FileArchive,
  Building,
  FileInput,
  FileSpreadsheet,
  FileStack,
  FileType,
  FileBarChart2,
  FileCog,
  FileImage,
  FileLock,
  FilePieChart,
  FileSearch2,
  Wrench,
  UserCheck,
  Download,
  ChevronRight,
} from 'lucide-react';
import { FaSitemap } from 'react-icons/fa';
import Link from 'next/link';
import Footer from '../components/Footer';

type SitemapItem = {
  title: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: SitemapItem[];
};

export default function SitemapPage() {
  const sitemap: SitemapItem[] = [
    {
      title: 'Home',
      href: '/',
      icon: <Home className="w-4 h-4" />,
      description: 'Welcome to State Printing Corporation',
    },
    {
      title: 'About Us',
      href: '/about',
      icon: <Info className="w-4 h-4" />,
      description: 'Learn about our organization and leadership',
      children: [
        { title: 'About SPC', href: '/about', icon: <Building2 className="w-4 h-4" /> },
        { title: 'Management Committee', href: '/about/committee', icon: <Users className="w-4 h-4" /> },
      ],
    },
    {
      title: 'Divisions',
      href: '#',
      icon: <Building className="w-4 h-4" />,
      description: 'Our specialized departments and facilities',
      children: [
        { title: 'Chairman\'s Office', href: '/divisions/chairman-office', icon: <UserCheck className="w-4 h-4" /> },
        { title: 'General Manager\'s Office', href: '/divisions/gm-office', icon: <Briefcase className="w-4 h-4" /> },
        { title: 'Human Resources & Admin', href: '/divisions/hrd-admin', icon: <Users className="w-4 h-4" /> },
        { title: 'Finance', href: '/divisions/finance', icon: <FileBarChart2 className="w-4 h-4" /> },
        { title: 'Internal Audit', href: '/divisions/internal-audit', icon: <FileSearch2 className="w-4 h-4" /> },
        { title: 'Marketing', href: '/divisions/marketing', icon: <FilePieChart className="w-4 h-4" /> },
        { title: 'Litho Section', href: '/divisions/litho-section', icon: <FileImage className="w-4 h-4" /> },
        { title: 'Process Section', href: '/divisions/process-section', icon: <FileCog className="w-4 h-4" /> },
        { title: 'Binding', href: '/divisions/binding', icon: <FileStack className="w-4 h-4" /> },
        { title: 'Security Printing', href: '/divisions/security-printing', icon: <FileLock className="w-4 h-4" /> },
        { title: 'Stationery Factory', href: '/divisions/stationery-factory', icon: <FileType className="w-4 h-4" /> },
        { title: 'Stationery Store', href: '/divisions/stationery-store', icon: <FileSpreadsheet className="w-4 h-4" /> },
        { title: 'Main Store', href: '/divisions/main-store', icon: <FileArchive className="w-4 h-4" /> },
        { title: 'Maintenance', href: '/divisions/maintenance', icon: <Wrench className="w-4 h-4" /> },
        { title: 'Supplies', href: '/divisions/supplies', icon: <FileInput className="w-4 h-4" /> },
      ],
    },
    {
      title: 'Services',
      href: '/services',
      icon: <FileText className="w-4 h-4" />,
      description: 'Our comprehensive printing solutions',
      children: [
        { title: 'All Services', href: '/services', icon: <FileText className="w-4 h-4" /> },
      ],
    },
    {
      title: 'Products',
      href: '/products',
      icon: <FileStack className="w-4 h-4" />,
      description: 'Our range of printed materials',
    },
    {
      title: 'News Room',
      href: '/media',
      icon: <Newspaper className="w-4 h-4" />,
      description: 'Latest updates and announcements',
      children: [
        { title: 'News', href: '/media', icon: <Newspaper className="w-4 h-4" /> },
      ],
    },
    {
      title: 'Media',
      href: '/media',
      icon: <Newspaper className="w-4 h-4" />,
      description: 'Media Gallery',
      children: [
        { title: 'Gallery', href: '/media/gallery', icon: <FileImage className="w-4 h-4" /> },
      ],
    },
    {
      title: 'Careers',
      href: '/careers',
      icon: <Briefcase className="w-4 h-4" />,
      description: 'Join our team',
    },
    {
      title: 'Downloads',
      href: '/downloads',
      icon: <Download className="w-4 h-4" />,
      description: 'Forms and resources',
    },
    {
      title: 'Contact Us',
      href: '/contact',
      icon: <Mail className="w-4 h-4" />,
      description: 'Get in touch with our team',
    },
    {
      title: 'Legal',
      href: '#',
      icon: <Shield className="w-4 h-4" />,
      description: 'Policies and terms',
      children: [
        { title: 'Privacy Policy', href: '/privacy-policy', icon: <Shield className="w-4 h-4" /> },
        { title: 'Terms of Service', href: '/terms-of-service', icon: <ScrollText className="w-4 h-4" /> },
        { title: 'Cookie Policy', href: '/cookie-policy', icon: <ScrollText className="w-4 h-4" /> },
        { title: 'Sitemap', href: '/sitemap', icon: <FaSitemap className="w-4 h-4" /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="min-h-[50vh] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-3">
              <FaSitemap className="w-8 h-8 text-blue-200" />
              <span className="text-blue-200 font-medium text-lg">EXPLORE OUR WEBSITE</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Complete Site <span className="text-blue-200">Navigation</span>
            </h1>
          </div>
          <p className="text-blue-100 text-lg max-w-2xl">
            Find your way around our website with our comprehensive sitemap. Discover all the pages and sections of State Printing Corporation in one place.
          </p>
        </div>
      </div>

      {/* Sitemap Tree */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          {sitemap.map((item, index) => (
            <div
              key={index}
              className={`${
                index !== sitemap.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              {/* Parent Item */}
              <div className="p-6 hover:bg-gray-50 transition-colors">
                <Link
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h2>
                    {item.description && (
                      <p className="text-gray-600 text-sm mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              </div>

              {/* Children Items */}
              {item.children && item.children.length > 0 && (
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {item.children.map((child, childIndex) => (
                      <Link
                        key={childIndex}
                        href={child.href}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all group"
                      >
                        <div className="w-8 h-8 rounded-md bg-white flex items-center justify-center text-blue-600 flex-shrink-0 border border-gray-200 group-hover:border-blue-300">
                          {child.icon}
                        </div>
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors text-sm font-medium">
                          {child.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

    
           
          
      
      </div>
       <Footer />
    </div>
  );
}