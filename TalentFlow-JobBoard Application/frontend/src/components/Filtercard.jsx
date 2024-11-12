import { FaFilter } from "react-icons/fa";

const FilterCard = ({
  setSearchedQuery,
  setLocationFilter,
  setJobTypeFilter,
  setCompanyFilter,
}) => {
  // Define the data for Location, Job Type, and Company
  const locations = [
    "San Francisco, CA",
    "New York, NY",
    "Austin, TX",
    "Remote",
    "Los Angeles, CA",
  ];
  const jobTypes = ["Full-time", "Part-time", "Contract", "Intership"];
  const companies = [
    "Insight Analytics",
    "PeopleFirst",
    "SecureNet",
    "Appify",
    "WordSmiths",
  ];

  return (
    <div className="bg-[#F9FAFB] p-4 rounded shadow-lg">
      <h1 className="font-bold text-lg text-[#1E3A8A] flex items-center gap-2">
        <FaFilter className="text-[#F59E0B]" /> Filter Jobs
      </h1>
      {/* Location Filter */}
      <div className="mb-4 mt-4">
        <h4 className="block text-md font-medium mb-2 text-[#111827]">
          Location
        </h4>
        <div className="flex flex-col space-y-2">
          {locations.map((location) => (
            <label
              key={location}
              className="flex items-center space-x-2 cursor-pointer text-[#111827]"
            >
              <input
                type="radio"
                name="location"
                value={location}
                className="form-radio h-4 w-4 text-[#1E3A8A] focus:ring-[#1E3A8A] border-gray-300"
                onChange={(e) => setLocationFilter(e.target.value)}
              />
              <span>{location}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Job Type Filter */}
      <div className="mb-4">
        <h4 className="block text-md font-medium mb-2 text-[#111827]">
          Job Type
        </h4>
        <div className="flex flex-col space-y-2">
          {jobTypes.map((jobType) => (
            <label
              key={jobType}
              className="flex items-center space-x-2 cursor-pointer text-[#111827]"
            >
              <input
                type="radio"
                name="jobType"
                value={jobType}
                className="form-radio h-4 w-4 text-[#1E3A8A] focus:ring-[#1E3A8A] border-gray-300"
                onChange={(e) => setJobTypeFilter(e.target.value)}
              />
              <span>{jobType}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Company Filter */}
      <div className="mb-4">
        <h4 className="block text-md font-medium mb-2 text-[#111827]">
          Company
        </h4>
        <div className="flex flex-col space-y-2">
          {companies.map((company) => (
            <label
              key={company}
              className="flex items-center space-x-2 cursor-pointer text-[#111827]"
            >
              <input
                type="radio"
                name="company"
                value={company}
                className="form-radio h-4 w-4 text-[#1E3A8A] focus:ring-[#1E3A8A] border-gray-300"
                onChange={(e) => setCompanyFilter(e.target.value)}
              />
              <span>{company}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Search by job title or description"
          onChange={(e) => setSearchedQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FilterCard;
