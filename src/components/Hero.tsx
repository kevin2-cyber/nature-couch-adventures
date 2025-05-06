
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToTours = () => {
    const toursSection = document.getElementById("tours");
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Main hero slider/banner */}
      <div 
        className="relative h-screen w-full bg-cover bg-center flex items-center"
        style={{ 
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&q=80')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Experience Ghana's Natural Beauty
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl">
              Discover breathtaking landscapes and unforgettable adventures with expert local guides
            </p>
            <div className="flex flex-wrap gap-5">
              <Button 
                onClick={scrollToTours}
                className="bg-earth-600 hover:bg-earth-700 text-white text-lg py-6 px-8 font-medium rounded-md"
              >
                Explore Destinations
              </Button>
              <Button 
                variant="outline" 
                className="bg-transparent border-2 border-white hover:bg-white/20 text-white hover:text-white text-lg py-6 px-8"
              >
                Plan Your Trip
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured destinations quick access */}
      <div className="bg-gradient-to-r from-earth-800 to-natural-800 py-6 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-xl font-playfair mb-4 md:mb-0">
              Popular Destinations
            </h2>
            <div className="flex flex-wrap gap-4 md:gap-8">
              <a href="#" className="hover:text-earth-300 transition-colors font-medium">Mountain Peaks</a>
              <a href="#" className="hover:text-earth-300 transition-colors font-medium">Forest Trails</a>
              <a href="#" className="hover:text-earth-300 transition-colors font-medium">River Valleys</a>
              <a href="#" className="hover:text-earth-300 transition-colors font-medium">Coastal Paths</a>
              <a href="#" className="hover:text-earth-300 transition-colors font-medium">
                View All
                <ArrowRight size={16} className="inline-block ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
