import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import AnimatedCounter from './animated-counter';

const professionalSummary = "Innovative Full Stack Developer with 2.7+ years of experience transforming traditional applications into intelligent AI-driven solutions. Specialized in bridging complex AI technologies with user-friendly interfaces through chatbot development, conversational AI, and smart automation systems.";

const keyMetrics = [
  { value: 40, label: "Improvement in user engagement", suffix: "%+" },
  { value: 50, label: "Reduction in customer response time", suffix: "%" },
  { value: 60, label: "Automation of routine interactions", suffix: "%" },
  { value: 500, label: "Users served", suffix: "K+" },
];

export default function Summary() {
  return (
    <section id="summary" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
              Professional Summary
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {professionalSummary}
            </p>
          </div>
          <div className="md:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-primary">Key Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {keyMetrics.map((metric, index) => (
                     <div key={index} className="flex items-center gap-4">
                      <div className="font-bold text-4xl text-primary w-24 text-right">
                        <AnimatedCounter value={metric.value} />{metric.suffix}
                      </div>
                      <p className="text-sm text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
