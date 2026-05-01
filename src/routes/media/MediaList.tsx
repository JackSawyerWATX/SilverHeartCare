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
    <div className="flex flex-col gap-8 mb-12">
      {items.map((item) => (
        <MediaItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
