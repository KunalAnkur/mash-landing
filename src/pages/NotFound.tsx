import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_hsl(var(--coral)/0.1)_0%,_transparent_70%)]" />
      </div>

      <div className="text-center px-4 relative z-10">
        <div className="text-8xl mb-4">🎬</div>
        <h1 className="text-7xl md:text-9xl font-bold font-display text-gradient mb-4">404</h1>
        <p className="text-2xl font-semibold mb-2">Scene Not Found</p>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Looks like this page took an unexpected intermission. Let's get you back to the main feature.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" asChild>
            <Link to="/">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <a href="javascript:history.back()">
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
