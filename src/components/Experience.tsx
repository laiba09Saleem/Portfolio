import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "AI/ML Trainee",
    company: "(NAVTTC Program – NETSOL NIAI)",
    period: "02/2026 – 05/2026",
    location: "Lahore",
    responsibilities: [
      "Completed structured AI/ML training program (NAVTTC × NETSOL NIAI) with hands-on labs and guided assignments.",
      "Built ML pipelines including data preprocessing, feature engineering, model training, and evaluation using Scikit-learn.",
      "Developed mini prediction models on structured datasets and practiced basic classification/regression tasks.",
      "Gained foundational understanding of deep learning (TensorFlow) and introductory MLOps concepts.",
    ],
  },
  {
    title: "AI/ML R&D Intern",
    company: "Rising Tech Solutions",
    period: "01/2026 – 02/2026",
    location: "Lahore",
    responsibilities: [
      "Contributed to full-stack research and development for company projects focused on scalable and intelligent solutions.",
      "Conducted research on AI/ML integration in software systems and business workflows.",
      "Explored modern frameworks, integration patterns, and development workflows to improve system design.",
      "Assisted in prototyping complete web applications from frontend to backend.",
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "MatchVet (SMC Pvt Ltd)",
    period: "07/2025 – 12/2025",
    location: "Remote",
    responsibilities: [
      "Contributing to both frontend and backend development of a production-level veterinary care platform.",
      "Developed and enhanced interactive UI screens using HTML, CSS, JavaScript, and Angular.",
      "Implemented backend logic for appointment scheduling and service management using Django and DRF.",
      "Integrated frontend components with backend APIs to ensure smooth data flow and performance.",
      "Collaborated with cross-functional teams in Agile/Scrum sprints and used Git/GitHub for version control.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-2">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">My work journey</p>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="project-card">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
