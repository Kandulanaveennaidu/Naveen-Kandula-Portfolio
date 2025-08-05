'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "The Future of Web Development is AI-Powered",
    category: "AI Integration",
    image: "https://placehold.co/600x400.png",
    imageHint: "abstract AI background",
    excerpt: "Discover how artificial intelligence is revolutionizing the web development landscape, from automated coding to hyper-personalized user experiences.",
    date: "August 5, 2024",
  },
  {
    title: "Building Your First AI Chatbot: A Step-by-Step Guide",
    category: "Chatbots",
    image: "https://placehold.co/600x400.png",
    imageHint: "chatbot conversation",
    excerpt: "A comprehensive walkthrough for developers looking to build their first conversational AI, covering everything from design to deployment.",
    date: "July 28, 2024",
  },
  {
    title: "Why React Remains a Top Choice for Modern UIs",
    category: "Frontend",
    image: "https://placehold.co/600x400.png",
    imageHint: "react logo code",
    excerpt: "An in-depth look at the React ecosystem, its powerful features, and why it continues to be the go-to library for building dynamic user interfaces.",
    date: "July 15, 2024",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">From the Blog</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Sharing my thoughts on AI, development, and technology.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group overflow-hidden transition-all duration-300 cursor-pointer bg-card/50 backdrop-blur-sm h-full flex flex-col border-2 border-transparent hover:border-primary/50">
                <CardHeader className="p-0">
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      data-ai-hint={post.imageHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <Badge variant="secondary" className="w-fit mb-2">{post.category}</Badge>
                  <CardTitle className="font-headline text-xl mb-2 group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                    <Button variant="link" className="p-0 h-auto text-primary">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
