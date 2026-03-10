
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-black border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <span className="text-white font-black text-2xl tracking-tighter">
                GERMAN <span className="text-red-700">HAUS</span> AUTO
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-zinc-300 hover:text-white font-medium">Home</Link>
            <Link to="/about" className="text-zinc-300 hover:text-white font-medium">About Us</Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-zinc-300 group-hover:text-white font-medium flex items-center gap-1 py-4 uppercase text-sm tracking-widest">
                Services
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className={`absolute left-0 mt-0 w-56 bg-zinc-900 border border-zinc-800 rounded-md shadow-lg transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <Link to="/services/repair" className="block px-4 py-3 text-sm text-zinc-300 hover:bg-red-900 hover:text-white uppercase font-bold tracking-tight">Repair</Link>
                <Link to="/services/maintenance" className="block px-4 py-3 text-sm text-zinc-300 hover:bg-red-900 hover:text-white uppercase font-bold tracking-tight">Maintenance</Link>
              </div>
            </div>

            <Link to="/contact" className="bg-red-800 text-white px-5 py-2 rounded-md hover:bg-red-700 font-bold uppercase text-sm tracking-widest transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
