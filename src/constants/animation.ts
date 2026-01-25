import { Variants } from 'framer-motion';

// Optimized animation variants with performance in mind
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Reduced from 0.12 for faster rendering
      delayChildren: 0.05    // Reduced from 0.1 for faster rendering
    }
  }
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 }, // Reduced y distance and scale difference
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100,    // Increased stiffness for shorter duration
      damping: 15,       // Adjusted damping for smoother animation
      mass: 0.8,         // Reduced mass for snappier response
      duration: 0.4      // Reduced from 0.6 for better performance
    }
  }
};

export const titleContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: i * 0.08 }, // Optimized for performance
  }),
};

export const titleChildVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 140,
      duration: 0.35
    },
  },
  hidden: {
    opacity: 0,
    y: 30, // Reduced from 40 for better performance
    scale: 0.95, // Reduced from 0.9 for better performance
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 140,
      duration: 0.35
    },
  },
};

export const statItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 15 }, // Reduced scale difference and y distance
  visible: {
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 150,     // Increased for faster settling
      damping: 18,        // Adjusted for smoother animation
      duration: 0.35      // Reduced for better performance
    }
  }
};

export const imageContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,  // Reduced from 0.25 for better performance
      delayChildren: 0.2,     // Reduced from 0.4 for faster rendering
    },
  },
};

export const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 25 }, // Reduced scale difference and y distance
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,    // Increased for faster settling
      damping: 16       // Adjusted for smoother animation
    },
  },
};

// Performance-optimized fade in up animation
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 }, // Reduced from 60 for better performance
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,        // Reduced for faster settling
      stiffness: 120,     // Increased for faster settling
      duration: 0.4       // Reduced for better performance
    }
  }
};

// Performance-optimized scale in animation
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 }, // Reduced from 0.8 for better performance
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 12,        // Reduced for faster settling
      stiffness: 140,     // Increased for faster settling
      duration: 0.35      // Reduced for better performance
    }
  }
};

// Performance-optimized slide in from left
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -30 }, // Reduced from -50 for better performance
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 10,        // Reduced for faster settling
      stiffness: 120,     // Increased for faster settling
      duration: 0.4       // Reduced for better performance
    }
  }
};

// Performance-optimized slide in from right
export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 30 }, // Reduced from 50 for better performance
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 10,        // Reduced for faster settling
      stiffness: 120,     // Increased for faster settling
      duration: 0.4       // Reduced for better performance
    }
  }
};

// Performance-optimized hover effect for cards
export const cardHoverVariants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
  },
  hover: {
    y: -6,      // Reduced from -8 for better performance
    scale: 1.02, // Added subtle scale for better visual effect
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.12)",
    transition: {
      type: "spring",
      damping: 12,    // Reduced for faster settling
      stiffness: 250  // Adjusted for performance
    }
  }
};

// Performance-optimized button hover effect
export const buttonHoverVariants = {
  rest: {
    scale: 1,
    y: 0
  },
  hover: {
    scale: 1.02,  // Reduced from 1.03 for better performance
    y: -1,        // Reduced from -2 for better performance
    transition: {
      type: "spring",
      damping: 10,    // Reduced for faster settling
      stiffness: 350  // Adjusted for performance
    }
  }
};