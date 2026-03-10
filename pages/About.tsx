
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.hgmsites.net/hug/2018-mclaren-mcl33-formula-1-race-car_100643869_h.jpg" 
            alt="Performance Racing Heritage" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic">Legacy of Quality</h1>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-red-700 mb-6 tracking-wide uppercase">Founded in Meridian</h2>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              German Haus Auto was established in 2012 with a singular mission: to provide Boise and Meridian area owners with an alternative to dealership service that doesn't compromise on expertise or quality.
            </p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-6">
              Our founder, a master technician with over 20 years of experience in Stuttgart and across the U.S., brought a standard of meticulous care that has become our trademark. We don't just fix cars; we preserve automotive legacies.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <span className="block text-4xl font-black text-white mb-2 tracking-tighter">15+</span>
                <span className="text-zinc-500 font-bold uppercase text-sm tracking-widest">Years Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-black text-white mb-2 tracking-tighter">10k+</span>
                <span className="text-zinc-500 font-bold uppercase text-sm tracking-widest">Cars Serviced</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://media.istockphoto.com/id/1207163609/photo/falls-colors-in-meridian-idaho.jpg?s=612x612&w=0&k=20&c=pGOnEoKZ50FJH7jqIrqGUKFjwwIpX-1z0GoO5S2DmQI=" 
              alt="Meridian Idaho Landscape" 
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
