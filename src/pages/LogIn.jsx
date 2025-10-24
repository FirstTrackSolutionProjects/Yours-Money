import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LogIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    alert("Login successful!");
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-blue-200 to-blue-100 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md m-4">
        {/* Illustration */}
        <img
          src="/login.jpg"
          alt="Login Illustration"
          className="w-full h-48 object-contain rounded-2xl mb-4"
        />

        {/* Title */}
        <h2 className="text-3xl font-extrabold text-center text-blue-700 mb-6">
          Welcome Back!
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-11 text-gray-500 hover:text-blue-600 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-transform transform hover:-translate-y-1 shadow-lg"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
