"use client";

import React, { useEffect, useState } from "react";

import { useTrackingInfo } from "@/context/TrackingInfoContext";

import { TableItem } from "../TableItem";
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
        <TableItem {...item} index={index} key={index} />
      ))}
    </div>
  );
};
