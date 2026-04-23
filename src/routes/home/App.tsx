import { NavBar } from "../../app/components/Header";
import { Hero } from "../../app/components/Hero";
import { RequestButtons } from "../../app/components/RequestButtons";
import { TeamPhoto } from "../../app/components/TeamPhoto";
import { Footer } from "../../app/components/Footer";

export default function App() {
  return (
    <>
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
