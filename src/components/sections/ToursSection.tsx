
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Tour from "@/components/tours/Tour";
import { Link } from "react-router-dom";

const tours = [
  {
    id: "1",
    title: "Kakum National Park Canopy Walk",
    image: "https://images.unsplash.com/photo-1465695954255-a262b0f57b40?auto=format&fit=crop&q=80",
    duration: "1 day",
    price: "$75",
    location: "Central Region",
    difficulty: "Easy",
    description: "Experience walking through the treetops on suspended bridges in Ghana's famous rainforest.",
    rating: 4.8
  },
  {
    id: "2",
    title: "Mole National Park Safari",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80",
    duration: "3 days",
    price: "$350",
    location: "Northern Region",
    difficulty: "Moderate",
    description: "Encounter elephants, antelopes and many bird species in Ghana's largest wildlife refuge.",
    rating: 4.9
  },
  {
    id: "3",
    title: "Lake Volta Boat Tour",
    image: "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?auto=format&fit=crop&q=80",
    duration: "2 days",
    price: "$180",
    location: "Volta Region",
    difficulty: "Easy",
    description: "Cruise along Africa's largest artificial lake and enjoy breathtaking views of surrounding landscapes.",
    rating: 4.6
  }
];

const ToursSection: React.FC = () => {
  return (
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
            <Button variant="outline" className="border-2 border-earth-600 text-earth-600 hover:bg-earth-600 hover:text-white" asChild>
              <Link to="/tours">
                All Tours <ArrowRight size={16} className="ml-2" />
              </Link>
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
  );
};

export default ToursSection;
