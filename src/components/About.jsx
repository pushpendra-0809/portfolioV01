import React from 'react';
import { Code, Brain, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-5 h-5 text-slate-800" />,
      title: "Full-Stack Development",
      desc: "Building responsive web platforms with React, Node.js, FastAPI, and MongoDB using modern clean architecture."
    },
    {
      icon: <Brain className="w-5 h-5 text-slate-800" />,
      title: "AI Integration & RAG",
      desc: "Architecting adaptive evaluation tools and knowledge retrieval engines using Google Gemini API and vector workflows."
    },
    {
      icon: <Users className="w-5 h-5 text-slate-800" />,
      title: "Leadership & Debating",
      desc: "General Secretary of AGORA (ABESEC Debating Society), actively driving tournament logistics and parliamentary speaking."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50/50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            About Me
          </h2>
          <div className="w-10 h-1 bg-slate-900 mt-2 rounded-xs"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Bio text */}
          <div className="lg:col-span-6 space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              I am a Computer Science & Engineering undergraduate at <strong className="text-slate-900">ABES Engineering College, Ghaziabad</strong>, currently maintaining a <span className="text-slate-900 font-bold">9.21 CGPA</span> in my first year.
            </p>
            <p>
              My focus is on developing practical, robust software systems. I frequently compete in national hackathons, having achieved a <strong>Top 10 finish out of 1100+ teams in QuantCraft 2024</strong> and qualifying as a <strong>National Finalist in HackIndia 2024</strong> for <strong className="text-slate-900">Yojana AI</strong>.
            </p>
            <p>
              In addition to technical development, I actively lead <strong className="text-slate-900">AGORA (The Debating Society of ABESEC)</strong> as its General Secretary, managing organizational responsibilities and representing our college at national debating tournaments.
            </p>
          </div>

          {/* Highlights */}
          <div className="lg:col-span-6 space-y-3">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-white border border-slate-200 rounded-lg shadow-xs flex items-start space-x-3.5"
              >
                <div className="p-2.5 bg-slate-100 rounded-md shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
