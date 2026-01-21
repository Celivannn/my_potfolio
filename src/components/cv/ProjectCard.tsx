import { cn } from "@/lib/utils";
import { Folder } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  className?: string;
}

/**
 * Simple project card component
 * MVP Decision: Title and description only, no images or links yet
 * Easy to extend: Add image, tech stack, links later
 */
export function ProjectCard({ title, description, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group rounded-lg border border-border bg-card p-6",
        "transition-all duration-200 hover:border-accent/30 hover:shadow-md hover:-translate-y-0.5",
        className
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
          <Folder className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </article>
  );
}
