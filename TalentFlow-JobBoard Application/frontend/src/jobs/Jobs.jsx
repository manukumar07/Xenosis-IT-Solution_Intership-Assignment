import { useState, useMemo } from "react";
import FilterCard from "../components/FilterCard";
import JobCard from "./JobCard";
import useJobData from "../hooks/useJobData";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

const Jobs = () => {
  const [searchedQuery, setSearchedQuery] = useState("");
  const { jobs, loading, error } = useJobData();
  const [currentPage, setCurrentPage] = useState(0);
  const jobsPerPage = 9;

  // States for filter selections
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");

  // Memoizing filtered jobs to prevent recalculating on every render
  const filteredJobs = useMemo(() => {
    return (
      jobs?.filter(
        (job) =>
          (searchedQuery === "" ||
            job.jobTitle.toLowerCase().includes(searchedQuery.toLowerCase()) ||
            job.description
              .toLowerCase()
              .includes(searchedQuery.toLowerCase()) ||
            job.location.toLowerCase().includes(searchedQuery.toLowerCase())) &&
          (locationFilter === "" ||
            job.location.toLowerCase() === locationFilter.toLowerCase()) &&
          (jobTypeFilter === "" ||
            job.jobType.toLowerCase() === jobTypeFilter.toLowerCase()) &&
          (companyFilter === "" ||
            job.company.toLowerCase().includes(companyFilter.toLowerCase()))
      ) || []
    );
  }, [jobs, searchedQuery, locationFilter, jobTypeFilter, companyFilter]);

  // Pagination logic
  const indexOfFirstJob = currentPage * jobsPerPage;
  const currentJobs = filteredJobs.slice(
    indexOfFirstJob,
    indexOfFirstJob + jobsPerPage
  );

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected); // Set current page on pagination change
  };

  // Loading or error states
  if (loading) return <Loader />;
  if (error) return <div>Error loading jobs</div>;

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          <div className="w-full md:w-1/4">
            <FilterCard
              setSearchedQuery={setSearchedQuery}
              setLocationFilter={setLocationFilter}
              setJobTypeFilter={setJobTypeFilter}
              setCompanyFilter={setCompanyFilter}
            />

            {/* Pass filter functions to FilterCard */}
          </div>
          <div className="w-full md:w-3/4">
            {filteredJobs.length === 0 ? (
              <span className="text-center block text-lg text-[#111827]">
                No jobs found
              </span>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {currentJobs.map((job) => (
                  <div key={job.id}>
                    <JobCard job={job} />
                  </div>
                ))}
              </div>
            )}
            <Pagination
              jobs={filteredJobs}
              jobsPerPage={jobsPerPage}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
