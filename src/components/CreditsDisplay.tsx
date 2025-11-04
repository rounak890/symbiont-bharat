import { Award, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CreditsDisplayProps {
  credits: number;
  level: string;
}

export const CreditsDisplay = ({ credits, level }: CreditsDisplayProps) => {
  return (
    <Card className="p-4 bg-gradient-accent shadow-glow border-0 hover:scale-105 transition-all duration-300 animate-pulse-glow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-foreground/20 animate-float">
            <Award className="w-6 h-6 text-primary-foreground hover:rotate-12 transition-transform" />
          </div>
          <div>
            <p className="text-sm font-medium text-primary-foreground/80">GreenHealth Credits</p>
            <p className="text-2xl font-bold text-primary-foreground animate-pulse">{credits}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 hover:bg-primary-foreground/30 transition-all">
          <TrendingUp className="w-4 h-4 text-primary-foreground animate-pulse" />
          <span className="text-sm font-semibold text-primary-foreground">{level}</span>
        </div>
      </div>
    </Card>
  );
};