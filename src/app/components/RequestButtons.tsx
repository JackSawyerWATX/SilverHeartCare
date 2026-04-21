import wheelsOfWellness from "../../imports/WheelsOfWellness.png";
import shcValues from "../../imports/SHC_Values.png";
import seniorGettingRide from "../../imports/seniorGettingRide.jpg";

export function RequestButtons() {
  return (
    <section className="bg-gray-200 relative h-[560px]">
      {/* Glass Frame */}
      <div
        className="absolute top-0 right-0 w-[870px] h-[560px] backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl z-0"
        style={{
          borderBottomLeftRadius: "11rem",
        }}
      ></div>

      {/* Senior Getting Ride Image - Top Right */}
      <div className="absolute top-0 right-0 w-[750px] h-[500px] z-10">
        <img
          src={seniorGettingRide}
          alt="Senior getting a ride"
          className="w-full h-full object-cover shadow-lg"
          style={{ borderBottomLeftRadius: "9rem" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 h-[560px] flex items-center">
        <div className="flex flex-col gap-4" style={{ maxWidth: "50%" }}>
          <div className="flex flex-col md:flex-row flex-wrap gap-4">
            <div className="flex flex-col items-center gap-4">
              <button className="px-8 py-3 border-2 border-blue-900 text-blue-900 rounded-full font-medium hover:bg-blue-900 hover:text-white transition">
                Request a Ride
              </button>
              <img
                src={wheelsOfWellness}
                alt="Wheels of Wellness"
                className="w-[220px]"
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <button className="px-8 py-3 border-2 border-blue-900 text-blue-900 rounded-full font-medium hover:bg-blue-900 hover:text-white transition">
                Request a Service
              </button>
              <img
                src={shcValues}
                alt="SHC Values"
                className="w-[140px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
