/**
 * Validation utilities for the application
 * 
 * This file contains utilities to validate inputs and prevent potential security
 * and performance issues caused by invalid or malicious data.
 */

/** 
 * Validates that a number is within safe bounds to prevent performance issues
 * @param value - The number to validate
 * @param min - Minimum allowed value (default: 0)
 * @param max - Maximum allowed value (default: 1000)
 * @param defaultValue - Value to return if validation fails (default: 0)
 * @returns Validated number within bounds
 */
export const validateNumericInput = (
  value: unknown, 
  min: number = 0, 
  max: number = 1000, 
  defaultValue: number = 0
): number => {
  // Check if the value is actually a number
  if (typeof value !== 'number' || isNaN(value) || !isFinite(value)) {
    return defaultValue;
  }

  // Clamp the value to the specified range
  const clampedValue = Math.max(min, Math.min(max, value));

  // Ensure it's still a valid number after clamping
  return isNaN(clampedValue) ? defaultValue : clampedValue;
};

/**
 * Validates string input to prevent injection attacks and excessive lengths
 * @param value - The string to validate
 * @param maxLength - Maximum allowed length (default: 1000)
 * @param pattern - Regex pattern to validate against (optional)
 * @param defaultValue - Value to return if validation fails (default: '')
 * @returns Validated string
 */
export const validateStringInput = (
  value: unknown,
  maxLength: number = 1000,
  pattern?: RegExp,
  defaultValue: string = ''
): string => {
  // Convert to string if it's not already
  let stringValue = '';
  if (value === null || value === undefined) {
    stringValue = defaultValue;
  } else {
    stringValue = String(value);
  }

  // Truncate to max length
  let truncatedValue = stringValue.substring(0, maxLength);

  // Sanitize basic HTML to prevent XSS
  truncatedValue = truncatedValue.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // Apply pattern validation if provided
  if (pattern && !pattern.test(truncatedValue)) {
    return defaultValue;
  }

  return truncatedValue;
};

/**
 * Validates array input to prevent excessively large arrays
 * @param value - The array to validate
 * @param maxLength - Maximum allowed length (default: 100)
 * @param itemValidator - Function to validate each item (optional)
 * @returns Validated array
 */
export const validateArrayInput = <T>(
  value: unknown,
  maxLength: number = 100,
  itemValidator?: (item: T) => boolean
): T[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  // Truncate to max length
  const truncatedArray = value.slice(0, maxLength);

  // Validate each item if validator provided
  if (itemValidator) {
    return truncatedArray.filter(item => itemValidator(item as T));
  }

  return truncatedArray;
};

/**
 * Validates object input to prevent prototype pollution and ensure shape
 * @param value - The object to validate
 * @param allowedKeys - Array of allowed keys (optional)
 * @param maxDepth - Maximum nesting depth (default: 5)
 * @returns Validated object
 */
export const validateObjectInput = (
  value: unknown,
  allowedKeys?: string[],
  maxDepth: number = 5
): Record<string, any> => {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    return {};
  }

  // Prevent prototype pollution
  if ((value as Record<string, any>).constructor === Object.prototype.constructor && 
      Object.getPrototypeOf(value) !== Object.prototype) {
    return {};
  }

  // Get all own enumerable properties
  const obj = value as Record<string, any>;
  const validatedObj: Record<string, any> = {};

  for (const [key, val] of Object.entries(obj)) {
    // Check if key is allowed
    if (allowedKeys && !allowedKeys.includes(key)) {
      continue;
    }

    // Validate based on type
    if (typeof val === 'number') {
      validatedObj[key] = validateNumericInput(val);
    } else if (typeof val === 'string') {
      validatedObj[key] = validateStringInput(val);
    } else if (typeof val === 'object' && val !== null && maxDepth > 0) {
      validatedObj[key] = validateObjectInput(val, allowedKeys, maxDepth - 1);
    } else if (Array.isArray(val)) {
      validatedObj[key] = validateArrayInput(val);
    } else {
      // For other types, keep as is but avoid functions
      if (typeof val !== 'function') {
        validatedObj[key] = val;
      }
    }
  }

  return validatedObj;
};

/**
 * Validates URL input to prevent open redirect vulnerabilities
 * @param url - The URL to validate
 * @param allowedHosts - Array of allowed hosts (optional)
 * @returns Validated URL string
 */
export const validateUrlInput = (
  url: string,
  allowedHosts?: string[]
): string => {
  if (!url || typeof url !== 'string') {
    return '';
  }

  try {
    const parsedUrl = new URL(url);
    
    // If allowed hosts are specified, check if the host is in the list
    if (allowedHosts && !allowedHosts.includes(parsedUrl.hostname)) {
      return '';
    }

    // Only allow http and https protocols
    if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
      return '';
    }

    return parsedUrl.toString();
  } catch (error) {
    // If parsing fails, return empty string
    return '';
  }
};