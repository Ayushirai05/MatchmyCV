import React from 'react';
import { FileText, Calendar, Trash2, ArrowUpRight, TrendingUp, Filter } from 'lucide-react';

const History = () => {
  // Mock Data: Past scans
  const historyData = [
    { id: 1, name: "Final_Resume.pdf", role: "Senior Frontend Dev", date: "Today, 10:23 AM", score: 94, improvement: "+12%" },
    { id: 2, name: "Alex_CV_v2.pdf", role: "Frontend Developer", date: "Yesterday", score: 82, improvement: "+5%" },
    { id: 3, name: "Alex_Old_Resume.docx", role: "Software Engineer", date: "Oct 24, 2025", score: 65, improvement: null },
    { id: 4, name: "Draft_Version_1.pdf", role: "Internship Application", date: "Oct 10, 2025", score: 45, improvement: null },
  ];

  const getScoreColor = (score) => {
    if (score >= 90) return 'bg-green-100 text-green-700 border-green-200';
    if (score >= 70) return 'bg-blue-100 text-blue-700 border-blue-200';
    if (score >= 50) return 'bg-yellow-100 text-yellow-700 border-yellow-200';
    return 'bg-red-100 text-red-700 border-red-200';
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* 1. Header with Stats */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-gray-100 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Scan History</h1>
          <p className="text-gray-500 mt-2">Track your resume improvements over time.</p>
        </div>
        
        {/* Quick Stat Card */}
        <div className="bg-primary/5 border border-blue-100 p-4 rounded-xl flex items-center gap-4">
          <div className="bg-white p-3 rounded-full shadow-sm text-primary">
            <TrendingUp size={24} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-500 uppercase">Total Improvement</p>
            <p className="text-xl font-bold text-gray-900">+49% <span className="text-sm font-normal text-gray-400">since start</span></p>
          </div>
        </div>
      </div>

      {/* 2. Filters & Search (Visual only for demo) */}
      <div className="flex gap-3">
        <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium shadow-md">All Scans</button>
        <button className="px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50">High Scores</button>
        <button className="ml-auto px-4 py-2 bg-white border border-gray-200 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
          <Filter size={16} /> Filter
        </button>
      </div>

      {/* 3. The List of Cards */}
      <div className="grid gap-4">
        {historyData.map((item) => (
          <div key={item.id} className="group bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col md:flex-row items-center gap-6">
            
            {/* Icon & File Info */}
            <div className="flex items-center gap-4 w-full md:w-1/3">
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 group-hover:bg-blue-50 group-hover:text-primary transition">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 truncate">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-gray-400 w-full md:w-1/6">
              <Calendar size={16} />
              {item.date}
            </div>

            {/* Score Badge */}
            <div className="w-full md:w-1/6">
              <div className={`px-3 py-1 rounded-full text-xs font-bold border inline-flex items-center gap-1 ${getScoreColor(item.score)}`}>
                ATS Score: {item.score}
              </div>
            </div>

            {/* Improvement Indicator */}
            <div className="w-full md:w-1/6">
              {item.improvement && (
                <span className="text-green-600 text-sm font-bold flex items-center gap-1">
                  <TrendingUp size={16} /> {item.improvement}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="w-full md:w-auto ml-auto flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition" title="Delete">
                <Trash2 size={18} />
              </button>
              <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-bold shadow-lg hover:bg-gray-800 transition flex items-center gap-2">
                View Report <ArrowUpRight size={16} />
              </button>
            </div>

          </div>
        ))}
      </div>
      
    </div>
  );
};

export default History;