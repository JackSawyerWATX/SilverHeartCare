/**
 * Navigation Context
 * Dependency Inversion: Components don't depend on react-router directly
 * Components depend on navigation abstraction instead
 */

import React, { createContext, useContext } from "react";
import { useNavigate as useReactRouterNavigate } from "react-router";

export interface NavigationContextType {
  navigateTo: (path: string) => void;
  goBack: () => void;
  goForward: () => void;
}

const NavigationContext = createContext<NavigationContextType | null>(null);

/**
 * Provider component - wraps app with navigation context
 * Should be placed in main.tsx around <Routes>
 */
export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const navigate = useReactRouterNavigate();

  const value: NavigationContextType = {
    navigateTo: (path: string) => navigate(path),
    goBack: () => navigate(-1),
    goForward: () => navigate(1),
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

/**
 * Hook to use navigation context
 * Use this instead of useNavigate from react-router
 */
export function useNavigation(): NavigationContextType {
  const context = useContext(NavigationContext);

  if (!context) {
    throw new Error(
      "useNavigation must be used within NavigationProvider. " +
        "Wrap your app with <NavigationProvider> in main.tsx"
    );
  }

  return context;
}

// Re-export for convenience
export { NavigationContext };
