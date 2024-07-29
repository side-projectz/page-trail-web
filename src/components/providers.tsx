"use client";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import React from "react";

export default function CustomProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SessionProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {
            children
          }
        </ThemeProvider>
      </SessionProvider>
    </>
  );
}
