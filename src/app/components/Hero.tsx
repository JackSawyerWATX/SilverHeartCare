import gettingARide from "../../imports/GettingARide.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative"
    >
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-16 flex">
        <div className="flex flex-col justify-center h-full min-h-[300px] md:min-h-[350px] lg:min-h-[450px] relative z-20 mb-[100px] sm:mb-[120px] md:mb-0 w-full md:w-1/2 lg:w-[45%]">
          <h1
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
            style={{
              fontFamily:
                "Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif",
            }}
          >
            <span
              className="text-blue-800 text-2xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl"
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
            <span className="text-blue-800 text-2xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl">IS COMPASSIONATE CARE</span>
          </h1>
        </div>
        
        {/* Glass Frame - Bottom Right Anchor */}
        <div
          className="hidden md:block absolute bottom-0 right-0 w-[380px] h-[310px] sm:w-[440px] sm:h-[350px] md:w-[480px] md:h-[380px] lg:w-[600px] lg:h-[480px] xl:w-[1000px] xl:h-[650px] backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl z-0"
          style={{ borderTopLeftRadius: "11rem" }}
        ></div>

        {/* Image - Bottom Right Anchor */}
        <div className="hidden md:block absolute bottom-0 right-0 w-[304px] h-[264px] sm:w-[352px] sm:h-[304px] md:w-[384px] md:h-[304px] lg:w-[480px] lg:h-[380px] xl:w-[800px] xl:h-[550px] z-10">
          <img
            src={gettingARide}
            alt="Senior getting a ride"
            className="w-full h-full object-cover shadow-lg"
            style={{ borderTopLeftRadius: "9rem" }}
            loading="lazy"
            width={500}
            height={450}
          />
        </div>

        {/* Services Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-blue-900/75 py-2 sm:py-3 md:py-4 lg:py-5 z-30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              <div className="text-white text-xs sm:text-sm md:text-base lg:text-2xl leading-relaxed w-full md:max-w-2xl">
                <p className="mb-1 sm:mb-2">
                  Our primary goal is to support seniors
                  with care that they need.
                </p>
                <p>
                  Your generosity will help enrich the lives
                  of integral members of our community
                  community.
                </p>
              </div>
              <button className="px-3 sm:px-5 md:px-6 lg:px-8 py-1 sm:py-2 md:py-2 lg:py-3 bg-yellow-400 text-blue-900 font-bold rounded-md border-2 border-transparent hover:bg-blue-900 hover:text-yellow-400 hover:border-yellow-400 transition text-xs sm:text-sm md:text-base lg:text-base whitespace-nowrap w-full sm:w-auto">
                DONATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
