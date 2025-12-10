const skillCategories = [
  {
    title: "Languages & Backend",
    skills: ["Python", "Django", "Django REST Framework", "SQLite", "MySQL"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS"],
  },
  {
    title: "Version Control & Tools",
    skills: ["Git", "GitHub", "Jira", "Slack", "Agile Workflow"],
  },
  {
    title: "Additional Exposure",
    skills: ["Angular (Basic)", "Flutter (Basic)"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-2">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">Technologies I work with</p>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="project-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-heading font-semibold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
