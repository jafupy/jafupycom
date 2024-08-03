import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function BioPage() {
  return (
    <div className="max-w-ch-lg">
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#65adda] to-[#777ddb] opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl">Bio</h1>
      <p className="text-lg text-slate-700 dark:text-slate-300">Who is Jacob?</p>

      <hr className="my-8 text-[#65adda]" />

      <p>
        Hello! I&apos;m Jacob, a {calculateAge("12-01-2010")}yr old nerd. <br />
        I&apos;m into web dev and classical/fingerstyle guitar. I&apos;m currently in secondary school (I live in the
        UK). <br />
        <br />I got into coding when I wanted to make a Discord bot with Python. That led me to JavaScript, where I
        started building stuff with vanilla HTML, CSS, and JS. <br />
        <br />
        After that, I learnt Svelte and SvelteKit, in which i redid my website. Now, I&apos;m learning Next.js and React
        to make this website, which is written with next.
      </p>
      <hr className="my-8 bg-[#65adda]" />
      <p className="mb-2">I use</p>
      <ul className="grid grid-cols-3 gap-3 p-6 ">
        {[
          {
            title: "Arc Browser",
            icon: "https://imgs.search.brave.com/GWNloCZkeyToBDrWZIhXb-brNxFW_UotgZI2g1aktgk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1XzNr/Ynd5L3N0eWxlcy9j/b21tdW5pdHlJY29u/XzU5aHN2NHh1Zmpn/YjEucG5n",
            description: "A (relatively) new browser, built on Chromium.",
          },
          {
            title: "VS Code",
            icon: "https://imgs.search.brave.com/mr3DqYhlYdcqYCm4wD1uKeTR9nwU9887lf0P3n9Huio/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWFya2Rvd25ndWlk/ZS5vcmcvYXNzZXRz/L2ltYWdlcy90b29s/LWljb25zL3ZzY29k/ZS5wbmc",
            description: "A lightweight code editor made by Microsoft.",
          },
          {
            title: "GitHub",
            icon: "https://imgs.search.brave.com/ZZVkPN-_cIr6ZXIsJ1d4-RndUMqDkIMUu_gRiPCf69I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuZ2l0aHViYXNz/ZXRzLmNvbS9hc3Nl/dHMvR2l0SHViLU1h/cmstZWEyOTcxY2Vl/Nzk5LnBuZw",
            description: "A code hosting platform for devs.",
          },
        ].map(({ title, icon, description }) => (
          <li key={title}>
            <Card>
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-grow-0 gap-2">
                <Image
                  className="aspect-square h-24 w-24 rounded-2xl"
                  src={icon}
                  alt={`${title} logo`}
                  width={96}
                  height={96}
                />
                <p>{description}</p>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
}

function calculateAge(birthDate: string): number {
  const [day, month, year] = birthDate.split("-").map(Number);
  const today = new Date();
  let age = today.getFullYear() - year || 0;
  const m = today.getMonth() - month + 1;

  if (m < 0 || (m === 0 && today.getDate() < day)) {
    age--;
  }
  return age;
}
