import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/signin");
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Dashboard!</h2>
        <p className="text-gray-600 mb-4">You are successfully logged in.</p>
        <Button
          onClick={() => {
            logout();
            navigate("/signin");
          }}
          className="bg-red-500 hover:bg-red-600 text-white"
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
