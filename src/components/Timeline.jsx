import React from 'react';
import { Trophy, Award, Users, ShieldCheck, Star, Calendar, Flag, Sparkles } from 'lucide-react';
import { achievements, certifications, extracurricular } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 relative bg-[#07090E] border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-widest">
            <span className="w-2 h-2 bg-cyan-400"></span>
            <span>// SECTION 04</span>
            <span className="text-slate-600">------------------</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-2">
            EXPEDITIONS <span className="text-red-500 font-mono text-2xl">//</span> ACHIEVEMENTS & ROLES
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans mt-2 max-w-2xl">
            National hackathon rankings, verified industry certifications, and executive leadership in collegiate debating.
          </p>
        </div>

        {/* 3 Columns Layout: Hackathons | Leadership | Certifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Hackathon Triumphs (5 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-red-400 uppercase tracking-wider pb-2 border-b border-slate-800">
              <Trophy className="w-4 h-4 text-red-500" />
              <span>HACKATHON HONORS</span>
            </div>

            <div className="space-y-4">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#0D1322] border-l-4 border-red-500 border-y border-r border-slate-800 relative group hover:border-slate-700 transition-all"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                    <span className="px-2 py-0.5 bg-red-950/70 text-red-300 font-bold border border-red-500/40">
                      {item.badge}
                    </span>
                    <span className="text-slate-400">{item.year}</span>
                  </div>

                  <h3 className="font-tech text-base font-bold text-white group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 mb-2">
                    {item.organization}
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Extracurricular & Leadership (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase tracking-wider pb-2 border-b border-slate-800">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>LEADERSHIP & AGORA</span>
            </div>

            <div className="space-y-4">
              {extracurricular.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#0D1322] border-l-4 border-cyan-500 border-y border-r border-slate-800 relative group hover:border-slate-700 transition-all"
                >
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
                    <span className="px-2 py-0.5 bg-cyan-950/70 text-cyan-300 font-bold border border-cyan-500/40">
                      {item.role}
                    </span>
                    <span className="text-slate-400">{item.period}</span>
                  </div>

                  <h3 className="font-tech text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed mt-2">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Certifications & Recognition (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-slate-300 uppercase tracking-wider pb-2 border-b border-slate-800">
              <ShieldCheck className="w-4 h-4 text-red-400" />
              <span>CERTIFICATIONS</span>
            </div>

            <div className="space-y-3">
              {certifications.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-[#0D1322]/80 border border-slate-800 hover:border-red-500/40 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-red-400">
                      // {item.date}
                    </span>
                    <span className="px-2 py-0.5 bg-slate-900 text-[10px] font-mono text-slate-300">
                      {item.tag}
                    </span>
                  </div>
                  <h4 className="font-tech text-sm font-bold text-white mt-1">
                    {item.name}
                  </h4>
                  <div className="text-[11px] font-mono text-cyan-400">
                    Issuer: {item.issuer}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
