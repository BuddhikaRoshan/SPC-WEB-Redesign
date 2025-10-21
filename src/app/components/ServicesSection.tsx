"use client";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Text Books",
      image: "/services/education.jpg",
      description:
        "Comprehensive printing solutions for textbooks, workbooks, and educational materials across all levels.",
      color: "from-blue-600 to-blue-500",
    },
    {
      id: 2,
      title: "Security Printing",
      image: "/services/nlb.jpg",
      description:
        "High-security printing services for sensitive documents requiring advanced protection measures.",
      color: "from-blue-600 to-blue-500",
    },
    {
      id: 3,
        title: "Commercial Printing",
      image: "/services/com.jpg",
      description:
        "Professional commercial printing services for businesses, organizations, and private sector needs.",
      color: "from-blue-600 to-blue-500",
    },
    {
      id: 4,
      title: "Stationery Books",
      image: "/services/text.jpg",
      description:
        "Complete book publishing services from manuscript to finished product with quality binding.",
      color: "from-blue-600 to-blue-500",
    },
    
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2 uppercase tracking-wide text-sm">
            Excellence in Every Print
          </p>
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Explore Our Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            With expertise across multiple printing sectors, we deliver
            comprehensive solutions tailored to meet diverse needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
