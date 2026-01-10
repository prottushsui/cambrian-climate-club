/**
 * API utilities for the application
 * 
 * This file contains utilities to securely communicate with backend APIs
 * while preventing common security vulnerabilities.
 */

import { validateUrlInput, validateStringInput } from './validation';

/**
 * Secure fetch wrapper that prevents common vulnerabilities
 * @param url - The URL to fetch
 * @param options - Fetch options
 * @returns Promise resolving to the fetch response
 */
export const secureFetch = async (
  url: string,
  options: RequestInit = {}
): Promise<Response> => {
  // Validate the URL to prevent SSRF attacks
  const validatedUrl = validateUrlInput(url);
  if (!validatedUrl) {
    throw new Error('Invalid URL provided');
  }

  // Ensure we're not requesting internal resources
  const parsedUrl = new URL(validatedUrl);
  if (parsedUrl.hostname === 'localhost' || parsedUrl.hostname === '127.0.0.1' || 
      parsedUrl.hostname.endsWith('.internal') || parsedUrl.hostname.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/)) {
    throw new Error('Access to internal resources is blocked');
  }

  // Add security headers to the request
  const secureOptions: RequestInit = {
    ...options,
    headers: {
      ...options.headers,
      // Prevent CSRF by including origin
      'Sec-Fetch-Site': 'same-origin',
      'Sec-Fetch-Mode': 'cors',
      'X-Requested-With': 'XMLHttpRequest',
    },
    // Set timeout to prevent hanging requests
    signal: AbortSignal.timeout(10000), // 10 second timeout
  };

  try {
    const response = await fetch(validatedUrl, secureOptions);

    // Check if the response is OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Verify the response content type is expected
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Unexpected content type received');
    }

    return response;
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Network error occurred');
    }
    throw error;
  }
};

/**
 * Fetches sensitive data from the API with proper validation
 * @returns Promise resolving to the sensitive data
 */
export const fetchSensitiveData = async (): Promise<any> => {
  try {
    const response = await secureFetch('/api/sensitive-data', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    // Validate the received data to prevent injection
    if (typeof data !== 'object' || data === null) {
      throw new Error('Invalid response format');
    }

    return data;
  } catch (error) {
    console.error('Error fetching sensitive data:', error);
    // Return a safe default instead of throwing to prevent breaking the UI
    return {
      publicInfo: {
        totalMembers: 0,
        foundingYear: 2023,
        mission: 'Promoting sustainability and climate awareness'
      },
      timestamp: new Date().toISOString()
    };
  }
};

/**
 * Sanitizes user input before sending to API
 * @param inputData - The data to sanitize
 * @returns Sanitized data
 */
export const sanitizeInputForApi = (inputData: any): any => {
  if (typeof inputData === 'string') {
    return validateStringInput(inputData);
  } else if (typeof inputData === 'number') {
    return inputData; // Numbers are generally safe but should be validated per use case
  } else if (Array.isArray(inputData)) {
    return inputData.map(item => sanitizeInputForApi(item));
  } else if (typeof inputData === 'object' && inputData !== null) {
    const sanitized: any = {};
    for (const [key, value] of Object.entries(inputData)) {
      // Sanitize the key too to prevent prototype pollution
      const sanitizedKey = validateStringInput(key, 100, /^[a-zA-Z0-9_-]+$/);
      if (sanitizedKey) {
        sanitized[sanitizedKey] = sanitizeInputForApi(value);
      }
    }
    return sanitized;
  }
  return inputData;
};