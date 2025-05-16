
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import randomImages  from "@/background";
//use the exported random images as a background image

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const backgroundImages = randomImages;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.randomImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

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
        className="relative h-screen w-full bg-cover bg-center flex items-center transition-all duration-1000 ease-in-out"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImages.randomImages[currentImageIndex]}')`,
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
              <Link to="/destinations">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white text-lg py-6 px-8 font-medium rounded-md"
                >
                  Explore Destinations
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="bg-transparent border-2 border-white hover:bg-white/20 text-white hover:text-white text-lg py-6 px-8"
                onClick={scrollToTours}
              >
                View Tours
              </Button>
            </div>
          </div>
        </div>
        
        {/* Image indicators */}
        <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2">
          {backgroundImages.randomImages.map((_, index) => (
            <button 
              key={index}
              className={`h-2 rounded-full transition-all ${
                currentImageIndex === index ? "w-8 bg-white" : "w-2 bg-white/50"
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Featured destinations quick access */}
      <div className="bg-gradient-to-r from-primary to-primary-foreground py-6 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-xl font-playfair mb-4 md:mb-0">
              Popular Destinations
            </h2>
            <div className="flex flex-wrap gap-4 md:gap-8">
              <Link to="/destinations#mountains" className="hover:text-primary/80 transition-colors font-medium">Mountain Peaks</Link>
              <Link to="/destinations#forests" className="hover:text-primary/80 transition-colors font-medium">Forest Trails</Link>
              <Link to="/destinations#rivers" className="hover:text-primary/80 transition-colors font-medium">River Valleys</Link>
              <Link to="/destinations#coasts" className="hover:text-primary/80 transition-colors font-medium">Coastal Paths</Link>
              <Link to="/destinations" className="hover:text-primary/80 transition-colors font-medium">
                View All
                <ArrowRight size={16} className="inline-block ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
