import React, { useEffect, useState } from "react";
import selectorStyles from "./Result.module.css";
import RPSIcon from "./RPSIcon";
import { RPSType, RPSResult } from "@/utils/types";
import PlayAgainButton from "./PlayAgainButton";
import { computeWinner } from "@/utils/utils";

interface Props {
  playerType: RPSType;
  handlePlayAgain: () => void;
  handleIncrementScore: () => void;
}

const Result: React.FC<Props> = ({
  playerType,
  handlePlayAgain,
  handleIncrementScore,
}) => {
  const [houseType, setHouseType] = useState<RPSType | undefined>(undefined);
  const [isResultLoading, setIsResultLoading] = useState<boolean>(false);
  const [result, setResult] = useState<RPSResult>(RPSResult.TIE);

  useEffect(() => {
    const possibleOutcomes = [RPSType.PAPER, RPSType.ROCK, RPSType.SCISSORS];
    const housePlay =
      possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
    setIsResultLoading(true);
    setTimeout(() => {
      setIsResultLoading(false);
      setHouseType(housePlay);
      const gameResult = computeWinner(playerType, housePlay);
      setResult(gameResult);
      if (gameResult === RPSResult.WIN) {
        handleIncrementScore();
      }
    }, 1000);
  }, []);

  return (
    <div className={selectorStyles.selectorContainer}>
      <div className={selectorStyles.selectorContainer2}>
        <p>YOU PICKED</p>
        <RPSIcon type={playerType}></RPSIcon>
      </div>

      <div className={selectorStyles.selectorContainer2}>
        {houseType && !isResultLoading && (
          <PlayAgainButton
            handlePlayAgain={handlePlayAgain}
            result={result}
          ></PlayAgainButton>
        )}
      </div>

      <div className={selectorStyles.selectorContainer2}>
        <p>THE HOUSE PICKED</p>
        {houseType ? (
          <RPSIcon type={houseType}></RPSIcon>
        ) : (
          <div
            style={{
              height: 220,
              width: 220,
              borderRadius: "220px",
              backgroundColor: "rgba(255,255,255,0.4)",
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Result;
