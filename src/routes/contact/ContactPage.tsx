import { NavBar } from "../../app/components/Header";
import { Contact } from "../../app/components/Contact";
import { Footer } from "../../app/components/Footer";

export default function ContactPage() {
  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div
        className="min-h-screen"
        style={{
          background: "linear-gradient(to bottom, #d1d5db 0%, #d1d5db 10%, #f3f4f6 20%, #f3f4f6 100%)",
        }}
      >
        <NavBar />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
