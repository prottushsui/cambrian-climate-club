"use client";

import { Marquee } from "@/components/ui/marquee"; // Adjust path if needed

const logos = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
];

export function MarqueeSimpleDemo() {
  return (
    <div className="p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Technologies We Use</h2>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 py-8">
        <Marquee pauseOnHover className="[--duration:20s]">
          {logos.map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Tech Logo ${idx + 1}`}
              className="mx-4 h-16 w-16 grayscale opacity-50 hover:grayscale-0 hover:opacity-100"
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-gray-900"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-gray-900"></div>
      </div>
    </div>
  );
}
