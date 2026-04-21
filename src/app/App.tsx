import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { RequestButtons } from "./components/RequestButtons";
import { TeamPhoto } from "./components/TeamPhoto";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <RequestButtons />
        <TeamPhoto />
        <Footer />
      </div>
    </>
  );
}