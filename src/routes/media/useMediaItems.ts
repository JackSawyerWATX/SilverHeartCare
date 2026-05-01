/**
 * useMediaItems Hook
 * 
 * Single Responsibility: Manage media data retrieval
 * 
 * This hook serves as an abstraction layer (Dependency Inversion Principle)
 * allowing data sources to change without affecting components.
 * 
 * Currently uses static data, but can be extended to:
 * - Fetch from API
 * - Fetch from database
 * - Fetch from CMS
 * - Filter/sort data
 */

import { useEffect, useState } from "react";
import { MediaItem } from "./mediaTypes";
import { mediaItems } from "./mediaData";

interface UseMediaItemsReturn {
  items: MediaItem[];
  isLoading: boolean;
  error: Error | null;
}

export function useMediaItems(): UseMediaItemsReturn {
  const [items, setItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      // Simulate async data loading
      // This allows easy migration to API/database calls
      setIsLoading(true);
      setItems(mediaItems);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to load media"));
      setItems([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { items, isLoading, error };
}
