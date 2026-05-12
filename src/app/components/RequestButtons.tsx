import { useNavigate } from "react-router";
import wheelsOfWellness from "../../imports/WheelsOfWellness.png";
import shcValues from "../../imports/SHC_Values.png";
import seniorGettingRide from "../../imports/seniorGettingRide.jpg";

export function RequestButtons() {
  const navigate = useNavigate();
  return (
    <section className="bg-gray-200 relative min-h-[400px] sm:min-h-[500px] md:min-h-[560px] lg:min-h-[600px]">
      {/* Glass Frame */}
      <div
        className="hidden md:block absolute top-0 right-0 w-[250px] h-[250px] sm:w-[400px] sm:h-[350px] md:w-[600px] md:h-[450px] lg:w-[870px] lg:h-[560px] backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl z-0"
        style={{
          borderBottomLeftRadius: "11rem",
        }}
      ></div>

      {/* Senior Getting Ride Image - Top Right */}
      <div className="hidden md:block absolute top-0 right-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[250px] md:w-[450px] md:h-[350px] lg:w-[750px] lg:h-[500px] z-10">
        <img
          src={seniorGettingRide}
          alt="Senior getting a ride"
          className="w-full h-full object-cover shadow-lg"
          style={{ borderBottomLeftRadius: "9rem" }}
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 min-h-[400px] sm:min-h-[500px] md:h-[560px] flex items-center justify-center md:justify-start py-12 sm:py-16 md:py-0">
        <div className="flex flex-col gap-6 sm:gap-8 w-full lg:w-auto">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start flex-wrap gap-12 sm:gap-16 md:gap-20 lg:gap-24">
            <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 flex-1 lg:flex-none min-w-[150px] sm:min-w-[180px] md:min-w-[220px] max-w-[250px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px]">
              <button
                onClick={() => navigate("/ride-request")}
                className="relative z-20 px-3 sm:px-5 md:px-6 py-1 sm:py-2 md:py-3 border-2 border-blue-900 text-blue-900 rounded-full font-medium hover:bg-blue-900 hover:text-white transition text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                Request a Ride
              </button>
              <img
                src={wheelsOfWellness}
                alt="Wheels of Wellness"
                className="relative z-20 w-[78px] sm:w-[97px] md:w-[145px] lg:w-[194px] h-[68px] sm:h-[85px] md:h-[128px] lg:h-[170px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 flex-1 lg:flex-none min-w-[150px] sm:min-w-[180px] md:min-w-[220px] max-w-[250px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px]">
              <button
                onClick={() => navigate("/service-request")}
                className="relative z-20 px-3 sm:px-5 md:px-6 py-1 sm:py-2 md:py-3 border-2 border-blue-900 text-blue-900 rounded-full font-medium hover:bg-blue-900 hover:text-white transition text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                Request a Service
              </button>
              <img
                src={shcValues}
                alt="SHC Values"
                className="relative z-20 w-[69px] sm:w-[87px] md:w-[130px] lg:w-[173px] h-[68px] sm:h-[85px] md:h-[128px] lg:h-[170px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
