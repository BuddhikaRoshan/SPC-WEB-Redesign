"use client";

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { 
  ArrowLeft, Calendar, Clock, MapPin, ImageIcon, 
  CheckCircle, ArrowRight, Tv, ExternalLink
} from 'lucide-react';

interface MediaItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image?: string;
   images?: string[];
  thumbnail?: string;
  status?: string;
  completion?: number;
  startDate?: string;
  date?: string;
  location?: string;
  type?: string;
  videoUrl?: string;
  duration?: string;
  schedule?: string;
  channel?: string;
  features?: string[];
  detailDescription?: string;
}

// Complete media items data matching the main media page
const mediaItems: MediaItem[] = [
  {
    id: 1,
    title: "National Textbook Printing 2025",
    description: "Large-scale production of educational materials for schools nationwide",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
    status: "In Progress",
    completion: 75,
    startDate: "January 2025",
    category: "project",
    detailDescription: "The National Textbook Printing 2025 project represents our largest educational initiative to date. We are producing over 15 million textbooks for primary and secondary schools across Sri Lanka. This comprehensive project involves collaboration with the Ministry of Education and employs cutting-edge printing technology to ensure high-quality, durable educational materials that will benefit students nationwide.",
    features: [
      "Production of 15+ million textbooks",
      "Multi-language support (Sinhala, Tamil, English)",
      "Advanced quality control systems",
      "Eco-friendly printing processes"
    ]
  },
  {
    id: 2,
    title: "Digital Publishing Initiative",
    description: "Modernizing our printing capabilities with state-of-the-art digital technology",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    status: "Planning",
    completion: 40,
    startDate: "March 2025",
    category: "project",
    detailDescription: "Our Digital Publishing Initiative is transforming the way we produce printed materials. By investing in cutting-edge digital printing technology, we're reducing production times, improving quality, and enabling more flexible, on-demand printing solutions for our clients.",
    features: [
      "State-of-the-art digital printing presses",
      "Reduced turnaround times",
      "Enhanced color accuracy and quality",
      "Cost-effective short-run printing"
    ]
  },
  {
    id: 3,
    title: "Government Document Printing",
    description: "Official documentation and gazette printing for government institutions",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    status: "Ongoing",
    completion: 60,
    startDate: "February 2025",
    category: "project",
    detailDescription: "As a trusted partner of the Sri Lankan government, we handle the printing of official documents, gazettes, and administrative materials. This project ensures timely delivery of critical government publications with the highest standards of security and quality.",
    features: [
      "Secure printing facilities",
      "Timely delivery schedules",
      "Multiple language support",
      "Quality assured documentation"
    ]
  },
  {
    id: 4,
    title: "Annual General Meeting 2025",
    description: "Strategic planning and review of achievements",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    date: "March 15, 2025",
    location: "SPC Head Office",
    type: "image",
    category: "event",
    detailDescription: "Our Annual General Meeting brought together stakeholders, management, and staff to review the year's achievements and set strategic direction for the future. The event featured presentations on financial performance, operational excellence, and upcoming initiatives."
  },
  {
    id: 5,
    title: "Technology Expo 2024",
    description: "Showcase of our latest printing technologies and innovations",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    date: "December 10, 2024",
    location: "Colombo Convention Center",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "event",
    detailDescription: "We showcased our latest printing technologies and innovations at the Technology Expo 2024. Visitors experienced live demonstrations of our digital printing capabilities, automation systems, and sustainable printing solutions."
  },
  {
    id: 6,
    title: "National Book Fair 2024",
    description: "Participation in the largest book exhibition in Sri Lanka",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
    date: "September 20, 2024",
    location: "BMICH, Colombo",
    type: "image",
    category: "event",
    detailDescription: "Our participation in the National Book Fair 2024 highlighted our commitment to education and literacy. We displayed a wide range of educational materials, textbooks, and publications, engaging with thousands of visitors throughout the event."
  },
  {
    id: 7,
    title: "Staff Training Workshop",
    description: "Capacity building program for our production team",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    date: "August 5, 2024",
    location: "SPC Training Center",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "event",
    detailDescription: "We invested in our team's development through comprehensive training workshops focusing on new printing technologies, quality control procedures, and operational efficiency. The program enhanced skills across our production departments."
  },
{
  id: 8,
  title: "Printing Excellence Showcase 2024",
  category: "photos",
  description: "Highlights from the Printing Excellence Showcase 2024 event.",
  images: [
    "/gallery/showcase1.jpg",
    "/gallery/showcase2.jpg",
    "/gallery/showcase3.jpg",
    "/gallery/showcase4.jpg"
  ]
},
{
  id: 9,
  title: "Annual Staff Event 2024",
  category: "photos",
  description: "Memorable moments from SPC’s Annual Staff Gathering 2024.",
  images: [
    "/gallery/staff1.jpg",
    "/gallery/staff2.jpg",
    "/gallery/staff3.jpg"
  ]
},

  {
    id: 10,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&q=80",
    title: "Quality Control",
    description: "Rigorous quality checks ensure every product meets our high standards",
    category: "gallery",
    detailDescription: "Quality is paramount in everything we do. Our quality control team performs meticulous inspections at every stage of production to ensure that every printed piece meets our exacting standards."
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    title: "Team Collaboration",
    description: "Our dedicated team working together to deliver excellence",
    category: "gallery",
    detailDescription: "Success is built on teamwork. Our diverse team of printing professionals, technicians, and support staff work collaboratively to deliver outstanding results for every project."
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
    title: "Finishing Department",
    description: "Where printed materials receive their final touches",
    category: "gallery",
    detailDescription: "The finishing department adds the final touches that make our printed materials stand out. From binding to cutting, every detail is perfected before delivery."
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&q=80",
    title: "Book Binding",
    description: "Expert craftsmanship in book binding and finishing",
    category: "gallery",
    detailDescription: "Our book binding specialists combine traditional craftsmanship with modern techniques to create durable, beautiful books that stand the test of time."
  },
  {
    id: 14,
    title: "SPC Spotlight",
    description: "Weekly showcase of our operations and achievements",
    thumbnail: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80",
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80",
    duration: "30 mins",
    schedule: "Every Sunday at 7:00 PM",
    channel: "National TV",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "tv",
    detailDescription: "SPC Spotlight is your weekly window into the world of printing excellence. Join us every Sunday evening as we showcase our latest projects, introduce our talented team members, and share insights into the printing industry."
  },
  {
    id: 15,
    title: "Print Tech Series",
    description: "Educational series about modern printing technology",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
    duration: "45 mins",
    schedule: "Every Wednesday at 8:00 PM",
    channel: "Education Channel",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "tv",
    detailDescription: "Explore the fascinating world of printing technology with our educational series. Each episode dives deep into different aspects of modern printing, from digital presses to sustainable practices."
  },
  {
    id: 16,
    title: "Behind the Pages",
    description: "Documentary series on book production process",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
    duration: "25 mins",
    schedule: "Every Friday at 9:00 PM",
    channel: "Documentary Channel",
    type: "video",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    category: "tv",
    detailDescription: "Go behind the scenes to discover how books are made. This documentary series follows the journey of a book from manuscript to finished product, revealing the artistry and precision involved in book production."
  }
];

