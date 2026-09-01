import React from 'react';
import { 
  Award, 
  Sparkles, 
  Trophy, 
  Terminal, 
  Code2, 
  Flame, 
  CheckCircle, 
  Users, 
  Calendar,
  ExternalLink,
  Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function LeadershipBento() {
  const { leadership, dsaStats } = portfolioData;

  const handleTriggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  return (
    <section id="leadership" className="py-20 relative overflow-hidden">
      
      {/* Background Section Glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>05 // IMPACT & LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Leadership, <span className="text-gradient">Achievements & DSA</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Demonstrated track record in competitive problem-solving, campus leadership, and orchestrating high-scale collegiate events at IIIT Bhopal.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6">
          
          {/* Card 1: 150+ DSA Solutions Bento Card (Spans 7 cols) */}
          <div className="md:col-span-3 lg:col-span-7 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 backdrop-blur-xl p-7 sm:p-8 flex flex-col justify-between shadow-2xl relative group">
            
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 mb-2">
                  <Terminal className="w-3 h-3" />
                  <span>C++ DSA COMPETENCY</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  150+ LeetCode DSA Problems Solved
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Strong grasp of Data Structures & Algorithms with consistent problem-solving habits in modern C++.
                </p>
              </div>

              <button
                onClick={handleTriggerConfetti}
                className="p-3 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-emerald-500/40 text-emerald-400 hover:scale-105 transition shadow-lg shrink-0"
                title="Celebrate DSA Milestone!"
              >
                <Zap className="w-5 h-5" />
              </button>
            </div>

            {/* Topic Mastery Progress Bars */}
            <div className="space-y-3.5 my-4 bg-slate-950/70 p-5 rounded-2xl border border-slate-800/80">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1">
                Core Topic Distribution:
              </div>
              {dsaStats.breakdown.map((item) => (
                <div key={item.topic} className="space-y-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">{item.topic}</span>
                    <span className="text-emerald-400 font-bold">{item.count} problems</span>
                  </div>
                  <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full transition-all duration-1000"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Badges */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
                  Language: C++ (STL)
                </span>
                <span className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
                  Platform: LeetCode & CodeChef
                </span>
              </div>
              <a
                href={portfolioData.personal.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1"
              >
                <span>Profile</span> &rarr;
              </a>
            </div>

          </div>

          {/* Card 2: Rangrez Lead Coordinator (Spans 5 cols) */}
          <div className="md:col-span-3 lg:col-span-5 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 backdrop-blur-xl p-7 flex flex-col justify-between shadow-2xl relative group">
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                  IIIT Bhopal • 2025
                </span>
              </div>

              <span className="text-xs font-mono text-purple-400 uppercase tracking-wider font-semibold">
                Lead Coordinator
              </span>
              <h3 className="text-xl font-bold text-white mt-1 mb-3 font-display">
                Rangrez: The Fresher Fiesta
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Spearheaded operations, cross-department scheduling, stage logistics, and budget allocation for IIIT Bhopal's premier freshers celebration, managing 300+ attendees and volunteer cohorts.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-2 text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                  <span>Led cross-functional team of 25+ student coordinators</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
                  <span>Managed end-to-end venue and stage tech coordination</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Event Operations & Leadership</span>
              <Users className="w-4 h-4 text-purple-400" />
            </div>

          </div>

          {/* Card 3: Sports Coordinator MCA (Spans 6 cols) */}
          <div className="md:col-span-3 lg:col-span-6 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 backdrop-blur-xl p-7 flex flex-col justify-between shadow-2xl relative group">
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                  MCA Department • 2025
                </span>
              </div>

              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                Department Sports Head
              </span>
              <h3 className="text-xl font-bold text-white mt-1 mb-3 font-display">
                Sports Coordinator — IIIT Bhopal
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                Organized and officiated inter-departmental tournaments (Cricket, Badminton, Table Tennis), managing fixture scheduling, team registrations, and university sports infrastructure.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Tournament Strategy & Team Spirit</span>
              <Trophy className="w-4 h-4 text-cyan-400" />
            </div>

          </div>

          {/* Card 4: Academic Rigor & CS Fundamentals (Spans 6 cols) */}
          <div className="md:col-span-3 lg:col-span-6 rounded-3xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 backdrop-blur-xl p-7 flex flex-col justify-between shadow-2xl relative group">
            
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                  BCA 8.76 CGPA • MCA 7.0
                </span>
              </div>

              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                Computer Science Rigor
              </span>
              <h3 className="text-xl font-bold text-white mt-1 mb-3 font-display">
                Continuous Learning & Engineering Mindset
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Combining high academic discipline with modern full-stack development, software architecture patterns, and agile engineering practices.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Ready for High-Impact Roles</span>
              <Sparkles className="w-4 h-4 text-indigo-400" />
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
