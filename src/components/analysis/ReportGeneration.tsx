
import React from 'react';
import { FileText, Info, Download } from 'lucide-react';

const ReportGeneration: React.FC = () => {
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
};

export default ReportGeneration;
