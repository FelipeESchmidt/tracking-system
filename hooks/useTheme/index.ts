"use client";

import React from "react";

import { theme } from "./constants";

export const useTheme = () => {
  const [dark, setDark] = React.useState(true);

  const handleChangeTheme = (dark: boolean) => {
    const root: HTMLElement | null = document?.querySelector(":root");
    if (!root) return;

    const mode = dark ? "dark" : "light";
    Object.entries(theme[mode]).forEach(([variable, value]) =>
      root.style.setProperty(variable, value)
    );
  };

  const handleChangeMode = () => {
    setDark((prev) => !prev);
  };

  React.useEffect(() => {
    handleChangeTheme(dark);
  }, [dark]);

  return { handleChangeTheme, handleChangeMode, isDark: dark };
};
