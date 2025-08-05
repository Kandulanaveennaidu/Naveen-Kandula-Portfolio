'use client';

import Image from 'next/image';
import { Card, CardContent } from './ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    name: 'Jane Doe',
    company: 'Tech Solutions Inc.',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'woman portrait',
    rating: 5,
    testimonial: 'Naveen delivered an exceptional AI chatbot that has transformed our customer support. His technical skills and professionalism are top-notch. Highly recommended!',
  },
  {
    name: 'John Smith',
    company: 'Creative Minds LLC',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'man portrait',
    rating: 5,
    testimonial: 'The election management platform Naveen built for us was a game-changer. It was scalable, secure, and the AI analytics provided invaluable insights. A pleasure to work with.',
  },
  {
    name: 'Alex Johnson',
    company: 'Innovate Startups',
    avatar: 'https://placehold.co/100x100.png',
    avatarHint: 'person portrait',
    rating: 5,
    testimonial: "I'm extremely impressed with the Calendit.ai platform. Naveen's ability to integrate complex NLP into a user-friendly interface is remarkable. A true professional.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">What My Clients Say</h2>
          <p className="text-lg text-muted-foreground mt-2">
            I'm proud to have earned the trust of my clients.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card className="bg-card/50 backdrop-blur-sm h-full flex flex-col justify-between p-6">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-4">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="rounded-full mr-4"
                          data-ai-hint={testimonial.avatarHint}
                        />
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground italic">"{testimonial.testimonial}"</p>
                    </CardContent>
                    <div className="flex items-center justify-end mt-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
