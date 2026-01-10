/**
 * Constants and configuration values for the application
 * 
 * This file contains shared constants that will be used across the application
 * to maintain consistency and prepare for future features like SEO, analytics, etc.
 */

// SEO and Meta Tags
export const SEO_CONFIG = {
  defaultTitle: 'Cambrian Climate Club — Campus 2',
  defaultDescription: 'A student-led environmental initiative promoting sustainability, climate awareness, and community action since 2023.',
  defaultKeywords: ['climate', 'sustainability', 'environment', 'student', 'initiative', 'campus'],
  siteUrl: 'https://cambrian-climate-club.example.com', // Replace with actual URL
  twitterHandle: '@climateclub', // Replace with actual handle
};

// Performance Monitoring
export const PERFORMANCE_CONFIG = {
  // Timeouts for various operations
  API_TIMEOUT: 10000, // 10 seconds
  IMAGE_LOAD_TIMEOUT: 5000, // 5 seconds
  
  // Performance thresholds
  LARGEST_CONTENTFUL_PAINT: 2500, // 2.5 seconds
  FIRST_INPUT_DELAY: 100, // 100ms
  CUMULATIVE_LAYOUT_SHIFT: 0.1, // 0.1 score
  
  // Performance metrics collection
  COLLECT_PERFORMANCE_METRICS: process.env.NODE_ENV === 'production',
};

// Accessibility
export const ACCESSIBILITY_CONFIG = {
  // Focus management
  FOCUS_VISIBLE_CLASS: 'focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none',
  
  // ARIA labels and descriptions
  ARIA_LIVE_POLITE: 'polite',
  ARIA_LIVE_ASSERTIVE: 'assertive',
  
  // Skip to content link
  SKIP_TO_CONTENT_ID: 'main-content',
  SKIP_TO_NAVIGATION_ID: 'main-navigation',
};

// Animation and Interaction
export const ANIMATION_CONFIG = {
  // Animation durations
  DEFAULT_DURATION: 0.3, // seconds
  HOVER_DURATION: 0.2, // seconds
  TRANSITION_DURATION: 0.3, // seconds
  
  // Animation easing
  EASE_IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
  EASE_OUT: 'cubic-bezier(0, 0, 0.2, 1)',
  
  // Animation thresholds
  ANIMATION_THRESHOLD: 0.1, // Intersection Observer threshold
};

// Testing
export const TESTING_CONFIG = {
  // Test ID prefixes
  TEST_ID_PREFIX: 'test-',
  COMPONENT_TEST_ID: 'component',
  
  // Mock data settings
  USE_MOCK_DATA: process.env.NODE_ENV === 'test',
};

// Data and API
export const DATA_CONFIG = {
  // Cache settings
  DEFAULT_CACHE_DURATION: 5 * 60 * 1000, // 5 minutes in ms
  
  // Pagination
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 100,
  
  // Retry settings
  DEFAULT_RETRY_ATTEMPTS: 3,
  DEFAULT_RETRY_DELAY: 1000, // 1 second
};

// UI/UX
export const UI_CONFIG = {
  // Breakpoints
  BREAKPOINTS: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Z-index values
  Z_INDEX: {
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
  },
  
  // Spacing
  SPACING: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
};

// Feature flags for future enhancements
export const FEATURE_FLAGS = {
  ENABLE_SEO_UPDATES: true,
  ENABLE_ANALYTICS: false,
  ENABLE_PERFORMANCE_MONITORING: true,
  ENABLE_ACCESSIBILITY_UPDATES: true,
  ENABLE_TESTING_UPDATES: true,
};