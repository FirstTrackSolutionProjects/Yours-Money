// // src/pages/Contact.jsx
// import React, { useState } from "react";
// import { Helmet } from "react-helmet";
// import { toast } from "react-toastify";
// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
// import applyForContactService from "@/services/contactServices/applyForContactService";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     stdCode: "+91",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (!formData.name || !formData.email || !formData.phone || !formData.message) {
//         toast.error("Please fill out all required fields.");
//         return;
//       }

//       await applyForContactService(formData);
//       toast.success("✅ Message sent successfully!");
//       setFormData({ name: "", email: "", phone: "", stdCode: "+91", message: "" });
//     } catch (error) {
//       console.error("Form submission failed:", error);
//       toast.error(error?.message || "❌ Failed to send message.");
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Contact | Yours Money</title>
//         <meta
//           name="description"
//           content="Have questions or need help? Contact Yours Money for quick and reliable assistance with loans and services."
//         />
//       </Helmet>

//       <section className="min-h-screen bg-gradient-to from-blue-50 via-cyan-50 to-teal-50 flex flex-col items-center justify-center px-6 py-16">
//         <div className="text-center mb-10">
//           <img
//             src="/contact.jpg"
//             alt="Contact Illustration"
//             className="w-full h-80 object-cover rounded-2xl shadow-lg mb-6"
//           />
//           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
//             Get in <span className="text-blue-600">Touch</span>
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             We’d love to hear from you! Whether you have a query, feedback, or partnership idea, our team is here to help.
//           </p>
//         </div>

//         <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             {/* Full Name */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your name"
//                 className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="you@example.com"
//                 className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               />
//             </div>

//             {/* Phone */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">Phone</label>
//               <div className="flex gap-2">
//                 <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
//                   <span className="text-xl mr-2">🇮🇳</span>
//                   <input
//                     type="text"
//                     name="stdCode"
//                     value={formData.stdCode}
//                     readOnly
//                     className="w-12 bg-transparent outline-none text-gray-700"
//                   />
//                 </div>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="10-digit number"
//                   maxLength="10"
//                   className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Message */}
//             <div>
//               <label className="block text-gray-700 font-medium mb-2">Message</label>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="4"
//                 placeholder="Write your message..."
//                 className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 required
//               ></textarea>
//             </div>

//             {/* Contact Info */}
//             <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
//               <h3 className="text-lg font-semibold text-blue-700 mb-2">Contact Information</h3>
//               <div className="space-y-2 text-gray-700">
//                 <p className="flex items-center gap-3">
//                   <FaEnvelope className="text-blue-600" /> support@yoursmoney.com
//                 </p>
//                 <p className="flex items-center gap-3">
//                   <FaPhoneAlt className="text-blue-600" /> +91 9903020636
//                 </p>
//                 <p className="flex items-center gap-3">
//                   <FaMapMarkerAlt className="text-blue-600" /> 12.B.B.D. Bag (East), 2nd Floor, Kolkata - 700001
//                 </p>
//               </div>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition-all"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Contact;

import CustomButton from "@/components/CustomComponents/CustomButton";
import CustomForm from "@/components/CustomComponents/CustomForm";
import { useApp } from "@/contexts/AppContext";
import { useRef } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import applyForContactService from "@/services/contactServices/applyForContactService";

const Contact = () => {
  const formRef = useRef();
  const { contactFormFields, setContactFormFields } = useApp();

  const handleSubmit = async () => {
    try {
      const formData = formRef?.current?.formData;
      await applyForContactService(formData);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error(error);
      toast.error(error?.message || "Failed to send message");
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact | Yours Money</title>
        <meta
          name="description"
          content="Have questions or need help? Contact Yours Money for quick and reliable assistance with loans and services."
        />
      </Helmet>

      <div className="max-w-7xl mx-auto p-4 flex flex-col items-center gap-6">
        <div className="grid lg:grid-cols-2 bg-white rounded-xl shadow-lg overflow-hidden w-full">
          <img
            src="/contact.jpg"
            alt="Contact"
            className="w-full h-96 object-cover lg:h-auto"
          />
          <div className="p-6 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Get in <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-gray-600 mb-4">
              We’d love to hear from you! Whether you have a query, feedback, or partnership idea, our team is here to help.
            </p>

            <CustomForm
              ref={formRef}
              fields={contactFormFields}
              setFields={setContactFormFields}
              handleSubmit={handleSubmit}
            />
            <CustomButton
              onClick={() => formRef?.current?.submitForm()}
              title={formRef?.current?.loadingState || "SEND MESSAGE"}
              disabled={formRef?.current?.loadingState}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
