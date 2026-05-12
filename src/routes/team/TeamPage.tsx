import { NavBar } from "../../app/components/Header";
import { Team } from "../../app/components/Team";
import { Footer } from "../../app/components/Footer";
import SEO from "@/components/SEO";
import { SEO_METADATA } from "@/utils/seoMetadata";

export default function TeamPage() {
  return (
    <>
      <SEO metadata={SEO_METADATA.team} />
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div
        className="min-h-screen"
        style={{
          background: "#f3f4f6",
        }}
      >
        <NavBar />
        <Team />
        <Footer />
      </div>
    </>
  );
}
