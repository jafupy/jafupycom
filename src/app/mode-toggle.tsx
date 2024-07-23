"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ModeToggle({ className }) {
  const [theme, setTheme] = React.useState("system");
  const clienttheme = useTheme().theme;
  React.useEffect(() => {
    setTheme(clienttheme);
  }, [clienttheme]);
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={className}>
      {isOpen && (
        <ToggleGroup type="single">
          <ModeToggleItem className="h-4 w-4" setIsOpen={setIsOpen} tooltip="Toggle Light mode" value="light">
            <Sun className="h-4 w-4" />
          </ModeToggleItem>
          <ModeToggleItem className="h-4 w-4" setIsOpen={setIsOpen} tooltip="Toggle Dark mode" value="dark">
            <Moon className="h-4 w-4" />
          </ModeToggleItem>
          <ModeToggleItem className="h-4 w-4" setIsOpen={setIsOpen} tooltip="Toggle Auto mode" value="system">
            <Monitor className="h-4 w-4" />
          </ModeToggleItem>
        </ToggleGroup>
      )}
      {!isOpen && (
        <Button variant="ghost" className={className} onClick={() => setIsOpen(!isOpen)}>
          {theme === "dark" ? (
            <Moon className="h-4 w-4" />
          ) : // "moon"
          theme === "light" ? (
            <Sun className="h-4 w-4" />
          ) : (
            // "sun"
            <Monitor className="h-4 w-4" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      )}
    </div>
  );
}

function ModeToggleItem({ setIsOpen, tooltip, children, value }) {
  const { setTheme, theme } = useTheme();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            value={value}
            aria-label={tooltip}
            variant={theme === value ? "outline" : "ghost"}
            onClick={() => {
              setTheme(value);
              setIsOpen(false);
            }}
          >
            {children}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip.replace("Toggle ", "")}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
