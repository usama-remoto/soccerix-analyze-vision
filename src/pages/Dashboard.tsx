
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, UploadCloud, FileText } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import VideoUploader from '@/components/VideoUploader';
import AnalysisPanel from '@/components/AnalysisPanel';
import ResultsDisplay from '@/components/ResultsDisplay';

type AnalysisType = 
  | 'birdsEyeView' 
  | 'voronoiDiagram' 
  | 'eventDetection' 
  | 'ballAnalysis' 
  | 'teamAnalysis' 
  | 'report';

const Dashboard = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [selectedAnalysis, setSelectedAnalysis] = useState<AnalysisType | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Handle video upload
  const handleVideoUpload = (file: File) => {
    setVideoFile(file);
    setSelectedAnalysis(null);
    simulateAnalysis();
  };

  // Simulate video analysis process
  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    toast.info('Video analysis in progress...', { duration: 2000 });
    
    setTimeout(() => {
      setIsAnalyzing(false);
      toast.success('Video analysis complete!');
    }, 2500);
  };

  // Handle analysis selection
  const handleSelectAnalysis = (type: AnalysisType) => {
    setSelectedAnalysis(type);
    
    if (type === 'report') {
      toast.info('Preparing report...');
    }
  };

  // Reset all state
  const resetAnalysis = () => {
    setVideoFile(null);
    setSelectedAnalysis(null);
  };

  return (
    <div className="min-h-screen bg-soccerix-gray/10">
      <Navbar />
      
      <main className="content-container pt-24 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Link to="/" className="mr-4 p-2 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors">
              <ChevronLeft size={20} />
            </Link>
            <h1 className="text-3xl font-bold">Analysis Dashboard</h1>
          </div>
          
          {videoFile && (
            <div className="flex gap-3">
              <button 
                onClick={resetAnalysis}
                className="btn-secondary"
              >
                <span className="flex items-center gap-2">
                  <UploadCloud size={18} />
                  New Upload
                </span>
              </button>
              
              <Link 
                to="/report" 
                className="btn-primary"
              >
                <span className="flex items-center gap-2">
                  <FileText size={18} />
                  Generate Report
                </span>
              </Link>
            </div>
          )}
        </div>
        
        <div className="mb-10">
          <div className={`bg-white rounded-xl shadow-sm p-8 transition-all duration-500 ${videoFile ? 'max-h-40 opacity-80 overflow-hidden' : ''}`}>
            <h2 className="text-xl font-bold mb-6 text-center">Upload Match Video</h2>
            <VideoUploader onVideoUpload={handleVideoUpload} />
          </div>
        </div>
        
        {videoFile && (
          <div className="animate-fade-in">
            <div className="mb-6">
              <AnalysisPanel 
                onSelectAnalysis={handleSelectAnalysis}
                selectedAnalysis={selectedAnalysis}
                isVideoUploaded={!!videoFile && !isAnalyzing}
              />
            </div>
            
            <ResultsDisplay 
              analysisType={selectedAnalysis}
              videoFile={videoFile}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
