"use client";

import { cn } from "@/lib/utils";
import React from "react";

type MarqueeProps = {
  children: React.ReactNode[];
  direction?: "left" | "up";
  pauseOnHover?: boolean;
  reverse?: boolean;
  fade?: boolean;
  className?: string;
  innerClassName?: string;
};

export function Marquee({
  children,
  direction = "left",
  pauseOnHover = false,
  reverse = false,
  fade = false,
  className,
  innerClassName,
}: MarqueeProps) {
  const isVertical = direction === "up";
  const numChildren = React.Children.count(children);

  // Duplicate children for seamless looping
  const duplicatedChildren = [...children, ...children];

  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !isVertical,
          "flex-col": isVertical,
        },
        className
      )}
      style={
        {
          "--gap": "1rem", // Default gap
          "--duration": "40s", // Default duration
        } as React.CSSProperties
      }
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 animate-marquee items-center justify-around gap-[--gap]",
          {
            "animate-marquee-vertical flex-col": isVertical,
            "[animation-direction:reverse]": reverse,
            "group-hover:[animation-play-state:paused]": pauseOnHover,
          },
          innerClassName
        )}
      >
        {duplicatedChildren}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 animate-marquee items-center justify-around gap-[--gap] aria-hidden:true",
          {
            "animate-marquee-vertical flex-col": isVertical,
            "[animation-direction:reverse]": reverse,
            "group-hover:[animation-play-state:paused]": pauseOnHover,
          },
          innerClassName
        )}
        aria-hidden="true"
      >
        {duplicatedChildren}
      </div>
      {fade && (
        <div
          className={cn(
            "absolute inset-y-0 left-0 z-10 w-1/3 bg-gradient-to-r from-white dark:from-background",
            { "bg-gradient-to-b from-white dark:from-background": isVertical }
          )}
        />
      )}
      {fade && (
        <div
          className={cn(
            "absolute inset-y-0 right-0 z-10 w-1/3 bg-gradient-to-l from-white dark:from-background",
            { "bg-gradient-to-t from-white dark:from-background": isVertical }
          )}
        />
      )}
    </div>
  );
}
