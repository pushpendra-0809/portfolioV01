import React from 'react';
import { X, Printer } from 'lucide-react';
import { personalInfo, education, projects, achievements, certifications, extracurricular } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 bg-black/60 backdrop-blur-xs overflow-y-auto">
      
      {/* Modal Card */}
      <div
        className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-xl shadow-2xl my-6 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
          <span className="font-heading font-bold text-sm text-slate-900">
            Resume Preview — {personalInfo.name}
          </span>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-md flex items-center space-x-1.5 transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-md transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto bg-white text-slate-900 font-sans space-y-6" id="printable-resume">
          
          {/* Header */}
          <div className="text-center border-b border-slate-200 pb-5">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {personalInfo.name}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-xs text-slate-600 mt-2 font-medium">
              <span>{personalInfo.location}</span>
              <span>•</span>
              <span>{personalInfo.phone}</span>
              <span>•</span>
              <a href={`mailto:${personalInfo.email}`} className="text-slate-900 hover:underline">{personalInfo.email}</a>
              <span>•</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-900 hover:underline">GitHub</a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-2.5">
              Education
            </h2>
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-slate-900">B.Tech in Computer Science & Engineering — ABES Engineering College, Ghaziabad</div>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-slate-900">9.21 CGPA (First Year)</div>
                  <div className="text-slate-500">2024 – 2028</div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-slate-900">Class XII (ISC) — St. Lawrence School, Unnao</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-700">78.55%</div>
                  <div className="text-slate-500">2024</div>
                </div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-slate-900">Class X (ICSE) — St. Lawrence School, Unnao</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-700">90.80% (Distinction)</div>
                  <div className="text-slate-500">2022</div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-2.5">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-slate-700">
              <div><strong className="text-slate-900">Developer Tools:</strong> VS Code, Git, GitHub, Google Colab, Unity, Godot</div>
              <div><strong className="text-slate-900">Programming & Core:</strong> C++, C, Java, Python, DSA, React, FastAPI, Node.js, MongoDB</div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-2.5">
              Key Projects
            </h2>
            <div className="space-y-3.5 text-xs">
              {projects.map((proj, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-slate-900">{proj.title}</span>
                    <span className="text-slate-500 font-mono">{proj.timeline}</span>
                  </div>
                  <ul className="list-disc list-inside text-slate-700 space-y-0.5 pl-1">
                    {proj.highlights.map((hp, hIdx) => (
                      <li key={hIdx}>{hp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements & Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-2.5">
                Achievements
              </h2>
              <div className="space-y-1.5 text-xs">
                {achievements.map((ach, idx) => (
                  <div key={idx}>
                    <div className="font-bold text-slate-900">{ach.title} — <span className="font-normal text-slate-700">{ach.role}</span> ({ach.year})</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-2.5">
                Certifications
              </h2>
              <div className="space-y-1.5 text-xs">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span className="text-slate-900 font-medium">{cert.name}</span>
                    <span className="text-slate-500 font-mono">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Extracurricular & Leadership */}
          <div>
            <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200 pb-1 mb-2.5">
              Extracurricular & Leadership
            </h2>
            <div className="space-y-2 text-xs">
              {extracurricular.map((ex, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-start">
                    <div className="font-bold text-slate-900">{ex.title} — <span className="font-normal text-slate-700">{ex.role}</span></div>
                    <span className="text-slate-500 font-mono">{ex.period}</span>
                  </div>
                  <div className="text-slate-600 mt-0.5">{ex.description}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
