
import React, { useEffect } from "react";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const features = [
    "Expert local guides with extensive knowledge",
    "Small groups for personalized experiences",
    "Focus on sustainability and environmental respect",
    "Safety as our top priority on all tours",
    "Comfortable accommodations and equipment",
    "Flexible itineraries to match your preferences"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80"
                alt="Tour guide in nature"
                className="rounded-lg shadow-xl w-full h-auto"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <div className="flex flex-col items-center">
                  <p className="text-4xl font-bold text-natural-600">10+</p>
                  <p className="text-sm text-muted-foreground">Years of Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll" style={{ transitionDelay: "200ms" }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About NatureWalkingCouch</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Founded by passionate nature enthusiasts, NatureWalkingCouch was born from a desire to 
              share the wonders of the natural world while ensuring comfortable, safe, and enriching experiences 
              for all our guests.
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
              Our team of expert guides combines extensive knowledge of local ecology, geography, and history 
              to create tours that are not just walks through beautiful landscapes, but journeys of discovery 
              and learning.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-natural-600 flex-shrink-0 mt-1" size={20} />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
