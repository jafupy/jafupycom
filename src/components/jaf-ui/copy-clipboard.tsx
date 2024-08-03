"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { toast } from "sonner";
import { ClipboardCheck, ClipboardIcon } from "lucide-react";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

export function CopyToClipboard({
  value,
  toast: sendToast = false,
  tooltip = "Copy to clipboard",
  className,
  buttonProps = { variant: "ghost" },
}: {
  value: string;
  toast?: boolean;
  tooltip?: string;
  className?: string;
  buttonProps?: ButtonProps;
}) {
  const [triggered, setTriggered] = useState(false);

  const handleCopy = () => {
    setTriggered(true);
    setTimeout(() => {
      setTriggered(false);
    }, 1000);
    try {
      navigator.clipboard
        .writeText(value)
        .then(() => {
          if (sendToast) toast.success("Copied to clipboard!", { description: value });
        })
        .catch(error => {
          if (sendToast)
            toast.error("Failed to copy to clipboard!", {
              description: error.message,
              duration: 5 * 60 * 1000,
            });
          console.log(error);
        });
    } catch (error) {
      toast.error("Sorry, your device doesn't support a copy to clipboard button. Please copy manually from below:", {
        description: value,
      });
    }
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={handleCopy} {...buttonProps} className={cn(className, buttonProps.className)}>
            <span className="sr-only">{tooltip}</span>
            {triggered ? (
              <ClipboardCheck className="h-4 w-4 text-emerald-500" />
            ) : (
              <ClipboardIcon className="h-4 w-4" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p className="m-0">{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
