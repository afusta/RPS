import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.scoreTitleBox}>
        <p className={styles.rpsTitle}>
          ROCK
          <br />
          PAPER
          <br />
          SCISSORS
        </p>
        <div className={styles.scoreBox}>
          <p className={styles.scoreLabel}>SCORE</p>
          <p className={styles.score}>12</p>
        </div>
      </div>
    </main>
  );
}
