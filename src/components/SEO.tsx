/**
 * SEO Helper Component
 * Updates document head with meta tags for each page
 */

import { useEffect } from "react";
import { PageMetadata } from "@/utils/seoMetadata";

interface SEOProps {
  metadata: PageMetadata;
  structuredData?: object;
}

export const SEO: React.FC<SEOProps> = ({ metadata, structuredData }) => {
  useEffect(() => {
    // Update page title
    document.title = metadata.title;

    // Update or create meta tags
    updateMetaTag("description", metadata.description);
    updateMetaTag("keywords", metadata.keywords.join(", "));

    // Open Graph tags
    if (metadata.ogTitle) {
      updateMetaTag("og:title", metadata.ogTitle, "property");
    }
    if (metadata.ogDescription) {
      updateMetaTag("og:description", metadata.ogDescription, "property");
    }
    if (metadata.ogImage) {
      updateMetaTag("og:image", metadata.ogImage, "property");
    }

    // Canonical URL
    if (metadata.canonical) {
      const link = document.querySelector("link[rel='canonical']") || document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", metadata.canonical);
      if (!document.querySelector("link[rel='canonical']")) {
        document.head.appendChild(link);
      }
    }

    // Add structured data if provided
    if (structuredData) {
      addStructuredData(structuredData);
    }
  }, [metadata, structuredData]);

  return null;
};

/**
 * Helper to update or create meta tags
 */
function updateMetaTag(
  name: string,
  content: string,
  attribute: "name" | "property" = "name"
): void {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
}

/**
 * Helper to add JSON-LD structured data
 */
function addStructuredData(data: object): void {
  // Remove existing structured data script if present
  const existingScript = document.querySelector('script[type="application/ld+json"]');
  if (existingScript) {
    existingScript.remove();
  }

  // Create and add new script
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.innerHTML = JSON.stringify(data);
  document.head.appendChild(script);
}

export default SEO;
