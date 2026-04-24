import { NavBar } from "../../app/components/Header";
import { Contact } from "../../app/components/Contact";
import { Footer } from "../../app/components/Footer";

export default function ContactPage() {
  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div className="min-h-screen bg-white">
        <NavBar />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
