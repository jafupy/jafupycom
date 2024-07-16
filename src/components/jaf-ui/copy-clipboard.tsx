"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { ClipboardCheck, ClipboardIcon } from "lucide-react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";

export default function CopyClipboard({
  value,
  toast: sendToast = false,
  tooltip = "Copy to clipboard",
}) {
  const [triggered, setTriggered] = useState(false);

  const handleCopy = () => {
    setTriggered(true);
    setTimeout(() => {
      setTriggered(false);
    }, 1000);
    navigator.clipboard
      .writeText(value)
      .then(() => {
        if (sendToast)
          toast({
            title: "Copied to clipboard!",
            description: "Successfully copied to clipboard.",
            variant: "default",
            color: "green",
          });
      })
      .catch((error) => {
        if (sendToast)
          toast({
            title: "Failed to copy to clipboard",
            description: "The value could not be copied to your clipboard.",
            variant: "destructive",
          });
        console.log(error);
      });
  };
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button onClick={handleCopy} variant="ghost">
            <span className="sr-only">{tooltip}</span>
            {triggered ? (
              <ClipboardCheck className="h-4 w-4 text-emerald-500" />
            ) : (
              <ClipboardIcon className="h-4 w-4" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
