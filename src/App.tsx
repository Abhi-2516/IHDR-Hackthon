import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut, SignIn, SignUp, UserButton, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import UploadPage from "./pages/UploadPage";
import ThankYouPage from "./pages/ThankYouPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPublishableKey) {
  throw new Error("Missing Clerk Publishable Key. Check your .env file.");
}

// ✅ Protected Route - Redirects to sign-in if not logged in
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isSignedIn } = useUser();

  if (isSignedIn === undefined) return null; // Wait for Clerk to load
  return isSignedIn ? children : <Navigate to="/signin" replace />;
};

// ✅ SignIn Page with Auto-Redirect
const SignInPage = () => {
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      setTimeout(() => navigate("/dashboard"), 100); // Small delay ensures Clerk updates
    }
  }, [isSignedIn, navigate]);

  if (isSignedIn) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <SignedOut>
      <SignIn />
    </SignedOut>
  );
};

const App = () => (
  <ClerkProvider publishableKey={clerkPublishableKey}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <nav className="p-4 bg-white shadow-md flex justify-end">
            <UserButton afterSignOutUrl="/" /> {/* Displays user profile and logout option */}
          </nav>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />

            {/* ✅ Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Catch-All Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ClerkProvider>
);

export default App;
