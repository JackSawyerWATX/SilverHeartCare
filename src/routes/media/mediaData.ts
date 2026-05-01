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
    url: "https://indoamerican-news.com/community-organizations-help-houstonians-recover-from-deep-freeze/",
    linkText: "Read Article"
  },
  {
    id: "fort-bend-star-2021-09-2021",
    title: "Charity Fun Run Benefits Seniors' Health, Well-Being",
    description: "Fort Bend Star - December 9, 2021",
    url: "https://www.fortbendstar.com/health/charity-fun-run-benefits-seniors-health-well-being/article_9f71efa8-5923-11ec-9b06-0bdf722e0cda.html",
    linkText: "Read Article" // optional, defaults to "Visit"
  },
  {
    id: "indo-american-news-2021-12-10",
    title: "Raghav Singh’s ‘Silver Heart Care’ Holds Second Annual Charity Run",
    description: "Indo American News - December 10, 2021",
    url: "https://www.indoamerican-news.com/raghav-singhs-silver-heart-care-holds-second-annual-charity-run/",
    linkText: "Read Article" // optional, defaults to "Visit"
  },
  {
    id: "fort-bend-independent-2024-07-23",
    title: "Silver Heart Cares To Provide Hurricane Disaster Relief For Seniors",
    description: "Fort Bend Independent - July 23, 2024",
    url: "https://fbindependent.com/fort-bend-independent-p16158-1.htm",
    linkText: "Read Article" // optional, defaults to "Visit"
  },
  {
    id: "indo-american-news-2025-01-11",
    title: "Silver Heart Care: A Youthful Pact to Provide Care for Older Generations",
    description: "Indo American News - January 11, 2025",
    url: "https://www.indoamerican-news.com/silver-heart-care-a-youthful-pact-to-provide-care-for-older-generations/",
    linkText: "Read Article" // optional, defaults to "Visit"
  },
  {
    id: "indo-american-news-2025-04-2025",
    title: "Silver Heart Care (SHC) hosts it’s 5th Annual 5K/10K Charity Run.",
    description: "Indo American News - April 13, 2025",
    url: "https://www.indoamerican-news.com/silver-heart-care-shc-hosts-its-5th-annual-5k-10k-charity-run/",
    linkText: "Read Article" // optional, defaults to "Visit"
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
