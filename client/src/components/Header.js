import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaEnvelope, FaUser, FaSignInAlt, FaUserPlus, FaSignOutAlt, FaBlog } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsMenuOpen(false);
    navigate('/login'); // Arahkan ke halaman login setelah logout
    window.location.reload(); // Refresh untuk memastikan semua state di-reset
  };

  const navLinkClasses = (path) =>
    `flex items-center transition-colors ${isActive(path) ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'}`;

  const mobileNavLinkClasses = (path) =>
    `flex items-center w-full p-2 rounded-md transition-colors ${isActive(path) ? 'text-primary font-semibold bg-blue-50' : 'text-gray-600 hover:text-primary hover:bg-gray-100'}`;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          MyBlog
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className={navLinkClasses('/')}><FaHome className="mr-2" /> Home</Link>
          <Link to="/blog" className={navLinkClasses('/blog')}><FaBlog className="mr-2" /> Blog</Link>
          {token ? (
            <>
              <Link to="/profile" className={navLinkClasses('/profile')}><FaUser className="mr-2" /> Profile</Link>
              <button onClick={handleLogout} className="flex items-center text-red-500 hover:text-red-700 transition-colors">
                <FaSignOutAlt className="mr-2" /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className={navLinkClasses('/login')}><FaSignInAlt className="mr-2" /> Login</Link>
              <Link to="/register" className="btn-primary flex items-center"><FaUserPlus className="mr-2" /> Register</Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-primary focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-t">
          <div className="flex flex-col space-y-4 items-start">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClasses('/')}><FaHome className="mr-3" /> Home</Link>
            <Link to="/blog" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClasses('/blog')}><FaBlog className="mr-3" /> Blog</Link>
            <div className="w-full border-t my-2"></div>
            {token ? (
              <>
                <Link to="/profile" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClasses('/profile')}><FaUser className="mr-3" /> Profile</Link>
                <button onClick={handleLogout} className="flex items-center w-full p-2 rounded-md text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors">
                  <FaSignOutAlt className="mr-3" /> Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClasses('/login')}><FaSignInAlt className="mr-3" /> Login</Link>
                <Link to="/register" onClick={() => setIsMenuOpen(false)} className={mobileNavLinkClasses('/register')}><FaUserPlus className="mr-3" /> Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;