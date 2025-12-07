import React from "react";
import { Link } from 'react-router-dom';

const templates = [

  { 
    id: 1, 
    name: "Modern Resume", 
    image: "/assets/modern.png" 
  },
  { 
    id: 2, 
    name: "Creative Resume", 
    image: "/assets/creativeminimal.png"
  },
  { 
    id: 3, 
    name: "Professional Resume", 
    image: "/assets/professional.png" 
  },
];

const TemplatesSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Explore <span className="text-primary">Resume Templates</span>
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Choose a template, customize it, and create your perfect resume in minutes.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group border border-gray-100"
            >
              <div className="relative h-96 bg-gray-100">
                <img 
                  src={template.image} 
                  alt={template.name}
                  className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-105"
                  onError={(e) => {
                
                    console.error("Failed to load:", template.image); 
                    e.target.style.display = 'none'; 
                  }}
                />
               
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                  <Link 
                    to="/register" 
                    className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition duration-300"
                  >
                    Use Template
                  </Link>
                </div>
              </div>
              
              <div className="p-6 text-center border-t border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">{template.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplatesSection;