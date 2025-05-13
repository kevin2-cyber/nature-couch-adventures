
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Mountain, Users, Navigation, Check } from "lucide-react";
import { tours } from "@/data/tourData";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";

const TourDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [participants, setParticipants] = useState<number>(1);
  
  const tour = tours.find(tour => tour.id === id);
  
  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 container mx-auto pt-32 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Tour Not Found</h1>
          <p className="mb-8">Sorry, the tour you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/tours">Return to Tours</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
  
  const handleBookNow = () => {
    if (!selectedDate) {
      toast({
        title: "Date Required",
        description: "Please select a departure date",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Booking Initiated!",
      description: `Your ${tour.title} tour for ${participants} participant(s) on ${selectedDate} has been reserved.`,
    });
  };
  
  // Generate some available dates (next 10 days)
  const availableDates = Array.from({ length: 10 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        {/* Hero Section with Main Image */}
        <div className="relative h-[50vh]">
          <img 
            src={tour.image} 
            alt={tour.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 bg-gradient-to-t from-black/80 to-transparent">
            <div className="container mx-auto">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">{tour.title}</h1>
              <div className="flex flex-wrap gap-3 md:gap-6 text-white">
                <div className="flex items-center gap-1">
                  <MapPin size={18} />
                  <span>{tour.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar size={18} />
                  <span>{tour.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Mountain size={18} />
                  <span>Difficulty: {tour.difficulty}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Tour Details */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview">
                <TabsList className="w-full">
                  <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary" className="flex-1">Itinerary</TabsTrigger>
                  <TabsTrigger value="gallery" className="flex-1">Gallery</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-6">
                  <h2 className="text-2xl font-bold mb-4">About This Tour</h2>
                  <p className="text-gray-700 mb-8">{tour.longDescription}</p>
                  
                  {tour.highlights && (
                    <>
                      <h3 className="text-xl font-bold mb-4">Highlights</h3>
                      <ul className="space-y-2 mb-8">
                        {tour.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check size={18} className="text-earth-600 mt-1 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {tour.inclusions && (
                    <>
                      <h3 className="text-xl font-bold mb-4">What's Included</h3>
                      <ul className="space-y-2 mb-8">
                        {tour.inclusions.map((inclusion, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check size={18} className="text-earth-600 mt-1 shrink-0" />
                            <span>{inclusion}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {tour.meetingPoint && (
                      <div className="bg-muted p-4 rounded">
                        <div className="flex items-center gap-2 font-bold mb-2">
                          <Navigation size={18} className="text-earth-600" />
                          <span>Meeting Point</span>
                        </div>
                        <p>{tour.meetingPoint}</p>
                      </div>
                    )}
                    
                    {tour.groupSize && (
                      <div className="bg-muted p-4 rounded">
                        <div className="flex items-center gap-2 font-bold mb-2">
                          <Users size={18} className="text-earth-600" />
                          <span>Group Size</span>
                        </div>
                        <p>{tour.groupSize}</p>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="itinerary" className="mt-6">
                  <h2 className="text-2xl font-bold mb-6">Tour Itinerary</h2>
                  
                  {tour.itinerary?.map((item, index) => (
                    <div key={index} className="mb-8">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="h-10 w-10 rounded-full bg-earth-600 flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">{item.day}</div>
                          <h3 className="text-xl font-bold">{item.title}</h3>
                        </div>
                      </div>
                      <div className="ml-[3.25rem]">
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="gallery" className="mt-6">
                  <h2 className="text-2xl font-bold mb-6">Tour Gallery</h2>
                  
                  {tour.images && tour.images.length > 0 ? (
                    <Carousel className="w-full">
                      <CarouselContent>
                        {tour.images.map((image, index) => (
                          <CarouselItem key={index}>
                            <div className="p-1">
                              <img 
                                src={image}
                                alt={`${tour.title} - Image ${index + 1}`}
                                className="w-full h-[400px] object-cover rounded-lg"
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="flex justify-end gap-2 mt-4">
                        <CarouselPrevious className="relative static translate-y-0" />
                        <CarouselNext className="relative static translate-y-0" />
                      </div>
                    </Carousel>
                  ) : (
                    <p>No gallery images available for this tour.</p>
                  )}
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Right Column: Booking Form */}
            <div>
              <div className="bg-white border rounded-lg p-6 shadow-sm sticky top-28">
                <h2 className="text-2xl font-bold mb-4">Book This Tour</h2>
                
                <div className="flex justify-between items-center mb-6">
                  <span className="text-earth-600 text-3xl font-bold">{tour.price}</span>
                  <span className="text-sm text-gray-500">per person</span>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-2">
                      Select Date
                    </label>
                    <select
                      id="date"
                      className="w-full p-3 bg-muted border rounded"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                    >
                      <option value="">-- Select a date --</option>
                      {availableDates.map(date => (
                        <option key={date} value={date}>{date}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="participants" className="block text-sm font-medium mb-2">
                      Number of Participants
                    </label>
                    <select
                      id="participants"
                      className="w-full p-3 bg-muted border rounded"
                      value={participants}
                      onChange={(e) => setParticipants(Number(e.target.value))}
                    >
                      {Array.from({ length: 10 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="flex justify-between mb-2">
                      <span>Tour price × {participants}</span>
                      <span>${parseInt(tour.price.replace('$', '')) * participants}</span>
                    </div>
                    
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span className="text-earth-600">${parseInt(tour.price.replace('$', '')) * participants}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-earth-600 hover:bg-earth-700 text-white"
                    size="lg"
                    onClick={handleBookNow}
                  >
                    Book Now
                  </Button>
                  
                  <p className="text-xs text-center text-gray-500">
                    No payment required now - pay when you arrive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TourDetail;
