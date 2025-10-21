import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const blogs = [
  {
    id: 1,
    title: "How Fintech is Revolutionizing Digital Payments",
    excerpt:
      "Digital payments have grown rapidly, offering faster, secure, and convenient ways to handle money. Learn how fintech startups are transforming traditional banking.",
    image: "/blog-1.jpg",
    date: "Oct 20, 2025",
  },
  {
    id: 2,
    title: "Top 5 Investment Apps to Grow Your Wealth",
    excerpt:
      "Discover the best fintech investment apps that help you make smarter financial decisions and grow your wealth efficiently.",
    image: "/blog-2.jpg",
    date: "Oct 15, 2025",
  },
  {
    id: 3,
    title: "Understanding Digital Lending & Loan Platforms",
    excerpt:
      "Digital lending platforms are making borrowing easier than ever. Learn about the key features and benefits of fintech loan solutions.",
    image: "/blog-3.jpg",
    date: "Oct 10, 2025",
  },
  {
    id: 4,
    title: "Blockchain in Fintech: Transforming Transactions",
    excerpt:
      "Blockchain technology is redefining transparency and security in financial transactions. Learn how fintech companies are adopting blockchain.",
    image: "/blog-4.jpg",
    date: "Oct 5, 2025",
  },
  {
    id: 5,
    title: "AI-Powered Financial Planning Tools",
    excerpt:
      "AI is changing how we manage money. Explore fintech platforms that use AI to help you plan investments and savings intelligently.",
    image: "/blog-5.jpg",
    date: "Oct 1, 2025",
  },
];

const Blog = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(3);

  const handleLoadMore = () => {
    setVisibleBlogs(blogs.length);
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Our <span className="text-blue-600">Insights</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest fintech trends, guides, and tips to grow your financial knowledge.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          <AnimatePresence>
            {blogs.slice(0, visibleBlogs).map((blog) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <p className="text-sm text-gray-400 mb-2">{blog.date}</p>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{blog.title}</h3>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  </div>
                  <button className="mt-auto flex items-center gap-2 text-blue-600 font-medium hover:underline">
                    Read More <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {visibleBlogs < blogs.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 px-6 rounded-lg shadow-md hover:opacity-90 transition-all font-semibold"
            >
              Load More Blogs
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
