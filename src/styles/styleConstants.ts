/**
 * Style Constants
 * Open/Closed: All styling centralized, components extend without modification
 * Single Responsibility: Only styling constants, no business logic
 */

export const STYLES = {
  /**
   * Page title styling - used across all page headers
   */
  PAGE_TITLE: {
    fontFamily: "Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif",
    color: "#3b82f6",
    borderBottom: "4px solid #3b82f6",
    paddingBottom: "8px",
  } as const,

  /**
   * Silver background - used across all pages
   */
  SILVER_GRADIENT: {
    background: "#f3f4f6",
  } as const,

  /**
   * Glass panel - semi-transparent overlay
   */
  GLASS_PANEL: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(10px)",
    borderRadius: "8px",
    padding: "24px",
  } as const,

  /**
   * Button styles
   */
  BUTTON_PRIMARY: {
    backgroundColor: "#3b82f6",
    color: "white",
    padding: "12px 24px",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    border: "none",
    transition: "background-color 0.2s",
  } as const,

  BUTTON_SECONDARY: {
    backgroundColor: "#e5e7eb",
    color: "#1f2937",
    padding: "12px 24px",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    border: "none",
    transition: "background-color 0.2s",
  } as const,

  /**
   * Form input styles
   */
  INPUT: {
    padding: "10px 12px",
    fontSize: "14px",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    fontFamily: "inherit",
  } as const,

  /**
   * Spacing utilities
   */
  SPACING: {
    XS: "4px",
    SM: "8px",
    MD: "16px",
    LG: "24px",
    XL: "32px",
    XXL: "48px",
  } as const,

  /**
   * Z-index scale
   */
  ZINDEX: {
    DROPDOWN: 100,
    MODAL: 1000,
    TOAST: 10000,
  } as const,

  /**
   * Colors palette
   */
  COLORS: {
    PRIMARY: "#3b82f6",
    SECONDARY: "#6b7280",
    SUCCESS: "#10b981",
    ERROR: "#ef4444",
    WARNING: "#f59e0b",
    INFO: "#06b6d4",
    BACKGROUND: "#f9fafb",
    SURFACE: "#ffffff",
    BORDER: "#e5e7eb",
  } as const,
};

/**
 * Type-safe access to style constants
 */
export type StyleKey = keyof typeof STYLES;
export type ColorKey = keyof typeof STYLES.COLORS;
