'use client';
import { Briefcase, Building } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const experienceData = [
  {
    role: "Full Stack Developer",
    company: "Vitelglobal Communication",
    location: "Hyderabad, India",
    period: "Oct 2024 - Present",
    description: "Led the transformation of traditional applications into AI-driven solutions, enhancing user engagement and automating key processes. Integrated AI chatbots into an omni-channel communication platform, improving user engagement by over 40% and reducing customer service response times by 50%."
  },
  {
    role: "Full Stack Developer",
    company: "ATTPL Group",
    location: "Ahmedabad, Gujarat, India",
    period: "Dec 2022 - Sep 2024",
    description: "Developed a secure, scalable AI-enhanced election management platform handling over 500,000 voters. Implemented AI-powered data visualization and predictive analytics, improving decision-making by 45% and ensuring 99.8% election integrity."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Work Experience</h2>
          <p className="text-lg text-muted-foreground mt-2">My professional journey and key contributions.</p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-border/50" />
          
          {experienceData.map((exp, index) => (
            <div key={index} className="relative pl-12 mb-12">
              <div className="absolute left-0 top-1.5 flex items-center">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center border-4 border-secondary">
                  <Briefcase className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
              <Card className="bg-card/70 backdrop-blur-sm border-2 border-transparent hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-primary font-semibold">{exp.role}</p>
                      <CardTitle className="font-headline text-xl mt-1 flex items-center gap-2">
                        <Building className="w-5 h-5 text-muted-foreground" />
                        {exp.company}
                      </CardTitle>
                    </div>
                    <Badge variant="outline">{exp.period}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
