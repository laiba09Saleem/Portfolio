import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I specialize in full-stack web development, mobile app development with React Native, and AI/ML integration. I can help with building scalable applications, API development, and cloud deployment.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications may take 2-3 months. I provide detailed estimates after understanding your requirements.",
  },
  {
    question: "Do you work with clients remotely?",
    answer: "Yes, I work with clients globally. I use modern collaboration tools and maintain clear communication throughout the project lifecycle.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "My core stack includes React, Next.js, Node.js, Python, and PostgreSQL. I also have experience with AWS, Docker, and various AI/ML frameworks.",
  },
  {
    question: "How do you handle project communication?",
    answer: "I believe in transparent communication. I provide regular updates, use project management tools, and am available for calls during business hours.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Common questions about my services and work process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
