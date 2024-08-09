import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Footer from "./footer";
import ThemeProvider from "@/components/themer";

export const metadata: Metadata = {
  title: "JaFu.py",
  description: "The personal website of Jacob / JaFu.py",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="mx-auto flex min-h-screen max-w-ch-xl flex-col items-center justify-center">
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
