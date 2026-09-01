import React, { useState } from 'react';
import { 
  FolderGit2, 
  Github, 
  ExternalLink, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Terminal,
  Cpu,
  Database,
  ShieldCheck,
  BrainCircuit,
  Info
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      
      {/* Background Section Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-r from-cyan-500/10 via-indigo-600/10 to-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03 // PRODUCTION SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Featured <span className="text-gradient">Engineering Projects</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Architected for high throughput, security, and intuitive user experiences. Click any project to inspect full system architecture.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>{projects.length} Flagship Implementations</span>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const isCampusHire = project.id === 'campus-hire';
            const isMindForge = project.id === 'mindforge';
            const hasLiveDemo = isCampusHire || isMindForge;

            let gradientBorder = 'from-emerald-400 via-cyan-500 to-indigo-500';
            if (isCampusHire) gradientBorder = 'from-cyan-500 via-blue-500 to-indigo-600';
            if (isMindForge) gradientBorder = 'from-indigo-500 via-purple-500 to-cyan-400';

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 shadow-2xl flex flex-col justify-between overflow-hidden"
              >
                {/* Glowing Top Border Accent */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${gradientBorder}`}></div>

                <div className="p-6 sm:p-7">
                  
                  {/* Category & Status Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-slate-300">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {project.timeline}
                    </span>
                  </div>

                  {/* Project Title & Tagline */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition mb-1 font-display">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-3 line-clamp-1">
                    // {project.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2 mb-4 text-xs text-slate-300 bg-slate-950/60 p-3.5 rounded-2xl border border-slate-800/80">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      Key Highlights:
                    </div>
                    {project.highlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Card Footer Actions */}
                <div className="p-5 pt-3 border-t border-slate-800/80 bg-slate-950/70 flex flex-wrap items-center justify-between gap-2.5">
                  
                  {/* Inspect Architecture Modal Trigger */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:underline transition"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Architecture</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {/* GitHub Repo */}
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-medium text-slate-200 hover:text-white transition"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Repo</span>
                    </a>

                    {/* Live Demo / Docs */}
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 text-xs font-bold hover:opacity-90 transition shadow-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{hasLiveDemo ? 'Live Demo' : 'Docs'}</span>
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Architecture Deep-Dive Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}

    </section>
  );
}
