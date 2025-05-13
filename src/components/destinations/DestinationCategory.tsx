
import React from "react";
import { ArrowRight } from "lucide-react";

export interface DestinationCategoryProps {
  title: string;
  image: string;
  count: number;
  link: string;
}

const DestinationCategory: React.FC<DestinationCategoryProps> = ({ title, image, count, link }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <img 
        src={image} 
        alt={title}
        className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 w-full">
        <h3 className="text-2xl font-bold text-white font-playfair">{title}</h3>
        <p className="text-white/80 mb-3">{count} destinations</p>
        <a href={link} className="inline-flex items-center text-white hover:text-earth-300 transition-colors">
          <span className="mr-1 font-medium">Explore</span>
          <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
};

export default DestinationCategory;
