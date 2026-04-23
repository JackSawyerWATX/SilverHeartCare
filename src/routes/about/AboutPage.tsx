import { NavBar } from "../../app/components/Header";
import { About } from "../../app/components/About";
import { Footer } from "../../app/components/Footer";

export default function AboutPage() {
  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div className="min-h-screen bg-white">
        <NavBar />
        <About />
        <Footer />
      </div>
    </>
  );
}
