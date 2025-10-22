import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
    { name: "Partner", path: "/partner" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav className="bg-gradient-to-r from-teal-500 via-cyan-600 to-blue-500 text-white shadow-lg fixed top-0 left-0 w-full z-[9999]">
      <div className="flex justify-between items-center px-4 md:px-8 py-3">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center space-x-2 hover:text-yellow-300 transition"
        >
          <img src="/logo2.png" alt="Your Money Logo" className="h-10" />
          <h1 className="text-2xl font-bold">
            <span className="text-black">Yours</span>{" "}
            <span className="text-red-700">Money</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 font-medium text-lg">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="hover:text-yellow-300 transition"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
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
        className={`fixed top-0 right-0 h-full w-2/3 bg-gradient-to-b from-teal-700 via-cyan-600 to-blue-500 text-white backdrop-blur-xl transition-all duration-500 ease-in-out shadow-2xl rounded-l-2xl z-[9998] ${
          open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white/20">
          <img src="/logo1.png" alt="Your Money Logo" className="h-10" />
          <FiX
            size={28}
            className="cursor-pointer hover:text-yellow-300 transition"
            onClick={() => setOpen(false)}
          />
        </div>

        <ul className="flex flex-col space-y-6 px-6 mt-8 text-lg font-medium">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className="hover:text-yellow-300 transition"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>

      {/* Optional Dimmed Background when open */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9997] md:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
