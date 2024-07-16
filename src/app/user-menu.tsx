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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function UserMenu({ children }) {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <div>
          <Button
            variant="ghost"
            onClick={async () => {
              const supabase = createClient();
              await supabase.auth.signOut();
              redirect("/", RedirectType.INTERNAL);
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign out
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
