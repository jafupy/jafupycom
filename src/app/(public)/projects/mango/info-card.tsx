import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import data from "./info-cards";
import { Link2 } from "lucide-react";

export default function ShadowingCard({ children, card }: { children: React.ReactNode; card: string }) {
  const info = data.find(c => c.id === card);

  if (!info) return { children };
  return (
    <Popover>
      <PopoverTrigger className="cursor-pointer underline underline-offset-4">{children}</PopoverTrigger>
      <PopoverContent className="prose relative max-h-48 w-full max-w-[60ch] overflow-scroll">
        <h3>{info.title}</h3>

        <p className="mb-4 text-sm text-muted-foreground">{info.subtext}</p>

        <p className="mt-4">{info.description}</p>

        <a href={info.wikipedia} target="_blank" rel="noopener noreferrer">
          <Link2 className="absolute right-4 top-4 h-4 w-4 text-muted-foreground" />
          <span className="sr-only">Read more on Wikipedia</span>
        </a>
      </PopoverContent>
    </Popover>
  );
}
