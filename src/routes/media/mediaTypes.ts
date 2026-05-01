/**
 * Media Types
 * 
 * Single Responsibility: Define the data structure
 * Interface Segregation: Only includes properties needed for media items
 */

export interface MediaItem {
  id: string;
  title: string;
  description: string;
  url: string;
  linkText?: string;
}
