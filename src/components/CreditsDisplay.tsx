import { Award, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CreditsDisplayProps {
  credits: number;
  level: string;
}

export const CreditsDisplay = ({ credits, level }: CreditsDisplayProps) => {
  return (
    <Card className="p-4 bg-gradient-accent shadow-glow border-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-foreground/20">
            <Award className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <p className="text-sm font-medium text-primary-foreground/80">GreenHealth Credits</p>
            <p className="text-2xl font-bold text-primary-foreground">{credits}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20">
          <TrendingUp className="w-4 h-4 text-primary-foreground" />
          <span className="text-sm font-semibold text-primary-foreground">{level}</span>
        </div>
      </div>
    </Card>
  );
};