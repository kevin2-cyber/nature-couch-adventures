
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToTours = () => {
    const toursSection = document.getElementById("tours");
    if (toursSection) {
      toursSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <div 
      className="relative h-screen w-full bg-cover bg-center flex items-center" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80')",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Discover the Beauty of Nature with Expert Guides
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Unforgettable hiking experiences through the most breathtaking landscapes with comfort and safety
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={scrollToTours}
              className="bg-natural-600 hover:bg-natural-700 text-white text-lg py-6 px-8"
            >
              Explore Our Tours
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-2 border-white hover:bg-white/20 text-white hover:text-white text-lg py-6 px-8"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <button 
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white hover:text-natural-300 transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </div>
  );
};

export default Hero;
