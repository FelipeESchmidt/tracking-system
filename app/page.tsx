import { Header } from "@/components/Header";
import { Map } from "@/components/Map";

import styles from "./page.module.css";

export const Home = () => {
  return (
    <main className={styles.main}>
      <Header />
      <Map />
    </main>
  );
};

export default Home;
