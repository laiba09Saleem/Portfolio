import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Download } from "lucide-react";

const roles = ["Software Engineer", "Python Developer", "Backend Developer", "Django Expert"];

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float delay-500" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <p className="text-primary font-medium mb-4 tracking-wide">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-4">
              Laiba <span className="text-gradient">Saleem</span>
            </h1>
            <div className="h-12 md:h-16 flex items-center justify-center">
              <span className="text-2xl md:text-4xl font-heading text-muted-foreground">
                {displayText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </div>
          </div>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mt-8 mb-10 animate-fade-up delay-200">
            Python developer focused on Django and REST APIs. Passionate about backend development
            and building scalable web applications.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-up delay-300">
            <a
              href="mailto:laibasaleem068@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={18} />
              <span className="text-sm">laibasaleem068@gmail.com</span>
            </a>
            <a
              href="tel:+923024581506"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={18} />
              <span className="text-sm">+92 302 4581506</span>
            </a>
            <span className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} />
              <span className="text-sm">Lahore, Pakistan</span>
            </span>
          </div>

          <div className="flex justify-center gap-4 animate-fade-up delay-400">
            <a
              href="https://github.com/laiba09Saleem"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-primary"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/laiba-s"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 glow-primary"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Download size={18} />
              Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground flex justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
