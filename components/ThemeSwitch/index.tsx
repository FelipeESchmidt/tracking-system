"use client";

import React from "react";
import { useTheme } from "@/hooks/useTheme";

import { Icon } from "../Icon";
import styles from "./theme_switch.module.css";

export const ThemeSwitch = () => {
  const { handleChangeMode, isDark } = useTheme();

  return (
    <div onClick={handleChangeMode} className={styles.container}>
      {isDark ? <Icon i="mode_night" /> : <Icon i="lightbulb" />}
    </div>
  );
};
