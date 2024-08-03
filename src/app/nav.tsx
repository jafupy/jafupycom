import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { UserMenu } from "./user-menu";
import HiddenSignIn from "./hidden-signin";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

type NavItem = {
  title: string;
  type: "menu" | "link";
  href: string | undefined;
  children: string | undefined;
  description: string;
  items: {
    title: string;
    href: string;
    description: string;
  }[];
};

const navItems: NavItem[] = [
  {
    title: "JaFu.py",
    image: "https://avatars.githubusercontent.com/u/104758482?v=4",
    type: "menu",
    href: "/",
    children: [
      {
        title: "Home",
        href: "/",
        description: "The main page",
      },
      {
        title: "Bio",
        href: "/bio",
        description: "Who is Jacob?",
      },
    ],
  },
];

export default function Nav() {
  return (
    <NavigationMenu className="fixed inset-x-12 top-4 z-50 list-none rounded-xl border-2 border-white/10 bg-white/20 px-4 py-2 shadow-md backdrop-blur-md dark:bg-black/20">
      <NavigationMenuList className="">
        {navItems.map(item =>
          item.type === "menu" ? (
            <NavCard key={item.title} title={item.title} href={item.href} content={item.content} />
          ) : (
            <NavigationMenuLink key={item.title} href={item.href}>
              {item.title}
            </NavigationMenuLink>
          )
        )}
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>JaFu.py</NavigationMenuTrigger>
          <NavigationMenuContent className="left-0">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      className=" aspect-square w-fit rounded-2xl"
                      src="https://avatars.githubusercontent.com/u/104758482?v=4"
                      alt="jafu.py logo"
                      width={100}
                      height={100}
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
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent className="left-0">
            <ul className="grid gap-3 p-6 md:min-w-[400px] lg:min-w-[500px] lg:grid-rows-3">
              <ListItem href="" title="Jaf//UI" img="https://utfs.io/f/0264a30e-42e2-4464-a25a-430ec4d1a5ad-jb4rg5.png">
                Extra components for Shadcn UI
              </ListItem>
              <ListItem href="/con-world" title="My Fantasy World">
                A fantasy world I made.
              </ListItem>
              <ListItem href="/mango" title="Mango">
                A Programming language of my own design.
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
          </NavigationMenuItem> */}
      </NavigationMenuList>
      {/* )} 

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
      )} */}
    </NavigationMenu>
  );
}

function NavCard({ title, items, image, href, description }: NavItem) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
          <li className="row-span-3">
            <NavigationMenuLink asChild>
              <a
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                href={href}
              >
                <Image className=" aspect-square w-fit rounded-2xl" src={image} alt={title} width={100} height={100} />
                <h3 className="mb-2 mt-4 text-lg font-medium">{title}</h3>
                <p className="text-sm leading-tight text-muted-foreground">{description}</p>
              </a>
            </NavigationMenuLink>
          </li>
          {/* {items.map(item => (
            <NavigationMenuItem key={item.title} href={item.href} title={item.title}>
              {item.description}
            </NavigationMenuItem>
          ))} */}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
