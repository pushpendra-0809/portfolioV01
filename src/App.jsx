import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 relative selection:bg-slate-900 selection:text-white">
      {/* Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
