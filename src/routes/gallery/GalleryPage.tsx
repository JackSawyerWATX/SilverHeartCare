import { NavBar } from "../../app/components/Header";
import { Footer } from "../../app/components/Footer";
import { Gallery } from "../../app/components/Gallery";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Gallery</h1>
          <p className="text-gray-600 text-lg">
            Explore our photo gallery showcasing our community events.
          </p>
        </div>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
