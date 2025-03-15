
import React from 'react';
import { Users, Info, LayoutGrid, Network, BarChart3 } from 'lucide-react';

const TeamAnalysis: React.FC = () => {
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
};

export default TeamAnalysis;
