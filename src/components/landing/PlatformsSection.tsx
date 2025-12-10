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
    <section className="py-24 relative overflow-hidden bg-[#18181b]">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(232,121,249,0.08)_0%,_transparent_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-white">
            Works With{" "}
            <span className="text-gradient-accent">Everything</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            From streaming platforms to your personal collection, watch anything together.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="group flex items-center gap-3 px-6 py-4 rounded-xl glass glass-hover"
            >
              <platform.icon className="w-6 h-6 text-pink-400" />
              <span className="font-semibold text-white/70 group-hover:text-white transition-colors">{platform.name}</span>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <p className="text-center text-white/50 mt-8">
          Plus HLS streams, Dailymotion, and any direct video URL
        </p>
      </div>
    </section>
  );
};

export default PlatformsSection;
