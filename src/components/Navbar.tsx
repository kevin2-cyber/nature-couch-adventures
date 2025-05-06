
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="text-xl md:text-2xl font-bold font-playfair text-natural-800">
                Nature<span className="text-earth-500">Walking</span>Couch
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#tours" className="text-natural-800 hover:text-natural-600 font-medium">
              Tours
            </a>
            <a href="#about" className="text-natural-800 hover:text-natural-600 font-medium">
              About
            </a>
            <a href="#testimonials" className="text-natural-800 hover:text-natural-600 font-medium">
              Testimonials
            </a>
            <a href="#contact" className="text-natural-800 hover:text-natural-600 font-medium">
              Contact
            </a>
            <Button className="bg-natural-600 hover:bg-natural-700 text-white">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-natural-800 hover:text-natural-600 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#tours" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-natural-800 hover:text-natural-600 font-medium"
              >
                Tours
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-natural-800 hover:text-natural-600 font-medium"
              >
                About
              </a>
              <a 
                href="#testimonials" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-natural-800 hover:text-natural-600 font-medium"
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-natural-800 hover:text-natural-600 font-medium"
              >
                Contact
              </a>
              <Button className="bg-natural-600 hover:bg-natural-700 text-white w-full">
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
