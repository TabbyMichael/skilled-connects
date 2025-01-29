import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-xl font-semibold text-gray-900 hover:text-primary transition-colors"
          >
            TechTalent
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/jobs"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Find Jobs
            </Link>
            <Link
              to="/freelancers"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Hire Talent
            </Link>
            <Link
              to="/login"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};