"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

type GlowProps = {
  variant?: "default" | "interactive";
  className?: string;
} & HTMLMotionProps<"div">;

const Glow = React.forwardRef<HTMLDivElement, GlowProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "absolute inset-0 -z-10 overflow-hidden",
          "rounded-[inherit] border border-transparent",
          "bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand-foreground)/.1)_0%,_hsla(var(--brand-foreground)/0)_70%)]",
          variant === "interactive" && "bg-[radial-gradient(ellipse_at_center,_hsla(var(--brand-foreground)/.15)_0%,_hsla(var(--brand-foreground)/0)_60%)]",
          className
        )}
        {...props}
      />
    );
  }
);

Glow.displayName = "Glow";

export { Glow };
