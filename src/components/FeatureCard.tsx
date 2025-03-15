
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon: Icon, 
  title, 
  description,
  delay = 0
}) => {
  return (
    <div 
      className="feature-card animate-on-scroll" 
      style={{ transitionDelay: `${delay}ms` }}
      data-aos="fade-up"
    >
      <div className="mb-4 p-3 rounded-lg bg-soccerix-gray w-14 h-14 flex items-center justify-center text-soccerix-teal">
        <Icon size={24} strokeWidth={2} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
