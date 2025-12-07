import React from "react";
import { Upload, Brain, Wand2 } from "lucide-react"; 

const steps = [
  {
    icon: <Upload className="w-10 h-10 text-white" />,
    title: "Step 1: Upload Your Resume",
    description: "Easily upload your current resume in PDF or DOCX format. No sign-up required to start."
  },
  {
    icon: <Brain className="w-10 h-10 text-white" />,
    title: "Step 2: AI Scans for Gaps", 
    description: "Our AI compares your resume against the job description to find missing keywords and formatting errors."
  },
  {
    icon: <Wand2 className="w-10 h-10 text-white" />, 
    title: "Step 3: Auto-Fix & Download",
    description: "Click 'Generate' to let AI instantly rewrite your resume with the missing skills added. Download and apply!"
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          How to <span className="text-primary">Use the App</span>
        </h2>
        <p className="text-gray-600 mb-16 text-lg">
          Get a perfect resume in just three simple steps.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition duration-300 group"
            >
              <div className="mb-6 bg-primary p-5 rounded-2xl shadow-lg shadow-blue-200 flex justify-center items-center transform -rotate-3 group-hover:rotate-0 transition duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;