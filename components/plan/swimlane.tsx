import { Category, Horizon, HORIZONS, PlanItem } from "@/lib/plan-data";
import { cn } from "@/lib/utils";
import { GoalCard } from "@/components/plan/goal-card";

interface SwimlaneProps {
  category: Category;
  items: PlanItem[];
  className?: string;
}

const horizonMap: Record<Horizon, string> = {
  "3-Year": "Short Term",
  "5-Year": "Medium Term",
  "Life-Long": "Long Term",
};

const getHorizonYears = (horizon: Horizon): string => {
  const currentYear = new Date().getFullYear();
  switch (horizon) {
    case "3-Year":
      return `${currentYear} - ${currentYear + 2}`;
    case "5-Year":
      return `${currentYear + 3} - ${currentYear + 7}`;
    case "Life-Long":
      return `${currentYear + 8}+`;
    default:
      return "";
  }
};

export function Swimlane({ category, items, className }: SwimlaneProps) {
  // Group items by horizon
  const itemsByHorizon = HORIZONS.reduce(
    (acc, horizon) => {
      acc[horizon] = items.filter((item) => item.horizon === horizon);
      return acc;
    },
    {} as Record<Horizon, PlanItem[]>
  );

  return (
    <div className={cn("group w-full py-6", className)}>
      <div className="mb-4 flex items-center gap-4">
        <div className="flex flex-col">
          <h2 className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-2xl font-bold uppercase tracking-tight text-transparent">
            {category}
          </h2>
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
            Perspective
          </span>
        </div>
        <div className="h-px flex-grow bg-gradient-to-r from-border/80 via-border/40 to-transparent" />
      </div>

      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Background Grid Lines (Desktop only) */}
        <div className="pointer-events-none absolute inset-0 hidden grid-cols-3 md:grid">
          <div className="h-full border-r border-dashed border-border/30" />
          <div className="h-full border-r border-dashed border-border/30" />
        </div>

        {HORIZONS.map((horizon, index) => (
          <div key={horizon} className="relative z-10 space-y-6">
            <div className="flex items-center justify-between border-b border-border/40 pb-2">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground/80">
                <span
                  className={cn(
                    "h-2 w-2 rounded-full",
                    index === 0 ? "bg-emerald-500/70" : index === 1 ? "bg-blue-500/70" : "bg-purple-500/70"
                  )}
                />
                {horizonMap[horizon]}
              </h3>
              <span className="rounded bg-muted/30 px-2 py-0.5 font-mono text-xs text-muted-foreground/60">
                {getHorizonYears(horizon)}
              </span>
            </div>

            <div className="min-h-[120px] space-y-6">
              {itemsByHorizon[horizon].length > 0 ? (
                itemsByHorizon[horizon].map((item) => <GoalCard key={item.id} item={item} />)
              ) : (
                <div className="group/empty flex h-full w-full flex-col items-center justify-center rounded-xl border border-dashed border-muted/40 bg-muted/5 p-6 text-center transition-colors hover:bg-muted/10">
                  <span className="text-sm italic text-muted-foreground/40 transition-colors group-hover/empty:text-muted-foreground/60">
                    No goals planned
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
