import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted";
}

/**
 * Reusable section wrapper component for consistent spacing and layout
 * MVP Decision: Simple, consistent container for all CV sections
 */
export function Section({ id, title, children, className, variant = "default" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        variant === "muted" && "bg-muted/50",
        className
      )}
    >
      <div className="section-container">
        {title && (
          <h2 className="text-heading mb-8 md:mb-10">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}
