"use server";
import { createServerClient } from "@/utils/supabase/server";
import { columns } from "./columns";
import { DataTable } from "./table";
import { toast } from "sonner";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import NewLink from "../new-link";

export default async function Page() {
  const supabase = createServerClient();
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
        <NewLink />
      </div>
    </main>
  );
}
