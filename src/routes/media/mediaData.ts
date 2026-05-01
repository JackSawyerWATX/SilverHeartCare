/**
 * Media Data
 * 
 * Single Responsibility: Store media content
 * Open/Closed Principle: Easily add new items without modifying components
 * 
 * To add new media items:
 * 1. Add a new object to the mediaItems array
 * 2. All components automatically pick up the new data via the hook
 */

import { MediaItem } from "./mediaTypes";

export const mediaItems: MediaItem[] = [
  {
    id: "indo-american-news-2021-02-24",
    title: "Community Organizations Help Houstonians Recover from Deep Freeze",
    description: "Indo American News - February 24, 2021",
    url: "#",
    linkText: "Read Article"
  }
  // Add more media items here with the following structure:
  // {
  //   id: "unique-id",
  //   title: "Media Title",
  //   description: "Description of the media content",
  //   url: "https://example.com",
  //   linkText: "View Media" // optional, defaults to "Visit"
  // }
];
