
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
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
            <Link to="/" className="flex items-center">
              <span className="text-2xl md:text-3xl font-bold font-playfair text-natural-800">
                Nature<span className="text-primary">Walking</span>Couch
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isScrolled ? "text-natural-800" : "text-white"}>Destinations</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white border border-gray-200 shadow-lg rounded">
                    <div className="grid gap-3 p-4 w-[400px]">
                      <Link to="/destinations#mountains" className="block p-2 hover:bg-muted rounded text-black">Mountains</Link>
                      <Link to="/destinations#forests" className="block p-2 hover:bg-muted rounded text-black">Forests</Link>
                      <Link to="/destinations#rivers" className="block p-2 hover:bg-muted rounded text-black">Rivers</Link>
                      <Link to="/destinations#coasts" className="block p-2 hover:bg-muted rounded text-black">Coastal Areas</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={isScrolled ? "text-natural-800" : "text-white"}>Tours</NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white border border-gray-200 shadow-lg rounded">
                    <div className="grid gap-3 p-4 w-[400px]">
                      <Link to="/tours#day-tours" className="block p-2 hover:bg-muted rounded text-black">Day Tours</Link>
                      <Link to="/tours#multi-day" className="block p-2 hover:bg-muted rounded text-black">Multi-Day Adventures</Link>
                      <Link to="/tours#custom" className="block p-2 hover:bg-muted rounded text-black">Custom Experiences</Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/about" 
                    className={`flex items-center p-2 ${
                      isActive('/about') ? 'text-primary' : isScrolled ? 'text-natural-800' : 'text-white'
                    } hover:text-primary`}
                  >
                    About
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/testimonials" 
                    className={`flex items-center p-2 ${
                      isActive('/testimonials') ? 'text-primary' : isScrolled ? 'text-natural-800' : 'text-white'
                    } hover:text-primary`}
                  >
                    Testimonials
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link 
                    to="/contact" 
                    className={`flex items-center p-2 ${
                      isActive('/contact') ? 'text-primary' : isScrolled ? 'text-natural-800' : 'text-white'
                    } hover:text-primary`}
                  >
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center ml-4 space-x-3">
              <Button variant="ghost" className={`rounded-full p-2 ${isScrolled ? "text-natural-800" : "text-white"} hover:bg-white/20`}>
                <Search size={20} />
              </Button>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/80 text-white">
                  <Phone size={16} className="mr-2" /> Book Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`${isScrolled ? "text-natural-800" : "text-white"} hover:text-primary focus:outline-none`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/destinations" 
                className={`text-natural-800 hover:text-primary font-medium py-2 ${isActive('/destinations') ? 'text-primary' : ''}`}
              >
                Destinations
              </Link>
              <Link 
                to="/tours" 
                className={`text-natural-800 hover:text-primary font-medium py-2 ${isActive('/tours') ? 'text-primary' : ''}`}
              >
                Tours
              </Link>
              <Link 
                to="/about" 
                className={`text-natural-800 hover:text-primary font-medium py-2 ${isActive('/about') ? 'text-primary' : ''}`}
              >
                About
              </Link>
              <Link 
                to="/testimonials" 
                className={`text-natural-800 hover:text-primary font-medium py-2 ${isActive('/testimonials') ? 'text-primary' : ''}`}
              >
                Testimonials
              </Link>
              <Link 
                to="/contact" 
                className={`text-natural-800 hover:text-primary font-medium py-2 ${isActive('/contact') ? 'text-primary' : ''}`}
              >
                Contact
              </Link>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/80 text-white w-full">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
