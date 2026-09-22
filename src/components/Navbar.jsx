import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs'
          : 'bg-white/80 backdrop-blur-xs py-4 sm:py-5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a href="#hero" className="flex items-center space-x-2.5 text-slate-900 hover:text-slate-700 transition-colors">
            <div className="w-8 h-8 rounded-md bg-slate-900 flex items-center justify-center text-white font-heading font-bold text-sm">
              PV
            </div>
            <span className="font-heading font-bold text-base sm:text-lg tracking-tight text-slate-900">
              Pushpendra Verma
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button (Strictly Rectangular - No Capsule Pill) */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenResume}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-md transition-colors flex items-center space-x-2 shadow-xs cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-md flex items-center space-x-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-md bg-slate-100 border border-slate-200"
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-5 space-y-1 mt-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
