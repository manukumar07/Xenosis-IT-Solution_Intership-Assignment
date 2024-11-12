import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="p-6 bg-[#F9FAFB] rounded-lg shadow-lg mb-6">
      <h3 className="text-2xl font-semibold text-[#1E3A8A] font-roboto">
        {job.jobTitle}
      </h3>
      <p className="text-xl text-[#111827] font-openSans">{job.company}</p>
      <p className="text-md text-[#F59E0B] font-lato font-semibold">
        {job.location}
      </p>
      <p className="text-md text-[#111827] mt-4 font-openSans">
        {job.description}
      </p>

      {/* Button Section */}
      <div className="mt-4 flex justify-between space-x-4">
        <Link to="/jobs">
          <button className="px-4 py-2 bg-[#1E3A8A] text-white rounded-md">
            View more
          </button>
        </Link>
        <Link to="/application">
          <button className="px-4 py-2 bg-[#22C55E] text-white rounded-md">
            Apply
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
