import React from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import FintechServices from "./pages/FintechServices";
import Logistics from "./pages/Logistics";
import Contact from "./pages/Contact";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Support from "./pages/Support";
import Partner from "./pages/Partner";
import FreelancerForm from "./forms/FreelancerForm";
import BusinessAssociate from "./forms/BusinessAssociate";

import Career from "./pages/Career";

import PersonalLoanForm from "./forms/PersonalLoan";
import BusinessLoanForm from "./forms/BusinessLoan";
import HomeLoanForm from "./forms/HomeLoan";
import MortgageLoanForm from "./forms/MortgageLoan";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fintech-services/*" element={<FintechServices />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/support" element={<Support />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/partner/freelancer" element={<FreelancerForm />} />
            <Route path="/partner/business-associate" element={<BusinessAssociate />} />
            <Route path="/career" element={<Career />} />

            {/* Nested routes for fintech services */}
            <Route path="/fintech-services/personal-loan" element={<PersonalLoanForm />} />
            <Route path="/fintech-services/business-loan" element={<BusinessLoanForm />} />
            <Route path="/fintech-services/home-loan" element={<HomeLoanForm />} />
            <Route path="/fintech-services/mortgage-loan" element={<MortgageLoanForm />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
