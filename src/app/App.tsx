import { Menu } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import logo from "../imports/shcLogo.jpg";
import wheelsOfWellness from "../imports/WheelsOfWellness.png";
import shcValues from "../imports/SHC_Values.png";
import gettingARide from "../imports/GettingARide.jpg";
import seniorGettingRide from "../imports/seniorGettingRide.jpg";
import teamPhoto from "../imports/IMG_4389(cropped)-1.jpg";

export default function App() {
  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-6 py-1 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="#hero">
                <img
                  src={logo}
                  alt="Silver Recruit Care Logo"
                  className="h-24 w-auto relative z-10"
                />
              </a>
            </div>
            <nav className="hidden md:flex items-center gap-10 text-lg">
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-900 font-medium"
              >
                ABOUT
              </a>
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

        {/* Hero Section */}
        <section
          id="hero"
          className="relative"
          style={{
            background:
              "linear-gradient(to bottom, #d1d5db 0%, #d1d5db 10%, #f3f4f6 20%, #f3f4f6 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="flex flex-col justify-center h-full min-h-[450px] relative z-20">
              <h1
                className="text-4xl md:text-5xl font-bold leading-tight"
                style={{
                  fontFamily:
                    "Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif",
                  textShadow: "-3px 4px 4px rgba(0, 0, 0, 0.3)",
                }}
              >
                <span className="text-gray-500">
                  SILVER HEART CARE
                </span>
                <br />
                <span className="text-blue-500">
                  IS COMPASSIONATE CARE
                </span>
              </h1>
            </div>
            {/* Glass Frame */}
            <div
              className="absolute bottom-0 right-0 w-[870px] h-[620px] backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl z-0"
              style={{ borderTopLeftRadius: "11rem" }}
            ></div>

            {/* Image */}
            <div className="absolute bottom-0 right-0 w-[750px] h-[500px] z-10">
              <img
                src={gettingARide}
                alt="Senior getting a ride"
                className="w-full h-full object-cover shadow-lg"
                style={{ borderTopLeftRadius: "9rem" }}
              />
            </div>

            {/* Services Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-blue-900/75 py-7 z-30">
              <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-white text-lg leading-relaxed max-w-3xl">
                    <p>
                      Our primary goal is to support seniors
                      with care that they need.
                    </p>
                    <p>
                      Your generosity will help enrich the lives
                      of integral members of our community
                      community.
                    </p>
                  </div>
                  <button className="px-10 py-4 bg-yellow-400 text-blue-900 font-bold rounded-md border-2 border-transparent hover:bg-blue-900 hover:text-yellow-400 hover:border-yellow-400 transition text-lg whitespace-nowrap">
                    DONATE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Request Buttons Section */}
        <section className="bg-gray-200 relative h-[560px]">
          {/* Glass Frame */}
          <div
            className="absolute top-0 right-0 w-[870px] h-[560px] backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl z-0"
            style={{
              borderBottomLeftRadius: "11rem",
            }}
          ></div>

          {/* Senior Getting Ride Image - Top Right */}
          <div className="absolute top-0 right-0 w-[750px] h-[500px] z-10">
            <img
              src={seniorGettingRide}
              alt="Senior getting a ride"
              className="w-full h-full object-cover shadow-lg"
              style={{ borderBottomLeftRadius: "9rem" }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 h-[560px] flex items-center">
            <div
              className="flex flex-col gap-4"
              style={{ maxWidth: "50%" }}
            >
              <div className="flex flex-col md:flex-row flex-wrap gap-4">
                <div className="flex flex-col items-center gap-4">
                  <button className="px-8 py-3 border-2 border-blue-900 text-blue-900 rounded-full font-medium hover:bg-blue-900 hover:text-white transition">
                    Request a Ride
                  </button>
                  <img
                    src={wheelsOfWellness}
                    alt="Wheels of Wellness"
                    className="w-[220px]"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <button className="px-8 py-3 border-2 border-blue-900 text-blue-900 rounded-full font-medium hover:bg-blue-900 hover:text-white transition">
                    Request a Service
                  </button>
                  <img
                    src={shcValues}
                    alt="SHC Values"
                    className="w-[140px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Photo Section */}
        <section className="bg-gray-200">
          <div className="relative">
            <img
              src={teamPhoto}
              alt="Silver Heart Care team photo"
              className="w-full h-auto object-contain"
            />
            <div className="absolute top-0 left-0 right-0 backdrop-blur-sm bg-white/20 h-[100px] flex items-center justify-center">
              <h2 className="text-center text-5xl font-bold text-white italic" style={{ textShadow: "-3px 4px 4px rgba(0, 0, 0, 0.5)" }}>
                Proudly serving the Greater Houston area since 2020
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-center py-16">
            <div className="max-w-7xl mx-auto px-6">
              {/* Statistics */}
              <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
              <div>
                <div className="text-5xl font-bold text-blue-900 mb-2">
                  1,000+
                </div>
                <div className="text-gray-600 text-md uppercase tracking-wide">
                  rides
                  <br />
                  booked
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold text-blue-900 mb-2">
                  5+
                </div>
                <div className="text-gray-600 text-md uppercase tracking-wide">
                  years of
                  <br />
                  service
                </div>
              </div>
              <div>
                <div className="text-5xl font-bold text-blue-900 mb-2">
                  6
                </div>
                <div className="text-gray-600 text-md uppercase tracking-wide">
                  charity
                  <br />
                  runs
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <div>
                <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
                  Quick Links
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="#home"
                      className="hover:text-white transition"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="hover:text-white transition"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#services"
                      className="hover:text-white transition"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-white transition"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
                  About Us
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="#mission"
                      className="hover:text-white transition"
                    >
                      Our Mission
                    </a>
                  </li>
                  <li>
                    <a
                      href="#team"
                      className="hover:text-white transition"
                    >
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="#careers"
                      className="hover:text-white transition"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#impact"
                      className="hover:text-white transition"
                    >
                      Community Impact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">
                  Support
                </h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="#faq"
                      className="hover:text-white transition"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#privacy"
                      className="hover:text-white transition"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#terms"
                      className="hover:text-white transition"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="#resources"
                      className="hover:text-white transition"
                    >
                      Resources
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-md flex items-center justify-center">
                    <span className="text-white text-xs font-bold">
                      SRC
                    </span>
                  </div>
                  <span className="text-sm">
                    © 2026 Silver Recruit Care. All rights
                    reserved.
                  </span>
                </div>
                <div className="flex gap-4">
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
                    <span className="font-bold text-xs">
                      in
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}