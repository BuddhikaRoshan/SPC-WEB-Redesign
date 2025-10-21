"use client";

import { Cookie, Shield, Info, Settings, Clock, Eye, ExternalLink } from "lucide-react";
import Footer from "../components/Footer";

export default function CookiePolicy() {
  const cookieTypes = [
    {
      type: "Essential Cookies",
      purpose: "These are necessary for the website to function properly and cannot be disabled.",
      optOut: "N/A",
      examples: "Session management, security features, user authentication, basic site navigation"
    },
    {
      type: "Analytical and Performance Cookies",
      purpose: "These cookies help us measure website performance, analyse visitor behaviour, and optimise site content.",
      optOut: "Users can disable analytics cookies through their browser settings or our cookie preferences tool.",
      examples: "Google Analytics, page load times, user interaction tracking, error reporting"
    },
    {
      type: "Functional Cookies",
      purpose: "Enable enhanced functionality and personalisation, such as remembering user preferences.",
      optOut: "Disabling these may result in a loss of convenience, such as the need to manually set preferences each visit.",
      examples: "Language preferences, display settings, user interface customization"
    },
    {
      type: "Marketing and Advertising Cookies",
      purpose: "These cookies track your interactions with our site to deliver relevant advertisements and promotional content.",
      optOut: "Users can manage advertising preferences through third-party platforms or opt-out of targeted ads.",
      examples: "Ad targeting, conversion tracking, remarketing campaigns, promotional content delivery"
    },
    {
      type: "Third-Party Cookies",
      purpose: "These cookies are set by external providers to offer additional services such as embedded content and social media sharing.",
      optOut: "Users should refer to third-party privacy policies for opt-out instructions.",
      examples: "Social media plugins, embedded videos, external analytics services, payment processors"
    }
  ];

  const browsers = [
    { name: "Google Chrome", url: "http://support.google.com/chrome/bin/answer.py?hl=en&hlrm=en&answer=95647" },
    { name: "Mozilla Firefox", url: "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" },
    { name: "Apple Safari", url: "https://support.apple.com/en-gb/guide/safari/sfri11471/mac" },
    { name: "Microsoft Edge", url: "https://support.microsoft.com/en-us/windows/manage-cookies-in-microsoft-edge-view-allow-block-delete-and-use-168dab11-0753-043d-7c16-ede5947fc64d" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
     <div className="min-h-[50vh] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Cookie Policy</h1>
          </div>
          <p className="text-blue-100 text-lg">
            Last Updated: October 16, 2025
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* About Cookies */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Info className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">About this Cookie Policy</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            This Cookie Policy explains how State Printing Corporation uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are, why we use them, and your rights to control their use.
          </p>
        </section>

        {/* What Are Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What are cookies?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cookies are small text files that are stored on your device when you visit a website. They help websites remember your actions and preferences over time, improving your browsing experience.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cookies can be categorised as:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li><strong>First-party cookies:</strong> Set by State Printing Corporation and used to support core website functions.</li>
            <li><strong>Third-party cookies:</strong> Set by external service providers for analytics, advertising, and performance monitoring.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Some cookies are automatically deleted when you close your browser (session cookies), while others remain on your device for a set duration (persistent cookies).
          </p>
        </section>

        {/* Types of Cookies */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Types of Cookies We Use</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Type</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Purpose</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Opt-Out</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Example Use Cases</th>
                </tr>
              </thead>
              <tbody>
                {cookieTypes.map((cookie, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">{cookie.type}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">{cookie.purpose}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">{cookie.optOut}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">{cookie.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* How to Manage Cookies */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">How to Manage Cookies</h2>
          </div>

          {/* Consent Management */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Consent Management</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Upon visiting our website, you will see a cookie banner requesting your consent to use specific cookies. Essential cookies are always active, but you can accept, reject, or adjust settings for other cookie categories.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may modify or withdraw your consent at any time through our Cookie Settings page accessible via the website footer.
            </p>
          </div>

          {/* Browser Settings */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can configure your browser to block or delete cookies. Please note that disabling cookies may impact website functionality.
            </p>
            <ul className="space-y-2">
              {browsers.map((browser, index) => (
                <li key={index}>
                  <a 
                    href={browser.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2"
                  >
                    For {browser.name}: Manage Cookies
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cookie Management Tools */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookie Management Tools</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              You can also manage cookies using dedicated tools provided by third parties, such as:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Google Ads Settings
                </a>
              </li>
              <li>
                <a href="https://www.youronlinechoices.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline">
                  Your Online Choices
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Changes to Policy */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Changes to This Cookie Policy</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically for the latest information on our use of cookies.
          </p>
        </section>

        {/* Contact Us */}
        <section className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            If you have any questions about this Cookie Policy or our use of cookies, please contact us at:
          </p>
          <div className="text-gray-700 space-y-2">
            <p><strong>State Printing Corporation</strong></p>
            <p>
              <span className="inline-block w-24">Email:</span>
              <a href="mailto:info@stateprintingcorp.lk" className="text-blue-600 hover:underline">
                info@stateprintingcorp.lk
              </a>
            </p>
            <p>
              <span className="inline-block w-24">Phone:</span>
              <a href="tel:+94112675693" className="text-blue-600 hover:underline">
                +94 11 267 5693
              </a>
            </p>
            <p>
              <span className="inline-block w-24">Address:</span>
              State Printing Corporation,Panaluwa, Watareka, Padukka
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}