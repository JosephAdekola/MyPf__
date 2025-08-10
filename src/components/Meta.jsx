import { useEffect } from "react";

/**
 * Meta component - lightweight alternative to react-helmet-async
 * Works in React 19 without dependency conflicts.
 */
export default function Meta({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl
}) {
  useEffect(() => {
    // Update document title
    if (title) document.title = title;

    // Function to update or create meta tags
    const updateTag = (selector, attr, value) => {
      if (!value) return;
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        const match = selector.match(/\[(.*?)="(.*?)"\]/);
        if (match) tag.setAttribute(match[1], match[2]);
        document.head.appendChild(tag);
      }
      tag.setAttribute(attr, value);
    };

    // Standard description
    updateTag('meta[name="description"]', "content", description);

    // Open Graph
    updateTag('meta[property="og:title"]', "content", ogTitle || title);
    updateTag('meta[property="og:description"]', "content", ogDescription || description);
    updateTag('meta[property="og:image"]', "content", ogImage);
    updateTag('meta[property="og:url"]', "content", ogUrl || window.location.href);

  }, [title, description, ogTitle, ogDescription, ogImage, ogUrl]);

  return null;
}
