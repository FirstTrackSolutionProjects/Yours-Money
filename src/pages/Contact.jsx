import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", stdCode: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We’ll get back to you soon.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
         
        <div className="md:block">
          <img
            src="/contact.jpg"
            alt="Contact Illustration"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
       
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Have a question or need assistance? Our dedicated team is ready to help you. 
            Reach out and we'll get back to you promptly with the support you need.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-gray-700">
              <FaEnvelope className="text-blue-600 text-xl" />
              <span>support@yoursmoney.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <FaPhoneAlt className="text-blue-600 text-xl" />
              <span>+91 9903020636</span>
            </div>
            <div className="flex items-center gap-4 text-gray-700">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <span>12.B.B.D. Bag (East), 2nd Floor, Kolkata - 700001</span>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-3xl shadow-xl space-y-6 hover:shadow-2xl transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-blue-600 mb-4">Send Us a Message</h3>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
            />

            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
            />

             <div className="flex space-x-2">
               <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-white">
                <span className="text-xl mr-2">🇮🇳</span>
                <span className="text-gray-800">+91</span>
              </div>
            
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-5/6 border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
           

            <textarea
              name="message"
              placeholder="Your message..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-transform transform hover:-translate-y-1 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
