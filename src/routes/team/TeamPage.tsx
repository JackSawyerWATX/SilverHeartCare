import { NavBar } from "../../app/components/Header";
import { Team } from "../../app/components/Team";
import { Footer } from "../../app/components/Footer";

export default function TeamPage() {
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
        <Team />
        <Footer />
      </div>
    </>
  );
}
