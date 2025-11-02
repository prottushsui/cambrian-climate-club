"use client";

import { Glow } from "@/components/ui/glow";
import { Card, CardContent } from "@/components/ui/card"; // Assuming Card exists

export function GlowDemo() {
  return (
    <div className="relative flex h-[400px] w-full items-center justify-center rounded-lg border bg-background p-8">
      <Glow variant="interactive" className="opacity-50 scale-125 blur-3xl" />
      <Card className="relative z-10 w-64 border-none shadow-2xl">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold">Card with Glow</h3>
          <p className="text-sm text-muted-foreground">This card has a subtle glow effect behind it.</p>
        </CardContent>
      </Card>
    </div>
  );
}
