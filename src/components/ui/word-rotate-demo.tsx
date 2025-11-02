"use client";

import { WordRotate } from "@/components/ui/word-rotate";

export function WordRotateDemo() {
  const words = ["Word", "Rotate", "Demo"];

  return (
    <WordRotate
      className="text-4xl font-bold text-black dark:text-white"
      words={words}
    />
  );
}
