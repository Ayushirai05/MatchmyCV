import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, ArrowRight, FileText, TrendingUp, Award, Clock, Sparkles } from 'lucide-react';

const Dashboard = () => {
  // Mock Data
  const stats = [
    { label: "Total Scans", value: "12", icon: FileText, color: "bg-blue-50 text-blue-600" },
    { label: "Average Score", value: "78%", icon: TrendingUp, color: "bg-green-50 text-green-600" },
    { label: "Interviews", value: "3", icon: Award, color: "bg-purple-50 text-purple-600" },
  ];

  const recentScans = [
    { id: 1, name: "Frontend_Dev_Resume.pdf", role: "Frontend Developer", date: "2 hours ago", score: 82, grade: "A" },
    { id: 2, name: "Alex_Resume_v2.pdf", role: "Full Stack Engineer", date: "1 day ago", score: 65, grade: "B" },
    { id: 3, name: "Old_Resume_2024.pdf", role: "Software Intern", date: "3 days ago", score: 45, grade: "C" },
  ];

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600 bg-green-50 border-green-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-50 border-yellow-100';
    return 'text-red-600 bg-red-50 border-red-100';
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      
      {/* 1. Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex! 👋</h1>
          <p className="text-gray-500 mt-1">Here is what's happening with your job search today.</p>
        </div>
        <Link 
          to="/analyze" 
          className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-blue-200 transition transform hover:-translate-y-0.5 flex items-center gap-2"
        >
          <Plus size={20} /> New Scan
        </Link>
      </div>

      {/* 2. Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className={`p-4 rounded-xl ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* 3. Recent Activity (Takes up 2 columns) */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-lg text-gray-900">Recent Analysis</h3>
            <Link to="/history" className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentScans.map((scan) => (
              <div key={scan.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer group">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${getScoreColor(scan.score)}`}>
                    {scan.score}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 group-hover:text-primary transition">{scan.role}</h4>
                    <p className="text-sm text-gray-500 flex items-center gap-2">
                      <FileText size={12} /> {scan.name} • {scan.date}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                   <button className="text-gray-300 group-hover:text-primary transition">
                     <ArrowRight size={20} />
                   </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. "Tip of the Day" / Promo Card (Takes up 1 column) */}
        <div className="bg-gradient-to-br from-indigo-900 to-blue-900 rounded-2xl p-8 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <div className="bg-white/10 w-fit p-3 rounded-xl mb-6">
              <Sparkles className="text-yellow-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">Pro Tip: Quantify!</h3>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Recruiters love numbers. Instead of "Managed a team", try "Managed a team of 5 and increased efficiency by 20%".
            </p>
            <Link to="templates-views" className="bg-white text-blue-900 w-full py-3 rounded-xl font-bold text-center block hover:bg-blue-50 transition">
              View Templates
            </Link>
          </div>
          
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full opacity-5 -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500 rounded-full opacity-20 -ml-10 -mb-10 blur-xl"></div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;