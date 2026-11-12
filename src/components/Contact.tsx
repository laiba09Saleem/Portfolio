import React, { useState } from 'react';
import { Mail, Linkedin, Github, Youtube, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socials = [
    {
      name: 'LinkedIn',
      url: personalInfo.linkedin,
      handle: 'in/laiba-saleem-4b8541248',
      icon: Linkedin,
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      name: 'GitHub',
      url: personalInfo.github,
      handle: 'github.com/laiba09Saleem',
      icon: Github,
      color: 'text-slate-800 dark:text-white'
    },
    {
      name: 'YouTube',
      url: personalInfo.youtube,
      handle: '@linesera_solutions',
      icon: Youtube,
      color: 'text-red-600 dark:text-red-400'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2 block">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
            Let's Build Something Meaningful.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Have an opportunity, project idea or collaboration in mind? I'd be happy to connect and discuss how technology can help bring ideas to life.
          </p>
        </div>

        {/* Primary Contact Card */}
        <div className="max-w-2xl mx-auto p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1322] shadow-sm text-center">
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6" />
          </div>

          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1">
            Primary Contact Email
          </span>
          <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-6">
            {personalInfo.email}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${personalInfo.email}?subject=Software%20Engineering%20Opportunity%20-%20Laiba%20Saleem`}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Send Direct Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Social and Professional Profiles */}
        <div className="max-w-3xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {socials.map((soc) => {
            const Icon = soc.icon;
            return (
              <a
                key={soc.name}
                href={soc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 transition-colors">
                    <Icon className={`w-4 h-4 ${soc.color}`} />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-slate-900 dark:text-white block">
                      {soc.name}
                    </span>
                    <span className="text-[11px] text-slate-400 truncate max-w-[140px] block">
                      {soc.handle}
                    </span>
                  </div>
                </div>

                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors shrink-0" />
              </a>
            );
          })}
        </div>

        <div className="mt-8 text-center text-xs text-slate-400 dark:text-slate-500">
          Based in Lahore, Pakistan · Open to On-site, Hybrid & Remote Software Engineering roles.
        </div>
      </div>
    </section>
  );
};
