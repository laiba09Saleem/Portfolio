const skillCategories = [
  {
    title: "AI / ML",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "MobileNetV2", "Computer Vision", "NLP", "Deep Learning", "MLOps Fundamentals", "Model Evaluation"],
  },
  {
    title: "Backend & Systems",
    skills: ["FastAPI", "Django Rest Framework", "Flask", "RESTful API Integration", "Pydantic", "SQLAlchemy"],
  },
  {
    title: "Frontend & UI",
    skills: ["React.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Databases & Cloud",
    skills: ["PostgreSQL", "SQLite", "Supabase (Storage & DB)", "Google Cloud Platform (GCP)"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Docker", "Git", "GitHub", "Postman", "CI/CD pipelines", "Jupyter Notebook", "Google Colab", "VS Code"],
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
