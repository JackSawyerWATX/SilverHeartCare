export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-md flex items-center justify-center">
                <span className="text-white text-xs font-bold">SRC</span>
              </div>
              <h3 className="text-white font-bold text-md uppercase tracking-wider">
                Silver Heart Care
              </h3>
            </div>
              <a href="#home" className="hover:text-white transition">
                Dedicated to providing compassionate care for seniors. 
                Our mission is to enhance the quality of life through personalized support services.
              </a>
            <div className="flex gap-4 p-4">
              <a
                href="#facebook"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
              >
                <span className="font-bold">f</span>
              </a>
              <a
                href="#twitter"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-400 transition"
              >
                <span className="font-bold">𝕏</span>
              </a>
              <a
                href="#linkedin"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-700 transition"
              >
                <span className="font-bold text-xs">in</span>
              </a>
            </div>
          </div>
          <div className="md:ml-auto">
            <h3 className="text-white font-bold mb-6 text-md uppercase tracking-wider">
              About Us
            </h3>
            <ul className="space-y-3 text-md">
              <li>
                <a href="#mission" className="hover:text-white transition">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition">
                  Membership
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-white transition">
                  Charity Run
                </a>
              </li>
            </ul>
          </div>
          <div className="md:ml-auto">
            <h3 className="text-white font-bold mb-6 text-md uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3 text-md">
              <li>
                <a href="#faq" className="hover:text-white transition">
                  (281) 536-5498
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition">
                  services@silverheartcare.org
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition">
                  Sugar Land, TX
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 w-full justify-center">
              <span className="text-md">
                © {currentYear} Silver Recruit Care. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
