import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom'; // Added Link here
import { LayoutDashboard, FileSearch, History, LayoutTemplate, User, LogOut } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: FileSearch, label: 'Analyze Resume', path: '/analyze' },
    { icon: LayoutTemplate, label: 'Templates', path: '/templates-view' },
    { icon: History, label: 'History', path: '/history' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/');
  };

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-100 flex flex-col fixed left-0 top-0 z-50 shadow-sm">
      
      {/* 1. UPDATED: LOGO IS NOW CLICKABLE */}
      <div className="p-8 flex items-center gap-3">
        <Link 
          to="/" 
          className="font-bold text-2xl text-primary tracking-tight hover:opacity-80 transition cursor-pointer"
        >
          MatchMyCv
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 font-medium ${
                isActive
                  ? 'bg-primary text-white shadow-lg shadow-blue-200 translate-x-1'
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`
            }
          >
            <item.icon size={20} />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100 mb-2">
        <button 
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full text-gray-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition font-medium"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;