import { Sprout, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  demoMode: boolean;
  onToggleDemo: () => void;
}

export const Header = ({ demoMode, onToggleDemo }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b glass-card">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-primary animate-pulse-glow group-hover:scale-110 transition-transform">
            <Sprout className="w-6 h-6 text-primary-foreground group-hover:rotate-12 transition-transform" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Symbiont Bharat</h1>
            <p className="text-xs text-muted-foreground">Where People, Plants & AI Grow Together</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant={demoMode ? "secondary" : "outline"} 
            size="sm"
            onClick={onToggleDemo}
            className="gap-2 hover:scale-110 transition-transform"
          >
            <Leaf className={`w-4 h-4 ${demoMode ? 'animate-pulse' : ''}`} />
            {demoMode ? "Demo Mode ON" : "Demo Mode OFF"}
          </Button>
        </div>
      </div>
    </header>
  );
};