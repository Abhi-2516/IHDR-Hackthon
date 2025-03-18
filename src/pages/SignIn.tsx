import { SignIn, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignInPage = () => {
  const { isSignedIn } = useUser(); // Get user sign-in status
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      navigate("/dashboard"); // Redirect to Dashboard if signed in
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
      <SignIn />
    </div>
  </div>
  
  );
};

export default SignInPage;
