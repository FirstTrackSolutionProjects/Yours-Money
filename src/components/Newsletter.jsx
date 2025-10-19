import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <section className="py-16 bg-gray-200 text-center relative overflow-hidden mt-8">
   
      <div className="absolute top-0 left-10 w-32 h-32 bg-yellow-300 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-40 h-40 bg-cyan-300 opacity-20 rounded-full blur-3xl animate-bounce"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-8 text-lg">
          Get the latest fintech news, updates, and insights delivered to your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-3 w-full sm:w-80 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg transform transition-all hover:-translate-y-1 hover:scale-105 hover:from-blue-700 hover:to-indigo-700"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
