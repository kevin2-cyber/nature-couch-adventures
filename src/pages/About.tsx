
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                NatureWalkingCouch was founded in 2010 by a group of passionate nature enthusiasts and experienced guides who wanted to share Ghana's incredible natural beauty with the world.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a small venture with a handful of local tours has grown into the country's premier eco-tourism company, offering diverse experiences across Ghana's most stunning landscapes.
              </p>
              <p className="text-gray-700">
                Our team combines deep knowledge of Ghana's ecology, wildlife, and culture with a commitment to sustainable tourism practices that preserve the environments we explore.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1527610276295-f4c1b38decc5?auto=format&fit=crop&q=80" 
                alt="Our team"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-gray-700 italic">
                "To connect people with nature through immersive, educational, and sustainable experiences that foster appreciation and conservation of Ghana's natural heritage."
              </p>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" 
                    alt="Guide portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Kwame Mensah</h3>
                <p className="text-gray-500 mb-3">Senior Guide, Botanist</p>
                <p className="text-gray-700">
                  With 15 years of experience and a master's degree in botany, Kwame brings unparalleled knowledge to our forest tours.
                </p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80" 
                    alt="Guide portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Ama Boateng</h3>
                <p className="text-gray-500 mb-3">Adventure Guide</p>
                <p className="text-gray-700">
                  A certified mountaineer and wilderness first responder, Ama specializes in leading our more challenging expeditions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80" 
                    alt="Guide portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">David Owusu</h3>
                <p className="text-gray-500 mb-3">Wildlife Expert</p>
                <p className="text-gray-700">
                  Former national park ranger with extensive knowledge of Ghana's wildlife and conservation practices.
                </p>
              </div>
              
              <div className="text-center">
                <div className="rounded-full overflow-hidden w-48 h-48 mx-auto mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80" 
                    alt="Guide portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">Grace Addo</h3>
                <p className="text-gray-500 mb-3">Cultural Guide</p>
                <p className="text-gray-700">
                  Specializes in connecting visitors with local communities and sharing the cultural significance of natural sites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
