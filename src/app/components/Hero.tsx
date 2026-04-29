import gettingARide from "../../imports/GettingARide.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative"
      style={{
        background:
          "linear-gradient(to bottom, #d1d5db 0%, #d1d5db 10%, #f3f4f6 20%, #f3f4f6 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col justify-center h-full min-h-[450px] relative z-20">
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight"
            style={{
              fontFamily:
                "Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif",
              textShadow: "-3px 4px 4px rgba(0, 0, 0, 0.3)",
            }}
          >
            <span
              className="text-gray-500 text-6xl"
              style={{
                WebkitTextFillColor: "transparent",
                WebkitTextStroke: "2px #8A8A8A",
                paintOrder: "stroke",
                display: "block",
                marginBottom: "15px",
              }}
            >
              SILVER HEART CARE
            </span>
            <span className="text-blue-500 text-6xl">IS COMPASSIONATE CARE</span>
          </h1>
        </div>
        {/* Glass Frame */}
        <div
          className="absolute bottom-0 right-0 w-[870px] h-[620px] backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl z-0"
          style={{ borderTopLeftRadius: "11rem" }}
        ></div>

        {/* Image */}
        <div className="absolute bottom-0 right-0 w-[750px] h-[500px] z-10">
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
        <div className="absolute bottom-0 left-0 right-0 bg-blue-900/75 py-7 z-30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-white text-lg leading-relaxed max-w-3xl">
                <p>
                  Our primary goal is to support seniors
                  with care that they need.
                </p>
                <p>
                  Your generosity will help enrich the lives
                  of integral members of our community
                  community.
                </p>
              </div>
              <button className="px-10 py-4 bg-yellow-400 text-blue-900 font-bold rounded-md border-2 border-transparent hover:bg-blue-900 hover:text-yellow-400 hover:border-yellow-400 transition text-lg whitespace-nowrap">
                DONATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
