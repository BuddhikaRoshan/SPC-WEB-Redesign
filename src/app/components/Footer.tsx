"use client";

import { useState, useEffect } from "react";
import { 
  MapPin, Phone, Mail, ChevronUp,
  Facebook, Youtube, Linkedin, Instagram
} from "lucide-react";

const Footer = () => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            {/* Column 1: About */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                About Us
              </h3> 
              <ul className="space-y-3">
                {[
                { name: "Our History", path: "/about#history" },
                  { name: "Company Overview", path: "/about" },
                  { name: "Management Team", path: "/about/committee" },
                  { name: "Careers", path: "/careers" },
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.path}
                      className="text-sm text-white hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Services */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Security Printing", path: "/services" },
                   { name: "Text Books", path: "/services" },
                  { name: "Commercial Printing", path: "/services" },
                  { name: "Stationery", path: "/services" },
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.path}
                      className="text-sm text-white hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Information */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Information
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Contact Us", path: "/contact" },
                  { name: "FAQs", path: "/contact#faq" },
                  { name: "Downloads", path: "/downloads" },
                  { name: "News", path: "/NewsPage" },
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.path}
                      className="text-sm text-white hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                Legal
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Privacy Policy", path: "/privacy-policy" },
                  { name: "Terms & Conditions", path: "/Terms-&-Conditions" },
                  { name: "Cookie Policy", path: "/cookie-policy" },
                  { name: "Sitemap", path: "/sitemap" },
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.path}
                      className="text-sm text-white hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-200 my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Left: Copyright */}
            <p className="text-sm text-white">
              © {new Date().getFullYear()} State Printing Corporation. All Rights Reserved.
            </p>

            {/* Center: Contact Info */}
            <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-white">
              <a 
                href="tel:+94112757505"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +94 112 757 505
              </a>
              <a 
                href="mailto:info@stateprinting.lk"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@stateprinting.lk
              </a>
            </div>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: "https://facebook.com/stateprintingsl", label: "Facebook" },
                { icon: Linkedin, href: "https://linkedin.com/company/state-printing-corporation", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com/stateprintingsl", label: "Instagram" },
                { icon: Youtube, href: "https://youtube.com/stateprintingsl", label: "YouTube" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 rounded flex items-center justify-center text-white hover:text-white hover:bg-slate-900 transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {scrollY > 300 && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-10 h-10 rounded bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center z-50 transition-all duration-200 shadow"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default Footer;