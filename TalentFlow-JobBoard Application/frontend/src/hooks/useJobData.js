import { useState, useEffect } from "react";
import JobData from "../assets/JobData";

const useJobData = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      try {
        setJobs(JobData);
        setLoading(false);
      } catch {
        setError("Error fetching data");
        setLoading(false);
      }
    }, 1000);
  }, []);

  return { jobs, loading, error };
};

export default useJobData;
