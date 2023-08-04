"use client";

import React from "react";
import { Header } from "@/components/Header";
import { MapWrapper } from "@/components/MapWrapper";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { TrackingInfoContextProvider } from "@/context/TrackingInfoContext";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <TrackingInfoContextProvider>
        <ThemeContextProvider>
          <Header />
          <MapWrapper />
        </ThemeContextProvider>
      </TrackingInfoContextProvider>
    </main>
  );
}
