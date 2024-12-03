import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Contact() {
  return (
    <section className="container py-16 sm:py-20 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-in bg-clip-text text-transparent bg-gradient-to-b from-foreground/90 via-foreground/70 to-foreground/90">
          Get in Touch
        </h2>
        <p
          className="animate-in [--delay:200ms] text-sm sm:text-base text-muted-foreground/80 max-w-[85%] sm:max-w-[90%]"
          style={{ animationDelay: "200ms" }}
        >
          Feel free to reach out through any of these channels
        </p>
      </div>

      <div className="mx-auto mt-12 sm:mt-16 lg:mt-20 max-w-lg px-4 sm:px-8">
        <div className="grid gap-4 sm:gap-6">
          <a
            href="mailto:cehakanakin@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ios-card flex items-center h-16 sm:h-20 rounded-2xl animate-in slide-in-from-bottom [--delay:300ms]"
            style={{ animationDelay: "300ms" }}
          >
            <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white dark:bg-[#1C1C1E] ios-shadow-sm border border-[#E5E5EA] dark:border-[#3A3A3C]">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="flex flex-col items-start text-left">
                <div className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Email
                </div>
                <div className="text-sm sm:text-base font-medium">
                  cehakanakin@gmail.com
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/hknakn"
            target="_blank"
            rel="noopener noreferrer"
            className="ios-card flex items-center h-16 sm:h-20 rounded-2xl animate-in slide-in-from-bottom [--delay:450ms]"
            style={{ animationDelay: "450ms" }}
          >
            <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white dark:bg-[#1C1C1E] ios-shadow-sm border border-[#E5E5EA] dark:border-[#3A3A3C]">
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="flex flex-col items-start text-left">
                <div className="text-xs sm:text-sm font-medium text-muted-foreground">
                  GitHub
                </div>
                <div className="text-sm sm:text-base font-medium">hknakn</div>
              </div>
            </div>
          </a>

          <a
            href="https://x.com/cehakanakin"
            target="_blank"
            rel="noopener noreferrer"
            className="ios-card flex items-center h-16 sm:h-20 rounded-2xl animate-in slide-in-from-bottom [--delay:600ms]"
            style={{ animationDelay: "600ms" }}
          >
            <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white dark:bg-[#1C1C1E] ios-shadow-sm border border-[#E5E5EA] dark:border-[#3A3A3C]">
                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="flex flex-col items-start text-left">
                <div className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Twitter
                </div>
                <div className="text-sm sm:text-base font-medium">
                  @cehakanakin
                </div>
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/cehakanakin/"
            target="_blank"
            rel="noopener noreferrer"
            className="ios-card flex items-center h-16 sm:h-20 rounded-2xl animate-in slide-in-from-bottom [--delay:750ms]"
            style={{ animationDelay: "750ms" }}
          >
            <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-6">
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-white dark:bg-[#1C1C1E] ios-shadow-sm border border-[#E5E5EA] dark:border-[#3A3A3C]">
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="flex flex-col items-start text-left">
                <div className="text-xs sm:text-sm font-medium text-muted-foreground">
                  LinkedIn
                </div>
                <div className="text-sm sm:text-base font-medium">
                  @cehakanakin
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
