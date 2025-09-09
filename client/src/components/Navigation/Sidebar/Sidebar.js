import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiBook, FiUser, FiMail, FiSettings, FiX } from "react-icons/fi";

const Sidebar = ({ isOpen, onClose }) => {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  const navItems = [
    { path: "/", label: "Home", icon: <FiHome /> },
    { path: "/blog", label: "Blog", icon: <FiBook /> },
    { path: "/about", label: "About", icon: <FiUser /> },
    { path: "/contact", label: "Contact", icon: <FiMail /> },
    { path: "/settings", label: "Settings", icon: <FiSettings /> },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <div className="absolute left-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
          <span className="text-xl font-bold text-primary">ModernBlog</span>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            <FiX className="w-5 h-5" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={onClose}
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
                      : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;