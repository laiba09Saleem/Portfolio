import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2 block">
            Academic Background
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Education
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Rigorous foundations in computing principles, algorithms, and software development methodologies.
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/40 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {educationData.degree}
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                  {educationData.institution}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-2">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{educationData.location}</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Graduated: {educationData.graduationDate}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* GPA Callout */}
            <div className="self-start px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              <div className="text-left">
                <span className="text-[10px] uppercase font-bold text-slate-400 block">
                  Cumulative GPA
                </span>
                <span className="font-mono text-sm font-bold text-slate-900 dark:text-white">
                  {educationData.gpa}
                </span>
              </div>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Core Academic Coursework</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {educationData.coursework.map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200/60 dark:border-slate-700/60"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
