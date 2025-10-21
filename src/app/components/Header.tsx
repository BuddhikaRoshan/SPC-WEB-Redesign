"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [pathname, setPathname] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setPathname(window.location.pathname);
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const groupedDivisions = [
    {
      title: "Corporate Divisions",
      items: [
        { name: "Chairman Office", path: "/divisions/chairman-office" },
        { name: "General Manager Office", path: "/divisions/gm-office" },
        { name: "Internal Audit Division", path: "/divisions/internal-audit" },
      ],
    },
    {
      title: "Service Divisions",
      items: [
        { name: "Human Resources & Administration", path: "/divisions/hrd-admin" },
        { name: "Finance Division", path: "/divisions/finance" },
        { name: "Supplies Division", path: "/divisions/supplies" },
        { name: "Marketing Division", path: "/divisions/marketing" },
      ],
    },
    {
      title: "Factory & Works Units",
      items: [
        { name: "Security Printing", path: "/divisions/security-printing" },
        { name: "Stationery Factory", path: "/divisions/stationery-factory" },
        { name: "Stationery Store", path: "/divisions/stationery-store" },
        { name: "Process Division", path: "/divisions/process-section" },
        { name: "Litho Division", path: "/divisions/litho-section" },
        { name: "Binding Division", path: "/divisions/binding" },
        { name: "Main Store", path: "/divisions/main-store" },
        { name: "Maintenance Division", path: "/divisions/maintenance" },
      ],
    },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Divisions", href: "#", hasDivisions: true },
    { name: "Services", href: "/Services" },
    { name: "Products", href: "/Products" },
    { name: "News Room", href: "/NewsPage" },
    { name: "Media", href:"/media"},
    { name: "Downloads", href: "/downloads" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center gap-3">
            <img src="/header/gov.png" alt="Gov Logo" className="h-10 w-auto" />
            <img src="/header/icon.png" alt="SPC Icon" className="h-10 w-auto" />
            <img src="/header/logo.png" alt="SPC Logo" className="h-10 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) =>
              link.hasDivisions ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                  ref={dropdownRef}
                >
                  <button
                    ref={buttonRef}
                    onClick={() => setShowDropdown(!showDropdown)}
                    className={`px-4 py-4 text-sm font-semibold flex items-center text-white transition-all duration-300 border-b-2 ${
                      pathname.startsWith("/divisions")
                        ? "border-white"
                        : "border-transparent group-hover:border-white/70"
                    }`}
                    aria-expanded={showDropdown}
                    aria-haspopup="true"
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                        showDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <div 
                    className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[900px] bg-white rounded-lg shadow-xl p-6 transition-all duration-200 transform ${
                      showDropdown 
                        ? 'opacity-100 translate-y-0 visible' 
                        : 'opacity-0 -translate-y-2 invisible'
                    }`}
                  >
                    <div className="grid grid-cols-3 gap-10">
                      {groupedDivisions.map((group) => (
                        <div key={group.title}>
                          <h4 className="text-xs font-bold uppercase text-slate-500 mb-3 tracking-wider">
                            {group.title}
                          </h4>
                          <ul className="space-y-2">
                            {group.items.map((item) => (
                              <li key={item.path}>
                                <a
                                  href={item.path}
                                  className="block text-sm text-black hover:text-blue-700 hover:translate-x-1 transition-transform"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-4 text-sm font-semibold text-white border-b-2 transition-all duration-300 ${
                    pathname === link.href
                      ? "border-white"
                      : "border-transparent hover:border-white/70"
                  }`}
                >
                  {link.name}
                </a>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-gray-300 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/90 border-t border-white/10 text-white animate-fadeIn">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) =>
              link.hasDivisions ? (
                <div key={link.name}>
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="w-full flex justify-between items-center px-3 py-3 text-sm font-semibold text-white hover:text-gray-200 hover:bg-white/10 rounded-md transition"
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {mobileDropdownOpen && (
                    <div className="ml-3 mt-2 bg-white/5 rounded-md p-3 border border-white/10">
                      {groupedDivisions.map((group) => (
                        <div key={group.title} className="mb-3">
                          <p className="text-xs font-semibold text-gray-400 uppercase mb-2 tracking-wide">
                            {group.title}
                          </p>
                          {group.items.map((item) => (
                            <a
                              key={item.path}
                              href={item.path}
                              className="block px-2 py-1 text-sm text-gray-200 hover:text-white hover:translate-x-1 transition-transform"
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-3 text-sm font-semibold rounded-md ${
                    pathname === link.href
                      ? "text-white bg-white/10"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
