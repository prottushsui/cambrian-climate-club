"use client";

import { Icons } from "@/components/ui/icons"; // Adjust path if needed

export function IconsDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Icons Demo</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
          <Icons.logo className="h-12 w-12 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium">Logo</span>
        </div>
        <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
          <Icons.gitHub className="h-12 w-12 text-gray-800 dark:text-gray-200" />
          <span className="text-sm font-medium">GitHub</span>
        </div>
        {/* Add more icons as they are implemented in icons.tsx */}
         <div className="flex flex-col items-center gap-2 p-4 border rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-600 dark:text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
          <span className="text-sm font-medium">Leaf</span> {/* Example using direct SVG */}
        </div>
      </div>
    </div>
  );
}
