import React from 'react';
import { X, Download, Printer, CheckCircle2, FileText } from 'lucide-react';
import { personalInfo, experiencesData, projectsData, skillsData, educationData, certificatesData } from '../data/portfolioData';
import { generateAndDownloadCV } from '../utils/generateCV';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    generateAndDownloadCV();
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white dark:bg-[#0c1322] border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/70">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Laiba Saleem — Curriculum Vitae (ATS Standard)
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Verified Software Engineer & AI/ML Developer Profile
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-100/60 dark:bg-slate-950/60">
          {/* Formatted ATS Clean Document Preview */}
          <div className="max-w-3xl mx-auto bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-lg border border-slate-200 font-sans leading-normal">
              {/* CV Top Header */}
              <div className="border-b border-slate-300 pb-4 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                    {personalInfo.fullName.toUpperCase()}
                  </h1>
                  <p className="text-sm font-semibold text-blue-600 mt-1">
                    {personalInfo.title}
                  </p>
                  <div className="text-xs text-slate-600 mt-2 flex flex-wrap gap-2">
                    <span>{personalInfo.location}</span>
                    <span>•</span>
                    <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:underline">
                      {personalInfo.email}
                    </a>
                    <span>•</span>
                    <span>github.com/laiba09Saleem</span>
                    <span>•</span>
                    <span>linkedin.com/in/laiba-saleem-4b8541248</span>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-300 shadow-xs shrink-0 self-start sm:self-center">
                  <img
                    src="/laiba_saleem.jpeg"
                    alt="Laiba Saleem"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-blue-600 pb-1 mb-2">
                  Professional Summary
                </h2>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Technical Skills */}
              <div className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-blue-600 pb-1 mb-2">
                  Technical Skills
                </h2>
                <div className="space-y-1 text-xs">
                  {skillsData.map((cat) => (
                    <p key={cat.title}>
                      <span className="font-bold text-slate-900">{cat.title}: </span>
                      <span className="text-slate-700">{cat.skills.join(', ')}</span>
                    </p>
                  ))}
                </div>
              </div>

              {/* Professional Experience */}
              <div className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-blue-600 pb-1 mb-3">
                  Professional Experience
                </h2>
                <div className="space-y-4">
                  {experiencesData.map((exp) => (
                    <div key={exp.id}>
                      <div className="flex items-baseline justify-between text-xs">
                        <span className="font-bold text-slate-900">{exp.role}</span>
                        <span className="text-slate-500 font-mono text-[11px]">{exp.period}</span>
                      </div>
                      <div className="flex items-baseline justify-between text-xs mb-1">
                        <span className="font-medium text-blue-700">{exp.company}</span>
                        <span className="text-slate-500 text-[11px]">
                          {exp.isRemote ? `${exp.location} (Remote)` : exp.location}
                        </span>
                      </div>
                      <ul className="list-disc list-inside text-xs text-slate-700 space-y-1">
                        {exp.descriptionPoints.map((pt, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Projects */}
              <div className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-blue-600 pb-1 mb-3">
                  Featured Engineering Projects
                </h2>
                <div className="space-y-3">
                  {projectsData.map((proj) => {
                    const techStr = [
                      ...(proj.techStack.backend || []),
                      ...(proj.techStack.frontend || []),
                      ...(proj.techStack.aiData || [])
                    ].join(' · ');

                    return (
                      <div key={proj.id} className="text-xs">
                        <div className="flex items-baseline justify-between">
                          <span className="font-bold text-slate-900">{proj.name}</span>
                          <span className="text-blue-700 text-[11px]">{proj.categoryTag}</span>
                        </div>
                        <p className="text-[11px] italic text-slate-500 mb-0.5">
                          Tech Stack: {techStr}
                        </p>
                        <p className="text-slate-700 leading-relaxed">
                          {proj.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Education */}
              <div className="mb-6">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-blue-600 pb-1 mb-2">
                  Education
                </h2>
                <div className="flex items-baseline justify-between text-xs">
                  <span className="font-bold text-slate-900">{educationData.degree}</span>
                  <span className="text-slate-500 font-mono text-[11px]">{educationData.graduationDate}</span>
                </div>
                <p className="text-xs text-slate-700">
                  {educationData.institution} · {educationData.location} · <span className="font-medium">GPA: {educationData.gpa}</span>
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Relevant Coursework: {educationData.coursework.join(', ')}
                </p>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-blue-600 pb-1 mb-2">
                  Certifications & Verified Credentials
                </h2>
                <div className="space-y-1.5 text-xs">
                  {certificatesData.map((cert) => (
                    <div key={cert.id} className="flex items-baseline justify-between">
                      <span className="text-slate-800">
                        • <strong className="font-semibold">{cert.title}</strong> — {cert.organization}
                      </span>
                      <span className="text-slate-400 font-mono text-[11px]">{cert.issueDate}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Official ATS-Standard Resume for Technical Recruitment</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Laiba_Saleem_CV.pdf</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
