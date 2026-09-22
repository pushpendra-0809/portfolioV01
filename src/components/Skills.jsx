import React from 'react';
import { Code2, Layers, Brain, Cpu } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const getIcon = (name) => {
    switch (name) {
      case 'Code2': return <Code2 className="w-5 h-5 text-slate-900" />;
      case 'Layers': return <Layers className="w-5 h-5 text-slate-900" />;
      case 'Brain': return <Brain className="w-5 h-5 text-slate-900" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-slate-900" />;
      default: return <Code2 className="w-5 h-5 text-slate-900" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Technical Skills
          </h2>
          <div className="w-10 h-1 bg-slate-900 mt-2 rounded-xs"></div>
          <p className="text-slate-500 text-sm mt-2">
            Programming languages, frameworks, AI workflows, and developer tools.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-4 pb-3 border-b border-slate-100">
                <div className="p-2.5 bg-slate-100 rounded-md">
                  {getIcon(cat.icon)}
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-base sm:text-lg">
                  {cat.category}
                </h3>
              </div>

              {/* Skills Chips (Strictly Rectangular - No Capsule Pill) */}
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-medium rounded-md transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
