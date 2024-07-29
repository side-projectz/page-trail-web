"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";
import { LampCeiling } from "lucide-react";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    console.log("toggle");
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
    if (theme === "system") setTheme("dark");
  };

  return (
    <Toggle
      variant={"outline"}
      aria-label="Toggle italic"
      onClick={toggleTheme}
    >
      <LampCeiling className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <LampCeiling className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Toggle>
  );
}
