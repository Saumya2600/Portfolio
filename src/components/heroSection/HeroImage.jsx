import { PiHexagonThin } from "react-icons/pi";

const HeroImage = () => {
  return (
    <div className="relative self-end h-[800px] w-full flex items-center justify-center">
      <div className="relative h-full w-full flex items-center justify-center">
        {/* Circular Image Container with Light White Background */}
        <div className="relative w-[380px] h-[380px] md:w-[570px] md:h-[570px] rounded-full overflow-hidden z-10 border-4 border-orange bg-white bg-opacity-50">
          <img
            src="/images/me.png"
            alt="Saumya Shah"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        {/* Hexagon Background Elements */}
        <div className="w-full h-full absolute bottom-[-20%] -z-10 flex justify-center items-center rotate-90">
          <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-orange opacity-70 animate-[spin_20s_linear_infinite]" />
        </div>
        <div className="w-full h-full absolute bottom-[-20%] -z-10 flex justify-center items-center rotate-90">
          <PiHexagonThin className="md:h-[90%] sm:h-[120%] blur-lg min-h-[600px] w-auto text-orange opacity-70 animate-[spin_20s_linear_infinite]" />
        </div>
        <div className="w-full h-full absolute bottom-[-20%] -z-10 flex justify-center items-center">
          <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan opacity-70 animate-[spin_20s_linear_infinite]" />
        </div>
        <div className="w-full h-full absolute bottom-[-20%] -z-10 flex justify-center items-center">
          <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan opacity-70 blur-lg animate-[spin_20s_linear_infinite]" />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;