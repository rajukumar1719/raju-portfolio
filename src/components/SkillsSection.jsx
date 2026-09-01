import React, { useState, useMemo } from 'react';
import { 
  Code, 
  Globe, 
  Database, 
  Cpu, 
  Wrench, 
  Search, 
  Sparkles, 
  CheckCircle,
  Terminal,
  Filter
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsSection() {
  const { skillCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    Code: Code,
    Globe: Globe,
    Database: Database,
    Cpu: Cpu,
    Wrench: Wrench
  };

  const filteredCategories = useMemo(() => {
    let result = skillCategories;

    if (selectedCategory !== 'all') {
      result = result.filter(cat => cat.id === selectedCategory);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.map(cat => ({
        ...cat,
        skills: cat.skills.filter(s => 
          s.name.toLowerCase().includes(q) || 
          s.tag.toLowerCase().includes(q) || 
          s.highlight.toLowerCase().includes(q)
        )
      })).filter(cat => cat.skills.length > 0);
    }

    return result;
  }, [skillCategories, selectedCategory, searchQuery]);

  const allSkillsCount = useMemo(() => {
    return skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [skillCategories]);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400 mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>02 // TECHNICAL MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Skills & <span className="text-gradient">Core Competencies</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Engineered with a strong algorithmic core (C++ DSA) and production-grade full-stack capabilities across {allSkillsCount}+ tools & technologies.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech (e.g. C++, React, Mongo)..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs text-slate-200 placeholder-slate-500 outline-none transition"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-800/80 overflow-x-auto scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-cyan-500 to-indigo-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800/60'
            }`}
          >
            All Skills ({allSkillsCount})
          </button>

          {skillCategories.map((cat) => {
            const IconComponent = categoryIcons[cat.icon] || Code;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-slate-800 border border-cyan-500/40 text-cyan-300 shadow-md shadow-cyan-500/10'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800/60'
                }`}
              >
                <IconComponent className="w-3.5 h-3.5 text-cyan-400" />
                <span>{cat.title}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-950/80 text-slate-400 border border-slate-800">
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.length === 0 ? (
            <div className="col-span-full text-center py-16 px-4 rounded-3xl bg-slate-900/40 border border-slate-800">
              <Search className="w-8 h-8 text-slate-500 mx-auto mb-3" />
              <p className="text-slate-300 font-medium text-sm">No skills matching "{searchQuery}"</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-3 text-xs text-cyan-400 hover:underline font-mono"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredCategories.map((category) => {
              const IconComponent = categoryIcons[category.icon] || Code;
              return (
                <div
                  key={category.id}
                  className="group relative p-6 rounded-3xl bg-slate-900/70 border border-slate-800/80 hover:border-slate-700 backdrop-blur-xl shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Category Title Header */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-cyan-400 group-hover:border-cyan-500/40 group-hover:scale-105 transition">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-white text-base">
                          {category.title}
                        </h3>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                        {category.skills.length} items
                      </span>
                    </div>

                    {/* Skill Badges List */}
                    <div className="space-y-3">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="p-2.5 rounded-xl bg-slate-950/70 hover:bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition group/item"
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium text-xs text-slate-100 group-hover/item:text-cyan-300 transition">
                              {skill.name}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                              {skill.tag}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 line-clamp-1 group-hover/item:text-slate-300">
                            {skill.highlight}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category Card Footer */}
                  <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Verified in Academic & Projects</span>
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400/60" />
                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>

    </section>
  );
}
