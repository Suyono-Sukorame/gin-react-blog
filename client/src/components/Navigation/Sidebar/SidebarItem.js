import { Link } from "react-router-dom";

const SidebarItem = ({ to, icon, children, isActive, onClick }) => {
  return (
    <li>
      <Link
        to={to}
        onClick={onClick}
        className={`flex items-center p-3 rounded-lg transition-colors ${
          isActive
            ? "bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300"
            : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
        }`}
      >
        <span className="mr-3">{icon}</span>
        {children}
      </Link>
    </li>
  );
};

export default SidebarItem;