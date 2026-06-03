import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "AI/ML Trainee",
    company: "(NAVTTC Program – NETSOL NIAI)",
    period: "02/2026 – Present",
    location: "Lahore",
    responsibilities: [
      "Building end-to-end machine learning pipelines using Scikit-learn, PyTorch, TensorFlow, and Pandas for data preprocessing, feature engineering, model training, evaluation, and deployment.",
      "Developed classification and regression models, including a MobileNetV2-based Wound Assessment System with NLP-assisted validation.",
      "Applied MLOps practices using Docker and FastAPI to deliver scalable, real-world AI solutions in healthcare automation and predictive analytics.",
      "Focusing on creating AI-driven solutions for real-world clinical and business problems through industry-level training.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company: "MatchVet (SMC Pvt Ltd)",
    period: "08/2025 – 12/2025",
    location: "Remote",
    responsibilities: [
      "Developed backend business logic using Django and Django REST Framework for production-level veterinary care platform.",
      "Integrated frontend and backend services to ensure smooth data flow and performance.",
      "Managed version control using Git and GitHub while collaborating in Agile/Scrum development cycles.",
      "Contributed to both frontend and backend development to deliver high-quality scalable solutions.",
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
