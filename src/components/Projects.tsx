import { ExternalLink, Github, Layers } from "lucide-react";

const projects = [
  {
    title: "VEMS360",
    role: "Full-Stack Developer",
    description:
      "Event management system with registration, booking, ticketing, and streaming modules. Team lead responsible for development, UI design, and documentation.",
    tech: ["Python", "Django", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    highlights: [
      "Built core modules including event registration, booking, and ticketing",
      "Solved major technical challenges in authentication (Google login) and payment integration",
      "Coordinated task assignments, weekly meetings, and project documentation",
    ],
  },
  {
    title: "Personal Portfolio",
    role: "Frontend Developer",
    description:
      "Responsive personal portfolio with smooth animations, project showcases, and engaging user experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "Boxicons", "ScrollReveal.js", "Typed.js"],
    highlights: [
      "Implemented smooth scrolling and scroll reveal animations",
      "Animated typing effects for engaging user experience",
      "Includes downloadable CV, skill progress bars, and social profiles",
    ],
  },
  {
    title: "Quiz App",
    role: "Full-Stack Developer",
    description:
      "Django-based quiz application with user authentication, quiz creation, scoring, and leaderboard features.",
    tech: ["Python", "Django", "SQLite", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Implemented user login, quiz creation, and score calculation",
      "Built leaderboard and result history features",
      "Designed clean database model relations using Django ORM",
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
          <p className="text-muted-foreground text-center mb-12">Some things I've built</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="project-card flex flex-col h-full group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Layers className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary">{project.role}</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>

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
