import { NavBar } from "../../app/components/Header";
import { Hero } from "../../app/components/Hero";
import { RequestButtons } from "../../app/components/RequestButtons";
import { TeamPhoto } from "../../app/components/TeamPhoto";
import { Footer } from "../../app/components/Footer";

export default function App() {
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
        <Hero />
        <RequestButtons />
        <TeamPhoto />
        <Footer />
      </div>
    </>
  );
}
