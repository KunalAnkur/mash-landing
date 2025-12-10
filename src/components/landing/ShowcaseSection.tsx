import appShowcase from "@/assets/app-showcase.jpg";

const ShowcaseSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,_hsl(var(--coral)/0.12)_0%,_transparent_60%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            See It In{" "}
            <span className="text-gradient">Action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A beautiful interface designed for watching together. Video, chat, and reactions — all in perfect harmony.
          </p>
        </div>

        {/* App Showcase Image */}
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-coral/20 via-purple/20 to-coral/20 blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
            
            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl">
              <img
                src={appShowcase}
                alt="Movmash app interface showing video player with chat and reactions"
                className="w-full h-auto"
              />
              
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Feature callouts */}
            <div className="absolute -left-4 top-1/4 hidden lg:block animate-slide-in-left">
              <div className="glass px-4 py-2 rounded-xl">
                <span className="text-sm font-medium">🎬 Synced Playback</span>
              </div>
            </div>
            
            <div className="absolute -right-4 top-1/3 hidden lg:block animate-slide-in-right">
              <div className="glass px-4 py-2 rounded-xl">
                <span className="text-sm font-medium">💬 Live Chat</span>
              </div>
            </div>
            
            <div className="absolute -right-4 bottom-1/3 hidden lg:block animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              <div className="glass px-4 py-2 rounded-xl">
                <span className="text-sm font-medium">🎉 Flying Reactions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
