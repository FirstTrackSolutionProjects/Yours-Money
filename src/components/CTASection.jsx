import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-center relative overflow-hidden mt-8">
      {/* Decorative blurred circles */}
      <div className="absolute top-0 left-10 w-32 h-32 bg-yellow-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-40 h-40 bg-cyan-400 opacity-20 rounded-full blur-3xl animate-bounce"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
          Start Your <span className="text-yellow-300">Fintech Journey</span> Today
        </h2>
        <p className="mb-8 text-lg sm:text-xl text-gray-100">
          Join thousands of businesses who trust YourMoney for secure and seamless payments.
        </p>
        <Link
          to="/register"
          className="inline-flex items-center justify-center bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-8 py-4 rounded-full shadow-xl transform transition-all hover:-translate-y-1 hover:scale-105 gap-3"
        >
          Get Started <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
