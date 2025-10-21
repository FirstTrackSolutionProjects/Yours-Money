import React from "react";
import { FaUserTie, FaBriefcase } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Partner = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 py-20 px-6 overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl text-center animate-fadeIn">
        {/* Hero Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3">
          Become a <span className="text-blue-600">Trusted Partner</span>
        </h1>

        {/* Hero Tagline */}
        <p className="text-lg md:text-xl text-gray-700 font-semibold tracking-wide mb-6 italic">
          Empower. Connect. Grow.
        </p>

        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Collaborate with{" "}
          <span className="font-semibold text-black">Yours</span>{" "}
          <span className="font-semibold text-red-700">Money</span> as a
          Freelancer or Business Associate. Expand your reach, unlock new
          opportunities, and grow with us.
        </p>

        {/* Partner Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
          {/* Freelancer Card */}
          <div
            onClick={() => handleNavigate("/partner/freelancer")}
            className="group bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-100"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaUserTie size={36} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Freelancer</h2>
              <p className="text-gray-600">
                Work independently, connect with clients, and earn by referring
                financial products. Perfect for individuals seeking flexible
                income and professional growth.
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all">
                Join as Freelancer
              </button>
            </div>
          </div>

          {/* Business Associate Card */}
          <div
            onClick={() => handleNavigate("/partner/business-associate")}
            className="group bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-100"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full group-hover:bg-yellow-500 group-hover:text-white transition-all duration-300">
                <FaBriefcase size={36} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                Business Associate
              </h2>
              <p className="text-gray-600">
                Partner with us to expand your business reach, collaborate on
                financial solutions, and create long-term client success stories.
              </p>
              <button className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded-full font-semibold hover:bg-yellow-600 transition-all">
                Join as Business Associate
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Simple fade-in animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Partner;
