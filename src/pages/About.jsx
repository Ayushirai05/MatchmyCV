import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <div className="py-16 px-6 pt-32">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            About AI Resume Analyzer
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            We help job seekers craft smarter, more effective resumes with the power of AI.
            Our platform analyzes your resume like a professional recruiter, giving actionable insights
            to maximize your chances of landing your dream job.
          </p>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-20 text-center">
          <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-xl transition border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-3">AI-Powered Insights</h3>
            <p className="text-gray-600 leading-relaxed">
              Get detailed feedback on your resume based on AI analysis of recruiter trends.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-xl transition border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-3">Easy to Use</h3>
            <p className="text-gray-600 leading-relaxed">
              Upload your resume and receive actionable suggestions within minutes. No setup needed.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-xl transition border border-gray-100">
            <h3 className="text-xl font-bold text-primary mb-3">Templates & Guidance</h3>
            <p className="text-gray-600 leading-relaxed">
              Access professional resume templates and guidance to create a polished resume effortlessly.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-16 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower job seekers worldwide with AI-driven resume optimization. We aim to make
              every applicant confident, informed, and ready to impress recruiters with a standout resume.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To redefine the job application experience by providing intelligent tools that help
              candidates showcase their skills effectively and achieve their career goals.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;