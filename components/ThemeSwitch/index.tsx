"use client";

import React from "react";
import { useTheme } from "@/hooks/useTheme";

import { Icon } from "../Icon";
import styles from "./theme_switch.module.css";

export const ThemeSwitch = () => {
  const { handleChangeTheme } = useTheme();
  const [dark, setDark] = React.useState(true);

  const handleChangeMode = () => {
    setDark((prev) => !prev);
  };

  React.useEffect(() => {
    handleChangeTheme(dark);
  }, [dark, handleChangeTheme]);

  return (
    <div onClick={handleChangeMode} className={styles.container}>
      {dark ? <Icon i="mode_night" /> : <Icon i="lightbulb" />}
    </div>
  );
};
