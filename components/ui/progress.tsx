/*
 * @Description: Rui's codes.
 * @Author: Qian Rui rqian20@fudan.edu.cn
 * @version: 1.0
 * @Date: 2026-02-25 10:38:46
 * @LastEditors: Qian Rui rqian20@fudan.edu.cn
 * @LastEditTime: 2026-02-25 10:38:56
 */
import * as React from "react";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { value?: number | null }>(
  ({ className, value, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-secondary", className)}
      {...props}
    >
      <div
        className="h-full w-full flex-1 bg-primary transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </div>
  )
);
Progress.displayName = "Progress";

export { Progress };
