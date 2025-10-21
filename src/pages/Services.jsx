import { Link } from "react-router-dom";
import { FaMoneyCheckAlt, FaTruckMoving } from "react-icons/fa";

const Services = () => (
  <section className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 py-24 px-6 overflow-hidden">
    {/* Decorative floating shapes */}
    <div className="absolute top-0 left-10 w-48 h-48 bg-blue-200 rounded-full opacity-20 blur-3xl animate-pulse"></div>
    <div className="absolute bottom-0 right-20 w-64 h-64 bg-teal-200 rounded-full opacity-25 blur-3xl animate-pulse"></div>
    <div className="absolute top-1/3 right-1/2 w-32 h-32 bg-purple-200 rounded-full opacity-15 blur-2xl animate-pulse"></div>

    <div className="relative z-10 max-w-6xl mx-auto text-center">
      {/* Section Heading */}
      <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
        Our <span className="text-gradient bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">Services</span>
      </h2>
      <p className="text-gray-600 text-lg md:text-xl mb-16 max-w-3xl mx-auto">
        Discover our range of fintech and logistics solutions designed to empower your business and financial growth with speed, security, and trust.
      </p>

      {/* Service Cards */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Fintech Services */}
        <Link
          to="/fintech-services"
          className="group relative overflow-hidden rounded-3xl p-10 shadow-xl border border-white/20 backdrop-blur-md bg-white/30 hover:bg-white/50 transition-all duration-500 hover:scale-105 cursor-pointer"
        >
          {/* Animated gradient overlay */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-teal-500 opacity-20 rounded-3xl blur-3xl animate-tilt"></div>

          <div className="relative flex flex-col items-center space-y-6">
            <div className="bg-white/50 p-6 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500">
              <FaMoneyCheckAlt size={40} className="text-blue-600 group-hover:text-teal-500 transition-colors duration-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">Fintech Services</h3>
            <p className="text-gray-700 leading-relaxed max-w-sm">
              AEPS, Loans, Credit Cards, Mutual Funds, and more — all under a trusted platform that empowers your financial growth.
            </p>
            <span className="text-blue-600 font-semibold group-hover:text-teal-500 transition-colors duration-300">
              Explore Now →
            </span>
          </div>
        </Link>

        {/* Logistics Services */}
        <Link
          to="/logistics"
          className="group relative overflow-hidden rounded-3xl p-10 shadow-xl border border-white/20 backdrop-blur-md bg-white/30 hover:bg-white/50 transition-all duration-500 hover:scale-105 cursor-pointer"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-orange-400 opacity-20 rounded-3xl blur-3xl animate-tilt"></div>

          <div className="relative flex flex-col items-center space-y-6">
            <div className="bg-white/50 p-6 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-500">
              <FaTruckMoving size={40} className="text-yellow-500 group-hover:text-orange-500 transition-colors duration-500" />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 group-hover:text-yellow-500 transition-colors duration-300">Logistics Services</h3>
            <p className="text-gray-700 leading-relaxed max-w-sm">
              Fast, reliable domestic courier and delivery solutions ensuring your products reach their destination safely and on time.
            </p>
            <span className="text-yellow-500 font-semibold group-hover:text-orange-500 transition-colors duration-300">
              Explore Now →
            </span>
          </div>
        </Link>
      </div>
    </div>
  </section>
);

export default Services;
