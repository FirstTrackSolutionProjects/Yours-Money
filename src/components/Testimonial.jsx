import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Rahul Mehta",
    feedback: "YourMoney made my business payments effortless and secure. Highly recommended!",
    img: "/Bavatar.png",
  },
  {
    name: "Priya Sharma",
    feedback: "The dashboard and analytics tools are just amazing! Super easy to use.",
    img: "/Gavatar.png",
  },
  {
    name: "Amit Verma",
    feedback: "Fast, reliable, and trusted platform. Love their customer support!",
    img: "/Bavatar.png",
  },
  {
    name: "Sneha Kapoor",
    feedback: "The fintech solutions are very intuitive. Helped me manage finances easily.",
    img: "/Gavatar.png",
  },
  {
    name: "Vikram Singh",
    feedback: "Great platform with seamless transactions and excellent customer support.",
    img: "/Bavatar.png",
  },
  {
    name: "Anjali Rao",
    feedback: "Loving the analytics and reporting tools. Makes business finance simple!",
    img: "/Gavatar.png",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        What Our Clients Say
      </h2>

      <div className="relative w-full max-w-xl bg-white text-gray-800 p-8 rounded-2xl shadow-lg">
        {/* Testimonial */}
        <p className="italic mb-4 text-center">“{testimonials[current].feedback}”</p>
        <h4 className="font-semibold text-blue-600 text-center">{testimonials[current].name}</h4>
        <img
          src={testimonials[current].img}
          alt={testimonials[current].name}
          className="w-16 h-16 rounded-full mx-auto mt-4"
        />

        {/* Navigation Arrows */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800"
        >
          <FaChevronRight size={24} />
        </button> */}
      </div>

      {/* Dots */}
      {/* <div className="flex mt-6 space-x-2">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-yellow-400" : "bg-white/50"
            } cursor-pointer`}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div> */}
    </section>
  );
};

export default Testimonials;
