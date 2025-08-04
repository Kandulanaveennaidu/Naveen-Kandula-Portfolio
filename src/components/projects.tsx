'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: "Omni-Channel Communication Platform",
    description: "An advanced communication hub with integrated AI chatbot capabilities to streamline user interactions across multiple channels. The system intelligently routes conversations and automates responses.",
    image: "https://placehold.co/600x400.png",
    imageHint: "communication dashboard",
    techStack: ["React", "Node.js", "AI Chatbot", "WebSocket"],
    liveDemo: "#",
    githubRepo: "#"
  },
  {
    title: "AI-Enhanced Video Conferencing",
    description: "A video conferencing solution enhanced with real-time machine learning features like background blur, noise cancellation, and automated transcription services for improved meeting productivity.",
    image: "https://placehold.co/600x400.png",
    imageHint: "video conference",
    techStack: ["WebRTC", "Python", "TensorFlow", "React"],
    liveDemo: "#",
    githubRepo: "#"
  },
  {
    title: "Intelligent Election Management",
    description: "A comprehensive system for managing election processes, featuring predictive analytics for voter turnout, sentiment analysis on social media, and secure digital voting functionalities.",
    image: "https://placehold.co/600x400.png",
    imageHint: "analytics dashboard",
    techStack: ["React", "Python", "Scikit-learn", "GraphQL"],
    liveDemo: "#",
    githubRepo: "#"
  },
  {
    title: "Calendit.ai Scheduling Platform",
    description: "An NLP-powered scheduling platform that allows users to book meetings using natural language. It understands complex requests and integrates with multiple calendar services.",
    image: "https://placehold.co/600x400.png",
    imageHint: "calendar schedule",
    techStack: ["NLP", "React", "Node.js", "MongoDB"],
    liveDemo: "#",
    githubRepo: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-lg text-muted-foreground mt-2">A selection of my work in AI and web development.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <motion.div
                  whileHover={{ scale: 1.03, y: -5, boxShadow: "0 10px 20px hsla(var(--primary), 0.2)" }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="group overflow-hidden transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur-sm h-full flex flex-col">
                    <CardHeader className="p-0">
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={project.imageHint}
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <CardTitle className="font-headline text-xl mb-2">{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                  <DialogTitle className="font-headline text-2xl">{project.title}</DialogTitle>
                  <DialogDescription>{project.description}</DialogDescription>
                </DialogHeader>
                <div className="aspect-video overflow-hidden rounded-md mt-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="default">{tech}</Badge>
                  ))}
                </div>
                <div className="mt-6 flex gap-4">
                  <Button asChild>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  <Button variant="secondary" asChild>
                    <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
