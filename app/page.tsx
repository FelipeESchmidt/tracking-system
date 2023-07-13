"use client";

import { Map } from "@/components/Map";
import { Header } from "@/components/Header";
import { TrackingInfoContextProvider } from "@/context/TrackingInfoContext";

import styles from "./page.module.css";

export const Home = () => {
  return (
    <main className={styles.main}>
      <TrackingInfoContextProvider>
        <Header />
        <Map />
      </TrackingInfoContextProvider>
    </main>
  );
};

export default Home;
