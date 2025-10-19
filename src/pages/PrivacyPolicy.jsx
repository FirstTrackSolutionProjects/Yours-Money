import React from "react";
import { Link } from "react-scroll";

const sections = [
  { id: "dataCollection", title: "1. Data Collection" },
  { id: "dataUse", title: "2. How We Use Your Data" },
  { id: "dataSharing", title: "3. Data Sharing" },
  { id: "security", title: "4. Data Security" },
  { id: "cookies", title: "5. Cookies & Tracking" },
  { id: "userRights", title: "6. User Rights" },
  { id: "contact", title: "7. Contact Us" },
];

const PrivacyPolicy = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Sticky Table of Contents */}
        <aside className="hidden lg:block lg:w-1/4 sticky top-24 h-fit bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Contents</h2>
          <ul className="space-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  to={section.id}
                  smooth={true}
                  duration={500}
                  offset={-100}
                  className="cursor-pointer text-gray-700 hover:text-blue-600 transition"
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <div className="lg:w-3/4 bg-white rounded-3xl shadow-lg p-10 md:p-16 space-y-8">
          <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">
            Privacy Policy
          </h1>

          <p className="text-gray-700 leading-relaxed">
            At Yours Money, we prioritize your privacy and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, share, and safeguard your data when you use our platform.
          </p>

          <section id="dataCollection">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">1. Data Collection</h2>
            <p className="text-gray-700 leading-relaxed">
              We collect personal information such as your name, email, phone number, and financial details to provide you with seamless fintech services. Non-personal information, such as device type, IP address, and usage patterns, is also collected to enhance platform performance.
            </p>
          </section>

          <section id="dataUse">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">2. How We Use Your Data</h2>
            <p className="text-gray-700 leading-relaxed">
              Your data is used to facilitate secure transactions, provide personalized financial insights, improve user experience, and communicate important updates. We ensure that your information is used only for legitimate purposes directly related to our services.
            </p>
          </section>

          <section id="dataSharing">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">3. Data Sharing</h2>
            <p className="text-gray-700 leading-relaxed">
              Yours Money does not sell or trade your personal data. We may share data with trusted service providers for operational purposes, regulatory compliance, or legal obligations. All third-party providers adhere to strict confidentiality and data protection standards.
            </p>
          </section>

          <section id="security">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We employ advanced security measures including encryption, secure servers, and regular audits to safeguard your data. Access to personal information is restricted to authorized personnel only.
            </p>
          </section>

          <section id="cookies">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">5. Cookies & Tracking</h2>
            <p className="text-gray-700 leading-relaxed">
              Cookies, analytics tools, and tracking technologies are used to enhance user experience, monitor platform performance, and gather insights. You may choose to disable cookies through your browser, but some features may not function properly.
            </p>
          </section>

          <section id="userRights">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">6. User Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to access, correct, or delete your personal data at any time. You can also opt-out of marketing communications and request information about how your data is processed. Contact our support team for assistance with any requests.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">7. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              For any questions regarding this Privacy Policy or your personal data, please contact us at{" "}
              <span className="text-blue-600 font-medium">support@yoursmoney.com</span>. 
              Our team is available to assist you promptly.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
