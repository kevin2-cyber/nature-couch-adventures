
import React from "react";
import DestinationCategory from "@/components/destinations/DestinationCategory";
import { destinations } from "@/data/tourData";

const DestinationsSection: React.FC = () => {
  return (
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
  );
};

export default DestinationsSection;
