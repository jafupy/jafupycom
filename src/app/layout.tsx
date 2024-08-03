"use server";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";
import * as React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import Nav from "./nav";

export const generateMetadata = () => {
  return {
    title: "Jacob",
    description: "@JaFu.py",
    icons: [{ rel: "icon", url: "/favicon.png" }],
    openGraph: {
      type: "website",
      locale: "en_UK",
      url: "https://jafu.py",
      site_name: "JaFu.py",
      title: "JaFu.py",
      description: "A random person on the internet",

      site_name: "JaFu.py",
    },
  };
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className=" font-sans transition-all">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Nav />
          <main className="flex min-h-screen flex-col items-center justify-center px-4 pb-12 pt-24 sm:px-6 lg:px-8">
            {children}
          </main>
          <Toaster richColors closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
