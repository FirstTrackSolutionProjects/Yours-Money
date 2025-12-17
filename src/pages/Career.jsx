import React, { useState } from "react";
import { Helmet } from "react-helmet"
import { v4 as uuidv4 } from "uuid";
import getPutObjectUrlService from "@/services/s3Services/getPutObjectUrlService";
import putObjectService from "@/services/s3Services/putObjectService";
import applyForCareerService from "@/services/careerServices/applyForCareerService";
import { toast } from "react-toastify";

const Career = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    description: "",
    qualification: "",
    cv: "",
  });
  const [files, setFiles] = useState({
    cv: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFiles({ ...files, [name]: files[0] });
  };

  const uploadFile = async (file) => {
    try {
        const filetype = file.type;
        const filename = file.name;
        const key = `careers/${uuidv4()}/${filename}`;
        const uploadUrl = await getPutObjectUrlService(key, filetype, false)
        await putObjectService(uploadUrl, file, filetype);
        return key;
    } catch (error) {
        console.error("File upload failed:", error);
    }
  }
  
  const handleUpload = async () => {
    if (files.cv) {
        const cvKey = await uploadFile(files.cv);
        if (!cvKey) {
            toast.error("CV upload failed. Please try again.");
            return false;
        }
        setFormData({ ...formData, cv: cvKey });
        return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    if (await handleUpload() === false) return;
  
    await applyForCareerService(formData);

    console.log("Form submitted:", formData);
    toast.success("Application submitted successfully!");
  } catch (error) {
    console.error("Form submission failed:", error);
    toast.error(error?.message || "Failed to submit application");
  };
}


  return (
    <>
      <Helmet>
                <title>Career | Yours Money </title>
                <meta
                  name="description"
                  content="Apply for personal, business, home, car, education, and other loans with Yours Money. Quick approval and minimal documentation."
                />
              </Helmet>

    <section className="min-h-screen bg-gradient-to from-blue-50 via-cyan-50 to-teal-50 flex flex-col items-center justify-center px-6 py-16">
      {/* Heading Section */}
      <div className="text-center mb-10">
          
        <div className="md:block">
          <img
            src="/career.jpg"
            alt="Career Illustration"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Join <span className="text-blue-600">Our Team</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Be a part of our fintech journey — innovate, collaborate, and grow with us!
        </p>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Phone</label>
              <div className="flex gap-2">
                {/* <input
                  type="text"
                  name="stdCode"
                  value={formData.stdCode}
                  onChange={handleChange}
                  placeholder="+91"
                  className="w-1/3 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                /> */}
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit number"
                  maxLength="10"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* DOB & Gender */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Gender</label>
              <div className="flex items-center gap-6 mt-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formData.gender === "Male"}
                    onChange={handleChange}
                    className="accent-blue-600"
                  />
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formData.gender === "Female"}
                    onChange={handleChange}
                    className="accent-blue-600"
                  />
                  Female
                </label>
              </div>
            </div>
          </div>

          {/* Address Fields */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter full address"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Pincode"
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Tell us about yourself..."
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          
          {/* ✅ Highest Qualification */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Highest Qualification
            </label>
            <input
              type="text"
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              placeholder="B.Tech, MBA, etc."
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Upload CV */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Upload CV</label>
            <input
              type="file"
              name="cv"
              onChange={handleFileChange}
              className="w-full border border-gray-300 p-3 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to from-blue-600 to-teal-500 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition-all"
          >
            Apply Now
          </button>
        </form>
      </div>
    </section>
    </>
  );
};

export default Career;
