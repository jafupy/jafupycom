"use client";
import { Button } from "@/components/ui/button";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

export default function HiddenSignIn() {
  return (
    <NavigationMenuLink
      href="/signin"
      className="absoolute -right-7 flex items-center gap-2"
    >
      <Button variant="ghost" className="flex items-center gap-2"></Button>
    </NavigationMenuLink>
  );
}
