import { Variants } from 'framer-motion';

// Apple-style animation variants with smooth, premium motion
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
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 80, 
      damping: 18, 
      mass: 1,
      duration: 0.6
    }
  }
};

export const titleContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: i * 0.12 },
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
    y: 40,
    scale: 0.9,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 120,
    },
  },
};

export const statItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
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
      staggerChildren: 0.25,
      delayChildren: 0.4,
    },
  },
};

export const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
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

// Apple-style fade in up animation
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
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

// Apple-style scale in animation
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
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

// Apple-style slide in from left
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
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

// Apple-style slide in from right
export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
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

// Apple-style hover effect for cards
export const cardHoverVariants = {
  rest: {
    y: 0,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)"
  },
  hover: {
    y: -8,
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.12)",
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 300
    }
  }
};

// Apple-style button hover effect
export const buttonHoverVariants = {
  rest: {
    scale: 1,
    y: 0
  },
  hover: {
    scale: 1.03,
    y: -2,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 400
    }
  }
};