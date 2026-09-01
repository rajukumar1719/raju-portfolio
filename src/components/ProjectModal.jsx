import React from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Database, 
  Server, 
  CheckCircle2, 
  ArrowRight,
  Code2
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const isCampusHire = project.id === 'campus-hire';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-xl animate-fadeIn">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header Ribbon */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                System Architecture Deep-Dive
              </span>
              <h3 className="text-xl font-bold text-white">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Summary */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              System Overview & Problem Statement
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Architecture Breakdown */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-2">
              <Server className="w-4 h-4" />
              <span>Architectural Modules & Pipelines</span>
            </h4>

            {project.id === 'campus-hire' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-cyan-300 font-bold mb-1">1. Auth & RBAC Engine</div>
                  <p className="text-slate-400 text-[11px]">
                    Stateless JWT tokens, bcrypt pass hashing, role middleware (Student, Recruiter, Admin).
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-indigo-300 font-bold mb-1">2. Job & Candidate Pipeline</div>
                  <p className="text-slate-400 text-[11px]">
                    Full CRUD APIs with MongoDB compound indices on `job_id` and `student_id`.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-emerald-300 font-bold mb-1">3. Status Notification Hub</div>
                  <p className="text-slate-400 text-[11px]">
                    Real-time visual tracker across application stages (Applied &rarr; Shortlist &rarr; Offer).
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-purple-300 font-bold mb-1">4. Security & Sanitization</div>
                  <p className="text-slate-400 text-[11px]">
                    CORS security headers, express-validator input sanitization, rate limiting.
                  </p>
                </div>
              </div>
            )}

            {project.id === 'mindforge' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-indigo-300 font-bold mb-1">1. LLM Context Prompt Engine</div>
                  <p className="text-slate-400 text-[11px]">
                    Optimized system instructions transforming study notes into structured summaries and quizzes.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-cyan-300 font-bold mb-1">2. Interactive Flashcard Matrix</div>
                  <p className="text-slate-400 text-[11px]">
                    Spaced-repetition card decks with active recall scoring and topic categorization.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-emerald-300 font-bold mb-1">3. Real-Time AI Tutor Gateway</div>
                  <p className="text-slate-400 text-[11px]">
                    Streaming response endpoints providing low-latency, context-aware doubt resolution.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-purple-300 font-bold mb-1">4. Markdown & Document Hub</div>
                  <p className="text-slate-400 text-[11px]">
                    Client-side markdown rendering, document parsing, and dynamic export options.
                  </p>
                </div>
              </div>
            )}

            {project.id === 'ai-resume-matcher' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-emerald-300 font-bold mb-1">1. NLP Ingestion Pipeline</div>
                  <p className="text-slate-400 text-[11px]">
                    PDF/Text extraction, tokenization, stopword removal, and regex entity tagging.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-cyan-300 font-bold mb-1">2. Vector Space TF-IDF Engine</div>
                  <p className="text-slate-400 text-[11px]">
                    Term frequency-inverse document frequency weighting across candidate profiles.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-indigo-300 font-bold mb-1">3. Cosine Similarity Matcher</div>
                  <p className="text-slate-400 text-[11px]">
                    Vector dot-product math computing precision similarity scores (0% to 100%).
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-purple-300 font-bold mb-1">4. Skill-Gap Diagnostic</div>
                  <p className="text-slate-400 text-[11px]">
                    Set difference evaluation showing recruiters missing domain keywords.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Key Deliverables & Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Key Engineering Accomplishments
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-6 border-t border-slate-800 bg-slate-950/80">
          <div className="text-xs font-mono text-slate-400">
            Developer: <span className="text-slate-200">Raju Kumar (IIIT Bhopal)</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 hover:text-white transition"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>

            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 text-xs font-bold hover:opacity-90 transition"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{(project.id === 'campus-hire' || project.id === 'mindforge') ? 'Live Demo' : 'Architecture Docs'}</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
