import { useState } from "react";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const JobApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Application Submitted Successfully!");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-md shadow-lg bg-[#F9FAFB] font-roboto mt-8">
      <h2 className="text-2xl font-bold text-center mb-4 text-[#1E3A8A]">
        Apply for Job
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-md font-medium text-[#111827]">
            Full Name:
          </label>
          <input
            type="text"
            placeholder="Enter name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded-md bg-white text-[#111827] hover:border-[#1E3A8A] hover:text-[#1E3A8A] focus:outline-none focus:border-[#1E3A8A] transition-all duration-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-md font-medium text-[#111827]">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded-md bg-white text-[#111827] hover:border-[#1E3A8A] hover:text-[#1E3A8A] focus:outline-none focus:border-[#1E3A8A] transition-all duration-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-md font-medium text-[#111827]">
            Why should we hire you?
          </label>
          <textarea
            name="reason"
            placeholder="why should hire you.."
            value={formData.reason}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border rounded-md bg-white text-[#111827] hover:border-[#1E3A8A] hover:text-[#1E3A8A] focus:outline-none focus:border-[#1E3A8A] transition-all duration-200"
            rows="4"
            cols="6"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-[#1E3A8A] text-white rounded-md hover:bg-[#22C55E]"
        >
          Submit Application
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default JobApplicationForm;
