import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, education, skillCategories, projects, experiences, leadership } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto bg-black/85 backdrop-blur-xl animate-fadeIn">
      
      {/* Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80 no-print shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-white text-sm">
                Raju Kumar — Resume & Credentials
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                IIIT Bhopal • MCA (IT) Batch 2024–2027
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-medium text-slate-200 hover:text-white transition"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ATS-Formatted Document Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-slate-950 text-slate-100 font-sans space-y-6 select-text print:p-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="text-center border-b border-slate-800 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              RAJU KUMAR
            </h1>
            <p className="text-xs font-mono text-cyan-400 mt-1">
              Software Engineering Intern Candidate • MCA (IT) Student @ IIIT Bhopal
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono mt-3">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                Bhopal / Ranchi, India
              </span>
              <span>•</span>
              <a href="mailto:rajukumarranchil7@gmail.com" className="hover:text-cyan-300">
                rajukumarranchil7@gmail.com
              </a>
              <span>•</span>
              <a href="mailto:24p03f0043@iiitbhopal.ac.in" className="hover:text-cyan-300">
                24p03f0043@iiitbhopal.ac.in
              </a>
              <span>•</span>
              <a href="tel:+918210199794" className="hover:text-emerald-400">
                +91-8210199794
              </a>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs font-mono text-slate-400 mt-2">
              <a href="https://github.com/rajukumar1719" target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                github.com/rajukumar1719
              </a>
              <span>•</span>
              <a href="https://linkedin.com/in/raju-kumar" target="_blank" rel="noreferrer" className="text-indigo-400 hover:underline">
                linkedin.com/in/raju-kumar
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1 mb-3">
              EDUCATION
            </h2>
            <div className="space-y-4 text-xs">
              {education.map(edu => (
                <div key={edu.id}>
                  <div className="flex justify-between font-bold text-slate-200">
                    <span>{edu.institution}</span>
                    <span className="font-mono font-normal text-slate-400">{edu.duration}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{edu.degree}</span>
                    <span className="font-mono text-cyan-300 font-medium">CGPA: {edu.cgpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1 mb-3">
              TECHNICAL SKILLS
            </h2>
            <div className="space-y-1.5 text-xs">
              <div>
                <span className="font-semibold text-slate-200">Languages: </span>
                <span className="text-slate-300">C, C++, Python, JavaScript (ES6+), TypeScript</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Web & Frameworks: </span>
                <span className="text-slate-300">React.js, Next.js, Node.js, Express.js, REST APIs, HTML5, CSS3, Tailwind CSS</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Databases: </span>
                <span className="text-slate-300">MongoDB (NoSQL), MySQL (Relational), SQL</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Core CS: </span>
                <span className="text-slate-300">Data Structures & Algorithms (150+ solved in C++), OOP, DBMS, Computer Networks, Cybersecurity Basics</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Developer Tools: </span>
                <span className="text-slate-300">Git, GitHub, VS Code, Postman, Cursor, Tenable Nessus, AWS (Foundational), Agile / Code Reviews</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1 mb-3">
              FEATURED PROJECTS
            </h2>
            <div className="space-y-4 text-xs">
              {projects.map(proj => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between font-bold text-slate-200">
                    <span className="text-cyan-300">{proj.title} — {proj.tagline}</span>
                    <span className="font-mono font-normal text-slate-400">{proj.timeline}</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    Stack: {proj.techStack.join(', ')}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1 mb-3">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="space-y-4 text-xs">
              {experiences.map(exp => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex justify-between font-bold text-slate-200">
                    <span>{exp.company} — <span className="font-normal text-slate-300">{exp.role}</span></span>
                    <span className="font-mono font-normal text-slate-400">{exp.timeline}</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">{exp.location}</div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 pl-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership & Achievements */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold border-b border-slate-800 pb-1 mb-3">
              LEADERSHIP & EXTRA-CURRICULAR
            </h2>
            <div className="space-y-2 text-xs text-slate-300">
              <div>
                <span className="font-semibold text-slate-200">• Lead Coordinator — Rangrez: The Fresher Fiesta (2025): </span>
                <span>Spearheaded operations, cross-department scheduling, and stage logistics at IIIT Bhopal.</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">• Sports Coordinator — MCA Department, IIIT Bhopal (2025): </span>
                <span>Organized inter-departmental tournaments managing schedules and sports infrastructure.</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">• Problem Solving & Competitive Programming: </span>
                <span>Solved 150+ DSA challenges in C++ on LeetCode; active on CodeChef.</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
