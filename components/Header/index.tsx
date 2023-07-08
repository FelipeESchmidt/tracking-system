import "material-icons/iconfont/material-icons.css";

import { HeaderInput } from "../HeaderInput";
import { Icon } from "../Icon";

import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_items}>
        <h1>Tracking System</h1>
        <HeaderInput />
        <Icon i="mode_night" />
      </div>
    </header>
  );
};
