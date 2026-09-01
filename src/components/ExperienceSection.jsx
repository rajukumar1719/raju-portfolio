import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ShieldAlert, 
  Code2, 
  Layers, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceSection() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 // INDUSTRY TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Professional <span className="text-gradient">Experience & Internships</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Practical industry exposure building resilient web applications and evaluating enterprise security postures.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {experiences.map((exp, idx) => {
            const isEimple = exp.id === 'eimple-labs';

            return (
              <div key={exp.id} className="relative group">
                
                {/* Glowing Node Dot on Timeline */}
                <div className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition duration-300 ${
                  isEimple 
                    ? 'bg-slate-950 border-indigo-500 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.6)]' 
                    : 'bg-slate-950 border-emerald-500 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.6)]'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${
                    isEimple ? 'bg-indigo-400' : 'bg-emerald-400'
                  }`}></span>
                </div>

                {/* Experience Card */}
                <div className="p-7 sm:p-8 rounded-3xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-xl">
                  
                  {/* Top Bar: Role & Company */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded border uppercase tracking-wider ${
                          isEimple ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300' : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                        }`}>
                          {exp.type}
                        </span>
                        <span className="text-xs font-mono text-slate-400">
                          {exp.duration}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-slate-300">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 space-y-1">
                      <div className="flex items-center gap-1.5 text-slate-300">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.timeline}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 mb-6">
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isEimple ? 'text-indigo-400' : 'text-emerald-400'
                        }`} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Used */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-500 mr-2">Technologies:</span>
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}
