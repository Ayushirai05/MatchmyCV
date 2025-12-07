import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Download, Save, Plus, Trash2, Wand2, ArrowLeft, Palette, Layout, Briefcase, User, GraduationCap, Code, MapPin, Mail, Phone, Linkedin, Github, Globe, Award } from 'lucide-react';

// =================================================================
// 1. MODERN TEMPLATE (Matches "Ahmdd Saah" Image)
// Layout: Left Info Col | Center Vertical Line with Icons | Right Content Col
// =================================================================
const ModernTemplate = ({ data, color, renderBullets }) => (
  <div className="bg-white shadow-2xl w-[21cm] min-h-[29.7cm] flex flex-col font-sans text-gray-800 p-10">
    
    {/* HEADER */}
    <div className="mb-10">
      <h1 className="text-5xl font-extrabold uppercase text-gray-900 mb-1" style={{ color: color }}>
        {data.personal.firstName} <span className="text-gray-700">{data.personal.lastName}</span>
      </h1>
      <p className="text-xl tracking-[0.2em] uppercase text-gray-500 mb-6">{data.personal.role}</p>
      <div className="w-full h-0.5 bg-gray-300"></div>
    </div>

    <div className="flex flex-1 gap-8">
      
      {/* LEFT COLUMN (Contact, Skills, Langs) */}
      <div className="w-[30%] space-y-10 pt-2">
        
        {/* Contact */}
        <div>
          <h3 className="font-bold text-gray-900 uppercase tracking-widest mb-4 border-b-2 border-gray-800 pb-1 w-fit text-sm">Contact</h3>
          <div className="space-y-3 text-xs font-medium text-gray-600">
            <div className="flex items-center gap-3"><Phone size={14}/> {data.personal.phone}</div>
            <div className="flex items-center gap-3"><Mail size={14}/> <span className="break-all">{data.personal.email}</span></div>
            <div className="flex items-center gap-3"><MapPin size={14}/> {data.personal.location}</div>
            {data.personal.linkedin && <div className="flex items-center gap-3"><Linkedin size={14}/> <span className="truncate w-32">{data.personal.linkedin}</span></div>}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="font-bold text-gray-900 uppercase tracking-widest mb-4 border-b-2 border-gray-800 pb-1 w-fit text-sm">Skills</h3>
          <ul className="list-disc list-inside space-y-2 text-xs text-gray-600 font-medium">
            {data.skills.split(',').map((skill, index) => (
              <li key={index}>{skill.trim()}</li>
            ))}
          </ul>
        </div>

        {/* Languages */}
        <div>
          <h3 className="font-bold text-gray-900 uppercase tracking-widest mb-4 border-b-2 border-gray-800 pb-1 w-fit text-sm">Languages</h3>
          <p className="text-xs text-gray-600 font-medium">{data.languages}</p>
        </div>
      </div>

      {/* RIGHT COLUMN (Timeline Content) */}
      <div className="w-[70%] space-y-10 relative border-l-2 border-gray-200 pl-8 pb-10">
        
        {/* Profile Section */}
        <div className="relative">
          {/* Icon on the line */}
          <div className="absolute -left-[42px] top-0 bg-white p-1">
            <div className="bg-gray-800 text-white p-1.5 rounded-full"><User size={14} /></div>
          </div>
          <h3 className="font-bold text-gray-900 uppercase tracking-widest mb-3 text-lg">Profile</h3>
          <p className="text-xs leading-relaxed text-gray-600 text-justify">{data.summary}</p>
        </div>

        {/* Experience Section */}
        <div className="relative">
          <div className="absolute -left-[42px] top-0 bg-white p-1">
            <div className="bg-gray-800 text-white p-1.5 rounded-full"><Briefcase size={14} /></div>
          </div>
          <h3 className="font-bold text-gray-900 uppercase tracking-widest mb-4 text-lg">Work Experience</h3>
          <div className="space-y-6">
            {data.experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between font-bold text-sm text-gray-900 mb-1">
                  <h4>{exp.company}</h4>
                  <span className="text-xs font-normal border border-gray-300 px-2 py-0.5 rounded-full">{exp.date}</span>
                </div>
                <p className="text-xs italic font-bold mb-2" style={{ color: color }}>{exp.role}</p>
                <div className="text-xs text-gray-600 leading-relaxed pl-3 border-l-2" style={{ borderColor: color }}>
                  {renderBullets(exp.desc)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="relative">
          <div className="absolute -left-[42px] top-0 bg-white p-1">
            <div className="bg-gray-800 text-white p-1.5 rounded-full"><GraduationCap size={14} /></div>
          </div>
          <h3 className="font-bold text-gray-900 uppercase tracking-widest mb-4 text-lg">Education</h3>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between font-bold text-sm text-gray-900">
                <h4>{edu.degree}</h4>
                <span className="text-xs font-normal">{edu.date}</span>
              </div>
              <p className="text-xs text-gray-600">{edu.school}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
);

// =================================================================
// 2. CREATIVE TEMPLATE (Matches "Dani Martinez" Image)
// Layout: Grey Sidebar, "Pill" Headers, Circle Photo
// =================================================================
const CreativeTemplate = ({ data, color, renderBullets }) => (
  <div className="bg-white shadow-2xl w-[21cm] min-h-[29.7cm] flex flex-row font-sans text-gray-800">
    
    {/* LEFT SIDEBAR (Grey) */}
    <div className="w-[35%] bg-gray-100 p-8 flex flex-col items-center text-center gap-8 border-r border-gray-200">
      
      {/* Profile Photo Area */}
      <div className="w-40 h-40 bg-gray-800 rounded-full flex items-center justify-center text-5xl font-bold text-white overflow-hidden mb-2 shadow-lg border-4 border-white">
        {data.personal.firstName[0]}{data.personal.lastName[0]}
      </div>

      {/* Contact Pills */}
      <div className="w-full space-y-4">
        <div className="bg-gray-800 text-white py-1.5 px-4 rounded-full uppercase text-[10px] font-bold tracking-wider mb-4 shadow-sm">Contact Me</div>
        <div className="space-y-3 text-[10px] text-gray-600 flex flex-col items-center font-medium">
          <div className="flex items-center gap-2"><Phone size={12}/> {data.personal.phone}</div>
          <div className="flex items-center gap-2"><Mail size={12}/> {data.personal.email}</div>
          <div className="flex items-center gap-2"><MapPin size={12}/> {data.personal.location}</div>
          {data.personal.linkedin && <div className="flex items-center gap-2"><Linkedin size={12}/> LinkedIn</div>}
        </div>
      </div>

      {/* Education Pills */}
      <div className="w-full space-y-4">
        <div className="bg-gray-800 text-white py-1.5 px-4 rounded-full uppercase text-[10px] font-bold tracking-wider mb-2 shadow-sm">Education</div>
        {data.education.map((edu, index) => (
          <div key={index} className="text-[10px]">
            <p className="font-bold text-gray-900">{edu.degree}</p>
            <p className="text-gray-600">{edu.school}</p>
            <p className="text-gray-500 italic">{edu.date}</p>
          </div>
        ))}
      </div>

      {/* Skills Pills */}
      <div className="w-full space-y-4">
        <div className="bg-gray-800 text-white py-1.5 px-4 rounded-full uppercase text-[10px] font-bold tracking-wider mb-2 shadow-sm">Skills</div>
        <ul className="space-y-2 text-[10px] text-gray-600">
          {data.skills.split(',').map((skill, index) => (
            <li key={index}>• {skill.trim()}</li>
          ))}
        </ul>
      </div>
    </div>

    {/* RIGHT CONTENT */}
    <div className="w-[65%] p-10 pt-16">
      
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-6xl font-bold text-gray-900 leading-none mb-2">{data.personal.firstName}</h1>
        <h1 className="text-6xl font-light text-gray-500 leading-none mb-4">{data.personal.lastName}</h1>
        <p className="text-lg uppercase tracking-[0.3em] text-gray-400 font-bold">{data.personal.role}</p>
      </div>

      {/* Experience */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <h3 className="uppercase font-bold text-lg text-gray-800 whitespace-nowrap">Work Experience</h3>
          <div className="w-full h-0.5 bg-gray-800"></div>
        </div>

        <div className="space-y-8">
          {data.experience.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between items-baseline mb-1">
                <h4 className="font-bold text-sm text-gray-900">{exp.role}</h4>
                <span className="text-sm text-gray-600 font-medium">{exp.date}</span>
              </div>
              <p className="font-bold text-xs text-gray-500 mb-2 uppercase">{exp.company}</p>
              <div className="text-[11px] text-gray-600 leading-relaxed text-justify">
                {renderBullets(exp.desc)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects / Profile */}
      <div className="mt-8">
         <div className="flex items-center gap-4 mb-4">
          <h3 className="uppercase font-bold text-lg text-gray-800 whitespace-nowrap">Projects</h3>
          <div className="w-full h-0.5 bg-gray-800"></div>
        </div>
        <div className="space-y-4">
           {data.projects.map((proj, index) => (
             <div key={index}>
               <div className="flex justify-between items-center"><h4 className="font-bold text-sm">{proj.title}</h4></div>
               <p className="text-[10px] uppercase font-bold text-gray-400">{proj.tech}</p>
               <p className="text-[11px] text-gray-600">{proj.desc}</p>
             </div>
           ))}
        </div>
      </div>

    </div>
  </div>
);

// =================================================================
// 3. PROFESSIONAL TEMPLATE (Matches "John Smith" Image)
// Layout: Serif Font, Centered Header, Horizontal Dividers
// =================================================================
const ProfessionalTemplate = ({ data, color, renderBullets }) => (
  <div className="bg-white shadow-2xl w-[21cm] min-h-[29.7cm] p-12 text-black font-serif">
    
    {/* Header */}
    <div className="text-center mb-8">
      <h1 className="text-5xl font-bold mb-3 text-black">{data.personal.firstName} {data.personal.lastName}</h1>
      <div className="flex justify-center items-center gap-2 text-sm text-black border-b border-black pb-6">
        <span>{data.personal.phone}</span>
        <span>|</span>
        <span>{data.personal.email}</span>
        <span>|</span>
        <span className="underline cursor-pointer">{data.personal.linkedin}</span>
        <span>|</span>
        <span className="underline cursor-pointer">{data.personal.github}</span>
      </div>
    </div>

    {/* Sections */}
    <div className="space-y-6">
      
      {/* Experience */}
      <section>
        <h3 className="text-xs font-bold uppercase border-b border-black mb-4 pb-1 tracking-wider font-sans">Work Experience</h3>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-5">
            <div className="flex justify-between items-baseline">
              <h4 className="font-bold text-base">{exp.role}</h4>
              <span className="font-bold text-sm">{exp.date}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
               <span className="italic text-sm">{exp.company}</span>
               <span className="italic text-sm">{data.personal.location}</span>
            </div>
            <div className="text-[11px] leading-snug pl-4">
               <ul className="list-disc space-y-1">{renderBullets(exp.desc)}</ul>
            </div>
          </div>
        ))}
      </section>

      {/* Education */}
      <section>
        <h3 className="text-xs font-bold uppercase border-b border-black mb-4 pb-1 tracking-wider font-sans">Education</h3>
        {data.education.map((edu, index) => (
          <div key={index} className="flex justify-between text-sm mb-2">
            <div>
              <span className="font-bold">{edu.school}</span>
              <div className="italic">{edu.degree}</div>
            </div>
            <div className="text-right">
                <span className="font-bold">{edu.date}</span>
                <div className="italic">{data.personal.location}</div>
            </div>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section>
        <h3 className="text-xs font-bold uppercase border-b border-black mb-4 pb-1 tracking-wider font-sans">Projects</h3>
        {data.projects.map((proj, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between items-baseline">
              <div className="flex items-center gap-2">
                 <span className="font-bold text-sm">{proj.title}</span>
                 <span className="text-xs italic text-gray-700">| {proj.tech}</span>
              </div>
              <span className="font-bold text-sm">2023 - Present</span>
            </div>
            <p className="text-[11px] leading-snug mt-1 pl-4">
               • {proj.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section>
        <h3 className="text-xs font-bold uppercase border-b border-black mb-2 pb-1 tracking-wider font-sans">Skills & Certifications</h3>
        <div className="text-[11px] leading-relaxed">
          <div className="mb-1"><span className="font-bold">Languages:</span> {data.languages}</div>
          <div className="mb-1"><span className="font-bold">Technologies:</span> {data.skills.split(',').join(", ")}</div>
          <div><span className="font-bold">Certifications:</span> {data.certifications}</div>
        </div>
      </section>

    </div>
  </div>
);

// =================================================================
// MAIN BUILDER COMPONENT
// =================================================================
const Builder = () => {
  const location = useLocation();
  const [templateType, setTemplateType] = useState('Modern Resume');
  const [themeColor, setThemeColor] = useState('#2563eb');

  useEffect(() => {
    if (location.state?.selectedTemplate) {
      setTemplateType(location.state.selectedTemplate);
    }
  }, [location]);

  // DEFAULT DATA
  const [resume, setResume] = useState({
    personal: { 
      firstName: "Alex", 
      lastName: "Morgan", 
      email: "alex.morgan@example.com", 
      phone: "+91 98765 43210", 
      role: "Senior Full Stack Engineer", 
      location: "Bangalore, India", 
      linkedin: "linkedin.com/in/alex", 
      github: "github.com/alexcode" 
    },
    summary: "Results-oriented Senior Software Engineer with 6+ years of experience designing scalable microservices and web applications. Proven expert in React.js, Node.js, and AWS cloud architecture.",
    experience: [
      { role: "Senior Frontend Engineer", company: "TechFlow Solutions", date: "June 2022 – Present", desc: "Spearheaded the migration of a legacy monolithic app to Micro-Frontends.\nOptimized application performance, reducing load times by 2.5s." },
      { role: "Software Developer", company: "Creative Labs", date: "Aug 2019 – May 2022", desc: "Developed RESTful APIs using Node.js and Express for a high-traffic e-commerce platform serving 10k+ daily users.\nIntegrated Stripe payment gateway and managed AWS S3 for media storage." }
    ],
    education: [{ degree: "B.Tech in Computer Science", school: "IIT Bombay", date: "Aug 2015 – May 2019" }],
    projects: [
      { title: "AI Resume Optimizer", tech: "React, Python, NLP", desc: "Built a SaaS platform that uses NLP to score resumes against job descriptions." },
      { title: "Crypto Dashboard", tech: "Next.js, Tailwind", desc: "Real-time cryptocurrency tracking dashboard with live price charts using WebSockets." }
    ],
    skills: "JavaScript, TypeScript, React.js, Next.js, Node.js, Python, AWS, Docker, PostgreSQL",
    languages: "English (Native), Hindi (Fluent)",
    certifications: "AWS Certified Solutions Architect, Meta Frontend Developer Professional"
  });

  const handlePersonalChange = (e) => setResume({ ...resume, personal: { ...resume.personal, [e.target.name]: e.target.value } });
  const handleSummaryChange = (e) => setResume({ ...resume, summary: e.target.value });
  const handleSkillsChange = (e) => setResume({ ...resume, skills: e.target.value });
  const handleLanguagesChange = (e) => setResume({ ...resume, languages: e.target.value });
  const handleCertificationsChange = (e) => setResume({ ...resume, certifications: e.target.value });

  const handleListChange = (e, index, section) => {
    const newList = [...resume[section]];
    newList[index][e.target.name] = e.target.value;
    setResume({ ...resume, [section]: newList });
  };

  const addItem = (section, emptyItem) => {
    setResume({ ...resume, [section]: [...resume[section], emptyItem] });
  };

  const removeItem = (section, index) => {
    const newList = [...resume[section]];
    newList.splice(index, 1);
    setResume({ ...resume, [section]: newList });
  };

  const renderBullets = (text) => {
    if(!text) return null;
    return text.split('\n').map((line, i) => (
      <div key={i} className="mb-0.5">{line.trim().replace(/^•\s*/, '')}</div>
    ));
  };

  const renderTemplate = () => {
    switch(templateType) {
      case 'Professional Resume': return <ProfessionalTemplate data={resume} color={themeColor} renderBullets={renderBullets} />;
      case 'Creative Minimal': return <CreativeTemplate data={resume} color={themeColor} renderBullets={renderBullets} />;
      default: return <ModernTemplate data={resume} color={themeColor} renderBullets={renderBullets} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans">
      
      {/* Top Bar */}
      <div className="bg-white border-b px-6 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-4">
          <Link to="/templates-view" className="text-gray-500 hover:text-gray-900 flex items-center gap-1 transition"><ArrowLeft size={20} /> Back</Link>
          <div className="h-6 w-px bg-gray-300 mx-2"></div>
          <div><h1 className="font-bold text-gray-900">{templateType}</h1><p className="text-xs text-gray-500">Live Editor</p></div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2 items-center mr-4">
            <Palette size={16} className="text-gray-400"/>
            {['#2563eb', '#059669', '#7c3aed', '#dc2626', '#111827'].map(c => (
              <button key={c} onClick={() => setThemeColor(c)} className={`w-6 h-6 rounded-full border-2 transition ${themeColor === c ? 'border-gray-900 scale-110' : 'border-transparent'}`} style={{ backgroundColor: c }} />
            ))}
          </div>
          <button onClick={() => window.print()} className="bg-primary hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-bold flex gap-2 shadow-sm transition"><Download size={18}/> Download PDF</button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden h-[calc(100vh-73px)]">
        
        {/* --- LEFT SIDEBAR: FORM EDITOR --- */}
        <div className="w-1/3 min-w-[400px] bg-white border-r overflow-y-auto p-6 space-y-8 pb-20 shadow-xl z-10 scrollbar-hide">
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
            <h3 className="text-sm font-bold text-blue-800 mb-1">💡 Pro Tip</h3>
            <p className="text-xs text-blue-600">Use bullet points (•) in your descriptions to make them easier to read.</p>
          </div>

          {/* 1. Personal Details */}
          <div className="space-y-4">
             <h3 className="font-bold flex items-center gap-2 text-gray-800 border-b pb-2"><User size={18} className="text-primary"/> Personal Details</h3>
             <div className="grid grid-cols-2 gap-3">
               <input name="firstName" value={resume.personal.firstName} onChange={handlePersonalChange} placeholder="First Name" className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
               <input name="lastName" value={resume.personal.lastName} onChange={handlePersonalChange} placeholder="Last Name" className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
               <input name="role" value={resume.personal.role} onChange={handlePersonalChange} placeholder="Job Title" className="col-span-2 p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
               <input name="email" value={resume.personal.email} onChange={handlePersonalChange} placeholder="Email" className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
               <input name="phone" value={resume.personal.phone} onChange={handlePersonalChange} placeholder="Phone" className="p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
               <input name="location" value={resume.personal.location} onChange={handlePersonalChange} placeholder="City, Country" className="col-span-2 p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
               <input name="linkedin" value={resume.personal.linkedin} onChange={handlePersonalChange} placeholder="LinkedIn URL" className="col-span-2 p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
               <input name="github" value={resume.personal.github} onChange={handlePersonalChange} placeholder="GitHub / Portfolio" className="col-span-2 p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
             </div>
          </div>

          {/* 2. Summary */}
          <div className="space-y-4">
             <h3 className="font-bold flex items-center gap-2 text-gray-800 border-b pb-2"><Wand2 size={18} className="text-primary"/> Summary</h3>
             <textarea value={resume.summary} onChange={handleSummaryChange} rows="5" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm leading-relaxed" />
          </div>

          {/* 3. Experience */}
          <div className="space-y-4">
             <h3 className="font-bold flex items-center gap-2 text-gray-800 border-b pb-2 justify-between">
               <span className="flex items-center gap-2"><Briefcase size={18} className="text-primary"/> Experience</span>
               <button onClick={() => addItem('experience', { role: "Role", company: "Company", date: "Date", desc: "Description..." })} className="text-primary hover:bg-blue-50 p-1 rounded"><Plus size={18}/></button>
             </h3>
             {resume.experience.map((exp, index) => (
               <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-2 relative group hover:border-blue-300 transition">
                 <input name="role" value={exp.role} onChange={(e) => handleListChange(e, index, 'experience')} className="font-bold bg-transparent w-full border-b border-gray-300 pb-1 mb-1 outline-none" placeholder="Role" />
                 <div className="flex gap-2">
                   <input name="company" value={exp.company} onChange={(e) => handleListChange(e, index, 'experience')} className="text-xs w-1/2 bg-transparent border-b border-gray-300 outline-none" placeholder="Company" />
                   <input name="date" value={exp.date} onChange={(e) => handleListChange(e, index, 'experience')} className="text-xs w-1/2 bg-transparent border-b border-gray-300 text-right outline-none" placeholder="Date" />
                 </div>
                 <textarea name="desc" value={exp.desc} onChange={(e) => handleListChange(e, index, 'experience')} className="w-full bg-white p-2 rounded border border-gray-200 text-xs text-gray-600 resize-none" rows="4" placeholder="Description" />
                 <button onClick={() => removeItem('experience', index)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500"><Trash2 size={14}/></button>
               </div>
             ))}
          </div>

          {/* 4. Education */}
          <div className="space-y-4">
             <h3 className="font-bold flex items-center gap-2 text-gray-800 border-b pb-2 justify-between">
               <span className="flex items-center gap-2"><GraduationCap size={18} className="text-primary"/> Education</span>
               <button onClick={() => addItem('education', { degree: "Degree", school: "University", date: "Year" })} className="text-primary hover:bg-blue-50 p-1 rounded"><Plus size={18}/></button>
             </h3>
             {resume.education.map((edu, index) => (
               <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-2 relative group hover:border-blue-300 transition">
                 <input name="degree" value={edu.degree} onChange={(e) => handleListChange(e, index, 'education')} className="font-bold bg-transparent w-full border-b border-gray-300 pb-1 outline-none" placeholder="Degree" />
                 <div className="flex gap-2">
                   <input name="school" value={edu.school} onChange={(e) => handleListChange(e, index, 'education')} className="text-xs w-2/3 bg-transparent border-b border-gray-300 outline-none" placeholder="University" />
                   <input name="date" value={edu.date} onChange={(e) => handleListChange(e, index, 'education')} className="text-xs w-1/3 bg-transparent border-b border-gray-300 text-right outline-none" placeholder="Year" />
                 </div>
                 <button onClick={() => removeItem('education', index)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500"><Trash2 size={14}/></button>
               </div>
             ))}
          </div>

          {/* 5. Projects */}
          <div className="space-y-4">
             <h3 className="font-bold flex items-center gap-2 text-gray-800 border-b pb-2 justify-between">
               <span className="flex items-center gap-2"><Code size={18} className="text-primary"/> Projects</span>
               <button onClick={() => addItem('projects', { title: "Project Name", tech: "Tech Stack", desc: "Description" })} className="text-primary hover:bg-blue-50 p-1 rounded"><Plus size={18}/></button>
             </h3>
             {resume.projects.map((proj, index) => (
               <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-2 relative group hover:border-blue-300 transition">
                 <input name="title" value={proj.title} onChange={(e) => handleListChange(e, index, 'projects')} className="font-bold bg-transparent w-full border-b border-gray-300 pb-1 outline-none" placeholder="Project Name" />
                 <input name="tech" value={proj.tech} onChange={(e) => handleListChange(e, index, 'projects')} className="text-xs font-bold text-primary w-full bg-transparent border-b border-gray-300 outline-none" placeholder="Tech Stack" />
                 <textarea name="desc" value={proj.desc} onChange={(e) => handleListChange(e, index, 'projects')} className="w-full bg-white p-2 rounded border border-gray-200 text-xs text-gray-600 resize-none" rows="2" placeholder="Description" />
                 <button onClick={() => removeItem('projects', index)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500"><Trash2 size={14}/></button>
               </div>
             ))}
          </div>

          {/* 6. Skills & Extras */}
          <div className="space-y-4">
             <h3 className="font-bold flex items-center gap-2 text-gray-800 border-b pb-2"><Award size={18} className="text-primary"/> Skills & Extras</h3>
             <div>
               <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Technical Skills</label>
               <textarea value={resume.skills} onChange={handleSkillsChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm" rows="3" placeholder="React, Node.js..." />
             </div>
             <div>
               <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Languages</label>
               <input value={resume.languages} onChange={handleLanguagesChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
             </div>
             <div>
               <label className="text-xs font-bold text-gray-500 uppercase mb-1 block">Certifications</label>
               <textarea value={resume.certifications} onChange={handleCertificationsChange} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm" rows="3" />
             </div>
          </div>
        </div>

        {/* --- RIGHT: LIVE PREVIEW --- */}
        <div className="flex-1 bg-gray-100 p-8 overflow-y-auto flex justify-center items-start">
          <div id="resume-preview" className="bg-white shadow-2xl w-[21cm] min-h-[29.7cm] h-fit origin-top transform scale-[0.65] sm:scale-[0.75] md:scale-[0.85] lg:scale-[0.9] print:scale-100 print:shadow-none print:transform-none">
             {renderTemplate()}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Builder;