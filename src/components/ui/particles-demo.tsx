"use client";

import { Particles } from "@/components/ui/particles";

export function ParticlesDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={50}
        color="#000000" // Use black particles for contrast on white background
        refresh
      />
      <div className="relative z-10 text-4xl font-bold text-black dark:text-white">
        Particles Demo
      </div>
    </div>
  );
}
