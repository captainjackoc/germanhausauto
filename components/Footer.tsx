
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-black mb-6 tracking-tighter">
              GERMAN <span className="text-red-700">HAUS</span> AUTO
            </h3>
            <p className="text-zinc-400 max-w-sm mb-6">
              Precision engineering deserves precision service. We are Meridian's premier destination for Porsche, Mercedes-Benz, BMW, and Volkswagen care.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Location</h4>
            <p className="text-zinc-400">
              1234 W Alpine Way<br />
              Meridian, ID 83642
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <p className="text-zinc-400">
              (208) 555-0123<br />
              service@germanhausauto.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} German Haus Auto. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-zinc-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
