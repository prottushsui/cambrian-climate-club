"use client";

import { NeonButton } from "@/components/ui/neon-button";

export function NeonButtonDemo() {
  return (
    <div className="flex flex-col gap-4 p-6">
      <NeonButton variant="default">Default Neon</NeonButton>
      <NeonButton variant="solid">Solid Neon</NeonButton>
      <NeonButton variant="ghost">Ghost Neon</NeonButton>
      <NeonButton variant="default" neon={false}>No Neon Effect</NeonButton>
    </div>
  );
}
