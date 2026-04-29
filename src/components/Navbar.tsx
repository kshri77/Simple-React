import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Home, Info, UserPlus } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8" />
            <span className="font-bold text-xl tracking-tight">ABC College</span>
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:text-indigo-200 transition">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/registration" className="flex items-center space-x-1 hover:text-indigo-200 transition">
              <UserPlus className="h-5 w-5" />
              <span>Register</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 hover:text-indigo-200 transition">
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
