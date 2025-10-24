import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  { q: "Is my data secure?", a: "Yes, we use 256-bit encryption for all & follow industry-standard security protocols to protect your data." },
  { q: "How do I apply for a loan?", a: "You can apply for a loan through our app or website by filling out the application form and submitting the required documents." },
  { q: "What are the interest rates?", a: "Interest rates vary based on the type of loan and your credit profile. Please check our Rates & Fees section for detailed information." },
  { q: "What investment options are available?", a: "We offer a variety of investment options including mutual funds, stocks, bonds, and fixed deposits to suit your financial goals." },
  { q: "How do I contact support?", a: "You can contact our support team via email at support@yourmoney.com or through the in-app chat for instant assistance." },
  
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-12 text-center">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-5 cursor-pointer transition hover:shadow-xl"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg text-gray-800">{faq.q}</h2>
                {openIndex === index ? (
                  <FaChevronUp className="text-blue-500" />
                ) : (
                  <FaChevronDown className="text-blue-500" />
                )}
              </div>
              {openIndex === index && (
                <p className="text-gray-600 mt-4">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
