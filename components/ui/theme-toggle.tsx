"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative h-9 w-9 rounded-lg p-2 transition-colors"
    >
      <div className="flex h-full w-full items-center justify-center">
        <Sun
          className="absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 
            rotate-0 scale-100 opacity-100
            dark:-rotate-90 dark:scale-0 dark:opacity-0"
        />
        <Moon
          className="absolute h-[1.2rem] w-[1.2rem] transition-all duration-300
            rotate-90 scale-0 opacity-0
            dark:rotate-0 dark:scale-100 dark:opacity-100"
        />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
