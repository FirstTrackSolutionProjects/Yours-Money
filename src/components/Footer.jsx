import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-teal-800 to-cyan-900 text-white mt-12">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About / Logo */}
        <div>
          <img src="/logo2.png" alt="YourMoney Logo" className="h-15 mb-4" />
         <h1 className="text-2xl font-bold mb-4">
            <span className="text-black">Yours</span>{" "}
            <span className="text-red-600">Money</span>
          </h1>

          <p className="text-white/80">
            A fintech platform providing banking, loans, investments, and logistics services in collaboration with many clients.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-300 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-yellow-300 transition">Contact</a></li>
            <li><a href="/terms" className="hover:text-yellow-300 transition">Terms of Services</a>
            </li>
            <li><a href="/privacy-policy" className="hover:text-yellow-300 transition">Privacy Policy</a></li>
            <li><a href="/faq" className="hover:text-yellow-300 transition">FAQ</a></li>
            <li><a href="/support" className="hover:text-yellow-300 transition">Support</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          {/* <p>Office: 12.B.B.D. Bag (East), 2nd Floor, Kolkata - 700001</p> */}
          <p>Phone: <a href="tel:+919903020636" className="hover:text-yellow-300 transition">+91 9903020636</a></p>
          <p>Email: <a href="mailto:contact@yoursmoney.in" className="hover:text-yellow-300 transition">contact@yoursmoney.in</a></p>

        {/* Social Icons */}
      <div className="flex space-x-4 mt-4">
        <a
          href="#"
          className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-shadow shadow-md hover:shadow-lg flex items-center justify-center"
        >
          <FaFacebookF />
        </a>

        <a
          href="#"
          className="bg-sky-400 text-white p-3 rounded-full hover:bg-sky-500 transition-shadow shadow-md hover:shadow-lg flex items-center justify-center"
        >
          <FaTwitter />
        </a>

        <a
          href="#"
          className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition-shadow shadow-md hover:shadow-lg flex items-center justify-center"
        >
          <FaInstagram />
        </a>

        <a
          href="#"
          className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-shadow shadow-md hover:shadow-lg flex items-center justify-center"
        >
          <FaLinkedinIn />
        </a>
      </div>

        </div>
      </div>

      {/* Bottom copyright */}
       <div className="text-center text-sm text-gray-400 mt-6 pb-4">
      @Yours Money, developed by First Track Solution Technologies. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
