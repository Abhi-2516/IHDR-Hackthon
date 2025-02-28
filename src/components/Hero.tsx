import { useState } from "react";
import { Upload, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar"; // Import Navbar Component

const Hero = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);

  const handleUpload = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".csv, .json, .xlsx";
    fileInput.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        toast({
          title: "Upload initiated",
          description: `Processing ${file.name}...`,
        });
      }
    };
    fileInput.click();
  };

  return (
    <div className="relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <div className="flex-1 animate-fade-in">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-health-600 bg-health-50 rounded-full">
              India's first comprehensive health data platform
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-health-900 leading-tight mb-6">
              Unlocking India's <span className="text-health-500">Health Data</span> for Innovation
            </h1>
            <p className="text-lg text-health-600 mb-8 max-w-2xl">
              A centralized platform to store, access, and analyze India-specific medical records, 
              research findings, and health trends for AI training, research, and healthcare innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => navigate("/upload")}
                className="bg-health-500 hover:bg-health-600 text-white px-8 py-6 text-lg"
                size="lg"
              >
                <Upload className="mr-2 h-5 w-5" />
                Upload Dataset
              </Button>
              <Button
                variant="outline"
                className="border-health-200 text-health-700 px-8 py-6 text-lg"
                size="lg"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex-1 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div
              className={`
                p-8 rounded-2xl border-2 border-dashed transition-all
                ${isDragging ? "border-health-500 bg-health-50/50" : "border-health-200 bg-white/80"} 
                backdrop-blur-sm shadow-lg
              `}
              // onDragOver={handleDragOver}
              // onDragLeave={handleDragLeave}
              // onDrop={handleDrop}
            >
              <div className="text-center">
                <Upload className="mx-auto h-16 w-16 text-health-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-health-800">
                  Drag and Drop Your Dataset
                </h3>
                <p className="text-health-600 mb-6">Support for CSV, JSON, and Excel files</p>
                <Button
                  onClick={handleUpload}
                  className="bg-white text-health-700 hover:bg-health-50 border border-health-200"
                >
                  Browse Files
                </Button>
                <p className="mt-4 text-xs text-health-500">Maximum file size: 500 MB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
