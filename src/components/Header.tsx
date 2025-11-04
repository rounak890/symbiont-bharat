import { Sprout, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  demoMode: boolean;
  onToggleDemo: () => void;
}

export const Header = ({ demoMode, onToggleDemo }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-primary">
            <Sprout className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">Symbiont Bharat</h1>
            <p className="text-xs text-muted-foreground">Where People, Plants & AI Grow Together</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <Button 
            variant={demoMode ? "secondary" : "outline"} 
            size="sm"
            onClick={onToggleDemo}
            className="gap-2"
          >
            <Leaf className="w-4 h-4" />
            {demoMode ? "Demo Mode ON" : "Demo Mode OFF"}
          </Button>
        </div>
      </div>
    </header>
  );
};