"use client";

import React from "react";

import { MapWrapper } from "../MapWrapper";
import { Table } from "../Table";

import styles from "./tracking_info.module.css";

export const TrackingInfo = () => {
  return (
    <div className={styles.info_wrapper}>
      <div className={styles.table}>
        <Table />
      </div>
      <div className={styles.map}>
        <MapWrapper />
      </div>
    </div>
  );
};
