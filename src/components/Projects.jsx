import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-10 h-1 bg-slate-900 mt-2 rounded-xs"></div>
          <p className="text-slate-500 text-sm mt-2">
            AI-driven applications, hackathon platforms, and full-stack software systems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-6 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header with Category and Timeline */}
                <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <span className="px-2.5 py-0.5 bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold rounded">
                      {project.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    {project.timeline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2.5 mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5">
                  {project.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start space-x-2 text-xs text-slate-600">
                      <span className="text-slate-900 font-bold">•</span>
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Stack Chips (Strictly Rectangular - No Capsule Pill) */}
                <div className="flex flex-wrap gap-1.5 mb-4 pt-3 border-t border-slate-100">
                  {project.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-slate-50 border border-slate-200 text-slate-700 text-[11px] font-mono rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Code link */}
                <div className="flex items-center justify-end">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-md transition-colors flex items-center space-x-1.5 shadow-xs"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
