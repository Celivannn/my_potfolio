import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: string;
  className?: string;
}

/**
 * Simple skill badge component
 * MVP Decision: Minimal styling, easy to scan
 */
export function SkillBadge({ skill, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground",
        "border border-border/50",
        "transition-colors hover:bg-secondary/80",
        className
      )}
    >
      {skill}
    </span>
  );
}
