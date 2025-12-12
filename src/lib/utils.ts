// Mock implementation for cn function
export function cn(...inputs: any[]) {
  // Simple implementation that returns the classes as a string
  return inputs
    .flat()
    .filter(Boolean)
    .map(item => typeof item === 'object' ? Object.entries(item).filter(([key, value]) => value).map(([key]) => key).join(' ') : item)
    .filter(Boolean)
    .join(' ')
    .trim()
}