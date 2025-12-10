import { Tv, Monitor, MessageCircle, Users, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Tv,
    title: "Sync Mode",
    description: "Watch YouTube, Vimeo, Twitch and more together. Perfect sync means everyone sees the same frame.",
    gradient: "from-coral to-amber",
  },
  {
    icon: Monitor,
    title: "Stream Mode",
    description: "Share your screen or local files. Perfect for Netflix, Disney+, or your personal video collection.",
    gradient: "from-purple to-coral",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Real-time messaging with typing indicators. Express yourself with emojis and stay connected.",
    gradient: "from-teal to-coral",
  },
  {
    icon: Users,
    title: "Private Rooms",
    description: "Create private rooms and invite only who you want. Your movie night, your rules.",
    gradient: "from-amber to-coral",
  },
  {
    icon: Shield,
    title: "No Installation",
    description: "Works in your browser. No downloads, no plugins. Just click and start watching together.",
    gradient: "from-coral to-purple",
  },
  {
    icon: Zap,
    title: "Animated Reactions",
    description: "Send emoji reactions that fly across the screen. Express joy, surprise, or love in real-time.",
    gradient: "from-purple to-teal",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,_hsl(var(--coral)/0.08)_0%,_transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Watch Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Two powerful modes, endless possibilities. Whether you're syncing YouTube or streaming Netflix, we've got you covered.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px] mb-4`}>
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
