// import React from "react";
// import { FaArrowDown } from "react-icons/fa";
// import { Link } from "react-scroll";

// const HeroSection = () => {
//   return (
//     <section
//       className="bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 text-white flex items-center relative"
//       style={{ minHeight: "60vh" }} 
// >
//       <div className="container mx-auto flex flex-col-reverse md:flex-row items-center md:px-0">
//         {/* Text Content */}
//         <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
//           <h1 className="text-4xl md:text-6xl font-bold mb-4">
//             Build Your Dream <span className="text-yellow-300">Project</span>
//           </h1>
//           <p className="mb-6 text-lg md:text-xl text-gray-100">
//             We help you design, develop, and scale your ideas into reality. Join
//             us to create something amazing!
//           </p>
//           <div className="flex justify-center md:justify-start space-x-4">
//             <button className="bg-yellow-300 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-400 transition flex items-center">
//               Get Started
//             </button>
//             <button className="bg-yellow-300 bg-opacity-20 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-opacity-30 transition">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Image */}
//         <div className="md:w-1/2 flex justify-center md:justify-end">
//           <img
//             src="/hero-image.png" // replace with your own image path
//             alt="Hero"
//             className="w-full max-w-md rounded-lg shadow-lg"
//           />
//         </div>
//       </div>

//       {/* Scroll Arrow */}
//       <div className="absolute bottom-10 w-full flex justify-center animate-bounce">
//         <Link
//           to="services" 
//           smooth={true}
//           duration={700}
//           className="cursor-pointer text-white text-3xl hover:text-yellow-300 transition"
//         >
//           <FaArrowDown />
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { Link } from "react-scroll";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-center py-20 md:py-32 rounded-xl">
      {/* Decorative floating shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-16 w-32 h-32 bg-cyan-400 rounded-full opacity-20 blur-3xl animate-bounce"></div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/40 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Left Section - Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Empowering Your <span className="text-yellow-300">Financial Future</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-md mx-auto md:mx-0">
            Simplify your money management, grow your wealth, and experience
            secure, seamless fintech solutions — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 flex items-center justify-center gap-2">
              Get Started <FaArrowRight />
            </button>
            <Link
              to="services"
              smooth={true}
              duration={700}
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition cursor-pointer text-center"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Section - Image */}
        {/* <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/hero-fintech.png"
            alt="Fintech Illustration"
            className="w-full max-w-md drop-shadow-2xl animate-fadeIn"
          />
        </div> */}
      </div>

      {/* Scroll Arrow */}
      <div className="absolute bottom-1 w-full flex justify-center animate-bounce">
        <Link
          to="services"
          smooth={true}
          duration={700}
          className="cursor-pointer text-white text-3xl hover:text-yellow-300 transition"
        >
          <FaArrowDown />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
