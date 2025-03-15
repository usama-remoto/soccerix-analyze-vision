
import React from 'react';
import { 
  Download, 
  Info, 
  BarChart3, 
  PieChart,
  Activity,
  MapPin,
  Network,
  LayoutGrid
} from 'lucide-react';

type AnalysisType = 
  | 'birdsEyeView' 
  | 'voronoiDiagram' 
  | 'eventDetection' 
  | 'ballAnalysis' 
  | 'teamAnalysis' 
  | 'report';

interface ResultsDisplayProps {
  analysisType: AnalysisType | null;
  videoFile: File | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ analysisType, videoFile }) => {
  
  if (!analysisType) {
    return (
      <div className="mt-8 p-12 rounded-xl bg-soccerix-gray flex flex-col items-center justify-center text-center">
        <div className="text-soccerix-teal mb-4">
          <LayoutGrid size={48} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-medium mb-2">Select an Analysis Option</h3>
        <p className="text-gray-600">Choose an analysis option from the panel above to view results</p>
      </div>
    );
  }

  // Render content based on selected analysis type
  const renderContent = () => {
    switch (analysisType) {
      case 'birdsEyeView':
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
        
      case 'voronoiDiagram':
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
        
      case 'eventDetection':
        return (
          <div className="animate-fade-in">
            <div className="mb-6 flex items-center gap-2">
              <div className="p-2 rounded-lg bg-soccerix-teal/10 text-soccerix-teal">
                <Flag size={20} />
              </div>
              <h3 className="text-xl font-semibold">Event Detection</h3>
            </div>
            
            <div className="mb-4 p-4 bg-soccerix-gray/50 rounded-lg">
              <div className="flex items-start gap-2 text-sm">
                <Info size={16} className="text-soccerix-teal mt-0.5" />
                <p>Event detection automatically identifies key moments in the match, including goals, corners, free kicks, and other significant events with precise timestamps.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-lg bg-white p-5 shadow-sm">
                <h4 className="font-medium mb-4">Event Statistics</h4>
                <div className="divide-y">
                  <EventStatRow title="Goals" teamA={2} teamB={1} />
                  <EventStatRow title="Corners" teamA={5} teamB={3} />
                  <EventStatRow title="Free Kicks" teamA={7} teamB={9} />
                </div>
              </div>
              
              <div className="rounded-lg bg-white p-5 shadow-sm">
                <h4 className="font-medium mb-4">Event Timeline</h4>
                <div className="bg-gray-100 h-48 rounded flex items-center justify-center">
                  <BarChart3 size={32} className="text-gray-400" />
                </div>
                <div className="mt-2 text-center text-sm text-gray-500">
                  Event timestamp graph will appear here
                </div>
              </div>
              
              <div className="rounded-lg bg-white p-5 shadow-sm lg:col-span-2">
                <h4 className="font-medium mb-4">Team Event Distribution</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-sm font-medium mb-2 text-center">Team A</h5>
                    <div className="bg-gray-100 h-48 rounded flex items-center justify-center">
                      <PieChart size={32} className="text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium mb-2 text-center">Team B</h5>
                    <div className="bg-gray-100 h-48 rounded flex items-center justify-center">
                      <PieChart size={32} className="text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'ballAnalysis':
        return (
          <div className="animate-fade-in">
            <div className="mb-6 flex items-center gap-2">
              <div className="p-2 rounded-lg bg-soccerix-teal/10 text-soccerix-teal">
                <Activity size={20} />
              </div>
              <h3 className="text-xl font-semibold">Ball Analysis</h3>
            </div>
            
            <div className="mb-4 p-4 bg-soccerix-gray/50 rounded-lg">
              <div className="flex items-start gap-2 text-sm">
                <Info size={16} className="text-soccerix-teal mt-0.5" />
                <p>Ball analysis tracks the movement and possession of the ball throughout the match, providing insights into team dominance, playing style, and strategic patterns.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="rounded-lg bg-white p-5 shadow-sm lg:col-span-3">
                <h4 className="font-medium mb-4">Ball Possession</h4>
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Team A</span>
                      <span className="text-sm font-medium">58%</span>
                    </div>
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-soccerix-teal rounded-full" style={{ width: '58%' }}></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Team B</span>
                      <span className="text-sm font-medium">42%</span>
                    </div>
                    <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-soccerix-green rounded-full" style={{ width: '42%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg bg-white p-5 shadow-sm">
                <h4 className="font-medium mb-4">Ball Trajectory</h4>
                <div className="bg-gray-100 h-48 rounded flex items-center justify-center">
                  <MapPin size={32} className="text-gray-400" />
                </div>
                <div className="mt-2 text-center text-sm text-gray-500">
                  Ball trajectory map will appear here
                </div>
              </div>
              
              <div className="lg:col-span-2 rounded-lg bg-white p-5 shadow-sm">
                <h4 className="font-medium mb-4">Heat Maps</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="text-sm font-medium mb-2 text-center">First Half</h5>
                    <div className="bg-gray-100 h-32 rounded flex items-center justify-center">
                      <Activity size={24} className="text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium mb-2 text-center">Second Half</h5>
                    <div className="bg-gray-100 h-32 rounded flex items-center justify-center">
                      <Activity size={24} className="text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium mb-2 text-center">Full Match</h5>
                    <div className="bg-gray-100 h-32 rounded flex items-center justify-center">
                      <Activity size={24} className="text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'teamAnalysis':
        return (
          <div className="animate-fade-in">
            <div className="mb-6 flex items-center gap-2">
              <div className="p-2 rounded-lg bg-soccerix-teal/10 text-soccerix-teal">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-semibold">Team Tactical Analysis</h3>
            </div>
            
            <div className="mb-4 p-4 bg-soccerix-gray/50 rounded-lg">
              <div className="flex items-start gap-2 text-sm">
                <Info size={16} className="text-soccerix-teal mt-0.5" />
                <p>Team tactical analysis evaluates team formations, transitions between zones, player positioning, and overall strategic approaches throughout the match.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="rounded-lg bg-white p-5 shadow-sm">
                <h4 className="font-medium mb-4">Zone Representations</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-sm font-medium mb-2 text-center">Team A</h5>
                    <div className="bg-gray-100 h-48 rounded flex items-center justify-center">
                      <LayoutGrid size={32} className="text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium mb-2 text-center">Team B</h5>
                    <div className="bg-gray-100 h-48 rounded flex items-center justify-center">
                      <LayoutGrid size={32} className="text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg bg-white p-5 shadow-sm">
                <h4 className="font-medium mb-4">Network Graphs</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-sm font-medium mb-2 text-center">Team A</h5>
                    <div className="bg-gray-100 h-48 rounded flex items-center justify-center">
                      <Network size={32} className="text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium mb-2 text-center">Team B</h5>
                    <div className="bg-gray-100 h-48 rounded flex items-center justify-center">
                      <Network size={32} className="text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg bg-white p-5 shadow-sm lg:col-span-2">
                <h4 className="font-medium mb-4">Steady State Distributions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-sm font-medium mb-2 text-center">Team A</h5>
                    <div className="bg-gray-100 h-48 rounded flex items-center justify-center">
                      <BarChart3 size={32} className="text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium mb-2 text-center">Team B</h5>
                    <div className="bg-gray-100 h-48 rounded flex items-center justify-center">
                      <BarChart3 size={32} className="text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'report':
        return (
          <div className="animate-fade-in">
            <div className="mb-6 flex items-center gap-2">
              <div className="p-2 rounded-lg bg-soccerix-teal/10 text-soccerix-teal">
                <FileText size={20} />
              </div>
              <h3 className="text-xl font-semibold">Generate Report</h3>
            </div>
            
            <div className="mb-4 p-4 bg-soccerix-gray/50 rounded-lg">
              <div className="flex items-start gap-2 text-sm">
                <Info size={16} className="text-soccerix-teal mt-0.5" />
                <p>Generate a comprehensive report containing all analysis results, visualizations, and insights from the match in a downloadable format.</p>
              </div>
            </div>
            
            <div className="text-center p-10 rounded-lg bg-white shadow-sm">
              <div className="w-20 h-20 rounded-full bg-soccerix-teal/10 flex items-center justify-center mx-auto mb-4">
                <FileText size={32} className="text-soccerix-teal" />
              </div>
              <h4 className="text-xl font-medium mb-2">Ready to Generate Report</h4>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                The report will include all analysis results including event detection, ball possession statistics, tactical analyses, and visualizations.
              </p>
              <button className="btn-primary">
                <span className="flex items-center gap-2">
                  <Download size={18} />
                  Generate Report
                </span>
              </button>
            </div>
          </div>
        );
        
      default:
        return (
          <div className="p-12 rounded-xl bg-soccerix-gray flex flex-col items-center justify-center text-center">
            <div className="text-soccerix-teal mb-4">
              <Info size={48} />
            </div>
            <h3 className="text-xl font-medium mb-2">No Option Selected</h3>
            <p className="text-gray-600">Select an analysis option from the panel above</p>
          </div>
        );
    }
  };

  return (
    <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
      {renderContent()}
    </div>
  );
};

const EventStatRow = ({ title, teamA, teamB }: { title: string, teamA: number, teamB: number }) => {
  return (
    <div className="py-3 flex items-center justify-between">
      <span className="font-medium">{title}</span>
      <div className="flex items-center gap-8">
        <span className="w-8 h-8 bg-soccerix-teal/10 rounded-full flex items-center justify-center text-soccerix-teal font-medium">
          {teamA}
        </span>
        <span className="text-gray-400">vs</span>
        <span className="w-8 h-8 bg-soccerix-green/10 rounded-full flex items-center justify-center text-soccerix-green font-medium">
          {teamB}
        </span>
      </div>
    </div>
  );
};

export default ResultsDisplay;
