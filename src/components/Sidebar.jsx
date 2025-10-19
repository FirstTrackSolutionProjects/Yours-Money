// import { Link } from "react-router-dom";
// import { FiX } from "react-icons/fi";

// const sidebar = ({ isOpen, togglesidebar }) => {
//   return (
//     <div
//       className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg transform ${
//         isOpen ? "translate-x-0" : "-translate-x-full"
//       } transition-transform duration-300 z-50`}
//     >
//       {/* Close button */}
//       {/* <div className="flex justify-between items-center p-6 border-b border-white/30">
//         <h2 className="text-2xl font-bold">Menu</h2>
//         <button onClick={togglesidebar} className="text-2xl focus:outline-none">
//           <FiX />
//         </button>
//       </div> */}

//       {/* sidebar links */}
//       <nav className="flex flex-col mt-6 space-y-4 px-6 text-lg font-medium">
//         <Link to="/" onClick={togglesidebar} className="hover:text-yellow-300 transition">Home</Link>
//         <Link to="/about" onClick={togglesidebar} className="hover:text-yellow-300 transition">About Us</Link>
//         <Link to="/blog" onClick={togglesidebar} className="hover:text-yellow-300 transition">Blog</Link>
//         <Link to="/contact" onClick={togglesidebar} className="hover:text-yellow-300 transition">Contact Us</Link>
//         <Link to="/partner" onClick={togglesidebar} className=" hover:text-yellow-300 transition">
//           Partner
//         </Link>
//         <Link to="/login" onClick={togglesidebar} className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
//           Login
//         </Link>

//         <Link to="/register" onClick={togglesidebar} className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
//           Register
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default sidebar;
