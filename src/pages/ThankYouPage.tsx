import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h2>
      <p className="text-lg text-gray-600 mb-6">Your dataset has been successfully uploaded.</p>
      <Button
        onClick={() => navigate("/")}
        className="bg-health-500 hover:bg-health-600 text-white px-6 py-3"
      >
        Go to Home
      </Button>
    </div>
  );
};

export default ThankYouPage;
