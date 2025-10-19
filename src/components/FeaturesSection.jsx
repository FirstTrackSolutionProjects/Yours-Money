import React from "react";
import { FaLock, FaBolt, FaChartLine, FaMobileAlt, FaClock, FaBalanceScale } from "react-icons/fa";

const features = [
  { icon: <FaLock />, title: "Secure Transactions", desc: "Your money is protected with bank-grade encryption and compliance." },
  { icon: <FaBolt />, title: "Instant Transfers", desc: "Experience lightning-fast payment processing anytime, anywhere." },
  { icon: <FaChartLine />, title: "Smart Analytics", desc: "Get detailed insights and reports on your transactions and growth." },
  { icon: <FaMobileAlt />, title: "Multi-Device Access", desc: "Access your account seamlessly from mobile, tablet, or desktop." },
  { icon: <FaClock />, title: "24/7 Support", desc: "We’re here round the clock to help you whenever you need it." },
  { icon: <FaBalanceScale />, title: "Regulatory Compliance", desc: "We adhere to all financial regulations to ensure your trust and safety." }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Our Fintech Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="text-5xl text-blue-500 mb-4 flex justify-center transition-colors duration-300 group-hover:text-yellow-400">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
