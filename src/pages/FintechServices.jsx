import React from "react";
import { Link } from "react-router-dom";
import {
  FaPiggyBank,
  FaCreditCard,
  FaHome,
  FaBuilding,
  FaLandmark,
  FaChartLine,
  FaRegHandshake,
  FaHeartbeat,
  FaUser,
  FaStore,
} from "react-icons/fa";

const FintechServices = () => {
  const services = [
    { name: "AEPS", icon: <FaPiggyBank />, link: "#", gradient: "from-blue-400 to-indigo-500" },
    { name: "Digital Bank Account Opening", icon: <FaLandmark />, link: "#", gradient: "from-purple-400 to-pink-500" },
    { name: "Personal Loan", icon: <FaUser />, link: "/fintech-services/personal-loan", gradient: "from-green-400 to-teal-500" },
    { name: "Business Loan", icon: <FaBuilding />, link: "/fintech-services/business-loan", gradient: "from-yellow-400 to-orange-500" },
    { name: "Home Loan", icon: <FaHome />, link: "/fintech-services/home-loan", gradient: "from-red-400 to-pink-500" },
    { name: "Mortgage Loan", icon: <FaRegHandshake />, link: "/fintech-services/mortgage-loan", gradient: "from-indigo-400 to-blue-500" },
    { name: "Credit Card", icon: <FaCreditCard />, link: "/fintech-services/credit-card", gradient: "from-pink-400 to-red-500" },
   {
    name: "Insurance", icon: <FaRegHandshake />, 
    link: "/fintech-services/insurance",
    gradient: "from-green-400 to-teal-500"
  },

    { name: "Mutual Fund", icon: <FaChartLine />, link: "#", gradient: "from-green-300 to-lime-500" },
    { name: "Demat Account Opening", icon: <FaLandmark />, link: "#", gradient: "from-purple-300 to-indigo-500" },
    { name: "Stock Market - Trading", icon: <FaChartLine />, link: "#", gradient: "from-orange-400 to-red-500" },
    { name: "BharatPe Merchant Loan Project", icon: <FaStore />, link: "#", gradient: "from-teal-400 to-cyan-500" },
    { name: "Ring Finance QR Install Project", icon: <FaRegHandshake />, link: "#", gradient: "from-yellow-400 to-red-400" },
    { name: "Tide Merchant QR Code", icon: <FaStore />, link: "#", gradient: "from-blue-300 to-indigo-400" },
    { name: "Bajaj NACH Collection", icon: <FaPiggyBank />, link: "#", gradient: "from-green-400 to-blue-500" },
    { name: "Health Survey Project", icon: <FaHeartbeat />, link: "#", gradient: "from-red-400 to-pink-500" },
  ];

  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <h2 className="text-4xl font-bold text-blue-700 mb-10 text-center">
        Fintech Services
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            className={`bg-gradient-to-r ${service.gradient} text-white shadow-lg p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300 cursor-pointer`}
          >
            <div className="text-4xl">{service.icon}</div>
            <h3 className="text-lg font-semibold">{service.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FintechServices;
