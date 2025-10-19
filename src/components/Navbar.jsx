import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-teal-700 via-cyan-600 to-blue-500 text-white shadow-lg fixed top-0 left-0 w-full z-[9999]">
      <div className="flex justify-between items-center px-4 md:px-8 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo2.png" alt="Your Money Logo" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-lg">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
          <Link to="/career" className="hover:text-yellow-300 transition">Career</Link>
          <Link to="/services" className="hover:text-yellow-300 transition">Services</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
          <Link
            to="/partner"
            className="hover:text-yellow-300 transition"
          >
            Partner
          </Link>
          <Link
            to="/login"
            className="hover:text-yellow-300 transition"
          >
            Login
          </Link>
        
        </div>

        {/* Mobile Menu Button (Hide when open) */}
        {!open && (
          <div className="md:hidden flex items-center z-[10000]">
            <button
              onClick={() => setOpen(true)}
              className="focus:outline-none active:scale-95 transition-transform"
            >
              <FiMenu size={28} />
            </button>
          </div>
        )}
      </div>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-gradient-to-b from-teal-700 via-cyan-600 to-blue-500 text-white transition-transform duration-500 ease-in-out shadow-2xl z-[9998] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/20">
          <img src="/logo1.png" alt="Your Money Logo" className="h-10" />
          <FiX
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          />
        </div>

        <ul className="flex flex-col space-y-6 px-6 mt-8 text-lg font-medium">
          <Link to="/" className="hover:text-yellow-300" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-yellow-300" onClick={() => setOpen(false)}>About</Link>
          <Link to="/career" className="hover:text-yellow-300" onClick={() => setOpen(false)}>Career</Link>
          <Link to="/services" className="hover:text-yellow-300" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/contact" className="hover:text-yellow-300" onClick={() => setOpen(false)}>Contact</Link>
          <Link
            to="/partner"
            className="hover:text-yellow-300 transition"
            onClick={() => setOpen(false)}
          >
            Partner
          </Link>
          <Link
            to="/login"
            className="hover:text-yellow-300 transition"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
