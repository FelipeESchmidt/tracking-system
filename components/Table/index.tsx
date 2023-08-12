"use client";

import React, { useEffect, useState } from "react";

import { IBetteredEventProps } from "@/types";
import { useTrackingInfo } from "@/context/TrackingInfoContext";

import { Icon } from "../Icon";
import styles from "./table.module.css";
import { capitalize } from "@/utils";

export const Table = () => {
  const [isClient, setIsClient] = useState(false);
  const { info } = useTrackingInfo();

  const isAirplaneIcon = (
    item: IBetteredEventProps,
    nextItem?: IBetteredEventProps
  ) => {
    if (item.local === "País") return true;

    return !!nextItem;
  };

  const getShippingIcon = (item: IBetteredEventProps, index: number) => {
    const nextIndex = index + 1;

    const isAirplane = isAirplaneIcon(
      item,
      info.events[nextIndex] as IBetteredEventProps
    );

    return isAirplane ? "flight" : "local_shipping";
  };

  const getCompleteIcon = (item: IBetteredEventProps) => {
    if (!!item.data) return "check";
    return "more_time";
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <></>;

  return (
    <div className={styles.table}>
      {info.events.map((item, index) => (
        <div key={item.cidade} className={styles.table_item}>
          <span className={styles.index}>#{index}</span>
          <div className={styles.icon} data-hasgone={!!item.data}>
            <Icon i={getShippingIcon(item, index)} />
          </div>
          <div className={styles.cities}>
            {item.texts.map((text, index) => (
              <span key={`text-${index}`}>{text}</span>
            ))}
          </div>
          <div className={styles.icon_complete} data-hasgone={!!item.data}>
            <Icon i={getCompleteIcon(item)} />
          </div>
        </div>
      ))}
    </div>
  );
};
