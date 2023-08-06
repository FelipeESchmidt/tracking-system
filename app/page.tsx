"use client";

import React from "react";
import { Header } from "@/components/Header";
import { TrackingInfo } from "@/components/TrackingInfo";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { TrackingInfoContextProvider } from "@/context/TrackingInfoContext";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <TrackingInfoContextProvider>
        <ThemeContextProvider>
          <Header />
          <TrackingInfo />
        </ThemeContextProvider>
      </TrackingInfoContextProvider>
    </main>
  );
}
