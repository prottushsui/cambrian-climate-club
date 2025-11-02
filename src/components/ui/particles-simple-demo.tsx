"use client";

import { Particles } from "@/components/ui/particles"; // Adjust path if needed

export function ParticlesSimpleDemo() {
  return (
    <div className="relative flex h-64 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-4">
      <Particles
        className="absolute inset-0"
        quantity={50} {/* Reduced quantity for demo clarity */}
        ease={80}
        color="#3B82F6" // Blue particles
        refresh
      />
      <div className="relative z-10 text-center">
        <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Interactive Particle Field</h3>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Move your mouse around to interact!</p>
      </div>
    </div>
  );
}
