import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <img
          src="/about-team.jpg"
          alt="About Us"
          className="rounded-3xl shadow-xl object-cover w-full"
        />

        {/* Right: Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-blue-600">About Yours Money</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Yours Money is a next-generation fintech platform dedicated to making financial management effortless and secure for everyone — from individuals to businesses. 
            Our mission is to empower users with innovative digital payment solutions, seamless money transfers, intelligent investment tools, and real-time analytics to drive smarter financial decisions.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Built on advanced technology and strong regulatory compliance, Yours Money ensures that every transaction is safe, transparent, and reliable. We combine AI-driven insights with user-friendly interfaces to simplify complex financial tasks, allowing our clients to focus on what matters most — growing their wealth and achieving their financial goals.
          </p>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-blue-500">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide accessible, secure, and intelligent financial solutions that empower our users to manage, invest, and grow their money confidently. We strive to create a platform where finance meets simplicity and innovation.
            </p>

            <h3 className="text-2xl font-semibold text-blue-500">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become the most trusted fintech ecosystem, revolutionizing the way people interact with their finances by combining technology, transparency, and unmatched customer support.
            </p>
{/* 
            <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
              Learn More
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
