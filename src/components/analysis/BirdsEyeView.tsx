
import React from 'react';
import { Eye, Info } from 'lucide-react';

interface BirdsEyeViewProps {
  videoFile: File | null;
}

const BirdsEyeView: React.FC<BirdsEyeViewProps> = ({ videoFile }) => {
  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex items-center gap-2">
        <div className="p-2 rounded-lg bg-soccerix-teal/10 text-soccerix-teal">
          <Eye size={20} />
        </div>
        <h3 className="text-xl font-semibold">Bird's Eye View</h3>
      </div>
      
      <div className="mb-4 p-4 bg-soccerix-gray/50 rounded-lg">
        <div className="flex items-start gap-2 text-sm">
          <Info size={16} className="text-soccerix-teal mt-0.5" />
          <p>The bird's eye view transforms the match footage into a top-down tactical perspective, allowing for comprehensive analysis of team formations and player movements.</p>
        </div>
      </div>
      
      <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center shadow-sm">
        {videoFile ? (
          <video 
            className="w-full h-full object-cover" 
            controls
            src={URL.createObjectURL(videoFile)}
          ></video>
        ) : (
          <div className="text-gray-500 flex flex-col items-center">
            <Eye size={40} strokeWidth={1.5} />
            <p className="mt-2">Bird's eye view will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BirdsEyeView;
