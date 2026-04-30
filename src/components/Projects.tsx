import { Layers, Brain, Sprout, Stethoscope, ShieldAlert, Briefcase, Book } from "lucide-react";

const projects = [
  {
    title: "JobReadiness Portal",
    role: "AI/ML & Full-Stack Developer",
    description:
      "AI-based system to analyze student job readiness using ML models based on parameters like CGPA, skills, and internships.",
    tech: ["Python", "Flask", "Next.js", "Scikit-learn", "Pandas"],
    icon: Brain,
    highlights: [
      "Built ML pipelines from preprocessing to model deployment",
      "Exposed prediction API via Flask and connected Next.js frontend",
      "Handled data imbalance and imputed missing values for stability",
    ],
  },
  {
    title: "AgriVision AI",
    role: "AI/ML Developer",
    description:
      "AI-powered agriculture platform for plant disease detection and smart farming guidance using Google Gemini AI.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Gemini AI", "Lucide"],
    icon: Sprout,
    highlights: [
      "Integrated Google Gemini models for intelligent plant diagnosis",
      "Designed responsive UI for farmers and plant lovers",
      "Implemented real-time image analysis and feedback loop",
    ],
  },
  {
    title: "Virtual Mini Hospital",
    role: "Full-Stack Developer",
    description:
      "Modern AI-powered healthcare platform with AI symptoms checker, virtual queue system, and medical chatbot.",
    tech: ["React", "TypeScript", "Supabase", "Gemini AI", "Tailwind CSS"],
    icon: Stethoscope,
    highlights: [
      "Built AI Symptom Checker and Medical Chatbot using Gemini",
      "Implemented Virtual Queue System with real-time status updates",
      "Developed backend using Supabase Edge Functions",
    ],
  },
  {
    title: "Fraud Detection System",
    role: "AI/ML Developer",
    description:
      "Real-time transaction monitoring system using Poisson-based anomaly detection to identify fraudulent spikes.",
    tech: ["Python", "Flask", "NumPy", "SciPy", "Chart.js"],
    icon: ShieldAlert,
    highlights: [
      "Implemented Poisson distribution logic for anomaly detection",
      "Created interactive dashboard with real-time data visualization",
      "Developed risk scoring algorithm based on transaction behavior",
    ],
  },
  {
    title: "VEMS360",
    role: "Full-Stack Developer (FYP)",
    description:
      "Virtual Event Management System with registration, booking, ticketing, and secure payment integration.",
    tech: ["FastAPI", "Python", "MySQL", "Bootstrap", "OAuth"],
    icon: Briefcase,
    highlights: [
      "Designed scalable database schema and RESTful APIs",
      "Integrated Google Auth and secure payment gateways",
      "Managed role-based access control for users and admins",
    ],
  },
  {
    title: "Personal Library",
    role: "Python Developer",
    description:
      "Streamlit-based library manager for tracking book collections with search, add, and delete functionalities.",
    tech: ["Python", "Streamlit", "JSON Storage"],
    icon: Book,
    highlights: [
      "Built interactive UI for managing local book database",
      "Implemented file-based JSON storage for data persistence",
      "Integrated search and filter logic for efficient browsing",
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

                  <ul className="space-y-2">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
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
