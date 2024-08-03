"use client";

import { createClient } from "@/utils/supabase/client";
import { LogOut } from "lucide-react";
import { redirect } from "next/dist/server/api-utils";
import { RedirectType } from "next/navigation";

//  ____  _               _
// / ___|| |__   __ _  __| | ___ _ __
// \___ \| '_ \ / _` |/ _` |/ __| '_ \
//  ___) | | | | (_| | (_| | (__| | | |
// |____/|_| |_|\__,_|\__,_|\___|_| |_|
//
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { toast } from "sonner";

export function UserMenu({ children }) {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <NavigationMenuLink
          href="/"
          onClick={async () => {
            const supabase = createClient();
            await supabase.auth.signOut();
            toast("Signed out successfully");
          }}
        >
          <Button variant="outline" className="flex items-center gap-2">
            <LogOut className="mr-2 h-4 w-4" /> {/* Icon */}
            Sign out
          </Button>
        </NavigationMenuLink>
      </PopoverContent>
    </Popover>
  );
}
