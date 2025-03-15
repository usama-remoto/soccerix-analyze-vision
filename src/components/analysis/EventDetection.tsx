
import React from 'react';
import { Flag, Info, BarChart3, PieChart } from 'lucide-react';
import EventStatRow from './EventStatRow';

const EventDetection: React.FC = () => {
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
};

export default EventDetection;
