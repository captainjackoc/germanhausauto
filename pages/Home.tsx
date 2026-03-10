
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img 
            src="https://a.storyblok.com/f/285489813253582/5000x1485/6db3418b7b/model-992850-2025-side-shot_f4ca4176a9fc4f82a7d87ee2969ef6e7.png" 
            alt="Porsche 911 Side Shot" 
            className="w-full h-auto object-contain opacity-70 scale-110 lg:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none uppercase italic">
              ENGINEERED <br />
              <span className="text-red-700">TO EXCEL</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-xl mb-10 font-light">
              Meridian's home for authentic German automotive excellence. Specializing in Porsche, BMW, Mercedes, and Audi performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-red-800 hover:bg-red-700 text-white px-10 py-4 rounded-md font-bold text-lg transition-transform hover:scale-105 text-center">
                Book Your Service
              </Link>
              <Link to="/services/repair" className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-10 py-4 rounded-md font-bold text-lg transition-colors text-center">
                Our Expertise
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-zinc-500 uppercase tracking-widest">The Brands We Master</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60">
            <div className="flex items-center justify-center p-8 border border-zinc-800 rounded-lg hover:border-red-900 hover:opacity-100 transition-all">
               <span className="text-2xl font-bold italic">PORSCHE</span>
            </div>
            <div className="flex items-center justify-center p-8 border border-zinc-800 rounded-lg hover:border-red-900 hover:opacity-100 transition-all">
               <span className="text-2xl font-bold italic">MERCEDES-BENZ</span>
            </div>
            <div className="flex items-center justify-center p-8 border border-zinc-800 rounded-lg hover:border-red-900 hover:opacity-100 transition-all">
               <span className="text-2xl font-bold italic">BMW</span>
            </div>
            <div className="flex items-center justify-center p-8 border border-zinc-800 rounded-lg hover:border-red-900 hover:opacity-100 transition-all">
               <span className="text-2xl font-bold italic">AUDI/VW</span>
            </div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6 tracking-tight uppercase italic">PRECISION MEETS <br/><span className="text-red-700">PASSION.</span></h2>
            <p className="text-zinc-400 text-lg mb-8">
              At German Haus Auto, we understand that your vehicle is more than just transportation. It's a masterpiece of engineering that requires a specialized touch. Our factory-trained technicians use state-of-the-art diagnostic equipment to ensure your car performs exactly as it was designed.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-zinc-300">
                <span className="bg-red-800 rounded-full p-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg></span>
                Advanced Computer Diagnostics
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <span className="bg-red-800 rounded-full p-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg></span>
                OEM Parts Guarantee
              </li>
              <li className="flex items-center gap-3 text-zinc-300">
                <span className="bg-red-800 rounded-full p-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg></span>
                Performance Tuning Experts
              </li>
            </ul>
          </div>
          <div className="relative group">
            <img 
              src="https://picsum.photos/id/133/800/800" 
              alt="Vintage Mercedes Engine" 
              className="rounded-lg shadow-2xl transition-transform group-hover:scale-[1.02] duration-500 relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-red-900/20 backdrop-blur-3xl -z-0 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
