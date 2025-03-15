
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const features = [
  {
    id: 1,
    title: "Bird's Eye View",
    description: "Convert match footage into a tactical top-down perspective for comprehensive analysis.",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Tactical Analysis",
    description: "AI-powered insights into team formations, player positions, and strategic movements.",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Event Detection",
    description: "Automatically identify key events such as goals, corners, and free kicks with timestamp markers.",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Visualizations",
    description: "Advanced heat maps, pass networks, and statistical visualizations for deeper understanding.",
    image: "/placeholder.svg"
  }
];

const FeatureSlider = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextFeature = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveFeature((prev) => (prev === features.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevFeature = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveFeature((prev) => (prev === 0 ? features.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextFeature();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeFeature, isAnimating]);

  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg gradient-border bg-white">
      <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
        <button 
          onClick={prevFeature}
          className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-soccerix-teal hover:bg-soccerix-gray transition-colors"
          disabled={isAnimating}
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      
      <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
        <button 
          onClick={nextFeature}
          className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-soccerix-teal hover:bg-soccerix-gray transition-colors"
          disabled={isAnimating}
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-6 space-y-1">
            {features.map((feature, index) => (
              <div 
                key={feature.id}
                className={`h-1 rounded-full transition-all duration-300 mx-1 inline-block ${
                  index === activeFeature ? 'w-8 bg-soccerix-teal' : 'w-2 bg-soccerix-gray-dark'
                }`}
              ></div>
            ))}
          </div>
          
          <div key={activeFeature} className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
            <p className="text-gray-600">{features[activeFeature].description}</p>
          </div>
        </div>
        
        <div className="bg-soccerix-gray relative min-h-[300px] flex items-center justify-center overflow-hidden">
          <div key={`img-${activeFeature}`} className="animate-scale-in absolute inset-0 flex items-center justify-center">
            <img 
              src={features[activeFeature].image} 
              alt={features[activeFeature].title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {features.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveFeature(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeFeature ? 'w-6 bg-soccerix-teal' : 'bg-soccerix-gray-dark'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSlider;
