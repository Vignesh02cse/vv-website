import { AnimatedSection } from "@/components/common/AnimatedSection";
import { SkillCard } from "@/components/common/SkillCard";
import { skillGroups } from "@/data/skills";

export default function SkillsPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <AnimatedSection>
        <h1 className="text-3xl sm:text-4xl font-black gradient-text mb-4">Skills & Expertise</h1>
        <p className="text-muted-foreground mb-12 max-w-xl">Technologies and tools I work with to build production-grade software.</p>
      </AnimatedSection>

      <div className="space-y-12">
        {skillGroups.map((group, gi) => (
          <AnimatedSection key={group.title} delay={gi * 0.1}>
            <div className="flex items-center gap-3 mb-5">
              <div className="text-primary">{group.icon}</div>
              <h2 className="text-xl font-bold text-foreground">{group.title}</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {group.skills.map((skill) => (
                <SkillCard
                  key={skill.name}
                  name={skill.name}
                  icon={group.icon}
                  level={skill.level}
                />
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
