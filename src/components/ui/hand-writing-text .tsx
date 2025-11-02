"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HandWrittenTitleProps {
  title?: string;
  subtitle?: string;
}

function HandWrittenTitle({ title = "Hand Written", subtitle }: HandWrittenTitleProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16">
      <div className="relative flex w-full max-w-4xl items-center justify-center">
        <motion.h1
          className="text-5xl font-bold text-black dark:text-white max-w-3xl text-center"
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
}

export { HandWrittenTitle };
