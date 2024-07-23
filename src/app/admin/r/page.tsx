"use server";
import { createClient } from "@/utils/supabase/server";
import { type Link, columns } from "./columns";
import { DataTable } from "./table";
import { toast } from "sonner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CircleHelp, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default async function Page() {
  const supabase = createClient();
  const { data, error } = await supabase.from("links").select("*");

  if (error) {
    console.error(error);
    toast("Something went wrong while fetching data");
  }

  return (
    <main className="grid w-full flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3">
      
      <div className="col-span-2">
        <CardHeader className="pb-3">
          <CardTitle className="text-4xl">Link Shortener</CardTitle>
          <CardDescription className="opacity-0">.</CardDescription>
        </CardHeader>
        <DataTable className="col-span-2" columns={columns} data={data ?? []} />
      </div>
      <div>
        {/*
        ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

        ███    ██ ███████ ██     ██     ██      ██ ███    ██ ██   ██
        ████   ██ ██      ██     ██     ██      ██ ████   ██ ██  ██
        ██ ██  ██ █████   ██  █  ██     ██      ██ ██ ██  ██ █████
        ██  ██ ██ ██      ██ ███ ██     ██      ██ ██  ██ ██ ██  ██
        ██   ████ ███████  ███ ███      ███████ ██ ██   ████ ██   ██

        --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        */}
        <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
          <CardHeader className="flex flex-col items-start bg-muted/50">
            <CardTitle className="group flex flex-col items-center gap-2 text-lg">New Link</CardTitle>
            <CardDescription>Create a new /r/ link</CardDescription>
          </CardHeader>
          <CardContent className="p-6 text-sm">
            <div className="grid gap-3">
              <h2 className="font-semibold">Link Parameters</h2>
              <div className="grid grid-cols-3 items-center gap-x-2 gap-y-3">
                <span className=" text-muted-foreground">Destination</span>
                <Input placeholder="www.somewhere.com" className="col-span-2"></Input>

                <span className="flex text-muted-foreground">
                  Shortcut <span className="ml-auto">/r/</span>
                </span>
                <div className="relative col-span-2">
                  <Input placeholder="somewhere" className="col-span-2"></Input>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger className="absolute -right-2 top-1/2 -translate-y-1/2 bg-transparent">
                        <CircleHelp className="h-4 w-4" />
                        <span className="sr-only">Requirements & Info</span>
                      </TooltipTrigger>
                      <TooltipContent className="backdrop-blur-xs flex flex-col bg-muted/20 p-2 text-sm text-black shadow-lg ">
                        <p className="max-w-[40ch]">
                          This is the part that goes after /r/ in the URL.
                          <br />
                          <span className="font-semibold">Requirements</span>
                          <br />
                          All lowercase letters, numbers and hyphens only. <br />
                          Maximum length of 20 characters.
                          <br />
                          Do not include the /r/ in the URL, or any whitespace.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
            <Separator className="my-2" />
            <h2 className="font-semibold">Link Metadata</h2>
            <div className="grid grid-cols-3 items-center gap-3">
              <span className=" text-muted-foreground">Title</span>
              <Input placeholder="Somewhere" className="col-span-2"></Input>

              <span className="text-muted-foreground">Description</span>
              <Input placeholder="somewhere on the internet" className="col-span-2"></Input>
            </div>
          </CardContent>
          <CardFooter
            className="pr-auto pr -6 flex flex-row items-center border-t bg-muted/50
          py-3"
          >
            <Button variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Create New Link
            </Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
