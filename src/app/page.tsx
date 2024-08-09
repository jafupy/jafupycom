"use client";
import Separator from "@/components/gaia/separator";
import "@/styles/index.css";
export default function HomePage() {
  return (
    <main>
      <section className="flex min-h-screen flex-col items-center justify-center">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-prussian-blue to-old-rose opacity-45 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <hgroup className="gap-4">
            {/* <p className="text-xl">{"Hey, I'm"}</p> */}
            <h1 className="text-8xl">Jacob</h1>
            <p className="text-xl opacity-75">@JaFu.py</p>
          </hgroup>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-prussian-blue to-old-rose opacity-45 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </section>
      <section className="prose prose-slate dark:prose-invert max-w-ch-md">
        <p>
          I like to code, play classical / fingerstyle guitar, and play
          minecraft
        </p>
        <p>
          {
            "I'm working on a UI library for react that focuses on micro interactions "
          }
          that is based on{" "}
          <a href="https://www.radix-ui.com/primitives">Radix UI</a>.
        </p>
      </section>
    </main>
  );
}
