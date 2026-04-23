import { NavBar } from "../../app/components/Header";
import { Team } from "../../app/components/Team";
import { Footer } from "../../app/components/Footer";

export default function TeamPage() {
  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <div className="min-h-screen bg-white">
        <NavBar />
        <Team />
        <Footer />
      </div>
    </>
  );
}
