
import React, { useState, useRef } from 'react';
import { Upload, X, Check, Video } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface VideoUploaderProps {
  onVideoUpload: (file: File) => void;
}

const VideoUploader: React.FC<VideoUploaderProps> = ({ onVideoUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length) {
      processFile(files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      processFile(files[0]);
    }
  };

  const processFile = (file: File) => {
    // Validate file type
    if (!file.type.includes('video/')) {
      toast.error('Please upload a valid video file');
      return;
    }

    setUploadedFile(file);
    simulateUpload(file);
  };

  const simulateUpload = (file: File) => {
    setIsUploading(true);
    
    // Simulate upload process with timeout
    setTimeout(() => {
      setIsUploading(false);
      onVideoUpload(file);
      toast.success('Video uploaded successfully!');
    }, 2000);
  };

  const resetUpload = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="video/*"
        className="hidden"
      />
      
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={!uploadedFile ? triggerFileInput : undefined}
        className={cn(
          "border-2 border-dashed rounded-xl p-8 transition-all duration-300 text-center cursor-pointer",
          isDragging ? "border-soccerix-teal bg-soccerix-teal/5" : "border-soccerix-gray-dark",
          uploadedFile ? "bg-soccerix-gray/20" : "hover:bg-soccerix-gray/20"
        )}
      >
        {!uploadedFile ? (
          <div className="flex flex-col items-center">
            <div className="mb-4 p-4 rounded-full bg-soccerix-teal/10 text-soccerix-teal">
              <Upload size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Upload Match Video</h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Drag and drop your video file here, or click to browse
            </p>
            <p className="text-sm text-gray-500">
              Supports MP4, MOV, AVI (Max 1GB)
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="mb-4 p-4 rounded-full bg-soccerix-teal/10 text-soccerix-teal">
              {isUploading ? (
                <div className="w-8 h-8 border-4 border-soccerix-teal/30 border-t-soccerix-teal rounded-full animate-spin"></div>
              ) : (
                <Check size={32} className="text-soccerix-green" />
              )}
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {isUploading ? 'Uploading...' : 'Upload Complete'}
            </h3>
            <div className="flex items-center gap-2 p-2 px-3 bg-white rounded-lg shadow-sm mb-3">
              <Video size={20} className="text-soccerix-teal" />
              <span className="text-sm font-medium truncate max-w-[250px]">
                {uploadedFile.name}
              </span>
            </div>
            {!isUploading && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  resetUpload();
                }}
                className="text-sm text-soccerix-teal hover:text-soccerix-teal-light flex items-center gap-1"
              >
                <X size={14} />
                Remove
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoUploader;
