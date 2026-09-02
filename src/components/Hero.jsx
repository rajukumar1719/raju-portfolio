import React from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Code2, 
  Layers, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  Terminal, 
  ExternalLink,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenTerminal, onOpenResume }) {
  const { personal, quickStats } = portfolioData;

  const statIcons = {
    Code2: Code2,
    Layers: Layers,
    Briefcase: Briefcase,
    GraduationCap: GraduationCap
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      
      {/* Background Ambient Glows & Grid Mesh */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/15 to-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Hero Content) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-xs font-medium text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)] mb-6 hover:border-emerald-400 transition cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide">{personal.status}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 font-display">
              Hi, I'm{' '}
              <span className="text-white hover:opacity-95 transition">
                Raju Kumar
              </span>
              <span className="block mt-2.5 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-200">
                <span className="text-gradient">Software Engineering Intern Candidate</span> & MCA Student at{' '}
                <span className="text-gradient font-mono">IIIT Bhopal</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
              Specializing in <span className="text-cyan-300 font-medium">scalable full-stack web architectures</span>, <span className="text-indigo-300 font-medium">core data structures</span>, and <span className="text-emerald-300 font-medium">applied AI systems</span>.
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              
              {/* Primary: Explore Projects */}
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary: GitHub Profile */}
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 text-sm font-medium text-slate-200 hover:text-white transition shadow-sm"
              >
                <Github className="w-4 h-4 text-slate-300" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              {/* Secondary: LinkedIn Profile */}
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-indigo-500/30 hover:border-indigo-400 text-sm font-medium text-slate-200 hover:text-indigo-200 transition shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-indigo-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-indigo-400/60" />
              </a>

              {/* Quick CLI button */}
              <button
                onClick={onOpenTerminal}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-cyan-500/30 hover:border-cyan-400 text-sm font-mono text-cyan-300 transition shadow-sm"
                title="Launch Interactive Terminal"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>$ ./terminal</span>
              </button>
            </div>

            {/* Quick Tech Highlights Pills */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-slate-500">Core Stack:</span>
              {['C++', 'MERN Stack', 'React', 'Node.js', 'MongoDB', 'Python NLP', 'REST APIs', 'Cybersecurity'].map((tech) => (
                <span key={tech} className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Right Column (Interactive Engineering Card / Terminal Preview) */}
          <div className="lg:col-span-5">
            <div className="relative group">
              
              {/* Card Ambient Glow Behind */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-emerald-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>

              {/* Main Code & System Card */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl p-5 shadow-2xl">
                
                {/* Window Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-xs text-slate-400 bg-slate-950/80 px-3 py-1 rounded-md border border-slate-800/80">
                    <Cpu className="w-3 h-3 text-cyan-400" />
                    <span>engineer.cpp</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400">LIVE</span>
                </div>

                {/* Code Content */}
                <div className="font-mono text-xs leading-relaxed space-y-2 text-slate-300 overflow-x-auto">
                  <p className="text-slate-500">// IIIT Bhopal MCA (IT) Candidate</p>
                  <p>
                    <span className="text-purple-400">#include</span> <span className="text-emerald-300">&lt;iostream&gt;</span>
                  </p>
                  <p>
                    <span className="text-purple-400">#include</span> <span className="text-emerald-300">&lt;distributed_systems&gt;</span>
                  </p>
                  <div className="pt-2">
                    <span className="text-blue-400">struct</span> <span className="text-yellow-300">SoftwareEngineeringIntern</span> &#123;
                  </div>
                  <div className="pl-4 space-y-1 text-slate-300">
                    <p><span className="text-cyan-400">string</span> name = <span className="text-emerald-300">"Raju Kumar"</span>;</p>
                    <p><span className="text-cyan-400">string</span> institute = <span className="text-emerald-300">"IIIT Bhopal"</span>;</p>
                    <p><span className="text-cyan-400">string</span> degree = <span className="text-emerald-300">"MCA (IT) '27"</span>;</p>
                    <p><span className="text-cyan-400">int</span> leetcodeSolved = <span className="text-amber-400">150</span>;</p>
                    <p><span className="text-cyan-400">vector&lt;string&gt;</span> focus = &#123;
                      <span className="text-emerald-300">"MERN"</span>, <span className="text-emerald-300">"DSA (C++)"</span>, <span className="text-emerald-300">"NLP"</span>
                    &#125;;</p>
                  </div>
                  <div>&#125;;</div>

                  <div className="pt-2">
                    <span className="text-cyan-400">void</span> <span className="text-yellow-300">deployImpact</span>() &#123;
                    <div className="pl-4 text-emerald-400">
                      std::cout &lt;&lt; <span className="text-emerald-300">"Ready for High-Impact Software Engineering Internships"</span> &lt;&lt; std::endl;
                    </div>
                    &#125;
                  </div>
                </div>

                {/* Card Footer with Quick Verification */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>0 Errors • Optimized</span>
                  </div>
                  <button 
                    onClick={onOpenResume}
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>View ATS Resume</span> &rarr;
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Quick Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {quickStats.map((stat) => {
            const IconComponent = statIcons[stat.icon] || Code2;
            return (
              <div
                key={stat.id}
                className="group relative p-4 sm:p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800 hover:border-slate-700 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-display group-hover:text-cyan-300 transition">
                    {stat.value}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-cyan-400 group-hover:scale-110 group-hover:border-cyan-500/40 transition">
                    <IconComponent className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-slate-200">
                  {stat.label}
                </h3>
                <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
