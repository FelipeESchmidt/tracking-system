"use client";

import { theme } from "./constants";

export const useTheme = () => {
  const root: HTMLElement | null = document.querySelector(":root");

  const handleChangeTheme = (dark: boolean) => {
    if (!root) return;
    const mode = dark ? "dark" : "light";
    Object.entries(theme[mode]).forEach(([variable, value]) =>
      root.style.setProperty(variable, value)
    );
  };

  return { handleChangeTheme };
};
