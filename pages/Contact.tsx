
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-black min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20">
        <div>
          <h1 className="text-6xl font-black tracking-tighter mb-8 uppercase italic">Get in <span className="text-red-700">Touch</span></h1>
          <p className="text-zinc-400 text-lg mb-12">
            Ready to schedule your appointment or have a question about your German car? Fill out the form or give us a call directly. Our team is standing by.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="bg-red-800/20 p-4 rounded-full h-min">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-xl mb-1">Call Us</h4>
                <p className="text-zinc-500 text-lg">(208) 555-0123</p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="bg-red-800/20 p-4 rounded-full h-min">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-xl mb-1">Visit Shop</h4>
                <p className="text-zinc-500 text-lg">1234 W Alpine Way, Meridian, ID 83642</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="bg-red-800/20 p-4 rounded-full h-min">
                <svg className="w-8 h-8 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h4 className="text-white font-bold text-xl mb-1">Hours</h4>
                <p className="text-zinc-500 text-lg">Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat: By Appointment Only</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 p-10 rounded-2xl border border-zinc-800">
          {submitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <div className="w-20 h-20 bg-green-900/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-3xl font-bold mb-2">Message Sent</h3>
              <p className="text-zinc-400">We will get back to you within 24 business hours.</p>
              <button onClick={() => setSubmitted(false)} className="mt-8 text-red-700 font-bold hover:underline">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-zinc-500 mb-2 uppercase tracking-widest">First Name</label>
                  <input required type="text" className="w-full bg-black border border-zinc-800 rounded-md p-4 text-white focus:outline-none focus:border-red-800 transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-zinc-500 mb-2 uppercase tracking-widest">Last Name</label>
                  <input required type="text" className="w-full bg-black border border-zinc-800 rounded-md p-4 text-white focus:outline-none focus:border-red-800 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-500 mb-2 uppercase tracking-widest">Email Address</label>
                <input required type="email" className="w-full bg-black border border-zinc-800 rounded-md p-4 text-white focus:outline-none focus:border-red-800 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-500 mb-2 uppercase tracking-widest">Car Model & Year</label>
                <input required type="text" placeholder="e.g. 2018 Porsche 911 GT3" className="w-full bg-black border border-zinc-800 rounded-md p-4 text-white focus:outline-none focus:border-red-800 transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-bold text-zinc-500 mb-2 uppercase tracking-widest">Message / Service Needed</label>
                <textarea required rows={5} className="w-full bg-black border border-zinc-800 rounded-md p-4 text-white focus:outline-none focus:border-red-800 transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-red-800 hover:bg-red-700 text-white font-black py-5 rounded-md text-xl transition-all uppercase italic tracking-tighter">
                Send Request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
