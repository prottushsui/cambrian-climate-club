"use client";

import { cn } from "@/lib/utils";
import { NumberTicker } from "@/components/ui/number-ticker";

function NumberTickerDemo() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex items-center justify-center gap-2 text-4xl font-bold">
        <NumberTicker value={100} className="text-black dark:text-white" />
        <span className="text-black dark:text-white">+</span>
        <span className="text-black dark:text-white">Happy Customers</span>
      </div>
      <div className="flex items-center justify-center gap-2 text-4xl font-bold">
        <NumberTicker
          value={1000}
          direction="down"
          className="text-black dark:text-white"
        />
        <span className="text-black dark:text-white">Downloads</span>
      </div>
      <div className="flex items-center justify-center gap-2 text-4xl font-bold">
        <NumberTicker
          value={500}
          delay={1}
          className="text-black dark:text-white"
        />
        <span className="text-black dark:text-white">Active Users</span>
      </div>
    </div>
  );
}

export { NumberTickerDemo };
