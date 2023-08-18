"use client";

import React from "react";

import { theme } from "./constants";
import { useThemeContext, useThemeDispatch } from "@/context/ThemeContext";
import { Actions } from "@/reducers/themeReducer/actions";

export const useTheme = () => {
  const { dark } = useThemeContext();
  const { dispatch } = useThemeDispatch();

  const handleChangeTheme = (dark: boolean) => {
    const root: HTMLElement | null = document?.querySelector(":root");
    if (!root) return;

    const mode = dark ? "dark" : "light";
    Object.entries(theme[mode]).forEach(([variable, value]) =>
      root.style.setProperty(variable, value)
    );
  };

  const handleChangeMode = () => {
    dispatch({ type: Actions.SET, dark: !dark });
  };

  React.useEffect(() => {
    handleChangeTheme(dark);
  }, [dark]);

  return { handleChangeTheme, handleChangeMode, isDark: dark };
};
