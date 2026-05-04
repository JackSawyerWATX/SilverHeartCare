/**
 * MembershipPage Component
 * Single Responsibility: Page wrapper for membership content
 * Handles routing and page-level concerns
 */

import { NavBar } from "../../app/components/Header";
import { Membership } from "../../app/components/Membership";
import { Footer } from "../../app/components/Footer";
import SEO from "@/components/SEO";
import { SEO_METADATA } from "@/utils/seoMetadata";

export default function MembershipPage() {
  return (
    <>
      <SEO metadata={SEO_METADATA.membership} />
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div
        className="min-h-screen"
        style={{
          background: "linear-gradient(to bottom, #d1d5db 0%, #d1d5db 10%, #f3f4f6 20%, #f3f4f6 100%)",
        }}
      >
        <NavBar />
        <Membership />
        <Footer />
      </div>
    </>
  );
}
