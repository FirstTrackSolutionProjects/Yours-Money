import React, { useState } from "react"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import FintechServices from "./pages/FintechServices";
import Logistics from "./pages/Logistics";
import Contact from "./pages/Contact";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";

import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Support from "./pages/Support";
import Partner from "./pages/Partner";
import FreelancerForm from "./forms/FreelancerForm";
import BusinessAssociate from "./forms/BusinessAssociate";

import Career from "./pages/Career";


function App() {
 
  // const [sidebarOpen, setSidebarOpen] = useState(false);

  // const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        {/* <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}

        <main className="flex-grow pt-20"> {/* avoid overlap with fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fintech-services" element={<FintechServices />} />
            <Route path="/logistics" element={<Logistics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
          
            <Route path="/faq" element={<FAQ />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/support" element={<Support />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/partner/freelancer" element={<FreelancerForm />} />
            <Route path="/partner/business-associate" element={<BusinessAssociate />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
