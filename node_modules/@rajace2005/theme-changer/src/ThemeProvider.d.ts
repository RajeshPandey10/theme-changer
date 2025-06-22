import React from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export declare const ThemeProvider: React.FC<{children: React.ReactNode}>;
export declare const useTheme: () => ThemeContextType;
