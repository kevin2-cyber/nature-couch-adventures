import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import backgroundUtils from "@/background";

const Tours = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Ghana's Finest Tours</h1>
          
          <section id="heritage-tours" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Heritage Tours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="tour-card rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={backgroundUtils.getTourImageByTitle("Cape Coast Castle Tour")} 
                  alt="Cape Coast Castle"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Cape Coast Castle Tour</h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">$65</span>
                  </div>
                  <p className="text-gray-700 mb-3">Explore the historic Cape Coast Castle, a UNESCO World Heritage site with profound connections to the transatlantic slave trade.</p>
                  <div className="flex items-center text-sm text-gray-500 mb-5">
                    <span className="mr-4">Duration: 6 hours</span>
                    <span>Difficulty: Easy</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Book Now</Button>
                </div>
              </div>
              
              <div className="tour-card rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={backgroundUtils.getTourImageByTitle("Elmina Castle Experience")} 
                  alt="Elmina Castle"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Elmina Castle Experience</h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">$70</span>
                  </div>
                  <p className="text-gray-700 mb-3">Visit the oldest European structure in Sub-Saharan Africa and learn about Ghana's complex colonial history.</p>
                  <div className="flex items-center text-sm text-gray-500 mb-5">
                    <span className="mr-4">Duration: 5 hours</span>
                    <span>Difficulty: Easy</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Book Now</Button>
                </div>
              </div>
            </div>
          </section>
          
          <section id="nature-tours" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Nature Tours</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="tour-card rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={backgroundUtils.getTourImageByTitle("Kakum Canopy Walk")} 
                  alt="Kakum Canopy Walk"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Kakum Canopy Walk</h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">$65</span>
                  </div>
                  <p className="text-gray-700 mb-3">Experience the thrill of walking above Kakum National Park's rainforest canopy on suspended bridges.</p>
                  <div className="flex items-center text-sm text-gray-500 mb-5">
                    <span className="mr-4">Duration: 8 hours</span>
                    <span>Difficulty: Easy</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Book Now</Button>
                </div>
              </div>
              
              <div className="tour-card rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={backgroundUtils.getTourImageByTitle("Wli Waterfall Hike")} 
                  alt="Wli Waterfall"
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
              
              <div className="tour-card rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={backgroundUtils.getTourImageByTitle("Lake Bosumtwi Excursion")} 
                  alt="Lake Bosumtwi"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Lake Bosumtwi Excursion</h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">$60</span>
                  </div>
                  <p className="text-gray-700 mb-3">Visit Ghana's only natural lake formed by a meteorite impact, sacred to the Ashanti people.</p>
                  <div className="flex items-center text-sm text-gray-500 mb-5">
                    <span className="mr-4">Duration: 7 hours</span>
                    <span>Difficulty: Easy</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Book Now</Button>
                </div>
              </div>
            </div>
          </section>
          
          <section id="cultural-immersion" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Cultural Immersion</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="tour-card rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={backgroundUtils.getTourImageByTitle("Ashanti Cultural Tour")} 
                  alt="Ashanti Cultural Tour"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Ashanti Cultural Tour</h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">$89</span>
                  </div>
                  <p className="text-gray-700 mb-3">Immerse yourself in the rich cultural heritage of the Ashanti Kingdom in Kumasi.</p>
                  <div className="flex items-center text-sm text-gray-500 mb-5">
                    <span className="mr-4">Duration: 1 day</span>
                    <span>Difficulty: Easy</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Book Now</Button>
                </div>
              </div>
              
              <div className="tour-card rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={backgroundUtils.getTourImageByTitle("Kente Weaving Experience")} 
                  alt="Kente Weaving Village"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Kente Weaving Experience</h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">$55</span>
                  </div>
                  <p className="text-gray-700 mb-3">Visit Bonwire and learn about the traditional craft of Kente cloth weaving from local artisans.</p>
                  <div className="flex items-center text-sm text-gray-500 mb-5">
                    <span className="mr-4">Duration: 6 hours</span>
                    <span>Difficulty: Easy</span>
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
                  src={backgroundUtils.getTourImageByTitle("Northern Ghana Safari")} 
                  alt="Northern Ghana Safari"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Northern Ghana Safari</h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">$299</span>
                  </div>
                  <p className="text-gray-700 mb-3">A 3-day expedition through Mole National Park, Ghana's largest wildlife reserve.</p>
                  <div className="flex items-center text-sm text-gray-500 mb-5">
                    <span className="mr-4">Duration: 3 days</span>
                    <span>Difficulty: Moderate</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Book Now</Button>
                </div>
              </div>
              
              <div className="tour-card rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={backgroundUtils.getTourImageByTitle("Ghana Heritage Trail")} 
                  alt="Ghana Heritage Tour"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">Ghana Heritage Trail</h3>
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">$449</span>
                  </div>
                  <p className="text-gray-700 mb-3">Explore Ghana's most significant historical and cultural sites over 5 days with expert guides.</p>
                  <div className="flex items-center text-sm text-gray-500 mb-5">
                    <span className="mr-4">Duration: 5 days</span>
                    <span>Difficulty: Moderate</span>
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
                <h3 className="text-2xl font-bold mb-4">Create Your Perfect Ghanaian Adventure</h3>
                <p className="text-gray-700 mb-8">
                  Let us design a personalized tour of Ghana based on your preferences, interests, and desired level of adventure.
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
