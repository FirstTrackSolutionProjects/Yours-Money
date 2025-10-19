import React, { useState } from "react";

const Support = () => {
  const [formData, setFormData] = useState({ name: "", email: "", issue: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your support ticket has been submitted.`);
    setFormData({ name: "", email: "", issue: "" });
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">Support Center</h1>
        <p className="text-gray-700 mb-10 text-center">
          Need help? Fill out the form below and our support team will get back to you as soon as possible.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
          <div>
            <label className="block font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Describe your issue</label>
            <textarea
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              placeholder="Your message..."
              rows="5"
              required
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Ticket
          </button>
        </form>
      </div>
    </section>
  );
};

export default Support;
