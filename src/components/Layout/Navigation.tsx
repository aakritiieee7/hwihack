import React, { useState } from 'react';
import { Menu, X, Leaf, LogIn, LogOut } from 'lucide-react'; // Import new icons for login/logout
import { Link } from 'react-router-dom'; // Import Link for navigation

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  isAuthenticated: boolean; // New prop to indicate authentication status
  onLogout: () => void;     // New prop for logout functionality
  username: string | null;  // New prop to display username
}

const Navigation: React.FC<NavigationProps> = ({ 
  currentPage, 
  onPageChange, 
  isAuthenticated, 
  onLogout, 
  username 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'scan', label: 'Scan', path: '/scan' },
    { id: 'insights', label: 'Insights', path: '/insights' },
    { id: 'team', label: 'Team', path: '/team' }
  ];

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - now a Link to home */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <Leaf className="w-5 h-5 text-[#00EB88]" />
            </div>
            <span className="text-xl font-bold text-black">PackedRight?</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                // Update currentPage state for highlighting (optional, can be done with activeClass from NavLink)
                onClick={() => onPageChange(item.id)} 
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-[#00EB88] border-b-2 border-[#00EB88]'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Conditional rendering for Login/Logout */}
            {isAuthenticated ? (
              <>
                <span className="text-gray-700 text-sm font-medium">Hi, {username || 'User'}!</span>
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 rounded-md transition-colors duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => onPageChange('login')} // Set current page to login for highlighting
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentPage === 'login'
                    ? 'text-[#00EB88] border-b-2 border-[#00EB88]'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-black transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => {
                  onPageChange(item.id);
                  setIsMenuOpen(false); // Close menu on click
                }}
                className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'text-[#00EB88] bg-gray-50'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <div className="block w-full text-left px-4 py-2 text-sm font-medium text-gray-700">
                  Hi, {username || 'User'}!
                </div>
                <button
                  onClick={() => {
                    onLogout();
                    setIsMenuOpen(false); // Close menu on logout
                  }}
                  className="flex items-center space-x-2 w-full text-left px-4 py-2 text-sm font-medium text-gray-600 hover:text-black hover:bg-gray-50 transition-colors duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                onClick={() => {
                  onPageChange('login');
                  setIsMenuOpen(false); // Close menu on click
                }}
                className={`block w-full text-left px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  currentPage === 'login'
                    ? 'text-[#00EB88] bg-gray-50'
                    : 'text-gray-600 hover:text-black hover:bg-gray-50'
                }`}
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
