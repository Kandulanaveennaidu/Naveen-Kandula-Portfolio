'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { BrainCircuit, Code, Database, Server } from 'lucide-react';
import { Button } from './ui/button';
import CodeBlock from './code-block';

const skillsData = {
  "AI & ML": [ "Chatbot Development", "NLP", "Conversational AI", "OpenAI API", "Dialogflow", "MS Bot Framework" ],
  "Frontend": [ "React.js", "TypeScript", "Redux", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS" ],
  "Backend": [ "Node.js", "Express.js", "RESTful APIs", "GraphQL", "Python" ],
  "Database & Tools": [ "MySQL", "MongoDB", "AWS S3", "Docker", "Git & GitHub" ],
};

const categoryIcons: { [key: string]: React.ReactNode } = {
  "AI & ML": <BrainCircuit className="h-5 w-5 mr-2" />,
  "Frontend": <Code className="h-5 w-5 mr-2" />,
  "Backend": <Server className="h-5 w-5 mr-2" />,
  "Database & Tools": <Database className="h-5 w-5 mr-2" />,
};

type Category = keyof typeof skillsData;

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>("AI & ML");

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
              variant={activeCategory === category ? "default" : "outline"}
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
                  className="flex flex-wrap gap-3"
                >
                  {skillsData[activeCategory].map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Badge variant="secondary" className="text-base px-4 py-2 hover:bg-primary/20 hover:text-primary transition-colors duration-300 cursor-default">{skill}</Badge>
                    </motion.div>
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
