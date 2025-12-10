import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Heart, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6 text-center">
              About <span className="text-gradient">Movmash</span>
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-16">
              Bringing people together through shared experiences.
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Movmash was born from a simple idea: distance shouldn't keep friends and family 
                  from enjoying movies together. We believe that shared experiences create lasting 
                  bonds, and watching something together — even when apart — can feel just as 
                  meaningful as being in the same room.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">What We Do</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We've built a platform that makes virtual watch parties effortless. Whether you're 
                  syncing a YouTube video, sharing your screen to watch Netflix, or streaming your 
                  personal video collection, Movmash keeps everyone perfectly in sync. Add in 
                  real-time chat and animated reactions, and it's the closest thing to being there.
                </p>
              </section>

              <div className="grid md:grid-cols-3 gap-6 my-16">
                <div className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold font-display mb-2">Built with Love</h3>
                  <p className="text-muted-foreground text-sm">
                    Every feature is designed with user experience in mind.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold font-display mb-2">Community First</h3>
                  <p className="text-muted-foreground text-sm">
                    We listen to our users and build what matters to them.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-card/50 border border-border/50 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold font-display mb-2">Always Improving</h3>
                  <p className="text-muted-foreground text-sm">
                    We're constantly adding new features and improvements.
                  </p>
                </div>
              </div>

              <section>
                <h2 className="text-2xl font-bold font-display mb-4">Join Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether it's movie night with friends, a family gathering, or watching the latest 
                  episode with your online community, Movmash is here to make it happen. We're 
                  excited to be part of your shared moments.
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

export default About;
