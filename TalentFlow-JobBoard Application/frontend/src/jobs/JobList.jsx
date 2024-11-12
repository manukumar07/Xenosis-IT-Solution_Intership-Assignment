import { useState } from "react";
import JobCard from "./JobCard";
import useJobData from "../hooks/useJobData";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

const JobList = () => {
  const { jobs, loading, error } = useJobData();
  const [currentPage, setCurrentPage] = useState(0);
  const jobsPerPage = 6;

  if (loading) return <Loader />;
  if (error) return <p>Error fetching data: {error}</p>;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfFirstJob = currentPage * jobsPerPage;
  const currentJobs = jobs.slice(
    indexOfFirstJob,
    indexOfFirstJob + jobsPerPage
  );

  return (
    <div className="max-w-7xl mx-auto py-12 bg-[#F9FAFB] ">
      <h2 className="text-4xl font-lato font-bold text-[#1E3A8A] text-center mb-6">
        Latest Job Opening
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {currentJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      {/* Pagination Component */}
      <Pagination
        jobs={jobs}
        jobsPerPage={jobsPerPage}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default JobList;
