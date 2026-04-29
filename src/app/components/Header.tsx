import { Menu, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useState } from "react";
import logo from "../../imports/shcLogo.jpg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function NavBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-0 flex items-center justify-between h-24">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={logo}
              alt="Silver Recruit Care Logo"
              className="h-24 w-auto relative z-10"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center justify-center gap-10 text-lg h-24">
          <div className="flex items-center gap-1">
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-900 font-medium"
            >
              ABOUT
            </Link>
            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger 
                className="inline-flex items-center justify-center p-1 text-gray-700 hover:text-blue-900 font-medium cursor-pointer focus:outline-none"
                onMouseOver={() => setOpen(true)}
              >
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link to="/team" className="cursor-pointer">
                    SHC Team
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/contact" className="cursor-pointer">
                    Contact
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <button
            onClick={() => navigate("/service-request")}
            className="text-xl hover:text-blue-900 font-semibold cursor-pointer text-gray-700"
          >
            REQUEST A SERVICE
          </button>
          <a
            href="#quality"
            className="text-gray-700 hover:text-blue-900 font-medium"
          >
            CHARITY RUN
          </a>
          <Link
            to="/membership"
            className="text-gray-700 hover:text-blue-900 font-medium"
          >
            MEMBERSHIP
          </Link>
        </nav>
        <button className="md:hidden focus:outline-none">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </header>
  );
}
