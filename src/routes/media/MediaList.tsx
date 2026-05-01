/**
 * MediaList Component
 * 
 * Single Responsibility: Render a list of media items
 * 
 * Props are segregated (Interface Segregation Principle):
 * - Only receives items it needs to display
 * - No knowledge of where data comes from
 */

import { MediaItem } from "./mediaTypes";
import { MediaItemCard } from "./MediaItemCard";

interface MediaListProps {
  items: MediaItem[];
  emptyMessage?: string;
}

export function MediaList({ items, emptyMessage = "No media items available." }: MediaListProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-600">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {items.map((item) => (
        <MediaItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
