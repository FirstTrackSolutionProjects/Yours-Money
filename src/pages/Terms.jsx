import React from "react";
import { Link } from "react-scroll";

const sections = [
  { id: "use", title: "1. Use of the Platform" },
  { id: "accounts", title: "2. User Accounts" },
  { id: "privacy", title: "3. Privacy & Data" },
  { id: "liability", title: "4. Limitation of Liability" },
  { id: "changes", title: "5. Changes to Terms" },
  { id: "contact", title: "6. Contact Us" },
];

const Terms = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Sticky Table of Contents */}
        <aside className="hidden lg:block lg:w-1/4 sticky top-24 h-fit bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl font-bold mb-4 text-blue-600">Table of Contents</h2>
          <ul className="space-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  to={section.id}
                  smooth={true}
                  duration={500}
                  offset={-100} // adjust for navbar height
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
            Terms & Conditions
          </h1>

          <p className="text-gray-700 leading-relaxed">
            Welcome to Yours Money! By accessing or using our platform, you agree to comply with
            all applicable laws, regulations, and the terms set forth in this agreement. These
            Terms & Conditions govern Yours use of our services, including digital payments, money
            transfers, and financial tools. We aim to provide secure, transparent, and
            user-friendly services for all our users.
          </p>

          <section id="use">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">1. Use of the Platform</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to use the platform for lawful purposes only. Unauthorized access,
              misuse, or data manipulation is strictly prohibited. Any attempt to disrupt the
              security or functionality of our services will be considered a violation of these
              Terms.
            </p>
          </section>

          <section id="accounts">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">2. User Accounts</h2>
            <p className="text-gray-700 leading-relaxed">
              Users are responsible for maintaining the confidentiality of their login
              credentials. Any activity conducted using Yours account is considered Yours
              responsibility. Notify us immediately in case of unauthorized access or suspicious
              activity.
            </p>
          </section>

          <section id="privacy">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">3. Privacy & Data</h2>
            <p className="text-gray-700 leading-relaxed">
              Yours Money is committed to protecting Yours privacy. All personal data is collected,
              stored, and processed in accordance with our Privacy Policy. By using our services,
              you consent to the handling of Yours information for legitimate purposes related to
              platform functionality.
            </p>
          </section>

          <section id="liability">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">4. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              While we strive to provide secure and reliable services, Yours Money is not liable
              for any indirect, incidental, or consequential damages arising from the use or
              inability to use the platform. Users are encouraged to safeguard their accounts
              and sensitive information.
            </p>
          </section>

          <section id="changes">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">5. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to update or modify these Terms & Conditions at any time.
              Changes become effective upon posting on the platform. Continued use after
              modifications constitutes acceptance of the revised terms.
            </p>
          </section>

          <section id="contact">
            <h2 className="text-2xl font-semibold text-blue-500 mb-2">6. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              For any questions or concerns regarding these Terms & Conditions, please contact
              our support team at{" "}
              <span className="text-blue-600 font-medium">support@yoursmoney.com</span>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Terms;
