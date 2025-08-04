import { Briefcase } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';

const experienceData = [
  {
    role: "Full Stack Developer",
    company: "Vitel Global Communication LLC",
    period: "Feb 2022 - Present",
    description: "Led the transformation of traditional applications into AI-driven solutions, enhancing user engagement and automating key processes.",
    achievements: [
      "Integrated AI chatbots into an omni-channel communication platform, improving user engagement by over 40%.",
      "Reduced customer service response times by 50% through the development of a conversational AI system.",
      "Engineered an AI-enhanced video conferencing tool with real-time ML processing capabilities.",
      "Achieved 60% automation of routine interactions by designing and implementing smart automation systems.",
    ]
  },
  {
    role: "Full Stack Developer",
    company: "ATTPL Group, Ahmedabad, Gujarat, India",
    period: "Dec 2022 - Sep 2024",
    description: "Developed and maintained web applications, focusing on creating robust backend services and interactive frontend experiences. Specialized in AI-enhanced election management systems.",
    achievements: [
      "Developed secure, scalable AI-enhanced election management platform with intelligent voter verification and fraud detection, handling 500,000+ voters.",
      "Implemented AI-powered data visualization with Chart.js, improving stakeholder decision-making by 45%.",
      "Integrated ML algorithms for anomaly detection and voter pattern analysis, ensuring 99.8% election integrity.",
      "Contributed to the development of a scalable e-commerce platform.",
      "Implemented new features for a client's CRM system, improving data management.",
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Work Experience</h2>
          <p className="text-lg text-muted-foreground mt-2">My professional journey and key contributions.</p>
        </div>
        
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
          
          {experienceData.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1.5 w-8 h-8 rounded-full bg-primary flex items-center justify-center border-4 border-secondary/50">
                <Briefcase className="w-4 h-4 text-primary-foreground" />
              </div>
              <div className={`pl-12 ${index % 2 === 0 ? 'md:pl-0 md:pr-12 md:text-right md:ml-auto' : 'md:pl-12'} md:w-1/2 ${index % 2 === 0 ? 'md:mr-[calc(50%+2rem)]' : 'md:ml-[calc(50%+2rem)]'}`}>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <h3 className="font-headline text-xl font-bold mt-1">{exp.role}</h3>
                  <p className="text-primary font-semibold">{exp.company}</p>
                  <Accordion type="single" collapsible className="mt-4 bg-card/50 backdrop-blur-sm rounded-lg border border-border px-4 text-left">
                    <AccordionItem value={`item-${index}`} className="border-b-0">
                      <AccordionTrigger className="hover:no-underline text-sm py-3">View Details</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground mb-4 text-sm">{exp.description}</p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {exp.achievements.map((ach, i) => (
                            <li key={i} className="flex">
                              <span className="text-primary mr-2">✓</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
