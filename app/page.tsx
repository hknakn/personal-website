import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Header } from "@/components/ui/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center min-h-[calc(100vh-3.5rem)]">
        <section className="w-full">
          <div className="container flex max-w-[64rem] flex-col items-center gap-8 text-center">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-in slide-in-from-bottom-4 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80 pb-2">
              Hi, I&apos;m Hakan
              <span className="inline-block animate-wave text-[26px] sm:text-3xl md:text-4xl lg:text-5xl ml-2 text-foreground">
                👋
              </span>
            </h1>
            <p
              className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 animate-in slide-in-from-bottom-4 [--delay:200ms]"
              style={{ animationDelay: "200ms" }}
            >
              Senior React Native Developer with 7 years of experience
              developing mobile apps that reached millions of users globally.
            </p>
            <div
              className="flex flex-wrap justify-center gap-4 animate-in slide-in-from-bottom-4 [--delay:400ms]"
              style={{ animationDelay: "400ms" }}
            >
              <Button className="ios-button" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button className="ios-button-secondary" variant="secondary" asChild>
                <Link href="/about">About Me</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
