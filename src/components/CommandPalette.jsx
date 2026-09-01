import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Command, 
  X, 
  FileText, 
  Terminal, 
  Code2, 
  Briefcase, 
  FolderGit2, 
  Award, 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CommandPalette({ 
  isOpen, 
  onClose, 
  onOpenResume, 
  onOpenTerminal, 
  onShowToast 
}) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'sec-about',
      category: 'Navigation',
      title: 'Jump to About Me & Academics',
      subtitle: 'IIIT Bhopal MCA & Ranchi Univ BCA Background',
      icon: Code2,
      action: () => {
        onClose();
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'sec-skills',
      category: 'Navigation',
      title: 'Jump to Technical Skills',
      subtitle: 'C++, MERN Stack, Python NLP, MySQL, MongoDB',
      icon: Code2,
      action: () => {
        onClose();
        document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'sec-projects',
      category: 'Navigation',
      title: 'Jump to Featured Projects',
      subtitle: 'CampusHire MERN, MindForge AI Study Workspace & AI Resume Matcher',
      icon: FolderGit2,
      action: () => {
        onClose();
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'sec-experience',
      category: 'Navigation',
      title: 'Jump to Professional Experience',
      subtitle: 'Eimple Labs Web Dev & Cyber Gyan Internships',
      icon: Briefcase,
      action: () => {
        onClose();
        document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'sec-leadership',
      category: 'Navigation',
      title: 'Jump to Leadership & DSA Stats',
      subtitle: '150+ LeetCode Solved, Rangrez Fest & Sports Lead',
      icon: Award,
      action: () => {
        onClose();
        document.querySelector('#leadership')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'sec-contact',
      category: 'Navigation',
      title: 'Jump to Contact & Inquiries',
      subtitle: 'Direct email, phone, and inquiry form',
      icon: Mail,
      action: () => {
        onClose();
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
      }
    },
    {
      id: 'act-resume',
      category: 'Actions',
      title: 'View & Export Resume',
      subtitle: 'Open ATS-friendly verified resume modal',
      icon: FileText,
      action: () => {
        onClose();
        onOpenResume();
      }
    },
    {
      id: 'act-terminal',
      category: 'Actions',
      title: 'Launch Interactive CLI Terminal',
      subtitle: 'Execute commands (whoami, stats, projects, matrix)',
      icon: Terminal,
      action: () => {
        onClose();
        onOpenTerminal();
      }
    },
    {
      id: 'act-copy-email',
      category: 'Actions',
      title: 'Copy Primary Email',
      subtitle: 'rajukumarranchil7@gmail.com',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText('rajukumarranchil7@gmail.com');
        onClose();
        if (onShowToast) onShowToast('Copied rajukumarranchil7@gmail.com to clipboard!');
      }
    },
    {
      id: 'act-copy-academic-email',
      category: 'Actions',
      title: 'Copy IIIT Bhopal Academic Email',
      subtitle: '24p03f0043@iiitbhopal.ac.in',
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText('24p03f0043@iiitbhopal.ac.in');
        onClose();
        if (onShowToast) onShowToast('Copied 24p03f0043@iiitbhopal.ac.in to clipboard!');
      }
    },
    {
      id: 'act-github',
      category: 'External Links',
      title: 'Open GitHub Profile',
      subtitle: 'github.com/rajukumar1719',
      icon: Github,
      action: () => {
        window.open('https://github.com/rajukumar1719', '_blank');
        onClose();
      }
    },
    {
      id: 'act-linkedin',
      category: 'External Links',
      title: 'Open LinkedIn Profile',
      subtitle: 'linkedin.com/in/raju-kumar',
      icon: Linkedin,
      action: () => {
        window.open('https://linkedin.com/in/raju-kumar', '_blank');
        onClose();
      }
    }
  ];

  const filteredActions = actions.filter((item) => {
    const q = query.toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
      
      {/* Palette Container */}
      <div 
        className="w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-950/60">
          <Search className="w-5 h-5 text-cyan-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search (e.g. projects, resume, skills, email)..."
            className="flex-1 bg-transparent text-sm text-slate-100 placeholder-slate-500 outline-none"
          />
          <kbd className="hidden sm:inline-flex px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-400">
            ESC to close
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="text-center py-10 text-slate-500 text-xs font-mono">
              No matching commands or destinations found for "{query}".
            </div>
          ) : (
            filteredActions.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className="w-full text-left p-3 rounded-2xl hover:bg-slate-800/80 border border-transparent hover:border-slate-700/80 flex items-center justify-between group transition"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 group-hover:scale-105 transition shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition truncate">
                        {item.title}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 truncate">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                      {item.category}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition" />
                  </div>
                </button>
              );
            })
          )}
        </div>

        {/* Palette Footer */}
        <div className="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigation & System Spotlight</span>
          <span>Raju Kumar • IIIT Bhopal</span>
        </div>

      </div>

    </div>
  );
}
