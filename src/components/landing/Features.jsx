import React from 'react';
import { Brain, FileSearch, CheckCircle, Wand2 } from 'lucide-react';

const features = [
  {
    icon: <FileSearch className="w-8 h-8 text-primary" />,
    title: "ATS Compatibility Check",
    description: "Get a detailed score to ensure your resume passes Applicant Tracking Systems."
  },
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: "Smart Gap Analysis",
    description: "Our AI compares your resume against job descriptions to find missing skills."
  },
  {
    icon: <Wand2 className="w-8 h-8 text-primary" />,
    title: "AI Resume Builder",
    description: "Instantly rewrite and generate a polished, keyword-optimized resume."
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    title: "Instant Feedback",
    description: "Get real-time suggestions to optimize content, formatting, and keywords."
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Powerful <span className="text-primary">Features</span>
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Everything you need to make your resume stand out and land more interviews.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm p-8 text-center hover:shadow-xl transition border border-gray-100"
            >
              <div className="flex justify-center mb-6 bg-blue-50 w-16 h-16 rounded-full items-center mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;