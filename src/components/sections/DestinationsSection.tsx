
import React from "react";
import DestinationCategory from "@/components/destinations/DestinationCategory";

const destinations = [
  {
    title: "Mountain Peaks",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80",
    count: 4,
    link: "/destinations#mountains"
  },
  {
    title: "Forest Trails",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80",
    count: 7,
    link: "/destinations#forests"
  },
  {
    title: "River Valleys",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=crop&q=80",
    count: 5,
    link: "/destinations#rivers"
  },
  {
    title: "Coastal Paths",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&q=80",
    count: 6,
    link: "/destinations#coasts"
  }
];

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
