import { Header } from "./components/Header";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

export default function AboutPage() {
  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div className="min-h-screen bg-white">
        <Header />
        <About />
        <Footer />
      </div>
    </>
  );
}
