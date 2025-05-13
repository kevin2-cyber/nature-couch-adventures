
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Mountain } from "lucide-react";

export interface TourProps {
  title: string;
  image: string;
  duration: string;
  location: string;
  difficulty: string;
  price: string;
  description: string;
}

const Tour: React.FC<TourProps> = ({ 
  title, 
  image, 
  duration, 
  location, 
  difficulty, 
  price, 
  description 
}) => {
  return (
    <Card className="tour-card overflow-hidden border border-border rounded-lg h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
        />
        <div className="absolute top-4 right-4 bg-earth-500 text-white px-3 py-1 rounded-full font-medium text-sm">
          {price}
        </div>
      </div>
      <CardContent className="p-5 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 font-playfair">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">
          {description}
        </p>
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-earth-600" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-earth-600" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mountain size={16} className="text-earth-600" />
            <span className="text-sm">Difficulty: {difficulty}</span>
          </div>
        </div>
        <Button className="w-full bg-earth-600 hover:bg-earth-700 text-white">
          Book This Tour
        </Button>
      </CardContent>
    </Card>
  );
};

export default Tour;
