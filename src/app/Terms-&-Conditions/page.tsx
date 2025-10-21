"use client";

import { FileText, Mail } from "lucide-react";
import Footer from "../components/Footer";

export default function TermsOfServicePage() {
  const terms = [
    {
      content: "State Printing Corporation (hereafter referred to as 'SPC') exclusively retains all rights including Intellectual Property Rights on the contents that are displayed on the website including but not limited to any text, software, database, format, words, images, information, phrases, texts, photographs, graphics, maps, designs, logos and trademarks that are displayed on the Website. Intellectual Property Rights mean (i) copyright, patents, database rights and rights in trade marks, trade names, designs, know-how and confidential information (whether registered or not); (ii) applications for registration and the right to apply for registration for any of these rights; and (iii) all other intellectual property rights and equivalent or similar forms of protection existing anywhere in the world."
    },
    {
      content: "Nothing contained on this website should be construed as granting any license to use any Intellectual Property Rights on the contents displayed on this website. Your use/misuse of the contents displayed on this website, except as provided for in these Terms and Conditions, is strictly prohibited. You are also advised that SPC will aggressively enforce its Intellectual Property Rights to the fullest extent of the law."
    },
    {
      content: "The information on this site has been included in good faith. It is for general informational purposes only. It should not be relied on for any specific purpose and no representation or warranty is given as regards its accuracy, completeness or timeliness. Nothing contained herein is to be construed as a recommendation to use any product, process, equipment or formulation, in conflict with any patent, or otherwise."
    },
    {
      content: "SPC makes no representations or warranties, either express, implied, statutory or otherwise of merchantability, fitness for a particular purpose or non-infringement of third party rights, with respect to the website, the information or any products or services to which the information refers."
    },
    {
      content: "Your use of this website is exclusively at your own risk."
    },
    {
      content: "Neither SPC nor its Directors, officers, employees or agents shall be liable for any loss, damages or expenses of any kind, including but not limited to, direct, indirect, incidental, consequential or punitive damages, arising out of your access to, use, inability to use, change in content of this website even if SPC has previously been advised of the possibility of such damages or arising from any other website you access through a link from this website or from any actions taken or fail to be taken as a result of any electronic mail messages you send us."
    },
    {
      content: "SPC shall have no responsibility to maintain the contents and services made available on this web site or to supply any corrections, updates, or releases in connection therewith."
    },
    {
      content: "Any contents on this website is subject to change without notice."
    },
    {
      content: "SPC or their officers, employees or agents shall have no liability or any responsibility whatsoever for any loss suffered caused by bug, worms, viruses or whatsoever that may infect your computer equipment or other property by reason of your use of, access to or downloading of any contents from this website. If you choose to download any contents from this website you do so at your own risk."
    }
  ];

  const prohibitions = [
    "any act that would restrict or inhibit any other user from using or enjoying this web site;",
    "uploading or transmitting any information or software that contains viruses or other harmful or disruptive component that may cause damage to the property of SPC or the property of other individuals;",
    "submitting particulars that you do not have the right or authority to submit under any law or any contractual or fiduciary relationship (such as trade secrets and confidential information);",
    "any act that would constitute a breach of either the privacy (including uploading private information without the concerned individual's consent) or any other of the legal rights of individuals."
  ];

  const additionalTerms = [
    {
      content: "SPC reserves the right to revise these terms and conditions by updating the then-current version thereof posted on this website. By using this web site, you agree to be bound by any such revisions and should therefore periodically visit this page of this web site to determine the most current version of the Terms and Conditions to which you are bound."
    },
    {
      content: "SPC reserves the right to make any changes and corrections to this site as and when SPC considers it appropriate and without notice. SPC may suspend the operation of this web site for support or maintenance work, in order to update the content or for any other reason."
    },
    {
      content: "Personal information provided to SPC through this web site will only be used in accordance with our Privacy Policy which forms part of these Terms and Conditions. Please read this carefully before going on. By providing your personal details to us you are consenting to its use in accordance with our Privacy Policy."
    },
    {
      content: "If you apply for a position at SPC through the Careers section of this website, your curriculum vitae or other information (including personal information) you provide to us will be used solely for the purposes of considering applications and recruitment."
    },
    {
      content: "If you need third party software to use this website, you agree to obtain a licence of that software at your own expense."
    },
    {
      content: "Nothing in the website is to be construed to constitute a partnership between you and us, nor constitute either of you or us the agent of the other for any purpose, or constitute the creation of a legally enforceable relationship between you and us."
    },
    {
      content: "SPC reserves the right at its sole discretion to restrict or terminate your access to this website or any feature of this website or part thereof at any time."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="min-h-[50vh] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-10 h-10" />
            <h1 className="text-4xl md:text-5xl font-bold">Terms & Conditions</h1>
          </div>
          <p className="text-blue-100 text-lg">
            Please read these terms and conditions carefully before using our website
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Introduction */}
        <div className="mb-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
          <p className="text-gray-700 leading-relaxed">
            By accessing and using the State Printing Corporation website, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website.
          </p>
        </div>

        {/* Main Terms */}
        <div className="space-y-6 mb-12">
          {terms.map((term, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm mt-1">
                {index + 1}
              </div>
              <p className="text-gray-700 leading-relaxed flex-1">
                {term.content}
              </p>
            </div>
          ))}
        </div>

        {/* Prohibited Activities */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Prohibited Activities</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You agree not to engage in any of the following prohibited activities:
          </p>
          <div className="space-y-4">
            {prohibitions.map((prohibition, index) => (
              <div key={index} className="flex gap-4 pl-4">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                <p className="text-gray-700 leading-relaxed flex-1">
                  {prohibition}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Terms */}
        <div className="space-y-6 mb-12">
          {additionalTerms.map((term, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold text-sm mt-1">
                {terms.length + index + 1}
              </div>
              <p className="text-gray-700 leading-relaxed flex-1">
                {term.content}
              </p>
            </div>
          ))}
        </div>

        {/* Last Updated */}
        <div className="mb-12 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-gray-600 text-sm">
            <strong>Last Updated:</strong> October 16, 2025
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Contact Us</h2>
          </div>
          <p className="text-blue-100 mb-6">
            If you have any questions about these Terms and Conditions, please contact us:
          </p>
          <div className="space-y-3 text-blue-50">
            <p>
              <strong>State Printing Corporation</strong>
            </p>
            <p>     State Printing Corporation,Panaluwa, Watareka, Padukka</p>
            <p>
              Email: <a href="mailto:info@stateprintingcorp.lk" className="underline hover:text-white">info@stateprintingcorp.lk</a>
            </p>
            <p>
              Phone: <a href="tel:+94112675693" className="underline hover:text-white">+94 11 267 5693</a>
            </p>
          </div>
        </div>


      </div>
      <Footer /> 
    </div>
  );
}