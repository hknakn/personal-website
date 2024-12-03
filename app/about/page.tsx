import { Header } from "@/components/ui/header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="container py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight animate-in bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80 pb-2">
              About
            </h1>
            <p
              className="animate-in [--delay:200ms] text-sm sm:text-base text-muted-foreground max-w-[85%] sm:max-w-[90%]"
              style={{ animationDelay: "200ms" }}
            >
              Learn more about me and what drives me
            </p>
          </div>

          <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 max-w-3xl px-4 sm:px-8">
            <div className="space-y-8 sm:space-y-12">
              <div className="animate-in slide-in-from-bottom prose prose-gray dark:prose-invert max-w-none">
                <div className="ios-card rounded-2xl p-6">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-xl font-display font-bold mb-4 text-foreground/90">
                        Professional Journey
                      </h2>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        I&apos;m a{" "}
                        <span className="font-bold text-foreground/90">
                          Senior React Native Developer
                        </span>{" "}
                        with a passion for creating high-quality mobile apps.
                        Beyond coding, I&apos;m a tech enthusiast who loves
                        exploring new technologies and finding new solutions to
                        complex problems 👨‍💻
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-display font-bold mb-4 text-foreground/90">
                        Current Focus
                      </h2>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Currently, I&apos;m focused on building{" "}
                        <span className="font-bold text-foreground/90">
                          high-quality mobile apps
                        </span>{" "}
                        that reaches millions of users globally. My approach
                        combines{" "}
                        <span className="font-bold text-foreground/90">
                          technical expertise
                        </span>{" "}
                        with a deep understanding of user experience, ensuring
                        that every app I develop is not just functional, but
                        also a joy to use 🚀
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-display font-bold mb-4 text-foreground/90">
                        Life Beyond Code
                      </h2>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        When I&apos;m not coding, I enjoy with different
                        activities. I&apos;m a good{" "}
                        <span className="font-bold text-foreground/90">
                          EA FC
                        </span>{" "}
                        player, always ready for a competitive match 🎮. My love
                        for{" "}
                        <span className="font-bold text-foreground/90">
                          coffee
                        </span>{" "}
                        runs deep – from experimenting with different brewing
                        methods to exploring specialty coffee shops ☕️.{" "}
                        <span className="font-bold text-foreground/90">
                          Cooking
                        </span>{" "}
                        is another passion of mine; I find the process of
                        creating dishes from scratch both relaxing and rewarding
                        👨‍🍳
                      </p>
                      <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                        I&apos;m also passionate about{" "}
                        <span className="font-bold text-foreground/90">
                          traveling
                        </span>{" "}
                        and experiencing different cultures. Whether it&apos;s
                        exploring new cities, trying local cuisines, or meeting
                        people from different backgrounds, I believe travel
                        broadens our perspectives and enriches our understanding
                        of the world ✈️
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-display font-bold mb-4 text-foreground/90">
                        Tech & Gaming
                      </h2>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        My interests in{" "}
                        <span className="font-bold text-foreground/90">
                          technology
                        </span>{" "}
                        extend beyond development 🔧. I&apos;m constantly
                        exploring the latest tech gadgets and development tools.
                        Staying up-to-date with tech trends and watching reviews
                        helps me keep a pulse on the ever-evolving tech
                        landscape 📱
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-display font-bold mb-4 text-foreground/90">
                        Community Engagement
                      </h2>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        I believe in sharing knowledge and experiences with the
                        developer community ✍️. You can find me writing about{" "}
                        <span className="font-bold text-foreground/90">
                          mobile development
                        </span>{" "}
                        and discussing tech trends on{" "}
                        <a
                          href="https://medium.com/@cehakanakin"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-foreground/90 hover:text-primary transition-colors"
                        >
                          Medium
                        </a>
                        . I&apos;m also active on{" "}
                        <a
                          href="https://github.com/hknakn"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-foreground/90 hover:text-primary transition-colors"
                        >
                          GitHub
                        </a>
                        , where I contribute to{" "}
                        <span className="font-bold text-foreground/90">
                          open-source projects
                        </span>{" "}
                        and share useful code snippets and boilerplates.
                      </p>
                    </div>

                    <div>
                      <h2 className="text-xl font-display font-bold mb-4 text-foreground/90">
                        Let&apos;s Connect
                      </h2>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Whether it&apos;s developing a new feature, playing some
                        console games, or discussing the latest tech trends, I
                        bring the same level of passion and attention to detail
                        to everything I do. I&apos;m always open to connecting
                        with fellow developers, tech enthusiasts, and anyone
                        interested in the intersection of technology and
                        creativity 🤝
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
