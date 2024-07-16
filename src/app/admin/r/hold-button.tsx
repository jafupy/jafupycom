import React, { useState, useRef, useEffect } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";

interface HoldToDeleteButtonProps {
  onDelete: () => void;
  holdTime?: number;
  children?: React.ReactNode;
  buttonProps?: ButtonProps;
}

const HoldToDeleteButton: React.FC<HoldToDeleteButtonProps> = ({
  onDelete,
  holdTime = 2000,
  children,
  buttonProps,
}) => {
  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const holdTimeout = useRef<NodeJS.Timeout | null>(null);
  const holdInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (holdTimeout.current) clearTimeout(holdTimeout.current);
      if (holdInterval.current) clearInterval(holdInterval.current);
    };
  }, []);

  const startHold = () => {
    setHolding(true);
    holdInterval.current = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= holdTime) {
          if (holdInterval.current) clearInterval(holdInterval.current);
          if (holdTimeout.current) clearTimeout(holdTimeout.current);
          onDelete();
          return holdTime;
        }
        return prevProgress + 50;
      });
    }, 50);

    holdTimeout.current = setTimeout(() => {
      //   if (holdInterval.current) clearInterval(holdInterval.current);
      onDelete();
    }, holdTime);
  };

  const cancelHold = () => {
    // console.log("Cancelling hold");
    if (holdTimeout.current) clearTimeout(holdTimeout.current);
    if (holdInterval.current) clearInterval(holdInterval.current);
    setHolding(false);
    setProgress(0);
  };

  return (
    <Button
      onMouseDown={startHold}
      onMouseUp={cancelHold}
      onMouseLeave={cancelHold}
      {...buttonProps}
      className="group relative overflow-visible"
    >
      <div
        aria-hidden
        style={{
          background: `
          conic-gradient(
              rgb(239 68 68) ${getProgress(holdTime, progress).computed}deg,
              rgb(248, 113, 113) ${getProgress(holdTime, progress).computed}deg,
              transparent ${getProgress(holdTime, progress).original}deg)
          `,
        }}
        className="group absolute  -inset-[0px] z-0  overflow-visible rounded-[8px]"
      ></div>
      <div className="absolute inset-0.5 z-[1] rounded-[6px] hover:bg-slate-100 group-hover:bg-slate-100 dark:hover:bg-slate-800 group-hover:dark:bg-slate-800"></div>
      <span class="z-[2]">{children}</span>
      {/* <span className="font-tight hg-7 absolute -top-7 z-10 hidden min-h-7 w-full items-center justify-center rounded-md border border-red-500/35 bg-muted px-2 py-0 text-xs group-hover:flex">
        {holding ? `${100 - Math.round((progress / holdTime) * 100)}` : ""}
      </span> */}
    </Button>
  );
};

export default HoldToDeleteButton;

function getProgress(holdTime, progress) {
  const degrees = Math.round((progress / holdTime) * 100) * 3.6;
  // 315º is a quater away from full
  if (degrees < 180) {
    // console.log("Less than 315");
    return { original: degrees, computed: degrees - 45 };
  }
  if (degrees < 360 * 0.8) {
    // 80% of the way
    // console.log("Less than 350");
    return { original: degrees, computed: degrees * 0.8 };
  }
  if (degrees >= 360 * 0.8) {
    // console.log("less than 80%");
    return { original: degrees, computed: degrees };
  }
}
