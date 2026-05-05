/**
 * useDropdownMenu Hook
 * Single Responsibility: Dropdown state management with auto-close timeout
 * Open/Closed: Reusable in any dropdown component
 */

import { useState, useCallback, useRef, useEffect } from "react";

export interface UseDropdownMenuReturn {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  toggle: () => void;
  open: () => void;
  close: () => void;
  closeAfterDelay: () => void;
  cancelClose: () => void;
  containerRef: React.RefObject<HTMLDivElement>;
}

/**
 * Hook for managing dropdown menu state with auto-close timeout
 * @param initialOpen - Initial open state (default: false)
 * @param closeDelayMs - Delay before closing after mouse leave (default: 1000ms)
 */
export function useDropdownMenu(
  initialOpen = false,
  closeDelayMs = 1000
): UseDropdownMenuReturn {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const cancelTimeout = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const open = useCallback(() => {
    cancelTimeout();
    setIsOpen(true);
  }, [cancelTimeout]);

  const close = useCallback(() => {
    cancelTimeout();
    setIsOpen(false);
  }, [cancelTimeout]);

  const closeAfterDelay = useCallback(() => {
    cancelTimeout();
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, closeDelayMs);
  }, [closeDelayMs, cancelTimeout]);

  const cancelClose = useCallback(() => {
    cancelTimeout();
  }, [cancelTimeout]);

  // Close menu if clicking outside container
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if click is inside container
      if (containerRef.current && containerRef.current.contains(target)) {
        return;
      }

      // Check if click is on any open dropdown menu (Radix portal)
      const allMenus = document.querySelectorAll('[role="menu"]');
      let isInsideMenu = false;
      
      allMenus.forEach((menu) => {
        if ((menu as HTMLElement).contains(target)) {
          isInsideMenu = true;
        }
      });

      if (!isInsideMenu) {
        close();
      }
    };

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [isOpen, close]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cancelTimeout();
    };
  }, [cancelTimeout]);

  return {
    isOpen,
    setIsOpen,
    toggle,
    open,
    close,
    closeAfterDelay,
    cancelClose,
    containerRef,
  };
}
