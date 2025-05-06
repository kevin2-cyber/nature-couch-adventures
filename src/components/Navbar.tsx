
import React, { useState, useEffect } from "react";
import { Menu, X, Search, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";

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
              <span className="text-2xl md:text-3xl font-bold font-playfair text-earth-800">
                Nature<span className="text-earth-500">Walking</span>Couch
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isScrolled ? "text-natural-800" : "text-white"}>Destinations</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      <NavigationMenuLink href="#mountains" className="block p-2 hover:bg-muted rounded">Mountains</NavigationMenuLink>
                      <NavigationMenuLink href="#forests" className="block p-2 hover:bg-muted rounded">Forests</NavigationMenuLink>
                      <NavigationMenuLink href="#rivers" className="block p-2 hover:bg-muted rounded">Rivers</NavigationMenuLink>
                      <NavigationMenuLink href="#coasts" className="block p-2 hover:bg-muted rounded">Coastal Areas</NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isScrolled ? "text-natural-800" : "text-white"}>Tours</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-[400px]">
                      <NavigationMenuLink href="#day-tours" className="block p-2 hover:bg-muted rounded">Day Tours</NavigationMenuLink>
                      <NavigationMenuLink href="#multi-day" className="block p-2 hover:bg-muted rounded">Multi-Day Adventures</NavigationMenuLink>
                      <NavigationMenuLink href="#custom" className="block p-2 hover:bg-muted rounded">Custom Experiences</NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#about" className={`flex items-center p-2 ${isScrolled ? "text-natural-800" : "text-white"} hover:text-earth-500`}>
                    About
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#testimonials" className={`flex items-center p-2 ${isScrolled ? "text-natural-800" : "text-white"} hover:text-earth-500`}>
                    Testimonials
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#contact" className={`flex items-center p-2 ${isScrolled ? "text-natural-800" : "text-white"} hover:text-earth-500`}>
                    Contact
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center ml-4 space-x-3">
              <Button variant="ghost" className={`rounded-full p-2 ${isScrolled ? "text-natural-800" : "text-white"} hover:bg-white/20`}>
                <Search size={20} />
              </Button>
              <Button className="bg-earth-500 hover:bg-earth-600 text-white">
                <Phone size={16} className="mr-2" /> Book Now
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`${isScrolled ? "text-natural-800" : "text-white"} hover:text-earth-500 focus:outline-none`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#tours" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-natural-800 hover:text-earth-500 font-medium py-2"
              >
                Destinations
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-natural-800 hover:text-earth-500 font-medium py-2"
              >
                Tours
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-natural-800 hover:text-earth-500 font-medium py-2"
              >
                About
              </a>
              <a 
                href="#testimonials" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-natural-800 hover:text-earth-500 font-medium py-2"
              >
                Testimonials
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-natural-800 hover:text-earth-500 font-medium py-2"
              >
                Contact
              </a>
              <Button className="bg-earth-500 hover:bg-earth-600 text-white w-full">
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
