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
        <div className="absolute top-0 left-0 right-0 backdrop-blur-sm bg-white/20 h-[100px] flex items-center justify-center">
          <h2
            className="text-center text-5xl font-bold text-white italic"
            style={{ textShadow: "-3px 4px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Proudly serving the Greater Houston area since 2020
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Statistics */}
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-blue-900 mb-2">
                1,000+
              </div>
              <div className="text-gray-600 text-md uppercase tracking-wide">
                rides
                <br />
                booked
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-900 mb-2">
                5+
              </div>
              <div className="text-gray-600 text-md uppercase tracking-wide">
                years of
                <br />
                service
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-900 mb-2">
                6
              </div>
              <div className="text-gray-600 text-md uppercase tracking-wide">
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
