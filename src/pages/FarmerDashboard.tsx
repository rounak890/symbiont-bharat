import { useState } from "react";
import { Tractor, Droplet, Leaf, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

interface FarmerData {
  pH: string;
  moisture: string;
  nitrogen: string;
  phosphorus: string;
  potassium: string;
  cropType: string;
  location: string;
}

const demoData: FarmerData = {
  pH: "6.2",
  moisture: "45",
  nitrogen: "180",
  phosphorus: "35",
  potassium: "220",
  cropType: "wheat",
  location: "Punjab"
};

interface FarmerDashboardProps {
  demoMode: boolean;
}

export default function FarmerDashboard({ demoMode }: FarmerDashboardProps) {
  const [formData, setFormData] = useState<FarmerData>(demoMode ? demoData : {
    pH: "", moisture: "", nitrogen: "", phosphorus: "", potassium: "", cropType: "", location: ""
  });
  const [showResults, setShowResults] = useState(demoMode);
  const [ecoScore, setEcoScore] = useState(78);

  const handleAnalyze = () => {
    if (!formData.pH || !formData.cropType) {
      toast.error("Please fill in soil pH and crop type at minimum");
      return;
    }
    
    // Simulate AI analysis
    const score = Math.floor(Math.random() * 30) + 70;
    setEcoScore(score);
    setShowResults(true);
    toast.success("Analysis complete! Your personalized recommendations are ready.");
  };

  const getRecommendations = () => {
    const ph = parseFloat(formData.pH);
    const suggestions = [];
    
    if (ph < 6.0) {
      suggestions.push("Your soil is acidic. Add lime (calcium carbonate) to raise pH to 6.5-7.0 for optimal wheat growth.");
    } else if (ph > 7.5) {
      suggestions.push("Soil is alkaline. Add organic compost and sulfur to lower pH gradually.");
    } else {
      suggestions.push("Soil pH is in optimal range! Maintain with regular organic matter addition.");
    }
    
    suggestions.push("Based on NPK levels, add 40kg/acre of balanced fertilizer (10-26-26) before sowing.");
    suggestions.push("Moisture levels are good. Continue drip irrigation every 4-5 days.");
    
    return suggestions;
  };

  return (
    <div className="container py-8 space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
          <Tractor className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">Farmer Dashboard</h2>
          <p className="text-muted-foreground">Get AI-powered soil insights and crop recommendations</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Soil & Crop Details</CardTitle>
            <CardDescription>Enter your field measurements for AI analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="ph">Soil pH</Label>
                <Input 
                  id="ph" 
                  type="number" 
                  placeholder="6.5"
                  value={formData.pH}
                  onChange={(e) => setFormData({...formData, pH: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="moisture">Moisture (%)</Label>
                <Input 
                  id="moisture" 
                  type="number" 
                  placeholder="45"
                  value={formData.moisture}
                  onChange={(e) => setFormData({...formData, moisture: e.target.value})}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nitrogen">N (kg/ha)</Label>
                <Input 
                  id="nitrogen" 
                  type="number" 
                  placeholder="180"
                  value={formData.nitrogen}
                  onChange={(e) => setFormData({...formData, nitrogen: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phosphorus">P (kg/ha)</Label>
                <Input 
                  id="phosphorus" 
                  type="number" 
                  placeholder="35"
                  value={formData.phosphorus}
                  onChange={(e) => setFormData({...formData, phosphorus: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="potassium">K (kg/ha)</Label>
                <Input 
                  id="potassium" 
                  type="number" 
                  placeholder="220"
                  value={formData.potassium}
                  onChange={(e) => setFormData({...formData, potassium: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cropType">Crop Type</Label>
              <Select value={formData.cropType} onValueChange={(value) => setFormData({...formData, cropType: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select crop" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wheat">Wheat</SelectItem>
                  <SelectItem value="rice">Rice</SelectItem>
                  <SelectItem value="millet">Millet</SelectItem>
                  <SelectItem value="vegetables">Vegetables</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input 
                id="location" 
                placeholder="e.g., Punjab"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
            </div>

            <Button onClick={handleAnalyze} className="w-full" variant="hero" size="lg">
              <Leaf className="w-4 h-4" />
              Analyze Soil & Get Recommendations
            </Button>
          </CardContent>
        </Card>

        {showResults && (
          <div className="space-y-6">
            <Card className="shadow-card border-2 border-primary">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Eco Score</span>
                  <span className="text-4xl font-bold text-primary">{ecoScore}</span>
                </CardTitle>
                <CardDescription>Your current soil health rating</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Droplet className="w-5 h-5 text-primary" />
                    <span className="text-sm">Moisture: Optimal for {formData.cropType}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-secondary" />
                    <span className="text-sm">NPK Balance: Good with minor adjustments</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-hero">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-primary" />
                  AI Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {getRecommendations().map((rec, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                        {idx + 1}
                      </span>
                      <span className="text-sm">{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}