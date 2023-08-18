"use client";

import React, { useState } from "react";

import { IBetteredEventProps } from "@/types";

import { Icon } from "../Icon";
import styles from "./table_item.module.css";

export const TableItem = (item: IBetteredEventProps & { index: number }) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((current) => !current);
  };

  console.log({ open });

  return (
    <div className={styles.table_item} data-open={!!open}>
      <div className={styles.main_info}>
        <span className={styles.index}>#{item.index}</span>
        <div className={styles.icon} data-hasgone={!!item.data}>
          <Icon i="local_shipping" />
        </div>
        <span className={styles.city}>{item.city}</span>
        <button
          className={styles.chevron}
          data-open={!!open}
          onClick={toggleOpen}
        >
          <Icon i="expand_more" />
        </button>
      </div>
      <div className={styles.secondary_info} data-open={!!open}>
        <div className={styles.texts}>
          {item.texts.map((text, index) => (
            <span key={`text-${index}`} className={styles.text}>
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
