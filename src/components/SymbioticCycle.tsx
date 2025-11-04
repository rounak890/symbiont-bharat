import { Tractor, Heart, Recycle, ArrowRight } from "lucide-react";

export default function SymbioticCycle() {
  const cycles = [
    {
      icon: Tractor,
      title: "Farmers Grow",
      description: "Crops suitable for local soil & climate",
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/20",
      position: "top"
    },
    {
      icon: Heart,
      title: "Citizens Consume",
      description: "Locally grown nutritious food",
      color: "text-terracotta",
      bgColor: "bg-terracotta/10",
      borderColor: "border-terracotta/20",
      position: "right"
    },
    {
      icon: Recycle,
      title: "Waste Returns",
      description: "Compost enriches soil nutrients",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      borderColor: "border-secondary/20",
      position: "bottom"
    }
  ];

  return (
    <div className="relative py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          The <span className="text-primary">Symbiotic Cycle</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A closed-loop ecosystem where everyone benefits and nothing goes to waste
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Central Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-primary flex items-center justify-center z-10">
          <div className="text-center">
            <p className="text-sm md:text-base font-bold text-primary-foreground">AI-Powered</p>
            <p className="text-xs md:text-sm text-primary-foreground/80">Symbiosis</p>
          </div>
        </div>

        {/* Circular Arrow Path - SVG */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="hsl(var(--primary))" />
            </marker>
          </defs>
          {/* Circular path with arrows */}
          <path
            d="M 200 80 A 120 120 0 0 1 320 200 M 320 200 A 120 120 0 0 1 200 320 M 200 320 A 120 120 0 0 1 80 200 M 80 200 A 120 120 0 0 1 200 80"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.3"
            markerEnd="url(#arrowhead)"
            className="animate-pulse"
          />
        </svg>

        {/* Cycle Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
          {cycles.map((cycle, idx) => {
            const Icon = cycle.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className={`w-20 h-20 rounded-full ${cycle.bgColor} border-4 ${cycle.borderColor} flex items-center justify-center mb-4 hover:scale-110 transition-transform shadow-card`}>
                  <Icon className={`w-10 h-10 ${cycle.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{cycle.title}</h3>
                <p className="text-sm text-muted-foreground">{cycle.description}</p>
                
                {/* Connection Details */}
                <div className="mt-4 pt-4 border-t border-border w-full">
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <ArrowRight className="w-4 h-4" />
                    <span>
                      {idx === 0 && "Citizens get fresh crops"}
                      {idx === 1 && "Waste becomes compost"}
                      {idx === 2 && "Farmers get nutrients"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Insights */}
        <div className="mt-12 grid gap-4 md:grid-cols-3 text-sm">
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
            <p className="font-medium text-primary mb-2">🌾 Crop Matching</p>
            <p className="text-muted-foreground">AI suggests crops based on soil data and citizen dietary needs</p>
          </div>
          <div className="p-4 rounded-lg bg-terracotta/5 border border-terracotta/10">
            <p className="font-medium text-terracotta mb-2">🍽️ Demand Forecasting</p>
            <p className="text-muted-foreground">Citizen preferences guide farmers on what to grow next season</p>
          </div>
          <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/10">
            <p className="font-medium text-secondary mb-2">♻️ Waste Optimization</p>
            <p className="text-muted-foreground">Municipal compost enriches soil with exact nutrients needed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
