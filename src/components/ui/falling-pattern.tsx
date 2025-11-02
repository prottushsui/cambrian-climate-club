"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type FallingPatternProps = React.ComponentProps<'div'> & {
  /** Primary color of the falling elements (default: 'var(--primary)') */
  color?: string;
  /** Background color (default: 'var(--background)') */
  backgroundColor?: string;
  /** Animation duration in seconds (default: 150) */
  duration?: number;
  /** Blur intensity for the overlay effect (default: '1em') */
  blurIntensity?: string;
  /** Pattern density - affects spacing (default: 1) */
  density?: number;
};

export function FallingPattern({
  color = 'var(--primary)',
  backgroundColor = 'var(--background)',
  duration = 150,
  blurIntensity = '1em',
  density = 1,
  className,
  ...props
}: FallingPatternProps) {
  const patternSize = 300 * density;
  const patternOffset = -50 * density;
  const backgroundSizes = `${patternSize}px ${patternSize}px`;
  const startPositions = `${patternOffset}px ${patternOffset}px, ${patternOffset + 150 * density}px ${patternOffset + 150 * density}px`;
  const endPositions = `${patternOffset + 300 * density}px ${patternOffset + 300 * density}px, ${patternOffset + 450 * density}px ${patternOffset + 450 * density}px`;

  const generateBackgroundImage = () => [
    // Row 1
    `radial-gradient(4px 100px at 0px 0px, ${color}, transparent)`,
    `radial-gradient(4px 100px at 300px 0px, ${color}, transparent)`,
    `radial-gradient(1.5px 1.5px at 150px 0px, ${color} 100%, transparent 150%)`,
    // Row 2
    `radial-gradient(4px 100px at 0px 67px, ${color}, transparent)`,
    `radial-gradient(4px 100px at 300px 67px, ${color}, transparent)`,
    `radial-gradient(1.5px 1.5px at 150px 33.5px, ${color} 100%, transparent 150%)`,
    // Row 3
    `radial-gradient(4px 100px at 0px 134px, ${color}, transparent)`,
    `radial-gradient(4px 100px at 300px 134px, ${color}, transparent)`,
    `radial-gradient(1.5px 1.5px at 150px 67px, ${color} 100%, transparent 150%)`,
    // Row 4
    `radial-gradient(4px 100px at 0px 201px, ${color}, transparent)`,
    `radial-gradient(4px 100px at 300px 201px, ${color}, transparent)`,
    `radial-gradient(1.5px 1.5px at 150px 100.5px, ${color} 100%, transparent 150%)`,
    // Row 5
    `radial-gradient(4px 100px at 0px 268px, ${color}, transparent)`,
    `radial-gradient(4px 100px at 300px 268px, ${color}, transparent)`,
    `radial-gradient(1.5px 1.5px at 150px 134px, ${color} 100%, transparent 150%)`,
    // Row 6
    `radial-gradient(4px 100px at 0px 134px, ${color}, transparent)`,
    `radial-gradient(4px 100px at 300px 134px, ${color}, transparent)`,
    `radial-gradient(1.5px 1.5px at 150px 67px, ${color} 100%, transparent 150%)`,
    // Row 7
    `radial-gradient(4px 100px at 0px 179px, ${color}, transparent)`,
    `radial-gradient(4px 100px at 300px 179px, ${color}, transparent)`,
  ].join(',');

  return (
    <div className={cn('relative h-full w-full p-1', className)} {...props}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="size-full"
      >
        <motion.div
          className="relative size-full z-0"
          style={{
            backgroundColor,
            backgroundImage: generateBackgroundImage(),
            backgroundSize: backgroundSizes,
          }}
          variants={{
            initial: { backgroundPosition: startPositions },
            animate: {
              backgroundPosition: [startPositions, endPositions],
              transition: {
                duration: duration,
                ease: 'linear',
                repeat: Number.POSITIVE_INFINITY,
              },
            },
          }}
          initial="initial"
          animate="animate"
        />
      </motion.div>
      <div
        className="absolute inset-0 z-1 dark:brightness-600"
        style={{
          backdropFilter: `blur(${blurIntensity})`,
          backgroundImage: `radial-gradient(circle at 50% 50%, transparent 0, transparent 2px, ${backgroundColor} 2px)`,
          backgroundSize: `${8 * density}px ${8 * density}px`,
        }}
      />
    </div>
  );
}
