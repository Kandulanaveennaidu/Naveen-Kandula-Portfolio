"use client";

import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import {
  Star,
  User,
  UserCircle,
  UserRound,
  Building2,
  BadgeCheck,
} from "lucide-react";

const testimonialsData = [
  {
    name: "Jane Doe",
    role: "CTO",
    company: "Tech Solutions Inc.",
    icon: "user-round",
    rating: 5,
    testimonial:
      "Naveen delivered an exceptional AI chatbot that has transformed our customer support. His technical skills and professionalism are top-notch. Highly recommended!",
  },
  {
    name: "John Smith",
    role: "Product Manager",
    company: "Creative Minds LLC",
    icon: "user-circle",
    rating: 5,
    testimonial:
      "The election management platform Naveen built for us was a game-changer. It was scalable, secure, and the AI analytics provided invaluable insights. A pleasure to work with.",
  },
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    company: "Innovate Startups",
    icon: "user",
    rating: 5,
    testimonial:
      "I'm extremely impressed with the Calendit.ai platform. Naveen's ability to integrate complex NLP into a user-friendly interface is remarkable. A true professional.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            What My Clients Say
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            I'm proud to have earned the trust of my clients.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonialsData.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card className="bg-card/50 backdrop-blur-sm h-full flex flex-col justify-between p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          {testimonial.icon === "user-round" && (
                            <UserRound className="h-7 w-7 text-primary" />
                          )}
                          {testimonial.icon === "user-circle" && (
                            <UserCircle className="h-7 w-7 text-primary" />
                          )}
                          {testimonial.icon === "user" && (
                            <User className="h-7 w-7 text-primary" />
                          )}
                        </div>
                        <div>
                          <div className="flex items-center">
                            <p className="font-semibold">{testimonial.name}</p>
                            <BadgeCheck className="h-4 w-4 text-blue-500 ml-1" />
                          </div>
                          <p className="text-sm text-muted-foreground flex items-center">
                            <span>{testimonial.role}</span>
                            <span className="mx-1">•</span>
                            <Building2 className="h-3 w-3 inline mr-1" />
                            <span>{testimonial.company}</span>
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground italic">
                        "{testimonial.testimonial}"
                      </p>
                    </CardContent>
                    <div className="flex items-center justify-end mt-4 group">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400 transition-transform duration-300 group-hover:scale-110"
                        />
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
