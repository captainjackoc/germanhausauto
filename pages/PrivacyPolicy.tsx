
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-black min-h-screen py-24 text-zinc-300">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-black mb-12 text-white italic tracking-tighter">PRIVACY POLICY</h1>
        <div className="space-y-8 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-red-700 mb-4">1. Data Collection</h2>
            <p>At German Haus Auto, we collect basic contact information and vehicle details when you book a service or use our contact forms. This includes name, email, phone number, and vehicle VIN/model information.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-red-700 mb-4">2. AI Lab Usage</h2>
            <p>Our AI Lab uses Google Gemini API services. Images uploaded to the AI Lab are processed temporarily for image generation and are not stored permanently on our local servers. Usage of these tools is subject to Google's Privacy Policy as the underlying engine.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-700 mb-4">3. Use of Information</h2>
            <p>We use your data strictly for scheduling maintenance, communicating about repairs, and internal quality assurance. We never sell your personal or vehicle data to third-party marketing firms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-red-700 mb-4">4. Security</h2>
            <p>We implement industry-standard security measures to protect your digital records. Physical records at our Meridian location are kept in secured areas accessible only by authorized management.</p>
          </section>

          <p className="text-sm text-zinc-500 pt-12 border-t border-zinc-900">
            Last Updated: May 20, 2024. For questions regarding your data, please contact service@germanhausauto.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
