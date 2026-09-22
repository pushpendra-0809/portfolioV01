import React from 'react';
import { FileText, Mail, MapPin, ExternalLink, ChevronRight, GraduationCap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/profile.jpg';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 bg-white border-b border-slate-100">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Credentials */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Hi, I'm {personalInfo.name}
              </h1>
              <p className="text-lg sm:text-xl text-slate-700 font-semibold">
                Computer Science Undergraduate & Full-Stack Developer
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pt-2">
                B.Tech CSE student at <strong className="text-slate-900">ABES Engineering College, Ghaziabad</strong>. Specialized in building full-stack web applications, Python backend architectures, and AI integrations (RAG & LLM APIs).
              </p>
            </div>

            {/* Stats Bar (Clean White Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="text-xl sm:text-2xl font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-700 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">
                    {stat.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons (Strictly Clean Rectangular - No Capsule Pill) */}
            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href="#projects"
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-md transition-colors flex items-center space-x-2 shadow-xs"
              >
                <span>View Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="px-5 py-2.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 text-sm font-semibold rounded-md transition-colors flex items-center space-x-2 shadow-xs"
              >
                <Mail className="w-4 h-4 text-slate-600" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold rounded-md transition-colors flex items-center space-x-1.5 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-700" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Direct Links */}
            <div className="flex items-center space-x-4 pt-1 text-sm text-slate-600">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Profiles:</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-900 flex items-center space-x-1 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 flex items-center space-x-1 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Photo Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-64 sm:w-72 lg:w-80 bg-white p-2.5 border border-slate-200 rounded-2xl shadow-sm">
              <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-100">
                <img
                  src={profileImg}
                  alt="Pushpendra Kumar Verma"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-3 text-center">
                <h3 className="font-heading font-bold text-slate-900 text-base">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  B.Tech CSE '28 • ABESEC Ghaziabad
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
