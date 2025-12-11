import { Twitter, Github, Instagram, Youtube, Mail } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const footerLinks = {
  product: [
    { label: "Features", href: "/#features", hash: "features" },
    { label: "How It Works", href: "/#how-it-works", hash: "how-it-works" },
    { label: "FAQ", href: "/#faq", hash: "faq" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/movmash", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/movmash", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@movmash", label: "YouTube" },
  { icon: Github, href: "https://github.com/movmash", label: "GitHub" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleProductLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
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
  };

  return (
    <footer className="bg-[#18181b]/80 border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold font-display text-gradient">Movmash</span>
            </Link>
            <p className="text-white/60 mb-6 max-w-sm">
              Watch videos together with friends and family, no matter where they are. 
              Real-time sync, live chat, and animated reactions.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:text-rose-400 hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold font-display mb-4 text-white">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleProductLinkClick(e, link.hash)}
                    className="text-white/50 hover:text-rose-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold font-display mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/50 hover:text-rose-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold font-display mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/50 hover:text-rose-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © {currentYear} Movmash. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-white/50">
            <Mail className="w-4 h-4" />
            <a href="mailto:support@movmash.com" className="hover:text-rose-400 transition-colors">
              support@movmash.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
