"use client";

import { ThemeProvider } from "next-themes";
import React from "react";

export default function CustomProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {
            children
          }
        </ThemeProvider>
    </>
  );
}
