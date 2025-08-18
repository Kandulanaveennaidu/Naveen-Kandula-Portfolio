import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import AnimatedCounter from './animated-counter';
import { BarChart, Bot, Briefcase, Smile } from 'lucide-react';

const professionalSummary = "Innovative Full Stack Developer with 3+ years of experience transforming traditional applications into intelligent AI-driven solutions. Specialized in bridging complex AI technologies with user-friendly interfaces through chatbot development, conversational AI, and smart automation systems.";

const keyMetrics = [
  { value: 40, label: "User Engagement", suffix: "%+", icon: <BarChart className="w-8 h-8 text-primary" /> },
  { value: 50, label: "Response Time Reduction", suffix: "%", icon: <Bot className="w-8 h-8 text-primary" /> },
  { value: 6, label: "Freelance Projects", suffix: "+", icon: <Briefcase className="w-8 h-8 text-primary" /> },
  { value: 100, label: "Client Satisfaction", suffix: "%", icon: <Smile className="w-8 h-8 text-primary" /> },
];

export default function Summary() {
  return (
    <section id="summary" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
            Professional Summary
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {professionalSummary}
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <Card key={index} className="bg-card/70 backdrop-blur-sm text-center p-6 border-2 border-transparent hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="p-0 flex flex-col items-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    {metric.icon}
                  </div>
                  <CardTitle className="text-4xl md:text-5xl font-bold text-primary">
                    <AnimatedCounter value={metric.value} />{metric.suffix}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
