import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import HowItWorks from '../components/landing/HowItWorks';
import TemplatesSection from '../components/landing/TemplatesSection';

const Landing = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <div id="templates-section">
        <TemplatesSection />
      </div>
      <HowItWorks />
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">MatchMyCv</h2>
            <p className="text-gray-400 max-w-sm">
              Optimize your resume with AI-powered insights. Stand out from the competition and land your dream job faster.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Templates</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>support@matchmycv.com</li>
              <li>+91 99999 88888</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 pt-8 border-t border-gray-800">
          <p>© 2025 MatchMyCv. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;