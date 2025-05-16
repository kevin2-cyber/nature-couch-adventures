
import image1 from '/capecoast.webp';
import image2 from '/kakum.jpg';
import image3 from '/molenational.webp';
import image4 from '/voltalake.jpeg';

// Map of tour titles to appropriate image URLs
const tourImages = {
  "Kakum National Park Canopy Walk": "https://images.unsplash.com/photo-1582650448763-44cdb0c916d8?auto=format&fit=crop&q=80",
  "Mole National Park Safari": "https://images.unsplash.com/photo-1518466088764-f2e1d710b780?auto=format&fit=crop&q=80",
  "Lake Volta Boat Tour": "https://images.unsplash.com/photo-1580400472136-6878d074188e?auto=format&fit=crop&q=80",
  "Cape Coast Castle Tour": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80",
  "Elmina Castle Experience": "https://images.unsplash.com/photo-1525817798609-6d45782e48e0?auto=format&fit=crop&q=80",
  "Kakum Canopy Walk": "https://images.unsplash.com/photo-1614808605929-0ee3b9c35d54?auto=format&fit=crop&q=80",
  "Wli Waterfall Hike": "https://images.unsplash.com/photo-1574786527860-fefa11653853?auto=format&fit=crop&q=80",
  "Lake Bosumtwi Excursion": "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&q=80",
  "Ashanti Cultural Tour": "https://images.unsplash.com/photo-1515963664470-831f2622e991?auto=format&fit=crop&q=80",
  "Kente Weaving Experience": "https://images.unsplash.com/photo-1602458125216-16aa800c9a17?auto=format&fit=crop&q=80",
  "Northern Ghana Safari": "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80",
  "Ghana Heritage Trail": "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?auto=format&fit=crop&q=80",
};

// Function to get an image URL based on tour title
const getTourImageByTitle = (title: string): string => {
  return tourImages[title] || "https://images.unsplash.com/photo-1571153041701-725c783373e9?auto=format&fit=crop&q=80"; // Default image if title not found
};

// Background slider images
const randomImages = [image1, image2, image3, image4];

export default { randomImages, getTourImageByTitle };
