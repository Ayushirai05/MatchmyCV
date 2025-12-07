import React, { useState } from 'react';
import { Upload, FileText, Image as ImageIcon, CheckCircle, AlertTriangle, XCircle, Loader2, Wand2, Sparkles, Target, Zap, Download, Eye, ChevronRight, X } from 'lucide-react';
import ScoreRing from '../components/ScoreRing';

// Resume Preview Modal
const ResumePreviewModal = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
    <div className="bg-white w-full max-w-3xl h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      
      {/* Modal Header */}
      <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
           <Sparkles className="text-yellow-400" size={20} />
           <span className="font-bold">AI Optimized Preview</span>
        </div>
        <button onClick={onClose} className="hover:bg-gray-700 p-2 rounded-lg transition"><X size={20} /></button>
      </div>

      {/* Resume Document View */}
      <div className="flex-1 overflow-y-auto p-8 bg-gray-100">
        <div className="bg-white shadow-lg mx-auto max-w-[21cm] min-h-[29.7cm] p-12 text-sm text-gray-800 space-y-6">
          
          {/* Header */}
          <div className="border-b pb-6">
            <h1 className="text-3xl font-bold text-gray-900 uppercase tracking-wider">Alex Morgan</h1>
            <p className="text-gray-600 mt-2">Indore, India | +91 99999 88888 | alex@example.com</p>
          </div>

          {/* Summary */}
          <div>
            <h2 className="font-bold text-gray-900 border-b-2 border-gray-900 mb-3 uppercase text-xs tracking-widest">Professional Summary</h2>
            <p className="leading-relaxed text-gray-700">
              Results-oriented <span className="bg-green-100 text-green-800 font-bold px-1 rounded">Senior Frontend Engineer</span> with 2+ years of experience. 
              Proven track record in building scalable web applications using <span className="bg-green-100 text-green-800 font-bold px-1 rounded">React.js</span> and 
              <span className="bg-green-100 text-green-800 font-bold px-1 rounded"> TypeScript</span>. Adept at optimizing performance and deploying solutions on <span className="bg-green-100 text-green-800 font-bold px-1 rounded">AWS</span>.
            </p>
          </div>

          {/* Skills (Optimized) */}
          <div>
            <h2 className="font-bold text-gray-900 border-b-2 border-gray-900 mb-3 uppercase text-xs tracking-widest">Technical Skills</h2>
            <div className="grid grid-cols-2 gap-4">
               <div>
                 <span className="font-bold">Languages:</span> JavaScript (ES6+), <span className="bg-green-100 text-green-800 font-bold px-1 rounded">TypeScript</span>, Python, SQL
               </div>
               <div>
                 <span className="font-bold">Frameworks:</span> React, <span className="bg-green-100 text-green-800 font-bold px-1 rounded">Next.js</span>, Tailwind CSS, Node.js
               </div>
               <div>
                 <span className="font-bold">Tools:</span> Git, Docker, <span className="bg-green-100 text-green-800 font-bold px-1 rounded">AWS (S3, EC2)</span>, Jest
               </div>
            </div>
          </div>

           {/* Experience */}
           <div>
            <h2 className="font-bold text-gray-900 border-b-2 border-gray-900 mb-3 uppercase text-xs tracking-widest">Experience</h2>
            <div className="mb-4">
               <div className="flex justify-between font-bold">
                 <span>Frontend Developer</span>
                 <span>2023 - Present</span>
               </div>
               <p className="italic text-gray-600 mb-2">TechCorp Solutions</p>
               <ul className="list-disc list-inside space-y-1 text-gray-700">
                 <li>Developed responsive UI components using React and <span className="bg-green-100 text-green-800 font-bold px-1 rounded">TypeScript</span>, reducing bugs by 30%.</li>
                 <li>Implemented CI/CD pipelines for automated deployment to <span className="bg-green-100 text-green-800 font-bold px-1 rounded">AWS</span>.</li>
                 <li>Collaborated with backend teams to integrate RESTful APIs.</li>
               </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Actions */}
      <div className="bg-white p-4 border-t flex justify-end gap-3">
        <button onClick={onClose} className="px-6 py-2 text-gray-600 font-bold hover:bg-gray-100 rounded-lg transition">Close</button>
        <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-lg flex items-center gap-2">
          <Download size={18} /> Download PDF
        </button>
      </div>
    </div>
  </div>
);

