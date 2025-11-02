"use client";

import { NumberTicker } from "@/components/ui/number-ticker"; // Adjust path if needed

export function NumberTickerSimpleDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Number Ticker Examples</h2>
      <div className="flex flex-col items-center gap-4">
        <div className="text-center">
          <p className="text-4xl font-bold">
            <NumberTicker value={1000} className="text-blue-600 dark:text-blue-400" />
            <span className="text-gray-900 dark:text-white">+</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400">Happy Members</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold">
            <NumberTicker value={50} className="text-green-600 dark:text-green-400" />
            <span className="text-gray-900 dark:text-white">K+</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400">Trees Planted</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold">
            <NumberTicker value={25} className="text-purple-600 dark:text-purple-400" />
            <span className="text-gray-900 dark:text-white">%</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400">Carbon Reduction</p>
        </div>
      </div>
    </div>
  );
}
