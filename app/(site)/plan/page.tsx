import { Metadata } from "next";

import { CATEGORIES, PLAN_DATA } from "@/lib/plan-data";
import { LifeBalanceChart } from "@/components/plan/life-balance-chart";
import { Swimlane } from "@/components/plan/swimlane";

export const metadata: Metadata = {
  title: "Life Plan",
  description: "A visualization of my goals across different time horizons and perspectives.",
};

export default function PlanPage() {
  return (
    <div className="container space-y-16 py-12 duration-500 animate-in fade-in">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent dark:from-gray-100 dark:to-gray-400 lg:text-5xl">
          Life Plan
        </h1>
        <p className="text-xl leading-relaxed text-muted-foreground">
          Mapping out my journey through 3-year, 5-year, and life-long horizons across career, financial, and personal
          growth.
        </p>
      </div>

      <div className="mx-auto max-w-4xl">
        <LifeBalanceChart />
      </div>

      <div className="space-y-20">
        {CATEGORIES.map((category) => {
          const categoryItems = PLAN_DATA.filter((item) => item.category === category);

          if (categoryItems.length === 0) return null;

          return <Swimlane key={category} category={category} items={categoryItems} />;
        })}
      </div>

      <div className="border-t pb-6 pt-12 text-center text-sm text-muted-foreground">
        <p>This is a living document. Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
}
