import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">
              Cookie <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold font-display mb-4">What Are Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Cookies are small text files stored on your device when you visit a website. 
                  They help the website remember your preferences and provide a better experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">How We Use Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Movmash uses cookies for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li><strong>Authentication:</strong> To keep you signed in during your session</li>
                  <li><strong>Preferences:</strong> To remember your settings and preferences</li>
                  <li><strong>Analytics:</strong> To understand how our service is used and improve it</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Types of Cookies We Use</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for the service to function</li>
                  <li><strong>Functional Cookies:</strong> Remember your preferences</li>
                  <li><strong>Analytics Cookies:</strong> Help us improve our service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Managing Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You can control and delete cookies through your browser settings. Note that 
                  disabling certain cookies may affect the functionality of Movmash.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about our cookie policy, contact us at{" "}
                  <a href="mailto:support@movmash.com" className="text-primary hover:underline">
                    support@movmash.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
