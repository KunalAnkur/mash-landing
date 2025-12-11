import { useState, useEffect } from "react";
import { Menu, X, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Features", href: "/#features", hash: "features" },
  { label: "How It Works", href: "/#how-it-works", hash: "how-it-works" },
  { label: "FAQ", href: "/#faq", hash: "faq" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation, then scroll to section
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#18181b]/90 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between relative">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 z-10">
            <img 
              src="/assets/logo.svg" 
              alt="Movmash Logo" 
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="text-xl md:text-2xl font-bold font-display text-gradient">Movmash</span>
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.hash)}
                className="text-white/70 hover:text-white transition-colors font-medium text-sm relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#e11d48] via-[#db2777] to-[#c026d3] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 z-10">
            <Button variant="ghost" asChild>
              <a href="https://app.movmash.com" target="_blank" rel="noopener noreferrer">
                Sign In
              </a>
            </Button>
            <Button variant="hero" asChild>
              <a href="https://app.movmash.com" target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4" />
                Start Party
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#18181b]/95 backdrop-blur-xl border-b border-white/10 py-6 px-4 animate-slide-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.hash)}
                  className="text-lg text-white/70 hover:text-white transition-colors font-medium py-2 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#e11d48] via-[#db2777] to-[#c026d3] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <Button variant="ghost" asChild className="w-full">
                  <a href="https://app.movmash.com" target="_blank" rel="noopener noreferrer">
                    Sign In
                  </a>
                </Button>
                <Button variant="hero" asChild className="w-full">
                  <a href="https://app.movmash.com" target="_blank" rel="noopener noreferrer">
                    <Play className="w-4 h-4" />
                    Start Party
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
