import React, { useState } from "react";

// ✅ Import all your forms/pages directly
import PersonalLoanForm from "../forms/PersonalLoan";
import BusinessLoanForm from "../forms/BusinessLoan";
import HomeLoanForm from "../forms/HomeLoan";
import MortgageLoanForm from "../forms/MortgageLoan";
import CreditCard from "./CreditCard";

const FintechServices = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    { name: "AEPS", component: <div className="text-xl text-gray-600">AEPS Service Coming Soon</div> },
    { name: "Digital Bank Account Opening", component: <div className="text-xl text-gray-600">Digital Bank Account Coming Soon</div> },
    { name: "Personal Loan", component: <PersonalLoanForm /> },
    { name: "Business Loan", component: <BusinessLoanForm /> },
    { name: "Home Loan", component: <HomeLoanForm /> },
    { name: "Mortgage Loan", component: <MortgageLoanForm /> },
    { name: "Credit Card", component: <CreditCard /> },
    { name: "Mutual Fund", component: <div className="text-xl text-gray-600">Mutual Fund Page Coming Soon</div> },
    { name: "Demat Account Opening", component: <div className="text-xl text-gray-600">Demat Account Page Coming Soon</div> },
    { name: "Stock Market - Trading", component: <div className="text-xl text-gray-600">Trading Page Coming Soon</div> },
    { name: "BharatPe Merchant Loan Project", component: <div className="text-xl text-gray-600">BharatPe Project Page Coming Soon</div> },
    { name: "Ring Finance QR Install Project", component: <div className="text-xl text-gray-600">Ring Finance QR Page Coming Soon</div> },
    { name: "Tide Merchant QR Code", component: <div className="text-xl text-gray-600">Tide QR Page Coming Soon</div> },
    { name: "Bajaj NACH Collection", component: <div className="text-xl text-gray-600">Bajaj NACH Page Coming Soon</div> },
    { name: "Health Survey Project", component: <div className="text-xl text-gray-600">Health Survey Page Coming Soon</div> },
  ];

  const handleClick = (serviceName) => {
    setActiveService(serviceName);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const active = services.find((s) => s.name === activeService);

  return (
    <section className=" py-2 px-6 max-w-4xl mx-auto text-center">
      {!activeService ? (
        <>
          <h2 className="text-4xl font-bold text-blue-700 mb-8">Fintech Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => handleClick(service.name)}
                className="bg-white shadow p-6 rounded-xl hover:shadow-lg hover:scale-105 cursor-pointer transition duration-300"
              >
                <h3 className="text-lg font-semibold text-blue-600">{service.name}</h3>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-xl">
          <div>{active.component}</div>
        </div>
      )}
    </section>
  );
};

export default FintechServices;
