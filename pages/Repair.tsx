
import React from 'react';

const Repair: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl font-black mb-4 tracking-tighter">PRECISION <span className="text-red-700">REPAIR</span></h1>
        <p className="text-zinc-400 text-xl max-w-2xl mb-16">When performance falters, we restore it to factory standards. No shortcut is ever taken.</p>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="group overflow-hidden rounded-xl">
            <img 
              src="https://di-uploads-pod11.dealerinspire.com/reevesimportmotorcars/uploads/2021/02/2021-audi-q7.jpg" 
              alt="Audi Q7 Performance Repair" 
              className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
            />
            <div className="p-6 bg-zinc-900 border border-zinc-800">
              <h3 className="text-2xl font-bold mb-2">Engine & Transmission</h3>
              <p className="text-zinc-400">Complete overhauls, leak resolution, and transmission rebuilding for all German models.</p>
            </div>
          </div>
          
          <div className="group overflow-hidden rounded-xl">
            <img 
              src="https://images.unsplash.com/photo-1441148345475-03a2e82f9719?q=80&w=800&auto=format&fit=crop" 
              alt="Volkswagen Beetle Electrical" 
              className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-100"
            />
            <div className="p-6 bg-zinc-900 border border-zinc-800">
              <h3 className="text-2xl font-bold mb-2">Electrical & Diagnostics</h3>
              <p className="text-zinc-400">Solving complex electrical gremlins and sensor issues using specialized factory software.</p>
            </div>
          </div>
        </div>

        <div className="bg-black p-12 rounded-2xl border border-zinc-800">
          <h2 className="text-3xl font-bold mb-8 text-white">Major Component Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Turbocharger Service",
              "Brake System Overhaul",
              "Cooling System Repair",
              "Exhaust & Emissions",
              "Suspension Restoration",
              "Fuel System Service"
            ].map((service, i) => (
              <div key={i} className="flex items-center gap-4 text-zinc-300">
                <div className="w-2 h-2 bg-red-800 rounded-full"></div>
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Repair;
