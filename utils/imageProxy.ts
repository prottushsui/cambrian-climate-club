/**
 * Creates a proxy URL for images to improve loading and handle potential CORS issues
 * @param url The original image URL
 * @returns A proxied image URL using weserv.nl
 */
export const createImageProxyUrl = (url: string): string => {
  if (!url) return url;
  
  try {
    // Remove protocol and handle the URL properly
    const cleanUrl = url.replace(/^https?:\/\//, '');
    return `https://images.weserv.nl/?url=${encodeURIComponent(cleanUrl)}`;
  } catch (error) {
    console.warn('Error creating image proxy URL:', error);
    return url; // Return original URL if proxy creation fails
  }
};

/**
 * Validates if a URL is a valid image URL
 * @param url The URL to validate
 * @returns Boolean indicating if the URL is valid
 */
export const isValidImageUrl = (url: string): boolean => {
  if (!url) return false;
  
  try {
    const parsed = new URL(url);
    return /\.(jpeg|jpg|gif|png|webp|bmp|svg)$/i.test(parsed.pathname);
  } catch {
    return false;
  }
};