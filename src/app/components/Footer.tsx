import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-md flex items-center justify-center">
                <span className="text-white text-xs font-bold">SRC</span>
              </div>
              <h3 className="text-white font-bold text-xs md:text-sm uppercase tracking-wider">
                Silver Heart Care
              </h3>
            </div>
            <a href="#home" className="hover:text-white transition text-xs md:text-sm line-clamp-3">
              Dedicated to providing compassionate care for seniors. Our mission
              is to enhance the quality of life through personalized support
              services.
            </a>
            <div className="flex gap-2 md:gap-4 p-2 md:p-4">
              <a
                href="#facebook"
                className="w-8 md:w-10 h-8 md:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition text-xs md:text-base"
              >
                <span className="font-bold">f</span>
              </a>
              <a
                href="#twitter"
                className="w-8 md:w-10 h-8 md:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition text-xs md:text-base"
              >
                <span className="font-bold">𝕏</span>
              </a>
              <a
                href="#linkedin"
                className="w-8 md:w-10 h-8 md:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-700 transition text-xs font-bold"
              >
                <span className="font-bold text-xs">in</span>
              </a>
            </div>
          </div>
          <div className="md:ml-auto">
            <h3 className="text-white font-bold mb-4 md:mb-6 text-xs md:text-sm uppercase tracking-wider">
              About Us
            </h3>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li>
                <a href="#mission" className="hover:text-white transition">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition">
                  Our Team
                </a>
              </li>
              <li>
                <Link to="/membership" className="hover:text-white transition">
                  Membership
                </Link>
              </li>
              <li>
                <a href="#impact" className="hover:text-white transition">
                  Charity Run
                </a>
              </li>
            </ul>
          </div>
          <div className="md:ml-auto">
            <h3 className="text-white font-bold mb-4 md:mb-6 text-xs md:text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                <a href="#phone" className="hover:text-white transition">
                  (281) 536-5498
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                <a href="#email" className="hover:text-white transition break-all">
                  services@silverheartcare.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                <a href="#location" className="hover:text-white transition">
                  Sugar Land, TX
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
            <div className="flex items-center gap-3 w-full justify-center">
              <span className="text-xs md:text-sm text-center">
                © {currentYear} Silver Heart Care. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
