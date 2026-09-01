import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Send, Menu, X, Command, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ onOpenResume, onOpenTerminal, onOpenCommandPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'leadership', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'py-3 glass-nav shadow-lg shadow-black/40' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Institute Badge */}
          <div className="flex items-center gap-3">
            <a 
              href="#hero" 
              className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500/20 via-indigo-500/20 to-emerald-500/20 border border-cyan-500/40 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition duration-300">
                <span className="font-mono text-cyan-400 text-sm font-extrabold group-hover:scale-105 transition">RK</span>
                <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-slate-100 group-hover:text-cyan-300 transition">
                  {portfolioData.personal.handle}
                </span>
                <span className="text-[10px] text-slate-400 font-mono tracking-wider -mt-0.5">
                  RAJU KUMAR
                </span>
              </div>
            </a>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-[11px] font-medium text-slate-300 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>{portfolioData.personal.badge}</span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quick Command Palette Button */}
            <button
              onClick={onOpenCommandPalette}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-900/70 border border-slate-800 text-xs text-slate-400 hover:text-slate-200 hover:border-slate-700 transition"
              title="Open Command Palette (Ctrl+K)"
            >
              <Command className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden md:inline font-mono text-[11px] text-slate-500">Ctrl K</span>
            </button>

            {/* Quick Terminal Trigger */}
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-indigo-500/30 hover:border-indigo-500 text-xs font-mono text-indigo-300 hover:text-indigo-200 hover:bg-indigo-500/10 transition"
              title="Open Interactive Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              <span>Terminal</span>
            </button>

            {/* View Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/70 border border-slate-700/80 hover:border-cyan-500/50 text-xs font-medium text-slate-200 hover:text-cyan-300 transition"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>

            {/* Get in Touch CTA */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-xs font-semibold text-slate-950 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition transform active:scale-95"
            >
              <Send className="w-3.5 h-3.5 text-slate-950" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenCommandPalette}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              aria-label="Search command palette"
            >
              <Command className="w-4 h-4 text-cyan-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 animate-fadeIn">
          <div className="flex flex-col gap-2">
            <div className="px-3 py-2 text-xs font-mono text-slate-400 border-b border-slate-800/80 flex items-center justify-between">
              <span>NAVIGATION</span>
              <span className="text-cyan-400">{portfolioData.personal.badge}</span>
            </div>

            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-900/80 transition"
              >
                {link.name}
              </button>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-800/80 grid grid-cols-2 gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenTerminal(); }}
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-900 border border-indigo-500/40 text-xs font-mono text-indigo-300"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>CLI Terminal</span>
              </button>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
                className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-900 border border-slate-700 text-xs font-medium text-slate-200"
              >
                <FileText className="w-3.5 h-3.5 text-cyan-400" />
                <span>View Resume</span>
              </button>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-xs font-bold text-slate-950"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
