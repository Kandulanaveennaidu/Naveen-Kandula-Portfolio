'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Progress } from './ui/progress';
import { BrainCircuit, Code, Database } from 'lucide-react';
import CodeBlock from './code-block';
import { Button } from './ui/button';

const skillsData = {
  "AI & Machine Learning": [
    { name: "Chatbot Development", level: 95 },
    { name: "Natural Language Processing (NLP)", level: 90 },
    { name: "Conversational AI", level: 85 },
    { name: "OpenAI API", level: 88 },
    { name: "Dialogflow", level: 82 },
    { name: "Microsoft Bot Framework", level: 78 },
  ],
  "Frontend": [
    { name: "React.js", level: 95 },
    { name: "TypeScript", level: 92 },
    { name: "Redux", level: 88 },
    { name: "JavaScript (ES6+)", level: 96 },
    { name: "HTML5 & CSS3", level: 94 },
    { name: "Tailwind CSS", level: 90 },
  ],
  "Backend": [
    { name: "Node.js", level: 94 },
    { name: "Express.js", level: 92 },
    { name: "RESTful APIs", level: 95 },
    { name: "GraphQL", level: 80 },
    { name: "Python", level: 75 },
  ],
  "Database & Tools": [
    { name: "MySQL", level: 90 },
    { name: "MongoDB", level: 85 },
    { name: "AWS S3", level: 82 },
    { name: "Docker", level: 78 },
    { name: "Git & GitHub", level: 95 },
  ],
};

const categoryIcons: { [key: string]: React.ReactNode } = {
  "AI & Machine Learning": <BrainCircuit className="h-5 w-5 mr-2" />,
  "Frontend": <Code className="h-5 w-5 mr-2" />,
  "Backend": <Code className="h-5 w-5 mr-2" />,
  "Database & Tools": <Database className="h-5 w-5 mr-2" />,
};

type Category = keyof typeof skillsData;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("AI & Machine Learning");

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Technical Skills</h2>
          <p className="text-lg text-muted-foreground mt-2">A snapshot of my technical expertise.</p>
        </div>
        <div className="flex justify-center flex-wrap gap-2 mb-8">
          {Object.keys(skillsData).map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "secondary"}
              onClick={() => setActiveCategory(category as Category)}
              className="flex items-center"
            >
              {categoryIcons[category]}
              {category}
            </Button>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Card className="bg-card/50 backdrop-blur-sm p-6 md:p-8">
            <CardContent className="p-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
                >
                  {skillsData[activeCategory].map((skill, index) => (
                    <div key={index} className="space-y-2 group">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">{skill.name}</h3>
                        <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 group-hover:h-3 transition-all duration-300" />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
          <CodeBlock />
        </div>
      </div>
    </section>
  );
}
