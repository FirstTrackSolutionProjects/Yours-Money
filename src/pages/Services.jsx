import { Link } from "react-router-dom";

const Services = () => (
  <section className="py-16 text-center px-4">
    <h2 className="text-4xl font-bold text-blue-700 mb-10">Our Services</h2>
    <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Link to="/fintech-services" className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-blue-600 mb-2">Fintech Services</h3>
        <p className="text-gray-600">AEPS, Loans, Credit Cards, Mutual Funds, and more.</p>
      </Link>
      <Link to="/logistics" className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
        <h3 className="text-2xl font-semibold text-blue-600 mb-2">Logistics Services</h3>
        <p className="text-gray-600">Domestic courier and delivery solutions.</p>
      </Link>
    </div>
  </section>
);

export default Services;
