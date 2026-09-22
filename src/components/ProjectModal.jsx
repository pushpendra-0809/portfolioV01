import React from 'react';
import { X, ExternalLink, ShieldAlert, Cpu, Sparkles, CheckCircle, Terminal, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      
      {/* Modal Card */}
      <div
        className="relative w-full max-w-3xl bg-[#0D1322] border-2 border-red-500/60 shadow-[0_0_50px_rgba(255,30,68,0.3)] my-8 text-left overflow-hidden clip-cyber-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top HUD Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#07090E] border-b border-slate-800">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 bg-red-500 animate-pulse"></span>
            <span className="font-mono text-xs text-red-400 uppercase tracking-widest">
              PROTOCOL DOSSIER // {project.id.toUpperCase()}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Protocol"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          
          {/* Header Info */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-1 bg-red-950/70 border border-red-500/50 text-red-300 font-mono text-xs uppercase tracking-wider">
                {project.badge}
              </span>
              <span className="px-2.5 py-1 bg-cyan-950/70 border border-cyan-500/50 text-cyan-300 font-mono text-xs uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400 ml-auto">
                TIMELINE: {project.period}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {project.title}
            </h3>
            <p className="text-cyan-300 font-mono text-xs sm:text-sm mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <div className="p-4 bg-[#07090E] border-l-2 border-red-500 text-slate-300 text-sm leading-relaxed">
            {project.description}
          </div>

          {/* Technical Architecture & Key Innovations */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono text-red-400 uppercase tracking-wider">
              <Layers className="w-4 h-4 text-red-500" />
              <span>KEY ENGINEERING HIGHLIGHTS & PROTOCOLS</span>
            </div>

            <div className="space-y-2">
              {project.keyPoints.map((point, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-slate-300 p-2.5 bg-slate-900/60 border border-slate-800">
                  <span className="text-red-400 font-mono font-bold mt-0.5">&gt;</span>
                  <span className="leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Matrix */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              DEPLOYED STACK & LIBRARIES //
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-950 border border-slate-700 text-xs font-mono text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Actions & Links */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white text-xs font-tech font-bold uppercase tracking-wider clip-cyber-btn transition-colors flex items-center space-x-2 shadow-[0_0_15px_rgba(255,30,68,0.4)]"
            >
              <GithubIcon className="w-4 h-4" />
              <span>INSPECT REPOSITORY</span>
            </a>

            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono uppercase cursor-pointer"
            >
              CLOSE PROTOCOL [ESC]
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
