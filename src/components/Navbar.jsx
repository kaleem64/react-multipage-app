import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold">🛍️ ShopHub</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              `hover:text-blue-200 transition-colors ${isActive ? 'text-yellow-300' : ''}`
            }>Home</NavLink>
            <NavLink to="/products" className={({ isActive }) => 
              `hover:text-blue-200 transition-colors ${isActive ? 'text-yellow-300' : ''}`
            }>Products</NavLink>
            <NavLink to="/about" className={({ isActive }) => 
              `hover:text-blue-200 transition-colors ${isActive ? 'text-yellow-300' : ''}`
            }>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => 
              `hover:text-blue-200 transition-colors ${isActive ? 'text-yellow-300' : ''}`
            }>Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-blue-200">Home</Link>
              <Link to="/products" onClick={() => setIsOpen(false)} className="hover:text-blue-200">Products</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-blue-200">About</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-blue-200">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;