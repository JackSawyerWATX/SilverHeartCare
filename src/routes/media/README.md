/**
 * Media Module
 * File Structure:
 * - mediaTypes.ts: Type definitions (interface only)
 * - mediaData.ts: Data storage and management
 * - useMediaItems.ts: Custom hook for data fetching (abstraction layer)
 * - MediaItemCard.tsx: Single media item display component
 * - MediaList.tsx: List of media items component
 * - MediaPage.tsx: Page orchestration
 *
 * To add new media:
 * 1. Update mediaData.ts with new items
 * 2. No component changes needed - hook handles data retrieval
 *
 * To change data source (e.g., from static to API):
 * 1. Modify only useMediaItems.ts
 * 2. Components remain unchanged
 */
