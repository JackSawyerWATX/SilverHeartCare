import { NavBar } from "../../app/components/Header";
import { Footer } from "../../app/components/Footer";
import { Gallery } from "../../app/components/Gallery";

export default function GalleryPage() {
  const slides = [1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main className="w-full">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Gallery
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Explore our photo gallery showcasing our community, events, and the wonderful moments we share at Silver Heart Care.
            </p>
          </div>

          <div className="mb-16">
            <Gallery slides={slides} options={{ loop: true, dragFree: false }} />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              To add more photos to our gallery, please contact us through the{" "}
              <a href="/contact" className="text-blue-900 hover:text-blue-700 font-semibold">
                Contact Page
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
