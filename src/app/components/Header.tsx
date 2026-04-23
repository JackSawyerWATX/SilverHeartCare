import { Menu } from "lucide-react";
import { Link } from "react-router";
import logo from "../../imports/shcLogo.jpg";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={logo}
              alt="Silver Recruit Care Logo"
              className="h-24 w-auto relative z-10"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-10 text-lg">
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-900 font-medium"
          >
            ABOUT
          </Link>
          <a
            href="#request"
            className="text-gray-700 hover:text-blue-900 font-medium"
          >
            REQUEST A SERVICE
          </a>
          <a
            href="#quality"
            className="text-gray-700 hover:text-blue-900 font-medium"
          >
            QUALITY
          </a>
          <a
            href="#membership"
            className="text-gray-700 hover:text-blue-900 font-medium"
          >
            MEMBERSHIP
          </a>
        </nav>
        <button className="md:hidden">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </header>
  );
}
