import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Mail, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold font-display mb-2">Email Us</h3>
              <a href="mailto:support@movmash.com" className="text-muted-foreground hover:text-primary transition-colors">
                support@movmash.com
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold font-display mb-2">Social Media</h3>
              <p className="text-muted-foreground">
                @movmash on Twitter
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold font-display mb-2">Location</h3>
              <p className="text-muted-foreground">
                Remote-first company
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:support@movmash.com">
                Send us an Email
              </a>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
