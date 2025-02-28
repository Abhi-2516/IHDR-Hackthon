import { useState } from "react";
import { Menu, X,Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@/store/auth"; // Import Auth Store

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
                <Database className="h-6 w-6 text-health-500" />
                <span className="font-semibold text-xl text-health-900">IHDR</span>
              </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Button variant="ghost" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button variant="ghost" onClick={() => navigate("/upload")}>
            Upload
          </Button>
          {isAuthenticated ? (
            <Button variant="ghost" onClick={() => navigate("/dashboard")}>
              Dashboard
            </Button>
          ) : null}
          <Button
            variant="outline"
            onClick={() => navigate(isAuthenticated ? "/dashboard" : "/signin")}
          >
            {isAuthenticated ? "Dashboard" : "Sign In"}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <X className="h-6 w-6 text-health-800" />
          ) : (
            <Menu className="h-6 w-6 text-health-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-4">
          <Button variant="ghost" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button variant="ghost" onClick={() => navigate("/upload")}>
            Upload
          </Button>
          {isAuthenticated ? (
            <Button variant="ghost" onClick={() => navigate("/dashboard")}>
              Dashboard
            </Button>
          ) : null}
          <Button
            variant="outline"
            onClick={() => navigate(isAuthenticated ? "/dashboard" : "/signin")}
          >
            {isAuthenticated ? "Dashboard" : "Sign In"}
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
