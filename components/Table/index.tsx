"use client";

import React, { useEffect, useMemo, useState } from "react";

import { ITrackingInfoCityWithCoordinatesProps } from "@/types";
import { useTrackingInfo } from "@/context/TrackingInfoContext";
import { cityByAcronym } from "@/services/api/appendCityByAcronym";

import { Icon } from "../Icon";
import styles from "./table.module.css";
import { capitalize } from "@/utils";

export const Table = () => {
  const [isClient, setIsClient] = useState(false);
  const { info } = useTrackingInfo();

  const reversedInfo = info.reverse();

  const isAirplaneIcon = (
    item: ITrackingInfoCityWithCoordinatesProps,
    nextItem?: ITrackingInfoCityWithCoordinatesProps
  ) => {
    if (item.country && item.country === cityByAcronym.NL(0).country)
      return true;

    if (!nextItem) return false;

    return item.country !== nextItem.country;
  };

  const getShippingIcon = (
    item: ITrackingInfoCityWithCoordinatesProps,
    index: number
  ) => {
    const nextIndex = index + 1;

    const isAirplane = isAirplaneIcon(item, reversedInfo[nextIndex]);

    return isAirplane ? "flight" : "local_shipping";
  };

  const getCompleteIcon = (item: ITrackingInfoCityWithCoordinatesProps) => {
    if (item.hasGone) return "check";
    return "more_time";
  };

  const getToText = (item?: ITrackingInfoCityWithCoordinatesProps) => {
    if (item) return item.city;

    return "Entrega";
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <></>;

  return (
    <div className={styles.table}>
      {reversedInfo.map((item, index) => (
        <div key={item.city} className={styles.table_item}>
          <span className={styles.index}>#{index}</span>
          <div className={styles.icon} data-hasgone={item.hasGone}>
            <Icon i={getShippingIcon(item, index)} />
          </div>
          <div className={styles.cities}>
            <span>De: {capitalize(item.city)}</span>
            <span>Para: {capitalize(getToText(reversedInfo[index + 1]))}</span>
          </div>
          <div className={styles.icon_complete} data-hasgone={item.hasGone}>
            <Icon i={getCompleteIcon(item)} />
          </div>
        </div>
      ))}
    </div>
  );
};
