// Environment configuration for accessing API keys
export const env = {
  // Google API Key - will be loaded from GitHub environment variables
  GOOGLE_API_KEY: import.meta.env.VITE_GOOGLE_API_KEY || process.env.GOOGLE_API_KEY,
  
  // Other environment variables can be added here
  NODE_ENV: import.meta.env.MODE || 'development',
  
  // Helper function to check if API key is available
  hasGoogleApiKey: () => Boolean(import.meta.env.VITE_GOOGLE_API_KEY || process.env.GOOGLE_API_KEY),
};

// Development warning if API key is missing
if (!env.hasGoogleApiKey() && env.NODE_ENV === 'development') {
  console.warn('🔑 Google API Key not found. Please set VITE_GOOGLE_API_KEY in your environment variables.');
}