import { createContext, useState, useEffect } from "react";

export const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  // Load activities from local storage when the component mounts
  useEffect(() => {
    const storedActivities =
      JSON.parse(localStorage.getItem("activities")) || [];
    setActivities(storedActivities);
  }, []);

  // Save activities to local storage
  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  // Function to add a new activity
  const addActivity = (activity) => {
    setActivities((prevActivities) => [...prevActivities, activity]);
  };

  return (
    <ActivityContext.Provider value={{ activities, addActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};
