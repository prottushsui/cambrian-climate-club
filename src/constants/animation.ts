import { Variants } from 'framer-motion';

// Premium animation variants with smooth, elegant motion
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 80, 
      damping: 18, 
      mass: 1,
      duration: 0.5
    }
  }
};

export const titleContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: i * 0.08 },
  }),
};

export const titleChildVariants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 120,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 120,
    },
  },
};

export const statItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 180, 
      damping: 20,
      duration: 0.5
    }
  }
};

export const imageContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 18
    },
  },
};

// Premium fade in up animation
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.6
    }
  }
};

// Premium scale in animation
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 150,
      duration: 0.5
    }
  }
};

// Premium slide in from left
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.6
    }
  }
};

// Premium slide in from right
export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 0.6
    }
  }
};

// Premium hover effect for cards
export const cardHoverVariants = {
  rest: {
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)"
  },
  hover: {
    y: -6,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 300
    }
  }
};

// Premium button hover effect
export const buttonHoverVariants = {
  rest: {
    scale: 1,
    y: 0
  },
  hover: {
    scale: 1.03,
    y: -1,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 400
    }
  }
};