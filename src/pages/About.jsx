import React, { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-teal-50 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative">
          <img
            src="/about.jpg"
            alt="About Us"
            className="rounded-3xl shadow-2xl object-cover w-full"
          />
        </div>

        {/* Right: Content */}
        <div className="space-y-8">
          <h2 className="text-5xl font-bold text-gray-900 tracking-tight">
            <span className="text-black">Yours</span>{" "}
            <span className="text-red-700">Money</span>
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            <span className="text-black font-semibold">Yours</span>{" "}
            <span className="text-red-500 font-semibold">Money</span> is a next-generation fintech platform designed to make financial management effortless, secure, and insightful. We empower individuals and businesses with innovative services, seamless transfers, and real-time analytics for smarter decisions.
          </p>

          {/* Mission & Vision */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 bg-white/50 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition duration-500">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide accessible, secure, and intelligent financial solutions that enable users to manage, invest, and grow their wealth confidently.
              </p>
            </div>

            <div className="p-6 bg-white/50 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition duration-500">
              <h3 className="text-2xl font-semibold text-teal-500 mb-2">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become the most trusted fintech ecosystem, revolutionizing the way people interact with their finances through technology, transparency, and excellent customer support.
              </p>
            </div>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            Built on advanced technology and strong compliance standards,{" "}
            <span className="text-black font-semibold">Yours</span>{" "}
            <span className="text-red-500 font-semibold">Money</span> ensures every transaction is safe and reliable. Our AI-driven insights and user-friendly interfaces simplify complex financial tasks, letting you focus on growing your wealth and achieving your financial goals.
          </p>

          {/* Learn More Button */}
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => setShowMore(!showMore)}
              className="mt-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              {showMore ? "Show Less" : "Learn More"}
            </button>
          </div>

          {/* Extra Section (Hidden until button clicked) */}
          {showMore && (
            <div className="mt-6 p-6 bg-white/70 backdrop-blur-lg rounded-2xl shadow-md animate-fadeIn">
              <h3 className="text-2xl font-bold text-blue-700 mb-3">
                Our Core Values
              </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>
                  <strong>Innovation:</strong> We constantly evolve to deliver smarter, faster, and safer financial solutions.
                </li>
                <li>
                  <strong>Transparency:</strong> Every transaction is clear, secure, and verifiable — no hidden terms.
                </li>
                <li>
                  <strong>Customer Trust:</strong> We prioritize your data security and privacy above all else.
                </li>
                <li>
                  <strong>Empowerment:</strong> We give users control over their financial journey with data-driven tools.
                </li>
              </ul>

              <p className="mt-4 text-gray-700 leading-relaxed">
                At <span className="font-semibold text-black">Yours</span>{" "}
                <span className="font-semibold text-red-500">Money</span>, we’re not just a fintech platform — we’re a partner in your growth, helping you achieve financial freedom through technology and trust.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
