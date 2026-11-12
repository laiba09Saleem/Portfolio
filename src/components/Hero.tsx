import React, { useState } from 'react';
import {
  MapPin,
  Mail,
  Linkedin,
  Github,
  ArrowDown,
  Download,
  Eye,
  CheckCircle2,
  Sparkles,
  Maximize2,
  X,
  ShieldCheck
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profilePhoto from '../assets/images/laiba_saleem.jpeg';

interface HeroProps {
  onOpenCVModal: () => void;
  onDownloadCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal, onDownloadCV }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/5 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Location & Title Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400 mb-4">
              <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{personalInfo.location}</span>
              </span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Available for Software Engineering Roles</span>
              </span>
            </div>

            {/* Candidate Name */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] mb-3">
              {personalInfo.fullName}
            </h1>

            {/* Professional Sub-title */}
            <p className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 mb-4 tracking-tight">
              {personalInfo.title}
            </p>

            {/* Main Headline */}
            <h2
              className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100 mb-5 leading-snug"
              style={{ textWrap: 'balance' }}
            >
              {personalInfo.headline}
            </h2>

            {/* Professional Introduction */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 max-w-2xl">
              {personalInfo.bio}
            </p>

            {/* Contact details line */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400 mb-8 pt-2 border-t border-slate-200/80 dark:border-slate-800/80 w-full">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                title="Send email"
              >
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalInfo.email}</span>
              </a>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                <span>LinkedIn</span>
              </a>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-700">·</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-slate-500" />
                <span>GitHub</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {/* 1. View My Projects */}
              <button
                onClick={() => scrollToSection('projects')}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors shadow-xs hover:shadow-sm flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              {/* 2. Get In Touch */}
              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Get In Touch</span>
                <Mail className="w-4 h-4 text-slate-400" />
              </button>

              {/* 3. Download CV */}
              <button
                onClick={onDownloadCV}
                className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-dashed border-slate-300 dark:border-slate-700 rounded-lg hover:border-blue-400 dark:hover:border-blue-500 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
                title="Download ATS-ready PDF Resume"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Download CV</span>
              </button>

              {/* 4. Preview CV Option */}
              <button
                onClick={onOpenCVModal}
                className="px-3 py-2.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 transition-colors flex items-center justify-center gap-1 whitespace-nowrap cursor-pointer"
                title="Preview formatted resume in modal"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview</span>
              </button>
            </div>
          </div>

          {/* Right Column: Profile Photograph & Refined Executive Frame (Fixed, Immutable) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[390px]">
              {/* Outer double-rim luxury frame */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-slate-200/90 via-slate-100 to-slate-200/80 dark:from-slate-800/90 dark:via-slate-800/50 dark:to-slate-900 border border-slate-200 dark:border-slate-800/80 shadow-2xl backdrop-blur-sm group">
                {/* Inner image container */}
                <div
                  onClick={() => setLightboxOpen(true)}
                  className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800/90 cursor-pointer shadow-inner"
                  title="Click to view full portrait"
                >
                  <img
                    src={profilePhoto}
                    alt="Laiba Saleem - Software Engineer & AI/ML Developer"
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top-Right Floating Verified Pill */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-700/80 shadow-sm flex items-center gap-1.5 text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Verified Profile</span>
                  </div>

                  {/* Hover Lightbox Indicator */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs font-medium flex items-center gap-1.5 shadow-md">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>View Full Photo</span>
                    </span>
                  </div>
                </div>

                {/* Bottom Overlay Card */}
                <div className="mt-3 p-3.5 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/70 dark:border-slate-800 backdrop-blur-md flex items-center justify-between">
                  <div className="text-left">
                    <h3 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                      <span>Laiba Saleem</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">
                      Software Engineer · Lahore, PK
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800/60 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                      <span>Official</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Sub-card verification tag */}
              <div className="mt-3 text-center">
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 inline-flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-500" />
                  <span>Curated for CTOs, Engineering Leaders & Technical Recruiters</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Key Highlights Strip below hero split */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="flex flex-col">
            <span className="font-mono text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tabular-nums">
              4+
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Engineering Internships & Traineeships
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 tabular-nums">
              89%
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              MobileNetV2 Model Accuracy
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tabular-nums">
              500+
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Enterprise Documents in RAG System
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-mono text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 tabular-nums">
              30%–40%
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Query Handling & Latency Reduction
            </span>
          </div>
        </div>
      </div>

      {/* High-Resolution Photo Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-white dark:bg-[#0c1322] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold text-slate-900 dark:text-white">
                Laiba Saleem — Professional Portrait
              </span>
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-1 rounded-md text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-slate-100 dark:bg-slate-950 flex items-center justify-center">
              <img
                src={profilePhoto}
                alt="Laiba Saleem High-Resolution Portrait"
                className="max-h-[70vh] w-auto rounded-xl object-contain shadow-md"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
