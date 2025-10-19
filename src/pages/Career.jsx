import React from "react";

const Career = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Join Our Team</h1>
      <p className="text-gray-700 mb-4">
        Be part of the fintech revolution. We're hiring across tech, operations,
        and customer success.
      </p>
      <form className="max-w-lg bg-white p-6 shadow rounded-xl space-y-4">
        <input type="text" placeholder="Full Name" className="w-full border p-3 rounded-md" />
        <input type="email" placeholder="Email" className="w-full border p-3 rounded-md" />
        <input type="file" className="w-full border p-3 rounded-md" />
        <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
          Apply Now
        </button>
      </form>
    </div>
  );
};

export default Career;
