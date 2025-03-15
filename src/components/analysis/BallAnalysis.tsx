
import React from 'react';
import { Activity, Info, MapPin } from 'lucide-react';

const BallAnalysis: React.FC = () => {
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
};

export default BallAnalysis;
