import React from 'react';
import { Server, Layout, Brain, Database, Wrench, Globe, Check } from 'lucide-react';
import { skillsData, languagesData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Backend Development':
        return Server;
      case 'Frontend Development':
        return Layout;
      case 'AI & Machine Learning':
        return Brain;
      case 'Database & Data':
        return Database;
      case 'Tools & Engineering Practices':
        return Wrench;
      default:
        return Server;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2 block">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Technical Skills & Tooling
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Engineered across real-world deployments, academic coursework, and production codebases.
          </p>
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillsData.map((category) => {
            const Icon = getCategoryIcon(category.title);
            return (
              <div
                key={category.title}
                className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 rounded-md hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>{category.skills.length} core technologies</span>
                  <span className="text-blue-600 dark:text-blue-400">Verified</span>
                </div>
              </div>
            );
          })}

          {/* Languages Card */}
          <div className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Languages
                </h3>
              </div>

              <div className="space-y-3">
                {languagesData.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50"
                  >
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {lang.name}
                    </span>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 text-[11px] font-mono text-slate-400">
              Clear professional communication
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
