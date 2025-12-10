import { Link, Play, Share2, Users } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Link,
    title: "Create or Join",
    description: "Start a new watch party by pasting a video link, or join an existing room with a shared link.",
    color: "coral",
  },
  {
    number: "02",
    icon: Share2,
    title: "Invite Friends",
    description: "Share your unique room link with friends. They can join instantly — no account required to watch.",
    color: "amber",
  },
  {
    number: "03",
    icon: Play,
    title: "Watch Together",
    description: "Hit play and enjoy perfectly synced playback. Chat, react, and experience it together.",
    color: "purple",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Start in{" "}
            <span className="text-gradient">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No complicated setup. No downloads. Just share and watch.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-coral via-amber to-purple hidden md:block" />

            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative flex items-start gap-6 mb-12 last:mb-0"
              >
                {/* Number Circle */}
                <div className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-2xl bg-${step.color} flex items-center justify-center shadow-lg shadow-${step.color}/30`}>
                  <step.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="text-sm font-bold text-primary mb-1">STEP {step.number}</div>
                  <h3 className="text-2xl font-bold font-display mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
