import { Tv, Monitor, MessageCircle, Users, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Tv,
    title: "Sync Mode",
    description: "Watch YouTube, Vimeo, Twitch and more together. Perfect sync means everyone sees the same frame.",
    gradient: "from-rose-400 to-pink-400",
  },
  {
    icon: Monitor,
    title: "Stream Mode",
    description: "Share your screen or local files. Perfect for Netflix, Disney+, or your personal video collection.",
    gradient: "from-pink-400 to-fuchsia-400",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Real-time messaging with typing indicators. Express yourself with emojis and stay connected.",
    gradient: "from-fuchsia-400 to-violet-400",
  },
  {
    icon: Users,
    title: "Private Rooms",
    description: "Create private rooms and invite only who you want. Your movie night, your rules.",
    gradient: "from-rose-400 to-fuchsia-400",
  },
  {
    icon: Shield,
    title: "No Installation",
    description: "Works in your browser. No downloads, no plugins. Just click and start watching together.",
    gradient: "from-pink-400 to-rose-400",
  },
  {
    icon: Zap,
    title: "Animated Reactions",
    description: "Send emoji reactions that fly across the screen. Express joy, surprise, or love in real-time.",
    gradient: "from-fuchsia-400 to-pink-400",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden bg-[#18181b]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_rgba(244,114,182,0.08)_0%,_transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 text-white">
            Everything You Need to{" "}
            <span className="text-gradient">Watch Together</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Two powerful modes, endless possibilities. Whether you're syncing YouTube or streaming Netflix, we've got you covered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-pink-400/30 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px] mb-4`}>
                <div className="w-full h-full rounded-xl bg-[#18181b] flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-pink-400" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold font-display mb-2 text-white group-hover:text-gradient transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
