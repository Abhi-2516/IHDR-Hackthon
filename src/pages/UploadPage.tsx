import { useState } from "react";
import { Upload, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    datasetTitle: "",
    organization: "",
    datasetSource: "",
    city: "",
    state: "",
    extraInfo: "",
  });
  const [errors, setErrors] = useState({
    datasetTitle: false,
    organization: false,
    datasetSource: false,
    city: false,
    state: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.value.trim() !== "") {
      setErrors((prev) => ({ ...prev, [e.target.name]: false }));
    }
  };

  const handleFileUpload = () => {
    // Validate required fields
    const newErrors = {
      datasetTitle: formData.datasetTitle.trim() === "",
      organization: formData.organization.trim() === "",
      datasetSource: formData.datasetSource.trim() === "",
      city: formData.city.trim() === "",
      state: formData.state.trim() === "",
    };

    setErrors(newErrors);

    // If any errors exist, stop submission
    if (Object.values(newErrors).some((error) => error)) {
      toast({ title: "Error", description: "Please fill all required fields correctly.", variant: "destructive" });
      return;
    }

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".csv, .json, .xlsx";
    fileInput.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        toast({ title: "Upload initiated", description: `Processing ${file.name}...` });

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
      <p className="text-gray-600 text-center mb-6">Fill in the details before uploading.</p>

      <div className="space-y-4">
        <input
          type="text"
          name="datasetTitle"
          placeholder="Dataset Title *"
          value={formData.datasetTitle}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.datasetTitle ? "border-red-500" : "focus:ring-health-500"}`}
        />
        {errors.datasetTitle && <p className="text-red-500 text-sm">Dataset Title is required.</p>}

        <input
          type="text"
          name="organization"
          placeholder="Your Organization Name *"
          value={formData.organization}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.organization ? "border-red-500" : "focus:ring-health-500"}`}
        />
        {errors.organization && <p className="text-red-500 text-sm">Organization Name is required.</p>}

        <input
          type="text"
          name="datasetSource"
          placeholder="Dataset Source * (e.g., Government, Research, Private Study)"
          value={formData.datasetSource}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.datasetSource ? "border-red-500" : "focus:ring-health-500"}`}
        />
        {errors.datasetSource && <p className="text-red-500 text-sm">Dataset Source is required.</p>}

        <input
          type="text"
          name="city"
          placeholder="City *"
          value={formData.city}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.city ? "border-red-500" : "focus:ring-health-500"}`}
        />
        {errors.city && <p className="text-red-500 text-sm">City is required.</p>}

        <input
          type="text"
          name="state"
          placeholder="State *"
          value={formData.state}
          onChange={handleChange}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.state ? "border-red-500" : "focus:ring-health-500"}`}
        />
        {errors.state && <p className="text-red-500 text-sm">State is required.</p>}

        <textarea
          name="extraInfo"
          placeholder="Any extra information you want to provide (Optional)"
          value={formData.extraInfo}
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
        <ArrowLeft className="mr-2 h-5 w-5" /> Go Home Page
      </Button>
    </div>
  );
};

export default UploadPage;
