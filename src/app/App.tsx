import { NavBar } from "./components/Header";
import { Hero } from "./components/Hero";
import { RequestButtons } from "./components/RequestButtons";
import { TeamPhoto } from "./components/TeamPhoto";
import { Footer } from "./components/Footer";
import SEO from "@/components/SEO";
import { SEO_METADATA, generateOrganizationSchema } from "@/utils/seoMetadata";

export default function App() {
  return (
    <>
      <SEO 
        metadata={SEO_METADATA.home}
        structuredData={generateOrganizationSchema()}
      />
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div className="min-h-screen bg-white">
        <NavBar />
        <Hero />
        <RequestButtons />
        <TeamPhoto />
        <Footer />
      </div>
    </>
  );
}