"use client";

import { cn } from "@/lib/utils";

type ShineBorderProps = {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: string | string[];
  className?: string;
  children: React.ReactNode;
};

export function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#000000",
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } as React.CSSProperties
      }
      className={cn(
        "relative grid min-h-[60px] w-fit min-w-[320px] place-items-center rounded-[--border-radius] bg-white p-3 text-black dark:bg-black dark:text-white",
        className,
      )}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--border-radius": `${borderRadius}px`,
            "--duration": `${duration}s`,
            "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            "--background-radial-gradient": `radial-gradient(transparent,transparent)`,
            "--background-linear-gradient": `linear-gradient(${color instanceof Array ? color.join(",") : color}, ${color instanceof Array ? color.join(",") : color})`,
            "--after-border-radius": `${borderRadius}px`,
            "--shine-opacity": "0",
            "--shine-width": "100%",
            "--shine-offset": "0px",
          } as React.CSSProperties
        }
        className={cn(
          "before:animate-spin-around absolute inset-0 z-[-1] rounded-[--border-radius] bg-[linear-gradient(var(--border-width),rgba(0,0,0,0.1),rgba(0,0,0,0.1)),linear-gradient(var(--border-width),var(--background-radial-gradient),var(--background-radial-gradient))] bg-origin-border",
          "after:absolute after:inset-x-[--border-width] after:bottom-0 after:left-0 after:top-[--border-width] after:z-10 after:block after:h-[calc(var(--shine-width)*1px)] after:w-[150%] after:translate-x-[var(--shine-offset)] after:rounded-[--after-border-radius] after:bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.8),transparent)] after:opacity-[var(--shine-opacity)] after:[filter:blur(calc(var(--border-width)*1px))]",
          "before:[background:var(--background-linear-gradient)] before:[mask-composite:exclude] before:[mask:var(--mask-linear-gradient)]",
        )}
      />
      {children}
    </div>
  );
}
