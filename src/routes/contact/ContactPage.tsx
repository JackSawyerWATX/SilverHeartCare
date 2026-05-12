import { NavBar } from "../../app/components/Header";
import { Contact } from "../../app/components/Contact";
import { Footer } from "../../app/components/Footer";
import { Toaster } from "sonner";
import SEO from "@/components/SEO";
import { SEO_METADATA } from "@/utils/seoMetadata";

export default function ContactPage() {
  return (
    <>
      <SEO metadata={SEO_METADATA.contact} />
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <Toaster />
      <div
        className="min-h-screen"
        style={{
          background: "#f3f4f6",
        }}
      >
        <NavBar />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
