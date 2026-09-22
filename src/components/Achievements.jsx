import React from 'react';
import { Trophy, Award, Users } from 'lucide-react';
import { achievements, certifications, extracurricular } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Achievements & Leadership
          </h2>
          <div className="w-10 h-1 bg-slate-900 mt-2 rounded-xs"></div>
          <p className="text-slate-500 text-sm mt-2">
            National hackathon awards, institutional leadership, and technical certifications.
          </p>
        </div>

        {/* 3 Columns: Hackathons, Leadership, Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Hackathons */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 pb-2 border-b border-slate-200">
              <Trophy className="w-4 h-4 text-slate-900" />
              <h3 className="font-heading font-bold text-slate-900 text-base">
                Hackathon Honors
              </h3>
            </div>

            <div className="space-y-3">
              {achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border border-slate-200 rounded-lg shadow-xs hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-900">{item.role}</span>
                    <span className="text-slate-500 font-mono">{item.year}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {item.title}
                  </h4>
                  <div className="text-xs text-slate-500 mb-2">
                    {item.organization}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 pb-2 border-b border-slate-200">
              <Users className="w-4 h-4 text-slate-900" />
              <h3 className="font-heading font-bold text-slate-900 text-base">
                Leadership & Roles
              </h3>
            </div>

            <div className="space-y-3">
              {extracurricular.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border border-slate-200 rounded-lg shadow-xs hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-semibold text-slate-900">{item.role}</span>
                    <span className="text-slate-500 font-mono">{item.period}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 pb-2 border-b border-slate-200">
              <Award className="w-4 h-4 text-slate-900" />
              <h3 className="font-heading font-bold text-slate-900 text-base">
                Certifications
              </h3>
            </div>

            <div className="space-y-3">
              {certifications.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border border-slate-200 rounded-lg shadow-xs flex items-center justify-between"
                >
                  <div>
                    <h4 className="font-semibold text-slate-900 text-xs sm:text-sm">
                      {item.name}
                    </h4>
                    <div className="text-xs text-slate-500">
                      {item.issuer}
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
