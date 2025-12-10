import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Coming soon! We're working on content to help you get the most out of Movmash.
            </p>

            <div className="p-12 rounded-2xl bg-card/50 border border-border/50">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-bold font-display mb-4">Stay Tuned</h2>
              <p className="text-muted-foreground">
                We're preparing articles about watch party tips, feature updates, and community stories. 
                Follow us on social media to be the first to know!
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
