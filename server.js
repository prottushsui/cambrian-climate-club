// Simple Express server to serve the React/Vite application with security hardening
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();

// Security middleware
// Helmet helps secure Express apps by setting various HTTP headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "fonts.googleapis.com", "cdn.jsdelivr.net"],
      fontSrc: ["'self'", "fonts.gstatic.com", "data:", "cdn.jsdelivr.net"],
      imgSrc: ["'self'", "data:", "blob:", "https:"],
      scriptSrc: ["'self'", "cdn.jsdelivr.net"],
      connectSrc: ["'self'", "https://*.analytics.google.com"], // Allow Google Analytics if needed
    },
  },
  hsts: {
    maxAge: 31536000, // 1 year in seconds
    includeSubDomains: true,
    preload: true
  },
  frameguard: {
    action: 'DENY'
  },
  referrerPolicy: {
    policy: 'strict-origin-when-cross-origin'
  }
}));

// CORS configuration
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || [process.env.HOSTNAME || 'localhost'],
  credentials: true,
  optionsSuccessStatus: 200
}));

// Rate limiting to prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(limiter);

// Additional security headers
app.use((req, res, next) => {
  // Prevent MIME-type sniffing
  res.setHeader('X-Content-Type-Options', 'nosniff');
  
  // Prevent loading content from untrusted sources
  res.setHeader('X-Frame-Options', 'DENY');
  
  // Enable XSS protection
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  next();
});

// Middleware to validate API requests
const validateApiRequest = (req, res, next) => {
  // Basic validation to ensure API requests are legitimate
  if (req.path.startsWith('/api/') && !req.headers['user-agent']) {
    return res.status(400).json({ error: 'Missing User-Agent header' });
  }
  
  next();
};

app.use(validateApiRequest);

// API routes for sensitive data
app.get('/api/sensitive-data', (req, res) => {
  // This is a placeholder for sensitive data that shouldn't be bundled with the client
  // In a real implementation, this would require authentication
  const sensitiveData = {
    // Only expose data that is truly public
    publicInfo: {
      totalMembers: 37, // This is derived from the data, not exposing individual IDs
      foundingYear: 2023,
      mission: 'Promoting sustainability and climate awareness'
    },
    // Include a timestamp to show this is dynamically generated
    timestamp: new Date().toISOString()
  };
  
  res.json(sensitiveData);
});

// Serve static files from the dist folder
app.use(express.static(path.join(__dirname, 'dist'), {
  // Prevent directory traversal attacks by disabling dotfiles
  dotfiles: 'ignore',
  // Set cache control for better performance and security
  setHeaders: (res, filePath) => {
    // Don't cache HTML files to ensure fresh content
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
  }
}));

// Handle all other routes by serving index.html
app.get('*', (req, res) => {
  // Validate the requested path to prevent path traversal attacks
  const requestedPath = req.path;
  if (requestedPath.includes('../') || requestedPath.includes('..\\')) {
    res.status(400).send('Invalid path');
    return;
  }
  
  res.sendFile(path.join(__dirname, 'dist', 'index.html'), {
    headers: {
      'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;"
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Secure server is running on port ${PORT}`);
  console.log(`Security features enabled: Helmet, CORS, Rate Limiting`);
  console.log(`API endpoint available at /api/sensitive-data`);
});