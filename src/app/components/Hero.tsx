import gettingARide from "../../imports/GettingARide.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative"
    >
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-16">
        <div className="flex flex-col justify-center h-full min-h-[300px] md:min-h-[450px] relative z-20">
          <h1
            className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight"
            style={{
              fontFamily:
                "Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif",
            }}
          >
            <span
              className="text-blue-800 text-3xl sm:text-5xl md:text-6xl"
              style={{
                WebkitTextFillColor: "transparent",
                WebkitTextStroke: "2px #000080",
                paintOrder: "stroke",
                display: "block",
                marginBottom: "8px sm:mb-[15px]",
              }}
            >
              SILVER HEART CARE
            </span>
            <span className="text-blue-800 text-3xl sm:text-5xl md:text-6xl">IS COMPASSIONATE CARE</span>
          </h1>
        </div>
        {/* Glass Frame */}
        <div
          className="hidden md:block absolute bottom-0 right-0 w-[400px] h-[300px] md:w-[600px] md:h-[450px] lg:w-[870px] lg:h-[620px] backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl z-0"
          style={{ borderTopLeftRadius: "11rem" }}
        ></div>

        {/* Image */}
        <div className="absolute bottom-0 right-0 w-[300px] h-[200px] md:w-[500px] md:h-[350px] lg:w-[750px] lg:h-[500px] z-10">
          <img
            src={gettingARide}
            alt="Senior getting a ride"
            className="w-full h-full object-cover shadow-lg"
            style={{ borderTopLeftRadius: "9rem" }}
            loading="lazy"
            width={750}
            height={500}
          />
        </div>

        {/* Services Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-blue-900/75 py-4 md:py-7 z-30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
              <div className="text-white text-base sm:text-lg lg:text-2xl leading-relaxed w-full md:max-w-3xl">
                <p className="mb-2">
                  Our primary goal is to support seniors
                  with care that they need.
                </p>
                <p>
                  Your generosity will help enrich the lives
                  of integral members of our community
                  community.
                </p>
              </div>
              <button className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 bg-yellow-400 text-blue-900 font-bold rounded-md border-2 border-transparent hover:bg-blue-900 hover:text-yellow-400 hover:border-yellow-400 transition text-sm sm:text-base md:text-lg whitespace-nowrap w-full sm:w-auto">
                DONATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
