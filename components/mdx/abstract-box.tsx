import { ReactNode } from "react";

interface AbstractBoxProps {
  title?: string;
  children: ReactNode;
  variant?: "default" | "info" | "warning" | "success" | "error";
  className?: string;
}

export function AbstractBox({ title = "Abstract", children, variant = "default", className = "" }: AbstractBoxProps) {
  const variantStyles = {
    default: "border-gray-200 bg-gray-50 text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200",
    info: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-700 dark:bg-blue-900/20 dark:text-blue-200",
    warning:
      "border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-700 dark:bg-amber-900/20 dark:text-amber-200",
    success:
      "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-200",
    error: "border-red-200 bg-red-50 text-red-900 dark:border-red-700 dark:bg-red-900/20 dark:text-red-200",
  };

  const iconVariants = {
    default: "📄",
    info: "ℹ️",
    warning: "⚠️",
    success: "✅",
    error: "❌",
  };

  return (
    <div
      className={`
      not-prose my-6 rounded-lg border-2 p-6 shadow-sm transition-all duration-200 
      hover:shadow-md ${variantStyles[variant]} ${className}
    `}
    >
      <div className="mb-4 flex items-center gap-3">
        <span className="text-xl" role="img" aria-label={variant}>
          {iconVariants[variant]}
        </span>
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
      </div>
      <div className="prose-sm leading-relaxed">{children}</div>
    </div>
  );
}
