const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search for jobs..."
        className="w-full px-4 py-2 border border-[#9CA3AF] rounded-full focus:outline-none focus:ring-2 focus:ring-primary font-roboto bg-[#F9FAFB] text-[#111827]"
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 px-4 py-2 bg-[#1E3A8A] text-white rounded-full flex items-center justify-center font-semibold font-roboto"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
