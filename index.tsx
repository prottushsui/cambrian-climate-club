/// <reference types="vite/client" />

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './src/ErrorBoundary';
import './index.css';

// Preserve bookmarks shared before the migration from HashRouter to BrowserRouter.
if (window.location.hash.startsWith('#/')) {
  const legacyRouteUrl = new URL(
    window.location.hash.slice(1),
    window.location.origin,
  );
  const currentUrl = new URL(window.location.href);
  currentUrl.searchParams.forEach((value, key) => {
    if (!legacyRouteUrl.searchParams.has(key)) {
      legacyRouteUrl.searchParams.append(key, value);
    }
  });
  window.history.replaceState(
    window.history.state,
    '',
    `${legacyRouteUrl.pathname}${legacyRouteUrl.search}${legacyRouteUrl.hash}`,
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Offline fallback is available in production after the first successful visit.
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    void navigator.serviceWorker.register('/sw.js').catch((error: unknown) => {
      console.warn('Offline support could not be registered', error);
    });
  });
}
