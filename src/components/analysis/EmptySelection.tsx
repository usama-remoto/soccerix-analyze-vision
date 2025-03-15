
import React from 'react';
import { LayoutGrid } from 'lucide-react';

const EmptySelection: React.FC = () => {
  return (
    <div className="mt-8 p-12 rounded-xl bg-soccerix-gray flex flex-col items-center justify-center text-center">
      <div className="text-soccerix-teal mb-4">
        <LayoutGrid size={48} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-medium mb-2">Select an Analysis Option</h3>
      <p className="text-gray-600">Choose an analysis option from the panel above to view results</p>
    </div>
  );
};

export default EmptySelection;
