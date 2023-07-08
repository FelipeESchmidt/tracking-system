"use client";

import { theme } from "./constants";

export const useTheme = () => {
  const handleChangeTheme = (dark: boolean) => {
    const root: HTMLElement | null = document?.querySelector(":root");
    if (!root) return;

    const mode = dark ? "dark" : "light";
    Object.entries(theme[mode]).forEach(([variable, value]) =>
      root.style.setProperty(variable, value)
    );
  };

  return { handleChangeTheme };
};
