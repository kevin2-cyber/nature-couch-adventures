
import React, { useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, title, image }) => {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="p-8">
        <div className="flex flex-col items-center text-center">
          {image && (
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-4 border-natural-200">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <svg
            className="h-8 w-8 text-natural-400 mb-4"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-lg mb-6">{quote}</p>
          <div className="mt-auto">
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const testimonials = [
    {
      quote: "Our guide was extremely knowledgeable about the local flora and fauna. The Mountain Peak Adventure was the highlight of our vacation!",
      name: "Sarah Johnson",
      title: "Adventure Enthusiast"
    },
    {
      quote: "I never thought I could complete such a challenging hike, but our guide's encouragement and expertise made it possible. Unforgettable experience!",
      name: "Michael Chen",
      title: "First-time Hiker"
    },
    {
      quote: "As a photographer, I appreciated how our guide knew exactly when and where to stop for the best shots. The Forest Exploration tour was perfect!",
      name: "Emily Williams",
      title: "Professional Photographer"
    },
    {
      quote: "The River Valley Trek was well organized with comfortable camping arrangements. Our guide's stories around the campfire made the evenings special.",
      name: "David Rodriguez",
      title: "Nature Lover"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-earth-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from those who have experienced our guided tours and created lasting memories
          </p>
        </div>

        <div className="animate-on-scroll">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Testimonial {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative mr-2 translate-x-0 translate-y-0" />
              <CarouselNext className="relative translate-x-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