const MediaDetailPage = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const [mediaItem, setMediaItem] = useState<MediaItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMediaItem = async () => {
      try {
        // Get ID from params and ensure it's a number
        const rawId = Array.isArray(params.id) ? params.id[0] : params.id;
        const id = Number(rawId);
        
        if (isNaN(id)) {
          console.error('Invalid ID format:', params.id);
          setMediaItem(null);
          return;
        }

        console.log('Fetching media item with ID:', id);
        const item = mediaItems.find(item => item.id === id) || null;
        console.log('Found item:', item);
        
        if (!item) {
          console.error('No item found with ID:', id);
        }
        
        setMediaItem(item);
      } catch (error) {
        console.error('Error fetching media item:', error);
      } finally {
        setLoading(false);
      }
    };

    if (params?.id) {
      fetchMediaItem();
    } else {
      console.error('No ID provided in URL');
      setLoading(false);
    }
  }, [params.id]);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto mb-4"></div>
          <p className="text-slate-600">Loading media item...</p>
        </div>
      </div>
    );
  }

  if (!mediaItem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
        <div className="text-center p-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Media Not Found</h2>
          <p className="text-slate-600 mb-6">The requested media item could not be found or has been removed.</p>
          <button
            onClick={() => router.push('/media')}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Back to Media
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-400 via-blue-400 to-slate-500">
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsla(280, 91.70%, 23.50%, 0.10) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
              {mediaItem.category === 'tv' && 'TV Program'}
            </div>
          ) : (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
              {mediaItem.category === 'tv' && 'TV Program'}
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {mediaItem.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-6">
            {mediaItem.date && (
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-slate-400" />
                <span>{formatDate(mediaItem.date)}</span>
              </div>
            )}
            
            {mediaItem.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-slate-400" />
                <span>{mediaItem.location}</span>
              </div>
            )}
            
            {mediaItem.duration && (
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-slate-400" />
                <span>{mediaItem.duration}</span>
              </div>
            )}
            
            {mediaItem.channel && (
              <div className="flex items-center gap-2">
                <Tv className="w-5 h-5 text-slate-400" />
                <span>{mediaItem.channel}</span>
              </div>
            )}
          </div>

          <div className="mb-8 rounded-xl overflow-hidden shadow-md">
            {mediaItem.videoUrl ? (
              <div className="aspect-video w-full bg-slate-900">
                <iframe
                  src={mediaItem.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <img
                src={mediaItem.image || mediaItem.thumbnail || ''}
                alt={mediaItem.title}
                className="w-full h-auto max-h-[600px] object-cover"
              />
            )}
          </div>

          <div className="prose max-w-none text-slate-700 mb-8">
            <p className="text-lg leading-relaxed">
              {mediaItem.detailDescription || mediaItem.description}
            </p>
          </div>
          
          {/* Features/Highlights */}
          {mediaItem.features && mediaItem.features.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {mediaItem.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Project-specific details */}
          {mediaItem.category === 'project' && mediaItem.status && (
            <div className="bg-purple-50 p-6 rounded-xl mb-8 border border-purple-100">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Project Status</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-purple-800 mb-1">
                    <span>Status</span>
                    <span className="font-medium">{mediaItem.status}</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-2.5">
                    <div 
                      className="bg-purple-600 h-2.5 rounded-full transition-all duration-500" 
                      style={{ width: `${mediaItem.completion}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-purple-600">0%</span>
                    <span className="text-xs text-purple-600 font-medium">
                      {mediaItem.completion}% Complete
                    </span>
                    <span className="text-xs text-purple-600">100%</span>
                  </div>
                </div>
                {mediaItem.startDate && (
                  <div className="flex items-center gap-2 text-purple-800">
                    <Calendar className="w-5 h-5" />
                    <span>Started: {mediaItem.startDate}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TV Program details */}
          {mediaItem.category === 'tv' && (
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Program Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mediaItem.schedule && (
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-100">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Calendar className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Schedule</p>
                      <p className="font-medium text-slate-800">{mediaItem.schedule}</p>
                    </div>
                  </div>
                )}
                {mediaItem.duration && (
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-100">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Clock className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Duration</p>
                      <p className="font-medium text-slate-800">{mediaItem.duration}</p>
                    </div>
                  </div>
                )}
                {mediaItem.channel && (
                  <div className="flex items-start gap-3 bg-white p-4 rounded-lg border border-slate-100">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Tv className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Channel</p>
                      <p className="font-medium text-slate-800">{mediaItem.channel}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Related Media */}
        <div className="bg-white rounded-xl p-8 border-2 border-slate-200 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 mb-6">You May Also Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaItems
              .filter(item => item.id !== mediaItem.id && item.category === mediaItem.category)
              .slice(0, 3)
              .map(item => (
                <a
                  key={item.id}
                  href={`/media/${item.id}`}
                  className="group block bg-slate-50 rounded-lg overflow-hidden border-2 border-slate-200 hover:border-purple-400 transition-all duration-300 hover:shadow-md"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image || item.thumbnail || ''}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-slate-800 mb-1 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="mt-3 flex items-center text-sm text-purple-600 group-hover:text-purple-700 transition-colors">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaDetailPage;