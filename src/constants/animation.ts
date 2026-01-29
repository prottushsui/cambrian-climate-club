import { Variants } from 'framer-motion';

// Institutional animation variants - purposeful, minimal, and consistent
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 20, 
      mass: 1,
      duration: 0.4
    }
  }
};

export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 120,
      duration: 0.4
    }
  }
};

// Simple scale in animation
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 150,
      duration: 0.4
    }
  }
};

// Simple slide in from left
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 120,
      duration: 0.4
    }
  }
};

// Simple slide in from right
export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 120,
      duration: 0.4
    }
  }
};

// Subtle card hover effect
export const cardHoverVariants = {
  rest: {
    y: 0,
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
  },
  hover: {
    y: -4,
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 300
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
    scale: 1.02,
    y: -1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 400
    }
  }
};