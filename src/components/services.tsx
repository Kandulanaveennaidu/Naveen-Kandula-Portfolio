'use client';

import { Bot, Code, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { motion } from 'framer-motion';

const servicesData = [
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI Chatbot Development",
    description: "I build intelligent, conversational AI chatbots that enhance user engagement and automate customer interactions using technologies like Dialogflow, OpenAI API, and Microsoft Bot Framework.",
  },
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: "Full Stack Web Development",
    description: "I create robust, scalable, and user-friendly web applications from front to back, using modern technologies like React, Node.js, and Python to bring your ideas to life.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "AI Integration & Automation",
    description: "I integrate powerful AI and machine learning features into existing applications to improve functionality, provide intelligent insights, and automate complex business processes.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Services I Offer</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Let's build something amazing together.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
             <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <Card className="bg-card/70 backdrop-blur-sm text-center p-6 border-2 border-transparent hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-2 h-full">
                <CardHeader className="p-0 flex flex-col items-center">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline text-xl mt-1">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
