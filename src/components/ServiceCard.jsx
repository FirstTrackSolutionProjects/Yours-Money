import React from "react";
import { FaChartLine, FaWallet, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaChartLine className="text-4xl text-blue-500 mb-4" />,
    title: "Investment Solutions",
    description:
      "Smart investment options with real-time analytics to help grow your wealth safely and efficiently.",
  },
  {
    id: 2,
    icon: <FaWallet className="text-4xl text-green-500 mb-4" />,
    title: "Digital Payments",
    description:
      "Seamless, secure, and instant digital payment solutions for businesses and individuals.",
  },
  {
    id: 3,
    icon: <FaShieldAlt className="text-4xl text-purple-500 mb-4" />,
    title: "Fraud Protection",
    description:
      "Advanced security measures and fraud detection systems to protect your financial assets.",
  },
];

const ServiceCard = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
