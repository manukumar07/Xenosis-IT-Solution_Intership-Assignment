import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faGlobe,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const steps = [
  {
    icon: faUserPlus,
    title: "Register",
    description:
      "Sign up for a free account and start your journey towards finding your dream job. It’s quick and easy!",
    color: "#22C55E",
  },
  {
    icon: faGlobe,
    title: "Explore Thousands of Jobs",
    description:
      "Browse through our extensive database of job listings to find opportunities that match your skills and interests.",
    color: "#22C55E",
  },
  {
    icon: faPaperPlane,
    title: "Apply",
    description:
      "Submit your application with just a few clicks and take the first step towards your new career. It’s that simple!",
    color: "#22C55E",
  },
];

const HowItWorks = () => (
  <div className="bg-[#F9FAFB] pt-4">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold pb-4 text-[#1E3A8A]">How It Works</h1>
      <p className="mt-4 text-lg text-[#111827]">
        Discover how our platform connects you to the right job opportunities.
        Follow these simple steps to get started!
      </p>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
      {steps.map(({ icon, title, description, color }, index) => (
        <div
          key={index}
          className="p-8 rounded-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl"
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)" }}
        >
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={icon}
              className={`text-3xl text-[${color}]`}
            />
          </div>
          <h2 className="text-xl font-semibold text-[#1E3A8A]">{title}</h2>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default HowItWorks;
