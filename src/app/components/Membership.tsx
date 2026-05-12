/**
 * Membership Component
 * Single Responsibility: Display membership information and sign-up opportunities
 * Matches the design and styling of other pages (About, Contact)
 */

import { Link } from "react-router";
import BrookdalePhoto from "../../imports/Brookdale.jpg";
import RaceDay from "../../imports/12_5RaceDay.jpg";
import CanDrive from "../../imports/1YearCanDrive.jpg"

const SECTION_BACKGROUND = "linear-gradient(to bottom, #d1d5db 0%, #d1d5db 10%, #f3f4f6 20%, #f3f4f6 100%)";

const PAGE_TITLE_STYLES = {
  fontFamily: "Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif",
  color: "#3b82f6",
  borderBottom: "4px solid #3b82f6",
  paddingBottom: "8px",
};

export function Membership() {
  return (
    <section style={{ background: SECTION_BACKGROUND }} className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
        <div className="mb-16">
          <h1
            className="text-5xl md:text-6xl font-bold mb-8 inline-block"
            style={PAGE_TITLE_STYLES}
          >
            Membership
          </h1>
        </div>

        {/* Main Heading */}
        <h3 className="text-3xl font-bold text-gray-800 mb-8">
          Join Silver Heart Care to make a positive impact in your community!
        </h3>

        {/* Description */}
        <p className="text-gray-700 text-lg leading-relaxed mb-12">
          Every year, the Silver Heart Care director team appoints student leaders to serve as officers
          in the Silver Heart Care Youth Volunteer Member Chapter. These students exhibit traits such as
          leadership, integrity, and a passion for philanthropy.
          <br />
          <br />
          All youth volunteer members must be enrolled in middle or high school.
          <br />
          <br />
          Positions we are searching for: Secretary, Social Media Manager, Volunteer Coordinator
        </p>

        {/* Sign Up Button */}
        <div className="mb-16">
          <Link
            to="/membership-signup"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up for Membership
          </Link>
        </div>

        {/* Photos Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Member Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Photo 1 */}
            <div>
              <img src={BrookdalePhoto} alt="Brookdale Member Photo" className="h-80 rounded-lg object-cover w-full" loading="lazy" />
              <p className="text-gray-700 text-center font-semibold mt-3">Volunteers at Brookdale Senior Living.</p>
            </div>
            {/* Photo 2 */}
            <div>
              <img src={RaceDay} alt="Charity Run Photo" className="h-80 rounded-lg object-cover w-full" loading="lazy" />
              <p className="text-gray-700 text-center font-semibold mt-3">Charity Run</p>
            </div>
            {/* Photo 3 */}
            <div>
              <img src={CanDrive} alt="Food Drive Photo" className="h-80 rounded-lg object-cover w-full" loading="lazy" />
              <p className="text-gray-700 text-center font-semibold mt-3">Non perishable goods food drive</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Membership;
