import React from 'react';
import { Terminal, Cpu, Layers, GitBranch, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Terminal,
      title: 'Backend & RESTful APIs',
      desc: 'Architecting scalable server-side systems using Python, FastAPI, and Django REST Framework with clean database interactions.'
    },
    {
      icon: Cpu,
      title: 'AI/ML & Intelligent Systems',
      desc: 'Developing practical ML pipelines, RAG conversational workflows with LangChain, and deep learning models with PyTorch & TensorFlow.'
    },
    {
      icon: Layers,
      title: 'Modern Frontend Engineering',
      desc: 'Creating responsive, accessible user interfaces with React, TypeScript, and modern CSS frameworks connected to asynchronous backends.'
    },
    {
      icon: GitBranch,
      title: 'Engineering Rigor & Best Practices',
      desc: 'Working collaboratively within Agile sprints, applying Git version control, Docker containerization, and writing maintainable code.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2 block">
            About Me
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineering with focus, curiosity and practical impact.
          </h2>
        </div>

        {/* 2-Column Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Narrative Bio */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            {personalInfo.aboutLong.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 flex items-center gap-6 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" />
                <span>Lahore, Pakistan</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>BS Computer Science, University of the Punjab</span>
              <span aria-hidden="true">·</span>
              <span>Class of 2025</span>
            </div>
          </div>

          {/* Right: Core Engineering Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
