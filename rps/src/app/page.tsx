"use client";
import Image from "next/image";
import styles from "./page.module.css";
import SelectRPS from "@/components/SelectRPS";
import RPSIcon from "@/components/RPSIcon";
import Rules from "@/components/Rules";
import { useCallback, useState } from "react";

export default function Home() {
  const [isRulesOpen, setIsRuleOpen] = useState<boolean>(false);

  const handleCloseModal = useCallback(() => {
    setIsRuleOpen(false);
  }, []);

  const handleOpenModal = () => {
    setIsRuleOpen(true);
  };
  return (
    <>
      <main>
        <div className={styles.main}>
          <div className={styles.paddedLayout}>
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

            <SelectRPS></SelectRPS>
          </div>
          <div className={styles.buttonBox}>
            <button className={styles.rulesButton} onClick={handleOpenModal}>
              <p>RULES</p>
            </button>
          </div>
        </div>
        {isRulesOpen && <Rules handleClose={handleCloseModal}></Rules>}
      </main>
    </>
  );
}
