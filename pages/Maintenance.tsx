
import React from 'react';

const Maintenance: React.FC = () => {
  return (
    <div className="bg-black min-h-screen">
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl font-black mb-4 tracking-tighter">PREVENTATIVE <span className="text-red-700">CARE</span></h1>
        <p className="text-zinc-400 text-xl max-w-2xl mb-16">Longevity is earned through meticulous maintenance. We follow factory service schedules to the letter.</p>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="group overflow-hidden rounded-xl">
            <img 
              src="https://di-uploads-pod10.dealerinspire.com/toyotaofnewnan/uploads/2018/12/Man_Working_On_Car_Engine.jpg" 
              alt="Mechanic performing factory maintenance" 
              className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
            />
            <div className="p-6 bg-zinc-900 border border-zinc-800">
              <h3 className="text-2xl font-bold mb-2">Factory Scheduled Maintenance</h3>
              <p className="text-zinc-400">Oil services, microfilter changes, and multi-point inspections following A/B service guidelines.</p>
            </div>
          </div>
          
          <div className="group overflow-hidden rounded-xl">
            <img 
              src="https://hips.hearstapps.com/mtg-prod/65b53ae93521a5000877b763/131501010.jpg?w=768&width=768&q=75&format=webp" 
              alt="Brake and Fluid Service" 
              className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
            />
            <div className="p-6 bg-zinc-900 border border-zinc-800">
              <h3 className="text-2xl font-bold mb-2">Brake Repair & Fluid Flush</h3>
              <p className="text-zinc-400">Critical fluid replacements including brake fluid, coolant, and differential oils to maintain performance.</p>
            </div>
          </div>
        </div>

        <div className="bg-red-950/20 p-12 rounded-2xl border border-red-900/30 text-center">
          <h2 className="text-3xl font-black mb-6">WHY MAINTENANCE MATTERS?</h2>
          <p className="text-zinc-300 max-w-3xl mx-auto text-lg leading-relaxed">
            German vehicles are built to exacting tolerances. Regular maintenance isn't just a suggestion; it's a requirement to avoid costly repairs down the road. Our digital inspection reports give you total transparency into your car's health.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Maintenance;
