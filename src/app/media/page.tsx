"use client";

import { useState, useEffect } from 'react';
import { 
  Image, Calendar, MapPin, Clock, ArrowRight, Tv,
  ChevronDown
} from 'lucide-react';
import Footer from '../components/Footer';
import Link from 'next/link';

const MediaPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [activeTab, setActiveTab] = useState("all");

  const ongoingProjects = [
    {
      id: 1,
      title: "National Textbook Printing 2025",
      description: "Large-scale production of educational materials for schools nationwide",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
      status: "In Progress",
      completion: 75,
      startDate: "January 2025",
      category: "project"
    },
    {
      id: 2,
      title: "Digital Publishing Initiative",
      description: "Modernizing our printing capabilities with state-of-the-art digital technology",
      image: "https://images.unsplash.com/photo-1499750310107-b19be8fe80f5?w=800&q=80",
      status: "Planning",
      completion: 40,
      startDate: "March 2025",
      category: "project"
    },
    {
      id: 3,
      title: "Government Document Printing",
      description: "Official documentation and gazette printing for government institutions",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
      status: "Ongoing",
      completion: 60,
      startDate: "February 2025",
      category: "project"
    }
  ];

  const specialEvents = [
    {
      id: 4,
      title: "Annual General Meeting 2025",
      description: "Strategic planning and review of achievements",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      date: "March 15, 2025",
      location: "SPC Head Office",
      type: "image",
      category: "event"
    },
    {
      id: 5,
      title: "Technology Expo 2024",
      description: "Showcase of our latest printing technologies and innovations",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
      date: "December 10, 2024",
      location: "Colombo Convention Center",
      type: "video",
      category: "event"
    },
    {
      id: 6,
      title: "National Book Fair 2024",
      description: "Participation in the largest book exhibition in Sri Lanka",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      date: "September 20, 2024",
      location: "BMICH, Colombo",
      type: "image",
      category: "event"
    },
    {
      id: 7,
      title: "Staff Training Workshop",
      description: "Capacity building program for our production team",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      date: "August 5, 2024",
      location: "SPC Training Center",
      type: "video",
      category: "event"
    }
  ];

  const photoGallery = [
    { id: 8, image: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=600&q=80", title: "Modern Printing Facility", category: "gallery" },
    { id: 9, image: "https://images.unsplash.com/photo-1567443024551-f3e3cc2be870?w=600&q=80", title: "Production Floor", category: "gallery" },
    { id: 10, image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&q=80", title: "Quality Control", category: "gallery" },
    { id: 11, image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80", title: "Team Collaboration", category: "gallery" },
    { id: 12, image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80", title: "Finishing Department", category: "gallery" },
    { id: 13, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&q=80", title: "Book Binding", category: "gallery" }
  ];

  const tvPrograms = [
{
  id: 14,
  title: "SPC Spotlight",
  description: "Suba Dawasak",
  thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
  duration: "30 mins",
  schedule: "Every Weekday at 7:00 PM",
  channel: "Rupavahini",
  category: "tv",
  youtubeLink: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRT37azxJJmE%26t%3D1s%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExTXJpSjJFajBQZWlzMU42TQEegRySVwWQJkFETm9v6Hk8dpk94IzNCPbmXtX_gMyCi6zScuDieSKtpPHuHMc_aem_zbKbGopWlUoFfxROBLkFvQ&h=AT1hu5UZjNca2r5m2oweeg53yjjbXBEb-sMLDk69o0iJ-Qyn3uXetNqTHxE1ooW3XMtBoevVPsebEVzvNmVTP5mUkQH0BqY9rqoa7tA_XaljakJfka9ZeLj3YUXVYEXREpsb4XkKgmQUqq8pWtdgrL_F4QPywL29&__tn__=-UK-R&c[0]=AT0mw6Bd_yxkisWxDBNEtA_672mhPm8AvAekhO-Vu-rndbUwd37vueXDITVV38KVh4azt_cxmmhJzbazn_TVwPaxV20DsRPdFGnbFrKGTnLPB2Wmup7DSDFOEVhoG-5IapyPZ_BHI0uDiaMVXDoq5IB9OJn1_wJC9b6SiuC79l73PaN1EWL9xAlc0FbM9bzaOahDDGCh5h_Ko4wuwfaolX4J"
},
{
  id: 15,
  title: "Print Tech Series",
  description: "Educational series about modern printing technology",
  thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
  duration: "45 mins",
  schedule: "Every Wednesday at 8:00 PM",
  channel: "Education Channel",
  category: "tv",
  youtubeLink: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRT37azxJJmE%26t%3D1s%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExTXJpSjJFajBQZWlzMU42TQEegRySVwWQJkFETm9v6Hk8dpk94IzNCPbmXtX_gMyCi6zScuDieSKtpPHuHMc_aem_zbKbGopWlUoFfxROBLkFvQ&h=AT1hu5UZjNca2r5m2oweeg53yjjbXBEb-sMLDk69o0iJ-Qyn3uXetNqTHxE1ooW3XMtBoevVPsebEVzvNmVTP5mUkQH0BqY9rqoa7tA_XaljakJfka9ZeLj3YUXVYEXREpsb4XkKgmQUqq8pWtdgrL_F4QPywL29&__tn__=-UK-R&c[0]=AT0mw6Bd_yxkisWxDBNEtA_672mhPm8AvAekhO-Vu-rndbUwd37vueXDITVV38KVh4azt_cxmmhJzbazn_TVwPaxV20DsRPdFGnbFrKGTnLPB2Wmup7DSDFOEVhoG-5IapyPZ_BHI0uDiaMVXDoq5IB9OJn1_wJC9b6SiuC79l73PaN1EWL9xAlc0FbM9bzaOahDDGCh5h_Ko4wuwfaolX4J"
},
{
  id: 16,
  title: "Behind the Pages",
  description: "Documentary series on book production process",
  thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
  duration: "25 mins",
  schedule: "Every Friday at 9:00 PM",
  channel: "Documentary Channel",
  category: "tv",
  youtubeLink: "https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DRT37azxJJmE%26t%3D1s%26fbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExTXJpSjJFajBQZWlzMU42TQEegRySVwWQJkFETm9v6Hk8dpk94IzNCPbmXtX_gMyCi6zScuDieSKtpPHuHMc_aem_zbKbGopWlUoFfxROBLkFvQ&h=AT1hu5UZjNca2r5m2oweeg53yjjbXBEb-sMLDk69o0iJ-Qyn3uXetNqTHxE1ooW3XMtBoevVPsebEVzvNmVTP5mUkQH0BqY9rqoa7tA_XaljakJfka9ZeLj3YUXVYEXREpsb4XkKgmQUqq8pWtdgrL_F4QPywL29&__tn__=-UK-R&c[0]=AT0mw6Bd_yxkisWxDBNEtA_672mhPm8AvAekhO-Vu-rndbUwd37vueXDITVV38KVh4azt_cxmmhJzbazn_TVwPaxV20DsRPdFGnbFrKGTnLPB2Wmup7DSDFOEVhoG-5IapyPZ_BHI0uDiaMVXDoq5IB9OJn1_wJC9b6SiuC79l73PaN1EWL9xAlc0FbM9bzaOahDDGCh5h_Ko4wuwfaolX4J"
}

  ];

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
                  Media Gallery
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                  Explore our projects, events, and TV programs showcasing excellence in printing and publishing.mprehensive range of exercise books, notebooks, and quality stationery items
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

      {/* Tab Navigation */}
      <div className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-4 flex-wrap max-w-4xl mx-auto">
            {[
              { id: "all", label: "All Media" },
              { id: "project", label: "Projects" },
              { id: "event", label: "Events" },
              { id: "gallery", label: "Photos" },
              { id: "tv", label: "TV Programs" }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-3 rounded-lg font-semibold transition-all text-sm ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-blue-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        
        {/* Ongoing Projects */}
        {(activeTab === "all" || activeTab === "project") && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Ongoing Projects</h2>
              <p className="text-gray-600">Current initiatives and large-scale operations</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {ongoingProjects.map((project) => (
                <div key={project.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-4 right-4 px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>Started: {project.startDate}</span>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-2">
                        <span>Progress</span>
                        <span className="font-bold">{project.completion}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${project.completion}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Special Events */}
        {(activeTab === "all" || activeTab === "event") && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">Special Events</h2>
              <p className="text-gray-600">Highlights from our corporate events and exhibitions</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {specialEvents.map((event) => (
                <div key={event.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {event.type === "video" && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Tv className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm text-gray-900 mb-2 line-clamp-1">{event.title}</h3>
                    <p className="text-xs text-gray-600 mb-3 line-clamp-2">{event.description}</p>
                    <div className="space-y-2 text-xs text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        <span className="line-clamp-1">{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Photo Gallery */}
        
{(activeTab === "all" || activeTab === "gallery") && (
  <div className="mb-20" id="gallery">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">Photo Gallery</h2>
      <p className="text-gray-600">Visual tour of our facilities and operations</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
      {photoGallery.map((photo) => (
        <Link 
          key={photo.id} 
          href={`/media/${photo.id}`}
          className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all group"
        >
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
            <p className="text-white text-xs font-semibold">{photo.title}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
)}

        {/* TV Programs */}
        {(activeTab === "all" || activeTab === "tv") && (
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-gray-900">TV Programs</h2>
              <p className="text-gray-600">Regular television features showcasing our work</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {tvPrograms.map((program) => (
                <a 
                  key={program.id} 
                  href={program.youtubeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow hover:border-blue-600 group"
                >
                  <div className="relative h-40 overflow-hidden bg-gray-900">
                    <img
                      src={program.thumbnail}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/90 text-blue-600 rounded-full p-3 shadow-lg">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        <Tv className="w-3 h-3" />
                        {program.channel}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">{program.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{program.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span><strong>Duration:</strong> {program.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span className="line-clamp-1"><strong>Schedule:</strong> {program.schedule}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

<Footer />
    </div>
  );
};

export default MediaPage;