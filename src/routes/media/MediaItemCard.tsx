/**
 * MediaItemCard Component
 * 
 * Single Responsibility: Render a single media item card
 * Interface Segregation: Props only include the media item
 * Liskov Substitution: Can be replaced with alternative card implementations
 */

import { MediaItem } from "./mediaTypes";

interface MediaItemCardProps {
  item: MediaItem;
}

export function MediaItemCard({ item }: MediaItemCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
      <p className="text-gray-600 mb-4">{item.description}</p>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        {item.linkText || "Visit"}
      </a>
    </div>
  );
}
