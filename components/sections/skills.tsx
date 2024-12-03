import { Badge } from "@/components/ui/badge";

interface SkillCategory {
  title: string;
  emoji: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    emoji: "👨‍💻",
    skills: ["TypeScript", "JavaScript", "Python", "C#"]
  },
  {
    title: "Frontend Development",
    emoji: "🎨",
    skills: [
      "React Native",
      "React",
      "Tailwind CSS",
      "HTML & CSS",
      "Redux",
      "RTK Query",
      "GraphQL",
      "Zustand",
      "MobX"
    ]
  },
  {
    title: "Testing",
    emoji: "🧪",
    skills: ["Detox", "Jest"]
  },
  {
    title: "Database",
    emoji: "💾",
    skills: ["MS SQL", "MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    title: "Other Tools",
    emoji: "🔧",
    skills: ["Firebase", "Supabase", "Git", "Jira", "Figma"]
  }
];

export function Skills() {
  return (
    <section className="container py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-in bg-clip-text text-transparent bg-gradient-to-b from-foreground/90 via-foreground/70 to-foreground/90">
          Skills
        </h2>
        <p className="animate-in [--delay:200ms] text-sm sm:text-base text-muted-foreground/80 max-w-[85%] sm:max-w-[90%]" style={{ animationDelay: "200ms" }}>
          Technologies and tools I work with
        </p>
      </div>
      <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 max-w-4xl px-4 sm:px-8">
        <div className="grid gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-background to-background/80 border border-foreground/[0.06]" />
              <div className="relative rounded-3xl bg-background/50 p-4 sm:p-6 backdrop-blur-xl">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-b from-background to-background/80 shadow-sm border border-foreground/[0.06]">
                        <span className="text-base sm:text-lg">{category.emoji}</span>
                      </div>
                      <h3 className="font-display text-sm sm:text-base font-medium">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="animate-in fade-in rounded-full px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium bg-background/50 border border-foreground/[0.06] backdrop-blur-xl transition-colors hover:bg-foreground/[0.03]"
                        style={{ animationDelay: `${(index + 2) * 150 + (i * 30)}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 