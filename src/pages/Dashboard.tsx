import Navbar from "@/components/Navbar";
import { useUser, SignedIn, SignOutButton, UserButton } from "@clerk/clerk-react";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [datasets, setDatasets] = useState<string[]>([
    "Health_Report_2024.csv",
    "COVID_Analysis.xlsx",
  ]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const newFile = event.target.files[0].name;
      setDatasets((prev) => [...prev, newFile]); // Add new file to the dataset list
      navigate("/upload"); // Redirect to UploadPage after file selection
    }
  };

  return (
    <SignedIn>
      {/* Navbar with UserButton */}
      <Navbar>
        <UserButton />
      </Navbar>

      <div className="flex min-h-screen bg-gray-100 px-8 pt-8 pb-8">
        {/* Left Sidebar - 30% */}
        <div className="w-1/4 bg-white shadow-md p-6 rounded-lg mt-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">User Profile</h2>
          <p className="text-gray-700">👤 {user?.fullName}</p>
          <p className="text-gray-500">📧 {user?.primaryEmailAddress?.emailAddress}</p>

          <hr className="my-4" />

          {/* Dynamically Updated Previous Datasets */}
          <h3 className="text-lg font-medium">📂 Previous Datasets</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            {datasets.map((file, index) => (
              <li key={index}>{file}</li>
            ))}
          </ul>

          <hr className="my-4" />

          <h3 className="text-lg font-medium">✅ Verification Documents</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Aadhar_Verified.pdf</li>
            <li>Hospital_License.png</li>
          </ul>

          <SignOutButton>
            <button className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
              Logout
            </button>
          </SignOutButton>
        </div>

        {/* Right Section - 70% */}
        <div className="w-3/4 flex justify-center items-center mt-6 mb-6">
          <div className="bg-white p-8 rounded-lg shadow-md w-3/5">
            <h1 className="text-2xl font-bold mb-6 text-center">Upload Your Dataset 📊</h1>

            {/* File Upload Section (Clickable Area) */}
            <div
              className="border-dashed border-2 border-gray-300 p-12 rounded-lg text-center cursor-pointer"
              onClick={() => navigate("/upload")} // Redirect on click
            >
              <p className="text-gray-500 mb-4">Drag & Drop your file here</p>
              <input
                type="file"
                className="hidden"
                id="fileUpload"
                onChange={handleFileUpload}
              />
              <label
                htmlFor="fileUpload"
                className="bg-blue-500 text-white px-6 py-2 rounded cursor-pointer hover:bg-blue-600"
              >
                Upload CSV File
              </label>
            </div>

            {/* Call to Action Text */}
            <p className="text-center text-gray-700 mt-6 font-medium">
              You need to provide some information to upload the CSV. Click on Upload to get started.
            </p>

            <p className="text-center text-gray-700 mt-6 font-medium">
              🛡️ Your dataset is secure and helps in strengthening India's National Health Center!
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </SignedIn>
  );
};

export default Dashboard;
