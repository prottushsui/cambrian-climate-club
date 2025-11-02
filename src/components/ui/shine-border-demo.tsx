"use client";

import { ShineBorder } from "@/components/ui/shine-border";

export function ShineBorderDemo() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <ShineBorder
        className="text-2xl font-bold capitalize"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <div className="flex min-h-32 w-60 items-center justify-center bg-gray-100 dark:bg-gray-900">
          <span> Shine Border </span>
        </div>
      </ShineBorder>
    </div>
  );
}
