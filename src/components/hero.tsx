import Image from 'next/image';
import { Button } from './ui/button';
import Typewriter from './typewriter';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background animate-subtle-gradient bg-[size:400%_400%]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 animate-enter" style={{ animationDelay: '200ms', animationFillMode: 'backwards' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-40 h-40 rounded-full mb-6 overflow-hidden border-4 border-primary/50 shadow-lg">
              <Image
                src="https://placehold.co/300x300.png"
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
                <a href="/resume.pdf" download>
                  Download Resume
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="mt-8 flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-full max-w-md mx-auto aspect-square rounded-full bg-primary/10 flex items-center justify-center p-8 relative">
               <div className="w-full h-full rounded-full bg-primary/20 flex items-center justify-center p-8 animate-pulse">
                   <div className="w-full h-full rounded-full bg-primary/30 flex items-center justify-center p-8">
                      <BotIcon className="w-32 h-32 text-primary" />
                   </div>
               </div>
               <CodeIcon className="w-16 h-16 text-primary/80 absolute top-8 left-8 animate-pulse delay-200" />
               <BrainCircuitIcon className="w-16 h-16 text-primary/80 absolute bottom-8 right-8 animate-pulse delay-400" />
               <MessageSquareIcon className="w-16 h-16 text-primary/80 absolute bottom-8 left-8 animate-pulse delay-600" />
               <ZapIcon className="w-16 h-16 text-primary/80 absolute top-8 right-8 animate-pulse delay-800" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BotIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}


function BrainCircuitIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 0 0 9 22a4 4 0 0 0 5-3.469 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 0 0 12 5Z" />
      <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 0 1 15 22a4 4 0 0 1-5-3.469 4 4 0 0 1-.556-6.588 4 4 0 0 1 2.526-5.77A3 3 0 0 1 12 5Z" />
      <path d="M12 12v.01" />
      <path d="M15 13a3 3 0 1 0-3-3" />
      <path d="M9 13a3 3 0 1 1 3-3" />
    </svg>
  )
}


function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function MessageSquareIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}
