"use client";
import { Button } from "@/components/ui/button";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

export default function HiddenSignIn() {
  return (
    <NavigationMenuLink
      href="/login"
      className="absolute -right-4 flex items-center gap-2"
    >
      <Button variant="ghost" className="flex items-center gap-2"></Button>
    </NavigationMenuLink>
  );
}
