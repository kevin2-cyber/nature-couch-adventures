
import React, { useEffect, useRef } from "react";
import DestinationsSection from "@/components/sections/DestinationsSection";
import ToursSection from "@/components/sections/ToursSection";

const FeaturedTours: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={sectionRef}>
      <DestinationsSection />
      <ToursSection />
    </div>
  );
};

export default FeaturedTours;
