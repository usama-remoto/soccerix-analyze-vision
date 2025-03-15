
import React from 'react';
import { Grid, Info } from 'lucide-react';

interface VoronoiDiagramProps {
  videoFile: File | null;
}

const VoronoiDiagram: React.FC<VoronoiDiagramProps> = ({ videoFile }) => {
  return (
    <div className="animate-fade-in">
      <div className="mb-6 flex items-center gap-2">
        <div className="p-2 rounded-lg bg-soccerix-teal/10 text-soccerix-teal">
          <Grid size={20} />
        </div>
        <h3 className="text-xl font-semibold">Voronoi Diagram</h3>
      </div>
      
      <div className="mb-4 p-4 bg-soccerix-gray/50 rounded-lg">
        <div className="flex items-start gap-2 text-sm">
          <Info size={16} className="text-soccerix-teal mt-0.5" />
          <p>Voronoi diagrams visualize the spatial influence of each player on the field, showing control zones and potential passing channels throughout the match.</p>
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
            <Grid size={40} strokeWidth={1.5} />
            <p className="mt-2">Voronoi diagram will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoronoiDiagram;
