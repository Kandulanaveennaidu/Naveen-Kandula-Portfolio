'use client';

import { Award, Star, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { motion } from 'framer-motion';

const achievementsData = [
  {
    icon: <Trophy className="w-8 h-8 text-primary" />,
    title: "AI Innovator Award 2023",
    description: "Recognized for developing a groundbreaking AI-powered election management system.",
  },
  {
    icon: <Star className="w-8 h-8 text-primary" />,
    title: "Top-Rated Freelancer",
    description: "Maintained a 5-star rating across more than 6 completed freelance projects.",
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "Certified AI Practitioner",
    description: "Completed advanced certification in Machine Learning and Natural Language Processing.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Achievements</h2>
          <p className="text-lg text-muted-foreground mt-2">
            A few of my proudest accomplishments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((achievement, index) => (
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
                    {achievement.icon}
                  </div>
                  <CardTitle className="font-headline text-xl mt-1">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-4">
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
