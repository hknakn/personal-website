"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Avatar className="h-8 w-8 sm:h-9 sm:w-9 ios-shadow-sm transition-transform hover:scale-110">
            <AvatarImage
              src="/profile-pic.png"
              alt="Hakan Akin"
              className="object-cover hover:scale-110 transition-all duration-300"
            />
            <AvatarFallback>HA</AvatarFallback>
          </Avatar>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-end flex-1 space-x-6">
          <nav className="flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[15px] leading-none tracking-tight font-medium rounded-lg px-4 py-3 transition-colors",
                  pathname === item.href
                    ? "font-semibold bg-[#E5E5EA] dark:bg-[#2C2C2E] text-foreground/90"
                    : "font-medium text-foreground/60 hover:text-foreground/90 hover:bg-[#E5E5EA] dark:hover:bg-[#2C2C2E]"
                )}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://medium.com/@cehakanakin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] leading-none tracking-tight font-medium rounded-lg px-4 py-3 transition-colors text-foreground/60 hover:text-foreground/90 hover:bg-[#E5E5EA] dark:hover:bg-[#2C2C2E]"
            >
              Blog
            </a>
            <div className="rounded-lg transition-colors hover:bg-[#E5E5EA] dark:hover:bg-[#2C2C2E]">
              <ThemeToggle />
            </div>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <div className="rounded-lg transition-colors hover:bg-[#E5E5EA] dark:hover:bg-[#2C2C2E]">
            <ThemeToggle />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="ios-shadow-sm hover:bg-[#E5E5EA] dark:hover:bg-[#2C2C2E]"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "block px-3 py-2 text-base leading-none tracking-tight font-medium rounded-lg transition-colors",
                      pathname === item.href
                        ? "bg-[#E5E5EA] dark:bg-[#2C2C2E] text-foreground/90"
                        : "text-foreground/60 hover:text-foreground/90 hover:bg-[#E5E5EA] dark:hover:bg-[#2C2C2E]"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="https://medium.com/@cehakanakin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 text-base leading-none tracking-tight font-medium rounded-lg transition-colors text-foreground/60 hover:text-foreground/90 hover:bg-[#E5E5EA] dark:hover:bg-[#2C2C2E]"
                >
                  Blog
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
