
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Tour from "@/components/tours/Tour";
import { tours } from "@/data/tourData";
import { Link } from "react-router-dom";

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
