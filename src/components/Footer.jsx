import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-10 text-slate-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <span className="font-heading font-bold text-slate-900 text-sm">
              {personalInfo.name}
            </span>
            <p className="text-slate-500 text-[11px] mt-0.5">
              B.Tech Computer Science & Engineering • ABESEC Ghaziabad (9.21 CGPA)
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors font-medium">
              GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors font-medium">
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-slate-900 transition-colors font-medium">
              Email
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-white hover:bg-slate-100 text-slate-700 rounded-md border border-slate-200 transition-colors cursor-pointer shadow-xs"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-4 text-center sm:text-left text-[11px] text-slate-500">
          &copy; {new Date().getFullYear()} Pushpendra Kumar Verma. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
