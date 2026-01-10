/**
 * Security utilities and configuration for the application
 * 
 * This file contains security-related utilities and configurations
 * to help maintain a secure application architecture.
 */

import { validateNumericInput, validateStringInput } from './validation';

// Security configuration constants
export const SECURITY_CONFIG = {
  // Input validation limits
  MAX_INPUT_LENGTH: 1000,
  MAX_ARRAY_LENGTH: 100,
  MAX_NESTING_DEPTH: 5,
  
  // Rate limiting (client side, though server-side is preferred)
  RATE_LIMIT_WINDOW_MS: 60 * 1000, // 1 minute
  RATE_LIMIT_MAX_REQUESTS: 10,
  
  // Timeout configurations
  REQUEST_TIMEOUT: 10000, // 10 seconds
  CONNECTION_TIMEOUT: 5000, // 5 seconds
  
  // Security headers that should be present
  REQUIRED_SECURITY_HEADERS: [
    'X-Content-Type-Options',
    'X-Frame-Options',
    'X-XSS-Protection'
  ],
  
  // Content Security Policy settings
  CSP_SETTINGS: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "blob:", "https:"],
    fontSrc: ["'self'", "data:", "https:"],
    connectSrc: ["'self'", "https://*.analytics.google.com"],
    frameAncestors: ["'none'"],
  }
};

/**
 * Sanitizes HTML content to prevent XSS
 * @param htmlContent - The HTML content to sanitize
 * @returns Sanitized HTML string
 */
export const sanitizeHtml = (htmlContent: string): string => {
  if (!htmlContent || typeof htmlContent !== 'string') {
    return '';
  }

  // Remove dangerous tags and attributes
  let sanitized = htmlContent
    // Remove script tags and their content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    // Remove iframe tags
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    // Remove form tags
    .replace(/<form\b[^<]*(?:(?!<\/form>)<[^<]*)*<\/form>/gi, '')
    // Remove event handlers (on*, javascript:, vbscript:)
    .replace(/on\w+="[^"]*"/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/vbscript:/gi, '')
    // Remove data URIs in certain contexts
    .replace(/<img\s+[^>]*src\s*=\s*["']?\s*data:/gi, '');

  return sanitized;
};

/**
 * Generates a cryptographically secure random token
 * @param length - Length of the token (default: 32)
 * @returns Random token string
 */
export const generateSecureToken = (length: number = 32): string => {
  const validatedLength = validateNumericInput(length, 16, 128, 32);
  
  if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
    // Browser environment
    const array = new Uint8Array(Math.ceil(validatedLength / 2));
    window.crypto.getRandomValues(array);
    return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('').substring(0, validatedLength);
  } else {
    // Fallback to Math.random (less secure but works in all environments)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < validatedLength; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
};

/**
 * Checks if a password meets security requirements
 * @param password - The password to validate
 * @returns Object with validation result and feedback
 */
export const validatePassword = (password: string): { isValid: boolean; feedback: string[] } => {
  const feedback: string[] = [];
  
  if (!password || typeof password !== 'string') {
    return { isValid: false, feedback: ['Password is required'] };
  }

  const validatedPassword = validateStringInput(password, 128);
  
  if (validatedPassword.length < 8) {
    feedback.push('Password must be at least 8 characters long');
  }
  
  if (!/[A-Z]/.test(validatedPassword)) {
    feedback.push('Password must contain at least one uppercase letter');
  }
  
  if (!/[a-z]/.test(validatedPassword)) {
    feedback.push('Password must contain at least one lowercase letter');
  }
  
  if (!/[0-9]/.test(validatedPassword)) {
    feedback.push('Password must contain at least one number');
  }
  
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(validatedPassword)) {
    feedback.push('Password should contain at least one special character');
  }

  return { 
    isValid: feedback.length === 0, 
    feedback 
  };
};

/**
 * Creates a Content Security Policy header string
 * @param overrides - Optional overrides for specific directives
 * @returns CSP header value
 */
export const createCSPHeader = (overrides?: Partial<typeof SECURITY_CONFIG.CSP_SETTINGS>): string => {
  const settings = { ...SECURITY_CONFIG.CSP_SETTINGS, ...overrides };
  const cspParts: string[] = [];

  for (const [directive, sources] of Object.entries(settings)) {
    if (Array.isArray(sources) && sources.length > 0) {
      cspParts.push(`${directive} ${sources.join(' ')}`);
    }
  }

  return cspParts.join('; ');
};

/**
 * Validates email format securely
 * @param email - Email to validate
 * @returns Whether the email is valid
 */
export const validateEmail = (email: string): boolean => {
  if (!email || typeof email !== 'string') {
    return false;
  }

  // Sanitize the input first
  const sanitizedEmail = validateStringInput(email, 254); // Max email length according to RFC

  // Basic email regex (not exhaustive but catches most cases)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  return emailRegex.test(sanitizedEmail);
};

/**
 * Checks if a URL is safe to navigate to (prevents open redirects)
 * @param url - URL to validate
 * @param allowedDomains - List of allowed domains (optional)
 * @returns Whether the URL is safe
 */
export const isSafeRedirectUrl = (url: string, allowedDomains?: string[]): boolean => {
  if (!url || typeof url !== 'string') {
    return false;
  }

  try {
    const parsedUrl = new URL(url, window.location.origin);
    
    // If allowed domains are specified, check if the host is in the list
    if (allowedDomains && !allowedDomains.includes(parsedUrl.hostname)) {
      return false;
    }

    // Only allow http and https protocols
    if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
      return false;
    }

    // Don't allow javascript:, data:, etc. protocols
    return true;
  } catch (error) {
    // If parsing fails, it's not a valid URL
    return false;
  }
};