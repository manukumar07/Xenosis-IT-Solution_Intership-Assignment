import { useState } from "react";
import logo from "../assets/ct1.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-center font-roboto">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 md:mb-6 text-[#1E3A8A]">
          Contact Us
        </h1>

        {/* Introductory Section */}
        <p className="text-center text-lg mb-8 md:mb-12 text-[#111827]">
          Feel free to get in touch! Whether it’s a question, feedback, or just
          a quick hello, we’re here to help.
        </p>

        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-start gap-8">
          {/* Left Side: Logo Image and Company Info */}
          <div className="flex flex-col items-center md:w-1/2 text-center md:text-left">
            <img
              src={logo}
              alt="Logo"
              className="w-95 h-95 md:w-99 md:h-99 mb-4"
            />
          </div>

          {/* Right Side: Contact Form */}
          <div className="md:w-1/2 w-full">
            <h2 className="text-2xl font-bold mb-4 text-center md:text-left text-[#1E3A8A]">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-md font-medium text-[#111827]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-md font-medium text-[#111827]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:outline-none"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-md font-medium text-[#111827]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Type your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F59E0B] focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#F59E0B] hover:bg-[#F59E0B] text-white px-4 py-2 rounded-lg w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