// --- MAIN COMPONENT ---
const Analyze = () => {
  const [file, setFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  const [generatingNew, setGeneratingNew] = useState(false);
  const [newResumeReady, setNewResumeReady] = useState(false);
  const [showPreview, setShowPreview] = useState(false); // Toggle for Modal

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setShowResults(true);
    }, 2000);
  };

  const handleGenerateOptimized = () => {
    setGeneratingNew(true);
    setTimeout(() => {
      setGeneratingNew(false);
      setNewResumeReady(true);
    }, 3000);
  };

  const isImage = file && file.type.startsWith('image/');

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Show Modal if active */}
      {showPreview && <ResumePreviewModal onClose={() => setShowPreview(false)} />}

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Resume Analysis Center</h1>
          <p className="text-blue-100">Upload your resume and job description to get a detailed AI score.</p>
        </div>
        <div className="absolute right-0 top-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 min-h-[600px]">
        
        {/* LEFT COLUMN: Inputs */}
        <div className="flex flex-col gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1 transition hover:shadow-md">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-primary flex items-center justify-center text-sm font-bold">1</div>
              Upload Resume
            </h2>
            <label className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition h-64 ${file ? 'border-primary bg-blue-50/30' : 'border-gray-200 hover:border-primary hover:bg-gray-50'}`}>
              <input type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.docx,.doc,.txt,.jpg,.jpeg,.png" />
              {file ? (
                <div className="animate-fade-in">
                  <div className="bg-white p-4 rounded-full shadow-lg mb-4 mx-auto w-20 h-20 flex items-center justify-center">
                    {isImage ? <ImageIcon className="h-10 w-10 text-purple-500" /> : <FileText className="h-10 w-10 text-primary" />}
                  </div>
                  <p className="font-bold text-gray-900 text-lg truncate max-w-[250px]">{file.name}</p>
                  <p className="text-sm text-green-600 font-medium mt-1 bg-green-50 px-3 py-1 rounded-full inline-block">Ready to analyze</p>
                  <button onClick={(e) => { e.preventDefault(); setFile(null); }} className="block w-full text-xs text-red-500 hover:underline mt-4">Remove file</button>
                </div>
              ) : (
                <>
                  <div className="bg-blue-50 p-5 rounded-full mb-4 text-primary group-hover:scale-110 transition"><Upload className="h-8 w-8" /></div>
                  <p className="font-bold text-gray-900 text-lg">Drop your resume here</p>
                  <p className="text-sm text-gray-400 mt-2">PDF, Text, or Image (Max 5MB)</p>
                </>
              )}
            </label>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-1 transition hover:shadow-md">
            <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-primary flex items-center justify-center text-sm font-bold">2</div>
              Job Description
            </h2>
            <textarea className="w-full h-48 p-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none text-sm leading-relaxed" placeholder="Paste the job description here..."></textarea>
            <button onClick={handleAnalyze} disabled={!file || analyzing} className={`w-full mt-6 py-4 rounded-xl font-bold shadow-lg transition flex justify-center items-center gap-2 text-white text-lg ${!file || analyzing ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary hover:bg-blue-700 hover:scale-[1.01] transform'}`}>
              {analyzing ? <><Loader2 className="animate-spin" /> Processing...</> : <><Sparkles size={20} /> Analyze Now</>}
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Results */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden relative flex flex-col h-full min-h-[600px]">
          {analyzing && (
            <div className="absolute inset-0 z-20 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
                <div className="relative bg-white p-6 rounded-full shadow-2xl border-4 border-blue-50"><Loader2 className="h-16 w-16 text-primary animate-spin" /></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">AI is reading your resume...</h3>
              <p className="text-gray-500">Comparing 20+ parameters with job description</p>
            </div>
          )}

          {!showResults && !analyzing && (
            <div className="h-full flex flex-col items-center justify-center p-12 text-center bg-gray-50/30">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6"><Wand2 className="h-12 w-12 text-primary" /></div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Waiting for Data</h3>
              <p className="text-gray-500 mb-8 max-w-sm">Our AI engine is ready. Upload your documents to reveal your score.</p>
            </div>
          )}

          {showResults && !analyzing && (
            <div className="flex flex-col h-full animate-fade-in">
              <div className="bg-white border-b border-gray-100 p-8 flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Analysis Result</h2>
                  <p className="text-gray-500 text-sm mt-1">Based on Job Description</p>
                </div>
                <ScoreRing score={82} />
              </div>
              
              <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-gray-50/30">
                
                {/* 2. UPDATED: MORE DESCRIPTIVE ANALYSIS */}
                <div className="grid grid-cols-1 gap-4">
                   <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <XCircle size={16} className="text-red-500" /> Critical Gaps Found
                      </h3>
                      {/* Detailed List instead of Tags */}
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 pb-3 border-b border-gray-50">
                           <div className="bg-red-50 text-red-600 px-2 py-1 rounded text-xs font-bold whitespace-nowrap">Missing: TypeScript</div>
                           <div>
                              <p className="text-sm font-bold text-gray-800">High Priority Keyword</p>
                              <p className="text-xs text-gray-500 mt-1">Found 4 times in JD. Adding this to your "Skills" section is recommended.</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-3 pb-3 border-b border-gray-50">
                           <div className="bg-red-50 text-red-600 px-2 py-1 rounded text-xs font-bold whitespace-nowrap">Missing: AWS</div>
                           <div>
                              <p className="text-sm font-bold text-gray-800">Cloud Skills Gap</p>
                              <p className="text-xs text-gray-500 mt-1">Job requires "deploying on AWS". Mention any EC2 or S3 experience.</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-3">
                           <div className="bg-orange-50 text-orange-600 px-2 py-1 rounded text-xs font-bold whitespace-nowrap">Format Issue</div>
                           <div>
                              <p className="text-sm font-bold text-gray-800">Summary Length</p>
                              <p className="text-xs text-gray-500 mt-1">Your professional summary is too short (40 words). Target 100 words.</p>
                           </div>
                        </div>
                      </div>
                   </div>
                </div>

                {/* 3. AI RESUME BUILDER WITH PREVIEW */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl shadow-lg text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <Sparkles className="text-yellow-400" size={20} /> 
                      AI Resume Builder
                    </h3>
                    <p className="text-gray-300 text-sm mt-1 mb-4">
                      {newResumeReady 
                        ? "Success! AI has fixed your resume gaps." 
                        : "Let AI rewrite your resume to include missing keywords automatically."}
                    </p>

                    {!newResumeReady ? (
                      <button 
                        onClick={handleGenerateOptimized}
                        disabled={generatingNew}
                        className="w-full bg-white text-gray-900 py-3 rounded-xl font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2"
                      >
                        {generatingNew ? (
                          <><Loader2 className="animate-spin" size={18} /> Optimizing Resume...</>
                        ) : (
                          <><Wand2 size={18} /> Generate Optimized Resume</>
                        )}
                      </button>
                    ) : (
                      <div className="flex flex-col gap-3 animate-fade-in">
                        <div className="flex gap-3">
                          <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition flex items-center justify-center gap-2">
                            <Download size={18} /> Download PDF
                          </button>
                          
                          {/* 👇 NEW PREVIEW BUTTON */}
                          <button 
                            onClick={() => setShowPreview(true)}
                            className="px-4 bg-white/10 hover:bg-white/20 text-white rounded-xl transition flex items-center justify-center gap-2 border border-white/20" 
                            title="Preview Resume"
                          >
                            <Eye size={18} /> Preview
                          </button>
                        </div>
                        <p className="text-xs text-gray-400 text-center flex items-center justify-center gap-1">
                          <CheckCircle size={12} className="text-green-500"/> ATS Score increased to 94/100
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20 -mr-10 -mt-10"></div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Analyze;