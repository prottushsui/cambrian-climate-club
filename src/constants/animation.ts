import { Variants } from 'framer-motion';

// Institutional animation variants - purposeful, minimal, and consistent
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 1,
      duration: 0.55
    }
  }
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 130,
      duration: 0.55
    }
  }
};

// Simple scale in animation
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 160,
      duration: 0.55
    }
  }
};

// Simple slide in from left
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 130,
      duration: 0.55
    }
  }
};

// Simple slide in from right
export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 130,
      duration: 0.55
    }
  }
};

// Subtle card hover effect
export const cardHoverVariants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 2px 8px rgba(15, 23, 42, 0.08)"
  },
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 16px 30px rgba(15, 23, 42, 0.16)",
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 320
    }
  }
};

// Subtle button hover effect
export const buttonHoverVariants = {
  rest: {
    scale: 1,
    y: 0
  },
  hover: {
    scale: 1.04,
    y: -2,
    transition: {
      type: "spring",
      damping: 18,
      stiffness: 420
    }
  }
};
