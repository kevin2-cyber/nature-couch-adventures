export interface TourData {
  id: string;
  title: string;
  image: string;
  duration: string;
  location: string;
  difficulty: string;
  price: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  inclusions?: string[];
  itinerary?: {
    day: string;
    title: string;
    description: string;
  }[];
  images?: string[];
  meetingPoint?: string;
  groupSize?: string;
  category?: string;
}

export const tours: TourData[] = [
  {
    id: "kakum-canopy-walk",
    title: "Kakum Canopy Walk",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80",
    duration: "Full day",
    location: "Kakum National Park, Central Region",
    difficulty: "Easy",
    price: "$65",
    description: "Experience walking through the treetops on suspended bridges in Ghana's famous rainforest.",
    longDescription: "Embark on an unforgettable adventure through the Kakum National Park, home to Ghana's famous canopy walkway. This thrilling experience takes you 30 meters above the ground on a series of suspended bridges through the rainforest canopy, offering spectacular views and the chance to observe wildlife from a unique perspective.",
    highlights: [
      "Walk 30 meters above the forest floor on suspended bridges",
      "Guided nature tour through the rainforest",
      "Opportunity to spot rare birds and butterflies",
      "Learn about local flora and fauna from expert guides"
    ],
    inclusions: [
      "Park entrance fees",
      "Professional guide",
      "Canopy walkway access",
      "Bottled water",
      "Transportation from Cape Coast"
    ],
    itinerary: [
      {
        day: "Morning",
        title: "Rainforest Introduction",
        description: "Meet your guide at the park entrance for an introduction to the ecosystem and wildlife of Kakum National Park."
      },
      {
        day: "Mid-morning",
        title: "Canopy Walkway Experience",
        description: "Experience the thrill of the canopy walkway, crossing seven bridges suspended above the rainforest floor."
      },
      {
        day: "Afternoon",
        title: "Nature Trail Exploration",
        description: "Follow the park's nature trails to discover more of the rainforest's botanical treasures and wildlife."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&q=80"
    ],
    meetingPoint: "Kakum National Park Visitor Center",
    groupSize: "2-15 people",
    category: "nature"
  },
  {
    id: "cape-coast-cultural-tour",
    title: "Cape Coast Cultural Tour",
    image: "https://images.unsplash.com/photo-1614555383820-941c244cf6a3?auto=format&fit=crop&q=80",
    duration: "Full day",
    location: "Cape Coast, Central Region",
    difficulty: "Easy",
    price: "$70",
    description: "Explore the historic Cape Coast Castle and learn about Ghana's complex colonial history.",
    longDescription: "Journey through Ghana's powerful past with a visit to Cape Coast Castle, a UNESCO World Heritage site and one of the most important historical landmarks in West Africa. This comprehensive tour offers an in-depth exploration of the castle's role in the transatlantic slave trade and Ghana's path to independence.",
    highlights: [
      "Guided tour of Cape Coast Castle with expert local historian",
      "Visit to the castle's dungeons and Door of No Return",
      "Exploration of the castle museum's artifacts and exhibitions",
      "Walking tour of Cape Coast's historical district"
    ],
    inclusions: [
      "Castle entrance fees",
      "Professional historian guide",
      "Traditional Ghanaian lunch",
      "Transportation within Cape Coast",
      "Cultural performance (on select days)"
    ],
    itinerary: [
      {
        day: "Morning",
        title: "Castle Tour",
        description: "Guided exploration of Cape Coast Castle, including the dungeons, governor's quarters, and the Door of No Return."
      },
      {
        day: "Mid-day",
        title: "Museum Visit",
        description: "Visit the castle museum to learn more about Ghana's colonial past and the impacts of the transatlantic slave trade."
      },
      {
        day: "Afternoon",
        title: "Cape Coast Town Walk",
        description: "Walking tour of Cape Coast's historical district, visiting important landmarks and learning about local culture."
      }
    ],
    images: [
      "https://images.unsplash.com/photo-1614555383820-941c244cf6a3?auto=format&fit=crop&q=80",
      "https://upload.wikimedia.org/wikipedia/commons/5/51/Cape_Coast_Castle_by_Daderot.JPG",
      "https://images.unsplash.com/photo-1605647739685-f5a55ff8f761?auto=format&fit=crop&q=80"
    ],
    meetingPoint: "Cape Coast Castle Main Entrance",
    groupSize: "2-20 people",
    category: "heritage"
  },
  {
    id: "mole-safari-adventure",
    title: "Mole Safari Adventure",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Mole_motel.jpg",
    duration: "2 days",
    location: "Mole National Park, Northern Region",
    difficulty: "Moderate",
    price: "$199",
    description: "Encounter elephants, antelopes and many bird species in Ghana's largest wildlife refuge.",
    longDescription: "Immerse yourself in the beauty of Ghana's wilderness with this two-day safari adventure in Mole National Park, home to hundreds of elephants and over 90 mammal species. Experience both walking and vehicle safaris led by experienced rangers, with an overnight stay at the famous Mole Motel overlooking the park's watering hole.",
    highlights: [
      "Walking safari with armed rangers to get close to wildlife",
      "Vehicle safari to cover more ground and find distant animals",
      "Overnight stay at the iconic Mole Motel",
      "Evening viewing of elephants at the watering hole"
    ],
    inclusions: [
      "Park entrance fees",
      "Professional wildlife guides",
      "One night accommodation at Mole Motel",
      "All meals during your stay",
      "Walking and driving safaris",
      "Transportation from Tamale"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Arrival & Afternoon Safari",
        description: "Arrive at Mole National Park, check into the Mole Motel, and enjoy an afternoon driving safari to spot elephants, antelope, and other wildlife."
      },
      {
        day: "Evening",
        title: "Watering Hole Observation",
        description: "Watch elephants and other animals gather at the watering hole directly in front of the motel during sunset."
      },
      {
        day: "Day 2",
        title: "Walking Safari & Departure",
        description: "Early morning walking safari with armed rangers to get closer to the wildlife, followed by breakfast and departure."
      }
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/e1/Mole_motel.jpg",
      "https://images.unsplash.com/photo-1570555699013-9d2616e8bbf9?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581852017103-68ac65514cf7?auto=format&fit=crop&q=80"
    ],
    meetingPoint: "Mole National Park Main Gate",
    groupSize: "2-10 people",
    category: "nature"
  }
];

export const destinations = [
  {
    title: "Mountain Ranges",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80",
    count: 4,
    link: "/destinations#mountains"
  },
  {
    title: "Forest Trails",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80",
    count: 6,
    link: "/destinations#forests"
  },
  {
    title: "River Adventures",
    image: "https://images.unsplash.com/photo-1528732262645-b6ff4b9c9310?auto=format&fit=crop&q=80",
    count: 5,
    link: "/destinations#rivers"
  },
  {
    title: "Coastal Paths",
    image: "https://images.unsplash.com/photo-1525968902-070804c406e0?auto=format&fit=crop&q=80",
    count: 6,
    link: "/destinations#coasts"
  }
];
