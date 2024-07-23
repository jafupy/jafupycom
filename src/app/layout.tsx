"use server";
import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
// import { Icons } from "~/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { LinkIcon } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { createClient } from "@/utils/supabase/server";
import { UserMenu } from "./user-menu";
import HiddenSignIn from "./hidden-signin";

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
  const supabase = createClient();
  const isAdmin = !!(await supabase.auth.getUser()).data.user;
  //
  return (
    <html lang="en">
      <body className={` font-sans transition-all`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* 
        |
        | 
        |
        | NAV MENU
        */}
          <NavigationMenu className="fixed  z-50 w-full list-none bg-white/20 p-4 backdrop-blur-md dark:bg-black/20">
            <NavigationMenuList className="">
              <NavigationMenuItem>
                <NavigationMenuTrigger>JaFu.py</NavigationMenuTrigger>
                <NavigationMenuContent className="left-0">
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <img
                            className=" aspect-square w-fit rounded-2xl"
                            src="https://avatars.githubusercontent.com/u/104758482?v=4"
                            alt="jafu.py logo"
                          />
                          <h3 className="mb-2 mt-4 text-lg font-medium">Jacob</h3>
                          <p className="text-sm leading-tight text-muted-foreground">A random person on the internet</p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/" title="Home">
                      The main Page
                    </ListItem>
                    <ListItem href="/bio" title="Bio">
                      Who is Jacob?
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
                <NavigationMenuContent className="left-0">
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/blog"
                        >
                          <p class="mb-0 text-xs leading-tight text-muted-foreground">DD/MMM/YYYY</p>
                          <h3 className="mb-2 mt-2 text-lg font-medium">Latest Post</h3>
                          <p className="text-sm leading-tight text-muted-foreground">
                            This would be the latest post, but there aren&apos;t any yet.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/blog" title="2nd latest post">
                      This would be the second latest post, but there aren&apos;t any
                    </ListItem>
                    <ListItem href="/blog" title="3rd latest post">
                      This would be the third latest post, but there aren&apos;t any
                    </ListItem>
                    <ListItem href="/blog" title="All posts">
                      View all posts.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>jaf//UI</NavigationMenuTrigger>
                <NavigationMenuContent className="left-0">
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="relative flex h-full w-full select-none flex-col justify-start rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/ui"
                        >
                          <Image
                            className=" aspect-square w-fit rounded-2xl"
                            src="https://utfs.io/f/0264a30e-42e2-4464-a25a-430ec4d1a5ad-jb4rg5.png"
                            alt="jafu.py logo"
                            width={100}
                            height={100}
                          />

                          <h3 className="mb-2 mt-2 text-lg font-medium">Jaf//ui</h3>
                          <p className="text-sm leading-tight text-muted-foreground">
                            A collection of UI components built with shadcn-ui.
                            <span className="mt-2 flex items-center text-xs leading-tight text-muted-foreground">
                              <LinkIcon className="mr-2 h-4 w-4" /> Home page
                            </span>
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/ui/docs" title="Docs">
                      How to use the components on your projects
                    </ListItem>
                    <ListItem href="/ui/components" title="Components">
                      All the components
                    </ListItem>
                    <ListItem href="/ui/example" title="Examples">
                      All the examples
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="https://github.com/jafupy" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>GitHub</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
            {isAdmin && (
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="ml-auto">Admin</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className=" grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                            <h3 className="mb-2 mt-4 text-lg font-medium">Admin</h3>
                            <p className="text-sm leading-tight text-muted-foreground">All the managy stuff</p>
                          </div>
                        </NavigationMenuLink>
                      </li>
                      <ListItem href="/blog" title="Blog">
                        Edit & Manage the blog posts
                      </ListItem>
                      <ListItem href="/admin/r" title="Link Shortener">
                        Manage the r/
                      </ListItem>
                      <ListItem href="/admin/bio" title="Bio">
                        Edit the bio
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            )}
            <ModeToggle className="ml-auto" />
            {isAdmin ? (
              <UserMenu>
                <Avatar className="ml-4 h-8 w-8">
                  <AvatarImage src="https://avatars.githubusercontent.com/u/104758482?v=4" alt="@JaFu.py" />
                  <AvatarFallback>JF</AvatarFallback>
                </Avatar>
              </UserMenu>
            ) : (
              <HiddenSignIn />
            )}
          </NavigationMenu>
          {/*  */}
          <main className="flex  min-h-screen flex-col items-center justify-center px-4 pb-12 pt-24 sm:px-6 lg:px-8">
            {children}
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

function ListItem({ title, children, ...props }, ref) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
