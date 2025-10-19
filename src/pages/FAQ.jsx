import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  { q: "Is my data secure?", a: "Yes, we use 256-bit encryption for all transactions and follow industry-standard security protocols to protect your data." },
  { q: "How do I verify my KYC?", a: "Upload your Aadhaar and PAN card under the KYC section. Our system will process verification within 24-48 hours." },
  { q: "When will I receive a refund?", a: "Refunds are processed within 3-5 business days, depending on your bank’s processing time." },
  { q: "Can I access my account on multiple devices?", a: "Yes, your account can be accessed securely from mobile, tablet, or desktop devices." },
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
