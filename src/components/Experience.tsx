import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const responsibilities = [
    "Developed and shipped key features for a live veterinary care application, including Checkout flow, Pet Active Appointments, and Vet Services screens (Angular)",
    "Converted 10+ Angular screens to Flutter UI, improving UX responsiveness",
    "Integrated 2+ backend API endpoints using Django REST Framework under senior guidance",
    "Collaborating in Agile sprints using Git/GitHub, participating in code reviews and stand-ups",
    "Communicating with cross-functional teams for requirements and product improvements",
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-2">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">My work journey</p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2" />

            {/* Experience Card */}
            <div className="relative pl-8 md:pl-0 md:w-1/2 md:ml-auto">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-0 top-6 w-4 h-4 rounded-full bg-primary glow-primary transform md:-translate-x-1/2 md:-ml-2" />

              <div className="project-card">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Briefcase className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-semibold text-foreground">
                      Software Engineering Intern
                    </h3>
                    <p className="text-primary font-medium">MatchVet (SMC Pvt Ltd)</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    08/2025 – 11/2025
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} />
                    Remote
                  </span>
                </div>

                <ul className="space-y-3">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
