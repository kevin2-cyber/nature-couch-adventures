
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Tours = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Nature Tours</h1>
          
          <section id="day-tours" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Day Tours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="tour-card rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80" 
                  alt="Day tour"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Kakum Canopy Walk</h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">$65</span>
                  </div>
                  <p className="text-gray-700 mb-3">Experience the thrill of walking above the rainforest canopy on suspended bridges.</p>
                  <div className="flex items-center text-sm text-gray-500 mb-5">
                    <span className="mr-4">Duration: 8 hours</span>
                    <span>Difficulty: Easy</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Book Now</Button>
                </div>
              </div>
              
              <div className="tour-card rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1548429930-a44f33c5f919?auto=format&fit=crop&q=80" 
                  alt="Day tour"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Wli Waterfall Hike</h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">$75</span>
                  </div>
                  <p className="text-gray-700 mb-3">Trek through the Agumatsa Wildlife Sanctuary to Ghana's highest waterfall.</p>
                  <div className="flex items-center text-sm text-gray-500 mb-5">
                    <span className="mr-4">Duration: 10 hours</span>
                    <span>Difficulty: Moderate</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Book Now</Button>
                </div>
              </div>
            </div>
          </section>
          
          <section id="multi-day" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Multi-Day Adventures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="tour-card rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?auto=format&fit=crop&q=80" 
                  alt="Multi-day tour"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Forest & Wildlife Safari</h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">$299</span>
                  </div>
                  <p className="text-gray-700 mb-3">A 3-day expedition through Ghana's most diverse wildlife reserves.</p>
                  <div className="flex items-center text-sm text-gray-500 mb-5">
                    <span className="mr-4">Duration: 3 days</span>
                    <span>Difficulty: Moderate</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Book Now</Button>
                </div>
              </div>
              
              <div className="tour-card rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&q=80" 
                  alt="Multi-day tour"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Mountain Trek Expedition</h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">$449</span>
                  </div>
                  <p className="text-gray-700 mb-3">Climb Ghana's highest peaks over 5 days with expert guides.</p>
                  <div className="flex items-center text-sm text-gray-500 mb-5">
                    <span className="mr-4">Duration: 5 days</span>
                    <span>Difficulty: Challenging</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Book Now</Button>
                </div>
              </div>
            </div>
          </section>
          
          <section id="custom" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Custom Experiences</h2>
            <div className="bg-muted rounded-lg p-8">
              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4">Create Your Perfect Adventure</h3>
                <p className="text-gray-700 mb-8">
                  Let us design a personalized tour based on your preferences, interests, and desired level of adventure.
                </p>
                <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg">
                  Request Custom Tour
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tours;
