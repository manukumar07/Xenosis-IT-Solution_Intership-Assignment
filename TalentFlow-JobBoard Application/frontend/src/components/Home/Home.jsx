import HeroSection from "../../pages/HeroSection";
import HowItWorks from "../../pages/HowItWorks";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import JobList from "../../jobs/JobList";

const Home = () => {
  return (
    <>
      <HeroSection />
      <JobList />
      <HowItWorks />
      <About />
      <Contact />
    </>
  );
};

export default Home;
