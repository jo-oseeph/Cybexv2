import { useEffect } from "react";

/**
 * SEO Component - Updates meta tags and title for each page
 * Usage: <SEO title="Page Title" description="Page description" />
 */
export const useSEO = ({
  title = "Cybex Tech - Professional Website Design & Development Services",
  description = "Professional website design, development, management, and security services for businesses in Kenya.",
  keywords = "",
  ogImage = "https://cybextech.co.ke/cybex.png",
  ogUrl = "https://cybextech.co.ke",
  type = "website",
  author = "Cybex Tech",
  noindex = false,
} = {}) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
    }

    // Update keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute("content", keywords);
      } else {
        metaKeywords = document.createElement("meta");
        metaKeywords.name = "keywords";
        metaKeywords.content = keywords;
        document.head.appendChild(metaKeywords);
      }
    }

    // Update robots
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute(
        "content",
        noindex
          ? "noindex, nofollow"
          : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
      );
    }

    // Update Open Graph
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:image", ogImage);
    updateMetaTag("property", "og:url", ogUrl);
    updateMetaTag("property", "og:type", type);

    // Update Twitter
    updateMetaTag("property", "twitter:title", title);
    updateMetaTag("property", "twitter:description", description);
    updateMetaTag("property", "twitter:image", ogImage);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.href = ogUrl;
    } else {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = ogUrl;
      document.head.appendChild(canonical);
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, [title, description, keywords, ogImage, ogUrl, type, author, noindex]);
};

/**
 * Helper function to update meta tags
 */
const updateMetaTag = (attribute, name, content) => {
  let tag = document.querySelector(`meta[${attribute}="${name}"]`);
  if (tag) {
    tag.setAttribute("content", content);
  } else {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, name);
    tag.setAttribute("content", content);
    document.head.appendChild(tag);
  }
};

/**
 * Schema.org Structured Data Generator
 */
export const generateSchemaMarkup = (type, data) => {
  let schema = {
    "@context": "https://schema.org",
  };

  switch (type) {
    case "Organization":
      schema = {
        ...schema,
        "@type": "Organization",
        name: data.name || "Cybex Tech",
        url: data.url || "https://cybextech.co.ke",
        logo: data.logo || "https://cybextech.co.ke/cybex.png",
        description:
          data.description ||
          "Professional website design, development, management, and security services",
        sameAs: data.sameAs || [
          "https://twitter.com/cybex",
          "https://linkedin.com/company/cybex",
          "https://facebook.com/cybex",
          "https://instagram.com/cybex",
        ],
      };
      break;

    case "LocalBusiness":
      schema = {
        ...schema,
        "@type": "LocalBusiness",
        name: data.name || "Cybex Tech",
        description:
          data.description ||
          "Professional website design and development services",
        url: data.url || "https://cybextech.co.ke",
        telephone: data.phone || "",
        address: {
          "@type": "PostalAddress",
          streetAddress: data.streetAddress || "",
          addressLocality: data.city || "Nairobi",
          addressRegion: data.region || "Nairobi",
          postalCode: data.postalCode || "",
          addressCountry: data.country || "KE",
        },
      };
      break;

    case "Service":
      schema = {
        ...schema,
        "@type": "Service",
        name: data.name || "",
        description: data.description || "",
        provider: {
          "@type": "Organization",
          name: "Cybex Tech",
        },
        areaServed: data.areaServed || {
          "@type": "Country",
          name: "KE",
        },
      };
      break;

    case "BreadcrumbList":
      schema = {
        ...schema,
        "@type": "BreadcrumbList",
        itemListElement: data.items || [],
      };
      break;

    case "FAQPage":
      schema = {
        ...schema,
        "@type": "FAQPage",
        mainEntity: data.faqs || [],
      };
      break;

    default:
      return schema;
  }

  return schema;
};

/**
 * Insert Schema Markup in head
 */
export const useInsertSchemaMarkup = (schema, id = "schema-markup") => {
  useEffect(() => {
    let script = document.getElementById(id);
    if (script) {
      script.remove();
    }
    script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [schema, id]);
};

export default useSEO;
