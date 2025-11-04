import { useState } from "react";
import { Heart, Apple, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditsDisplay } from "@/components/CreditsDisplay";
import { toast } from "sonner";

interface WellnessData {
  age: string;
  diet: string;
  goal: string;
  steps: string;
}

const demoData: WellnessData = {
  age: "32",
  diet: "vegetarian",
  goal: "weight-loss",
  steps: "7500"
};

interface CitizenWellnessProps {
  demoMode: boolean;
}

export default function CitizenWellness({ demoMode }: CitizenWellnessProps) {
  const [formData, setFormData] = useState<WellnessData>(demoMode ? demoData : {
    age: "", diet: "", goal: "", steps: ""
  });
  const [showResults, setShowResults] = useState(demoMode);
  const [credits, setCredits] = useState(145);
  const [healthScore, setHealthScore] = useState(82);

  const handleAnalyze = () => {
    if (!formData.age || !formData.diet || !formData.goal) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    const score = Math.floor(Math.random() * 20) + 75;
    setHealthScore(score);
    setShowResults(true);
    setCredits(prev => prev + 10);
    toast.success("You earned +10 GreenHealth Credits!", {
      description: "Keep tracking your wellness for more rewards!"
    });
  };

  const getNutritionPlan = () => {
    const plans: { [key: string]: string[] } = {
      "weight-loss": [
        "Breakfast: Millet porridge with seasonal fruits (locally sourced)",
        "Lunch: Brown rice, dal, mixed vegetables from local farms, salad",
        "Snack: Roasted chana or fresh fruit",
        "Dinner: Roti, paneer curry (low fat), green vegetables"
      ],
      "muscle-gain": [
        "Breakfast: Sprouted moong, eggs/paneer, whole wheat toast",
        "Lunch: Chicken/tofu curry, quinoa, leafy greens, yogurt",
        "Snack: Protein smoothie with local fruits, nuts",
        "Dinner: Grilled fish/legumes, vegetables, brown rice"
      ],
      "maintain": [
        "Breakfast: Poha with vegetables, fresh juice",
        "Lunch: Balanced thali - roti, rice, dal, 2 vegetables, curd",
        "Snack: Seasonal fruits or sprouts",
        "Dinner: Light dinner with soup, roti, vegetable"
      ]
    };
    
    return plans[formData.goal] || plans["maintain"];
  };

  return (
    <div className="container py-8 space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-terracotta/10">
          <Heart className="w-6 h-6 text-terracotta" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">Citizen Wellness Panel</h2>
          <p className="text-muted-foreground">Nutrition plans based on locally grown, sustainable food</p>
        </div>
      </div>

      {showResults && (
        <CreditsDisplay credits={credits} level="Green Guardian" />
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Your Health Profile</CardTitle>
            <CardDescription>Tell us about yourself for personalized nutrition advice</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input 
                id="age" 
                type="number" 
                placeholder="32"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="diet">Diet Preference</Label>
              <Select value={formData.diet} onValueChange={(value) => setFormData({...formData, diet: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select diet type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                  <SelectItem value="non-vegetarian">Non-Vegetarian</SelectItem>
                  <SelectItem value="vegan">Vegan</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="goal">Health Goal</Label>
              <Select value={formData.goal} onValueChange={(value) => setFormData({...formData, goal: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your goal" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weight-loss">Weight Loss</SelectItem>
                  <SelectItem value="muscle-gain">Muscle Gain</SelectItem>
                  <SelectItem value="maintain">Maintain Health</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="steps">Daily Steps (avg)</Label>
              <Input 
                id="steps" 
                type="number" 
                placeholder="7500"
                value={formData.steps}
                onChange={(e) => setFormData({...formData, steps: e.target.value})}
              />
            </div>

            <Button onClick={handleAnalyze} className="w-full" variant="hero" size="lg">
              <Apple className="w-4 h-4" />
              Get My Nutrition Plan
            </Button>
          </CardContent>
        </Card>

        {showResults && (
          <div className="space-y-6">
            <Card className="shadow-card border-2 border-terracotta">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>GreenHealth Score</span>
                  <span className="text-4xl font-bold text-terracotta">{healthScore}</span>
                </CardTitle>
                <CardDescription>Your daily wellness rating</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="text-sm">Activity: {formData.steps} steps - Keep moving!</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-secondary" />
                    <span className="text-sm">You're earning rewards by choosing local food</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-hero">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Apple className="w-5 h-5 text-primary" />
                  Your Daily Nutrition Plan
                </CardTitle>
                <CardDescription>Based on {formData.diet} diet & locally sourced ingredients</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {getNutritionPlan().map((meal, idx) => (
                    <li key={idx} className="p-3 rounded-lg bg-card border border-border">
                      <span className="text-sm font-medium">{meal}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-3 rounded-lg bg-primary/10 border border-primary">
                  <p className="text-sm text-primary font-medium">
                    💡 Pro Tip: Eat more millet & leafy greens sourced locally for maximum nutrition and minimum carbon footprint!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}