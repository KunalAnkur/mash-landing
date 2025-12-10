import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-8">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-muted-foreground mb-8">Last updated: December 2024</p>

            <div className="prose prose-invert max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold font-display mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  When you use Movmash, we collect minimal information necessary to provide our service:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Basic profile information from Google Sign-In (name, email, profile picture)</li>
                  <li>Room activity data (creation times, participant counts)</li>
                  <li>Chat messages within rooms (temporarily stored during active sessions)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the collected information solely to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Provide and maintain the Movmash service</li>
                  <li>Enable room creation and participant management</li>
                  <li>Display your name and avatar to other room participants</li>
                  <li>Improve and optimize our service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">3. Data Storage & Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Your privacy and security are our priority:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                  <li>Local video files are never uploaded to our servers</li>
                  <li>Chat messages are not permanently stored</li>
                  <li>All data transmission is encrypted using industry-standard protocols</li>
                  <li>We do not sell or share your personal information with third parties</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">4. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to access, correct, or delete your personal data. 
                  Contact us at support@movmash.com to exercise these rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">5. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at{" "}
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

export default PrivacyPolicy;
