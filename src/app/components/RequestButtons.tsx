import { useNavigate } from "react-router";
import wheelsOfWellness from "../../imports/WheelsOfWellness.png";
import shcValues from "../../imports/SHC_Values.png";
import seniorGettingRide from "../../imports/seniorGettingRide.jpg";

export function RequestButtons() {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-200 relative min-h-[500px] md:min-h-[560px]">
      {/* Glass Frame */}
      <div
        className="hidden md:block absolute top-0 right-0 w-[400px] h-[350px] md:w-[600px] md:h-[450px] lg:w-[870px] lg:h-[560px] backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl z-0"
        style={{
          borderBottomLeftRadius: "11rem",
        }}
      ></div>

      {/* Senior Getting Ride Image - Top Right */}
      <div className="hidden md:block absolute top-0 right-0 w-[300px] h-[250px] md:w-[450px] md:h-[350px] lg:w-[750px] lg:h-[500px] z-10">
        <img
          src={seniorGettingRide}
          alt="Senior getting a ride"
          className="w-full h-full object-cover shadow-lg"
          style={{ borderBottomLeftRadius: "9rem" }}
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[500px] md:h-[560px] flex items-center justify-center md:justify-start py-16 md:py-0">
        <div className="flex flex-col gap-8 w-full md:max-w-[50%]">
          <div className="flex flex-col sm:flex-row justify-center md:justify-start flex-wrap gap-8 sm:gap-10 md:gap-12">
            <div className="flex flex-col items-center gap-4 flex-1 min-w-[140px] max-w-[210px]">
              <button
                onClick={() => navigate("/ride-request")}
                className="px-5 sm:px-6 py-2 sm:py-3 border-2 border-blue-900 text-blue-900 rounded-full font-medium hover:bg-blue-900 hover:text-white transition text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                Request a Ride
              </button>
              <img
                src={wheelsOfWellness}
                alt="Wheels of Wellness"
                className="w-[155px] sm:w-[182px] md:w-[286px] h-auto"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-center gap-4 flex-1 min-w-[140px] max-w-[210px] ml-[41px] sm:ml-[49px] md:ml-0">
              <button
                onClick={() => navigate("/service-request")}
                className="px-5 sm:px-6 py-2 sm:py-3 border-2 border-blue-900 text-blue-900 rounded-full font-medium hover:bg-blue-900 hover:text-white transition text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                Request a Service
              </button>
              <img
                src={shcValues}
                alt="SHC Values"
                className="w-[155px] sm:w-[182px] md:w-[286px] h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
