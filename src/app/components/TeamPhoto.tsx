import teamPhoto from "../../imports/IMG_4389(cropped)-1.jpg";

export function TeamPhoto() {
  return (
    <section className="bg-gray-200">
      <div className="relative">
        <img
          src={teamPhoto}
          alt="Silver Heart Care team photo"
          className="w-full h-auto object-contain"
          loading="lazy"
        />
        <div className="absolute top-0 left-0 right-0 backdrop-blur-sm bg-black/40 min-h-[80px] md:h-[100px] flex items-center justify-center px-4 py-3">
          <h2
            className="text-center text-lg sm:text-3xl md:text-5xl font-bold text-white italic leading-tight"
            style={{ textShadow: "-3px 4px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Proudly serving the Greater Houston area since 2020
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                1,000+
              </div>
              <div className="text-gray-600 text-xs sm:text-sm uppercase tracking-wide">
                rides
                <br />
                booked
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                5+
              </div>
              <div className="text-gray-600 text-xs sm:text-sm uppercase tracking-wide">
                years of
                <br />
                service
              </div>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                6
              </div>
              <div className="text-gray-600 text-xs sm:text-sm uppercase tracking-wide">
                charity
                <br />
                runs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
