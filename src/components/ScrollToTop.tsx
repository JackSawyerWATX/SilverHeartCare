import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * ScrollToTop Component
 * Automatically scrolls to the top of the page when route changes
 * Uses requestAnimationFrame for reliable scroll timing
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use requestAnimationFrame to ensure scroll happens after render
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Schedule scroll on next animation frame
    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToTop);
    });
  }, [pathname]);

  return null;
}
