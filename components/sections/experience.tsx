import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Experience {
  company: string;
  location: string;
  position: string;
  period: string;
  type: string;
  description: string;
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    company: "Voyin",
    location: "Amsterdam, Netherlands",
    position: "Senior React Native Developer",
    period: "Aug 2023 - Dec 2024",
    type: "Remote",
    description: "Collaborated with the team to build an AI backed travel suggestion and booking app from scratch. Developed UI system, screens and core features. Prepared the app for a successful product launch.",
    technologies: ["Web", "iOS", "Android"]
  },
  {
    company: "Trustworthy",
    location: "San Francisco, US",
    position: "Senior React Native Developer",
    period: "Dec 2021 - Jul 2023",
    type: "Remote",
    description: "An app that helps families securely organize, store and optimize their important documents. Worked on redesigning the app, implemented new features, ensured web-mobile parity, created over 50 test scenarios.",
    technologies: ["Web", "iOS"]
  },
  {
    company: "Tikla Gelsin",
    location: "Istanbul, Turkey",
    position: "React / React Native Developer",
    period: "Jan 2021 - Dec 2021",
    type: "Remote",
    description: "Led the handover process and became the first in-house developer for the project, one of Turkey's largest food delivery apps with over 2 million users. Focused primarily on mobile app, implementing new features and UI enhancements, while also contributing to the web platform to optimize the overall user experience and fixing bugs.",
    technologies: ["Web", "iOS", "Android"]
  },
  {
    company: "Kompanion",
    location: "Istanbul, Turkey",
    position: "React / React Native Developer",
    period: "Oct 2019 - Jan 2021",
    type: "Remote",
    description: "Developed a highly successful personal fitness coaching app from scratch that attracted over 2 million users worldwide. Played a crucial role in designing and implementing key features and UI that helps users achieve their health and well-being goals.",
    technologies: ["Web", "iOS", "Android"]
  },
  {
    company: "DataLiva",
    location: "Istanbul, Turkey",
    position: "Fullstack Developer",
    period: "Jan 2018 - Oct 2019",
    type: "Office",
    description: "Member of the R&D team of the web and desktop app team that develops corporate budgeting, ERP and SAP solutions. Apps are used by large sized companies.",
    technologies: ["Web"]
  }
];

export function Experience() {
  return (
    <section className="container py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-in bg-clip-text text-transparent bg-gradient-to-b from-foreground/90 via-foreground/70 to-foreground/90">
          Experience
        </h2>
        <p className="animate-in [--delay:200ms] text-sm sm:text-base text-muted-foreground/80 max-w-[85%] sm:max-w-[90%]" style={{ animationDelay: "200ms" }}>
          My professional journey in software development
        </p>
      </div>

      <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 max-w-3xl px-4 sm:px-8">
        <div className="relative">
          <div className="absolute left-5 sm:left-8 top-3 h-[calc(100%-24px)] w-px bg-gradient-to-b from-foreground/20 via-foreground/10 to-foreground/20" />
          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="animate-in slide-in-from-bottom group relative ml-4"
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
              >
                <div className="relative pl-8 sm:pl-12">
                  <span className="absolute -left-3 flex h-6 w-6 items-center justify-center">
                    <span className="h-3 w-3 rounded-full bg-gradient-to-b from-foreground/60 to-foreground/50 ring-[6px] ring-background" />
                  </span>
                  <div className="flex flex-col space-y-3 rounded-2xl bg-gradient-to-b from-muted/30 to-muted/20 p-4 sm:p-6">
                    <div className="flex flex-col space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-x-2">
                        <h3 className="font-display text-base sm:text-lg font-medium tracking-tight">
                          {exp.position}
                        </h3>
                        <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                          {exp.period}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm text-muted-foreground/90 font-medium">
                        <span>{exp.company} • {exp.location}</span>
                        <span className="hidden sm:inline">•</span>
                        <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] sm:text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {exp.description}
                    </p>
                    {exp.technologies && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] sm:text-xs font-medium bg-background/50 border border-foreground/[0.06] backdrop-blur-xl"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 