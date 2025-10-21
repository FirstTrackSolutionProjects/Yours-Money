import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            About YourMoney
          </h2>
         <p className="text-gray-600 text-lg ">
          <span className="text-black font-bold">Yours</span>{" "}
          <span className="text-red-700 font-bold">Money</span> is a next-generation fintech platform dedicated to making financial management effortless and secure for everyone.
        </p>

          <Link
            to="/about"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg hover:from-blue-700 hover:to-indigo-700 transition"
          >
            Learn More
          </Link>
        </div>

        {/* Image */}
        <div className="relative group">
          <img
            src="/about-section.jpg"
            alt="About Fintech"
            className="rounded-2xl shadow-2xl w-full object-cover transform transition-transform duration-500 group-hover:scale-105"
          />
          {/* Optional overlay for gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
