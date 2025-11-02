import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "rgba(0, 0, 0, 1)",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        style={
          {
            "--spread": "90deg",
            "--shimmer-color": shimmerColor,
            "--radius": borderRadius,
            "--speed": shimmerDuration,
            "--cut": shimmerSize,
            "--bg": background,
          } as CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)] dark:text-black",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px]",
          className,
        )}
        ref={ref}
        {...props}
      >
        {/* spark container */}
        <div
          className={cn(
            "-z-30 blur-[2px]",
            "absolute inset-0 overflow-visible [container-type:size]",
          )}
        >
          {/* spark */}
          <div className="absolute inset-0 h-[100cqw] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
            {/* spark before */}
            <div className="absolute inset-[-100%] w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
          </div>
        </div>
        {/* backdrop */}
        <div
          className={cn(
            "absolute inset-0 rounded-[--radius]",
            "bg-[linear-gradient(40deg,transparent,rgba(0,0,0,.5)_50%,transparent)]",
            "dark:bg-[linear-gradient(40deg,transparent,rgba(255,255,255,.5)_50%,transparent)]",
            "group-hover:opacity-0",
          )}
        />
        {/* background shine */}
        <div
          className={cn(
            "absolute inset-0 rounded-[--radius]",
            "bg-[linear-gradient(40deg,transparent,rgba(0,0,0,.5)_50%,transparent)]",
            "dark:bg-[linear-gradient(40deg,transparent,rgba(255,255,255,.5)_50%,transparent)]",
            "group-hover:opacity-0",
          )}
        />
        {/* shimmer */}
        <div
          className={cn(
            "absolute left-0 top-0 h-full w-full",
            "bg-[linear-gradient(to_right,transparent,rgba(0,0,0,.5)_50%,transparent)]",
            "dark:bg-[linear-gradient(to_right,transparent,rgba(255,255,255,.5)_50%,transparent)]",
            "animate-slide-shimmer",
            "[length:var(--shimmer-size)] [mask:linear-gradient(90deg,transparent,cutting-edge,transparent)]",
          )}
          style={
            {
              "--cutting-edge": shimmerSize,
            } as CSSProperties
          }
        />

        {/* inner content container */}
        <div
          className={cn(
            "relative z-10 flex items-center justify-center",
            "text-black dark:text-white",
          )}
        >
          {children}
        </div>

        {/* pseudo-element for button press effect */}
        <div
          className={cn(
            "absolute inset-0 rounded-[--radius]",
            "bg-[linear-gradient(40deg,transparent,rgba(0,0,0,.5)_50%,transparent)]",
            "dark:bg-[linear-gradient(40deg,transparent,rgba(255,255,255,.5)_50%,transparent)]",
            "opacity-0 transition-opacity duration-300",
            "group-active:opacity-100",
          )}
        />
      </button>
    );
  },
);
ShimmerButton.displayName = "ShimmerButton";

export { ShimmerButton };
