import { ReactNode } from "react";

type HighlightVariant = "excellent" | "good" | "note";

interface HighlightProps {
  children: ReactNode;
  variant?: HighlightVariant;
  className?: string;
  title?: string;
}

const variantClasses: Record<HighlightVariant, string> = {
  excellent:
    "bg-violet-50 text-violet-900 ring-1 ring-violet-200 dark:bg-violet-950/40 dark:text-violet-100 dark:ring-violet-900/60",
  good: "bg-sky-50 text-sky-900 ring-1 ring-sky-200 dark:bg-sky-950/40 dark:text-sky-100 dark:ring-sky-900/60",
  note: "bg-amber-50 text-amber-950 ring-1 ring-amber-200 dark:bg-amber-950/40 dark:text-amber-100 dark:ring-amber-900/60",
};

export function Highlight({ children, variant = "excellent", className = "", title }: HighlightProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 font-medium ${variantClasses[variant]} ${className}`}
    >
      {title ? <span className="opacity-70">[{title}]</span> : null}
      <span>{children}</span>
    </span>
  );
}
