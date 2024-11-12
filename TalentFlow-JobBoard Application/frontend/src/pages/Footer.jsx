import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const socialLinks = [
  { href: "#", icon: <FaFacebookF size={24} /> },
  { href: "#", icon: <FaTwitter size={24} /> },
  { href: "#", icon: <FaLinkedinIn size={24} /> },
  { href: "#", icon: <FaInstagram size={24} /> },
];

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/jobs", label: "Jobs" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => (
  <footer className="py-8 px-4 md:px-8 mt-2 bg-[#F9FAFB] text-[#111827]">
    <div className="max-w-1xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <Link to="/">
            <h1 className="text-2xl font-bold text-[#1E3A8A]">TalentFlow</h1>
          </Link>
          <p className="text-md mb-4 mt-2">
            Our platform offers a seamless experience for job seekers.
          </p>
          <Link to="/about" className="hover:text-[#F59E0B] text-[#1E3A8A]">
            Learn More
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-bold pb-2 text-[#1E3A8A]">
            Quick Links
          </h2>
          <ul className="space-y-2">
            {quickLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="hover:text-[#F59E0B] text-[#111827]">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-2xl font-bold pb-4 text-[#1E3A8A]">Follow Us</h2>
          <div className="flex gap-4">
            {socialLinks.map(({ href, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F59E0B] text-[#111827]"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 border-t border-[#E5E7EB] pt-4 text-center text-md font-bold text-[#111827]">
        <p>
          &copy; {new Date().getFullYear()} TalentFlow. All rights reserved.
        </p>
        <p className="mt-2 text-[#1E3A8A]">
          Made with <FaHeart className="inline text-red-500" />{" "}
          <span className="font-bold">Manu Kumar</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
