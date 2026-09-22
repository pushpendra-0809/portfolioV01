import React from 'react';
import { Calendar } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Education & Academics
          </h2>
          <div className="w-10 h-1 bg-slate-900 mt-2 rounded-xs"></div>
          <p className="text-slate-500 text-sm mt-2">
            My formal academic trajectory and coursework.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-4">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div>
                  <div className="inline-block px-2.5 py-0.5 bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold rounded mb-1.5">
                    {item.scoreLabel}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {item.degree}
                  </h3>
                  <div className="text-sm text-slate-500 mt-0.5 font-medium">
                    {item.institution}
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <div className="text-lg sm:text-xl font-bold text-slate-900">
                    {item.score}
                  </div>
                  <div className="text-xs text-slate-500 flex items-center sm:justify-end gap-1 mt-0.5 font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.timeline}</span>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="mt-3 space-y-1">
                {item.details.map((point, pIdx) => (
                  <p key={pIdx} className="text-xs sm:text-sm text-slate-600">
                    • {point}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
