import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // THIS IS THE CRITICAL FIX
  useEffect(() => {
    // We check for 'userToken' because that is what  Sidebar uses
    const token = localStorage.getItem('userToken'); 
    
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleTemplateClick = () => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const section = document.getElementById('templates-section');
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('templates-section');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="bg-white fixed w-full z-50 top-0 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary tracking-tight hover:opacity-80 transition">
              MatchMyCv
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-primary font-medium text-sm tracking-wide transition">
              HOME
            </Link>
            <button 
              onClick={handleTemplateClick} 
              className="text-gray-600 hover:text-primary font-medium text-sm tracking-wide transition focus:outline-none"
            >
              TEMPLATE
            </button>
            <Link to="/analyze" className="text-gray-600 hover:text-primary font-medium text-sm tracking-wide transition">
              ANALYZE RESUME
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-primary font-medium text-sm tracking-wide transition">
              CONTACT
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-primary font-medium text-sm tracking-wide transition">
              ABOUT
            </Link>
          </div>

          {/* LOGIC TO SHOW PROFILE OR LOGIN BUTTONS */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              // If Logged In: Show Profile Icon
              <Link to="/profile" className="text-gray-600 hover:text-primary transition p-2 border border-transparent hover:border-gray-200 rounded-full">
                <User size={28} />
              </Link>
            ) : (
              // If Logged Out: Show Login/Create Account
              <>
                <Link to="/login" className="text-gray-900 hover:text-primary font-bold px-4 py-2 transition">
                  Login
                </Link>
                <Link to="/register" className="bg-primary hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold shadow-md transition transform hover:-translate-y-0.5">
                  Create Account
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary rounded-lg font-medium transition">
              HOME
            </Link>
            <button onClick={handleTemplateClick} className="block w-full text-left px-3 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary rounded-lg font-medium transition">
              TEMPLATE
            </button>
            <Link to="/analyze" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary rounded-lg font-medium transition">
              ANALYZE RESUME
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary rounded-lg font-medium transition">
              CONTACT
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-700 hover:bg-blue-50 hover:text-primary rounded-lg font-medium transition">
              ABOUT
            </Link>
            
            <div className="border-t border-gray-100 my-2 pt-2">
              {isLoggedIn ? (
                 <Link to="/profile" onClick={() => setIsOpen(false)} className="flex items-center gap-2 px-3 py-3 text-gray-900 font-bold hover:text-primary">
                   <User size={20} /> My Profile
                 </Link>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-gray-900 font-bold hover:text-primary">
                    Login
                  </Link>
                  <Link to="/register" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-primary font-bold bg-blue-50 rounded-lg mt-2">
                    Create Account
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;