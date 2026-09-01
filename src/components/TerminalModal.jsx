import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Maximize2, Minimize2, Sparkles, CornerDownLeft } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function TerminalModal({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: '==========================================================', type: 'system' },
    { text: '  RAJU KUMAR // DEVELOPER CLI v2.6.0', type: 'system-title' },
    { text: '  IIIT Bhopal - MCA (IT) Candidate | Full-Stack & Systems', type: 'system-sub' },
    { text: '==========================================================', type: 'system' },
    { text: 'Type "help" to view available commands, or "projects" to view work.', type: 'info' },
  ]);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { text: `user@rk-dev:~$ ${cmd}`, type: 'user' }];

    switch (trimmed) {
      case 'help':
        newHistory.push(
          { text: 'Available commands:', type: 'system' },
          { text: '  whoami       - Display developer summary & background', type: 'text' },
          { text: '  skills       - List core technical stack & competencies', type: 'text' },
          { text: '  projects     - List production projects (CampusHire, AI Matcher)', type: 'text' },
          { text: '  experience   - Display industry internships (Eimple Labs, Cyber Gyan)', type: 'text' },
          { text: '  education    - Display academic details (IIIT Bhopal, Ranchi Univ)', type: 'text' },
          { text: '  stats        - Show LeetCode DSA & competitive programming metrics', type: 'text' },
          { text: '  contact      - Display verified emails and phone number', type: 'text' },
          { text: '  matrix       - Enter cyberpunk developer sequence', type: 'text' },
          { text: '  clear        - Clear terminal history', type: 'text' },
          { text: '  exit         - Close terminal session', type: 'text' }
        );
        break;

      case 'whoami':
        newHistory.push(
          { text: `Name: ${portfolioData.personal.fullName}`, type: 'cyan' },
          { text: `Role: ${portfolioData.personal.role}`, type: 'text' },
          { text: `Institution: Indian Institute of Information Technology, Bhopal (IIIT Bhopal)`, type: 'text' },
          { text: `Core Interests: Distributed Systems, MERN Stack, Applied NLP, C++ DSA`, type: 'text' }
        );
        break;

      case 'skills':
        portfolioData.skillCategories.forEach(cat => {
          newHistory.push({
            text: `[${cat.title}]: ${cat.skills.map(s => s.name).join(', ')}`,
            type: 'text'
          });
        });
        break;

      case 'projects':
        portfolioData.projects.forEach(p => {
          newHistory.push(
            { text: `* ${p.title} (${p.category})`, type: 'cyan' },
            { text: `  Role: ${p.role} | Tech: ${p.techStack.join(', ')}`, type: 'text' },
            { text: `  Live URL: ${p.links.demo}`, type: 'emerald' },
            { text: `  GitHub: ${p.links.github}`, type: 'text' },
            { text: `  Summary: ${p.description}`, type: 'text' }
          );
        });
        break;

      case 'experience':
        portfolioData.experiences.forEach(exp => {
          newHistory.push(
            { text: `* ${exp.company} - ${exp.role} (${exp.timeline})`, type: 'indigo' },
            { text: `  Location: ${exp.location} | Tech: ${exp.tech.join(', ')}`, type: 'text' }
          );
        });
        break;

      case 'education':
        portfolioData.education.forEach(edu => {
          newHistory.push(
            { text: `* ${edu.institution} [${edu.duration}]`, type: 'cyan' },
            { text: `  Degree: ${edu.degree} | CGPA: ${edu.cgpa}`, type: 'text' }
          );
        });
        break;

      case 'stats':
        newHistory.push(
          { text: `* LeetCode & CodeChef: 150+ Problems Solved in C++`, type: 'emerald' },
          { text: `* MCA (IT) CGPA @ IIIT Bhopal: 7.0 / 10.0`, type: 'text' },
          { text: `* BCA CGPA @ Ranchi University: 8.76 / 10.0 (First Class Distinction)`, type: 'text' },
          { text: `* Flagship Projects: 3 Production-Grade Web & AI Deployments`, type: 'text' },
          { text: `* Internships: 2 (Web Dev & Cybersecurity)`, type: 'text' }
        );
        break;

      case 'contact':
        newHistory.push(
          { text: `Primary Email: rajukumarranchil7@gmail.com`, type: 'cyan' },
          { text: `Academic Email: 24p03f0043@iiitbhopal.ac.in`, type: 'cyan' },
          { text: `Phone: +91-8210199794`, type: 'emerald' },
          { text: `GitHub: https://github.com/rajukumar1719`, type: 'text' },
          { text: `LinkedIn: https://linkedin.com/in/raju-kumar`, type: 'text' }
        );
        break;

      case 'matrix':
        newHistory.push(
          { text: '01010010 01001011 00101110 01100100 01100101 01110110', type: 'emerald' },
          { text: 'INITIALIZING HIGH-PERFORMANCE WORKFLOW... [DONE]', type: 'emerald' },
          { text: 'SYSTEM: ALL ALGORITHMS OPTIMIZED O(1) TIME COMPLEXITY', type: 'emerald' }
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'exit':
        onClose();
        return;

      case 'sudo':
        newHistory.push({ text: 'Access granted: You are now running with high engineering privileges.', type: 'emerald' });
        break;

      default:
        if (trimmed === '') break;
        newHistory.push({
          text: `Command not found: "${cmd}". Type "help" for a list of valid commands.`,
          type: 'error'
        });
        break;
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fadeIn">
      
      {/* Terminal Window */}
      <div 
        className="w-full max-w-3xl h-[520px] rounded-2xl bg-[#090d16] border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden font-mono text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d1322] border-b border-slate-800 select-none">
          <div className="flex items-center gap-2">
            <button 
              onClick={onClose} 
              className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-400 transition"
              title="Close terminal"
            ></button>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            <span className="ml-2 text-slate-400 font-sans text-xs">raju-kumar@iiit-bhopal: ~ (zsh)</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <button onClick={onClose} className="hover:text-white p-1">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Body Screen */}
        <div 
          ref={scrollRef}
          className="flex-1 p-5 overflow-y-auto space-y-1.5 text-slate-300 leading-relaxed scrollbar-thin scrollbar-thumb-slate-800"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((item, idx) => {
            if (item.type === 'user') {
              return <div key={idx} className="text-cyan-400 font-semibold">{item.text}</div>;
            }
            if (item.type === 'cyan') {
              return <div key={idx} className="text-cyan-300 font-medium">{item.text}</div>;
            }
            if (item.type === 'indigo') {
              return <div key={idx} className="text-indigo-300 font-medium">{item.text}</div>;
            }
            if (item.type === 'emerald') {
              return <div key={idx} className="text-emerald-400">{item.text}</div>;
            }
            if (item.type === 'error') {
              return <div key={idx} className="text-rose-400">{item.text}</div>;
            }
            if (item.type === 'system-title') {
              return <div key={idx} className="text-cyan-400 font-bold">{item.text}</div>;
            }
            if (item.type === 'system-sub') {
              return <div key={idx} className="text-slate-400">{item.text}</div>;
            }
            return <div key={idx} className="text-slate-300">{item.text}</div>;
          })}

          {/* Active Prompt Line */}
          <div className="flex items-center gap-2 pt-2">
            <span className="text-emerald-400 font-bold">raju@iiit-bhopal</span>
            <span className="text-slate-500">:</span>
            <span className="text-cyan-400">~</span>
            <span className="text-slate-400">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-slate-100 outline-none font-mono caret-cyan-400"
              autoFocus
              spellCheck="false"
            />
          </div>
        </div>

        {/* Terminal Bottom Helper Ribbon */}
        <div className="px-4 py-2 bg-[#0d1322] border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
          <span>Shortcuts: Type <span className="text-cyan-400">projects</span>, <span className="text-cyan-400">stats</span>, <span className="text-cyan-400">contact</span></span>
          <span>Press Enter ↵ to execute</span>
        </div>

      </div>

    </div>
  );
}
