import React from 'react';
import { CheckCircle, ArrowRight, Star, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

const Templates = () => {
  const templates = [
    {
      id: 1,
      name: "Modern Resume",
      description: "A clean layout with a color sidebar. Best for Tech, Startups, and remote roles.",
      image: "/assets/modern.png", 
      popular: true,
      tags: ["Tech", "Modern"]
    },
    {
      id: 2,
      name: "Creative Minimal", 
      description: "Bold typography and a grid layout. Ideal for Designers and Marketing.",
      image: "/assets/creativeminimal.png", 
      popular: false,
      tags: ["Design", "Creative"]
    },
    {
      id: 3,
      name: "Professional Resume", 
      description: "Traditional serif format. The standard for Finance, Law, and Corporate jobs.",
      image: "/assets/professional.png", 
      popular: false,
      tags: ["Corporate", "Standard"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 h-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-100 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Layout className="text-primary" /> Resume Templates
          </h1>
          <p className="text-gray-500 mt-2">Select a design to launch the editor.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10">
        {templates.map((template) => (
          <div key={template.id} className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col h-full ring-4 ring-transparent hover:ring-blue-50">
            <div className="relative h-96 bg-gray-100 overflow-hidden border-b border-gray-100">
               <img 
                 src={template.image} 
                 alt={template.name}
                 className="w-full h-full object-cover object-top transform group-hover:scale-105 transition duration-700 opacity-95 group-hover:opacity-100"
                 onError={(e) => { e.target.src = "https://via.placeholder.com/300x400?text=Template+Preview"; }} 
               />
               <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300 backdrop-blur-sm">
                 <Link 
                   to="/builder"
                   state={{ selectedTemplate: template.name }} 
                   className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition duration-300 shadow-xl hover:bg-gray-50 hover:scale-105"
                 >
                   Use Template <ArrowRight size={18} />
                 </Link>
               </div>
               {template.popular && (
                 <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1 z-10">
                   <Star size={10} fill="currentColor" /> POPULAR
                 </div>
               )}
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-900">{template.name}</h3>
                <CheckCircle className="text-green-500 h-5 w-5 flex-shrink-0" />
              </div>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {template.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                 {template.tags.map(tag => (
                   <span key={tag} className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                     {tag}
                   </span>
                 ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;