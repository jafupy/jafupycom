import * as React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import NewLink from "./new-link";

export default function Dashboard() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
      <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
        <CardHeader>
          <CardTitle className="text-4xl sm:col-span-3">Admin Admin</CardTitle>
          {/* <CardDescription className="opacity-0">.</CardDescription> */}
        </CardHeader>
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="flex flex-col" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle>Blog</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">Manage the blog posts</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button>Manage</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle>Link Shortener</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Manage the link shortener
              </CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button>Go</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle>Bio</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">Edit the bio</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button>Go</Button>
            </CardFooter>
          </Card>
        </div>
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
