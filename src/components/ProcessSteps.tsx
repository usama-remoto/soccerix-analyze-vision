
import React from 'react';
import { Upload, Clock, LineChart, Download } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Video',
    description: 'Upload your match video for analysis'
  },
  {
    icon: Clock,
    title: 'Processing',
    description: 'Our AI analyzes the video in real-time'
  },
  {
    icon: LineChart,
    title: 'Visual Results',
    description: 'View detailed analysis and visualizations'
  },
  {
    icon: Download,
    title: 'Download Report',
    description: 'Get a comprehensive match report'
  }
];

const ProcessSteps = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, index) => {
        const Icon = step.icon;
        
        return (
          <div key={index} className="relative">
            <div 
              className="feature-card h-full flex flex-col items-center text-center animate-on-scroll"
              style={{ transitionDelay: `${index * 100}ms` }}
              data-aos="fade-up"
            >
              <div className="w-16 h-16 rounded-full bg-soccerix-teal/10 flex items-center justify-center mb-4">
                <Icon className="text-soccerix-teal" size={24} />
              </div>
              <div className="bg-soccerix-teal w-8 h-8 rounded-full text-white flex items-center justify-center mb-3 font-semibold">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
            
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-1/3 left-full w-full h-0.5 bg-soccerix-teal/20 transform -translate-y-1/2 z-0">
                <div className="absolute right-0 -top-1.5 w-3 h-3 border-t-2 border-r-2 border-soccerix-teal/30 transform rotate-45"></div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProcessSteps;
