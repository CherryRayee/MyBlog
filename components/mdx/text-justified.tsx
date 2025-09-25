import { ReactNode } from "react";

interface TextJustifiedProps {
  children: ReactNode;
  className?: string;
}

export function TextJustified({ children, className = "" }: TextJustifiedProps) {
  return <div className={`text-justify leading-relaxed ${className}`}>{children}</div>;
}
