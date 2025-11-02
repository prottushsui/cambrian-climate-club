"use client";

import { cn } from "@/lib/utils";
import { RetroGrid } from "@/components/ui/retro-grid";

export function RetroGridDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <RetroGrid />
      <div className="relative z-10 text-4xl font-bold text-black dark:text-white">
        Retro Grid Demo
      </div>
    </div>
  );
}
