import { Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import logo from "../../imports/shcLogo.jpg";
import { useNavigation } from "@/context/NavigationContext";
import { useDropdownMenu } from "@/hooks/useDropdownMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";


// NavBar Component

export function NavBar() {
  const { navigateTo } = useNavigation();
  const aboutMenu = useDropdownMenu(false);
  const galleryMenu = useDropdownMenu(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileNavigation = (path: string) => {
    navigateTo(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-0 flex items-center justify-center md:justify-between h-24 relative">
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src={logo}
              alt="Silver Heart Care Logo"
              className="h-24 w-auto relative z-10"
              loading="lazy"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center justify-center gap-10 text-lg h-24">
          <div 
            ref={aboutMenu.containerRef}
            className="flex items-center gap-1"
            onMouseEnter={aboutMenu.cancelClose}
            onMouseLeave={aboutMenu.closeAfterDelay}
          >
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-900 font-medium"
            >
              ABOUT
            </Link>
            <DropdownMenu 
              open={aboutMenu.isOpen} 
              onOpenChange={(open) => {
                aboutMenu.setIsOpen(open);
                if (open) {
                  aboutMenu.cancelClose();
                }
              }}
            >
              <DropdownMenuTrigger 
                className="inline-flex items-center justify-center p-1 text-gray-700 hover:text-blue-900 font-medium cursor-pointer focus:outline-none"
                onMouseOver={aboutMenu.open}
              >
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                onMouseEnter={aboutMenu.cancelClose}
                onMouseLeave={aboutMenu.closeAfterDelay}
                className="min-w-[150px]"
              >
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
          <div 
            ref={galleryMenu.containerRef}
            className="flex items-center gap-1"
            onMouseEnter={galleryMenu.cancelClose}
            onMouseLeave={galleryMenu.closeAfterDelay}
          >
            <Link
              to="/gallery"
              className="text-gray-700 hover:text-blue-900 font-medium"
            >
              GALLERY
            </Link>
            <DropdownMenu 
              open={galleryMenu.isOpen} 
              onOpenChange={(open) => {
                galleryMenu.setIsOpen(open);
                if (open) {
                  galleryMenu.cancelClose();
                }
              }}
            >
              <DropdownMenuTrigger 
                className="inline-flex items-center justify-center p-1 text-gray-700 hover:text-blue-900 font-medium cursor-pointer focus:outline-none"
                onMouseOver={galleryMenu.open}
              >
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                onMouseEnter={galleryMenu.cancelClose}
                onMouseLeave={galleryMenu.closeAfterDelay}
                className="min-w-[150px]"
              >
                <DropdownMenuItem asChild>
                  <Link to="/media" className="cursor-pointer">
                    Media
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <button
            onClick={() => navigateTo("/service-request")}
            className="text-xl hover:text-blue-900 font-semibold cursor-pointer text-gray-700"
          >
            REQUEST A SERVICE
          </button>
          <a
            href="https://runsignup.com/Race/TX/SugarLand/SHCCharityRun"
            target="_blank"
            rel="noopener noreferrer"
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
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden focus:outline-none absolute right-6">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-white">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">Mobile navigation menu for Silver Heart Care website</SheetDescription>
            <nav className="flex flex-col gap-6 mt-8">
              <Link
                to="/about"
                onClick={() => handleMobileNavigation("/about")}
                className="text-gray-700 hover:text-blue-900 font-medium text-lg"
              >
                ABOUT
              </Link>
              <Link
                to="/team"
                onClick={() => handleMobileNavigation("/team")}
                className="text-gray-700 hover:text-blue-900 font-medium text-lg pl-4"
              >
                SHC Team
              </Link>
              <Link
                to="/contact"
                onClick={() => handleMobileNavigation("/contact")}
                className="text-gray-700 hover:text-blue-900 font-medium text-lg pl-4"
              >
                Contact
              </Link>
              <Link
                to="/gallery"
                onClick={() => handleMobileNavigation("/gallery")}
                className="text-gray-700 hover:text-blue-900 font-medium text-lg"
              >
                GALLERY
              </Link>
              <Link
                to="/media"
                onClick={() => handleMobileNavigation("/media")}
                className="text-gray-700 hover:text-blue-900 font-medium text-lg pl-4"
              >
                Media
              </Link>
              <button
                onClick={() => handleMobileNavigation("/service-request")}
                className="text-lg hover:text-blue-900 font-semibold text-gray-700 text-left"
              >
                REQUEST A SERVICE
              </button>
              <a
                href="https://runsignup.com/Race/TX/SugarLand/SHCCharityRun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-900 font-medium text-lg"
              >
                CHARITY RUN
              </a>
              <Link
                to="/membership"
                onClick={() => handleMobileNavigation("/membership")}
                className="text-gray-700 hover:text-blue-900 font-medium text-lg"
              >
                MEMBERSHIP
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
