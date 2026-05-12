import { NavBar } from "../../app/components/Header";
import { Footer } from "../../app/components/Footer";
import { Gallery } from "../../app/components/Gallery";
import SEO from "@/components/SEO";
import { SEO_METADATA } from "@/utils/seoMetadata";

// Import volunteer photos
import volunteer1 from "../../imports/Volunteering/volunteer1.jpg";
import volunteer2 from "../../imports/Volunteering/volunteer2.jpg";
import volunteer3 from "../../imports/Volunteering/volunteer3.jpg";
import volunteer4 from "../../imports/Volunteering/volunteer4.jpg";
import volunteer5 from "../../imports/Volunteering/volunteer5.jpg";
import volunteer6 from "../../imports/Volunteering/volunteer6.jpg";

// Import CharityRun24 photos
import run24_1 from "../../imports/CharityRun24/Run24_1.jpg";
import run24_2 from "../../imports/CharityRun24/Run24_2.jpg";
import run24_3 from "../../imports/CharityRun24/Run24_3.jpg";
import run24_4 from "../../imports/CharityRun24/Run24_4.jpg";
import run24_5 from "../../imports/CharityRun24/Run24_5.jpg";
import run24_6 from "../../imports/CharityRun24/Run24_6.jpg";

// Import FifthAnniversaryCelebration photos
import ann_1 from "../../imports/FifthAnniversaryCelebration/5Ann_1.jpg";
import ann_2 from "../../imports/FifthAnniversaryCelebration/5Ann_2.jpg";
import ann_3 from "../../imports/FifthAnniversaryCelebration/5Ann_3.jpg";
import ann_4 from "../../imports/FifthAnniversaryCelebration/5Ann_4.jpg";
import ann_5 from "../../imports/FifthAnniversaryCelebration/5Ann_5.jpg";
import ann_6 from "../../imports/FifthAnniversaryCelebration/5Ann_6.jpg";

// Import CharityRun25 photos
import run25_1 from "../../imports/CharityRun25/Run25_1.jpg";
import run25_2 from "../../imports/CharityRun25/Run25_2.jpg";
import run25_3 from "../../imports/CharityRun25/Run25_3.jpg";
import run25_4 from "../../imports/CharityRun25/Run25_4.jpg";
import run25_5 from "../../imports/CharityRun25/Run25_5.jpg";
import run25_6 from "../../imports/CharityRun25/Run25_6.jpg";

export default function GalleryPage() {
  const volunteerSlides = [1, 2, 3, 4, 5, 6];
  const charityRunSlides = [1, 2, 3, 4, 5, 6];
  const anniversarySlides = [1, 2, 3, 4, 5, 6];
  const charityRun25Slides = [1, 2, 3, 4, 5, 6];
  
  // Map volunteer photos
  const volunteerPhotos = [volunteer1, volunteer2, volunteer3, volunteer4, volunteer5, volunteer6];
  
  // Map CharityRun24 photos
  const charityRunPhotos = [run24_1, run24_2, run24_3, run24_4, run24_5, run24_6];
  
  // Map FifthAnniversaryCelebration photos
  const anniversaryPhotos = [ann_1, ann_2, ann_3, ann_4, ann_5, ann_6];
  
  // Map CharityRun25 photos
  const charityRun25Photos = [run25_1, run25_2, run25_3, run25_4, run25_5, run25_6];
  
  // Function to get volunteer image source
  const getVolunteerImageSrc = (index: number) => {
    return volunteerPhotos[index] || volunteerPhotos[0];
  };
  
  // Function to get CharityRun24 image source
  const getCharityRunImageSrc = (index: number) => {
    return charityRunPhotos[index] || charityRunPhotos[0];
  };
  
  // Function to get FifthAnniversaryCelebration image source
  const getAnniversaryImageSrc = (index: number) => {
    return anniversaryPhotos[index] || anniversaryPhotos[0];
  };
  
  // Function to get CharityRun25 image source
  const getCharityRun25ImageSrc = (index: number) => {
    return charityRun25Photos[index] || charityRun25Photos[0];
  };

  return (
    <>
      <SEO metadata={SEO_METADATA.gallery} />
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
            <h3 className="text-xl text-gray-600">
              Explore our photo gallery showcasing our community, events, and the wonderful moments we share at Silver Heart Care.
            </h3>
          </div>

          {/* Community Events */}
          <div className="mb-16">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Volunteers</h2>
              <p className="text-gray-600">
                Our volunteers helping clean up after Hurricane Beryl in 2024.
              </p>
            </div>
            <Gallery slides={volunteerSlides} options={{ loop: true, dragFree: false }} getImageSrc={getVolunteerImageSrc} />
          </div>

          {/* Wellness Programs */}
          <div className="mb-16">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">3rd Annual Charity 5K</h2>
              <p className="text-gray-600">
                Photos from Silver Heart Care's Third Annual Charity 5K at Lost Creek Park in Sugar Land, Texas.
              </p>
            </div>
            <Gallery slides={charityRunSlides} options={{ loop: true, dragFree: false }} getImageSrc={getCharityRunImageSrc} />
          </div>

          {/* Facility Tours */}
          <div className="mb-16">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Silver Heart Care's Fifth Anniversary Celebration</h2>
              <p className="text-gray-600">
                Photos from the celebration held at the Fort Bend County Chamber of Commerce.
              </p>
            </div>
            <Gallery slides={anniversarySlides} options={{ loop: true, dragFree: false }} getImageSrc={getAnniversaryImageSrc} />
          </div>

          {/* Member Highlights */}
          <div className="mb-16">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">4th Annual Charity 5K</h2>
              <p className="text-gray-600">
                Photos from Silver Heart Care's Fourth Annual Charity 5K at Memorial Park in Sugar Land, Texas in 2025.
              </p>
            </div>
            <Gallery slides={charityRun25Slides} options={{ loop: true, dragFree: false }} getImageSrc={getCharityRun25ImageSrc} />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
          </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
