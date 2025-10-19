import React from "react";
import { FaUserTie, FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Partner = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-20 overflow-hidden">
      {/* Decorative floating shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-30 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-100 rounded-full opacity-30 blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-600 mb-4">
            Become a Partner
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
            Join our network as a Freelancer or Business Associate and elevate
            your career or business with Yours Money. Choose your type below.
          </p>
        </div>

        {/* Buttons for navigation */}
        <div className="flex justify-center gap-6 flex-wrap">
          <button
            onClick={() => handleNavigate("/partner/freelancer")}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-blue-600 text-white shadow-lg hover:scale-105 transition-all duration-300"
          >
            <FaUserTie />
            Freelancer
          </button>

          <button
            onClick={() => handleNavigate("/partner/business")}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold bg-yellow-500 text-white shadow-lg hover:scale-105 transition-all duration-300"
          >
            <FaBriefcase />
            Business Associate
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partner;
