import { ExternalLink, Github, Brain, Sprout, Stethoscope, Search, ShieldAlert, Briefcase } from "lucide-react";

const projects = [
  {
    title: "OptiCare",
    role: "AI/ML Developer",
    description: "AI-driven healthcare solution for automated wound assessment using MobileNetV2 and NLP-assisted validation.",
    tech: ["FastAPI", "PyTorch", "MobileNetV2", "NLP", "React"],
    icon: Stethoscope,
    github: "https://github.com/laiba09Saleem",
    live: "https://opti-care-frontend.vercel.app/",
    highlights: [
      "Automated wound assessment system",
      "NLP-assisted validation for clinical reports",
    ],
  },
  {
    title: "AI-Based Job Readiness Portal",
    role: "AI/ML & Full-Stack Developer",
    description: "AI system to analyze student job readiness using ML models based on parameters like CGPA, skills, and internships.",
    tech: ["Python", "Flask", "Scikit-learn", "Pandas", "Next.js"],
    icon: Brain,
    github: "https://github.com/laiba09Saleem/Elite_ML.git",
    live: "https://github.com/laiba09Saleem/Elite_ML.git",
    highlights: [
      "End-to-end ML pipeline deployment",
      "Predictive analytics for career readiness",
    ],
  },
  {
    title: "AgriVision-AI",
    role: "AI/ML Developer",
    description: "AI-powered agriculture platform for plant disease detection and smart farming guidance.",
    tech: ["Python", "TensorFlow", "React", "Gemini AI"],
    icon: Sprout,
    github: "https://github.com/laiba09Saleem/AgriVision-AI.git",
    live: "https://github.com/laiba09Saleem/AgriVision-AI.git",
    highlights: [
      "Real-time plant disease detection",
      "Smart farming recommendations",
    ],
  },
  {
    title: "CareerLens-AI",
    role: "AI/ML Developer",
    description: "Advanced AI tool for career path visualization and talent matching using NLP techniques.",
    tech: ["Python", "NLP", "FastAPI", "React"],
    icon: Search,
    github: "https://github.com/laiba09Saleem/Career_lens.git",
    live: "https://github.com/laiba09Saleem/Career_lens.git",
    highlights: [
      "NLP-based talent assessment",
      "Dynamic career path mapping",
    ],
  },
  {
    title: "Fraud Detection System",
    role: "AI/ML Developer",
    description: "Real-time transaction monitoring system using Poisson-based anomaly detection.",
    tech: ["Python", "Flask", "NumPy", "SciPy"],
    icon: ShieldAlert,
    github: "https://github.com/laiba09Saleem",
    highlights: [
      "Poisson distribution anomaly detection",
      "Real-time transaction monitoring",
    ],
  },
  {
    title: "VEMS360",
    role: "Full-Stack Developer",
    description: "Virtual Event Management System with registration, booking, and secure payment integration.",
    tech: ["FastAPI", "Python", "MySQL", "Bootstrap"],
    icon: Briefcase,
    github: "https://github.com/laiba09Saleem",
    highlights: [
      "Scalable RESTful API architecture",
      "Secure payment gateway integration",
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-2">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Some things I've built
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card flex flex-col h-full group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary">{project.role}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded bg-secondary text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-4">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-3 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={14} />
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
