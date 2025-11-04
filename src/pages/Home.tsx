import { Link } from "react-router-dom";
import { Tractor, Heart, Recycle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-sustainability.jpg";
import SymbioticCycle from "@/components/SymbioticCycle";

export default function Home() {
  const features = [
    {
      icon: Tractor,
      title: "Farmer Dashboard",
      description: "AI-powered soil analysis, fertilizer suggestions, and crop recommendations based on real-time data",
      link: "/farmer",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Heart,
      title: "Citizen Wellness",
      description: "Personalized nutrition plans using locally grown food. Earn GreenHealth Credits for sustainable choices",
      link: "/citizen",
      color: "text-terracotta",
      bgColor: "bg-terracotta/10"
    },
    {
      icon: Recycle,
      title: "Municipal Dashboard",
      description: "Track compost contributions, optimize allocation to farms, and reward community participants",
      link: "/municipal",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
        </div>
        
        <div className="container py-16 md:py-24 relative z-10">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div className="space-y-6 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card animate-pulse-glow">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-primary">AI-Powered Sustainability Platform</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Where People, Plants & AI{" "}
                <span className="text-primary">Grow Together</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Connect farmers, citizens, and municipalities through data and AI insights. 
                Improve soil health, nutrition, and sustainability—all in one platform.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild className="hover:scale-105 transition-transform">
                  <Link to="/farmer">Explore Dashboards</Link>
                </Button>
                <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
                  Watch Demo
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="absolute -inset-4 bg-gradient-primary rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
              <img 
                src={heroImage} 
                alt="Sustainable agriculture with farmers and nature" 
                className="rounded-2xl shadow-glow w-full h-auto relative z-10 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Symbiotic Cycle Section */}
      <section className="container py-16">
        <SymbioticCycle />
      </section>

      {/* Features Section */}
      <section className="container py-16 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Three Pillars of <span className="text-primary">Symbiotic Growth</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Linking agriculture, health, and waste management for a sustainable future
            </p>
          </div>

        <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={idx} 
                  className="shadow-card hover:shadow-glow transition-all duration-500 group hover:scale-105 hover:-translate-y-2 animate-slide-up border-2 hover:border-primary/50"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-full ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                    <CardDescription className="min-h-[60px]">{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="card" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all" asChild>
                      <Link to={feature.link}>Open Dashboard</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="relative bg-gradient-primary py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
        </div>
        
        <div className="container relative z-10">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground animate-slide-up">
              Grow with Your Community
            </h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { number: "2,450kg", label: "Compost Collected Monthly", icon: "♻️" },
                { number: "847+", label: "Active Citizens", icon: "👥" },
                { number: "34", label: "Farms Connected", icon: "🌾" }
              ].map((stat, idx) => (
                <div 
                  key={idx} 
                  className="space-y-2 glass-card-dark p-6 rounded-2xl hover:scale-110 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="text-5xl mb-2 animate-float" style={{ animationDelay: `${idx * 0.5}s` }}>{stat.icon}</div>
                  <p className="text-4xl md:text-5xl font-bold text-primary-foreground animate-pulse">{stat.number}</p>
                  <p className="text-primary-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}