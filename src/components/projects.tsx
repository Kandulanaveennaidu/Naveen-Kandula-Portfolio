'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: "VitelMeet – Video Conferencing Platform",
    description: "A modern, reliable video conferencing solution designed for seamless virtual meetings and collaboration, developed for Vitel Global.",
    image: "https://placehold.co/600x400.png",
    imageHint: "video conference interface",
    techStack: ["React", "WebRTC", "Node.js", "Socket.io"],
    liveDemo: "https://vitelglobal.in/vitel-meet",
  },
  {
    title: "ATTPL Group – Multi-Industry Business Solutions",
    description: "A comprehensive platform for a diversified business group, offering services in construction, finance, consultancy, solar energy, and IT.",
    image: "https://placehold.co/600x400.png",
    imageHint: "corporate building portfolio",
    techStack: ["React", "Node.js", "GraphQL", "MySQL"],
    liveDemo: "http://attplgroup.com/",
  },
  {
    title: "Calendit.ai – AI-Powered Meeting Scheduler",
    description: "An intelligent scheduling tool powered by AI that simplifies booking meetings, similar in functionality to Calendly.",
    image: "https://placehold.co/600x400.png",
    imageHint: "calendar schedule app",
    techStack: ["React", "AI/NLP", "Node.js", "MongoDB"],
    liveDemo: "https://calendit.ai/",
  },
  {
    title: "Vitel Global – OmniChannel Contact Center",
    description: "A seamless omni-channel contact center solution that unifies customer engagement across multiple communication platforms.",
    image: "https://placehold.co/600x400.png",
    imageHint: "customer support dashboard",
    techStack: ["React", "AI Chatbot", "WebSocket", "Redux"],
    liveDemo: "https://vitelglobal.com/omni-channel-experience",
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
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Card className="group overflow-hidden transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur-sm h-full flex flex-col border-2 border-transparent hover:border-primary/50">
                    <CardHeader className="p-0">
                      <div className="aspect-video overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                          data-ai-hint={project.imageHint}
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 flex-grow">
                      <CardTitle className="font-headline text-xl mb-2 group-hover:text-primary transition-colors">{project.title}</CardTitle>
                       <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
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
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
