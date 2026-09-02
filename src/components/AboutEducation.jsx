import React from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  Code, 
  Layers, 
  ShieldCheck, 
  MapPin, 
  Calendar 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutEducation() {
  const { personal, education } = portfolioData;

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>01 // BACKGROUND & ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            About Me & <span className="text-gradient">Academic Foundations</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A look into my engineering philosophy, technical background, and academic training at leading institutions.
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Summary & Technical Mindset */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="p-7 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-xl space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Aspiring Software Engineer & Problem Solver</h3>
                  <p className="text-xs font-mono text-slate-400">MCA Student @ IIIT Bhopal</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {personal.aboutText}
              </p>

              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                  Core Engineering Principles
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-200">Algorithmic Rigor</span>
                      <p className="text-slate-400 text-[11px]">Clean C++ DSA, optimal space-time complexity.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-200">Robust REST APIs</span>
                      <p className="text-slate-400 text-[11px]">JWT auth, RBAC, modular Node/Express backends.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-200">Modern Frontend</span>
                      <p className="text-slate-400 text-[11px]">React.js, responsive layouts, intuitive UX.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-slate-200">Security & Quality</span>
                      <p className="text-slate-400 text-[11px]">OWASP awareness, vulnerability analysis (Nessus).</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Info Bar */}
              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Bhopal / Ranchi, India</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Actively Interviewing</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Glowing Education Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            {education.map((edu, idx) => {
              const isIIIT = edu.id === 'iiit-bhopal';
              return (
                <div 
                  key={edu.id}
                  className={`group relative p-6 sm:p-7 rounded-3xl bg-slate-900/80 border backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-xl ${
                    isIIIT 
                      ? 'border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]' 
                      : 'border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]'
                  }`}
                >
                  {/* Top Glowing Accent Line */}
                  <div className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${
                    isIIIT ? 'from-cyan-500 via-indigo-500 to-transparent' : 'from-emerald-500 via-teal-400 to-transparent'
                  }`}></div>

                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-2xl border ${
                        isIIIT ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400' : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                      }`}>
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${
                          isIIIT ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300' : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                        }`}>
                          {edu.type}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                          {edu.institution}
                        </h3>
                      </div>
                    </div>

                    {/* CGPA Badge */}
                    <div className="text-right shrink-0">
                      <div className="text-xs font-mono text-slate-400">CGPA</div>
                      <div className="text-lg font-extrabold text-white font-mono flex items-center gap-1 justify-end">
                        <span className={isIIIT ? 'text-cyan-300' : 'text-emerald-300'}>
                          {edu.cgpa.split('/')[0]}
                        </span>
                        <span className="text-xs text-slate-500">/ 10.0</span>
                      </div>
                    </div>
                  </div>

                  {/* Degree & Duration */}
                  <div className="flex flex-wrap items-center justify-between gap-2 py-2 mb-3 border-y border-slate-800/80 text-xs">
                    <span className="font-semibold text-slate-200">
                      {edu.degree}
                    </span>
                    <span className="font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {edu.duration}
                    </span>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 text-xs text-slate-300">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                          isIIIT ? 'bg-cyan-400' : 'bg-emerald-400'
                        }`}></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}
