
import React from 'react';

interface EventStatRowProps {
  title: string;
  teamA: number;
  teamB: number;
}

const EventStatRow: React.FC<EventStatRowProps> = ({ title, teamA, teamB }) => {
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

export default EventStatRow;
