"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type HandWrittenTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

const HandWrittenTitle = ({
  title,
  subtitle,
  className,
}: HandWrittenTitleProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 py-16">
      <div className="relative flex w-full max-w-4xl items-center justify-center">
        <motion.h1
          className={cn(
            "text-5xl font-bold text-black dark:text-white max-w-3xl text-center",
            className
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {title}
        </motion.h1>
      </div>
      {subtitle && (
        <motion.p
          className="text-xl text-black/80 dark:text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export { HandWrittenTitle };
