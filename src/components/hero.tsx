'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import Typewriter from './typewriter';
import { ArrowRight, Download, Github, Linkedin, BotIcon, BrainCircuitIcon, CodeIcon, MessageSquareIcon, ZapIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background animate-subtle-gradient bg-[size:400%_400%] dark:from-background dark:via-secondary/50 dark:to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <motion.div 
            className="flex flex-col items-center md:items-start text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="w-40 h-40 rounded-full mb-6 overflow-hidden border-4 border-primary/50 shadow-lg">
              <Image
                src="/profile.png"
                alt="Kandula Naveen"
                width={160}
                height={160}
                className="object-cover"
                data-ai-hint="professional headshot"
              />
            </div>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Kandula Naveen
            </h1>
            <div className="h-12 md:h-14 mt-2">
              <Typewriter
                texts={['Full Stack Developer', 'AI-Driven Solutions Architect', 'Chatbot Specialist']}
                className="font-headline text-2xl md:text-3xl text-primary font-semibold"
              />
            </div>
            <p className="mt-4 max-w-xl text-muted-foreground text-lg">
              Bridging complex AI technologies with user-friendly interfaces through intelligent automation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <Button size="lg" asChild>
                <a href="#contact">
                  Let's Build Something Intelligent
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://drive.google.com/file/d/1PwZ2CmF0lHIUJrRkc7_L-2VVfMoCoasU/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  Download Resume
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="mt-8 flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/Kandulanaveennaidu" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/kandulanaveen1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </motion.div>
          <div className="hidden md:block">
            <motion.div 
              className="w-full max-w-md mx-auto aspect-square relative"
              style={{ perspective: 1000, transformStyle: "preserve-3d" }}
            >
               <motion.div 
                 className="w-full h-full"
                 initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                 animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                 transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}
                 whileHover={{ rotateY: 15, rotateX: -15, scale: 1.05 }}
               >
                 <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center p-8 relative">
                    <div className="w-full h-full rounded-full bg-primary/20 flex items-center justify-center p-8">
                        <div className="w-full h-full rounded-full bg-primary/30 flex items-center justify-center p-8">
                           <BotIcon className="w-32 h-32 text-primary" />
                        </div>
                    </div>
                 </div>
               </motion.div>
               <motion.div
                  initial={{ opacity: 0, scale: 0, z: -50 }}
                  animate={{ opacity: 1, scale: 1, z: 50 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="w-16 h-16 text-primary/80 absolute top-8 left-8"
                ><CodeIcon className="w-full h-full" /></motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0, z: -50 }}
                  animate={{ opacity: 1, scale: 1, z: 50 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="w-16 h-16 text-primary/80 absolute bottom-8 right-8"
                ><BrainCircuitIcon className="w-full h-full" /></motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0, z: -50 }}
                  animate={{ opacity: 1, scale: 1, z: 50 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="w-16 h-16 text-primary/80 absolute bottom-8 left-8"
                ><MessageSquareIcon className="w-full h-full" /></motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0, z: -50 }}
                  animate={{ opacity: 1, scale: 1, z: 50 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="w-16 h-16 text-primary/80 absolute top-8 right-8"
                ><ZapIcon className="w-full h-full" /></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
