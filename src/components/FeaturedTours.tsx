
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Mountain, ArrowRight } from "lucide-react";
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
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
        />
        <div className="absolute top-4 right-4 bg-earth-500 text-white px-3 py-1 rounded-full font-medium text-sm">
          {price}
        </div>
      </div>
      <CardContent className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 font-playfair">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">
          {description}
        </p>
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-earth-600" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-earth-600" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mountain size={16} className="text-earth-600" />
            <span className="text-sm">Difficulty: {difficulty}</span>
          </div>
        </div>
        <Button className="w-full bg-earth-600 hover:bg-earth-700 text-white">
          Book This Tour
        </Button>
      </CardContent>
    </Card>
  );
};

const DestinationCategory = ({ title, image, count, link }: { title: string, image: string, count: number, link: string }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <img 
        src={image} 
        alt={title}
        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h3 className="text-2xl font-bold text-white font-playfair">{title}</h3>
        <p className="text-white/80 mb-3">{count} destinations</p>
        <a href={link} className="inline-flex items-center text-white hover:text-earth-300 transition-colors">
          <span className="mr-1 font-medium">Explore</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
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
      title: "Kakum Canopy Walk",
      image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80",
      duration: "Full day",
      location: "Kakum National Park, Central Region",
      difficulty: "Easy",
      price: "$65",
      description: "Experience walking through the treetops on suspended bridges in Ghana's famous rainforest."
    },
    {
      title: "Cape Coast Cultural Tour",
      image: "https://images.unsplash.com/photo-1614555383820-941c244cf6a3?auto=format&fit=crop&q=80",
      duration: "Full day",
      location: "Cape Coast, Central Region",
      difficulty: "Easy",
      price: "$70",
      description: "Explore the historic Cape Coast Castle and learn about Ghana's complex colonial history."
    },
    {
      title: "Mole Safari Adventure",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Mole_motel.jpg",
      duration: "2 days",
      location: "Mole National Park, Northern Region",
      difficulty: "Moderate",
      price: "$199",
      description: "Encounter elephants, antelopes and many bird species in Ghana's largest wildlife refuge."
    }
  ];

  const destinations = [
    {
      title: "Mountain Ranges",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80",
      count: 4,
      link: "/destinations#mountains"
    },
    {
      title: "Forest Trails",
      image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80",
      count: 6,
      link: "/destinations#forests"
    },
    {
      title: "River Adventures",
      image: "https://images.unsplash.com/photo-1528732262645-b6ff4b9c9310?auto=format&fit=crop&q=80",
      count: 5,
      link: "/destinations#rivers"
    },
    {
      title: "Coastal Paths",
      image: "https://images.unsplash.com/photo-1525968902-070804c406e0?auto=format&fit=crop&q=80",
      count: 6,
      link: "/destinations#coasts"
    }
  ];

  return (
    <div ref={sectionRef}>
      {/* Destination Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Explore Ghana's Natural Wonders</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the beauty of Ghana's diverse landscapes and rich cultural heritage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <div key={index} className="animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                <DestinationCategory {...destination} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section id="tours" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">Our Featured Tours</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Embark on unforgettable journeys through Ghana with our expert guides
              </p>
            </div>
            <div className="mt-6 md:mt-0 animate-on-scroll">
              <Button variant="outline" className="border-2 border-earth-600 text-earth-600 hover:bg-earth-600 hover:text-white">
                All Tours <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour, index) => (
              <div key={index} className="animate-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>
                <Tour {...tour} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedTours;
