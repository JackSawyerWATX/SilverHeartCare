/**
 * MembershipPage Component
 * Single Responsibility: Page wrapper for membership content
 * Handles routing and page-level concerns
 */

import { NavBar } from "../../app/components/Header";
import { Membership } from "../../app/components/Membership";
import { Footer } from "../../app/components/Footer";

export default function MembershipPage() {
  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div className="min-h-screen bg-white">
        <NavBar />
        <Membership />
        <Footer />
      </div>
    </>
  );
}
