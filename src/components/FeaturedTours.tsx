
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Mountain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TourProps {
  title: string;
  image: string;
  duration: string;
  location: string;
  difficulty: string;
  price: string;
  description: string;
}

const Tour: React.FC<TourProps> = ({ 
  title, 
  image, 
  duration, 
  location, 
  difficulty, 
  price, 
  description 
}) => {
  return (
    <Card className="tour-card overflow-hidden border border-border rounded-lg h-full flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
        />
        <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full font-medium text-sm">
          {price}
        </div>
      </div>
      <CardContent className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">
          {description}
        </p>
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-natural-600" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-natural-600" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mountain size={16} className="text-natural-600" />
            <span className="text-sm">Difficulty: {difficulty}</span>
          </div>
        </div>
        <Button className="w-full bg-natural-600 hover:bg-natural-700 text-white">
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
};

const FeaturedTours = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const tours = [
    {
      title: "Mountain Peak Adventure",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&q=80",
      duration: "2 days",
      location: "Alpine Mountains",
      difficulty: "Moderate",
      price: "$199",
      description: "Experience breathtaking views from mountain peaks with our expert guides leading the way."
    },
    {
      title: "Forest Exploration",
      image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80",
      duration: "Full day",
      location: "Ancient Forest",
      difficulty: "Easy",
      price: "$89",
      description: "Discover the hidden treasures of ancient forests and learn about their rich ecosystem."
    },
    {
      title: "River Valley Trek",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80",
      duration: "3 days",
      location: "Emerald Valley",
      difficulty: "Challenging",
      price: "$299",
      description: "Follow the river through stunning valleys with camping under the stars each night."
    }
  ];

  return (
    <section id="tours" className="py-20 bg-muted" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Tours</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Embark on unforgettable journeys through nature's most impressive landscapes with our expert guides
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <div key={index} className="animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
              <Tour {...tour} />
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center animate-on-scroll">
          <Button variant="outline" className="border-2 border-natural-600 text-natural-600 hover:bg-natural-600 hover:text-white py-6 px-8">
            View All Tours
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
