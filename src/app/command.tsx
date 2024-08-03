"use client";

import * as React from "react";
import { CalendarIcon, EnvelopeClosedIcon, FaceIcon, GearIcon, PersonIcon, RocketIcon } from "@radix-ui/react-icons";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { toast } from "sonner";
import { Link2, LinkIcon } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/dist/server/api-utils";

export default function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [links, setLinks] = React.useState<any[]>([]);
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(open => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  React.useEffect(() => {
    (async () => {
      const supabase = createClient();
      const { data } = await supabase.from("links").select("*");
      setLinks(data);
    })().catch(console.error);
  }, []);

  console.log(value);

  return (
    <>
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command
          onValueChange={(value: string) => {
            if (value.startsWith("/")) {
              redirect(`${value}`);
            }
          }}
        >
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandItem value="/">
              <span>Home</span>
              <span className="ml-auto">/</span>
            </CommandItem>
            <CommandItem value="/bio">
              <span>About me</span>
              <span className="ml-auto">/bio</span>
            </CommandItem>
            {links.length > 0 && (
              <CommandGroup heading="Links">
                {links
                  .filter(link => !link.tags.includes("hidden"))
                  .map((link, i) => (
                    <CommandItem key={i} value={`/r/${link.title}`}>
                      <LinkIcon className="mr-2 h-4 w-4" />
                      <span className="font-semibold">{link.title}</span>
                      <span>{link.url}</span>
                    </CommandItem>
                  ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </CommandDialog>
    </>
  );
}
