import { Header } from "@/components/ui/header";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  type: "professional" | "personal";
}

const projects: Project[] = [
  // Professional Projects
  {
    title: "Voyin - AI Travel App",
    description:
      "A mobile app that provides personalized travel suggestions and booking options using AI. Built with React Native, featuring a modern UI system and great user experience.",
    technologies: ["React Native", "TypeScript", "AI Integration"],
    liveUrl: "https://voyin.com",
    type: "professional",
  },
  {
    title: "Trustworthy",
    description:
      "A comprehensive platform helping families securely organize and store important documents.",
    technologies: ["React Native", "React", "TypeScript"],
    liveUrl: "https://trustworthy.com",
    type: "professional",
  },
  {
    title: "Kompanion",
    description:
      "A fitness coaching app that helps users achieve their fitness goals.",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    liveUrl: "https://kompanionapp.com/en/",
    type: "professional",
  },
  {
    title: "Tikla Gelsin",
    liveUrl: "https://www.tiklagelsin.com",
    description:
      "A food delivery platform that is one of the leading platforms in Turkey.",
    technologies: ["React Native", "React", "TypeScript", "Redux"],
    type: "professional",
  },
  // Personal Projects
  {
    title: "React Native Responsive Pixels",
    description:
      "A library that helps you to make calculations for responsive design in React Native.",
    technologies: ["React Native", "TypeScript"],
    githubUrl: "https://github.com/hknakn/react-native-responsive-pixels",
    type: "personal",
  },
  {
    title: "Personal Website",
    description:
      "My personal website built with Next.js 14, TypeScript, and Tailwind CSS. Features a modern, responsive design with dark mode support.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    githubUrl: "https://github.com/hknakn/personal-website",
    type: "personal",
  },
];

export default function ProjectsPage() {
  const professionalProjects = projects.filter(
    (p) => p.type === "professional"
  );
  const personalProjects = projects.filter((p) => p.type === "personal");

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="container py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-in bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80 pb-2">
              Projects
            </h1>
            <p
              className="animate-in [--delay:200ms] text-sm sm:text-base text-muted-foreground max-w-[85%] sm:max-w-[90%]"
              style={{ animationDelay: "200ms" }}
            >
              A selection of my professional work and personal projects
            </p>
          </div>

          <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 max-w-4xl">
            <div
              className="animate-in slide-in-from-bottom-4 [--delay:400ms]"
              style={{ animationDelay: "400ms" }}
            >
              <Tabs defaultValue="professional" className="w-full">
                <div className="flex justify-center">
                  <TabsList className="grid w-[400px] grid-cols-2">
                    <TabsTrigger value="professional">
                      Professional Work
                    </TabsTrigger>
                    <TabsTrigger value="personal">
                      Personal Projects
                    </TabsTrigger>
                  </TabsList>
                </div>
                <div className="mt-8">
                  <TabsContent value="professional" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {professionalProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="personal" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {personalProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                      ))}
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-white/80 dark:bg-[#1C1C1E]/80 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-white/10 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white/90 dark:hover:bg-[#2C2C2E]/90 hover:shadow-lg hover:border-primary/20 dark:hover:border-primary/20">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h3 className="font-display text-lg font-medium group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-primary/10 hover:text-primary"
              asChild
            >
              <Link href={project.githubUrl} target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
          )}
          {project.liveUrl && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 hover:bg-primary/10 hover:text-primary"
              asChild
            >
              <Link href={project.liveUrl} target="_blank">
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
      <p className="mt-2 text-sm text-muted-foreground group-hover:text-muted-foreground/80">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center rounded-full bg-[#F2F2F7] dark:bg-[#2C2C2E] px-2.5 py-0.5 text-xs font-medium transition-colors group-hover:bg-primary/10 group-hover:text-primary"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
