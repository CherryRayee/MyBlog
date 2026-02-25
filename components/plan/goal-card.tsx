import { Calendar, CheckCircle2, Circle, Flag, Layers, Timer, TrendingUp } from "lucide-react";

import { Category, PlanItem, Priority, Status } from "@/lib/plan-data";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface GoalCardProps {
  item: PlanItem;
  className?: string;
}

const categoryColorMap: Record<Category, string> = {
  Career:
    "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50",
  Financial:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 hover:bg-emerald-200 dark:hover:bg-emerald-900/50",
  Education:
    "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 hover:bg-violet-200 dark:hover:bg-violet-900/50",
  Language:
    "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-pink-900/50",
  Health:
    "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300 hover:bg-rose-200 dark:hover:bg-rose-900/50",
  Personal:
    "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-900/50",
};

const statusIconMap: Record<Status, React.ElementType> = {
  Pending: Circle,
  "In Progress": Timer,
  Achieved: CheckCircle2,
};

const statusColorMap: Record<Status, string> = {
  Pending: "text-muted-foreground",
  "In Progress": "text-blue-500",
  Achieved: "text-green-500",
};

const priorityColorMap: Record<Priority, string> = {
  High: "text-red-500 bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-900/20",
  Medium: "text-orange-500 bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-900/20",
  Low: "text-blue-500 bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-900/20",
};

export function GoalCard({ item, className }: GoalCardProps) {
  const StatusIcon = statusIconMap[item.status];
  const hasProgress = item.progress !== undefined && item.progress > 0;
  const completedMilestones = item.milestones?.filter((m) => m.isCompleted).length || 0;
  const totalMilestones = item.milestones?.length || 0;

  return (
    <Card
      className={cn(
        "group flex h-full flex-col backdrop-blur-sm transition-all hover:shadow-md dark:bg-card/50 dark:hover:shadow-primary/5",
        className
      )}
    >
      <CardHeader className="space-y-3 pb-3">
        <div className="flex items-start justify-between gap-2">
          <Badge variant="secondary" className={cn("font-normal transition-colors", categoryColorMap[item.category])}>
            {item.category}
          </Badge>
          <div className="flex items-center gap-2">
            {item.priority && (
              <Badge variant="outline" className={cn("h-5 border px-1.5 text-[10px]", priorityColorMap[item.priority])}>
                {item.priority}
              </Badge>
            )}
            <div className={cn("flex items-center gap-1 text-xs font-medium", statusColorMap[item.status])}>
              <StatusIcon className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>

        <div>
          <CardTitle className="mb-1.5 text-lg leading-tight transition-colors group-hover:text-primary">
            {item.title}
          </CardTitle>
          {item.timeline && (
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="mr-1 h-3 w-3" />
              <span>
                {item.timeline.startDate ? `${new Date(item.timeline.startDate).getFullYear()} - ` : ""}
                {item.timeline.targetDate ? new Date(item.timeline.targetDate).getFullYear() : "Ongoing"}
              </span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex-grow space-y-4">
        <p className="line-clamp-3 text-sm text-muted-foreground">{item.description}</p>

        {/* Progress Section */}
        {(hasProgress || item.status === "In Progress") && (
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3" /> Progress
              </span>
              <span>{item.progress || 0}%</span>
            </div>
            <Progress value={item.progress || 0} className="h-1.5" />
          </div>
        )}

        {/* Milestones Summary */}
        {totalMilestones > 0 && (
          <div className="flex items-center gap-1.5 rounded-md bg-secondary/30 p-2 text-xs text-muted-foreground">
            <Layers className="h-3.5 w-3.5" />
            <span>
              {completedMilestones}/{totalMilestones} Milestones
            </span>
          </div>
        )}

        {/* Motivation Quote */}
        {item.motivation && (
          <div className="border-l-2 border-primary/20 py-0.5 pl-2 text-xs italic text-muted-foreground/80">
            &quot;{item.motivation}&quot;
          </div>
        )}
      </CardContent>

      {item.tags && item.tags.length > 0 && (
        <CardFooter className="flex flex-wrap gap-1 pb-4 pt-0">
          {item.tags.map((tag) => (
            <span key={tag} className="rounded-sm bg-secondary/50 px-1.5 py-0.5 text-[10px] text-muted-foreground">
              #{tag}
            </span>
          ))}
        </CardFooter>
      )}
    </Card>
  );
}
