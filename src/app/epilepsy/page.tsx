"use client";
import Button from "@/components/gaia/button";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function EpilepsyPage() {
  const [liability, setLiability] = useState(true);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    if (!liability) setTheme(theme === "dark" ? "light" : "dark");
  }, [theme]);
  if (!liability)
    return (
      <main>
        <section className="prose prose-slate dark:prose-invert max-w-ch-md">
          <h1>Epilepsy</h1>
          <a href="/" className="bg-red-500">
            STAHP THE EPILEPSY
          </a>
        </section>
      </main>
    );
  return (
    <main className="not-prose bg-slate-50 text-slate-950">
      <section>
        <h1>Epilepsy</h1>
        <p>
          By clicking the button below, you agree to the following: You accept
          full responsibility over your actions and you will not sue me, or
          anyone else, for any damages you may suffer as a result of this
          action.
        </p>
        <Button
          onClick={() => {
            setLiability(false);
            theme === "dark" ? setTheme("light") : setTheme("dark");
          }}
        >
          I accept and would like to proceed
        </Button>
      </section>
    </main>
  );
}
