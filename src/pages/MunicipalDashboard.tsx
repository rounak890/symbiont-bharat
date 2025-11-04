import { useState } from "react";
import { Recycle, Users, TrendingUp, MapPin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";

interface MunicipalDashboardProps {
  demoMode: boolean;
}

export default function MunicipalDashboard({ demoMode }: MunicipalDashboardProps) {
  const [totalCompost, setTotalCompost] = useState(2450);
  const [contributors, setContributors] = useState(847);
  const [allocated, setAllocated] = useState(1890);

  const compostData = [
    { zone: "North Zone", amount: 680, farms: 12 },
    { zone: "South Zone", amount: 540, farms: 9 },
    { zone: "East Zone", amount: 450, farms: 8 },
    { zone: "West Zone", amount: 220, farms: 5 }
  ];

  const topContributors = [
    { name: "Green Society Apartments", amount: 145, credits: 580 },
    { name: "Sunrise Community", amount: 128, credits: 512 },
    { name: "Park View Residency", amount: 112, credits: 448 }
  ];

  const handleAllocate = (zone: string) => {
    toast.success(`Compost allocation updated for ${zone}`, {
      description: "Local farms have been notified and will receive credits."
    });
  };

  return (
    <div className="container py-8 space-y-6">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-secondary/10">
          <Recycle className="w-6 h-6 text-secondary" />
        </div>
        <div>
          <h2 className="text-3xl font-bold">Municipal Compost Dashboard</h2>
          <p className="text-muted-foreground">Track citizen contributions and optimize farm allocation</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Compost</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">{totalCompost}</span>
              <span className="text-sm text-muted-foreground">kg/month</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">↑ 15% from last month</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Active Contributors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-secondary">{contributors}</span>
              <span className="text-sm text-muted-foreground">citizens</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2">↑ 23% from last month</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Allocated to Farms</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-terracotta">{allocated}</span>
              <span className="text-sm text-muted-foreground">kg</span>
            </div>
            <Progress value={(allocated / totalCompost) * 100} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Zone-wise Compost Distribution
            </CardTitle>
            <CardDescription>Allocate compost to local farms by zone</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {compostData.map((zone, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{zone.zone}</p>
                    <p className="text-sm text-muted-foreground">{zone.farms} farms connected</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-primary">{zone.amount}</p>
                    <p className="text-xs text-muted-foreground">kg available</p>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => handleAllocate(zone.zone)}
                >
                  Allocate to Farms
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-hero">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Top Contributors
            </CardTitle>
            <CardDescription>Communities leading in sustainability</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topContributors.map((contributor, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-card border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-accent text-primary-foreground font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-semibold">{contributor.name}</p>
                      <p className="text-sm text-muted-foreground">{contributor.amount} kg/month</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                  <span className="text-sm text-muted-foreground">GreenHealth Credits Earned</span>
                  <span className="font-bold text-secondary">{contributor.credits}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card border-2 border-primary">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <TrendingUp className="w-8 h-8 text-primary" />
            <div className="flex-1">
              <p className="font-semibold">System Impact This Month</p>
              <p className="text-sm text-muted-foreground">
                {totalCompost}kg compost diverted from landfills • {contributors} citizens rewarded • 
                {compostData.reduce((acc, z) => acc + z.farms, 0)} farms enriched
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}