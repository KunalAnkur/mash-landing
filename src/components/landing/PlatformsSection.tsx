import { Youtube, Monitor, Film, Twitch, Tv } from "lucide-react";

const platforms = [
  { name: "YouTube", icon: Youtube },
  { name: "Vimeo", icon: Film },
  { name: "Twitch", icon: Twitch },
  { name: "Screen Share", icon: Monitor },
  { name: "Local Files", icon: Tv },
];

const PlatformsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(var(--purple)/0.1)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Works With{" "}
            <span className="text-gradient-accent">Everything</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From streaming platforms to your personal collection, watch anything together.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className="group flex items-center gap-3 px-6 py-4 rounded-xl glass glass-hover"
            >
              <platform.icon className="w-6 h-6 text-primary" />
              <span className="font-semibold">{platform.name}</span>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <p className="text-center text-muted-foreground mt-8">
          Plus HLS streams, Dailymotion, and any direct video URL
        </p>
      </div>
    </section>
  );
};

export default PlatformsSection;
