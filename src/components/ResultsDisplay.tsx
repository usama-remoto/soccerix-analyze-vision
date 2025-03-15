
import React from 'react';
import BirdsEyeView from './analysis/BirdsEyeView';
import VoronoiDiagram from './analysis/VoronoiDiagram';
import EventDetection from './analysis/EventDetection';
import BallAnalysis from './analysis/BallAnalysis';
import TeamAnalysis from './analysis/TeamAnalysis';
import ReportGeneration from './analysis/ReportGeneration';
import EmptySelection from './analysis/EmptySelection';
import DefaultContent from './analysis/DefaultContent';

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
    return <EmptySelection />;
  }

  const renderContent = () => {
    switch (analysisType) {
      case 'birdsEyeView':
        return <BirdsEyeView videoFile={videoFile} />;
        
      case 'voronoiDiagram':
        return <VoronoiDiagram videoFile={videoFile} />;
        
      case 'eventDetection':
        return <EventDetection />;
        
      case 'ballAnalysis':
        return <BallAnalysis />;
        
      case 'teamAnalysis':
        return <TeamAnalysis />;
        
      case 'report':
        return <ReportGeneration />;
        
      default:
        return <DefaultContent />;
    }
  };

  return (
    <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
      {renderContent()}
    </div>
  );
};

export default ResultsDisplay;
