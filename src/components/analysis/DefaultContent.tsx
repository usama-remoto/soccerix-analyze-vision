
import React from 'react';
import { Info } from 'lucide-react';

const DefaultContent: React.FC = () => {
  return (
    <div className="p-12 rounded-xl bg-soccerix-gray flex flex-col items-center justify-center text-center">
      <div className="text-soccerix-teal mb-4">
        <Info size={48} />
      </div>
      <h3 className="text-xl font-medium mb-2">No Option Selected</h3>
      <p className="text-gray-600">Select an analysis option from the panel above</p>
    </div>
  );
};

export default DefaultContent;
