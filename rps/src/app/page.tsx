"use client";
import Image from "next/image";
import styles from "./page.module.css";
import SelectRPS from "@/components/SelectRPS";
import RPSIcon from "@/components/RPSIcon";
import Rules from "@/components/Rules";
import { useCallback, useState } from "react";
import { RPSType } from "@/utils/types";
import Result from "@/components/Result";
import { getScoreValueLocalStorage } from "@/utils/utils";

export default function Home() {
  const [isRulesOpen, setIsRuleOpen] = useState<boolean>(false);
  const [playerRPS, setPlayerRPS] = useState<RPSType | undefined>(undefined);
  const [score, setScore] = useState<number>(getScoreValueLocalStorage());

  const handleCloseModal = useCallback(() => {
    setIsRuleOpen(false);
  }, []);

  const handleOpenModal = () => {
    setIsRuleOpen(true);
  };

  const handlePlay = (playerType: RPSType) => {
    setPlayerRPS(playerType);
  };

  const handlePlayAgain = () => {
    setPlayerRPS(undefined);
  };

  const handleIncrementScore = () => {
    setScore(score + 1);
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
                <p className={styles.score}>{`${score}`}</p>
              </div>
            </div>

            {playerRPS ? (
              <Result
                handleIncrementScore={handleIncrementScore}
                handlePlayAgain={handlePlayAgain}
                playerType={playerRPS}
              ></Result>
            ) : (
              <SelectRPS handlePlay={handlePlay}></SelectRPS>
            )}
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
