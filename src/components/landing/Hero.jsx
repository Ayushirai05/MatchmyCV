import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-16 md:py-24 mt-10">
      <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
          Land Your <span className="text-primary">Dream Job</span> with a Smarter Resume
        </h1>
        
        <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
          Don't just check your score—fix it. Our AI analyzes your resume, detects missing keywords, and <strong>rewrites it instantly</strong> to beat the ATS.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link 
            to="/templates-view" 
            className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            Build My Resume
          </Link>
          
          <Link 
            to="/analyze" 
            className="bg-white border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary px-8 py-4 rounded-full font-bold text-lg transition"
          >
            Analyze Resume
          </Link>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <img
          className="w-full max-w-lg rounded-lg shadow-2xl"
          src="/assets/Resume-CV.jpg"
          alt="Resume Analysis"
          onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Resume+Image"; }} 
        />
      </div>
    </header>
  );
};

export default Hero;