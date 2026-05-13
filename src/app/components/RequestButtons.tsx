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
        className="hidden md:block absolute top-0 right-0 w-[380px] h-[310px] sm:w-[440px] sm:h-[350px] md:w-[480px] md:h-[380px] lg:w-[600px] lg:h-[480px] xl:w-[1000px] xl:h-[650px] backdrop-blur-sm bg-white/5 border border-white/10 shadow-2xl z-0"
        style={{
          borderBottomLeftRadius: "11rem",
        }}
      ></div>

      {/* Senior Getting Ride Image - Top Right */}
      <div className="hidden md:block absolute top-0 right-0 w-[304px] h-[304px] sm:w-[352px] sm:h-[304px] md:w-[384px] md:h-[304px] lg:w-[480px] lg:h-[380px] xl:w-[800px] xl:h-[550px] z-10">
        <img
          src={seniorGettingRide}
          alt="Senior getting a ride"
          className="w-full h-full object-cover shadow-lg"
          style={{ borderBottomLeftRadius: "9rem" }}
          loading="lazy"
        />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 min-h-[400px] sm:min-h-[500px] md:h-[560px] flex items-center justify-center md:justify-start py-12 sm:py-16 md:py-0">
        <div className="flex flex-col gap-6 sm:gap-8 w-full md:w-1/2 lg:w-[45%]">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start flex-wrap gap-12 sm:gap-16 md:gap-10 lg:gap-12">
            <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 flex-1 lg:flex-none min-w-[130px] sm:min-w-[160px] md:min-w-[130px] lg:min-w-[150px] max-w-[220px] sm:max-w-[280px] md:max-w-[240px] lg:max-w-[320px]">
              <button
                onClick={() => navigate("/ride-request")}
                className="relative z-20 px-3 sm:px-5 md:px-6 py-1 sm:py-2 md:py-3 border-2 border-blue-900 text-blue-900 rounded-full font-medium hover:bg-blue-900 hover:text-white transition text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                Request a Ride
              </button>
              <img
                src={wheelsOfWellness}
                alt="Wheels of Wellness"
                className="relative z-20 w-[60px] sm:w-[75px] md:w-[85px] lg:w-[110px] h-[52px] sm:h-[65px] md:h-[75px] lg:h-[98px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 flex-1 lg:flex-none min-w-[130px] sm:min-w-[160px] md:min-w-[130px] lg:min-w-[150px] max-w-[220px] sm:max-w-[280px] md:max-w-[240px] lg:max-w-[320px]">
              <button
                onClick={() => navigate("/service-request")}
                className="relative z-20 px-3 sm:px-5 md:px-6 py-1 sm:py-2 md:py-3 border-2 border-blue-900 text-blue-900 rounded-full font-medium hover:bg-blue-900 hover:text-white transition text-[10px] xs:text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                Request a Service
              </button>
              <img
                src={shcValues}
                alt="SHC Values"
                className="relative z-20 w-[52px] sm:w-[65px] md:w-[75px] lg:w-[100px] h-[52px] sm:h-[65px] md:h-[75px] lg:h-[98px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
