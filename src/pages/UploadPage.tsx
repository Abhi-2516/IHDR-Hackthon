import { useState } from "react";
import { Upload, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    datasetTitle: "",
    organization: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileUpload = () => {
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

        // Simulate upload delay and redirect after upload
        setTimeout(() => {
          navigate("/thank-you");
        }, 2000);
      }
    };
    fileInput.click();
  };

  return (
    <div className="max-w-xl mx-auto mt-20 p-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Upload Your Dataset</h2>
      <p className="text-gray-600 text-center mb-6">Fill in the details below before uploading your dataset.</p>
      
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-health-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-health-500"
        />
        <input
          type="text"
          name="contact"
          placeholder="Your Contact Number"
          value={formData.contact}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-health-500"
        />
        <input
          type="text"
          name="datasetTitle"
          placeholder="Dataset Title"
          value={formData.datasetTitle}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-health-500"
        />
        <input
          type="text"
          name="organization"
          placeholder="Organization (e.g., College, Institution, Company)"
          value={formData.organization}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-health-500"
        />
      </div>

      <Button
        onClick={handleFileUpload}
        className="bg-health-500 hover:bg-health-600 text-white w-full py-3 mt-6 text-lg rounded-lg flex items-center justify-center"
      >
        <Upload className="mr-2 h-5 w-5" /> Upload Dataset
      </Button>
      
      <Button
        variant="outline"
        onClick={() => navigate("/")}
        className="mt-4 w-full flex items-center justify-center py-3 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100"
      >
        <ArrowLeft className="mr-2 h-5 w-5" /> Go Back
      </Button>
    </div>
  );
};

export default UploadPage;