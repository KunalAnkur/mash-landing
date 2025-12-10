import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">
              Terms of <span className="text-gradient">Service</span>
            </h1>
            <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold font-display mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using Movmash, you agree to be bound by these Terms of Service. 
                  If you do not agree to these terms, please do not use our service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">2. Description of Service</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Movmash is a watch party platform that enables users to watch videos together 
                  in real-time. Our service includes synchronized video playback, live chat, 
                  and screen sharing capabilities.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">3. User Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When using Movmash, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Only share content you have the right to share</li>
                  <li>Respect copyright and intellectual property rights</li>
                  <li>Not use the service for illegal or harmful purposes</li>
                  <li>Not attempt to disrupt or compromise the service</li>
                  <li>Treat other users with respect in chat and interactions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">4. Content Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You are responsible for the content you share through Movmash. We do not 
                  pre-screen content, but we reserve the right to remove content that violates 
                  these terms or is deemed inappropriate.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Movmash and its original content, features, and functionality are owned by 
                  Movmash and are protected by international copyright, trademark, and other 
                  intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Movmash is provided "as is" without warranties of any kind. We are not 
                  responsible for any damages or losses resulting from your use of the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">7. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Continued use of the 
                  service after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">8. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, contact us at{" "}
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

export default TermsOfService;
