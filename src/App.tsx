import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { generateAndDownloadCV } from './utils/generateCV';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // 1. Check saved localStorage preference
    const savedTheme = localStorage.getItem('laiba_portfolio_theme') as 'light' | 'dark' | null;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    // 2. Fall back to system preference on first visit
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const [cvModalOpen, setCvModalOpen] = useState(false);

  // Synchronize <html> root class and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('laiba_portfolio_theme', theme);
    } catch {
      // storage unavailable
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleDownloadCV = () => {
    generateAndDownloadCV();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#090D16] dark:text-slate-100 selection:bg-blue-500/20 selection:text-blue-600 dark:selection:text-blue-400 font-sans transition-colors duration-200">
      {/* Sticky Top Bar Contract Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCVModal={() => setCvModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenCVModal={() => setCvModalOpen(true)}
          onDownloadCV={handleDownloadCV}
        />

        {/* About Section */}
        <About />

        {/* Experience Section */}
        <Experience />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Education Section */}
        <Education />

        {/* Certifications Section */}
        <Certifications />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Minimal Editorial Footer */}
      <Footer />

      {/* CV Modal for Preview & Custom PDF */}
      <CVModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
      />
    </div>
  );
}
