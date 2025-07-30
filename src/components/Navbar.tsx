import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        {/* Removed Portfolio Text */}
        <div className="text-2xl font-bold text-gray-900">
          Kiruthika
        </div>

        <div className="space-x-6 text-lg font-medium">
          <Link to="/" className="hover:text-purple-700">
            Home
          </Link>
          <Link to="/about" className="hover:text-purple-700">
            About
          </Link>
          <Link to="/projects" className="hover:text-purple-700">
            Projects
          </Link>
          <Link to="/contact" className="hover:text-purple-700">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
