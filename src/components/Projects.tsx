import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Image as ImageIcon, ArrowUpRight, Check, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ScreenshotModal } from './ScreenshotModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [screenshotModalProject, setScreenshotModalProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'Full-Stack Development', 'AI/ML', 'Data Analysis'];

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category.includes(selectedCategory as any);
  });

  return (
    <section id="projects" className="py-16 md:py-24 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2 block">
              Featured Work
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Engineering Projects & Applications
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Production-ready web applications, conversational AI systems, and machine learning pipelines.
            </p>
          </div>

          {/* Interactive Filter Segmented Control (Zero-Pill discipline compliant) */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;
            const techList = [
              ...(project.techStack.backend || []),
              ...(project.techStack.frontend || []),
              ...(project.techStack.aiData || [])
            ];

            return (
              <div
                key={project.id}
                className="group relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c1322] overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Project Image Frame */}
                  <div
                    onClick={() => setActiveModalProject(project)}
                    className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient Overlay for Text Legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Category Label */}
                    <div className="absolute bottom-3 left-4 text-xs font-medium text-slate-200 flex items-center gap-2">
                      <span>{project.categoryTag}</span>
                    </div>

                    {/* Quick View Button on Image */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalProject(project);
                      }}
                      className="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-semibold text-white bg-slate-900/80 backdrop-blur-md rounded-md hover:bg-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3
                        onClick={() => setActiveModalProject(project)}
                        className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer"
                      >
                        {project.name}
                      </h3>

                      {isFeatured && (
                        <span className="text-[11px] font-mono font-semibold text-blue-600 dark:text-blue-400 tracking-wider">
                          FEATURED
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Compact Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {techList.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 rounded border border-slate-200/60 dark:border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {techList.length > 6 && (
                        <span className="px-2 py-0.5 text-[11px] font-medium text-slate-400 dark:text-slate-500">
                          +{techList.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2.5 bg-slate-50/50 dark:bg-slate-900/20">
                  <div className="flex items-center gap-2">
                    {/* View Screenshots (NETSOL Chatbot) */}
                    {project.screenshots && project.screenshots.length > 0 && (
                      <button
                        onClick={() => setScreenshotModalProject(project)}
                        className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-white dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
                        title="View project screenshots"
                      >
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>Screenshots</span>
                      </button>
                    )}

                    {/* Details button */}
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <span>Overview</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* GitHub button only when link is provided */}
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-slate-700 rounded-md hover:bg-white dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    ) : (
                      <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 italic px-2">
                        Private Repository
                      </span>
                    )}

                    {/* Live Demo button only when real live URL is provided */}
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500 transition-colors flex items-center gap-1.5 shadow-xs"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onViewScreenshots={(proj) => {
          setActiveModalProject(null);
          setScreenshotModalProject(proj);
        }}
      />

      {/* Screenshots Modal */}
      <ScreenshotModal
        isOpen={Boolean(screenshotModalProject)}
        onClose={() => setScreenshotModalProject(null)}
        screenshots={screenshotModalProject?.screenshots || []}
        projectName={screenshotModalProject?.name || ''}
      />
    </section>
  );
};
