"use client";

import { useMemo } from "react";
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer, Tooltip } from "recharts";

import { CATEGORIES, Category, PLAN_DATA } from "@/lib/plan-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Fix for Recharts type errors with React 18
const ChartComponents = {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} as any;

export function LifeBalanceChart() {
  const data = useMemo(() => {
    return CATEGORIES.map((category) => {
      const items = PLAN_DATA.filter((item) => item.category === category);
      const totalItems = items.length;

      if (totalItems === 0) {
        return { subject: category, A: 0, fullMark: 100 };
      }

      // Calculate average progress
      // If progress is undefined, treat as 0
      // Completed items (status === "Achieved") should be 100%
      const totalProgress = items.reduce((sum, item) => {
        if (item.status === "Achieved") return sum + 100;
        return sum + (item.progress || 0);
      }, 0);

      const averageProgress = Math.round(totalProgress / totalItems);

      return {
        subject: category,
        A: averageProgress,
        fullMark: 100,
      };
    });
  }, []);

  return (
    <Card className="w-full border-muted/40 bg-card/50 backdrop-blur-sm">
      <CardHeader className="items-center pb-4">
        <CardTitle>Life Balance Overview</CardTitle>
        <CardDescription>Current progress distribution across different life perspectives</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="h-[300px] w-full">
          <ChartComponents.ResponsiveContainer width="100%" height="100%">
            <ChartComponents.RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
              <ChartComponents.PolarGrid stroke="hsl(var(--muted-foreground))" strokeOpacity={0.2} />
              <ChartComponents.PolarAngleAxis
                dataKey="subject"
                tick={{ fill: "hsl(var(--foreground))", fontSize: 12 }}
              />
              <ChartComponents.PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <ChartComponents.Radar
                name="Progress"
                dataKey="A"
                stroke="hsl(var(--primary))"
                fill="hsl(var(--primary))"
                fillOpacity={0.3}
              />
              <ChartComponents.Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--popover))",
                  borderColor: "hsl(var(--border))",
                  borderRadius: "var(--radius)",
                  color: "hsl(var(--popover-foreground))",
                }}
                formatter={(value: any) => [`${value}%`, "Progress"]}
              />
            </ChartComponents.RadarChart>
          </ChartComponents.ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
