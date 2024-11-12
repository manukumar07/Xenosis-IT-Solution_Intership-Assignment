import SearchBar from "../components/SearchBar";

const HeroSection = () => {
  return (
    <div className="text-center px-4 py-6 md:py-12">
      <div className="flex flex-col gap-3 my-8">
        <span className="mx-auto px-3 py-1 rounded-full font-medium bg-[#F9FAFB] text-[#F59E0B]">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-2xl md:text-2xl font-lato font-medium text-[#1E3A8A]">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#F59E0B]">Dream Jobs</span>
        </h1>
        <p className="text-base md:text-lg font-Lato text-[#111827]">
          Our platform offers a seamless experience to connect professionals
          with leading companies. Explore, apply, and advance your career with
          ease.
        </p>
        <div className="flex justify-center mt-4">
          <div className="relative w-96 max-w-md">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
