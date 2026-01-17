import { useEffect, useState } from 'react';

/**
 * Hook to detect if user prefers reduced motion
 * @returns boolean indicating if reduced motion is preferred
 */
export const useReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    // Check if window is defined (client-side) to avoid SSR issues
    if (typeof window === 'undefined') {
      return false;
    }
    
    // Check for the reduced motion media query
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Add listener for changes
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      (mediaQuery as any).addListener(handleChange);
    }

    // Cleanup listener on unmount
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        (mediaQuery as any).removeListener(handleChange);
      }
    };
  }, []);

  return prefersReducedMotion;
};

/**
 * Gets appropriate transition settings based on user's motion preference
 * @param defaultTransition - The transition settings to use when motion is not reduced
 * @returns Transition settings respecting user preferences
 */
export const getTransitionSettings = (defaultTransition: any) => {
  const reducedMotion = useReducedMotion();
  
  if (reducedMotion) {
    return {
      ...defaultTransition,
      duration: 0.01, // Minimal duration to prevent animation
    };
  }
  
  return defaultTransition;
};