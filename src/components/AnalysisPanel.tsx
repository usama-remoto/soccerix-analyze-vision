
import React, { useState } from 'react';
import { 
  Eye, 
  Grid, 
  Flag, 
  Activity, 
  Users, 
  FileText,
  BarChart4,
  Info
} from 'lucide-react';

type AnalysisType = 
  | 'birdsEyeView' 
  | 'voronoiDiagram' 
  | 'eventDetection' 
  | 'ballAnalysis' 
  | 'teamAnalysis' 
  | 'report';

interface AnalysisPanelProps {
  onSelectAnalysis: (type: AnalysisType) => void;
  selectedAnalysis: AnalysisType | null;
  isVideoUploaded: boolean;
}

interface AnalysisOption {
  id: AnalysisType;
  title: string;
  description: string;
  icon: React.ElementType;
}

const analysisOptions: AnalysisOption[] = [
  {
    id: 'birdsEyeView',
    title: "Bird's Eye View",
    description: "Convert match footage into a tactical top-down perspective",
    icon: Eye
  },
  {
    id: 'voronoiDiagram',
    title: "Voronoi Diagram",
    description: "Visualize player influence zones and spatial control",
    icon: Grid
  },
  {
    id: 'eventDetection',
    title: "Event Detection",
    description: "Identify key events like goals, corners, and free kicks",
    icon: Flag
  },
  {
    id: 'ballAnalysis',
    title: "Ball Analysis",
    description: "Track ball possession, trajectory, and heat maps",
    icon: Activity
  },
  {
    id: 'teamAnalysis',
    title: "Team Tactical Analysis",
    description: "Analyze team formations, transitions, and positioning",
    icon: Users
  },
  {
    id: 'report',
    title: "Generate Report",
    description: "Create a comprehensive analysis report",
    icon: FileText
  }
];

const AnalysisPanel: React.FC<AnalysisPanelProps> = ({ 
  onSelectAnalysis,
  selectedAnalysis,
  isVideoUploaded
}) => {
  const [hoveredOption, setHoveredOption] = useState<AnalysisType | null>(null);

  const handleSelectOption = (analysisType: AnalysisType) => {
    if (!isVideoUploaded) {
      return;
    }
    onSelectAnalysis(analysisType);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Analysis Options</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {analysisOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = selectedAnalysis === option.id;
          const isHovered = hoveredOption === option.id;
          
          return (
            <div
              key={option.id}
              className={`relative rounded-xl transition-all duration-300 overflow-hidden ${
                isVideoUploaded 
                  ? 'cursor-pointer shadow-sm hover:shadow-md' 
                  : 'cursor-not-allowed opacity-70'
              } ${
                isSelected 
                  ? 'ring-2 ring-soccerix-teal bg-soccerix-teal/5' 
                  : 'bg-white'
              }`}
              onClick={() => handleSelectOption(option.id)}
              onMouseEnter={() => setHoveredOption(option.id)}
              onMouseLeave={() => setHoveredOption(null)}
            >
              <div className="p-5">
                <div className="flex items-start gap-4">
                  <div className={`p-2 rounded-lg ${
                    isSelected 
                      ? 'bg-soccerix-teal text-white' 
                      : 'bg-soccerix-gray text-soccerix-teal'
                  }`}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{option.title}</h3>
                    <p className="text-sm text-gray-600">{option.description}</p>
                  </div>
                </div>

                {(isHovered || isSelected) && isVideoUploaded && (
                  <div className="absolute bottom-2 right-2 text-xs text-soccerix-teal font-medium flex items-center gap-1 animate-fade-in">
                    {isSelected ? 'Selected' : 'Select'}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {!isVideoUploaded && (
        <div className="mt-5 flex items-center gap-2 justify-center text-amber-600 p-3 bg-amber-50 rounded-lg animate-fade-in">
          <Info size={18} />
          <p className="text-sm font-medium">Upload a video first to unlock analysis options</p>
        </div>
      )}
    </div>
  );
};

export default AnalysisPanel;
