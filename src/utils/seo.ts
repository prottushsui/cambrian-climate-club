/**
 * SEO utilities and helpers
 * 
 * This file contains utilities to prepare the application for SEO enhancements
 * and meta tag management. These functions can be used to set up dynamic meta
 * tags, structured data, and other SEO-related features.
 */

import { SEO_CONFIG } from './constants';
import { sanitizeHtml } from './security';
import { validateStringInput } from './validation';

/** 
 * Updates the document title with a new title, while preserving the site name
 * @param title - The new title to set
 */
export const updateDocumentTitle = (title: string) => {
  // Sanitize the title to prevent injection
  const sanitizedTitle = validateStringInput(title, 120);
  document.title = sanitizedTitle ? `${sanitizedTitle} | ${SEO_CONFIG.defaultTitle}` : SEO_CONFIG.defaultTitle;
};

/**
 * Sets meta tags for the current page
 * @param metaTags - Object containing meta tag values
 */
export const setMetaTags = (metaTags: {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}) => {
  // Update title
  if (metaTags.title) {
    // Sanitize the title
    const sanitizedTitle = validateStringInput(metaTags.title, 120);
    updateDocumentTitle(sanitizedTitle);
  }

  // Update or create description meta tag
  let descriptionMeta = document.querySelector('meta[name="description"]');
  if (metaTags.description) {
    // Sanitize the description
    const sanitizedDescription = validateStringInput(metaTags.description, 320);
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute('content', sanitizedDescription);
  }

  // Update or create keywords meta tag
  if (metaTags.keywords) {
    // Sanitize keywords
    const sanitizedKeywords = validateStringInput(metaTags.keywords, 200);
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', sanitizedKeywords);
  }

  // Update or create canonical URL
  if (metaTags.canonicalUrl) {
    // Validate the URL
    const url = new URL(metaTags.canonicalUrl, window.location.origin).toString();
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', url);
  }

  // Open Graph tags
  const ogTags = [
    { property: 'og:title', content: metaTags.ogTitle || metaTags.title },
    { property: 'og:description', content: metaTags.ogDescription || metaTags.description },
    { property: 'og:image', content: metaTags.ogImage },
    { property: 'og:url', content: metaTags.ogUrl },
    { property: 'og:type', content: metaTags.ogType || 'website' },
  ];

  ogTags.forEach(tag => {
    if (tag.content) {
      // Sanitize content before setting
      const sanitizedContent = validateStringInput(tag.content as string, 500);
      let ogMeta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement('meta');
        ogMeta.setAttribute('property', tag.property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute('content', sanitizedContent);
    }
  });

  // Twitter Card tags
  const twitterTags = [
    { name: 'twitter:card', content: metaTags.twitterCard || 'summary_large_image' },
    { name: 'twitter:title', content: metaTags.twitterTitle || metaTags.title },
    { name: 'twitter:description', content: metaTags.twitterDescription || metaTags.description },
    { name: 'twitter:image', content: metaTags.twitterImage || metaTags.ogImage },
  ];

  twitterTags.forEach(tag => {
    if (tag.content) {
      // Sanitize content before setting
      const sanitizedContent = validateStringInput(tag.content as string, 500);
      let twitterMeta = document.querySelector(`meta[name="${tag.name}"]`);
      if (!twitterMeta) {
        twitterMeta = document.createElement('meta');
        twitterMeta.setAttribute('name', tag.name);
        document.head.appendChild(twitterMeta);
      }
      twitterMeta.setAttribute('content', sanitizedContent);
    }
  });
};

/**
 * Sets default meta tags for the application
 */
export const setDefaultMetaTags = () => {
  setMetaTags({
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    keywords: SEO_CONFIG.defaultKeywords.join(', '),
  });
};

/**
 * Creates and adds JSON-LD structured data to the page
 * @param structuredData - The structured data object
 * @param id - Optional ID for the script tag
 */
export const addStructuredData = (structuredData: Record<string, any>, id?: string) => {
  // Remove existing structured data with the same ID if it exists
  if (id) {
    const existingScript = document.querySelector(`script[type="application/ld+json"][id="${id}"]`);
    if (existingScript) {
      existingScript.remove();
    }
  }

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(structuredData);
  
  if (id) {
    script.id = id;
  }
  
  document.head.appendChild(script);
};

/**
 * Creates organization structured data
 * @returns Organization structured data object
 */
export const createOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Cambrian Climate Club",
    "description": SEO_CONFIG.defaultDescription,
    "url": SEO_CONFIG.siteUrl,
    "logo": `${SEO_CONFIG.siteUrl}/images/Club logo.png`,
    "foundingDate": "2023",
    "sameAs": [
      // Add social media URLs when available
    ]
  };
};

/**
 * Creates website structured data
 * @returns Website structured data object
 */
export const createWebsiteStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SEO_CONFIG.defaultTitle,
    "url": SEO_CONFIG.siteUrl,
    "description": SEO_CONFIG.defaultDescription,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SEO_CONFIG.siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
};

/**
 * Updates SEO meta tags for a specific page
 * @param pageData - Page-specific SEO data
 */
export const updatePageSEO = (pageData: {
  title?: string;
  description?: string;
  path: string;
  structuredData?: Record<string, any>;
}) => {
  const fullUrl = `${SEO_CONFIG.siteUrl}${pageData.path}`;
  
  setMetaTags({
    title: pageData.title,
    description: pageData.description,
    canonicalUrl: fullUrl,
    ogTitle: pageData.title,
    ogDescription: pageData.description,
    ogUrl: fullUrl,
    ogType: 'website',
  });

  // Add page-specific structured data if provided
  if (pageData.structuredData) {
    addStructuredData(pageData.structuredData, `structured-data-${pageData.path.replace(/\//g, '-')}`);
  }
};

/**
 * Cleans up SEO-related elements when leaving a page
 * @param path - The path of the page being left
 */
export const cleanupPageSEO = (path: string) => {
  // Remove page-specific structured data
  const structuredDataId = `structured-data-${path.replace(/\//g, '-')}`;
  const structuredDataScript = document.querySelector(`script[type="application/ld+json"][id="${structuredDataId}"]`);
  if (structuredDataScript) {
    structuredDataScript.remove();
  }
};

// Initialize default meta tags when the module loads
if (typeof document !== 'undefined') {
  setDefaultMetaTags();
  
  // Add organization structured data to the homepage
  addStructuredData(createOrganizationStructuredData(), 'organization-structured-data');
  addStructuredData(createWebsiteStructuredData(), 'website-structured-data');
}