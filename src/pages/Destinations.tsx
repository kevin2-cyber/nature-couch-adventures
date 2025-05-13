
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Destinations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Discover Ghana's Beauty</h1>
          
          <section id="mountains" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Mountains & Highlands</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80" 
                  alt="Mountain destination"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Mount Afadjato</h3>
                  <p className="text-gray-700 mb-4">Ghana's highest mountain (885m) offering breathtaking views of the surrounding landscape.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://www.modernghana.com/images/content/429201994523_xkyabobo.jpg.pagespeed.ic.IDZ8vmgG2w.jpg" 
                  alt="Mountain range"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Kyabobo Range</h3>
                  <p className="text-gray-700 mb-4">Stunning mountain ranges in the Volta Region perfect for hiking enthusiasts.</p>
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
                  <p className="text-gray-700 mb-4">Home to the famous Wli Waterfalls and diverse wildlife in the Volta Region.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          <section id="forests" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Forests & Parks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80" 
                  alt="Rainforest"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Kakum National Park</h3>
                  <p className="text-gray-700 mb-4">Famous canopy walkway suspended 30 meters above a pristine rainforest in the Central Region.</p>
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
                  <h3 className="text-xl font-bold mb-2">Ankasa Conservation Area</h3>
                  <p className="text-gray-700 mb-4">One of the most biodiverse rainforests in Ghana with over 800 plant species.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Mole_National_Park_entrance.jpg" 
                  alt="Mole National Park"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Mole National Park</h3>
                  <p className="text-gray-700 mb-4">Ghana's largest wildlife refuge with elephants, antelopes, and over 300 bird species.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section id="rivers" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Rivers & Lakes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1528732262645-b6ff4b9c9310?auto=format&fit=crop&q=80" 
                  alt="River view"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Volta River & Lake</h3>
                  <p className="text-gray-700 mb-4">One of the world's largest artificial lakes, perfect for boat tours and fishing.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1571152571837-7d8540ad8d30?auto=format&fit=crop&q=80" 
                  alt="Lake Bosumtwi"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Lake Bosumtwi</h3>
                  <p className="text-gray-700 mb-4">Sacred lake formed by a meteorite impact, surrounded by lush forests and traditional villages.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/88/Bui_Dam_%28cropped%29.jpg" 
                  alt="Bui Dam"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Bui National Park</h3>
                  <p className="text-gray-700 mb-4">Scenic park centered around the Black Volta river with hippos and diverse wildlife.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          <section id="coasts" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Coastal Treasures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1525968902-070804c406e0?auto=format&fit=crop&q=80" 
                  alt="Cape Coast"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Cape Coast</h3>
                  <p className="text-gray-700 mb-4">Historical coastal town with beautiful beaches and the famous Cape Coast Castle.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1592453106904-8cbf08e0e3aa?auto=format&fit=crop&q=80" 
                  alt="Busua Beach"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Busua Beach</h3>
                  <p className="text-gray-700 mb-4">One of Ghana's most beautiful beaches with golden sands and palm trees.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1568198473832-b6b0f46328c1?auto=format&fit=crop&q=80" 
                  alt="Ada Foah"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Ada Foah</h3>
                  <p className="text-gray-700 mb-4">Where the Volta River meets the Atlantic Ocean, perfect for water sports.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          <section id="cultural" className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Cultural Heritage Sites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Manhyia_Palace.jpg" 
                  alt="Manhyia Palace"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Manhyia Palace</h3>
                  <p className="text-gray-700 mb-4">Official residence of the Asantehene (King of Ashanti) with a museum of royal artifacts.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/77/Elmina_Castle.jpg" 
                  alt="Elmina Castle"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Elmina Castle</h3>
                  <p className="text-gray-700 mb-4">The oldest European structure in Sub-Saharan Africa, built in 1482.</p>
                  <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded">
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1565026057757-5a76d33f8311?auto=format&fit=crop&q=80" 
                  alt="Larabanga Mosque"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Larabanga Mosque</h3>
                  <p className="text-gray-700 mb-4">One of the oldest mosques in West Africa, built in the Sudanese architectural style.</p>
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
