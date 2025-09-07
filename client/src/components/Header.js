import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    navigate("/login");
    window.location.reload();
  };

  const navLinkClasses = (path) =>
    `flex items-center transition-colors ${
      isActive(path)
        ? "text-primary font-semibold"
        : "text-gray-600 hover:text-primary"
    }`;

  const mobileNavLinkClasses = (path) =>
    `flex items-center w-full p-2 rounded-md transition-colors ${
      isActive(path)
        ? "text-primary font-semibold bg-blue-50"
        : "text-gray-600 hover:text-primary hover:bg-gray-100"
    }`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          MyBlog
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center relative">
          <Link to="/" className={navLinkClasses("/")}>
            Home
          </Link>
          <Link to="/blog" className={navLinkClasses("/blog")}>
            Blog
          </Link>
          <Link to="/about" className={navLinkClasses("/about")}>
            About
          </Link>
          <Link to="/contact" className={navLinkClasses("/contact")}>
            Contact
          </Link>

          {/* Auth Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-gray-600 hover:text-primary transition-colors focus:outline-none"
            >
              <FaUser className="mr-2" />
              {token ? "Account" : "Auth"}
              <svg
                className={`ml-2 w-4 h-4 transform transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-20">
                <div className="flex flex-col p-2 space-y-2">
                  {token ? (
                    <>
                      <Link
                        to="/profile"
                        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <FaUser className="mr-2" /> Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center px-3 py-2 rounded-md text-red-500 hover:bg-red-50 hover:text-red-700"
                      >
                        <FaSignOutAlt className="mr-2" /> Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <FaSignInAlt className="mr-2" /> Login
                      </Link>
                      <Link
                        to="/register"
                        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-100"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        <FaUserPlus className="mr-2" /> Register
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-primary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t">
          <div className="flex flex-col space-y-4 items-start">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={mobileNavLinkClasses("/")}
            >
              Home
            </Link>
            <Link
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className={mobileNavLinkClasses("/blog")}
            >
              Blog
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={mobileNavLinkClasses("/about")}
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={mobileNavLinkClasses("/contact")}
            >
              Contact
            </Link>
            <div className="w-full border-t my-2"></div>
            {token ? (
              <>
                <Link
                  to="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileNavLinkClasses("/profile")}
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full p-2 rounded-md text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors"
                >
                  <FaSignOutAlt className="mr-3" /> Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileNavLinkClasses("/login")}
                >
                  <FaSignInAlt className="mr-3" /> Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className={mobileNavLinkClasses("/register")}
                >
                  <FaUserPlus className="mr-3" /> Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
