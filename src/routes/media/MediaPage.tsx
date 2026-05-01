/**
 * MediaPage Component
 * 
 * Single Responsibility: Orchestrate media page layout
 * Dependency Inversion: Depends on useMediaItems hook (abstraction), not direct data
 */

import { NavBar } from "../../app/components/Header";
import { Footer } from "../../app/components/Footer";
import { MediaList } from "./MediaList";
import { useMediaItems } from "./useMediaItems";

export default function MediaPage() {
  const { items, isLoading, error } = useMediaItems();

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
        <main className="w-full">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Media
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl">
                {error
                  ? "Unable to load media content."
                  : items.length === 0
                  ? "Media content coming soon."
                  : "Explore our media content."}
              </p>
            </div>

            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-lg text-gray-600">Loading media...</p>
              </div>
            ) : (
              <MediaList items={items} emptyMessage="Media content coming soon." />
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
