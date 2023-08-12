"use client";

import React, { useEffect, useState } from "react";

import { useTrackingInfo } from "@/context/TrackingInfoContext";

import { Icon } from "../Icon";
import styles from "./table.module.css";

export const Table = () => {
  const [isClient, setIsClient] = useState(false);
  const { info } = useTrackingInfo();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <></>;

  return (
    <div className={styles.table}>
      {info.events.map((item, index) => (
        <div key={index} className={styles.table_item}>
          <div className={styles.main_info}>
            <span className={styles.index}>#{index}</span>
            <div className={styles.icon} data-hasgone={!!item.data}>
              <Icon i="local_shipping" />
            </div>
            <span className={styles.city}>{item.city}</span>
          </div>
          <div className={styles.secondary_info}>
            <div className={styles.texts}>
              {item.texts.map((text, index) => (
                <span key={`text-${index}`} className={styles.text}>
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
