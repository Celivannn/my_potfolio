import { SkillBadge } from "./SkillBadge";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

/**
 * Groups related skills under a category heading
 * MVP Decision: Clean grid layout for easy scanning
 */
export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>
    </div>
  );
}
