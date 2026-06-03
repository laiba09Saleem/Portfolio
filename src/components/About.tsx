import { GraduationCap, Calendar, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-2">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">Get to know me better</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Profile Card */}
            <div className="project-card">
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary">Profile</h3>
              <p className="text-muted-foreground leading-relaxed">
                AI/ML-focused software engineer with hands-on experience in building end-to-end machine learning pipelines and scalable backend systems. Skilled in Python, PyTorch, FastAPI, and TensorFlow, with specialized expertise in computer vision (MobileNetV2) and NLP validation, as demonstrated in the development of OptiCare—an AI-driven healthcare solution for automated wound assessment. Experienced in data preprocessing, model evaluation, and deploying AI workflows using Docker and MLOps fundamentals.
              </p>
            </div>

            {/* Education Card */}
            <div className="project-card">
              <h3 className="text-xl font-heading font-semibold mb-4 text-primary flex items-center gap-2">
                <GraduationCap size={24} />
                Education
              </h3>
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">BS in Computer Science</h4>
                <p className="text-muted-foreground">Panjab University</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    12/2021 – 09/2025
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    Lahore, Pakistan
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Strong foundation in Software Engineering, Web Development, Databases, and Programming Fundamentals. Currently focused on deep learning, model deployment, and MLOps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
