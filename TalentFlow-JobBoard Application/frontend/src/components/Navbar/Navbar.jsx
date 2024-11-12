import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (path) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="bg-[#1E3A8A] text-[#FFFFFF]">
      <div className="max-w-8xl mx-auto px-2 sm:px-6">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold font-Lato text-[#FFFFFF]">
            TalentFlow
          </Link>

          {/* Navbar Links (Desktop) */}
          <div className="hidden md:flex space-x-8 font-medium">
            <Link to="/" className="text-[#FFFFFF]">
              Home
            </Link>
            <Link to="/jobs" className="text-[#FFFFFF]">
              Jobs
            </Link>
            <Link to="/about" className="text-[#FFFFFF]">
              About
            </Link>
            <Link to="/contact" className="text-[#FFFFFF]">
              Contact Us
            </Link>
          </div>

          {/* Sign Up Button (Hidden on Mobile) */}
          <button className="px-4 py-2 rounded-md hidden md:block bg-[#22C55E] text-[#FFFFFF] font-lato ">
            Get started
          </button>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden space-y-3 mt-4 flex flex-col items-center font-bold pb-2">
            <button
              onClick={() => handleLinkClick("/")}
              className="text-[#FFFFFF] bg-transparent"
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick("/jobs")}
              className="text-[#FFFFFF] bg-transparent"
            >
              Jobs
            </button>
            <button
              onClick={() => handleLinkClick("/about")}
              className="text-[#FFFFFF] bg-transparent"
            >
              About
            </button>
            <button
              onClick={() => handleLinkClick("/contact")}
              className="text-[#FFFFFF] bg-transparent"
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
