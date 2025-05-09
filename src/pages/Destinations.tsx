
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Destinations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Explore Our Destinations</h1>
          
          <section id="mountains" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Mountains</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Mountain destinations */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80" 
                  alt="Mountain destination"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Afadjato Peak</h3>
                  <p className="text-gray-700 mb-4">Ghana's highest mountain with breathtaking views.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80" 
                  alt="Mountain range"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Kyabobo Range</h3>
                  <p className="text-gray-700 mb-4">Stunning mountain ranges perfect for hiking enthusiasts.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1559545558-1f9b542e5872?auto=format&fit=crop&q=80" 
                  alt="Mountain trail"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Agumatsa Mountains</h3>
                  <p className="text-gray-700 mb-4">Home to the famous Wli Waterfalls and diverse wildlife.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          <section id="forests" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Forests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Forest destinations */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80" 
                  alt="Rainforest"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Kakum National Park</h3>
                  <p className="text-gray-700 mb-4">Famous canopy walkway through a pristine rainforest.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80" 
                  alt="Dense forest"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Ankasa Forest Reserve</h3>
                  <p className="text-gray-700 mb-4">One of the most biodiverse rainforests in Ghana.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&q=80" 
                  alt="Forest path"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Bobiri Forest Reserve</h3>
                  <p className="text-gray-700 mb-4">Home to over 400 butterfly species and diverse flora.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section id="rivers" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Rivers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* River destinations */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1528732262645-b6ff4b9c9310?auto=format&fit=crop&q=80" 
                  alt="River view"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Volta River</h3>
                  <p className="text-gray-700 mb-4">Scenic waterways perfect for boat tours and fishing.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          <section id="coasts" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Coastal Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Coastal destinations */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1525968902-070804c406e0?auto=format&fit=crop&q=80" 
                  alt="Coastal view"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Cape Coast</h3>
                  <p className="text-gray-700 mb-4">Historical coastal town with beautiful beaches.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Destinations;
