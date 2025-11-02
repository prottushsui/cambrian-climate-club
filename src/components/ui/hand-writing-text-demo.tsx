"use client";

import { HandWrittenTitle } from "@/components/ui/hand-writing-text";

export function HandWritingTextDemo() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <HandWrittenTitle title="Beautiful Handwriting" subtitle="This title mimics natural handwriting." />
    </div>
  );
}
