/**
 * Performance monitoring utilities
 * 
 * This file contains utilities to prepare the application for performance monitoring
 * and optimization. These functions can be used to track key metrics and prepare
 * for integration with performance monitoring tools.
 */

import { PERFORMANCE_CONFIG } from './constants';

/**
 * Measures the performance of a function or code block
 * @param fn - The function to measure
 * @param name - Name for the performance measurement
 * @returns The result of the function and performance metrics
 */
export const measurePerformance = async <T>(
  fn: () => T | Promise<T>,
  name: string
): Promise<{ result: T; duration: number; timestamp: number }> => {
  if (!PERFORMANCE_CONFIG.COLLECT_PERFORMANCE_METRICS) {
    const result = await Promise.resolve(fn());
    return { result, duration: 0, timestamp: Date.now() };
  }

  const startTime = performance.now();
  const timestamp = Date.now();
  const result = await Promise.resolve(fn());
  const duration = performance.now() - startTime;

  // Log performance metrics if needed
  if (process.env.NODE_ENV === 'development') {
    console.log(`Performance measurement for ${name}: ${duration.toFixed(2)}ms`);
  }

  // In the future, this could send data to analytics services
  // sendPerformanceMetrics(name, duration, timestamp);

  return { result, duration, timestamp };
};

/**
 * Tracks Largest Contentful Paint (LCP) for a component
 * @param callback - Function to call when LCP is observed
 */
export const trackLCP = (callback: (metric: any) => void) => {
  if (!('PerformanceObserver' in window)) return;

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    callback(lastEntry);
  });

  observer.observe({ entryTypes: ['largest-contentful-paint'] });
};

/**
 * Tracks First Input Delay (FID) for a component
 * @param callback - Function to call when FID is observed
 */
export const trackFID = (callback: (metric: any) => void) => {
  if (!('PerformanceObserver' in window)) return;

  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const firstEntry = entries[0];
    callback(firstEntry);
  });

  observer.observe({ entryTypes: ['first-input'] });
};

/**
 * Tracks Cumulative Layout Shift (CLS) for a component
 * @param callback - Function to call when CLS is observed
 */
export const trackCLS = (callback: (metric: any) => void) => {
  if (!('PerformanceObserver' in window)) return;

  let clsValue = 0;
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    for (const entry of entries) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
      }
    }
    callback({ value: clsValue, entries });
  });

  observer.observe({ entryTypes: ['layout-shift'] });
};

/**
 * Measures component render time
 * @param componentName - Name of the component
 * @param renderFn - Function that renders the component
 * @returns Render result and timing information
 */
export const measureComponentRender = async <T>(
  componentName: string,
  renderFn: () => T | Promise<T>
) => {
  return measurePerformance(renderFn, `render-${componentName}`);
};

/**
 * Measures API call performance
 * @param fetchFn - Function that performs the API call
 * @param endpoint - API endpoint being called
 * @returns API response and performance metrics
 */
export const measureApiCall = async <T>(
  fetchFn: () => T | Promise<T>,
  endpoint: string
) => {
  return measurePerformance(fetchFn, `api-${endpoint}`);
};

/**
 * Measures image loading performance
 * @param src - Image source URL
 * @param imgElement - Image element to measure
 * @returns Promise that resolves when image loads with performance metrics
 */
export const measureImageLoad = (src: string, imgElement?: HTMLImageElement) => {
  return new Promise<{ duration: number; timestamp: number }>((resolve, reject) => {
    const startTime = performance.now();
    const timestamp = Date.now();
    
    const img = imgElement || new Image();
    img.onload = () => {
      const duration = performance.now() - startTime;
      resolve({ duration, timestamp });
    };
    img.onerror = () => {
      reject(new Error(`Failed to load image: ${src}`));
    };
    
    // Set timeout to prevent hanging
    setTimeout(() => {
      reject(new Error(`Image load timeout: ${src}`));
    }, PERFORMANCE_CONFIG.IMAGE_LOAD_TIMEOUT);
    
    img.src = src;
  });
};

/**
 * Reports Web Vitals to analytics (placeholder for future implementation)
 * @param metric - The web vital metric to report
 */
export const reportWebVital = (metric: { name: string; value: number; id?: string; label: string }) => {
  // This is a placeholder - in the future, this could send metrics to analytics services
  // Example: analytics.track('web-vital', { name: metric.name, value: metric.value });
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`Web Vital: ${metric.name} = ${metric.value} (${metric.label})`);
  }
};

// Initialize web vital tracking if available
export const initWebVitalsTracking = () => {
  // This function can be called to initialize web vitals tracking
  // In a real implementation, it would use the web-vitals library
  if (process.env.NODE_ENV === 'production') {
    // Load web-vitals library and start tracking
    // import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    //   getCLS(reportWebVital);
    //   getFID(reportWebVital);
    //   getFCP(reportWebVital);
    //   getLCP(reportWebVital);
    //   getTTFB(reportWebVital);
    // });
  }
};