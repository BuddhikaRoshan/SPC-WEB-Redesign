"use client";

import { useState, useEffect } from "react";
import { 
  BookOpen, FileText, Notebook, Scissors, 
  Search, Package, CheckCircle, ChevronDown,
  Grid3x3, List
} from "lucide-react";
import Footer from "../components/Footer";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' });
  };

  const categories = [
    { id: 'all', label: 'All Products', icon: Package },
    { id: 'exercise-books', label: 'Exercise Books', icon: BookOpen },
    { id: 'notebooks', label: 'Notebooks', icon: Notebook },
    { id: 'paper-sheets', label: 'Paper Sheets', icon: FileText },
    { id: 'stationery', label: 'Stationery Items', icon: Scissors }
  ];

  const products = [
    // Single Ruled Exercise Books
    { 
      id: 1, 
      name: 'Single Ruled Exercise Book - 40 Pages', 
      category: 'exercise-books',
      type: 'Single Ruled',
      pages: 40,
      description: 'High-quality single Ruled exercise book, perfect for students',
      specifications: ['A4 Size', 'Single Ruled', '40 Pages', 'Strong Binding']
    },
    { 
      id: 2, 
      name: 'Single Ruled Exercise Book - 80 Pages', 
      category: 'exercise-books',
      type: 'Single Ruled',
      pages: 80,
      description: 'Durable single Ruled exercise book with 80 pages',
      specifications: ['A4 Size', 'Single Ruled', '80 Pages', 'Strong Binding']
    },
    { 
      id: 3, 
      name: 'Single Ruled Exercise Book - 120 Pages', 
      category: 'exercise-books',
      type: 'Single Ruled',
      pages: 120,
      description: 'Premium single Ruled exercise book for extended use',
      specifications: ['A4 Size', 'Single Ruled', '120 Pages', 'Strong Binding']
    },
    { 
      id: 4, 
      name: 'Single Ruled Exercise Book - 160 Pages', 
      category: 'exercise-books',
      type: 'Single Ruled',
      pages: 160,
      description: 'Extra-thick single Ruled exercise book',
      specifications: ['A4 Size', 'Single Ruled', '160 Pages', 'Strong Binding']
    },
    { 
      id: 5, 
      name: 'Single Ruled Exercise Book - 200 Pages', 
      category: 'exercise-books',
      type: 'Single Ruled',
      pages: 200,
      description: 'Maximum capacity single Ruled exercise book',
      specifications: ['A4 Size', 'Single Ruled', '200 Pages', 'Strong Binding']
    },
    // Squared Exercise Books
    { 
      id: 6, 
      name: 'Squared Exercise Book - 40 Pages', 
      category: 'exercise-books',
      type: 'Squared',
      pages: 40,
      description: 'Graph paper exercise book ideal for mathematics',
      specifications: ['A4 Size', 'Squared Paper', '40 Pages', 'Strong Binding']
    },
    { 
      id: 7, 
      name: 'Squared Exercise Book - 80 Pages', 
      category: 'exercise-books',
      type: 'Squared',
      pages: 80,
      description: 'Squared paper book for technical drawings',
      specifications: ['A4 Size', 'Squared Paper', '80 Pages', 'Strong Binding']
    },
    { 
      id: 8, 
      name: 'Squared Exercise Book - 120 Pages', 
      category: 'exercise-books',
      type: 'Squared',
      pages: 120,
      description: 'Extended squared paper book for students',
      specifications: ['A4 Size', 'Squared Paper', '120 Pages', 'Strong Binding']
    },
    { 
      id: 9, 
      name: 'Squared Exercise Book - 160 Pages', 
      category: 'exercise-books',
      type: 'Squared',
      pages: 160,
      description: 'Professional squared paper exercise book',
      specifications: ['A4 Size', 'Squared Paper', '160 Pages', 'Strong Binding']
    },
    { 
      id: 10, 
      name: 'Squared Exercise Book - 200 Pages', 
      category: 'exercise-books',
      type: 'Squared',
      pages: 200,
      description: 'Premium squared paper book for intensive use',
      specifications: ['A4 Size', 'Squared Paper', '200 Pages', 'Strong Binding']
    },
    // Notebooks
    { 
      id: 11, 
      name: 'Spiral Notebook - A4', 
      category: 'notebooks',
      type: 'Spiral Bound',
      pages: 100,
      description: 'Convenient spiral-bound notebook with perforated pages',
      specifications: ['A4 Size', 'Spiral Binding', '100 Pages', 'Perforated']
    },
    { 
      id: 12, 
      name: 'Hardcover Notebook - A5', 
      category: 'notebooks',
      type: 'Hardcover',
      pages: 200,
      description: 'Durable hardcover notebook for professional use',
      specifications: ['A5 Size', 'Hardcover', '200 Pages', 'Ribbon Bookmark']
    },
    { 
      id: 13, 
      name: 'Office Register - 400 Pages', 
      category: 'notebooks',
      type: 'Register',
      pages: 400,
      description: 'Large office register for record keeping',
      specifications: ['A4 Size', 'Hardbound', '400 Pages', 'Numbered']
    },
    { 
      id: 14, 
      name: 'Subject Notebook Set', 
      category: 'notebooks',
      type: 'Set',
      pages: 80,
      description: 'Set of 5 subject-wise notebooks with color coding',
      specifications: ['A4 Size', '5 Notebooks', '80 Pages Each', 'Color Coded']
    },
    // Paper Sheets
    { 
      id: 15, 
      name: 'A4 Ruled Paper - 500 Sheets', 
      category: 'paper-sheets',
      type: 'Ruled Paper',
      description: 'Premium quality ruled paper for printing and writing',
      specifications: ['A4 Size', '500 Sheets', '80 GSM', 'Single Ruled']
    },
    { 
      id: 16, 
      name: 'A4 Graph Paper - 500 Sheets', 
      category: 'paper-sheets',
      type: 'Graph Paper',
      description: 'Squared paper perfect for technical drawings',
      specifications: ['A4 Size', '500 Sheets', '80 GSM', '5mm Squares']
    },
    { 
      id: 17, 
      name: 'A4 Plain Paper - 500 Sheets', 
      category: 'paper-sheets',
      type: 'Plain Paper',
      description: 'Blank white paper for general use',
      specifications: ['A4 Size', '500 Sheets', '80 GSM', 'Bright White']
    },
    { 
      id: 18, 
      name: 'A3 Drawing Paper - 250 Sheets', 
      category: 'paper-sheets',
      type: 'Drawing Paper',
      description: 'Large format paper for artwork and technical drawings',
      specifications: ['A3 Size', '250 Sheets', '100 GSM', 'High Quality']
    },
    // Stationery Items
    { 
      id: 19, 
      name: 'Examination Answer Booklet', 
      category: 'stationery',
      type: 'Answer Book',
      description: 'Official examination answer booklets',
      specifications: ['A4 Size', '32 Pages', 'Numbered', 'Watermarked']
    },
    { 
      id: 20, 
      name: 'File Covers - Pack of 10', 
      category: 'stationery',
      type: 'File Cover',
      description: 'Durable file covers for document organization',
      specifications: ['A4 Size', '10 Pack', 'Cardboard', 'Multiple Colors']
    },
    { 
      id: 21, 
      name: 'Certificate Paper - 100 Sheets', 
      category: 'stationery',
      type: 'Certificate',
      description: 'Premium paper for official certificates',
      specifications: ['A4 Size', '100 Sheets', '120 GSM', 'Border Design']
    },
    { 
      id: 22, 
      name: 'Loose Leaf Paper - 1000 Sheets', 
      category: 'stationery',
      type: 'Loose Leaf',
      description: 'Hole-punched paper for ring binders',
      specifications: ['A4 Size', '1000 Sheets', '4-Hole', '80 GSM']
    },
    { 
      id: 23, 
      name: 'Sticky Notes Set', 
      category: 'stationery',
      type: 'Sticky Notes',
      description: 'Colorful sticky notes for quick reminders',
      specifications: ['Various Sizes', 'Multi-Color', 'Strong Adhesive', '5 Pads']
    },
    { 
      id: 24, 
      name: 'Index Dividers - 12 Set', 
      category: 'stationery',
      type: 'Dividers',
      description: 'Labeled dividers for file organization',
      specifications: ['A4 Size', '12 Dividers', 'Numbered', 'Color Tabs']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive range of exercise books, notebooks, and quality stationery items
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

      {/* Product Stats */}
      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-8">
            {[
              { number: "24+", label: "Product Types" },
              { number: "5", label: "Categories" },
              { number: "100%", label: "Quality Assured" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter Bar */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
              {/* Search */}
              <div className="relative flex-1 w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 focus:border-blue-600 focus:outRuled-none text-gray-900"
                />
              </div>

              {/* View Mode Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  <Grid3x3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 transition-colors ${
                    viewMode === 'list'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2 font-semibold transition-colors ${
                    activeCategory === cat.id
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  <span className="text-sm">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Products Count */}
          <div className="mb-6">
            <p className="text-gray-700 font-medium">
              Showing <span className="text-blue-600 font-bold">{filteredProducts.length}</span> products
            </p>
          </div>

          {/* Products Grid/List */}
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-4"
          }>
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white border border-gray-200 hover:shadow-lg transition-shadow ${
                  viewMode === 'list' ? 'flex gap-6 p-6' : 'p-6'
                }`}
              >
                {/* Product Image Placeholder */}
                <div className={`bg-gray-100 flex items-center justify-center ${
                  viewMode === 'list' ? 'w-32 h-32 flex-shrink-0' : 'h-48 mb-4'
                }`}>
                  <Package className="w-16 h-16 text-gray-300" />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-gray-700 text-sm mb-3">
                    {product.description}
                  </p>

                  {/* Specifications */}
                  <div className="space-y-1">
                    {product.specifications.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-blue-600 flex-shrink-0" />
                        <span className="text-xs text-gray-600">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Need Custom Products?
          </h3>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            We offer customized printing solutions tailored to your specific requirements. 
            Contact us to discuss your needs.
          </p>
          <button
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Products;