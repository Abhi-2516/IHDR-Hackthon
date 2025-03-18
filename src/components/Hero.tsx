import { useState } from "react";
import { Upload, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar"; // Import Navbar Component
import SearchBar from "@/pages/SearchBar";

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
      
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-health-900 leading-tight mb-6 mt-36 mx-24">
        Unlocking India's <span className="text-health-500">Health Data</span> for Innovation
      </h1>
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 my-10  flex">

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Section */}
          <div className="flex-1 animate-fade-in">

            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-health-600 bg-health-50 rounded-full">
              India's first comprehensive health data platform
            </div>

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

        </div>

        <div className="flex-1 animate-fade-in my-10" style={{ animationDelay: "0.3s" }}>
        <div className="flex flex-col items-center justify-center text-center p-6">
      <div className="text-health-600 w-32 h-32">
      <svg
      width="100"
      height="100"
      viewBox="0 -4.04 52.096 52.096"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(-375.854 -205.496)">
        <path
          d="M379.139,206.792h45.525a1.989,1.989,0,0,1,1.99,1.989v33.011a1.99,1.99,0,0,1-1.99,1.989H379.139a1.99,1.99,0,0,1-1.989-1.989V208.781A1.989,1.989,0,0,1,379.139,206.792Z"
          fill="#ffffff"
          stroke="#ff0050"
          strokeMiterlimit="10"
          strokeWidth="2.592"
        />
        <path
          d="M383.8,212.6H420a.876.876,0,0,1,.876.875v21.876a.876.876,0,0,1-.876.875H383.8a.876.876,0,0,1-.876-.875V213.479A.876.876,0,0,1,383.8,212.6Z"
          fill="#ffffff"
          stroke="#ff0050"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.555"
        />
        <path
          d="M422.98,244.084v2.15a1.99,1.99,0,0,1-1.989,1.989H382.813a1.99,1.99,0,0,1-1.989-1.989v-2.15"
          fill="#ffffff"
          stroke="#ff0050"
          strokeMiterlimit="10"
          strokeWidth="2.592"
        />
        <path
          d="M416.84,224.526h-9.529l-2.838,5.42-5.2-12.321-3.714,6.9H387.6"
          fill="#ffffff"
          stroke="#ff0050"
          strokeLinejoin="round"
          strokeWidth="1.555"
        />
      </g>
    </svg>
        </div>
      </div>
        </div>

      </div>
      <SearchBar />
    </div>
  );
};

export default Hero;
