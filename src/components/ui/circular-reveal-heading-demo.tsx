"use client";

import { CircularRevealHeading } from "@/components/ui/circular-reveal-heading";

const items = [
  {
    text: "SUSTAINABILITY",
    image: "https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHw%3D&auto=format&fit=crop&w=500&q=80", // Replace with relevant image
  },
  {
    text: "ACTION",
    image: "https://images.unsplash.com/photo-1531346878377-a5be2e3bb08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHw%3D&auto=format&fit=crop&w=500&q=80", // Replace with relevant image
  },
  {
    text: "FUTURE",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHw%3D&auto=format&fit=crop&w=500&q=80", // Replace with relevant image
  },
  {
    text: "CLIMATE",
    image: "https://images.unsplash.com/photo-1498496294664-d9372eb521f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHw%3D&auto=format&fit=crop&w=500&q=80", // Replace with relevant image
  },
];

export function CircularRevealHeadingDemo() {
  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <CircularRevealHeading
        items={items}
        centerText={
          <div className="text-xl font-bold text-[#444444] dark:text-white">
            CLIMATE CLUB
          </div>
        }
        size="md"
      />
    </div>
  );
}
